'use strict';

exports.seed = function(knex) {
  return knex('trips')
    .del()
    .then(() => {
      return knex('trips').insert([
        {
          id: 1,
          user_id: 1,
          destination: 'Nepal',
          subtitle: 'Adventures in Nepal',
          cover_photo: 'https://c1.staticflickr.com/8/7449/9300381646_f4783c4c25_b.jpg',
          votes: 6,
          created_at: new Date('2017-03-16 14:26:16 UTC'),
          updated_at: new Date('2017-03-16 14:26:16 UTC')
        }
      ]);
    })
    .then(() => {
      return knex.raw(
       "SELECT setval('trips_id_seq', (SELECT MAX(id) FROM trips));"
     );
    });
};
