const express = require('express')
const router = express.Router()
const controller = require('./controller')
const validator = require('./validator')

router.post(
    '/register',
    validator.register(),
    controller.validate,
    controller.register
)

router.post(
    '/login',
    validator.login(),
    controller.validate,
    controller.login
)

module.exports = router