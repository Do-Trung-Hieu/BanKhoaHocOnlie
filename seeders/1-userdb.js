'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        let data = [
            { email: 'admin@gmail.com',
              password: '$2a$10$mhrCmOb0ZBRiJErfHI7AleXyEOl./7.HFemIsWrBbfk5fRhjJY83y',
              fullname: 'admin',
              imagepath: '/img/users/admin.jpg',
              lockuser: false,
              isAdmin: '1',
              secrettoken: '',
              active: true
            },
            { email: 'hieudo@gmail.com',
              password: '$2a$10$mhrCmOb0ZBRiJErfHI7AleXyEOl./7.HFemIsWrBbfk5fRhjJY83y',
              fullname: 'Trung Hiếu',
              imagepath: '/img/users/hieudo.jpg',
              lockuser: false,
              isAdmin: '0',
              secrettoken: '',
              active: true
            },
            { email: 'hieunguyen@gmail.com',
              password: '$2a$10$mhrCmOb0ZBRiJErfHI7AleXyEOl./7.HFemIsWrBbfk5fRhjJY83y',
              fullname: 'Văn Hiếu',
              imagepath: '/img/users/hieunguyen.jpg',
              lockuser: false,
              isAdmin: '0',
              secrettoken: '',
              active: true
            },
            { email: 'duclam@gmail.com',
              password: '$2a$10$mhrCmOb0ZBRiJErfHI7AleXyEOl./7.HFemIsWrBbfk5fRhjJY83y',
              fullname: 'Thiên Đức',
              imagepath: '/img/users/duclam.jpg',
              lockuser: false,
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