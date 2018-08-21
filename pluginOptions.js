
const Package = require('./package.json')

const pluginOptions =  {

  hapiApiVersionOptions: {
      validVersions: [1],
      defaultVersion: 1,
      vendorName: 'instock-api'
  },

  goodOptions: {
    reporters: {
      console: [{
        module: 'good-console'
      }, 'stdout']
    }
  },

  swaggerOptions: {
    info: {
      title: Package.description,
      version: Package.version,
    },
    tags: [
        { name: "Product"},
        { name: "Price" },
        { name: "Color" },
        { name: "Materials" }
      ],
    grouping: 'tags'
  }

}

module.exports = pluginOptions
