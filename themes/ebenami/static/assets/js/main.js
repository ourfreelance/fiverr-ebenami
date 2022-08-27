import "https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.js"

new Swiper('.swiper-students', {
  slidesPerView: 3,
  spaceBetween: 30,
  navigation: {
    prevEl: '.swiper-student-prev',
    nextEl: '.swiper-student-next',
    disabledClass: 'opacity-50 hover:!opacity-50',
    lockClass: 'hidden'
  },
})

