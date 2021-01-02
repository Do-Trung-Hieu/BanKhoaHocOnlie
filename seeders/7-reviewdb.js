'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        let data = [
            { userId: 2,
                productId: 3,
                message: 'Rất hay',
                rating: 5
            },
            { userId: 3,
                productId: 3,
                message: 'Không thể tin được.Tôi rất hài lòng về khoá học này',
                rating: 5
            },
            { userId: 4,
                productId: 3,
                message: 'Tuyệt vời',
                rating: 5
            }
        ];
        data.map(item => {
            item.createdAt = Sequelize.literal('NOW()');
            item.updatedAt = Sequelize.literal('NOW()');
            return item;
        });
        return queryInterface.bulkInsert('Reviews', data, {});
    },

    down: (queryInterface, Sequelize) => {

        return queryInterface.bulkDelete('Reviews', null, {});

    }
}; 