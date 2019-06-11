'use strict'

/**
 * Dependencies
 */

import React from 'react'
import { LoginStyle } from './styles/index'

/**
 * Define component
 */

function Login(props) {
  return (
    <LoginStyle>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-10 col-md-8 col-lg-5">
            Login
          </div>
        </div>
      </div>
    </LoginStyle>
  )
}

/**
 * Export component
 */

export default Login
