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

router.use('/', (req, res) => {
  res.sendStatus(200)
})

/**
 * Export router
 */

module.exports = router
