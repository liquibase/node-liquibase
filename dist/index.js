
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./liquibase.cjs.production.min.js')
} else {
  module.exports = require('./liquibase.cjs.development.js')
}
