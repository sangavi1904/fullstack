const express = require('express')
const route = express.Router()

const {getData}= require('../controllers/taskcontrollers')

route.get('/',getData)

module.exports = route