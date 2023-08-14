const express = require('express')
const scienceApi = require('../Apis/Scienceapi')

const science = express.Router()

science.route('/science').get(scienceApi.apiController)

module.exports = science