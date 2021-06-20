const express = require('express')
const metadataController = require('../controllers/metadata')

const router = express.Router()

router.get('/countries', metadataController.getCountries)

router.get('/categories', metadataController.getCategories)

module.exports = router
