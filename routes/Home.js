const express = require('express')
const homeapi = require('../Apis/Homeapi')


const home = express.Router()
home.route('/').get(homeapi.apiController)

module.exports = home;