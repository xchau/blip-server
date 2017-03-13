'use strict';

module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/q4_capstone_dev'
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  },
  test: {
    client: 'pg',
    connection: 'postgres://localhost/q4_capstone_test'
  }
}
