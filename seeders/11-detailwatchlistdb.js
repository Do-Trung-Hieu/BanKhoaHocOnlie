'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        let data = [
            {   userId: 2,productId: 5 },
            {   userId: 2,productId: 3 },
            {   userId: 3,productId: 6 },
            {   userId: 3,productId: 1 },
            {   userId: 4,productId: 7 },
            {   userId: 4,productId: 11 }


        ];
        data.map(item => {
            item.createdAt = Sequelize.literal('NOW()');
            item.updatedAt = Sequelize.literal('NOW()');
            return item;
        });
        return queryInterface.bulkInsert('Detailwatchlists', data, {});
    },

    down: (queryInterface, Sequelize) => {

        return queryInterface.bulkDelete('Detailwatchlists', null, {});

    }
}; 