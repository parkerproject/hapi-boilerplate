'use strict'


// require new relic at the top only in production environment
if (process.env.NODE_ENV === 'production') {
  require('newrelic')
}

require('./errorHandler')

const Hapi = require('hapi')
const config = require('config')
const routes = require('./routes')
const plugins = require('./plugins')
const logger = require('./controllers/utils/logger')



const server = Hapi.server({
  port: config.get('app.port')
})

// attach routes here
 server.route(routes)



/**
 * Starts the server
 * @returns {Promise.<void>}
 */
const startServer = async function () {
  try {
    await server.register(plugins)
    await server.start()
    logger.info(`server started at port: ${config.get('app.port')} with env: ${config.util.getEnv('NODE_ENV')}`)
  } catch (error) {
    logger.error(error)
    process.exit(1)
  }
}

startServer()
