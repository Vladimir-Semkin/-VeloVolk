const router = require('express').Router();
const Home = require('../../views/Home');
const { Map } = require('../../db/models');

router.route('/home').get(async (req, res) => {
  const arr = await Map.findAll({ raw: true });
  const { user } = res.app.locals;

  res.renderComponent(Home, { arrMaps: arr, authUser: user });
});

module.exports = router;
