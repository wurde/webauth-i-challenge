'use strict'

/**
 * Dependencies
 */

import React from 'react'
import { RegisterStyle } from './styles/index'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

/**
 * Constants
 */

const Component = React.Component

/**
 * Define component
 */

class Register extends Component {
  constructor() {
    super()
    this.state = {
      username: '',
      password: ''
    }
  }

  handleOnSubmit = (event) => {
    event.preventDefault()
    console.log('Submit Register')
  }

  handleOnChange = (event) => {
    event.preventDefault()
    this.setState({ [event.target.name]: event.target.value })
  }

  render() {
    return (
      <RegisterStyle>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-10 col-md-8 col-lg-5">

              <form onSubmit={this.handleOnSubmit}>
                <TextField required id="input-username" label="username" onChange={this.handleOnChange} />
                <TextField required id="input-password" label="password" onChange={this.handleOnChange} />

                <Button variant="contained" color="primary">
                  Continue
                </Button>
              </form>

            </div>
          </div>
        </div>
      </RegisterStyle>
    )
  }
}

/**
 * Export component
 */

export default Register
