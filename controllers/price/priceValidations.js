'use strict'

const joi = require('joi')

const priceValidations = {
  getPriceById: {
    headers: {},
    query: {},
    options: {
      allowUnknown: true
    }
  }
}

module.exports = priceValidations
