'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        let data = [
            { name: 'Bài 1 : Tạo Project',
                content: '',
                clip: '/img/product/video/Bài 1- Tạo project.mp4',
                productId: 1
            },
            { name: 'Bài 2 : Giới thiệu Android Studio',
                content: '',
                clip: '/img/product/video/Bài 2- Giới thiệu Android Studio.mp4',
                productId: 1
            },
            { name: 'Bài 3 : Ôn tập Java - Phần 1',
                content: '',
                clip: '/img/product/video/Bài 3- Ôn tập Java - phần 1.mp4',
                productId: 1
            },
            { name: 'Bài 4 : Ôn tập Java - Phần 2',
                content: '',
                clip: '/img/product/video/Bài 4- Ôn tập Java - phần 2.mp4',
                productId: 1
            },
            { name: 'Bài 5 : Ôn tâp Java - Phần 3',
                content: '',
                clip: '/img/product/video/Bài 5- Ôn tập Java - phần 3.mp4',
                productId: 1
            },
            { name: 'Bài 6 : Ôn tập Java - Phần 4',
                content: '',
                clip: '/img/product/video/Bài 6- Ôn tập Java - phần 4.mp4',
                productId: 1
            },
            { name: 'Bài 7 : Ôn tập Java - Phần 5',
                content: '',
                clip: '/img/product/video/Bài 7- Ôn tập Java - phần 5.mp4',
                productId: 1
            },
           // ---------------------------------------------------------------------------------
            { name: 'Bài 1 : Tạo Project và làm quen với Xcode',
                content: '',
                clip: '/img/product/video/Lập trình iOS - Bài 01- Tạo project và làm quen với Xcode.mp4',
                productId: 2
            },
            { name: 'Bài 2 : Các thành phần chính trong Xcode project',
                content: '',
                clip: '/img/product/video/Lập trình iOS - Bài 02- Các thành phần chính trong Xcode project.mp4',
                productId: 2
            },
            { name: 'Bài 3 : Kết nối giao diện với mã nguồn',
                content: '',
                clip: '/img/product/video/Lập trình iOS - Bài 03- Kết nối giao diện với mã nguồn.mp4',
                productId: 2
            },
            { name: 'Bài 4 : Làm việc với UILabel',
                content: '',
                clip: '/img/product/video/Lập trình iOS - Bài 04- Làm việc với UILabel.mp4',
                productId: 2
            },
            { name: 'Bài 5 : Làm việc với UIButton',
                content: '',
                clip: '/img/product/video/Lập trình iOS - Bài 05- Làm việc với UIButton.mp4',
                productId: 2
            },
            //------------------------------------------------------------------------------------------------
            { name: 'Bài 1 : Bắt đầu làm việc cơ bản với CSS',
                content: '',
                clip: '/img/product/video/Học lập trình Web A-Z - CSS - Bài 1 - Bắt đầu làm việc cơ bản với CSS.mp4',
                productId: 3
            },
            { name: 'Bài 2 : Những cú pháp selector sẽ cần sử dụng thường xuyên',
                content: '',
                clip: '/img/product/video/Học lập trình Web A-Z - CSS - Bài 2 - Những cú pháp Selector sẽ cần sử dụng thường xuyên.mp4',
                productId: 3
            },
            //-----------------------------------------------------------------------------------------------
            { name: 'Bài 1 : Làm quen với HTML và một số thẻ HTML cơ bản',
                content: '',
                clip: '/img/product/video/Học lập trình Web A-Z - HTML - Bài 1 làm quen với HTML và một số thẻ HTML cơ bản.mp4',
                productId: 4
            },
            { name: 'Bài 2 : Danh sách, liên kết, hình ảnh và bản đồ liên kết',
                content: '',
                clip: '/img/product/video/Học lập trình Web A-Z - HTML - Bài 2 - danh sách, liên kết, hình ảnh và bản đồ liên kết.mp4',
                productId: 4
            },
            { name: 'Bài 3 : Cách tạo bảng, chèn video và âm thanh',
                content: '',
                clip: '/img/product/video/Học lập trình Web A-Z - HTML - Bài 3 - Cách tạo bảng. Cách chèn video và âm thanh.mp4',
                productId: 4
            },
            { name: 'Bài 4 - Trình bày biểu mẫu FORM - hiểu về IFRAME',
                content: '',
                clip: '/img/product/video/Học lập trình Web A-Z - HTML - Bài 4 - Trình bày biểu mẫu FORM - hiểu về IFRAME.mp4',
                productId: 4
            },
            //-----------------------------------------------------------------------------------------------
            { name: 'Bài 1 : Tổng quan về khoa học Lập trình C++',
                content: '',
                clip: '/img/product/video/[Khóa học lập trình C++ Cơ bản] - Bài 0- Tổng quan về khóa học Lập trình C++ - HowKteam.mp4',
                productId: 5
            },
            { name: 'Bài 2 : Giới thiệu về C++',
                content: '',
                clip: '/img/product/video/[Khóa học lập trình C++ Cơ bản] - Bài 1- Giới thiệu về C++ - HowKteam.mp4',
                productId: 5
            },
            { name: 'Bài 3 : Cấu trúc một chương trình C++',
                content: '',
                clip: '/img/product/video/[Khóa học lập trình C++ Cơ bản] - Bài 4- Cấu trúc một chương trình C++ - HowKteam.mp4',
                productId: 5
            },
            { name: 'Bài 4 : Kinh nghiệm về Ghi chú trong C++',
                content: '',
                clip: '/img/product/video/[Khóa học lập trình C++ Cơ bản] - Bài 5- Kinh nghiệm về Ghi chú trong C++ - HowKteam.mp4',
                productId: 5
            },
            { name: 'Bài 5 : Biến trong C++ ( Variables in C++)',
                content: '',
                clip: '/img/product/video/[Khóa học lập trình C++ Cơ bản] - Bài 6- Biến trong C++ (Variables in C++) - HowKteam.mp4',
                productId: 5
            },
            //-----------------------------------------------------------------------------------------------
            { name: 'Bài 1 : Giới thiệu Java',
                content: '',
                clip: '/img/product/video/[Khóa học lập trình Java đến OOP] - Bài 1- Giới thiệu Java - HowKteam.mp4',
                productId: 6
            },
            { name: 'Bài 2 : Cài đặt môi trường Java',
                content: '',
                clip: '/img/product/video/[Khóa học lập trình Java đến OOP] - Bài 2- Cài đặt môi trường Java - HowKteam.mp4',
                productId: 6
            },
            { name: 'Bài 3 : Chương trình Java đầu tiên',
                content: '',
                clip: '/img/product/video/[Khóa học lập trình Java đến OOP] - Bài 3- Chương trình Java đầu tiên - HowKteam.mp4',
                productId: 6
            },
            { name: 'Bài 4 : Biến trong Java',
                content: '',
                clip: '/img/product/video/[Khóa học lập trình Java đến OOP] - Bài 4- Biến trong Java - HowKteam.mp4',
                productId: 6
            },
            //-----------------------------------------------------------------------------------------------
            { name: 'Bài 1 : Hướng dẫn LaTex 1 -  Giới thiệu ngnắ về LaTex',
                content: '',
                clip: '/img/product/video/Hướng dẫn LaTeX 1- A brief introduction to LaTeX -- Giới thiệu ngắn về LaTeX.mp4',
                productId: 7
            },
            { name: 'Bài 2 : Hướng dẫn Latex 2 - Cài đặt LaTex',
                content: '',
                clip: '/img/product/video/Hướng dẫn LaTeX 2- Installing LaTeX -- Cài đặt LaTeX.mp4',
                productId: 7
            },
            { name: 'Bài 3 : Soạn thảo LaTex online - Tự tạo CV',
                content: '',
                clip: '/img/product/video/Hướng dẫn LaTeX 3- Online LaTeX editors - Play with your CV -- Soạn thảo LaTeX online - Tự tạo CV..mp4',
                productId: 7
            },
            { name: 'Bài 4a : Giới thiệu thư viện vẽ hình',
                content: '',
                clip: '/img/product/video/Hướng dẫn LaTeX 4.0- Drawing - Introduction to a drawing package -- Giới thiệu thư viện vẽ hình..mp4',
                productId: 7
            },
            { name: 'Bài 4b : Vẽ hình - Điểm',
                content: '',
                clip: '/img/product/video/Hướng dẫn LaTeX 4.1- Drawing - Points -- Vẽ hình - Điểm..mp4',
                productId: 7
            },
            { name: 'Bài 4c : Vẽ hình - Đường thẳng, Đoạn thẳng, Tia',
                content: '',
                clip: '/img/product/video/Hướng dẫn LaTeX 4.2- Drawing - Lines, Segments, Rays -- Vẽ hình - Đường thẳng, Đoạn thẳng, Tia..mp4',
                productId: 7
            },
            { name: 'Bài 4d : Vẽ hình - Góc',
                content: '',
                clip: '/img/product/video/Hướng dẫn LaTeX 4.3- Drawing - Angles -- Vẽ hình - Góc..mp4',
                productId: 7
            },
            { name: 'Bài 4e : Vẽ hình - Đường tròn',
                content: '',
                clip: '/img/product/video/Hướng dẫn LaTeX 4.4- Drawing - Circles -- Vẽ hình - Đường tròn..mp4',
                productId: 7
            },
            { name: 'Bài 5 : LaTex cho người mới bắt đầu',
                content: '',
                clip: '/img/product/video/LaTeX cho người mới bắt đầu..mp4',
                productId: 7
            },
            //-----------------------------------------------------------------------------------------------
            { name: 'Bài 1 : Giới thiệu ngôn ngữ lập trình Python',
                content: '',
                clip: '/img/product/video/[Khóa học lập trình Python cơ bản] - Bài 1- Giới thiệu ngôn ngữ lập trình Python - HowKteam.mp4',
                productId: 8
            },
            { name: 'Bài 2 : Cài đặt môi trường Python',
                content: '',
                clip: '/img/product/video/[Khóa học lập trình Python cơ bản] - Bài 2- Cài đặt môi trường Python - HowKteam.mp4',
                productId: 8
            },
            { name: 'Bài 3 : Chạy file Python',
                content: '',
                clip: '/img/product/video/[Khóa học lập trình Python cơ bản] - Bài 3- Chạy file Python - HowKteam.mp4',
                productId: 8
            },
            { name: 'Bài 4 : Comment trong Python',
                content: '',
                clip: '/img/product/video/[Khóa học lập trình Python cơ bản] - Bài 4- Comment trong Python - HowKteam.mp4',
                productId: 8
            },
            { name: 'Bài 5 : Biến( Variable) trong Python',
                content: '',
                clip: '/img/product/video/[Khóa học lập trình Python cơ bản] - Bài 5- Biến(Variable) trong Python - HowKteam.mp4',
                productId: 8
            },
            //-----------------------------------------------------------------------------------------------
            { name: 'Bài 1 : Thành phần câu cơ bản',
                content: '',
                clip: '/img/product/video/Unit 1 - Thành phần câu cơ bản.mp4',
                productId: 9
            },
            { name: 'Bài 2 : Phân biệt các loại danh từ trong Tiếng Anh',
                content: '',
                clip: '/img/product/video/Unit 2- Phân biệt các loại danh từ trong tiếng Anh.mp4',
                productId: 9
            },
            { name: 'Bài 3 : Cách sử dụng a/an/the cơ bản',
                content: '',
                clip: '/img/product/video/Unit 3- Cách sử dụng a - an - the cơ bản.mp4',
                productId: 9
            },
            { name: 'Bài 4 : Thì hiện tại đơn, động từ TOBE',
                content: '',
                clip: '/img/product/video/Unit 4- Thì hiện tại đơn động từ tobe.mp4',
                productId: 9
            },
            { name: 'Bài 5 : 30 câu có thể hiểu các thì của Tiếng Anh',
                content: '',
                clip: '/img/product/video/NGỮ PHÁP TIẾNG ANH 23 - Chỉ 30 câu, hiểu trọn vẹn 12 thì tiếng Anh - Thắng Phạm.mp4',
                productId: 9
            },
            //-----------------------------------------------------------------------------------------------
            { name: 'Từ vựng Tiếng Anh cơ bản',
                content: '',
                clip: '/img/product/video/Từ vựng tiếng Anh cơ bản - 100 DANH TỪ THƯỜNG GẶP NHẤT [Tiếng Anh giao tiếp Langmaster].mp4',
                productId: 10
            },
            { name: 'Từ vựng về ngày HALLOWEEN',
                content: '',
                clip: '/img/product/video/Langmaster - Từ vựng tiếng Anh CỰC CHẤT về ngày HALLOWEEN [Học tiếng Anh giao tiếp cơ bản].mp4',
                productId: 10
            },
            { name: '150 câu Tiếng Anh giao tiếp',
                content: '',
                clip: '/img/product/video/Langmaster - 150 Câu tiếng Anh giao tiếp siêu ngắn - Nghe 1 lần nhớ cả đời (Tập 1).mp4',
                productId: 10
            },
            { name: 'Luyện nghe Tiếng Anh',
                content: '',
                clip: '/img/product/video/Học Tiếng Anh Online (Trực Tuyến) - LUYỆN NGHE NGẤM TIẾNG ANH DỐT MẤY CŨNG THÀNH GIỎI.mp4',
                productId: 10
            },
            //-----------------------------------------------------------------------------------------------
            { name: '100 câu Tiếng Hàn giao tiếp cơ bản',
                content: '',
                clip: '/img/product/video/[Tập 1] 100 Câu Tiếng Hàn Giao Tiếp Căn Bản - Cực Thông Dụng.mp4',
                productId: 11
            },
            { name: '9 bí kíp giúp tự học để nói giỏi Tiếng Hàn ',
                content: '',
                clip: '/img/product/video/9 BÍ KÍP GIÚP TỰ HỌC ĐỂ NÓI GIỎI TIẾNG HÀN - Hàn Quốc Sarang.mp4',
                productId: 11
            },
            { name: 'Những mẫu câu hỏi thường dùng nhất trong Tiếng Hàn',
                content: '',
                clip: '/img/product/video/Những Mẫu Câu Chào Hỏi Thường Dùng Nhất Trong Tiếng Hàn┃ Hàn Quốc Sarang.mp4',
                productId: 11
            },
            //-----------------------------------------------------------------------------------------------
            { name: '50 câu Tiếng Trung siêu dễ nhớ',
                content: '',
                clip: '/img/product/video/50 Câu tiếng Trung giao tiếp SIÊU DỄ NHỚ.mp4',
                productId: 12
            },
            { name: 'Chủ đề Chào Hỏi trong Tiếng Trung',
                content: '',
                clip: '/img/product/video/Tự học tiếng trung với chủ đề Chào hỏi trong tiếng Trung.mp4',
                productId: 12
            },
            { name: 'Các câu đàm thoại cơ bản',
                content: '',
                clip: '/img/product/video/Bài 1- Câu đàm thoại cơ bản - TIẾNG TRUNG CẤP TỐC 2018.mp4',
                productId: 12
            },
            //-----------------------------------------------------------------------------------------------
            { name: '3 cách xoá vật thể hiệu quả và dễ nhất trong Photoshop',
                content: '',
                clip: '/img/product/video/3 Cách để xóa vật thể hiệu quả và dễ nhất trong photoshop - #HPphotoshop.mp4',
                productId: 13
            },
            { name: 'Xoá vật thể bất kỳ trong ảnh bằng Photoshop',
                content: '',
                clip: '/img/product/video/Xóa vật thể bất kỳ trong ảnh bằng photoshop - HPphotoshop.com.mp4',
                productId: 13
            },
            { name: 'Xoá vật thể ra khỏi hình',
                content: '',
                clip: '/img/product/video/Xóa Vật Thể Ra Khỏi Hình.mp4',
                productId: 13
            },
            //-----------------------------------------------------------------------------------------------
            { name: 'Cầm tay hướng dẫn người mới học',
                content: '',
                clip: '/img/product/video/#1 [ Photoshop 2020 ] - Cầm tay hướng dẫn người mới học Photoshop A-Z.mp4',
                productId: 14
            },
            { name: '30 phút sử dụng tất tần tật các công cụ thiết kế',
                content: '',
                clip: '/img/product/video/#2 [ Photoshop 2020 ] - 30 Phút sử dụng tất tần tật công cụ thiết kế.mp4',
                productId: 14
            },
            //-----------------------------------------------------------------------------------------------
            { name: '5 chuyển cảnh đẹp nên dùng - Presets Transition Free APCC',
                content: '',
                clip: '/img/product/video/05 chuyển cảnh đẹp nên dùng -- Presets Transition Free APCC.mp4',
                productId: 15
            },
            { name: 'Hướng dẫn chuyển cảnh Masking Transition -- Adobe Premiere CC',
                content: '',
                clip: '/img/product/video/Hướng dẫn chuyển cảnh Masking Transition -- Adobe Premiere CC.mp4',
                productId: 15
            },
            { name: 'Hướng dẫn làm phim - Chuyển cảnh cực đỉnh ',
                content: '',
                clip: '/img/product/video/Hướng dẫn làm phim - Chuyển cảnh cực đỉnh - Nếm TV.mp4',
                productId: 15
            },
            { name: 'Top 3 chuyển cảnh được các Editors sử dụng nhiều nhất trên Adobe Premiere',
                content: '',
                clip: '/img/product/video/Top 3 Chuyển Cảnh được các Editors sử dụng nhiều nhất trên Adobe Premiere - No Plugin - QuạHD.mp4',
                productId: 15
            },
            //-----------------------------------------------------------------------------------------------
            { name: 'Bài 1 : Cách import dữ liệu video, hình ảnh vào Premiere Pro',
                content: '',
                clip: '/img/product/video/Bài 1- Cách import dữ liệu video,hình ảnh vào Premiere pro - Học Adobe Premiere Pro cc 2018.mp4',
                productId: 16
            },
            { name: 'Bài 2 : Cách cắt, ghép, chỉnh sửa video và sử dụng công cụ trong Adobe Premiere',
                content: '',
                clip: '/img/product/video/Bài 2- Cách cắt,ghép,chỉnh sửa video và sử dụng công cụ trong Adobe Premiere.mp4',
                productId: 16
            },
            { name: 'Bài 3 : Cách xoay,lật, phóng to, thu nhỏ video và hình ảnh trong Adobe Premiere',
                content: '',
                clip: '/img/product/video/Bài 3- Cách xoay,lật,phóng to,thu nhỏ video và hình ảnh trong Adobe Premiere.mp4',
                productId: 16
            },
            { name: 'Bài 4 : Hướng dẫn cách ạo hiệu ứng chuyển cảnh đẹp cho video trong Adobe Premiere',
                content: '',
                clip: '/img/product/video/Bài 4- Hướng dẫn cách tạo hiệu ứng chuyển cảnh đẹp cho video trong adobe premiere pro cc 2018.mp4',
                productId: 16
            },
            { name: 'Bài 5 : Hướng dẫn các tăng giảm tốc độ video clip ( speed , slow motion) bằng Premiere',
                content: '',
                clip: '/img/product/video/Bài 5- Hướng dẫn cách tăng giảm tốc độ video clip ( speed,slow motion ) bằng premiere cc pro 2018.mp4',
                productId: 16
            },
            { name: 'Bài 6 : Cách chỉnh hiệu ứng màu sắc, sáng tối cho video tỏng Adobe Premiere',
                content: '',
                clip: '/img/product/video/Bài 6- Cách chỉnh hiệu ứng màu sắc,sáng tối cho video trong Adobe premiere ccpro 2018.mp4',
                productId: 16
            },
            { name: 'Bài 7 Cách tách nền video phông xanh để ghép cảnh cho video trong Adobe Premiere',
                content: '',
                clip: '/img/product/video/Bài 7- Cách tách nền video phông xanh để ghép cảnh cho video trong adobe premiere pro cc 2018.mp4',
                productId: 16
            },
            { name: 'Bài 8 : Cách viết chữ (chèn text ) trong Adobe Premiere và thêm hiệu ứng chuyển động cho chữ',
                content: '',
                clip: '/img/product/video/Bài 8- Cách viết chữ ( chèn text ) trong Adobe Premiere 2018 và thêm hiệu ứng chuyển động cho chữ.mp4',
                productId: 16
            },
            { name: 'Bài 9 : Cách chỉnh âm thanh (audio) và lọc tạp âm, tiếng ồn( khử noise) trong Adobe Premiere',
                content: '',
                clip: '/img/product/video/Bài 9- Cách chỉnh âm thanh (audio) và lọc tạp âm,tiếng ồn (khử noise) trong Adobe premiere 2018.mp4',
                productId: 16
            },
            { name: 'Học dựng phim Adobe Premiere cơ bản trong 20 phút',
                content: '',
                clip: '/img/product/video/Học Dựng Phim Adobe Premiere Cơ Bản Trong 20 Phút - PHẦN MỀM BIÊN TẬP VIDEO.mp4',
                productId: 16
            },
            //-----------------------------------------------------------------------------------------------
            { name: 'Kinh doanh Online cần gì',
                content: '',
                clip: '/img/product/video/Kinh Doanh Online Cần Gì- #1.mp4',
                productId: 17
            },
            { name: 'Hướng đãn tìm nguồn hàng kinh doanh Online',
                content: '',
                clip: '/img/product/video/Hướng Dẫn Tìm Nguồn Hàng Kinh Doanh Online - #2.mp4',
                productId: 17
            },
            { name: 'Hướng dẫn chọn công ty giao hàng',
                content: '',
                clip: '/img/product/video/Kinh Doanh Online - Hướng Dẫn Chọn Công Ty Giao Hàng - #3.mp4',
                productId: 17
            },
            { name: 'Những cách Marketing Online miễn phí',
                content: '',
                clip: '/img/product/video/Kinh Doanh Online - Những Cách Marketing Online Miễn Phí - #4.mp4',
                productId: 17
            },
            { name: 'Về quảng cáo Facebook, Google Adwords và Email Marketing',
                content: '',
                clip: '/img/product/video/Kinh Doanh Online - Về Quảng Cáo Facebook, Google Adwords và Email Marketing #5.mp4',
                productId: 17
            },
            { name: 'Tính toàn làm sao để không chết',
                content: '',
                clip: '/img/product/video/Kinh Doanh Online - Tính Toán Làm Sao Để Không Chết- #6.mp4',
                productId: 17
            },
            { name: 'Tiết kiệm bộn tiền nếu làm theo cách này',
                content: '',
                clip: '/img/product/video/Kinh Doanh Online - Tiết Kiệm Bộn Tiền Nếu Làm Theo Cách Này #7.mp4',
                productId: 17
            },
            //-----------------------------------------------------------------------------------------------
            { name: '7 Cách tạo - Phễu data bán hàng trên facebook - Tiếp cận khách hàng chính xác tuyệt đối',
                content: '',
                clip: '/img/product/video/7 cách tạo -Phễu data bán hàng trên facebook- Tiếp cận khách hàng chính xác tuyệt đối !.mp4',
                productId: 18
            },
            { name: 'Các bước thực hiện content marketing cho người mới bắt đầu',
                content: '',
                clip: '/img/product/video/CÁC BƯỚC THỰC HIỆN CONTENT MARKETING CHO NGƯỜI MỚI BẮT ĐẦU.mp4',
                productId: 18
            },
            { name: 'Chèn thêm liên kết youtube vào Facebook',
                content: '',
                clip: '/img/product/video/Chèn thêm liên kết youtube vào Facebook 2019 - Youtube tb for Fanpage 5 Phút.mp4',
                productId: 18
            },
            //-----------------------------------------------------------------------------------------------
            { name: 'Bài 1 : Các công cụ chuẩn bị cho việc bán hàng và quảng cáo trên Facebook',
                content: '',
                clip: '/img/product/video/Chèn thêm liên kết youtube vào Facebook 2019 - Youtube tb for Fanpage 5 Phút.mp4',
                productId: 19
            },
            { name: 'Bài 2 : Hướng dẫn tạo lập fanpage hiệu quả',
                content: '',
                clip: '/img/product/video/Bài 3- Hướng dẫn tạo lập fanpage hiệu quả.mp4',
                productId: 19
            },
            { name: 'Bài 3 : 6 vị trí hiển thị và 3 cách tạo quảng cáo Facebook',
                content: '',
                clip: '/img/product/video/Bài 4- 6 vị trí hiển thị và 3 cách tạo quảng cáo Facebook.mp4',
                productId: 19
            },
            { name: 'Bài 4 : Các mục tiêu sau tiếp thị quảng cáo Facebook',
                content: '',
                clip: '/img/product/video/Bài 5 Các mục tiêu tiếp thị quảng cáo Facebook.mp4',
                productId: 19
            },
            { name: 'Bài 5 : Hướng dẫn bảo mật tài khoản cá nhân và bảo mật Fanpage',
                content: '',
                clip: '/img/product/video/Bài 6- Hướng dẫn bảo mật tài khoản Cá nhân & Bảo mật Fanpage 2017.mp4',
                productId: 19
            },
            //-----------------------------------------------------------------------------------------------
            { name: 'Bài 1 : Marketing Online là gì? ',
                content: '',
                clip: '/img/product/video/Học Marketing Online Bài 1- Marketing Online Là Gì- Học Marketing Online Từ Con Số 0 Đến Giỏi.mp4',
                productId: 20
            },
            { name: 'Bài 2 :  Tạo Fanpage và tối ưu Fanpage để bán hàng online hiệu quả',
                content: '',
                clip: '/img/product/video/Học Marketing Online Bài 2 Tạo Fanpage và tối ưu Fanpage để bán hàng online hiệu quả.mp4',
                productId: 20
            },
            { name: 'Bài 3 : Content marketing cần những gì?',
                content: '',
                clip: '/img/product/video/Content marketing cần những gì - Tự học Content Marketing miễn phí tại MCMARKETINGS.COM.mp4',
                productId: 20
            },


        ];
        data.map(item => {
            item.createdAt = Sequelize.literal('NOW()');
            item.updatedAt = Sequelize.literal('NOW()');
            return item;
        });
        return queryInterface.bulkInsert('Productchildren', data, {});
    },

    down: (queryInterface, Sequelize) => {

        return queryInterface.bulkDelete('Productchildren', null, {});

    }
}; 