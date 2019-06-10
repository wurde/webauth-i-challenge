'use strict'

/**
 * Dependencies
 */

const express = require('express')

/**
 * Define app
 */

const router = express.Router()

/**
 * Routes
 *   GET /users
 */

router.route('/')
  .get((req, res) => {
    res.status(200).json([{username: 'John'}, {username: 'Jane'}])
  })

/**
 * Routes
 *   POST /users/register
 */

router.route('/register')
  .post((req, res) => {
    res.sendStatus(200)
  })

/**
 * Routes
 *   POST /users/login
 */

router.route('/login')
  .post((req, res) => {
    res.sendStatus(200)
  })

/**
 * Export router
 */

module.exports = router
