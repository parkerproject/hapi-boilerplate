# Hapi Starter Kit | Hapi based REST application boilerplate, uses async/await

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

## Getting Started
```bash
# Install dependencies
$ yarn
```
![yarn](https://user-images.githubusercontent.com/4172932/29668267-2b4777f6-88fd-11e7-8006-dd0bcc5cb474.png)

```bash
# Start Server
# Set environment variables defined in `config/custom-environment-variables.json` like `OPEN_WEATHER_API_KEY=xxx`
$ yarn start
```
![yarn start](https://user-images.githubusercontent.com/4172932/29668371-9010e5dc-88fd-11e7-9327-68fa1e7944e3.png)

```bash
# Try GET /ping to make sure server is up
$ curl http://localhost:3030/ping
```

```bash
# Run Tests
$ yarn test
```
![yarn test](https://user-images.githubusercontent.com/4172932/29669393-ea39b5a4-8900-11e7-80f3-ed3256191ecb.png)



### Tests

```bash
# copy sample.test.env to test.env
$ cp bin/sample.test.env bin/test.env
```

```bash
# Run Tests
$ bash bin/test.sh
```
![docker test](https://user-images.githubusercontent.com/4172932/29669714-f5ad82ac-8901-11e7-86ae-a9af82ca152c.png)

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
