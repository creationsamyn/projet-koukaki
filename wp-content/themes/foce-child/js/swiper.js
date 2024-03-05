document.addEventListener('DOMContentLoaded', function() {
    let swiper = new Swiper('.swiper-container', {
        spaceBetween: 60,
        speed: 1000,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        loop: true,
        slidesPerView: 3,
        coverflowEffect: {
            rotate: 60,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: false,
        },
    });
});
