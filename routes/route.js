const express = require('express')
const router = new express.Router()
const mark = require('../controller/controllers')

router.get('/home',mark.home)
router.post('/post',mark.addMark)


module.exports = router 