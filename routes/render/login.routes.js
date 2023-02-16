const router = require('express').Router();
const bcrypt = require('bcrypt');
const Form = require('../../views/Form');
const bcrypt = require('bcrypt');
const { User } = require('../../db/models');

router
  .route('/login')
  .get((req, res) => {
    res.renderComponent(Form, {});
  })
  .post(async (req, res) => {
    const { email, password } = req.body;
    if (email && password) {
      const candidate = await User.findOne({ where: { email }, raw: true });
      if (candidate) {
        if (candidate && (await bcrypt.compare(password, candidate.password))) {
          req.session.userId = candidate.id;
          res.json({ message: 'true' });
        } else {
          res.status(400).json({ message: 'Неправильный пароль' });
        }
      } else {
        const hashPassword = await bcrypt.hash(password, 10);
        const newUser = await User.create({ email, password: hashPassword });
        req.session.userId = newUser.id;
        res.status(201).json({ data: newUser, message: 'true' });
      }
    } else {
      res.status(400).json({ message: 'Введите логин и пароль!' });
    }
  });

router.route('/logout').get((req, res) => {
  req.session.destroy();
  res.app.locals.user = null;
  res.clearCookie('user_sid');
  res.redirect('/home');
});

module.exports = router;
