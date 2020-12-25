'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        let data = [
            { name: 'Lập trình Android',
                price: '15.68',
                description: '',
                imagepath: '/img/product/lt_android.jpg',
                imagedetail: '',
                teacherId: '2',
                topicId: '1',
                overallreview: '3.5',
                reviewCount: '2'
             },
            { name: 'Lập trình IOS',
                price: '26.48',
                description: '',
                imagepath: '/img/product/lt_ios.jpg',
                imagedetail: '',
                teacherId: '2',
                topicId: '1',
                overallreview: '4',
                reviewCount: '2'
             },
            { name: 'CSS',
                price: '10.99',
                description: '',
                imagepath: '/img/product/css.jpg',
                imagedetail: '',
                teacherId: '2',
                topicId: '2',
                overallreview: '3',
                reviewCount: '4'
             },
            { name: 'HTML',
                price: '5.99',
                description: '',
                imagepath: '/img/product/html.jpg',
                imagedetail: '',
                teacherId: '2',
                topicId: '2',
                overallreview: '5',
                reviewCount: '1'
             },
            { name: 'Ngữ pháp cơ bản',
                price: '20',
                description: '',
                imagepath: '/img/product/nguphapcoban.jpg',
                imagedetail: '',
                teacherId: '1',
                topicId: '3',
                overallreview: '4',
                reviewCount: '1'
             },
            { name: 'Tiếng Anh giao tiếp cơ bản',
                price: '12.99',
                description: '',
                imagepath: '/img/product/tienganhcoban.jpg',
                imagedetail: '',
                teacherId: '1',
                topicId: '3',
                overallreview: '3.5',
                reviewCount: '2'
             },
            { name: 'Tiếng Hàn giao tiếp',
                price: '13.64',
                description: '',
                imagepath: '/img/product/tienghangiaotiep.jpg',
                imagedetail: '',
                teacherId: '1',
                topicId: '4',
                overallreview: '5',
                reviewCount: '1'
             },
            { name: 'Tiếng Trung giao tiếp cấp tốc',
                price: '24.12',
                description: '',
                imagepath: '/img/product/tiengtrunggiaotiep.jpg',
                imagedetail: '',
                teacherId: '1',
                topicId: '5',
                overallreview: '4.5',
                reviewCount: '2'
             },
            { name: 'Học xoá vật thế trong Photoshop',
                price: '8.5',
                description: '',
                imagepath: '/img/product/xoavatthe.jpg',
                imagedetail: '',
                teacherId: '2',
                topicId: '6',
                overallreview: '3.5',
                reviewCount: '6'
             },
            { name: 'Khoá học Photoshop cấp tốc',
                price: '30.12',
                description: '',
                imagepath: '/img/product/photoshopcaptoc.png',
                imagedetail: '',
                teacherId: '2',
                topicId: '6',
                overallreview: '4.2',
                reviewCount: '5'
             },
            { name: 'Học chuyển cảnh trong Premiere Pro',
                price: '6.46',
                description: '',
                imagepath: '/img/product/chuyencanh.jpg',
                imagedetail: '',
                teacherId: '2',
                topicId: '7',
                overallreview: '2.5',
                reviewCount: '4'
             },
            { name: 'Khoá học cấp tốc trong Premiere Pro',
                price: '32.78',
                description: '',
                imagepath: '/img/product/AdobePremierecaptoc.png',
                imagedetail: '',
                teacherId: '2',
                topicId: '7',
                overallreview: '4',
                reviewCount: '2'
             }


        ];
        data.map(item => {
            item.createdAt = Sequelize.literal('NOW()');
            item.updatedAt = Sequelize.literal('NOW()');
            return item;
        });
        return queryInterface.bulkInsert('Products', data, {});
    },

    down: (queryInterface, Sequelize) => {

        return queryInterface.bulkDelete('Products', null, {});

    }
}; 
