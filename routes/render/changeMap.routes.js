const router = require('express').Router();

const FormChange = require('../../views/FormChange');

router.route('/changemap/:id')
.get((req,res)=>{
    res.renderComponent(FormChange, {})
    
})

module.exports=router