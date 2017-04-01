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
          note: 'Took a cab into Kathmandu from Tribhuvan International Airport.',
          created_at: new Date('2016-08-16 14:26:16 UTC'),
          updated_at: new Date('2016-08-16 14:26:16 UTC')
        },
        {
          id: 2,
          trip_id: 1,
          entry_title: 'Swayambhu Temple',
          note: 'A sacred Buddhist temple that overlooks the city.',
          created_at: new Date('2016-08-16 15:46:16 UTC'),
          updated_at: new Date('2016-08-16 15:46:16 UTC')
        },
        {
          id: 3,
          trip_id: 1,
          entry_title: 'Boudha Stupa',
          note: 'Located in Boudhanath, about 7km NE of Kathmandu.',
          created_at: new Date('2016-08-16 17:14:16 UTC'),
          updated_at: new Date('2016-08-16 17:14:16 UTC')
        },
        {
          id: 4,
          trip_id: 1,
          entry_title: 'Conquering Everest',
          note: 'From basecamp to summit.',
          created_at: new Date('2016-08-20 08:29:16 UTC'),
          updated_at: new Date('2016-08-20 08:29:16 UTC')
        },
        {
          id: 5,
          trip_id: 2,
          entry_title: 'Flying In',
          note: 'La Paz: The world\'s highest airport.',
          created_at: new Date('2017-03-24 14:26:16 UTC'),
          updated_at: new Date('2017-03-24 14:26:16 UTC')
        },
        {
          id: 6,
          trip_id: 2,
          entry_title: 'Food Tour of La Paz',
          note: 'Licuado, Milanesa and Choripan!',
          created_at: new Date('2017-03-26 14:26:16 UTC'),
          updated_at: new Date('2017-03-26 14:26:16 UTC')
        },
      ]);
    })
    .then(() => {
      return knex.raw(
       "SELECT setval('entries_id_seq', (SELECT MAX(id) FROM entries));"
     );
    });
};
