require('express-async-errors')
const express = require('express')
const app = express()

const mongoose = require('mongoose')
const config = require('config')
const router = require('./src/routes')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))

mongoose
    .connect(config.get('db.address'))
    .then(() => console.log('connected to db'))
    .catch(() => console.log('cannot connect to db'))

app.use('/api', router)


const port = process.env.PORT || 3003;
app.listen(port, () => console.log(`listennig on port ${port}`))