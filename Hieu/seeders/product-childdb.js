'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        let data = [
            { name: 'Bài 1 : Tạo Project',
                content: '',
                clip: '',
                productId: '1'
            },
            { name: 'Bài 2 : Giới thiệu Android Studio',
                content: '',
                clip: '',
                productId: '1'
            },
            { name: 'Bài 3 : Ôn tập Java - Phần 1',
                content: '',
                clip: '',
                productId: '1'
            },
            { name: 'Bài 4 : Ôn tập Java - Phần 2',
                content: '',
                clip: '',
                productId: '1'
            },
            { name: 'Bài 5 : Ôn tâp Java - Phần 3',
                content: '',
                clip: '',
                productId: '1'
            },
            { name: 'Bài 6 : Ôn tập Java - Phần 4',
                content: '',
                clip: '',
                productId: '1'
            },
            { name: 'Bài 7 : Ôn tập Java - Phần 5',
                content: '',
                clip: '',
                productId: '1'
            },
           // ---------------------------------------------------------------------------------
            { name: 'Bài 1 : Tạo Project và làm quen với Xcode',
                content: '',
                clip: '',
                productId: '2'
            },
            { name: 'Bài 2 : Các thành phần chính trong Xcode project',
                content: '',
                clip: '',
                productId: '2'
            },
            { name: 'Bài 3 : Kết nối giao diện với mã nguồn',
                content: '',
                clip: '',
                productId: '2'
            },
            { name: 'Bài 4 : Làm việc với UILabel',
                content: '',
                clip: '',
                productId: '2'
            },
            { name: 'Bài 5 : Làm việc với UIButton',
                content: '',
                clip: '',
                productId: '2'
            },
            //------------------------------------------------------------------------------------------------
            { name: 'Bài 1 : Bắt đầu làm việc cơ bản với CSS',
                content: '',
                clip: '',
                productId: '3'
            },
            { name: 'Bài 2 : Những cú pháp selector sẽ cần sử dụng thường xuyên',
                content: '',
                clip: '',
                productId: '3'
            },
            //-----------------------------------------------------------------------------------------------
            { name: 'Bài 1 : Làm quen với HTML và một số thẻ HTML cơ bản',
                content: '',
                clip: '',
                productId: '4'
            },
            { name: 'Bài 2 : Danh sách, liên kết, hình ảnh và bản đồ liên kết',
                content: '',
                clip: '',
                productId: '4'
            },
            { name: 'Bài 3 : Cách tạo bảng, chèn video và âm thanh',
                content: '',
                clip: '',
                productId: '4'
            },
            { name: 'Bài 4 : Trình bày biểu mẫu FORM - hiều về IFRAME',
                content: '',
                clip: '',
                productId: '4'
            },
            //-----------------------------------------------------------------------------------------------
            { name: 'Bài 1 : Thành phần câu cơ bản',
                content: '',
                clip: '',
                productId: '5'
            },
            { name: 'Bài 2 : Phân biệt các loại danh từ trong Tiếng Anh',
                content: '',
                clip: '',
                productId: '5'
            },
            { name: 'Bài 3 : Cách sử dụng a/an/the cơ bản',
                content: '',
                clip: '',
                productId: '5'
            },
            { name: 'Bài 4 : Thì hiện tại đơn, động từ TOBE',
                content: '',
                clip: '',
                productId: '5'
            },
            { name: 'Bài 5 : 30 câu có thể hiểu các thì của Tiếng Anh',
                content: '',
                clip: '',
                productId: '5'
            },
            //-----------------------------------------------------------------------------------------------
            { name: 'Từ vựng Tiếng Anh cơ bản',
                content: '',
                clip: '',
                productId: '6'
            },
            { name: 'Từ vựng về ngày HALLOWEEN',
                content: '',
                clip: '',
                productId: '6'
            },
            { name: '150 câu Tiếng Anh giao tiếp',
                content: '',
                clip: '',
                productId: '6'
            },
            { name: 'Luyện nghe Tiếng Anh',
                content: '',
                clip: '',
                productId: '6'
            },
            //-----------------------------------------------------------------------------------------------
            { name: '100 câu Tiếng Hàn giao tiếp cơ bản',
                content: '',
                clip: '',
                productId: '7'
            },
            { name: '9 bí kíp giúp tự học để nói giỏi Tiếng Hàn ',
                content: '',
                clip: '',
                productId: '7'
            },
            { name: 'Những mẫu câu hỏi thường dùng nhất trong Tiếng Hàn',
                content: '',
                clip: '',
                productId: '7'
            },
            //-----------------------------------------------------------------------------------------------
            { name: '50 câu Tiếng Trung siêu dễ nhớ',
                content: '',
                clip: '',
                productId: '8'
            },
            { name: 'Chủ đề Chào Hỏi trong Tiếng Trung',
                content: '',
                clip: '',
                productId: '8'
            },
            { name: 'Các câu đàm thoại cơ bản',
                content: '',
                clip: '',
                productId: '8'
            },
            //-----------------------------------------------------------------------------------------------
            { name: '3 cách xoá vật thể hiệu quả và dễ nhất trong Photoshop',
                content: '',
                clip: '',
                productId: '9'
            },
            { name: 'Xoá vật thể bất kỳ trong ảnh bằng Photoshop',
                content: '',
                clip: '',
                productId: '9'
            },
            { name: 'Xoá vật thể ra khỏi hình',
                content: '',
                clip: '',
                productId: '9'
            },
            //-----------------------------------------------------------------------------------------------
            { name: 'Cầm tay hướng dẫn người mới học',
                content: '',
                clip: '',
                productId: '10'
            },
            { name: '30 phút sử dụng tất tần tật các công cụ thiết kế',
                content: '',
                clip: '',
                productId: '10'
            },
            //-----------------------------------------------------------------------------------------------
            { name: '5 chuyển cảnh đẹp nên dùng - Presets Transition Free APCC',
                content: '',
                clip: '',
                productId: '11'
            },
            { name: 'Hướng dẫn chuyển cảnh Masking Transition -- Adobe Premiere CC',
                content: '',
                clip: '',
                productId: '11'
            },
            { name: 'Hướng dẫn làm phim - Chuyển cảnh cực đỉnh ',
                content: '',
                clip: '',
                productId: '11'
            },
            { name: 'Top 3 chuyển cảnh được các Editors sử dụng nhiều nhất trên Adobe Premiere',
                content: '',
                clip: '',
                productId: '11'
            },
            //-----------------------------------------------------------------------------------------------
            { name: 'Bài 1 : Cách import dữ liệu video, hình ảnh vào Premiere Pro',
                content: '',
                clip: '',
                productId: '12'
            },
            { name: 'Bài 2 : Cách cắt, ghép, chỉnh sửa video và sử dụng công cụ trong Adobe Premiere',
                content: '',
                clip: '',
                productId: '12'
            },
            { name: 'Bài 3 : Cách xoay,lật, phóng to, thu nhỏ video và hình ảnh trong Adobe Premiere',
                content: '',
                clip: '',
                productId: '12'
            },
            { name: 'Bài 4 : Hướng dẫn cách ạo hiệu ứng chuyển cảnh đẹp cho video trong Adobe Premiere',
                content: '',
                clip: '',
                productId: '12'
            },
            { name: 'Bài 5 : Hướng dẫn các tăng giảm tốc độ video clip ( speed , slow motion) bằng Premiere',
                content: '',
                clip: '',
                productId: '12'
            },
            { name: 'Bài 6 : Cách chỉnh hiệu ứng màu sắc, sáng tối cho video tỏng Adobe Premiere',
                content: '',
                clip: '',
                productId: '12'
            },
            { name: 'Bài 7 Cách tách nền video phông xanh để ghép cảnh cho video trong Adobe Premiere',
                content: '',
                clip: '',
                productId: '12'
            },
            { name: 'Bài 8 : Cách viết chữ (chèn text ) trong Adobe Premiere và thêm hiệu ứng chuyển động cho chữ',
                content: '',
                clip: '',
                productId: '12'
            },
            { name: 'Bài 9 : Cách chỉnh âm thanh (audio) và lọc tạp âm, tiếng ồn( khử noise) trong Adobe Premiere',
                content: '',
                clip: '',
                productId: '12'
            },
            { name: 'Học dựng phim Adobe Premiere cơ bản trong 20 phút',
                content: '',
                clip: '',
                productId: '12'
            },


        ];
        data.map(item => {
            item.createdAt = Sequelize.literal('NOW()');
            item.updatedAt = Sequelize.literal('NOW()');
            return item;
        });
        return queryInterface.bulkInsert('Productchilds', data, {});
    },

    down: (queryInterface, Sequelize) => {

        return queryInterface.bulkDelete('Productchilds', null, {});

    }
}; 