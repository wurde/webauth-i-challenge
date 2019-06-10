'use strict'

/**
 * Dependencies
 */

import React from 'react'
import { RegisterStyle } from './styles/index'

/**
 * Define component
 */

function Register(props) {
  return (
    <RegisterStyle>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-10 col-md-8 col-lg-5">
            Register
          </div>
        </div>
      </div>
    </RegisterStyle>
  )
}

/**
 * Export component
 */

export default Register
