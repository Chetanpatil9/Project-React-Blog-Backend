const express = require('express')
const bollywoodApi = require('../Apis/Bollywoodapi')

const bollywood = express.Router()
bollywood.route('/bollywood').get(bollywoodApi.apiController)

module.exports = bollywood;