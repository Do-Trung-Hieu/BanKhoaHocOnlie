'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        let data = [
            {   productId: 4, payId: 1 }
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