const router = require('express').Router();
const Form = require('../../views/Form');
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
      if (candidate && (await bcrypt.compare(password, candidate.password))) {
        req.session.userId = candidate.id;
        res.redirect('/home');
      } else {
        res.status(400).json({ message: 'Неправильный пароль' });
      }
      const hashPassword = await bcrypt.hash(password, 10);
      const newUser = await User.create({ email, password: hashPassword });
      req.session.userId = newUser.id;
      res.status(201).json({ data: newUser });
    }
    else{
        res.status(400).json({ message: 'Введите логин и пароль!' })
    }
  });

module.exports = router;
