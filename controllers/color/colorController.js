'use strict'

const colorService = require('./colorService')

const getColorById = async function () {
  return colorService.getColorById(id)
}

module.exports = {
  getColorById
}
