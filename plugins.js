'use strict'

/**
 * Vendor modules
 */
const Inert = require('inert')
const Vision = require('vision')
const HapiSwagger = require('hapi-swagger')
const Good = require('good')
const config = require('config')
const HapiApiVersion = require('hapi-api-version')

/**
 * Internal modules
 */
const { hapiApiVersionOptions, goodOptions, swaggerOptions } = require('./pluginOptions')

const DEVELOPMENT = 'development'

/**
 * exports array of plugins with configuration.
 * @type {Array}
 */
let plugins = []



if (config.util.getEnv('NODE_ENV') === DEVELOPMENT) {

  // add hapi swagger integration
  plugins = plugins.concat([
    Inert,
    Vision,
    {
      plugin: HapiSwagger,
      options: swaggerOptions
    },
    {
      plugin: HapiApiVersion,
      options: hapiApiVersionOptions
    }
  ])

  // add good console for log reporting
  plugins.push({
    plugin: Good,
    options: goodOptions
  })
}


module.exports = plugins
