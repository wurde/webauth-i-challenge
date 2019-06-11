'use strict'

/**
 * Dependencies
 */

const bcrypt = require('bcryptjs')
const User = require('../models/User.js')

/**
 * Define middleware
 */

async function auth_user(req, res, next) {
  if (req.session && req.session.username) {
    next()
  } else {
    res.redirect('/users/login')
  }
}

/**
 * Export middleware
 */

module.exports = auth_user
