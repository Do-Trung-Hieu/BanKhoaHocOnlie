'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        let data = [
            { email: 'admin@gmail.com',
              password: '1234',
              fullname: 'admin',
              imagepath: '',
              isAdmin: '1',
              watchlistId: NULL
            },
            { email: 'hieudo@gmail.com',
              password: '1234',
              fullname: 'Trung Hiếu',
              imagepath: '',
              isAdmin: '0',
              watchlistId: NULL
            },
            { email: 'hieunguyen@gmail.com',
              password: '1234',
              fullname: 'Văn Hiếu',
              imagepath: '',
              isAdmin: '0',
              watchlistId: NULL
            },
            { email: 'duclam@gmail.com',
              password: '1234',
              fullname: 'Thiên Đức',
              imagepath: '',
              isAdmin: '0',
              watchlistId: NULL
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