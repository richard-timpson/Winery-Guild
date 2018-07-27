const express = require('express')
const router = express.Router()
const adminController = require('../controllers/admin')
router.get('/', adminController.searchWineries)

module.exports = router