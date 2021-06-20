const express = require('express')
const topNewsController = require('../controllers/topnews')

const router = express.Router()

router.post('/', topNewsController)

module.exports = router
