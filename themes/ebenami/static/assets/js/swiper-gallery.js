const swiperGallery = new Swiper('.swiper-gallery', {
  slidesPerView: 1,
  spaceBetween: 30,
  navigation: {
    prevEl: '.swiper-gallery-prev',
    nextEl: '.swiper-gallery-next',
    disabledClass: '!opacity-50',
    lockClass: 'hidden'
  },
})

document.addEventListener('alpine:init', () => {
  Alpine.data('gallery', () => ({
    openSelected: null,

    changeOpenSelected(value) {
      this.openSelected = value
      swiperGallery.slideTo(value-1)
    },
  }))
})