const express = require('express')

const router = express.Router()

router.post('/create',function(req, res, next) {
    console.log(req, res)
})

module.exports = router