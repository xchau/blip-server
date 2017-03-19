'use strict';

exports.up = function(knex) {
  return knex.schema.createTable('entries', (table) => {
    table
      .increments();
    table
      .integer('trip_id')
      .references('id')
      .inTable('trips')
      .notNullable()
      .onDelete('CASCADE')
      .index();
    table
      .string('entry_title')
      .notNullable()
      .defaultTo('');
    table
      .text('directions')
      .defaultTo('');
    table
      .timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('entries');
};
