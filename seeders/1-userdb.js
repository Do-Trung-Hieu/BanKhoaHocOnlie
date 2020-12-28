'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        let data = [
            { email: 'admin@gmail.com',
              password: '1234',
              fullname: 'admin',
              imagepath: 'img/UAT/admin.jpg',
              isAdmin: '1'
            },
            { email: 'hieudo@gmail.com',
              password: '1234',
              fullname: 'Trung Hiếu',
              imagepath: 'img/UAT/hieudo.jpg',
              isAdmin: '0'
            },
            { email: 'hieunguyen@gmail.com',
              password: '1234',
              fullname: 'Văn Hiếu',
              imagepath: 'img/UAT/hieunguyen.jpg',
              isAdmin: '0'
            },
            { email: 'duclam@gmail.com',
              password: '1234',
              fullname: 'Thiên Đức',
              imagepath: 'img/UAT/duclam.jpg',
              isAdmin: '0'
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