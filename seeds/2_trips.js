'use strict';

exports.seed = function(knex) {
  return knex('trips')
    .del()
    .then(() => {
      return knex('trips').insert([
        {
          id: 1,
          user_id: 3,
          destination: 'Nepal',
          title: 'Adventures in Nepal',
          description: 'Letterpress pinterest cardigan jianbing, gentrify normcore single-origin coffee squid green juice vinyl narwhal fashion axe artisan.',
          cover_photo: 'https://c1.staticflickr.com/8/7449/9300381646_f4783c4c25_b.jpg',
          votes: 52,
          published: true,
          created_at: new Date('2016-08-16 14:26:16 UTC'),
          updated_at: new Date('2016-08-16 14:26:16 UTC')
        }, {
          id: 2,
          user_id: 2,
          destination: 'Bolivia',
          title: 'Journey to Salar de Uyuni',
          description: 'Green juice fashion axe hexagon, stumptown hammock cliche ennui kombucha heirloom.',
          cover_photo: 'https://c1.staticflickr.com/8/7351/9620629125_b76cc20fcd_b.jpg',
          votes: 77,
          published: true,
          created_at: new Date('2017-03-23 14:26:16 UTC'),
          updated_at: new Date('2017-03-23 14:26:16 UTC')
        }, {
          id: 3,
          user_id: 1,
          destination: 'England',
          title: 'Watching Wimbledon',
          description: 'Readymade craft beer kale chips, enamel pin semiotics slow-carb poutine edison bulb shoreditch.',
          cover_photo: 'https://c1.staticflickr.com/3/2452/3660393408_9b5a61dfdb_b.jpg',
          votes: 0,
          published: true,
          created_at: new Date('2015-07-04 18:12:15 UTC'),
          updated_at: new Date('2015-07-04 18:12:15 UTC')
        }
      ]);
    })
    .then(() => {
      return knex.raw(
       "SELECT setval('trips_id_seq', (SELECT MAX(id) FROM trips));"
     );
    });
};
