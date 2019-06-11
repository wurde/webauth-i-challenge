'use strict'

/**
 * Dependencies
 */

const React = require('react')
const react_router_dom = require('react-router-dom')

/**
 * Constants
 */

const Suspense = React.Suspense
const Route = react_router_dom.Route
const Redirect = react_router_dom.Redirect

/**
 * Define component
 */

function RootRouter() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Route exact path="/" render={() => <Redirect to="/users/login" />} />
      <Route path="/login" render={() => <Redirect to="/users/login" />} />
      <Route path="/register" render={() => <Redirect to="/users/register" />} />
      <Route path="/signin" render={() => <Redirect to="/users/login" />} />
      <Route path="/signup" render={() => <Redirect to="/users/login" />} />
    </Suspense>
  )
}

/**
 * Export component
 */

module.exports = RootRouter
