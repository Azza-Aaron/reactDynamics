const express = require('express')
const weatherRouter = require('../controllers/weather/handler.js')
//router.use('', const of file )

const router = express.Router()

router.use('/weather', weatherRouter)

module.exports = router