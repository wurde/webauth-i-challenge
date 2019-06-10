'use strict'

/**
 * Dependencies
 */

const express = require('express')
const UsersController = require('../controllers/UsersController')
const auth_user = require('../middleware/auth_user')

/**
 * Define app
 */

const router = express.Router()

/**
 * Routes
 *   GET /users
 */

router.route('/')
  .all(auth_user)
  .get(UsersController.index)

/**
 * Routes
 *   GET,POST /users/register
 */

router.route('/register')
  .get(UsersController.register_prompt)
  .post(UsersController.register)

/**
 * Routes
 *   GET,POST /users/login
 */

router.route('/login')
  .get(UsersController.login_prompt)
  .post(UsersController.login)

/**
 * Export router
 */

module.exports = router
