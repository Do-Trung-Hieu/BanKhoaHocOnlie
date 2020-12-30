'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        let data = [
            { name: 'Lập trình thiết bị di động' , categoryId: 1},
            { name: 'Lập trình web' , categoryId: 1},
            { name: 'Ngôn ngữ' , categoryId: 1},
            { name: 'Tiếng Anh' , categoryId: 2},
            { name: 'Tiếng Hàn' , categoryId: 2},
            { name: 'Tiếng Trung' , categoryId: 2},
            { name: 'Photoshop' , categoryId: 3},
            { name: 'Premiere pro' , categoryId: 3},
            { name: 'Kinh doanh Online' , categoryId: 4},
            { name: 'Marketing' , categoryId: 4},


        ];
        data.map(item => {
            item.createdAt = Sequelize.literal('NOW()');
            item.updatedAt = Sequelize.literal('NOW()');
            return item;
        });
        return queryInterface.bulkInsert('Topics', data, {});
    },

    down: (queryInterface, Sequelize) => {

        return queryInterface.bulkDelete('Topics', null, {});

    }
}; 