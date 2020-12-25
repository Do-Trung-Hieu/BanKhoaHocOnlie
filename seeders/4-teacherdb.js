'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        let data = [
            { email: 'huongnguyen@gmail.com',
            password: '1234',
            fullname: 'Nguyễn Thị Hường',
            imagepath: '',
            },
            { email: 'datnguyen@gmail.com',
            password: '1234',
            fullname: 'Phan Tiến Đạt',
            imagepath: '',
            },


        ];
        data.map(item => {
            item.createdAt = Sequelize.literal('NOW()');
            item.updatedAt = Sequelize.literal('NOW()');
            return item;
        });
        return queryInterface.bulkInsert('Teachers', data, {});
    },

    down: (queryInterface, Sequelize) => {

        return queryInterface.bulkDelete('Teachers', null, {});

    }
}; 