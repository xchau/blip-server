'use strict';

exports.up = function(knex) {
  return knex.schema.createTable('photos', (table) => {
    table
      .increments();
    table
      .integer('entry_id')
      .references('id')
      .inTable('entries')
      .notNullable()
      .onDelete('CASCADE')
      .index();
    table
      .string('photo_url')
      .notNullable()
      .defaultTo('https://upload.wikimedia.org/wikipedia/commons/f/f1/I-404.svg');
    table
      .string('caption')
      .defaultTo('');
    table
      .timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('photos');
};
