'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        let data = [
            { email: 'huongnguyen@gmail.com',
            password: '$2a$10$mhrCmOb0ZBRiJErfHI7AleXyEOl./7.HFemIsWrBbfk5fRhjJY83y',
            fullname: 'Nguyễn Thị Hường',
            imagepath: '/img/users/nth.jpg',
            chuyenmon: 'Ngôn ngữ'
            },
            { email: 'datnguyen@gmail.com',
            password: '$2a$10$mhrCmOb0ZBRiJErfHI7AleXyEOl./7.HFemIsWrBbfk5fRhjJY83y',
            fullname: 'Phan Tiến Đạt',
            imagepath: '/img/users/ptd.jpg',
            chuyenmon: 'Lập trình'
            },
            { email: 'hongnguyen@gmail.com',
            password: '$2a$10$mhrCmOb0ZBRiJErfHI7AleXyEOl./7.HFemIsWrBbfk5fRhjJY83y',
            fullname: 'Nguyễn Thị Hồng',
            imagepath: '/img/users/nth.jpg',
            chuyenmon: 'Marketing'
            },
            { email: 'tanvo@gmail.com',
            password: '$2a$10$mhrCmOb0ZBRiJErfHI7AleXyEOl./7.HFemIsWrBbfk5fRhjJY83y',
            fullname: 'Võ Văn Tần',
            imagepath: '/img/users/vvt.jpg',
            chuyenmon: 'WEB'
            },
            { email: 'laopham@gmail.com',
            password: '$2a$10$mhrCmOb0ZBRiJErfHI7AleXyEOl./7.HFemIsWrBbfk5fRhjJY83y',
            fullname: 'Phạm Ngũ Lão',
            imagepath: '/img/users/pnl.jpg',
            chuyenmon: 'Toán'
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