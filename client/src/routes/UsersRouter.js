'use strict'

/**
 * Dependencies
 */

import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { Login, Register } from '../views/index'

/**
 * Define router
 */

function UsersRouter({ mount }) {
  return (
    <>
      <Route path={`${mount}/login`} render={(props) => <Login {...props} />} />
      <Route path={`${mount}/register`} render={(props) => <Register {...props} />} />
      <Route path={`${mount}/signin`} render={() => <Redirect to="/users/login" />} />
      <Route path={`${mount}/signup`} render={() => <Redirect to="/users/register" />} />
    </>
  )
}

/**
 * Export router
 */

export default UsersRouter
