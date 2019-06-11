'use strict'

/**
 * Dependencies
 */

const express_session = require('express-session')
const connect_session_knex = require('connect-session-knex')
const db_client = require('../db/client.js')

/**
 * Define store
 */

const KnexSessionStore = connect_session_knex(express_session)

/**
 * Define session config
 */

const config = {
  name: 'user_session',
  secret: '2269031b034acc2650e39d07b9932802c8b0c916498b6b74640e166cb8710c729fd2df6ec47917d09f85f614de95d9996c0725d662129d3adb44ef479d623004',
  cookie: {
    maxAge: 1000 * 60 * 10,
    secure: false,
    httpOnly: true,
  },
  resave: false,
  saveUninitialized: false,
  store: new KnexSessionStore({
    knex: db_client,
    tablename: 'sessions',
    sidfieldname: 'sid',
    createtable: true,
    clearInterval: 1000 * 60 * 30,
  }),
}

/**
 * Define middleware
 */

const sessions = express_session(config)

/**
 * Export middleware
 */

module.exports = sessions
