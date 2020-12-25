'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        let data = [
            { total: '5.99 ', userId: 2},
            { total: '24.12 ', userId: 2},
            { total: '10.99 ', userId: 3},
            { total: ' 13.64', userId: 3},
            { total: '26.48 ', userId: 4},
            { total: '8.5 ', userId: 4}


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