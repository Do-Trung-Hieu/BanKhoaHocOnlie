'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        let data = [
            { userId: 2,
                productId: 4,
                message: 'Rất hay',
                rating: 4
            },
            { userId: 3,
                productId: 3,
                message: 'Không thể tin được.Tôi rất hài lòng về khoá học này',
                rating: 5
            },
            { userId: 4,
                productId: 9,
                message: 'Tuyệt vời',
                rating: 5
            },
            { userId:3 ,
                productId: 7,
                message: 'Tôi nghĩ nên cải thiện về chất lượng video',
                rating: 3
            },
            { userId:2 ,
                productId: 8,
                message: 'Khoá học này không như tôi mong đợi',
                rating: 2
            },
            { userId: 4,
                productId: 2,
                message: 'Tôi thấy giá của khoá học này không phù hợp với nội dung bài học',
                rating: 3
            },


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