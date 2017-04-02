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
          id: 7,
          entry_id: 2,
          photo_url: 'https://res.cloudinary.com/xchau/image/upload/v1491089265/nepal11_on30lh.jpg',
          caption: 'Morning prayer.',
          created_at: new Date('2016-08-17 14:26:16 UTC'),
          updated_at: new Date('2016-08-17 14:26:16 UTC')
        },
        {
          id: 8,
          entry_id: 2,
          photo_url: 'https://res.cloudinary.com/xchau/image/upload/v1491089396/nepal12_rxuu96.jpg',
          caption: 'Prayer bells.',
          created_at: new Date('2016-08-17 14:26:16 UTC'),
          updated_at: new Date('2016-08-17 14:26:16 UTC')
        },
        {
          id: 9,
          entry_id: 2,
          photo_url: 'https://res.cloudinary.com/xchau/image/upload/v1491089822/nepal13_ryu57n.jpg',
          caption: 'Farmland. Watch out for cow dung.',
          created_at: new Date('2016-08-17 14:26:16 UTC'),
          updated_at: new Date('2016-08-17 14:26:16 UTC')
        },
        {
          id: 10,
          entry_id: 2,
          photo_url: 'https://res.cloudinary.com/xchau/image/upload/v1491089882/nepal14_sduib9.jpg',
          caption: 'The beauty of Swayambhu Temple.',
          created_at: new Date('2016-08-17 14:26:16 UTC'),
          updated_at: new Date('2016-08-17 14:26:16 UTC')
        },
        {
          id: 11,
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
          id: 21,
          entry_id: 4,
          photo_url: 'https://res.cloudinary.com/xchau/image/upload/v1491091347/eve4_qz44fn.jpg',
          caption: 'Privacy still exists up here.',
          created_at: new Date('2016-08-23 14:26:16 UTC'),
          updated_at: new Date('2016-08-23 14:26:16 UTC')
        },
        {
          id: 22,
          entry_id: 4,
          photo_url: 'https://res.cloudinary.com/xchau/image/upload/v1491091415/eve5_rqh5sv.jpg',
          caption: 'The long, long climb up.',
          created_at: new Date('2016-08-24 14:26:16 UTC'),
          updated_at: new Date('2016-08-24 14:26:16 UTC')
        },
        {
          id: 23,
          entry_id: 4,
          photo_url: 'https://res.cloudinary.com/xchau/image/upload/v1491091540/eve6_nmqqgo.jpg',
          caption: 'Hello from the top of the world. :)',
          created_at: new Date('2016-08-24 14:26:16 UTC'),
          updated_at: new Date('2016-08-24 14:26:16 UTC')
        },
        {
          id: 24,
          entry_id: 5,
          photo_url: 'https://res.cloudinary.com/xchau/image/upload/v1491091639/flyb1_clmrgp.jpg',
          caption: 'So excited to kick off this long awaited vacation!',
          created_at: new Date('2017-03-24 17:26:16 UTC'),
          updated_at: new Date('2017-03-24 17:26:16 UTC')
        },
        {
          id: 25,
          entry_id: 5,
          photo_url: 'https://res.cloudinary.com/xchau/image/upload/v1491094216/flyb2_dt6g5q.jpg',
          caption: 'About to land @ El Alto.',
          created_at: new Date('2017-03-24 17:26:16 UTC'),
          updated_at: new Date('2017-03-24 17:26:16 UTC')
        },
        {
          id: 26,
          entry_id: 5,
          photo_url: 'https://res.cloudinary.com/xchau/image/upload/v1491094288/paz1_pums1n.jpg',
          caption: 'I don\'t think we\'re in Kansas anymore.',
          created_at: new Date('2017-03-25 17:26:16 UTC'),
          updated_at: new Date('2017-03-25 17:26:16 UTC')
        },
        {
          id: 27,
          entry_id: 5,
          photo_url: 'https://res.cloudinary.com/xchau/image/upload/v1491094395/paz2_fiv687.jpg',
          caption: 'Hostel is in a pretty lively area.',
          created_at: new Date('2017-03-25 17:26:16 UTC'),
          updated_at: new Date('2017-03-25 17:26:16 UTC')
        },
        {
          id: 28,
          entry_id: 5,
          photo_url: 'https://res.cloudinary.com/xchau/image/upload/v1491094505/paz3_rqlhgu.jpg',
          caption: 'Hostel La Paz has a very cozy vibe.',
          created_at: new Date('2017-03-25 17:26:16 UTC'),
          updated_at: new Date('2017-03-25 17:26:16 UTC')
        },
        {
          id: 29,
          entry_id: 5,
          photo_url: 'https://res.cloudinary.com/xchau/image/upload/v1491096352/paz4_mqgz7s.jpg',
          caption: 'That\'s a lot of goats, La Paz!',
          created_at: new Date('2017-03-24 17:26:16 UTC'),
          updated_at: new Date('2017-03-24 17:26:16 UTC')
        },
        {
          id: 30,
          entry_id: 6,
          photo_url: 'https://res.cloudinary.com/xchau/image/upload/v1491096441/food1_sqgqh3.jpg',
          caption: 'Freshly made licuado to ease the sweltering heat.',
          created_at: new Date('2017-03-25 17:26:16 UTC'),
          updated_at: new Date('2017-03-25 17:26:16 UTC')
        },
        {
          id: 31,
          entry_id: 6,
          photo_url: 'http://res.cloudinary.com/xchau/image/upload/v1491096596/food2_bcgcq0.jpg',
          caption: 'Choripan. Simply delicious.',
          created_at: new Date('2017-03-25 17:26:16 UTC'),
          updated_at: new Date('2017-03-25 17:26:16 UTC')
        },
        {
          id: 32,
          entry_id: 6,
          photo_url: 'https://res.cloudinary.com/xchau/image/upload/v1491096729/food3_hxatrq.jpg',
          caption: 'Milanesa for dinner. Gotta try making this at home.',
          created_at: new Date('2017-03-25 17:26:16 UTC'),
          updated_at: new Date('2017-03-25 17:26:16 UTC')
        },
        {
          id: 33,
          entry_id: 6,
          photo_url: 'https://res.cloudinary.com/xchau/image/upload/v1491096828/food4_acei2z.jpg',
          caption: 'Re-energize with some Bolivian soda.',
          created_at: new Date('2017-03-25 17:26:16 UTC'),
          updated_at: new Date('2017-03-25 17:26:16 UTC')
        },
        {
          id: 34,
          entry_id: 7,
          photo_url: 'https://res.cloudinary.com/xchau/image/upload/v1491096967/lei1_bxrznx.jpg',
          caption: 'Leicester @ night.',
          created_at: new Date('2015-07-04 20:12:15 UTC'),
          updated_at: new Date('2015-07-04 20:12:15 UTC')
        },
        {
          id: 35,
          entry_id: 7,
          photo_url: 'https://res.cloudinary.com/xchau/image/upload/v1491097101/lei2_d2f3nm.jpg',
          caption: 'M&Ms World!!',
          created_at: new Date('2015-07-04 18:12:15 UTC'),
          updated_at: new Date('2015-07-04 18:12:15 UTC')
        },
        {
          id: 36,
          entry_id: 7,
          photo_url: 'https://res.cloudinary.com/xchau/image/upload/v1491097249/pica1_hlmhcz.jpg',
          caption: 'Picadilly @ Night',
          created_at: new Date('2015-07-04 21:12:15 UTC'),
          updated_at: new Date('2015-07-04 21:12:15 UTC')
        },
        {
          id: 37,
          entry_id: 7,
          photo_url: 'https://res.cloudinary.com/xchau/image/upload/v1491097384/lonc1_s7autz.jpg',
          caption: 'Grabbing breakfast in London\'s Chinatown.',
          created_at: new Date('2015-07-04 08:12:15 UTC'),
          updated_at: new Date('2015-07-04 08:12:15 UTC')
        },
        {
          id: 38,
          entry_id: 7,
          photo_url: 'https://res.cloudinary.com/xchau/image/upload/v1491097472/lonc2_w1wtlp.jpg',
          caption: 'Chinatown festivities.',
          created_at: new Date('2015-07-04 08:12:15 UTC'),
          updated_at: new Date('2015-07-04 08:12:15 UTC')
        },
        {
          id: 39,
          entry_id: 7,
          photo_url: 'https://res.cloudinary.com/xchau/image/upload/v1491097615/lei3_xz7yqq.jpg',
          caption: 'Lunch time!',
          created_at: new Date('2015-07-04 12:12:15 UTC'),
          updated_at: new Date('2015-07-04 12:12:15 UTC')
        },
        {
          id: 40,
          entry_id: 8,
          photo_url: 'https://res.cloudinary.com/xchau/image/upload/v1491097729/south1_hxvzmj.jpg',
          caption: 'The area around Southfields seems sparse.',
          created_at: new Date('2015-07-04 12:12:15 UTC'),
          updated_at: new Date('2015-07-04 12:12:15 UTC')
        },
        {
          id: 41,
          entry_id: 8,
          photo_url: 'https://res.cloudinary.com/xchau/image/upload/v1491097821/south2_vnvufn.jpg',
          caption: 'Now to find the All England Lawn Sports Club...',
          created_at: new Date('2015-07-04 12:12:15 UTC'),
          updated_at: new Date('2015-07-04 12:12:15 UTC')
        },
        {
          id: 42,
          entry_id: 8,
          photo_url: 'https://res.cloudinary.com/xchau/image/upload/v1491097931/south3_w0m34o.jpg',
          caption: 'The club should be right around the corner!',
          created_at: new Date('2015-07-04 12:12:15 UTC'),
          updated_at: new Date('2015-07-04 12:12:15 UTC')
        },
        {
          id: 43,
          entry_id: 9,
          photo_url: 'https://res.cloudinary.com/xchau/image/upload/v1491098054/gf1_byt5aw.jpg',
          caption: 'Serena about the dish up a bomb!',
          created_at: new Date('2015-07-05 12:12:15 UTC'),
          updated_at: new Date('2015-07-05 12:12:15 UTC')
        },
        {
          id: 44,
          entry_id: 9,
          photo_url: 'https://res.cloudinary.com/xchau/image/upload/v1491098122/gf2_qkizet.jpg',
          caption: 'Novak returning an ill-timed, ill-placed lob from Fed.',
          created_at: new Date('2015-07-05 12:12:15 UTC'),
          updated_at: new Date('2015-07-05 12:12:15 UTC')
        },
        {
          id: 45,
          entry_id: 9,
          photo_url: 'https://res.cloudinary.com/xchau/image/upload/v1491098232/gf3_ajur8b.jpg',
          caption: 'Good luck, Roger. You\'ll need it.',
          created_at: new Date('2015-07-05 12:12:15 UTC'),
          updated_at: new Date('2015-07-05 12:12:15 UTC')
        },
      ]);
    })
    .then(() => {
      return knex.raw(
       "SELECT setval('photos_id_seq', (SELECT MAX(id) FROM photos));"
     );
    });
};
