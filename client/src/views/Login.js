'use strict'

/**
 * Dependencies
 */

import React from 'react'
import { LoginStyle } from './styles/index'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

/**
 * Constants
 */

const Component = React.Component

/**
 * Define component
 */

class Login extends Component {
  constructor() {
    super()
    this.state = {
      username: '',
      password: ''
    }
  }

  handleOnSubmit = (event) => {
    event.preventDefault()
    console.log('Submit Login')
  }

  handleOnChange = (event) => {
    event.preventDefault()
    this.setState({ [event.target.name]: event.target.value })
  }

  render() {
    return (
      <LoginStyle>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-10 col-md-8 col-lg-5" style={{ marginTop: '80px' }}>
              <h3>Login</h3>

              <form onSubmit={this.handleOnSubmit}>
                <TextField required id="input-username" label="username" fullWidth onChange={this.handleOnChange} />
                <TextField required id="input-password" label="password" type="password" fullWidth onChange={this.handleOnChange} />
                <br/>
                <br/>

                <Button variant="contained" color="primary" fullWidth>
                  Continue
                </Button>
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
