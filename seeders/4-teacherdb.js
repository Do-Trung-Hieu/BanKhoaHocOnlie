'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        let data = [
            { email: 'huongnguyen@gmail.com',
            password: '1234',
            fullname: 'Nguyễn Thị Hường',
            imagepath: 'img/UAT/nth.jpg',
            },
            { email: 'datnguyen@gmail.com',
            password: '1234',
            fullname: 'Phan Tiến Đạt',
            imagepath: 'img/UAT/ptd.jpg',
            },
            { email: 'hongnguyen@gmail.com',
            password: '1234',
            fullname: 'Nguyễn Thị Hồng',
            imagepath: 'img/UAT/nth.jpg',
            },
            { email: 'tanvo@gmail.com',
            password: '1234',
            fullname: 'Võ Văn Tần',
            imagepath: 'img/UAT/vvt.jpg',
            },
            { email: 'laopham@gmail.com',
            password: '1234',
            fullname: 'Phạm Ngũ Lão',
            imagepath: 'img/UAT/pnl.jpg',
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