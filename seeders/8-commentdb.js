'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        let data = [

            { message: 'Bạn có thể cho tôi một vài trang web học thêm hay project để thực hành nhiều hơn không?' ,
            productId: 3,
            userId: 2,
            parentCommentId: null},
            
            { message: 'Tôi thấy khó quá.Có mẹo gì để học không?' ,
            productId: 3,
            userId: 3,
            parentCommentId: null},
            
            { message: 'Có thể cung cấp cho tôi thêm nhiều ví dụ không?' ,
            productId: 3,
            userId: 4,
            parentCommentId: null},
            
        ];
        data.map(item => {
            item.createdAt = Sequelize.literal('NOW()');
            item.updatedAt = Sequelize.literal('NOW()');
            return item;
        });
        return queryInterface.bulkInsert('Comments', data, {});
    },

    down: (queryInterface, Sequelize) => {

        return queryInterface.bulkDelete('Comments', null, {});

    }
}; 