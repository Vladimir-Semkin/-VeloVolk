const router = require('express').Router();
const Home = require('../../views/Home');
const { Map } = require('../../db/models');

router.route('/home').get(async (req, res) => {
  const arr = await Map.findAll({ raw: true });
 
  res.renderComponent(Home, { arrMaps: arr });
});

module.exports = router;
