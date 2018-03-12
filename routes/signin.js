const express = require('express')
const router = express.Router()
const checkNotLogin = require('../middlewares/check').checkNotLogin



router.get('/', checkNotLogin, function (req, res, next) {
    res.render('signin') 
})

router.post('/', checkNotLogin, function (req, res, next) {
    

    const usr = req.body.username
    const pwd = req.body.password
    if(null == validate(usr)) {
        req.flash('error', "账号格式非法")
        console.log("账号非法")
        return res.redirect('signin')
    }
    
    
    
})

const validate = function(usr) {
    if(usr.length >11) {
        return null;
    }
    const regExp = /[0-9]{11}/gim
    return regExp.exec(usr)
}


module.exports = router