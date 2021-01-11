'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        let data = [
            { name: 'Lập trình Android',
                price: '15.68',
                promotion: '20',
                description: 'Với xu hướng ngày càng phát triển của Android, đã kéo theo nhu cầu tuyển dụng lập trình Android ngày càng khốc liệt. Và lập trình Android chính là cơ hội tuyệt vời nhất, đặc biệt là các bạn trẻ.                <>Nắm bắt được nhu cầu tuyển dụng lập trình Android ngày càng nóng, chúng tôi đã cho ra mắt Khóa Học Lập Trình Android. Chỉ cần hoàn tất 4 tháng của Khóa Học Lập Trình Android & hoàn tất các bài lab hỗ trợ dành riêng cho học viên của chúng tôi. Học viên sẽ đủ khả năng ứng tuyển vị trí lập trình Android tại các công ty hoặc trở thành một Freelancer với mức lương tự do.',
                summary: 'Với xu hướng ngày càng phát triển của Android, đã kéo theo nhu cầu tuyển dụng lập trình Android ngày càng khốc liệt. Và lập trình Android chính là cơ hội tuyệt vời nhất, đặc biệt là các bạn trẻ.',
                imagepath: '/img/product/lt_android.jpg',
                imagedetail: '/img/product/lt_android_dt.jpg',
                categoryId: 1,
                teacherId: 2,
                topicId: 1,
                overallreview: 0,
                reviewCount: 0
             },
            { name: 'Lập trình IOS',
                price: '26.48',
                promotion: '28',
                description: 'Khóa học “Lập trình IOS” của chúng tôi sẽ trang bị các kiến thức, kỹ năng để bạn trở thành Lập trình viên chuyên nghiệp trên nền tảng các thiết bị của Apple như iPhone, iPad, iWatch, Macbook… Từ đó, giúp bạn sẵn sàng tiếp nhận công việc tại các công ty phần mềm hiện nay.',
                summary: 'Khóa học “Lập trình IOS” của chúng tôi sẽ trang bị các kiến thức, kỹ năng để bạn trở thành Lập trình viên chuyên nghiệp trên nền tảng các thiết bị của Apple như iPhone, iPad, iWatch, Macbook…',
                imagepath: '/img/product/lt_ios.jpg',
                imagedetail: '/img/product/lt_ios_dt.jpg',
                categoryId: 1,
                teacherId: 2,
                topicId: 1,
                overallreview: 0,
                reviewCount: 0
             },
            // ---------------------------------------------------------------------------------------------------
            { name: 'CSS',
                price: '10.99',
                promotion: '15',
                description: 'Khóa học này sẽ cung cấp cho học viên những kiến thức cơ bản, cần thiết nhất để bắt đầu trên con đường trở thành một lập trình viên ứng dụng Web chuyên nghiệp. CSS là những kiến thức cơ bản cần trang bị trước khi tiếp cận với các công nghệ, nền tảng lập trình Web hiện đại như ASP.NET, PHP…',
                summary: 'Khóa học này sẽ cung cấp cho học viên những kiến thức cơ bản, cần thiết nhất để bắt đầu trên con đường trở thành một lập trình viên ứng dụng Web chuyên nghiệp.',
                imagepath: '/img/product/css.jpg',
                imagedetail: '/img/product/css_dt.jpg',
                categoryId: 1,
                teacherId: 4,
                topicId: 2,
                overallreview: 5,
                reviewCount: 3
             },
            { name: 'HTML',
                price: '5.99',
                promotion: '7.99',
                description: 'Trong xuyên suốt phần học này, bạn sẽ hiểu được làm thế nào mà một tập tin website được hình thành, cách triển khai nó và quan trọng nhất là ý nghĩa của những thẻ HTML (nhất là các thẻ thông dụng) vì sau này nó sẽ theo bạn suốt thời gian làm website.',
                summary: 'Trong xuyên suốt phần học này, bạn sẽ hiểu được làm thế nào mà một tập tin website được hình thành',
                imagepath: '/img/product/html.jpg',
                imagedetail: '/img/product/html_dt.jpg',
                categoryId: 1,
                teacherId: 4,
                topicId: 2,
                overallreview: 0,
                reviewCount: 0
             },
             { name: 'ReactJS',
                price: '21.23',
                promotion: '25.63',
                description: 'Với xu hướng ngày càng phát triển của Android, đã kéo theo nhu cầu tuyển dụng lập trình Android ngày càng khốc liệt. Và lập trình Android chính là cơ hội tuyệt vời nhất, đặc biệt là các bạn trẻ.                <>Nắm bắt được nhu cầu tuyển dụng lập trình Android ngày càng nóng, chúng tôi đã cho ra mắt Khóa Học Lập Trình Android. Chỉ cần hoàn tất 4 tháng của Khóa Học Lập Trình Android & hoàn tất các bài lab hỗ trợ dành riêng cho học viên của chúng tôi. Học viên sẽ đủ khả năng ứng tuyển vị trí lập trình Android tại các công ty hoặc trở thành một Freelancer với mức lương tự do.',
                summary: 'Với xu hướng ngày càng phát triển của Android, đã kéo theo nhu cầu tuyển dụng lập trình Android ngày càng khốc liệt. Và lập trình Android chính là cơ hội tuyệt vời nhất, đặc biệt là các bạn trẻ.',
                imagepath: '/img/product/reactjs.jpg',
                imagedetail: '/img/product/reactjs.jpg',
                categoryId: 1,
                teacherId: 4,
                topicId: 2,
                overallreview: 0,
                reviewCount: 0
             },
             { name: 'Angular',
                price: '30.99',
                promotion: '34.33',
                description: 'Với xu hướng ngày càng phát triển của Android, đã kéo theo nhu cầu tuyển dụng lập trình Android ngày càng khốc liệt. Và lập trình Android chính là cơ hội tuyệt vời nhất, đặc biệt là các bạn trẻ.                <>Nắm bắt được nhu cầu tuyển dụng lập trình Android ngày càng nóng, chúng tôi đã cho ra mắt Khóa Học Lập Trình Android. Chỉ cần hoàn tất 4 tháng của Khóa Học Lập Trình Android & hoàn tất các bài lab hỗ trợ dành riêng cho học viên của chúng tôi. Học viên sẽ đủ khả năng ứng tuyển vị trí lập trình Android tại các công ty hoặc trở thành một Freelancer với mức lương tự do.',
                summary: 'Với xu hướng ngày càng phát triển của Android, đã kéo theo nhu cầu tuyển dụng lập trình Android ngày càng khốc liệt. Và lập trình Android chính là cơ hội tuyệt vời nhất, đặc biệt là các bạn trẻ.',
                imagepath: '/img/product/angular.jpg',
                imagedetail: '/img/product/angular.jpg',
                categoryId: 1,
                teacherId: 4,
                topicId: 2,
                overallreview: 0,
                reviewCount: 0
             },
             // ---------------------------------------------------------------------------------------------------
             { name: 'C++',
                price: '4.5',
                promotion: '6.68',
                description: 'Khóa học này sẽ dẫn dắt bạn đi từ cơ bản đến tạo ra một sản phẩm hoàn chỉnh viết bằng C++.      <>Sẽ giúp người học hiểu được cách xây dựng một phần mềm từ đầu đến cuối.       Nội dung giảng dạy sẽ bao gồm kiến thức về ngôn ngữ, trắc nghiệm để kiểm tra kiến thức, bài tập thực hành nộp cho TA(Teaching assistant) để họ chấm.       Khi thắc mắc về nội dung bài học thì người học có thể hỏi trực tiếp Đạt hoặc các bạn TA.         Khi học xong sẽ được cấp chứng nhận đã học xong khóa học.',
                summary: 'Khóa học này sẽ dẫn dắt bạn đi từ cơ bản đến tạo ra một sản phẩm hoàn chỉnh viết bằng C++. Sẽ giúp người học hiểu được cách xây dựng một phần mềm từ đầu đến cuối.',
                imagepath: '/img/product/c++.jpg',
                imagedetail: '/img/product/c++_dt.jpg',
                categoryId: 1,
                teacherId: 2,
                topicId: 3,
                overallreview: 0,
                reviewCount: 0
             },
             { name: 'Java',
                price: '9.99',
                promotion: '13.45',
                description: 'Khóa học "Lập trình Java" gồm 5 bài giảng. Tham gia khóa học bạn sẽ được tìm hiểu cơ bản về ngôn ngữ lập trình Java (Từ định nghĩa đến kiểu dữ liệu, biến, câu lệnh, mảng, chuỗi ... cấu trúc điều khiển trong java, phương thức, lớp....) cung cấp trọn bộ kiến thức lập trình Java, cung cấp kiến thức để tiếp cận lập trình Android, có khả năng tiếp tục phát triển phần mềm Java nâng cao: Swing, kết nối cơ sở dữ liệu,…      Vậy còn chờ đợi gì nữa, đăng ký tham gia khóa học "Lập trình Java" ngay hôm nay thôi!',
                summary: 'Khóa học "Lập trình Java" gồm 5 bài giảng. Tham gia khóa học bạn sẽ được tìm hiểu cơ bản về ngôn ngữ lập trình Java (Từ định nghĩa đến kiểu dữ liệu, biến, câu lệnh, mảng, chuỗi ...',
                imagepath: '/img/product/java.jpg',
                imagedetail: '/img/product/java_dt.jpg',
                categoryId: 1,
                teacherId: 2,
                topicId: 3,
                overallreview: 0,
                reviewCount: 0
             },
             { name: 'Latex',
                price: '20.99',
                promotion: '24.24',
                description: 'LATEX là một hệ thống soạn thảo rất phù hợp với việc tạo ra các tài liệu khoa học và toán học với chất lượng bản in rất cao. Đồng thời, nó cũng rất phù hợp với các công việc soạn thảo các tài liệu khác từ thư từ cho đến những cuốn sách hoàn chỉnh. LATEX sử dụng TEX làm bộ máy định dạng.         Khoá học này sẽ giới thiệu cho các bạn cách sử dụng LATEX để soạn tài liệu khoa học và còn hơn thế nữa. ',
                summary: 'LATEX là một hệ thống soạn thảo rất phù hợp với việc tạo ra các tài liệu khoa học và toán học với chất lượng bản in rất cao. Đồng thời, nó cũng rất phù hợp với các công việc soạn thảo các tài liệu khác từ thư từ cho đến những cuốn sách hoàn chỉnh.',
                imagepath: '/img/product/latex.jpg',
                imagedetail: '/img/product/latex_dt.jpg',
                categoryId: 1,
                teacherId: 5,
                topicId: 3,
                overallreview: 0,
                reviewCount: 0
             },
             { name: 'Python',
                price: '35.55',
                promotion: '40',
                description: 'Ngôn ngữ Python hiện đang là xu hướng của thế giới với cộng đồng hỗ trợ mạnh mẽ, thư viện phong phú. Chính vì vậy mà nhiều người khi có ý định theo đuổi nghề lập trình sẽ tìm hiểu và lựa chọn Python làm nền tảng kiến thức đầu tiên. Bạn chắc chắn sẽ đi trước thời đại với ngôn ngữ Python – loại ngôn ngữ cực kì dễ đọc và dễ học.      Python là một ngôn ngữ lập trình đang phát triển và nó không có dấu hiệu sẽ chậm lại trong vài năm tiếp theo. Hầu như, có thể dễ dàng bắt gặp Python trong hầu như mọi web applications, desktop apps, network servers, machine learning, media tool,…      Bạn có thể thấy rằng Python còn cực kì hữu ích cho các dịch vụ back-end và API. Ngoài ra, những framework dựa trên Python như Django, Pyramid và Turbo Gear cũng ngày càng trở nên phổ biến hơn. Chính vì thế hãy tham gia khoá học của chúng tôi!',
                summary: 'Ngôn ngữ Python hiện đang là xu hướng của thế giới với cộng đồng hỗ trợ mạnh mẽ, thư viện phong phú. Chính vì vậy mà nhiều người khi có ý định theo đuổi nghề lập trình sẽ tìm hiểu và lựa chọn Python làm nền tảng kiến thức đầu tiên. Bạn chắc chắn sẽ đi trước thời đại với ngôn ngữ Python – loại ngôn ngữ cực kì dễ đọc và dễ học.',
                imagepath: '/img/product/python.jpg',
                imagedetail: '/img/product/python_dt.jpg',
                categoryId: 1,
                teacherId: 2,
                topicId: 3,
                overallreview: 0,
                reviewCount: 0
             },
             // ---------------------------------------------------------------------------------------------------
            { name: 'Ngữ pháp cơ bản',
                price: '20',
                promotion: '26.88',
                description: 'Khóa học xây dựng một hệ thống ngữ pháp tiếng Anh cực chi tiết. Toàn bộ các chủ điểm ngữ pháp THEN CHỐT đều được giảng tỉ mỉ, gần gũi và dễ hiểu thông qua các ví dụ thực tiễn. Kèm theo đó là các chủ điểm ngữ pháp khó: Thì động từ được hướng dẫn thông qua trục thời gian và tư duy logic, giúp bạn hiểu bản chất, tránh việc học truyền thống đọc chép.',
                summary: 'Khóa học xây dựng một hệ thống ngữ pháp tiếng Anh cực chi tiết.',
                imagepath: '/img/product/nguphapcoban.jpg',
                imagedetail: '/img/product/nguphapcoban_dt.jpg',
                categoryId: 2,
                teacherId: 1,
                topicId: 4,
                overallreview: 0,
                reviewCount: 0
             },
            { name: 'Tiếng Anh giao tiếp cơ bản',
                price: '12.99',
                promotion: '16.63',
                description: '"Bạn sẽ gặp những tình huống giao tiếp thực tế đòi hỏi bạn cần phải có phản xạ giao tiếp tốt và sau khi học xong mỗi bài học bạn hoàn toàn có thể áp dụng ngay để sử dụng trong học tập cũng như trong công việc của mình. Khóa học đồng thời cũng hướng dẫn cách phát âm và củng cố vốn từ vựng, ngữ pháp căn bản trong tiếng Anh.Vậy nên các bạn hãy bắt đầu đăng ký ngay khóa học Tiếng Anh giao tiếp cơ bản của chúng tôi và luyện tập theo các chủ đề thông dụng trong khóa học này nhé!"',
                summary: 'Bạn sẽ gặp những tình huống giao tiếp thực tế đòi hỏi bạn cần phải có phản xạ giao tiếp tốt và sau khi học xong mỗi bài học bạn hoàn toàn có thể áp dụng ngay để sử dụng trong học tập cũng như trong công việc của mình.',
                imagepath: '/img/product/tienganhcoban.jpg',
                imagedetail: '/img/product/tienganhcoban_dt.jpg',
                teacherId: 1,
                categoryId: 2,
                topicId: 4,
                overallreview: 0,
                reviewCount: 0
             },
             // ---------------------------------------------------------------------------------------------------
            { name: 'Tiếng Hàn giao tiếp',
                price: '13.64',
                promotion: '17.12',
                description: '"Với 54 bài giảng về 8 chủ đề về học tiếng Hàn quốc giao tiếp từ những kiến thức cơ bản về nguyên âm, phụ âm của Tiếng Hàn, đến cách sử dụng tiếng Hàn trong các trường hợp sinh hoạt hàng ngày như: ở nhà, đời sống, cuối tuần, trường học, thời tiết, du lịch, mua sắm,...với vồn từ vựng đầy đủ cũng như cấu trúc ngữ pháp, xử lý tình huống trong từng văn cảnh hội thoại cụ thể.      Chắc chắn sau khóa học Học tiếng Hàn giao tiếp của chúng tôi, trình độ tiếng Hàn của bạn sẽ được cải thiện, bạn sẽ tự tin hơn để trò chuyện với người Hàn Quốc.',
                summary: 'Với 54 bài giảng về 8 chủ đề về học tiếng Hàn quốc giao tiếp từ những kiến thức cơ bản về nguyên âm, phụ âm của Tiếng Hàn, đến cách sử dụng tiếng Hàn trong các trường hợp sinh hoạt hàng ngày như: ở nhà, đời sống, cuối tuần, trường học, thời tiết, du lịch, mua sắm,...',
                imagepath: '/img/product/tienghangiaotiep.jpg',
                imagedetail: '/img/product/tienghangiaotiep_dt.jpg',
                categoryId: 2,
                teacherId: 1,
                topicId: 5,
                overallreview: 0,
                reviewCount: 0
             },
             // ---------------------------------------------------------------------------------------------------
            { name: 'Tiếng Trung giao tiếp cấp tốc',
                price: '24.12',
                promotion: '29.31',
                description: 'Một khóa học online nhanh chóng là giải pháp dành cho bạn. Unica mang đến cho bạn khóa học Tiếng Trung giao tiếp - 1. Đây sẽ là khóa học hứa hẹn mang đến cho bạn khả năng giao tiếp tiếng Trung cơ bản một cách thành thạo.',
                summary: 'Một khóa học online nhanh chóng là giải pháp dành cho bạn.',
                imagepath: '/img/product/tiengtrunggiaotiep.jpg',
                imagedetail: '/img/product/tiengtrunggiaotiep_dt.jpg',
                categoryId: 2,
                teacherId: 1,
                topicId: 6,
                overallreview: 0,
                reviewCount: 0
             },
             // ---------------------------------------------------------------------------------------------------
            { name: 'Học xoá vật thế trong Photoshop',
                price: '8.5',
                promotion: '12.33',
                description: 'Khoá học này của chúng tôi sẽ giúp bạn học được cách xoá vật thể chuyên nghiệp bằng Photoshop.',
                summary: 'Khoá học này của chúng tôi sẽ giúp bạn học được cách xoá vật thể chuyên nghiệp bằng Photoshop.',
                imagepath: '/img/product/xoavatthe.jpg',
                imagedetail: '/img/product/xoavatthe_dt.jpg',
                categoryId: 3,
                teacherId: 5,
                topicId: 7,
                overallreview: 0,
                reviewCount: 0
             },
            { name: 'Khoá học Photoshop cấp tốc',
                price: '30.12',
                promotion: '35.66',
                description: '"Cho dù bạn giỏi lĩnh vực nào đi nữa thì bạn cũng cần có một thầy dạy hoặc một chuyên gia. Chính vì thế, bạn cần phải có thầy dạy để đi theo học hỏi.Chình vì thế, khóa “Học photoshop cấp tốc” của chúng tôi sẽ giúp bạn những kỹ năng, thao tác cần thiết nhất để làm chủ Adobe Photoshop."',
                summary: 'Cho dù bạn giỏi lĩnh vực nào đi nữa thì bạn cũng cần có một thầy dạy hoặc một chuyên gia.',
                imagepath: '/img/product/photoshopcaptoc.jpg',
                imagedetail: '/img/product/photoshopcaptoc_dt.jpg',
                categoryId: 3,
                teacherId: 5,
                topicId: 7,
                overallreview: 0,
                reviewCount: 0
             },
             // ---------------------------------------------------------------------------------------------------
            { name: 'Học chuyển cảnh trong Premiere Pro',
                price: '6.46',
                promotion: '9.55',
                description: 'Khoá học của chúng tôi sẽ giúp bạn thành thạo kỹ năng chuyển cảnh cũng như 1 số hiệu ứng chuyển cảnh cần dùng trong 1 số trường hợp.',
                summary: 'Khoá học của chúng tôi sẽ giúp bạn thành thạo kỹ năng chuyển cảnh cũng như 1 số hiệu ứng chuyển cảnh cần dùng trong 1 số trường hợp.',
                imagepath: '/img/product/chuyencanh.jpg',
                imagedetail: '/img/product/chuyencanh_dt.jpg',
                categoryId: 3,
                teacherId: 5,
                topicId: 8,
                overallreview: 0,
                reviewCount: 0
             },
            { name: 'Khoá học cấp tốc trong Premiere Pro',
                price: '32.78',
                promotion: '36.47',
                description: 'Với bố cục bài giảng chi tiết cụ thể được chia thành từng phần, với mỗi phần học có thể giúp người học tạo ra một sản phẩm với mức độ phức tạp phát triển lên dần, từ các video slideshow hình ảnh đơn giản, cho tới video có nội dung, video trailer... rất phù hợp với những bạn mới bắt đầu tiếp xúc và học làm video cơ bản.',
                summary: 'Với bố cục bài giảng chi tiết cụ thể được chia thành từng phần, với mỗi phần học có thể giúp người học tạo ra một sản phẩm với mức độ phức tạp phát triển lên dần, từ các video slideshow hình ảnh đơn giản, cho tới video có nội dung, video trailer... rất phù hợp với những bạn mới bắt đầu tiếp xúc và học làm video cơ bản.',
                imagepath: '/img/product/AdobePremierecaptoc.jpg',
                imagedetail: '/img/product/AdobePremierecaptoc_dt.jpg',
                categoryId: 3,
                teacherId: 5,
                topicId: 8,
                overallreview: 0,
                reviewCount: 0
             },
             // ---------------------------------------------------------------------------------------------------
             { name: 'Kinh doanh online cơ bản',
                price: '40.32',
                promotion: '45.79',
                description: '* Chỉ đang kinh doanh truyền thống      * Bắt đầu kinh doanh online từ con số 0      * Đã kinh doanh online rồi nhưng chưa đạt như mong đợi      * Muốn biết cách quản lý hệ thống kinh doanh online tối ưu nhất hiện nay để không tốn nhiều thời gian và nhân sự.      * Là sinh viên muốn khởi nghiệp kinh doanh một vài mặt hàng trên online      -> Hãy đến với khoá học của chúng tôi chúng tôi sẽ giúp bạn!',
                summary: '* Chỉ đang kinh doanh truyền thống * Bắt đầu kinh doanh online từ con số 0 * Đã kinh doanh online rồi nhưng chưa đạt như mong đợi',
                imagepath: '/img/product/kd.jpg',
                imagedetail: '/img/product/kd_dt.jpg',
                categoryId: 4,
                teacherId: 3,
                topicId: 9,
                overallreview: 0,
                reviewCount: 0
             },
             // ---------------------------------------------------------------------------------------------------
             { name: 'Digital Marketing',
                price: '28.45',
                promotion: '36.69',
                description: '"Chương trình được xây dựng với nội dung từ cơ bản đến nâng cao nhằm giúp bạn có thể dễ dàng tiếp cận với các cộng cụ Digital Marketing phổ biển      Đồng thời, Ứng dụng hiệu quả khi bắt đầu triển khai vào thực tế"',
                summary: 'Chương trình được xây dựng với nội dung từ cơ bản đến nâng cao nhằm giúp bạn có thể dễ dàng tiếp cận với các cộng cụ Digital Marketing phổ biển',
                imagepath: '/img/product/digital.jpg',
                imagedetail: '/img/product/digital_dt.jpg',
                categoryId: 4,
                teacherId: 3,
                topicId: 10,
                overallreview: 0,
                reviewCount: 0
             },
             { name: 'Khoá học marketing cơ bản',
                price: '16.64',
                promotion: '18.55',
                description: 'Trong môi trường kinh doanh cạnh tranh ngày một gay gắt, mọi doanh nghiệp muốn đứng vững và phát triển thì đều cần chú trọng đầu tư cho marketing. Kiến thức về marketing đem đến cơ hội nghề nghiệp vô tận. Vì thế hãy đến với khoá học của chúng tôi!',
                summary: 'Trong môi trường kinh doanh cạnh tranh ngày một gay gắt, mọi doanh nghiệp muốn đứng vững và phát triển thì đều cần chú trọng đầu tư cho marketing.',
                imagepath: '/img/product/marketingcoban.jpg',
                imagedetail: '/img/product/marketingcoban_dt.jpg',
                categoryId: 4,
                teacherId: 3,
                topicId: 10,
                overallreview: 0,
                reviewCount: 0
             },
             { name: 'Online marketing',
                price: '50.99',
                promotion: '60.17',
                description: 'Marketing online hiện nay là 1 xu thế. Khoá học của chúng tôi đem lại kiến thức toàn diện và đầy đủ nhất về MO vì thế nếu bạn muốn trở thành master trong lĩnh vực này hãy đến với khoá học của chúng tôi!',
                summary: 'Marketing online hiện nay là 1 xu thế. Khoá học của chúng tôi đem lại kiến thức toàn diện và đầy đủ nhất về MO vì thế nếu bạn muốn trở thành master trong lĩnh vực này hãy đến với khoá học của chúng tôi!',
                imagepath: '/img/product/marketingonline.jpg',
                imagedetail: '/img/product/marketingonline_dt.jpg',
                categoryId: 4,
                teacherId: 3,
                topicId: 10,
                overallreview: 0,
                reviewCount: 0
             },
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
