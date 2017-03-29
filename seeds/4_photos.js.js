'use strict';

exports.seed = function(knex) {
  return knex('photos')
    .del()
    .then(() => {
      return knex('photos').insert([
        {
          id: 1,
          entry_id: 1,
          photo_url: 'https://res.cloudinary.com/xchau/image/upload/v1490746099/nepal5_lq7dxx.jpg',
          caption: 'My best buddy in Kathmandu!',
          created_at: new Date('2016-08-16 14:26:16 UTC'),
          updated_at: new Date('2016-08-16 14:26:16 UTC')
        }, {
          id: 2,
          entry_id: 1,
          photo_url: 'https://res.cloudinary.com/xchau/image/upload/v1490746099/nepal2_lk0xlr.jpg',
          caption: 'Quite the landmark.',
          created_at: new Date('2016-08-16 14:26:16 UTC'),
          updated_at: new Date('2016-08-16 14:26:16 UTC')
        }, {
          id: 3,
          entry_id: 1,
          photo_url: 'https://res.cloudinary.com/xchau/image/upload/v1490746564/nepal9_dhkucz.jpg',
          caption: 'Getting around town in style.',
          created_at: new Date('2016-08-16 14:26:16 UTC'),
          updated_at: new Date('2016-08-16 14:26:16 UTC')
        },
        {
          id: 4,
          entry_id: 1,
          photo_url: 'https://res.cloudinary.com/xchau/image/upload/v1490746564/nepal7_j1si99.jpg',
          caption: 'Started to get crowded in city center',
          created_at: new Date('2016-08-16 14:26:16 UTC'),
          updated_at: new Date('2016-08-16 14:26:16 UTC')
        },
        {
          id: 5,
          entry_id: 1,
          photo_url: 'https://res.cloudinary.com/xchau/image/upload/v1490746564/nepal6_o2ko6p.jpg',
          caption: 'A lot of pigeons. Hungry like I.',
          created_at: new Date('2016-08-16 14:26:16 UTC'),
          updated_at: new Date('2016-08-16 14:26:16 UTC')
        },
      ]);
    })
    .then(() => {
      return knex.raw(
       "SELECT setval('photos_id_seq', (SELECT MAX(id) FROM photos));"
     );
    });
};
