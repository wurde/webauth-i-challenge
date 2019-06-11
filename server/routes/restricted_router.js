'use strict'

/**
 * Dependencies
 */

const express = require('express')
const auth_user = require('../middleware/auth_user')

/**
 * Define app
 */

const router = express.Router()

/**
 * Middleware
 */

router.use('/', auth_user)

/**
 * Routes
 *   GET /restricted
 */

router.route('/')
  .get((req, res) => {
    res.status(200).json({ message: 'Restricted' })
  })

/**
 * Routes
 *   GET /restricted/something
 */

router.route('/something')
  .get((req, res) => {
    res.status(200).json({ message: 'Restricted something' })
  })

/**
 * Export router
 */

module.exports = router
