'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        let data = [
            { email: 'admin@gmail.com',
              password: '1234',
              fullname: 'admin',
              imagepath: '/img/users/admin.jpg',
              isAdmin: '1',
              secrettoken: '',
              active: true
            },
            { email: 'hieudo@gmail.com',
              password: '1234',
              fullname: 'Trung Hiếu',
              imagepath: '/img/users/hieudo.jpg',
              isAdmin: '0',
              secrettoken: '',
              active: true
            },
            { email: 'hieunguyen@gmail.com',
              password: '1234',
              fullname: 'Văn Hiếu',
              imagepath: '/img/users/hieunguyen.jpg',
              isAdmin: '0',
              secrettoken: '',
              active: true
            },
            { email: 'duclam@gmail.com',
              password: '1234',
              fullname: 'Thiên Đức',
              imagepath: '/img/users/duclam.jpg',
              isAdmin: '0',
              secrettoken: '',
              active: true
            },


        ];
        data.map(item => {
            item.createdAt = Sequelize.literal('NOW()');
            item.updatedAt = Sequelize.literal('NOW()');
            return item;
        });
        return queryInterface.bulkInsert('Users', data, {});
    },

    down: (queryInterface, Sequelize) => {

        return queryInterface.bulkDelete('Users', null, {});

    }
}; 