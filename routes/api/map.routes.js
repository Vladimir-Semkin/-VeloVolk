const router = require('express').Router();
const Card = require('../../views/Card');

const { Map } = require('../../db/models');

router
  .route('/map')
  // read
  .get((req, res) => {
    const { user } = res.locals;
    Map.findAll({ where: { user_id: user.id }, raw: true })
      .then((allMaps) => res.json(allMaps))
      .catch((err) => res.json({ err: err.message }));
  })

  // create
  .post((req, res) => {
    const { name, pA, pB } = req.body;
    console.log(name, pA, pB);

    if (name && pA && pB && req.session.userId) {
      Map.create({ name, pA, pB, user_id: req.session.userId })
        .then((newMap) =>
          res.status(201).json({
            data: newMap,
            html: res.renderComponent(
              Card,
              { map: newMap },
              { htmlOnly: true }
            ),
            dataId: newMap.id
          })
        )
        .catch((err) => res.json({ err: err.message }));
    } else {
      res.status(400).json({ created: false });
    }
  });

router
  .route('/map/:id')

  // update
  .put((req, res) => {
    const { id } = req.params;
    const { name, phone } = req.body;

    User.update({ name, phone }, { where: { id }, raw: true, returning: true })
      .then(([_, [updatedUser]]) => res.json(updatedUser))
      .catch((err) => res.json({ err: err.message }));
  })

  // delete
  .delete((req, res) => {
    const { id } = req.params;

    User.destroy({ where: { id } }).then((deletedUser) =>
      deletedUser
        ? res.json({ deleted: true, id })
        : res.status(404).json({ deleted: false, id })
    );
  });

module.exports = router;
