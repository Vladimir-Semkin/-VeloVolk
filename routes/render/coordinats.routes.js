const router = require('express').Router();

const { Map } = require('../../db/models');

router.route('/coordinats').get(async (req, res) => {
  const arr = await Map.findAll({ raw: true });
  res.json(arr);
});

module.exports = router;
