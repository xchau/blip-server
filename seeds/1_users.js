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
          is_traveling: 0,
          created_at: new Date('2015-06-15 14:26:16 UTC'),
          updated_at: new Date('2015-06-15 14:26:16 UTC')
        }, {
          id: 2,
          username: 'lilian24',
          email: 'lily@user.com',
          h_pw: '$2a$12$xmrePKtdpRDF33znVHjatOEBmIBQXxe0qunxlI3MNkLD1Wi2/47Ei',
          profile_pic: 'https://res.cloudinary.com/xchau/image/upload/v1490936729/lotus_ktm4ot.jpg',
          nationality: 'Vietnam',
          is_traveling: 2,
          created_at: new Date('2017-03-12 14:26:16 UTC'),
          updated_at: new Date('2017-03-12 14:26:16 UTC')
        }, {
          id: 3,
          username: 'f_magellan',
          email: 'fm@user.com',
          h_pw: '$2a$12$xmrePKtdpRDF33znVHjatOEBmIBQXxe0qunxlI3MNkLD1Wi2/47Ei',
          profile_pic: 'https://res.cloudinary.com/xchau/image/upload/v1490295793/magellan_sqmnsb.jpg',
          nationality: 'Spain',
          is_traveling: 0,
          created_at: new Date('2014-05-08 22:26:16 UTC'),
          updated_at: new Date('2014-05-08 22:26:16 UTC')
        }
      ]);
    })
    .then(() => {
      return knex.raw(
       "SELECT setval('users_id_seq', (SELECT MAX(id) FROM users));"
     );
    });
};
