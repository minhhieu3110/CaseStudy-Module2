var mySwiper = new Swiper('.exclusive', {
    // Tùy chọn
    slidesPerView: 4.7, // Số slide hiển thị trên một khung
    spaceBetween: 30, // Khoảng cách giữa các slide
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