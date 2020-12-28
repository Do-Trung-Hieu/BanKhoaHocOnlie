'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        let data = [
            { name: 'IT' ,imagepath: 'img/category/it.jpg'},
            { name: 'Ngoại Ngữ' ,imagepath: 'img/category/nn.jpg'},
            { name: 'Phần Mềm' , imagepath: 'img/category/pm.jpg'},


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