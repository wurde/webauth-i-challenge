'use strict'

/**
 * Dependencies
 */

const User = require('../models/User')

/**
 * Define controller
 */

class UsersController {
  static async index(req, res) {
    let users = await User.all()
    res.status(200).json(users)
  }

  static async register(req, res) {
    res.sendStatus(200)
  }

  static async login(req, res) {
    res.sendStatus(200)
  }
}

/**
 * Export controller
 */

module.exports = UsersController
