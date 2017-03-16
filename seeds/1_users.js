'use strict';

exports.seed = function(knex) {
  return knex('users')
    .del()
    .then(() => {
      return knex('users').insert([
        {
          id: 1,
          name: 'Minh',
          username: 'mchau',
          email: 'cap@stone.com',
          h_pw: '$2a$12$xmrePKtdpRDF33znVHjatOEBmIBQXxe0qunxlI3MNkLD1Wi2/47Ei',
          profile_pic: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/480px-Unofficial_JavaScript_logo_2.svg.png',
          nationality: 'United States',
          is_traveling: false,
          created_at: new Date('2017-03-15 14:26:16 UTC'),
          updated_at: new Date('2017-03-15 14:26:16 UTC')
        }
      ]);
    })
    .then(() => {
      return knex.raw(
       "SELECT setval('users_id_seq', (SELECT MAX(id) FROM users));"
     );
    });
};
