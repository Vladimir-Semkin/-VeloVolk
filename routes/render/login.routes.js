const router = require('express').Router();
const Form = require('../../views/Form');

router.route('/login')
.get((req, res) => {
    res.renderComponent(Form, {})
})

module.exports = router;