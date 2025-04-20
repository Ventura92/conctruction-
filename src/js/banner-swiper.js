import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

export function swiperBanner(){
  console.log(`coming from swiper-banner`);


  Swiper.use([Navigation,Pagination]);

  const swiper = new Swiper('.card', {
    // configure Swiper to use modules
    modules: [Navigation, Pagination],  
    // Optional parameters
    direction: 'horizontal',
    slidesPerView: 1,
    loop: true,
    // centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },

    
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },

    // Navigation arrows
    navigation: {
      nextEl: '.card .swiper-button-next',
      prevEl: '.card .swiper-button-prev',
    }
  });
}