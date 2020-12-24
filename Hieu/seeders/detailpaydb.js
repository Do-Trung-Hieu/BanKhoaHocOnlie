'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        let data = [
            {   productId: 4, payId: 1 },
            {   productId: 8, payId: 2 },
            {   productId: 3, payId: 3 },
            {   productId: 7, payId: 4 },
            {   productId: 2, payId: 5 },
            {   productId: 9, payId: 6 },


        ];
        data.map(item => {
            item.createdAt = Sequelize.literal('NOW()');
            item.updatedAt = Sequelize.literal('NOW()');
            return item;
        });
        return queryInterface.bulkInsert('Detailpays', data, {});
    },

    down: (queryInterface, Sequelize) => {

        return queryInterface.bulkDelete('Detailpays', null, {});

    }
}; 