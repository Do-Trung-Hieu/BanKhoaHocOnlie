'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        let data = [
            { name: 'Lập trình thiết bị di động' , imagepath: '/img/category/lttbdd.jpg', categoryId: 1},
            { name: 'Lập trình web' ,imagepath: '/img/category/ltw.png', categoryId: 1},
            { name: 'Ngôn ngữ' ,imagepath: '/img/category/nnlt.jpg', categoryId: 1},
            { name: 'Tiếng Anh' ,imagepath: '/img/category/tienganh.jpg', categoryId: 2},
            { name: 'Tiếng Hàn' ,imagepath: '/img/category/tienghan.jpg', categoryId: 2},
            { name: 'Tiếng Trung' ,imagepath: '/img/category/tiengtrung.png', categoryId: 2},
            { name: 'Photoshop' ,imagepath: '/img/category/photoshop.png', categoryId: 3},
            { name: 'Premiere pro' ,imagepath: '/img/category/premiere.png', categoryId: 3},
            { name: 'Kinh doanh Online' ,imagepath: '/img/category/kdonline.jpg', categoryId: 4},
            { name: 'Marketing' ,imagepath: '/img/category/marketingonline.jpg', categoryId: 4},


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