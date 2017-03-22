'use strict';

exports.up = function(knex) {
  return knex.schema.createTable('photos', (table) => {
    table
      .increments();
    table
      .integer('trip_id')
      .references('id')
      .inTable('entries')
      .notNullable()
      .onDelete('CASCADE')
      .index();
    table
      .string('category')
      .notNullable()
      .defaultTo('entry');
    table
      .string('photo_url')
      .notNullable()
      .defaultTo('https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Dialog-error-round.svg/768px-Dialog-error-round.svg.png');
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
