'use strict'

const config = require('config')

const materialHandler = require('./materialHandler')
const materialValidations = require('./materialValidations')


const routes = []

routes.push({
  path: '/v1/materials',
  method: 'GET',
  handler: materialHandler.getMaterialById,
  config: {
    tags: ['api', 'Material'],
  }
})

module.exports = routes
