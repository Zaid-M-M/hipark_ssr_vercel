import gsap from "gsap";
let Swiper, SwiperSlide, Navigation, Pagination, FreeMode, Thumbs;
// Check if window is defined to ensure it's on the client-side
if (typeof window !== 'undefined') {
  let scrollTrigger = require("gsap/ScrollTrigger");
  gsap.registerPlugin(scrollTrigger);
  // Only import Swiper and SwiperSlide on the client-side
  ({ Swiper, SwiperSlide } = require('swiper/react'));

  // Import other Swiper components and CSS only in the client-side bundle
  ({ Navigation, Pagination, FreeMode, Thumbs } = require('swiper'));
  require('swiper/css');
  require('swiper/css/free-mode');
  require('swiper/css/navigation');
  require('swiper/css/pagination');
  require('swiper/css/thumbs');
  require('swiper/css/effect-creative');
  require('swiper/css/effect-fade');
  require("slick-carousel/slick/slick.css");
  require("slick-carousel/slick/slick-theme.css");
}



export { Swiper, SwiperSlide, Navigation, Pagination, FreeMode, Thumbs, gsap };
