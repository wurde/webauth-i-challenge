'use strict'

/**
 * Dependencies
 */

const bcrypt = require('bcryptjs')
const Users = require('../models/User.js')

/**
 * Define middleware
 */

async function auth_user(req, res, next) {
  res.redirect('/users/login')
}

/**
 * Export middleware
 */

module.exports = auth_user
