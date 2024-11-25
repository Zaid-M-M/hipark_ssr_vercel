import React from 'react'
import Slider from 'react-slick';
import useFetch from "react-fetch-hook";
import { Link } from "react-router-dom";
import '../../../assets/css/park.css';
import "../../../helper/common";

export default function Chennai_oth_slider() {
  const { data } = useFetch(
    "https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-json/wp/v2/parks/?categories=59"
  );

  const park_slider = {
    arrows: true,
    infinite: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    speed: 500,
    responsive: [
        {
          breakpoint: 1090,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            
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

          <Slider {...park_slider} className='park_main_slider other_park_slider ahmedabad_oth_slider'>
               
                {/* slider item   */}
                {data && data.map(({ id ,acf , slug}) => (   
           
                  <div className='park_sld' key={id}>
                    <Link to={"/" + slug}>
                      <div className='prk_content_dv'>

                          <div className='prk_img_dv'>
                              <img src={acf.park_spotlight_image}></img>
                              <div className='patch_dv'>
                                <p>{acf.park_status}</p>
                              </div>
                              <div className='arrow_circle'>
                                <img src={require('../../../assets/img/svg/white_btn_arrow.svg')}></img>
                              </div>
                          </div>

                          <div className='prk_inner_content'>
                              <p className='prk_name'>{acf.park_name}</p>

                              <div className='prk_cnt_hd'>
                                <p className='area_hd'>Area</p>
                                <p className='potential_hd'>Potential</p>
                                <p className='usage_hd'>Usage</p>
                              </div>

                              <div className='prk_cnt_vlu'>
                                <p className='area_vlu'>{acf.land_area}</p>
                                <p className='potential_hd_vlu'>{acf.development_potential}</p>
                                <p className='usage_hd_vlu'>{acf.land_usage}</p>
                              </div>

                              <Link to={"/" + slug} className='prk_btn'>Explore more</Link>
                          </div>

                      </div>
                    </Link>
                  </div>
                ))} 

              {/* <div className='park_sld'>
                <div className='prk_content_dv'>

                    <div className='prk_img_dv'>
                        <img src={require('../../../assets/img/park_2.jpg')}></img>
                        <div className='patch_dv'>
                          <p>Active</p>
                        </div>
                        <div className='arrow_circle'>
                          <img src={require('../../../assets/img/svg/white_btn_arrow.svg')}></img>
                        </div>
                    </div>

                    <div className='prk_inner_content'>
                        <p className='prk_name'>Farukhnagar</p>
                        <div className='prk_dv_1'>
                          <p className='area_hd'>Area</p>
                          <p className='area_vlu'>107.68 acres</p>
                        </div>
                        <div className='prk_dv_1'>
                          <p className='potential_hd'>Potential</p>
                          <p className='potential_hd_vlu'>3.1M sf</p>
                        </div>
                        <p className='usage_hd'>Usage</p>
                        <p className='usage_hd_vlu'>Industrial, Warehousing {'&'} Logistics park</p>

                        <Link to='#' className='prk_btn'>Explore more</Link>
                    </div>

                </div>
              </div>

              <div className='park_sld'>
                <div className='prk_content_dv'>

                    <div className='prk_img_dv'>
                        <img src={require('../../../assets/img/park_3.jpg')}></img>
                        <div className='patch_dv'>
                          <p>Active</p>
                        </div>
                        <div className='arrow_circle'>
                          <img src={require('../../../assets/img/svg/white_btn_arrow.svg')}></img>
                        </div>
                    </div>

                    <div className='prk_inner_content'>
                        <p className='prk_name'>Farukhnagar</p>
                        <div className='prk_dv_1'>
                          <p className='area_hd'>Area</p>
                          <p className='area_vlu'>107.68 acres</p>
                        </div>
                        <div className='prk_dv_1'>
                          <p className='potential_hd'>Potential</p>
                          <p className='potential_hd_vlu'>3.1M sf</p>
                        </div>
                        <p className='usage_hd'>Usage</p>
                        <p className='usage_hd_vlu'>Industrial, Warehousing {'&'} Logistics park</p>

                        <Link to='#' className='prk_btn'>Explore more</Link>
                    </div>

                </div>
              </div>

              <div className='park_sld'>
                <div className='prk_content_dv'>

                    <div className='prk_img_dv'>
                        <img src={require('../../../assets/img/park_1.jpg')}></img>
                        <div className='patch_dv'>
                          <p>Active</p>
                        </div>
                        <div className='arrow_circle'>
                          <img src={require('../../../assets/img/svg/white_btn_arrow.svg')}></img>
                        </div>
                    </div>

                    <div className='prk_inner_content'>
                        <p className='prk_name'>Farukhnagar</p>
                        <div className='prk_dv_1'>
                          <p className='area_hd'>Area</p>
                          <p className='area_vlu'>107.68 acres</p>
                        </div>
                        <div className='prk_dv_1'>
                          <p className='potential_hd'>Potential</p>
                          <p className='potential_hd_vlu'>3.1M sf</p>
                        </div>
                        <p className='usage_hd'>Usage</p>
                        <p className='usage_hd_vlu'>Industrial, Warehousing {'&'} Logistics park</p>

                        <Link to='#' className='prk_btn'>Explore more</Link>
                    </div>

                </div>
              </div>

              <div className='park_sld'>
                <div className='prk_content_dv'>

                    <div className='prk_img_dv'>
                        <img src={require('../../../assets/img/park_2.jpg')}></img>
                        <div className='patch_dv'>
                          <p>Active</p>
                        </div>
                        <div className='arrow_circle'>
                          <img src={require('../../../assets/img/svg/white_btn_arrow.svg')}></img>
                        </div>
                    </div>

                    <div className='prk_inner_content'>
                        <p className='prk_name'>Farukhnagar</p>
                        <div className='prk_dv_1'>
                          <p className='area_hd'>Area</p>
                          <p className='area_vlu'>107.68 acres</p>
                        </div>
                        <div className='prk_dv_1'>
                          <p className='potential_hd'>Potential</p>
                          <p className='potential_hd_vlu'>3.1M sf</p>
                        </div>
                        <p className='usage_hd'>Usage</p>
                        <p className='usage_hd_vlu'>Industrial, Warehousing {'&'} Logistics park</p>

                        <Link to='#' className='prk_btn'>Explore more</Link>
                    </div>

                </div>
              </div>

              <div className='park_sld'>
                <div className='prk_content_dv'>

                    <div className='prk_img_dv'>
                        <img src={require('../../../assets/img/park_3.jpg')}></img>
                        <div className='patch_dv'>
                          <p>Active</p>
                        </div>
                        <div className='arrow_circle'>
                          <img src={require('../../../assets/img/svg/white_btn_arrow.svg')}></img>
                        </div>
                    </div>

                    <div className='prk_inner_content'>
                        <p className='prk_name'>Farukhnagar</p>
                        <div className='prk_dv_1'>
                          <p className='area_hd'>Area</p>
                          <p className='area_vlu'>107.68 acres</p>
                        </div>
                        <div className='prk_dv_1'>
                          <p className='potential_hd'>Potential</p>
                          <p className='potential_hd_vlu'>3.1M sf</p>
                        </div>
                        <p className='usage_hd'>Usage</p>
                        <p className='usage_hd_vlu'>Industrial, Warehousing {'&'} Logistics park</p>

                        <Link to='#' className='prk_btn'>Explore more</Link>
                    </div>

                </div>
              </div> */}

          </Slider>

    </>
  )
}
