'use strict'

const materialService = require('./materialService')

const getMaterialById = async function () {
  return materialService.getMaterialById(id)
}

module.exports = {
  getMaterialById
}
