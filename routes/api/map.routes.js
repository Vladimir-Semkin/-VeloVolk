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
    const { user } = res.locals;
    if (name && pA && pB && req.session.userId) {
      Map.create({ name, pA, pB, user_id: req.session.userId })
        .then((newMap) =>
          res.status(201).json({
            data: newMap,
            html: res.renderComponent(
              Card,
              { map: newMap, authUser: user },
              { htmlOnly: true }
            ),
            id: newMap.id,
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
    const { name, pA, pB } = req.body;

    Map.update(
      { name, pA, pB },
      { where: { id, user_id: req.session.userId }, raw: true, returning: true }
    )
      .then(([_, [updatedMap]]) => {
        if (updatedMap) {
          res.json({
            map: updatedMap,
            html: res.renderComponent(
              Card,
              { map: updatedMap },
              { htmlOnly: true }
            ),
          });
        } else res.json({ message: false });
      })
      .catch((err) => res.json({ err: err.message }));
  })

  // delete
  .delete(async (req, res) => {
    const { id } = req.params;

    const deletedMap = await Map.destroy({
      where: { id, user_id: req.session.userId },
    });
    if (deletedMap) {
      res.status(200).json({ deleted: true, id });
    } else res.status(400).json({ deleted: false, id });
  });

module.exports = router;
