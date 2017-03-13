'use strict';

exports.up = function(knex) {
  knex.schema.createTable('trips', (table) => {
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
      .string('subtitle')
      .notNullable()
      .defaultTo('');
    table
      .string('cover_photo')
      .notNullable()
      .defaultTo('');
    table
      .integer('votes')
      .notNullable();
      .defaultTo(0);
  });
};

exports.down = function(knex) {
  knex.schema.dropTable('trips');
};
