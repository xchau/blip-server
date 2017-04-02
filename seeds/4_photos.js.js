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
          caption: 'That\'s a lot of frickin\' pigeons!',
          created_at: new Date('2016-08-16 14:26:16 UTC'),
          updated_at: new Date('2016-08-16 14:26:16 UTC')
        },
        {
          id: 6,
          entry_id: 1,
          photo_url: 'https://res.cloudinary.com/xchau/image/upload/v1491088680/nepal10_chjclq.jpg',
          caption: 'Time to head back to the hostel.',
          created_at: new Date('2016-08-16 14:26:16 UTC'),
          updated_at: new Date('2016-08-16 14:26:16 UTC')
        },
        {
          id: 6,
          entry_id: 2,
          photo_url: 'https://res.cloudinary.com/xchau/image/upload/v1491089265/nepal11_on30lh.jpg',
          caption: 'Morning prayer.',
          created_at: new Date('2016-08-17 14:26:16 UTC'),
          updated_at: new Date('2016-08-17 14:26:16 UTC')
        },
        {
          id: 7,
          entry_id: 2,
          photo_url: 'https://res.cloudinary.com/xchau/image/upload/v1491089396/nepal12_rxuu96.jpg',
          caption: 'Prayer bells.',
          created_at: new Date('2016-08-17 14:26:16 UTC'),
          updated_at: new Date('2016-08-17 14:26:16 UTC')
        },
        {
          id: 8,
          entry_id: 2,
          photo_url: 'https://res.cloudinary.com/xchau/image/upload/v1491089822/nepal13_ryu57n.jpg',
          caption: 'Farmland. Watch out for cow dung.',
          created_at: new Date('2016-08-17 14:26:16 UTC'),
          updated_at: new Date('2016-08-17 14:26:16 UTC')
        },
        {
          id: 9,
          entry_id: 2,
          photo_url: 'https://res.cloudinary.com/xchau/image/upload/v1491089882/nepal14_sduib9.jpg',
          caption: 'The beauty of Swayambhu Temple.',
          created_at: new Date('2016-08-17 14:26:16 UTC'),
          updated_at: new Date('2016-08-17 14:26:16 UTC')
        },
        {
          id: 10,
          entry_id: 2,
          photo_url: 'https://res.cloudinary.com/xchau/image/upload/v1491089993/nepal15_djxvtu.jpg',
          caption: 'Buddhist monk.',
          created_at: new Date('2016-08-17 14:26:16 UTC'),
          updated_at: new Date('2016-08-17 14:26:16 UTC')
        },
        {
          id: 12,
          entry_id: 3,
          photo_url: 'https://res.cloudinary.com/xchau/image/upload/v1491090228/stupa1_jx6hyz.jpg',
          caption: 'The Boudha Stupa.',
          created_at: new Date('2016-08-18 14:26:16 UTC'),
          updated_at: new Date('2016-08-18 14:26:16 UTC')
        },
        {
          id: 13,
          entry_id: 3,
          photo_url: 'https://res.cloudinary.com/xchau/image/upload/v1491090284/stupa2_ikizkc.jpg',
          caption: 'Nearby stupas.',
          created_at: new Date('2016-08-18 14:26:16 UTC'),
          updated_at: new Date('2016-08-18 14:26:16 UTC')
        },
        {
          id: 14,
          entry_id: 3,
          photo_url: 'https://res.cloudinary.com/xchau/image/upload/v1491090359/stupa3_kk93zx.jpg',
          caption: 'Holy man.',
          created_at: new Date('2016-08-18 14:26:16 UTC'),
          updated_at: new Date('2016-08-18 14:26:16 UTC')
        },
        {
          id: 15,
          entry_id: 3,
          photo_url: 'https://res.cloudinary.com/xchau/image/upload/v1491090623/stupa4_mhdm6k.jpg',
          caption: 'Stupa peak.',
          created_at: new Date('2016-08-18 14:26:16 UTC'),
          updated_at: new Date('2016-08-18 14:26:16 UTC')
        },
        {
          id: 16,
          entry_id: 3,
          photo_url: 'https://res.cloudinary.com/xchau/image/upload/v1491090681/stupa5_uu6wf5.jpg',
          caption: 'Waiting for his parents patiently.',
          created_at: new Date('2016-08-18 14:26:16 UTC'),
          updated_at: new Date('2016-08-18 14:26:16 UTC')
        },
        {
          id: 17,
          entry_id: 3,
          photo_url: 'https://res.cloudinary.com/xchau/image/upload/v1491090772/stupa6_u1ymir.jpg',
          caption: 'Prayer flags @ the stupa.',
          created_at: new Date('2016-08-18 14:26:16 UTC'),
          updated_at: new Date('2016-08-18 14:26:16 UTC')
        },
        {
          id: 18,
          entry_id: 4,
          photo_url: 'https://res.cloudinary.com/xchau/image/upload/v1491090867/eve1_cxlrvg.jpg',
          caption: 'Setting up basecamp in the cold.',
          created_at: new Date('2016-08-22 14:26:16 UTC'),
          updated_at: new Date('2016-08-22 14:26:16 UTC')
        },
        {
          id: 19,
          entry_id: 4,
          photo_url: 'https://res.cloudinary.com/xchau/image/upload/v1491090983/eve2_vt0xfo.jpg',
          caption: 'Even at its base, everest is beautiful.',
          created_at: new Date('2016-08-22 14:26:16 UTC'),
          updated_at: new Date('2016-08-22 14:26:16 UTC')
        },
        {
          id: 20,
          entry_id: 4,
          photo_url: 'https://res.cloudinary.com/xchau/image/upload/v1491091260/eve3_lqzvjk.jpg',
          caption: 'May be the most perilous part of the climb.',
          created_at: new Date('2016-08-22 14:26:16 UTC'),
          updated_at: new Date('2016-08-22 14:26:16 UTC')
        },
        {
          id: 20,
          entry_id: 4,
          photo_url: 'https://res.cloudinary.com/xchau/image/upload/v1491091347/eve4_qz44fn.jpg',
          caption: 'Privacy still exists up here.',
          created_at: new Date('2016-08-23 14:26:16 UTC'),
          updated_at: new Date('2016-08-23 14:26:16 UTC')
        },
        {
          id: 21,
          entry_id: 4,
          photo_url: 'https://res.cloudinary.com/xchau/image/upload/v1491091415/eve5_rqh5sv.jpg',
          caption: 'The long, long climb up.',
          created_at: new Date('2016-08-24 14:26:16 UTC'),
          updated_at: new Date('2016-08-24 14:26:16 UTC')
        },
        {
          id: 22,
          entry_id: 4,
          photo_url: 'https://res.cloudinary.com/xchau/image/upload/v1491091540/eve6_nmqqgo.jpg',
          caption: 'Hello from the top of the world. :)',
          created_at: new Date('2016-08-24 14:26:16 UTC'),
          updated_at: new Date('2016-08-24 14:26:16 UTC')
        },
        {
          id: 23,
          entry_id: 5,
          photo_url: 'https://res.cloudinary.com/xchau/image/upload/v1491091639/flyb1_clmrgp.jpg',
          caption: 'So excited to kick off this long awaited vacation!',
          created_at: new Date('2017-03-24 17:26:16 UTC'),
          updated_at: new Date('2017-03-24 17:26:16 UTC')
        },
        {
          id: 24,
          entry_id: 5,
          photo_url: 'https://res.cloudinary.com/xchau/image/upload/v1491094216/flyb2_dt6g5q.jpg',
          caption: 'About to land @ El Alto.',
          created_at: new Date('2017-03-24 17:26:16 UTC'),
          updated_at: new Date('2017-03-24 17:26:16 UTC')
        },
        {
          id: 25,
          entry_id: 5,
          photo_url: 'https://res.cloudinary.com/xchau/image/upload/v1491094288/paz1_pums1n.jpg',
          caption: 'I don\'t think we\'re in Kansas anymore.',
          created_at: new Date('2017-03-25 17:26:16 UTC'),
          updated_at: new Date('2017-03-25 17:26:16 UTC')
        },
        {
          id: 26,
          entry_id: 5,
          photo_url: 'https://res.cloudinary.com/xchau/image/upload/v1491094395/paz2_fiv687.jpg',
          caption: 'Hostel is in a pretty lively area.',
          created_at: new Date('2017-03-25 17:26:16 UTC'),
          updated_at: new Date('2017-03-25 17:26:16 UTC')
        },
        {
          id: 27,
          entry_id: 5,
          photo_url: 'https://res.cloudinary.com/xchau/image/upload/v1491094505/paz3_rqlhgu.jpg',
          caption: 'Hostel La Paz has a very cozy vibe.',
          created_at: new Date('2017-03-25 17:26:16 UTC'),
          updated_at: new Date('2017-03-25 17:26:16 UTC')
        },
      ]);
    })
    .then(() => {
      return knex.raw(
       "SELECT setval('photos_id_seq', (SELECT MAX(id) FROM photos));"
     );
    });
};
