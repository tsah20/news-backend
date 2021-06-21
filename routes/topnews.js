const express = require('express')
const topNewsController = require('../controllers/topnews')
const ValidationHandler = require('../middleware/ValidationHandler')
const { ValidationRule } = require('../util/route-validation-rules/CommonValidationRules')

const router = express.Router()

router.get('/', ValidationRule, ValidationHandler, topNewsController)

module.exports = router
