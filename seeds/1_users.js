'use strict';

exports.seed = function(knex) {
  return knex('users')
    .del()
    .then(() => {
      return knex('users').insert([
        {
          id: 1,
          username: 'mchau',
          email: 'cap@stone.com',
          h_pw: '$2a$12$xmrePKtdpRDF33znVHjatOEBmIBQXxe0qunxlI3MNkLD1Wi2/47Ei',
          profile_pic: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/480px-Unofficial_JavaScript_logo_2.svg.png',
          nationality: 'United States',
          is_traveling: false,
          created_at: new Date('2016-06-15 14:26:16 UTC'),
          updated_at: new Date('2016-06-15 14:26:16 UTC')
        }, {
          id: 2,
          username: 'violet64',
          email: 'emily@user.com',
          h_pw: '$2a$12$xmrePKtdpRDF33znVHjatOEBmIBQXxe0qunxlI3MNkLD1Wi2/47Ei',
          profile_pic: 'https://upload.wikimedia.org/wikipedia/commons/d/d2/Alpine_Violet_Viola_labradorica_Flower_1453px.jpg',
          nationality: 'Vietnam',
          is_traveling: true,
          created_at: new Date('2017-03-12 14:26:16 UTC'),
          updated_at: new Date('2017-03-12 14:26:16 UTC')
        }
      ]);
    })
    .then(() => {
      return knex.raw(
       "SELECT setval('users_id_seq', (SELECT MAX(id) FROM users));"
     );
    });
};
