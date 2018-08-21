'use strict'

const joi = require('joi')

const productValidations = {
  // GET /Products/{id}
  getProductById: {
    headers: {},
    query: {},
    options: {
      allowUnknown: true
    }
  }
}

module.exports = productValidations
