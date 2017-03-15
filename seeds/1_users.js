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
          h_pw: '$2a$12$LaKBUi8mCFc/9LiCtvwcvuNIjgaq9LJuy/NO.m4P5.3FP8zA6t2Va',
          profile_pic: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/480px-Unofficial_JavaScript_logo_2.svg.png',
          nationality: 'United States',
          is_traveling: false,
          created_at: new Date('2017-03-15 14:26:16 UTC'),
          updated_at: new Date('2017-03-15 14:26:16 UTC')
        }
      ]);
    });
};
