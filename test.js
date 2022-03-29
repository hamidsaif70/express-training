const jwt = require('jsonwebtoken')

const secretKey = "aksdfa'fdgj'aifgoaihg"


const reverse = jwt.verify("eyJhbGciOiJIUzI1NiJ9.cGFydmEgbm9yb3V6YmVo.mi_LyMi0bAcniYwo-R5XQ0tjlVR_iBB39WfULcOntrU", secretKey)
console.log(reverse)