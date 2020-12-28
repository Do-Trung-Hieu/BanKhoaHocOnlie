'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        let data = [
            { name: 'Lập trình Android',
                price: '15.68',
                description: '<p>Với xu hướng ngày càng phát triển của Android, đã kéo theo nhu cầu tuyển dụng lập trình Android ngày càng khốc liệt. Và lập trình Android chính là cơ hội tuyệt vời nhất, đặc biệt là các bạn trẻ.<p></br>                <p>Nắm bắt được nhu cầu tuyển dụng lập trình Android ngày càng nóng, chúng tôi đã cho ra mắt Khóa Học Lập Trình Android. Chỉ cần hoàn tất 4 tháng của Khóa Học Lập Trình Android & hoàn tất các bài lab hỗ trợ dành riêng cho học viên của chúng tôi. Học viên sẽ đủ khả năng ứng tuyển vị trí lập trình Android tại các công ty hoặc trở thành một Freelancer với mức lương tự do.</p></br>',
                imagepath: 'img/product/lt_android.jpg',
                imagedetail: 'public/image/img/lt_android_dt.jpg',
                teacherId: '2',
                topicId: '1',
                overallreview: '3.5',
                reviewCount: '2'
             },
            { name: 'Lập trình IOS',
                price: '26.48',
                description: '<p>Khóa học “Lập trình IOS” của chúng tôi sẽ trang bị các kiến thức, kỹ năng để bạn trở thành Lập trình viên chuyên nghiệp trên nền tảng các thiết bị của Apple như iPhone, iPad, iWatch, Macbook… Từ đó, giúp bạn sẵn sàng tiếp nhận công việc tại các công ty phần mềm hiện nay.</p></br>',
                imagepath: 'img/product/lt_ios.jpg',
                imagedetail: 'public/image/img/lt_ios_dt.jpg',
                teacherId: '2',
                topicId: '1',
                overallreview: '4',
                reviewCount: '2'
             },
            { name: 'CSS',
                price: '10.99',
                description: '<p>Khóa học này sẽ cung cấp cho học viên những kiến thức cơ bản, cần thiết nhất để bắt đầu trên con đường trở thành một lập trình viên ứng dụng Web chuyên nghiệp. CSS là những kiến thức cơ bản cần trang bị trước khi tiếp cận với các công nghệ, nền tảng lập trình Web hiện đại như ASP.NET, PHP…</p></br>',
                imagepath: 'img/product/css.jpg',
                imagedetail: 'public/image/img/css_dt.jpg',
                teacherId: '2',
                topicId: '2',
                overallreview: '3',
                reviewCount: '4'
             },
            { name: 'HTML',
                price: '5.99',
                description: '<p>Trong xuyên suốt phần học này, bạn sẽ hiểu được làm thế nào mà một tập tin website được hình thành, cách triển khai nó và quan trọng nhất là ý nghĩa của những thẻ HTML (nhất là các thẻ thông dụng) vì sau này nó sẽ theo bạn suốt thời gian làm website.</p></br>',
                imagepath: 'img/product/html.jpg',
                imagedetail: 'public/image/img/html_dt.jpg',
                teacherId: '2',
                topicId: '2',
                overallreview: '5',
                reviewCount: '1'
             },
            { name: 'Ngữ pháp cơ bản',
                price: '20',
                description: '<p>Khóa học xây dựng một hệ thống ngữ pháp tiếng Anh cực chi tiết. Toàn bộ các chủ điểm ngữ pháp THEN CHỐT đều được giảng tỉ mỉ, gần gũi và dễ hiểu thông qua các ví dụ thực tiễn. Kèm theo đó là các chủ điểm ngữ pháp khó: Thì động từ được hướng dẫn thông qua trục thời gian và tư duy logic, giúp bạn hiểu bản chất, tránh việc học truyền thống đọc chép.</p></br>',
                imagepath: 'img/product/nguphapcoban.jpg',
                imagedetail: 'public/image/img/nguphapcoban_dt.jpg',
                teacherId: '1',
                topicId: '3',
                overallreview: '4',
                reviewCount: '1'
             },
            { name: 'Tiếng Anh giao tiếp cơ bản',
                price: '12.99',
                description: '<p>"Bạn sẽ gặp những tình huống giao tiếp thực tế đòi hỏi bạn cần phải có phản xạ giao tiếp tốt và sau khi học xong mỗi bài học bạn hoàn toàn có thể áp dụng ngay để sử dụng trong học tập cũng như trong công việc của mình. Khóa học đồng thời cũng hướng dẫn cách phát âm và củng cố vốn từ vựng, ngữ pháp căn bản trong tiếng Anh.<p></br><p>Vậy nên các bạn hãy bắt đầu đăng ký ngay khóa học Tiếng Anh giao tiếp cơ bản của chúng tôi và luyện tập theo các chủ đề thông dụng trong khóa học này nhé!"</p></br>',
                imagepath: 'img/product/tienganhcoban.jpg',
                imagedetail: 'public/image/img/tienganhcoban_dt.jpg',
                teacherId: '1',
                topicId: '3',
                overallreview: '3.5',
                reviewCount: '2'
             },
            { name: 'Tiếng Hàn giao tiếp',
                price: '13.64',
                description: '<p>"Với 54 bài giảng về 8 chủ đề về học tiếng Hàn quốc giao tiếp từ những kiến thức cơ bản về nguyên âm, phụ âm của Tiếng Hàn, đến cách sử dụng tiếng Hàn trong các trường hợp sinh hoạt hàng ngày như: ở nhà, đời sống, cuối tuần, trường học, thời tiết, du lịch, mua sắm,...với vồn từ vựng đầy đủ cũng như cấu trúc ngữ pháp, xử lý tình huống trong từng văn cảnh hội thoại cụ thể.      <p></br><p>Chắc chắn sau khóa học Học tiếng Hàn giao tiếp của chúng tôi, trình độ tiếng Hàn của bạn sẽ được cải thiện, bạn sẽ tự tin hơn để trò chuyện với người Hàn Quốc.</p></br>',
                imagepath: 'img/product/tienghangiaotiep.jpg',
                imagedetail: 'public/image/img/tienghangiaotiep_dt.jpg',
                teacherId: '1',
                topicId: '4',
                overallreview: '5',
                reviewCount: '1'
             },
            { name: 'Tiếng Trung giao tiếp cấp tốc',
                price: '24.12',
                description: '<p>Một khóa học online nhanh chóng là giải pháp dành cho bạn. Unica mang đến cho bạn khóa học Tiếng Trung giao tiếp - 1. Đây sẽ là khóa học hứa hẹn mang đến cho bạn khả năng giao tiếp tiếng Trung cơ bản một cách thành thạo.</p></br>',
                imagepath: 'img/product/tiengtrunggiaotiep.jpg',
                imagedetail: 'public/image/img/tiengtrunggiaotiep_dt.jpg',
                teacherId: '1',
                topicId: '5',
                overallreview: '4.5',
                reviewCount: '2'
             },
            { name: 'Học xoá vật thế trong Photoshop',
                price: '8.5',
                description: '<p>Khoá học này của chúng tôi sẽ giúp bạn học được cách xoá vật thể chuyên nghiệp bằng Photoshop.</p></br>',
                imagepath: 'img/product/xoavatthe.jpg',
                imagedetail: 'public/image/img/xoavatthe_dt.jpg',
                teacherId: '2',
                topicId: '6',
                overallreview: '3.5',
                reviewCount: '6'
             },
            { name: 'Khoá học Photoshop cấp tốc',
                price: '30.12',
                description: '<p>"Cho dù bạn giỏi lĩnh vực nào đi nữa thì bạn cũng cần có một thầy dạy hoặc một chuyên gia. Chính vì thế, bạn cần phải có thầy dạy để đi theo học hỏi.Chình vì thế, khóa “Học photoshop cấp tốc” của chúng tôi sẽ giúp bạn những kỹ năng, thao tác cần thiết nhất để làm chủ Adobe Photoshop."</p></br>',
                imagepath: 'img/product/photoshopcaptoc.jpg',
                imagedetail: 'public/image/img/photoshopcaptoc_dt.jpg',
                teacherId: '2',
                topicId: '6',
                overallreview: '4.2',
                reviewCount: '5'
             },
            { name: 'Học chuyển cảnh trong Premiere Pro',
                price: '6.46',
                description: '<p>Khoá học của chúng tôi sẽ giúp bạn thành thạo kỹ năng chuyển cảnh cũng như 1 số hiệu ứng chuyển cảnh cần dùng trong 1 số trường hợp.</p></br>',
                imagepath: 'img/product/chuyencanh.jpg',
                imagedetail: 'public/image/img/chuyencanh_dt.jpg',
                teacherId: '2',
                topicId: '7',
                overallreview: '2.5',
                reviewCount: '4'
             },
            { name: 'Khoá học cấp tốc trong Premiere Pro',
                price: '32.78',
                description: '<p>Với bố cục bài giảng chi tiết cụ thể được chia thành từng phần, với mỗi phần học có thể giúp người học tạo ra một sản phẩm với mức độ phức tạp phát triển lên dần, từ các video slideshow hình ảnh đơn giản, cho tới video có nội dung, video trailer... rất phù hợp với những bạn mới bắt đầu tiếp xúc và học làm video cơ bản.</p></br>',
                imagepath: 'img/product/AdobePremierecaptoc.jpg',
                imagedetail: 'public/image/img/AdobePremierecaptoc_dt.jpg',
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
