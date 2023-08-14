const express = require('express')
const fitnessApi = require('../Apis/fitnessapi')

const fitness = express.Router()
fitness.route('/fitness').get(fitnessApi.apiController)

module.exports = fitness