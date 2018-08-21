# Hapi based REST application boilerplate, uses async/await

[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com)

[![Build Status](https://img.shields.io/travis/Codigami/hapi-starter-kit/master.svg?style=flat-square)](https://travis-ci.org/Codigami/hapi-starter-kit)
[![Code Climate](https://codeclimate.com/github/Codigami/hapi-starter-kit/badges/gpa.svg)](https://codeclimate.com/github/Codigami/hapi-starter-kit)
[![Test Coverage](https://codeclimate.com/github/Codigami/hapi-starter-kit/badges/coverage.svg)](https://codeclimate.com/github/Codigami/hapi-starter-kit/coverage)


## Overview

A lean boilerplate application for building RESTful APIs (Microservice) in Node.js using [hapi.js](https://github.com/hapijs/hapi).
Follows industry standard best practices, and uses latest [async/await](https://blog.risingstack.com/mastering-async-await-in-nodejs/) ES8 feature.
Bring your own front-end.
Plug-in your own Database.



## Requirements
 - [node.js](https://nodejs.org/en/download/current/) >= `8.4.0`
 - [yarn](https://yarnpkg.com/en/docs/install) >= `0.27.5`




### Tests

```bash
# copy sample.test.env to test.env
$ cp bin/sample.test.env bin/test.env
```

## Environment Configuration
[config](https://github.com/lorenwest/node-config) is used to configure application.
- Default values of environment variables, which are common across all environments can be configured via `config/default.json`
- Values specific to a particular environment can be set by creating a file with same name in config directory. Like `config/test/json` for test environment.
- `config/custom-environment-variables` is used to read values from environment variables. For ex. if `APP_PORT` env var is set it can be accessed as `config.get('app.port')`.
You can read more on custom environment variables [here](https://github.com/lorenwest/node-config/wiki/Environment-Variables#custom-environment-variables).

## More Tasks
```bash
# Run lint
yarn lint
```
![yarn lint](https://user-images.githubusercontent.com/4172932/29670154-7207532c-8903-11e7-9695-32fa4c25122c.png)

## Deployment
- Simply set environment variables defined in `bin/sample.dev.env` in your own environment (AWS, Heroku etc) and `yarn start`


## Documentation
- `hapi-swagger` self documents all the APIs.
- Visit `http://localhost:3030/documentation` to access the documentation after starting the server.
![Documentation](https://user-images.githubusercontent.com/4172932/29810159-75a90d10-8cbc-11e7-986d-4059315052d6.png)
