'use strict';

exports.up = function(knex) {
  knex.schema.createTable('users', (table) => {
    table
      .increments();
    table
      .string('first_name')
      .notNullable()
      .defaultTo('');
    table
      .string('last_name')
      .notNullable()
      .defaultTo('');
    table
      .string('email')
      .notNullable()
      .defaultTo('');
    table
      .string('profile_pic')
      .notNullable()
      .defaultTo('');
    table
      .string('h_pw')
      .notNullable();
    table
      .string('nationality')
      .notNullable()
      .defaultTo('');
    table
      .boolean('is_traveling')
      .notNullable()
      .defaultTo(false);
    table
      .timestamps(true, true);
  });
};

exports.down = function(knex) {
  knex.schema.dropTable('users');
};
