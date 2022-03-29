const express = require('express')
const router = express.Router()
const { adminOnly, authRequired } = require('./../middlewares/authRequired')
const authRouter = require('./auth')
const userRouter = require('./user')
const adminRouter = require('./admin')

router.use('/auth', authRouter)
router.use('/user', authRequired, userRouter)
router.use('/admin', authRequired, adminOnly, adminRouter)

router.use((err, req, res, next) => { res.status(500), json('server side error...') })

module.exports = router