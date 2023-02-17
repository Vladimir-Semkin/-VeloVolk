const router = require('express').Router();

router.route('/')
.get((req,res)=>{
    res.redirect('/home')
})

module.exports=router