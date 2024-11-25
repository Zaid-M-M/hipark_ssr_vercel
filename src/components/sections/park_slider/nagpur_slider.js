import React from 'react'
import Slider from 'react-slick';
import '../../../assets/css/park.css';
import "../../../helper/common";
export default function Nagpur_slider() {

  const park_slider = {
    arrows: true,
    infinite: false,
    slidesToShow: 2.2,
    slidesToScroll: 1,
    speed: 500,
    // centerMode: true,
    // centerPadding: '40px',
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 3,
            
          }
        },
        {
          breakpoint: 835,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll:1,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
  };


  return (
    <>
      <div className='park_info_dv' id='div8'>
        <div className='park_name_dv'>
            <p className='park_name'>Nagpur</p>
            <p className='park_status'><span>01</span> active</p>
            <p className='park_status'><span>0</span> Under Construction</p>
        </div>

        <div className='park_slider_outer_dv'>
            <Slider {...park_slider} className='park_main_slider'>
                
        
            
                <div className='park_sld'>

                <a href=''>
                  <div className='prk_content_dv'>

                      <div className='prk_img_dv'>
                          <img src={require('../../../assets/img/park1.webp')}></img>
                          <div className='patch_dv'>
                            <p>Active</p>
                          </div>
                          {/* <div className='arrow_circle'>
                            <img src={require('../../../assets/img/svg/white_btn_arrow.svg')}></img>
                          </div> */}
                      </div>

                      <div className='prk_inner_content'>
                          <p className='prk_name'>Nagpur</p>

                          <div className='prk_cnt_hd'>
                            <p className='area_hd'>Area</p>
                            <p className='potential_hd'>Potential</p>
                            <p className='usage_hd'>Usage</p>
                          </div>

                          <div className='prk_cnt_vlu'>
                            <p className='area_vlu'>82 acres</p>
                            <p className='potential_hd_vlu'>1.6 MN sq ft</p>
                            <p className='usage_hd_vlu'>Warehousing</p>
                          </div>

                          {/* <a href='' className='prk_btn'>Explore more</a> */}
                      </div>

                  </div>
                </a>

                </div>
                
             
            </Slider>
          </div>
      </div>
    </>
  )
}
