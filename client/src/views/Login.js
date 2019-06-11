'use strict'

/**
 * Dependencies
 */

import React from 'react'
import { LoginStyle } from './styles/index'

/**
 * Constants
 */

const Component = React.Component

/**
 * Define component
 */

class Login extends Component {
  constructor() {
    this.state = {
      username: '',
      password: ''
    }
  }

  handleOnSubmit(event) {
    event.preventDefault()
    this.setState({ [event.target.name]: event.target.value })
  }

  render() {
    return (
      <LoginStyle>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-10 col-md-8 col-lg-5">

              <form onSubmit={handleOnSubmit}>
                <input type=
              </form>

            </div>
          </div>
        </div>
      </LoginStyle>
    )
  }
}

/**
 * Export component
 */

export default Login
