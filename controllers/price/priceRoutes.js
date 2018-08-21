'use strict'

const config = require('config')

const priceHandler = require('./priceHandler')
const priceValidations = require('./priceValidations')


const routes = []

// GET /getWeatherByCityName
routes.push({
  path: '/v1/price',
  method: 'GET',
  handler: priceHandler.getPriceByRetailers,
  config: {
    tags: ['api', 'Price'],
  }
})

module.exports = routes
