'use strict'

const productService = require('./productService')

const getProductById = async function () {
  return productService.getProductById(id)
}

module.exports = {
  getProductById
}
