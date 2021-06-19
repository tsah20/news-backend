const express = require('express')
const topNewsController = require('../controllers/topnews')

const router = express.Router()

router.post('/', topNewsController.getTopNews)

router.post('/category', topNewsController.getCategoryTopNews)

router.post('/country', topNewsController.getCountryTopNews)

router.post('/source', topNewsController.getSourceTopNews)

module.exports = router
