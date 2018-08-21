'use strict'

const config = require('config')

const colorHandler = require('./colorHandler')
const colorValidations = require('./colorValidations')


const routes = []

routes.push({
  path: '/v1/colors',
  method: 'GET',
  handler: colorHandler.getColorById,
  config: {
    tags: ['api', 'Color'],
  }
})

module.exports = routes
