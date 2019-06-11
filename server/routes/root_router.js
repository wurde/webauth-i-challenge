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
 *   GET /
 */

router.route('/')
  .get((req, res) => {
    res.redirect('/home')
  })

/**
 * Routes
 *   GET /home
 */

router.route('/home')
  .get((req, res) => {
    res.status(200).send('Welcome Home')
  })

/**
 * Export router
 */

module.exports = router
