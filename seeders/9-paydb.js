'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        let data = [
            { price: '5.99', productId: 4 ,userId: 2 }

        ];
        data.map(item => {
            item.createdAt = Sequelize.literal('NOW()');
            item.updatedAt = Sequelize.literal('NOW()');
            return item;
        });
        return queryInterface.bulkInsert('Pays', data, {});
    },

    down: (queryInterface, Sequelize) => {

        return queryInterface.bulkDelete('Pays', null, {});

    }
}; 