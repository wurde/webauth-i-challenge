'use strict'

/**
 * Dependencies
 */

const express = require('express')
const helmet = require('helmet')

/**
 * Constants
 */

const port = process.env.PORT || 8080
const env = process.env.NODE_ENV || 'development'

/**
 * Define app
 */

const app = express()

/**
 * Middleware
 */

app.use(helmet())
app.use(express.json())
app.use(require('./middleware/sessions'))

/**
 * Routes
 */

app.use('/', require('./routes/root_router'))
app.use('/users', require('./routes/users_router'))
app.use('/restricted', require('./routes/restricted_router'))

/**
 * Error handlers
 */

app.use((req, res, next) => {
  let err = new Error()
  err.status  = 404
  err.message = 'Not found'

  next(err)
})

app.use((err, req, res, next) => {
  err.status = (err.status || 500)
  err.message = (err.message || 'Internal Server Error')
  if (env === 'production') { err.stack = undefined }

  console.error(err.message)

  res.status(err.status).json({ errors: { status: err.status, message: err.message } })
})

/**
 * Start server
 */

if (module === require.main) {
  app.listen(port, () => {
    console.log(`Express running on port ${port}`)
  })
}

/**
 * Export app
 */

module.exports = app
