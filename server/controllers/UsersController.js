'use strict'

/**
 * Dependencies
 */

const bcrypt = require('bcryptjs')
const User = require('../models/User')

/**
 * Define controller
 */

class UsersController {
  static async index(req, res) {
    let users = await User.all()
    res.status(200).json(users)
  }

  static async register_prompt(req, res) {
    res.status(200).send('Register now.')
  }

  static async register(req, res) {
    try {
      const password_hash = bcrypt.hashSync(req.body.password, 15)

      let user = await User.create({
        username: req.body.username,
        password_hash: password_hash
      })

      res.status(201).json(user)
    } catch(err) {
      console.error(err)
      res.status(500).json({ errors: { message: 'Server error' } })
    }
  }

  static async login_prompt(req, res) {
    res.status(200).send('Login now.')
  }

  static async login(req, res) {
    try {
      let user = await User.find({ username: req.body.username })

      if (user && bcrypt.compareSync(req.body.password, user.password)) {
        res.status(200).json({ errors: { message: `Welcome ${user.username}!` } })
      } else {
        res.status(401).json({ errors: { message: 'Invalid Credentials' } })
      }
    } catch(err) {
      console.error(err)
      res.status(500).json({ errors: { message: 'Server error' } })
    }
  }

  static async logout(req, res) {
    try {
      if (req.session) {
        req.session.destroy()
      }

      res.status(200).json({ errors: { message: 'Logged out successfully.' } })
    } catch(err) {
      console.error(err)
      res.status(500).json({ errors: { message: 'Server error' } })
    }
  }
}

/**
 * Export controller
 */

module.exports = UsersController
