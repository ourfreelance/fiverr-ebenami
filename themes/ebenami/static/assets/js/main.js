new Swiper('.swiper-students', {
  slidesPerView: 1,
  spaceBetween: 30,
  navigation: {
    prevEl: '.swiper-student-prev',
    nextEl: '.swiper-student-next',
    disabledClass: '!opacity-50 hover:!opacity-50 hover:!bg-transparent hover:!text-primary',
    lockClass: 'hidden'
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 30
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 30
    }
  }
})

