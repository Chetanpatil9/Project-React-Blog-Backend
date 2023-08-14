const express = require('express')
const hollywoodApi = require('../Apis/Hollywoodapi')

const hollywood = express.Router()
hollywood.route('/hollywood').get(hollywoodApi.apiController)

module.exports = hollywood;