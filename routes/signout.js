const express = require('express')
const router = express.Router()

const checkLogin = require('../middlewares/check').checkLogin

router.get('/', checkLogin, function (req,res,next) {
    res.session.user = null
    req.flash('success','登出成功')
    res.redirect('/')
})

module.exports = router