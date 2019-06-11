'use strict'

exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', (table) => {
    table.increments('id')
    table.text('username').unique().notNullable()
    table.text('password_hash').notNullable()
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users')
}
