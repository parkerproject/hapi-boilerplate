'use strict'

const config = require('config')

const productHandler = require('./productHandler')
const productValidations = require('./productValidations')


const routes = []

// GET /getWeatherByCityName
routes.push({
  path: '/v1/products/{id}',
  method: 'GET',
  handler: productHandler.getProductById,
  config: {
    tags: ['api', 'Product'],
  }
})

module.exports = routes
