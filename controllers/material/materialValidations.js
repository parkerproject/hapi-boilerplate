'use strict'

const joi = require('joi')

const materialValidations = {
  // GET /Products/{id}
  getMaterialById: {
    headers: {},
    query: {},
    options: {
      allowUnknown: true
    }
  }
}

module.exports = materialValidations
