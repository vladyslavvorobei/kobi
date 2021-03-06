import Swiper from 'swiper';

function addSliders() {
  const firstScreenSlider = new Swiper('.first-screen__slider.swiper-container', {
    navigation: {
      nextEl: '.first-screen__next',
      prevEl: '.first-screen__prev',
    },
  });

  const noveltySlider = new Swiper('.novelty__slider.swiper-container', {
    loop: true,
    navigation: {
      nextEl: '.novelty__slide-button--next',
      prevEl: '.novelty__slide-button--prev',
    },
  });

  const projectsSlider = new Swiper('.projects__slider.swiper-container', {
    loop: true,
    slidesPerView: 1,
    navigation: {
      nextEl: '.projects__slide-button--next',
      prevEl: '.projects__slide-button--prev',
    },
    breakpoints: {
      575: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1199: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
      1600: {
        slidesPerView: 5,
        spaceBetween: 20,
      },
      1800: {
        slidesPerView: 6,
        spaceBetween: 20,
      },
    }
  });

  console.log('addSliders - ready')
}

module.exports = addSliders;
