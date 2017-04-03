'use strict';

exports.up = function(knex) {
  return knex.schema.createTable('users', (table) => {
    table
      .increments();
    table
      .string('username')
      .notNullable()
      .defaultTo('');
    table
      .string('email')
      .notNullable()
      .defaultTo('');
    table
      .string('profile_pic')
      .notNullable()
      .defaultTo('https://res.cloudinary.com/xchau/image/upload/v1491177802/user_igxxka.png');
    table
      .string('h_pw')
      .notNullable();
    table
      .string('nationality')
      .notNullable()
      .defaultTo('');
    table
      .integer('is_traveling')
      .notNullable()
      .defaultTo(0);
    table
      .timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('users');
};
