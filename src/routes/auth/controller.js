const controller = require('../controller')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const config = require('config')

module.exports = new (class extends controller {

    async register(req,res) {
        let user = await this.User.findOne({email:req.body.email})
        if(user){
            return this.response({code:400,message:'registered befor',res})
        }
        let {email, name , password}= req.body
        user = new this.User({email,name,password})
        
        let salt = bcrypt.genSaltSync(12)
        user.password = await bcrypt.hash(user.password, salt)

        await user.save()
        this.response({
            res, message:'user registered successfully',data:{email,name}
        })
    }

    async login(req,res) {
        let user = await this.User.findOne({email: req.body.email})
        if(!user){
            return this.response({res,message: 'invalid email or password',code:405})
        }
        const isValid = await bcrypt.compare(req.body.password, user.password)
        if(!isValid){
            return this.response({res,message:'invalid email or password',code:401})
        }
        const token = await jwt.sign({_id: user._id}, config.get('jwt-key'))
        this.response({res,message:'loged in successfully',data:{token}})
    }
})()