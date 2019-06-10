'use strict'

/**
 * Dependencies
 */

const express = require('express')
const UsersController = require('../controllers/UsersController')

/**
 * Define app
 */

const router = express.Router()

/**
 * Routes
 *   GET /users
 */

router.route('/')
  .get(UsersController.index)

/**
 * Routes
 *   POST /users/register
 */

router.route('/register')
  .post(UsersController.register)

/**
 * Routes
 *   POST /users/login
 */

router.route('/login')
  .post(UsersController.login)

/**
 * Export router
 */

module.exports = router
