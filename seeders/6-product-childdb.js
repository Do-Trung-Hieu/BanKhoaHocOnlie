'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        let data = [
            { name: 'Bài 1 : Tạo Project',
                content: '',
                clip: '/img/product/video/bai1.mp4',
                productId: 1
            },
            { name: 'Bài 2 : Giới thiệu Android Studio',
                content: '',
                clip: '/img/product/video/bai2.mp4',
                productId: 1
            },
            { name: 'Bài 3 : Ôn tập Java - Phần 1',
                content: '',
                clip: '/img/product/video/bai3.mp4',
                productId: 1
            },
            { name: 'Bài 4 : Ôn tập Java - Phần 2',
                content: '',
                clip: '/img/product/video/bai4.mp4',
                productId: 1
            },
            { name: 'Bài 5 : Ôn tâp Java - Phần 3',
                content: '',
                clip: '/img/product/video/bai5.mp4',
                productId: 1
            },
            { name: 'Bài 6 : Ôn tập Java - Phần 4',
                content: '',
                clip: '/img/product/video/bai6.mp4',
                productId: 1
            },
            { name: 'Bài 7 : Ôn tập Java - Phần 5',
                content: '',
                clip: '/img/product/video/bai7.mp4',
                productId: 1
            },
           // ---------------------------------------------------------------------------------
            { name: 'Bài 1 : Tạo Project và làm quen với Xcode',
                content: '',
                clip: '/img/product/video/bai1.mp4',
                productId: 2
            },
            { name: 'Bài 2 : Các thành phần chính trong Xcode project',
                content: '',
                clip: '/img/product/video/bai2.mp4',
                productId: 2
            },
            { name: 'Bài 3 : Kết nối giao diện với mã nguồn',
                content: '',
                clip: '/img/product/video/bai3.mp4',
                productId: 2
            },
            { name: 'Bài 4 : Làm việc với UILabel',
                content: '',
                clip: '/img/product/video/bai4.mp4',
                productId: 2
            },
            { name: 'Bài 5 : Làm việc với UIButton',
                content: '',
                clip: '/img/product/video/bai5.mp4',
                productId: 2
            },
            //------------------------------------------------------------------------------------------------
            { name: 'Bài 1 : Bắt đầu làm việc cơ bản với CSS',
                content: '',
                clip: '/img/product/video/bai1.mp4',
                productId: 3
            },
            { name: 'Bài 2 : Những cú pháp selector sẽ cần sử dụng thường xuyên',
                content: '',
                clip: '/img/product/video/bai2.mp4',
                productId: 3
            },
            { name: 'Bài 3 : Những cú pháp về table  sử dụng thường xuyên',
                content: '',
                clip: '/img/product/video/bai3.mp4',
                productId: 3
            },
            { name: 'Bài 4 : Cú pháp phân trang ',
                content: '',
                clip: '/img/product/video/bai4.mp4',
                productId: 3
            },
            //-----------------------------------------------------------------------------------------------
            { name: 'Bài 1 : Làm quen với HTML và một số thẻ HTML cơ bản',
                content: '',
                clip: '/img/product/video/bai1.mp4',
                productId: 4
            },
            { name: 'Bài 2 : Danh sách, liên kết, hình ảnh và bản đồ liên kết',
                content: '',
                clip: '/img/product/video/bai2.mp4',
                productId: 4
            },
            { name: 'Bài 3 : Cách tạo bảng, chèn video và âm thanh',
                content: '',
                clip: '/img/product/video/bai3.mp4',
                productId: 4
            },
            { name: 'Bài 4 - Trình bày biểu mẫu FORM - hiểu về IFRAME',
                content: '',
                clip: '/img/product/video/bai4.mp4',
                productId: 4
            },
            //-----------------------------------------------------------------------------------------------
            { name: 'Bài 1 : Giới thiệu Lập trình ReactJS ',
                content: '',
                clip: '/img/product/video/bai1.mp4',
                productId: 5
            },
            { name: 'Bài 2 : Cài đặt môi trường - Công cụ phát triển',
                content: '',
                clip: '/img/product/video/bai2.mp4',
                productId: 5
            },
            { name: 'Bài 3 : Khởi tạo Project ReactJS đầu tiên chạy bằng Create-React-App',
                content: '',
                clip: '/img/product/video/bai3.mp4',
                productId: 5
            },
            { name: 'Bài 4 : Component',
                content: '',
                clip: '/img/product/video/bai4.mp4',
                productId: 5
            },
            { name: 'Bài 5: JSX',
                content: '',
                clip: '/img/product/video/bai5.mp4',
                productId: 5
            },
            { name: 'Bài 6 : JSX mở rộng',
                content: '',
                clip: '/img/product/video/bai6.mp4',
                productId: 5
            },
            { name: 'Bài 7 : Props',
                content: '',
                clip: '/img/product/video/bai7.mp4',
                productId: 5
            },
            { name: 'Bài 8 : Xử lí sự kiện ( Event Handling in ReactJS)',
                content: '',
                clip: '/img/product/video/bai8.mp4',
                productId: 5
            },
            { name: 'Bài 9 : Refs',
                content: '',
                clip: '/img/product/video/bai9.mp4',
                productId: 5
            },
            { name: 'Bài 10 : State',
                content: '',
                clip: '/img/product/video/bai10.mp4',
                productId: 5
            },
            //-----------------------------------------------------------------------------------------------
            { name: 'Bài 1: Cài đặt môi trường phát triển Angular4 và Angular CLI',
                content: '',
                clip: '/img/product/video/bai1.mp4',
                productId: 6
            },
            { name: 'Bài 2 : Component',
                content: '',
                clip: '/img/product/video/bai2.mp4',
                productId: 6
            },
            { name: 'Bài 3 : Interpolation',
                content: '',
                clip: '/img/product/video/bai3.mp4',
                productId: 6
            },
            { name: 'Bài 4 : Property - Attribute - Class - Style Binding',
                content: '',
                clip: '/img/product/video/bai4.mp4',
                productId: 6
            },
            //-----------------------------------------------------------------------------------------------
            { name: 'Bài 1 : Tổng quan về khoa học Lập trình C++',
                content: '',
                clip: '/img/product/video/bai1.mp4',
                productId: 7
            },
            { name: 'Bài 2 : Giới thiệu về C++',
                content: '',
                clip: '/img/product/video/bai2.mp4',
                productId: 7
            },
            { name: 'Bài 3 : Cấu trúc một chương trình C++',
                content: '',
                clip: '/img/product/video/bai3.mp4',
                productId: 7
            },
            { name: 'Bài 4 : Kinh nghiệm về Ghi chú trong C++',
                content: '',
                clip: '/img/product/video/bai4.mp4',
                productId: 7
            },
            { name: 'Bài 5 : Biến trong C++ ( Variables in C++)',
                content: '',
                clip: '/img/product/video/bai5.mp4',
                productId: 7
            },
            //-----------------------------------------------------------------------------------------------
            { name: 'Bài 1 : Giới thiệu Java',
                content: '',
                clip: '/img/product/video/bai1.mp4',
                productId: 8
            },
            { name: 'Bài 2 : Cài đặt môi trường Java',
                content: '',
                clip: '/img/product/video/bai2.mp4',
                productId: 8
            },
            { name: 'Bài 3 : Chương trình Java đầu tiên',
                content: '',
                clip: '/img/product/video/bai3.mp4',
                productId: 8
            },
            { name: 'Bài 4 : Biến trong Java',
                content: '',
                clip: '/img/product/video/bai4.mp4',
                productId: 8
            },
            //-----------------------------------------------------------------------------------------------
            { name: 'Bài 1 : Hướng dẫn LaTex 1 -  Giới thiệu ngnắ về LaTex',
                content: '',
                clip: '/img/product/video/bai1.mp4',
                productId: 9
            },
            { name: 'Bài 2 : Hướng dẫn Latex 2 - Cài đặt LaTex',
                content: '',
                clip: '/img/product/video/bai2.mp4',
                productId: 9
            },
            { name: 'Bài 3 : Soạn thảo LaTex online - Tự tạo CV',
                content: '',
                clip: '/img/product/video/bai3.mp4',
                productId: 9
            },
            { name: 'Bài 4 : Giới thiệu thư viện vẽ hình',
                content: '',
                clip: '/img/product/video/bai4.mp4',
                productId: 9
            },
            { name: 'Bài 5 : Vẽ hình - Điểm',
                content: '',
                clip: '/img/product/video/bai5.mp4',
                productId: 9
            },
            { name: 'Bài 6 : Vẽ hình - Đường thẳng, Đoạn thẳng, Tia',
                content: '',
                clip: '/img/product/video/bai6.mp4',
                productId: 9
            },
            { name: 'Bài 7 : Vẽ hình - Góc',
                content: '',
                clip: '/img/product/video/bai7.mp4',
                productId: 9
            },
            { name: 'Bài 8 : Vẽ hình - Đường tròn',
                content: '',
                clip: '/img/product/video/bai8.mp4',
                productId: 9
            },
            { name: 'Bài 9 : LaTex cho người mới bắt đầu',
                content: '',
                clip: '/img/product/video/bai9.mp4',
                productId: 9
            },
            //-----------------------------------------------------------------------------------------------
            { name: 'Bài 1 : Giới thiệu ngôn ngữ lập trình Python',
                content: '',
                clip: '/img/product/video/bai1.mp4',
                productId: 10
            },
            { name: 'Bài 2 : Cài đặt môi trường Python',
                content: '',
                clip: '/img/product/video/bai2.mp4',
                productId: 10
            },
            { name: 'Bài 3 : Chạy file Python',
                content: '',
                clip: '/img/product/video/bai3.mp4',
                productId: 10
            },
            { name: 'Bài 4 : Comment trong Python',
                content: '',
                clip: '/img/product/video/bai4.mp4',
                productId: 10
            },
            { name: 'Bài 5 : Biến( Variable) trong Python',
                content: '',
                clip: '/img/product/video/bai5.mp4',
                productId: 10
            },
            //-----------------------------------------------------------------------------------------------
            { name: 'Bài 1 : Thành phần câu cơ bản',
                content: '',
                clip: '/img/product/video/bai1.mp4',
                productId: 10
            },
            { name: 'Bài 2 : Phân biệt các loại danh từ trong Tiếng Anh',
                content: '',
                clip: '/img/product/video/bai2.mp4',
                productId: 10
            },
            { name: 'Bài 3 : Cách sử dụng a/an/the cơ bản',
                content: '',
                clip: '/img/product/video/bai3.mp4',
                productId: 10
            },
            { name: 'Bài 4 : Thì hiện tại đơn, động từ TOBE',
                content: '',
                clip: '/img/product/video/bai4.mp4',
                productId: 10
            },
            { name: 'Bài 5 : 30 câu có thể hiểu các thì của Tiếng Anh',
                content: '',
                clip: '/img/product/video/bai5.mp4',
                productId: 10
            },
            //-----------------------------------------------------------------------------------------------
            { name: 'Bài 1 : Từ vựng Tiếng Anh cơ bản',
                content: '',
                clip: '/img/product/video/bai1.mp4',
                productId: 12
            },
            { name: 'Bài 2 : Từ vựng về ngày HALLOWEEN',
                content: '',
                clip: '/img/product/video/bai2.mp4',
                productId: 12
            },
            { name: 'Bài 3 : 150 câu Tiếng Anh giao tiếp',
                content: '',
                clip: '/img/product/video/bai3.mp4',
                productId: 12
            },
            { name: 'Bài 4 : Luyện nghe Tiếng Anh',
                content: '',
                clip: '/img/product/video/bai4.mp4',
                productId: 12
            },
            //-----------------------------------------------------------------------------------------------
            { name: 'Bài 1 : 100 câu Tiếng Hàn giao tiếp cơ bản',
                content: '',
                clip: '/img/product/video/bai1.mp4',
                productId: 13
            },
            { name: 'Bài 2 : 9 bí kíp giúp tự học để nói giỏi Tiếng Hàn ',
                content: '',
                clip: '/img/product/video/bai2.mp4',
                productId: 13
            },
            { name: 'Bài 3 : Những mẫu câu hỏi thường dùng nhất trong Tiếng Hàn',
                content: '',
                clip: '/img/product/video/bai3.mp4',
                productId: 13
            },
            //-----------------------------------------------------------------------------------------------
            { name: 'Bài 1 : 50 câu Tiếng Trung siêu dễ nhớ',
                content: '',
                clip: '/img/product/video/bai1.mp4',
                productId: 14
            },
            { name: 'Bài 2 : Chủ đề Chào Hỏi trong Tiếng Trung',
                content: '',
                clip: '/img/product/video/bai2.mp4',
                productId: 14
            },
            { name: 'Bài 3 : Các câu đàm thoại cơ bản',
                content: '',
                clip: '/img/product/video/bai3.mp4',
                productId: 14
            },
            //-----------------------------------------------------------------------------------------------
            { name: 'Bài 1 : 3 cách xoá vật thể hiệu quả và dễ nhất trong Photoshop',
                content: '',
                clip: '/img/product/video/bai1.mp4',
                productId: 15
            },
            { name: 'Bài 2 : Xoá vật thể bất kỳ trong ảnh bằng Photoshop',
                content: '',
                clip: '/img/product/video/bai2.mp4',
                productId: 15
            },
            { name: 'Bài 3 : Xoá vật thể ra khỏi hình',
                content: '',
                clip: '/img/product/video/bai3.mp4',
                productId: 15
            },
            //-----------------------------------------------------------------------------------------------
            { name: 'Bài 1 : Cầm tay hướng dẫn người mới học',
                content: '',
                clip: '/img/product/video/bai1.mp4',
                productId: 16
            },
            { name: 'Bài 2 : 30 phút sử dụng tất tần tật các công cụ thiết kế',
                content: '',
                clip: '/img/product/video/bai2.mp4',
                productId: 16
            },
            { name: 'Bài 3 : Các công cụ cần thiết cho thiết kế cơ bản',
                content: '',
                clip: '/img/product/video/bai3.mp4',
                productId: 16
            },
            //-----------------------------------------------------------------------------------------------
            { name: 'Bài 1 : 5 chuyển cảnh đẹp nên dùng - Presets Transition Free APCC',
                content: '',
                clip: '/img/product/video/bai1.mp4',
                productId: 17
            },
            { name: 'Bài 2 : Hướng dẫn chuyển cảnh Masking Transition -- Adobe Premiere CC',
                content: '',
                clip: '/img/product/video/bai2.mp4',
                productId: 17
            },
            { name: 'Bài 3 : Hướng dẫn làm phim - Chuyển cảnh cực đỉnh ',
                content: '',
                clip: '/img/product/video/bai3.mp4',
                productId: 17
            },
            { name: 'Bài 4 : Top 3 chuyển cảnh được các Editors sử dụng nhiều nhất trên Adobe Premiere',
                content: '',
                clip: '/img/product/video/bai4.mp4',
                productId: 17
            },
            //-----------------------------------------------------------------------------------------------
            { name: 'Bài 1 : Cách import dữ liệu video, hình ảnh vào Premiere Pro',
                content: '',
                clip: '/img/product/video/bai1.mp4',
                productId: 18
            },
            { name: 'Bài 2 : Cách cắt, ghép, chỉnh sửa video và sử dụng công cụ trong Adobe Premiere',
                content: '',
                clip: '/img/product/video/bai2.mp4',
                productId: 18
            },
            { name: 'Bài 3 : Cách xoay,lật, phóng to, thu nhỏ video và hình ảnh trong Adobe Premiere',
                content: '',
                clip: '/img/product/video/bai3.mp4',
                productId: 18
            },
            { name: 'Bài 4 : Hướng dẫn cách ạo hiệu ứng chuyển cảnh đẹp cho video trong Adobe Premiere',
                content: '',
                clip: '/img/product/video/bai4.mp4',
                productId: 18
            },
            { name: 'Bài 5 : Hướng dẫn các tăng giảm tốc độ video clip ( speed , slow motion) bằng Premiere',
                content: '',
                clip: '/img/product/video/bai5.mp4',
                productId: 18
            },
            { name: 'Bài 6 : Cách chỉnh hiệu ứng màu sắc, sáng tối cho video tỏng Adobe Premiere',
                content: '',
                clip: '/img/product/video/bai6.mp4',
                productId: 18
            },
            { name: 'Bài 7 Cách tách nền video phông xanh để ghép cảnh cho video trong Adobe Premiere',
                content: '',
                clip: '/img/product/video/bai7.mp4',
                productId: 18
            },
            { name: 'Bài 8 : Cách viết chữ (chèn text ) trong Adobe Premiere và thêm hiệu ứng chuyển động cho chữ',
                content: '',
                clip: '/img/product/video/bai8.mp4',
                productId: 18
            },
            { name: 'Bài 9 : Cách chỉnh âm thanh (audio) và lọc tạp âm, tiếng ồn( khử noise) trong Adobe Premiere',
                content: '',
                clip: '/img/product/video/bai9.mp4',
                productId: 18
            },
            { name: 'Bài 10 : Học dựng phim Adobe Premiere cơ bản trong 20 phút',
                content: '',
                clip: '/img/product/video/bai10.mp4',
                productId: 18
            },
            //-----------------------------------------------------------------------------------------------
            { name: 'Bài 1 : Kinh doanh Online cần gì',
                content: '',
                clip: '/img/product/video/bai1.mp4',
                productId: 19
            },
            { name: 'Bài 2 : Hướng đãn tìm nguồn hàng kinh doanh Online',
                content: '',
                clip: '/img/product/video/bai2.mp4',
                productId: 19
            },
            { name: 'Bài 3 : Hướng dẫn chọn công ty giao hàng',
                content: '',
                clip: '/img/product/video/bai3.mp4',
                productId: 19
            },
            { name: 'Bài 4 : Những cách Marketing Online miễn phí',
                content: '',
                clip: '/img/product/video/bai4.mp4',
                productId: 19
            },
            { name: 'Bài 5 : Về quảng cáo Facebook, Google Adwords và Email Marketing',
                content: '',
                clip: '/img/product/video/bai5.mp4',
                productId: 19
            },
            { name: 'Bài 6 : Tính toàn làm sao để không chết',
                content: '',
                clip: '/img/product/video/bai6.mp4',
                productId: 19
            },
            { name: 'Bài 7 : Tiết kiệm bộn tiền nếu làm theo cách này',
                content: '',
                clip: '/img/product/video/bai7.mp4',
                productId: 19
            },
            //-----------------------------------------------------------------------------------------------
            { name: 'Bài 1 : 7 Cách tạo - Phễu data bán hàng trên facebook - Tiếp cận khách hàng chính xác tuyệt đối',
                content: '',
                clip: '/img/product/video/bai1.mp4',
                productId: 20
            },
            { name: 'Bài 2 : Các bước thực hiện content marketing cho người mới bắt đầu',
                content: '',
                clip: '/img/product/video/bai2.mp4',
                productId: 20
            },
            { name: 'Bài 3 : Chèn thêm liên kết youtube vào Facebook',
                content: '',
                clip: '/img/product/video/bai3.mp4',
                productId: 20
            },
            //-----------------------------------------------------------------------------------------------
            { name: 'Bài 1 : Các công cụ chuẩn bị cho việc bán hàng và quảng cáo trên Facebook',
                content: '',
                clip: '/img/product/video/bai1.mp4',
                productId: 21
            },
            { name: 'Bài 2 : Hướng dẫn tạo lập fanpage hiệu quả',
                content: '',
                clip: '/img/product/video/bai2.mp4',
                productId: 21
            },
            { name: 'Bài 3 : 6 vị trí hiển thị và 3 cách tạo quảng cáo Facebook',
                content: '',
                clip: '/img/product/video/bai3.mp4',
                productId: 21
            },
            { name: 'Bài 4 : Các mục tiêu sau tiếp thị quảng cáo Facebook',
                content: '',
                clip: '/img/product/video/bai4.mp4',
                productId: 21
            },
            { name: 'Bài 5 : Hướng dẫn bảo mật tài khoản cá nhân và bảo mật Fanpage',
                content: '',
                clip: '/img/product/video/bai5.mp4',
                productId: 21
            },
            //-----------------------------------------------------------------------------------------------
            { name: 'Bài 1 : Marketing Online là gì? ',
                content: '',
                clip: '/img/product/video/bai1.mp4',
                productId: 21
            },
            { name: 'Bài 2 :  Tạo Fanpage và tối ưu Fanpage để bán hàng online hiệu quả',
                content: '',
                clip: '/img/product/video/bai2.mp4',
                productId: 21
            },
            { name: 'Bài 3 : Content marketing cần những gì?',
                content: '',
                clip: '/img/product/video/bai3.mp4',
                productId: 21
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