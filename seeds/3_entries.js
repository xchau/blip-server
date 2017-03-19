'use strict';

exports.seed = function(knex) {
  return knex('entries')
    .del()
    .then(() => {
      return knex('entries').insert([
        {
          id: 1,
          trip_id: 1,
          entry_title: 'A Night in Shangri-La',
          notes: 'Vinyl four dollar toast hammock, semiotics freegan craft beer keytar.',
          created_at: new Date('2017-05-16 14:26:16 UTC'),
          updated_at: new Date('2017-05-16 14:26:16 UTC')
        },
        {
          id: 2,
          trip_id: 1,
          entry_title: 'Swayambhu Temple',
          notes: 'Occupy snackwave raw denim listicle freegan edison bulb.',
          created_at: new Date('2017-05-16 15:46:16 UTC'),
          updated_at: new Date('2017-05-16 15:46:16 UTC')
        },
        {
          id: 3,
          trip_id: 1,
          entry_title: 'Boudha Stupa',
          notes: 'Mustache quinoa woke, kitsch normcore synth raw denim kinfolk.',
          created_at: new Date('2017-05-16 17:14:16 UTC'),
          updated_at: new Date('2017-05-16 17:14:16 UTC')
        },
        {
          id: 4,
          trip_id: 1,
          entry_title: 'Everest Basecamp',
          notes: 'Hexagon pinterest lo-fi pok pok vexillologist.',
          created_at: new Date('2017-05-18 06:14:16 UTC'),
          updated_at: new Date('2017-05-18 06:14:16 UTC')
        },
        {
          id: 5,
          trip_id: 1,
          entry_title: 'Conquering Everest',
          notes: 'Gentrify health goth locavore banjo tofu DIY woke.',
          created_at: new Date('2017-05-20 08:29:16 UTC'),
          updated_at: new Date('2017-05-20 08:29:16 UTC')
        },
      ]);
    })
    .then(() => {
      return knex.raw(
       "SELECT setval('entries_id_seq', (SELECT MAX(id) FROM entries));"
     );
    });
};
