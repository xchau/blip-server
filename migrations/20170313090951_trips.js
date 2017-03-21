'use strict';

exports.up = function(knex) {
  return knex.schema.createTable('trips', (table) => {
    table
      .increments();
    table
      .integer('user_id')
      .references('id')
      .inTable('users')
      .notNullable()
      .onDelete('CASCADE')
      .index();
    table
      .string('destination')
      .notNullable()
      .defaultTo('');
    table
      .string('title')
      .notNullable()
      .defaultTo('');
    table
      .string('description')
      .notNullable()
      .defaultTo('');
    table
      .string('cover_photo')
      .notNullable()
      .defaultTo('');
    table
      .integer('votes')
      .notNullable()
      .defaultTo(0);
    table
      .timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('trips');
};
