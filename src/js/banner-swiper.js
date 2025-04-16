import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

export function swiperBanner(){
  console.log(`coming from swiper-banner`);


  Swiper.use([Navigation,Pagination]);

  const swiper = new Swiper('.swiper', {
    // configure Swiper to use modules
    modules: [Navigation, Pagination],  
    // Optional parameters
    direction: 'horizontal',
    slidesPerView: 1,
    loop: true,
    clickable: true,
    
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
      clickable: true,
    },
  });
}