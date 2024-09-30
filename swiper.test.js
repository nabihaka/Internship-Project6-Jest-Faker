import Swiper from './swiper'; // Pastikan untuk menggunakan path lokal

describe('Swiper Initialization', () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <div class="swiper">
        <div class="swiper-pagination"></div>
        <div class="swiper-button-next"></div>
        <div class="swiper-button-prev"></div>
      </div>
    `;
  });

  it('should initialize Swiper with correct parameters', () => {
    const swiperInstance = new Swiper('.swiper', {
      direction: 'horizontal',
      loop: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      slidesPerView: 1,
      spaceBetween: 0,
      centered: true,
      pagination: {
        el: '.swiper-pagination',
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });

    // Test if Swiper constructor is called
    expect(Swiper).toHaveBeenCalledTimes(1);

    // Test the parameters passed to Swiper
    expect(Swiper).toHaveBeenCalledWith('.swiper', expect.objectContaining({
      direction: 'horizontal',
      loop: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      slidesPerView: 1,
      spaceBetween: 0,
      centered: true,
      pagination: expect.objectContaining({
        el: '.swiper-pagination',
      }),
      navigation: expect.objectContaining({
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }),
    }));
  });
});
