'use strict'

const priceService = require('./priceService')

const getPriceByRetailers = async function () {
  return priceService.getPriceByRetailers(id)
}

module.exports = {
  getPriceByRetailers
}
