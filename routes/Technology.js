const express = require('express')
const technologyApi = require('../Apis/Technologyapi')

const technology = express.Router()
technology.route('/technology').get(technologyApi.apiController)

module.exports = technology;