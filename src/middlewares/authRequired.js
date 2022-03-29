const jwt = require("jsonwebtoken")
const User = require('../models/user')
const config = require('config')

async function authRequired(req, res, next) {
    const token = req.header('x-auth-token')
    if (!token) {
        res.status(400).json({ message: 'access denide' })
    }
    try {
        const { _id } = await jwt.verify(token, config.get('jwt-key'))
        const user = await User.findById(_id)
        req.user = user
        next()

    } catch (error) {
        res.status(400).json({ error })
    }
}
async function adminOnly(req, res, next) {
    if (!req.user.isAdmin) res.status(400).json('access denide')
    next()
}
module.exports = { authRequired, adminOnly }