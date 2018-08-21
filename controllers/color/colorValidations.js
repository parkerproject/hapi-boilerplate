'use strict'

const joi = require('joi')

const colorValidations = {
  // GET /Products/{id}
  getColorById: {
    headers: {},
    query: {},
    options: {
      allowUnknown: true
    }
  }
}

module.exports = colorValidations
