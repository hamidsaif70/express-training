const controller = require('../controller')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const config = require('config')
const _ = require('lodash')



module.exports = new(class extends controller {

    async dashboard(req, res) {
        res.send('dashboard')
    }

    async me(req, res) {
        this.response({ res, data: _.pick(req.user, ['email', 'name', '_id']) })
    }

})()