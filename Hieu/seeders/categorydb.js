'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        let data = [
            { name: 'IT' ,imagepath: ''},
            { name: 'Ngoại Ngữ' ,imagepath: ''},
            { name: 'Phần Mềm' , imagepath: ''},


        ];
        data.map(item => {
            item.createdAt = Sequelize.literal('NOW()');
            item.updatedAt = Sequelize.literal('NOW()');
            return item;
        });
        return queryInterface.bulkInsert('Categories', data, {});
    },

    down: (queryInterface, Sequelize) => {

        return queryInterface.bulkDelete('Categories', null, {});

    }
}; 