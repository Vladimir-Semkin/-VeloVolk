const router = require("express").Router();
const { Map } = require("../../db/models");
const Home = require("../../views/Home");
router.route("/myTravel").get(async (req, res) => {
  const { user } = res.locals;
  const arr = await Map.findAll({ where: { user_id: user.id }, raw: true });
  console.log(arr);
  res.renderComponent(Home, { arrMaps: arr, authUser: user });
});

module.exports = router;
