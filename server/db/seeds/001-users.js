'use strict'

exports.seed = function(knex, Promise) {
  return knex('users').del()
    .then(function () {
      return knex('users').insert([
        {id: 1, username: 'wurde', password_hash: '$2a$10$i0izRCOjk6oba96hj2/JR.oHFUV06/IJ0hKbB2HuHo/NFxku9wb9.'},
      ]);
    });
};
