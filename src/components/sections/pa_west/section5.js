import React from "react";
import "../../../assets/css/section5.css";

import Slider from 'react-slick';
import '../../../assets/css/social.css';
import '../../../assets/css/park_gallery.css';
import '../../../assets/css/client_slider.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import useFetch from "react-fetch-hook";


export default function Section5() {

  const custm_slider = {
    arrows: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 800,
    centerMode: true,
    centerPadding: '140px',
    responsive: [
        {
            breakpoint: 1090,
            settings: {
              slidesToShow: 1,
              slidesToScroll:1,
              centerMode: true,
              centerPadding: '50px',
              adaptiveHeight: true
            }
        },
        {
            breakpoint: 835,
            settings: {
              slidesToShow: 1,
              slidesToScroll:1,
              centerMode: true,
              centerPadding: '80px',
              adaptiveHeight: true,
              infinite: true
            }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll:1,
            centerMode: false,
            centerPadding: '0px',
            adaptiveHeight: false,
            infinite: true
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: true,
            centerPadding: '15px',
            adaptiveHeight: false,
            infinite: true
          }
        }
    ]
};


  return (
    <>
      <div className="elsc_section5 mob_pd_LR tab_pd_LR">
        <div className="">

          <div className="row no_LR_margin">
            <div className="col-12 no_padding sec5_col1">
              <h2 className="section_heading">DRIVING BUSINESS EXCELLENCE</h2>
              <p className="para">Strategic implementation of Horizon's top-tier industrial and logistics real estate solutions.</p>
            </div>

            <div className="col-12 no_padding sec5_col2">

              <Slider {...custm_slider} className=' custm_main_slider social_main_slider CS_slider_elsc_landing'>

                  <div className='custm_outer_sld'>
                      <div className='cs_custm_inner'>

                          <div className='content_div'>
                              <img src={require('../../../assets/img/elsc_landing_pg/section5/Benteler_sld_img.png')} className='client_img'></img>
                              <div className='content_div_inner'>
                                  <p className=''>Horizon catalyses Bentler’s success with BTS facility</p>
                              </div>
                              <a href={require('../../../assets/pdf/Bentler.pdf')}  className="download_btn" download><img src={require('../../../assets/img/svg/elsc_landing/pdf_icon.svg')}></img>Donwload</a>
                              <div class="section5_cc_ovrly"></div>
                          </div>
                          
                      </div>
                  </div>

                  <div className='custm_outer_sld'>
                      <div className='cs_custm_inner'>

                          <div className='content_div'>
                              <img src={require('../../../assets/img/elsc_landing_pg/section5/3pl_sld_img.png')} className='client_img'></img>
                              <div className='content_div_inner'>
                                  <p className=''>Horizon’s accelerated development emerges as a masterstroke for LF Logistics</p>
                              </div>
                              <a href={require('../../../assets/pdf/3PL_player.pdf')}  className="download_btn" download><img src={require('../../../assets/img/svg/elsc_landing/pdf_icon.svg')}></img>Donwload</a>
                              <div class="section5_cc_ovrly"></div>
                          </div>
                          
                      </div>
                  </div>

                  <div className='custm_outer_sld'>
                      <div className='cs_custm_inner'>

                          <div className='content_div'>
                              <img src={require('../../../assets/img/elsc_landing_pg/section5/fosroc_sld_img.png')} className='client_img'></img>
                              <div className='content_div_inner'>
                                  <p className=''>Horizon delivers bespoke solution for Fosroc</p>
                              </div>
                              <a href={require('../../../assets/pdf/Fosroc.pdf')} className="download_btn" download><img src={require('../../../assets/img/svg/elsc_landing/pdf_icon.svg')}></img>Donwload</a>
                              <div class="section5_cc_ovrly"></div>
                          </div>
                          
                      </div>
                  </div>

              </Slider>

            </div>


          </div>

        </div>
      </div>
    </>
  );
}
