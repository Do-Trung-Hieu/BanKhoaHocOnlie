'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        let data = [
            { name: 'Lập trình thiết bị di động ' , categoryid: '1'},
            { name: 'Lập trình web ' , categoryid: '1'},
            { name: 'Tiếng Anh ' , categoryid: '2'},
            { name: 'Tiếng Hàn ' , categoryid: '2'},
            { name: 'Tiếng Trung ' , categoryid: '2'},
            { name: ' Photoshop' , categoryid: '3'},
            { name: ' Premiere pro' , categoryid: '3'}

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