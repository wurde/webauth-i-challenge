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
  const { username, password } = req.headers

  if (username, password) {
    let user = await User.find({ username: username })

    if (user && bcrypt.compareSync(password, user.password_hash)) {
      next()
    } else {
      res.redirect('/users/login')
    }
  } else {
    res.status(400).json({ errors: { message: 'Please provide credentials.' } })
  }
}

/**
 * Export middleware
 */

module.exports = auth_user
