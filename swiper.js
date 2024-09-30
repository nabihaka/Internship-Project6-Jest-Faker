const Swiper = jest.fn(() => ({
    init: jest.fn(),
    slideNext: jest.fn(),
    slidePrev: jest.fn(),
}));
  
export default Swiper;
  