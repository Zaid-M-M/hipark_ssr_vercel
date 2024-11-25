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
import Faruknagar_mob_slider_elsc from '../elsc_parks_slider/faruknagar_mob_slider_elsc';
import Koka_mob_slider_elsc from '../elsc_parks_slider/koka_mob_slider_elsc';
import Delhi_one_mob_slider_elsc from '../elsc_parks_slider/delhi_one_mob_slider_elsc';
import Delhi_two_mob_slider_elsc from '../elsc_parks_slider/delhi_two_mob_slider_elsc';
import Bilaspur_mob_slider_elsc from '../elsc_parks_slider/bilaspur_mob_slider_elsc';



export default function Elsc_mob_ncr_slider() {

  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  let sliderRef1 = useRef(null);
  let sliderRef2 = useRef(null);

  // const [activeTab, setActiveTab] = useState(0); 
  // const pgUrl = window.location.pathname;

  
  useEffect(() => {
    setNav1(sliderRef1);
    setNav2(sliderRef2);
    
    // const tabMap = {
    //   '/parks-availability-north/farukhnagar': 0,
    //   '/parks-availability-north/koka': 1,
    //   '/parks-availability-north/delhi-i': 2,
    //   '/parks-availability-north/delhi-ii': 3,
    //   '/parks-availability-north/bilaspur': 4,
    // };
    // setActiveTab(tabMap[pgUrl] || 0);
  });

  
  return (
    <>

      <div className='ncr_mob_sld'>


        {/* Tabs slider */}
        <Slider
          asNavFor={nav1}
          ref={slider => (sliderRef2 = slider)}
          slidesToShow={2}
          swipeToSlide={true}
          focusOnSelect={true}
          centerMode={true}
          centerPadding={'60px'}
          className='slider_mob_tabs'
        >
    
          <div className='elsc_tab_sld'>
            <a className='' >Farukhnagar {'(2)'}</a>
          </div>
    
          <div className='elsc_tab_sld'>
            <a className=''>Koka {'(1)'}</a>
          </div>
      
          <div className='elsc_tab_sld'>
            <a className=''>Delhi I {'(2)'}</a>
          </div>
      
          <div className='elsc_tab_sld'>
            <a className=''>Delhi II {'(1)'}</a>
          </div>
    
          <div className='elsc_tab_sld'>
            <a className=''>Bilaspur {'(3)'}</a>
          </div>
       

        </Slider>


        {/* Tabs Content */}
        <Slider 
          asNavFor={nav2}
          slidesToShow={1}
          ref={slider => (sliderRef1 = slider)}
          className='slider_mob_tabs'
        >
          <div className=''>
            <Faruknagar_mob_slider_elsc />
          </div>

          <div className=''>
            <Koka_mob_slider_elsc />
          </div>

          <div className=''>
            <Delhi_one_mob_slider_elsc />
          </div>

          <div className=''>
            <Delhi_two_mob_slider_elsc />
          </div>

          <div className=''>
            <Bilaspur_mob_slider_elsc />
          </div>

        </Slider>

      </div>
    </>
  );
}




