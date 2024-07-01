var mySwiper = new Swiper('.item-recommend', {
    // Tùy chọn
    slidesPerView: 4, // Số slide hiển thị trên một khung
    spaceBetween: 40, // Khoảng cách giữa các slide
    slidesPerGroup: 1, // Số slide di chuyển cho mỗi lần click
    loop: false, // Lặp lại carousel khi đến slide cuối
    loopFillGroupWithBlank: true, // Thêm slide trống nếu nhóm cuối không đủ slide
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});


    document.addEventListener('DOMContentLoaded', function() {
    // Tìm tất cả các nút trong phần 'btn-color-item-recommend'
    document.querySelectorAll('.btn-color-item-recommend button').forEach(button => {
        button.addEventListener('click', function() {
            var slide = this.closest('.swiper-slide');
            var target = this.getAttribute('data-target');
            
            slide.querySelectorAll('.image img, .sub-title-item-recommend p').forEach(element => {
                element.style.visibility = 'hidden';
            });
            
            slide.querySelector(`.image .${target}`).style.visibility = 'visible';
            slide.querySelector(`.sub-title-item-recommend .${target}`).style.visibility = 'visible';
        });
    });
});
