'use strict'

/**
 * Dependencies
 */

import React from 'react'
import { UsersStyle } from './styles/index'

/**
 * Define component
 */

function Users(props) {
  return (
    <UsersStyle>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-10 col-md-8 col-lg-5">
            Users
          </div>
        </div>
      </div>
    </UsersStyle>
  )
}

/**
 * Export component
 */

export default Users
