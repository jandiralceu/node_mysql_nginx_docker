const express = require('express')
const { find } = require('../controller/people')
const router = express.Router()

router.get('/', find)

module.exports = router