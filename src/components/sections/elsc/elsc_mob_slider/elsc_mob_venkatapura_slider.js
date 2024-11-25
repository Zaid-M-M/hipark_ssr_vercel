import React, { useState, useEffect, useRef } from 'react';
import Slider from "react-slick";
import "../../../../assets/css/elsc_mob_swiper.css";

// Import Swiper styles
// import { Swiper, SwiperSlide } from "swiper/react";
// import { FreeMode, Navigation, Thumbs, EffectCreative, EffectFade, Mousewheel, Pagination } from "swiper";
// import "swiper/css";
// import "swiper/css/free-mode";
// import "swiper/css/navigation";
// import "swiper/css/thumbs";
// import "swiper/css/effect-creative";
// import 'swiper/css/effect-fade';

import Venkatapura_mob_slider_elsc from '../elsc_parks_slider/venkatapura_mob_slider_elsc';

export default function Elsc_mob_bhayala_slider() {
  
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  let sliderRef1 = useRef(null);
  let sliderRef2 = useRef(null);

  useEffect(() => {
    setNav1(sliderRef1);
    setNav2(sliderRef2);
  });

  return (
    <>

    <div className='ncr_mob_sld'>
      
​
      {/* Tabs slider */}
      <Slider
          asNavFor={nav1}
          ref={slider => (sliderRef2 = slider)}
          slidesToShow={2}
          swipeToSlide={true}
          focusOnSelect={true}
          infinite= {false}
          centerMode={false}
          centerPadding={'0px'}
          className='slider_mob_tabs'
      >
          <div className='elsc_tab_sld'>
            <a className=''>Venkatapura {'(2)'}</a>
          </div>
        
      </Slider>


      {/* Tabs Content */}
      <Slider 
        asNavFor={nav2}
        slidesToShow={1}
        infinite= {false}
        ref={slider => (sliderRef1 = slider)}
        className='slider_mob_content'
      >
        <div className=''>
          <Venkatapura_mob_slider_elsc/>
        </div>

      </Slider>

      </div>
    </>
  );
}