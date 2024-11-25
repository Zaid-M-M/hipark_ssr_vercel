import React from 'react'
import Slider from 'react-slick';
import '../../../../assets/css/elsc_parks_slider.css';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import Delhi_one_eoc from '../ease_of_connect_elsc/delhi_one_eoc';

export default function Delhi_one_mob_slider_elsc() {

    const elsc_prk_sld = {
        arrows: true,
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 800
    };



  return (
    <>
      <Slider {...elsc_prk_sld} className='elsc_prk_sld'>

        {/*------------ Slide 1     */}
        <div className='ep_sld eps1'>

            <div className='ep_sld_one'>

                <div className='block_name_dv'>
                    <h2>Block A</h2>
                </div>

                <div className='mob_map_img_dv'>
                    <div className='ep_map_dv'>
                        <img src={require('../../../../assets/img/elsc_north_pg/Delhi_I_map/thumb/Delhi-I.jpg')}></img>
                        <div className='max_btn' target="4">
                            <img src={require('../../../../assets/img/svg/elsc_landing/maximize_btn.svg')}></img>
                        </div>
                    </div>
                </div>

                <div className='ep_details'>
                    <div className='ep_dtls_inner'>
                        <div className='dv_lst'>
                            <p>Available space:</p>
                            <p>0.6 MSFT</p>
                        </div>
                        <div className='dv_lst'>
                            <p>Usage:</p>
                            <p>Warehousing</p>
                        </div>
                        <div className='dv_lst'>
                            <p>Height:</p>
                            <p>12 mtrs</p>
                        </div>
                        <div className='dv_lst'>
                            <p>Docks:</p>
                            <p>9</p>
                        </div>
                        <div className='dv_lst'>
                            <p>Floor Strength:</p>
                            <p>5 T /m2 UDL and 7T Point Load
                            </p>
                        </div>
                        <div className='dv_lst'>
                            <p>Availability from:</p>
                            <p>Speculative</p>
                        </div>
                        <div className='dv_lst'>
                            <p>Built-to-suit possibility:</p>
                            <p>NA</p>
                        </div>
                    </div>
                </div>

                <div className='ep_divider'></div> 

                <div className='ep_ease_connect_dv'>
                    
                    <Delhi_one_eoc/>
                    <a class="bksite_sldr book_visit_btn">Book a site visit</a>
                </div>


            </div>
            
            <div className='ep_sld_two'>
                <div className='ep_map_dv'>
                    <img src={require('../../../../assets/img/elsc_north_pg/Delhi_I_map/thumb/Delhi-I.jpg')}></img>
                    <div className='maximize_btn' target="4">
                        <img src={require('../../../../assets/img/svg/elsc_landing/maximize_btn.svg')}></img>
                    </div>
                </div>
            </div>

        </div>

        {/*------------ Slide 2     */}
        <div className='ep_sld eps1'>

            <div className='ep_sld_one'>
                <div className='block_name_dv'>
                    <h2>Block C</h2>
                </div>

                <div className='mob_map_img_dv'>
                    <div className='ep_map_dv'>
                        <img src={require('../../../../assets/img/elsc_north_pg/Delhi_I_map/thumb/Delhi-I-c.jpg')}></img>
                        <div className=' max_btn' target="5">
                            <img src={require('../../../../assets/img/svg/elsc_landing/maximize_btn.svg')}></img>
                        </div>
                    </div>
                </div>
                
                <div className='ep_details'>
                    <div className='ep_dtls_inner'>
                        <div className='dv_lst'>
                            <p>Available space:</p>
                            <p>0.03 MSFT</p>
                        </div>
                        <div className='dv_lst'>
                            <p>Usage:</p>
                            <p>Warehousing</p>
                        </div>
                        <div className='dv_lst'>
                            <p>Height:</p>
                            <p>12</p>
                        </div>
                        <div className='dv_lst'>
                            <p>Docks:</p>
                            <p>5</p>
                        </div>
                        <div className='dv_lst'>
                            <p>Floor Strength:</p>
                            <p>5 T /m2 UDL and 7T Point Load
                            </p>
                        </div>
                        <div className='dv_lst'>
                            <p>Availability from:</p>
                            <p>Speculative</p>
                        </div>
                        <div className='dv_lst'>
                            <p>Built-to-suit possibility:</p>
                            <p>NA</p>
                        </div>
                    </div>
                </div>

                <div className='ep_divider'></div> 

                <div className='ep_ease_connect_dv'>
                    
                    <Delhi_one_eoc/>
                    <a class="bksite_sldr book_visit_btn">Book a site visit</a>
                </div>


            </div>
            
            <div className='ep_sld_two'>
                <div className='ep_map_dv'>
                    <img src={require('../../../../assets/img/elsc_north_pg/Delhi_I_map/thumb/Delhi-I-c.jpg')}></img>
                    <div className='maximize_btn' target="5">
                        <img src={require('../../../../assets/img/svg/elsc_landing/maximize_btn.svg')}></img>
                    </div>
                </div>
            </div>

        </div>

      </Slider>



      {/* ------------------------------ Parks Image popup code ------------------------------ */}

      <div className='prk_img_popup' id='div_mob4'>
        <a className="prk_img_popup_close">
            <img
                src={require("../../../../assets/img/elsc_landing_pg/cancel.png")}
            ></img>
            </a>

            <TransformWrapper
            initialScale={1}
            initialPositionX={200}
            initialPositionY={100}
            >
            {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
                <React.Fragment>
                <div className="zoom_dv">
                    <div className="tools">
                        <button onClick={() => resetTransform()}>x</button>
                        <button onClick={() => zoomIn()}>+</button>
                        <button onClick={() => zoomOut()}>-</button>
                    </div>
                </div>
                <TransformComponent>
                    <img
                    className="elsc_park_map_img epm_img"
                    src={require("../../../../assets/img/elsc_north_pg/Delhi_I_map/popup_img/Delhi_I.jpg")}
                    ></img>
                </TransformComponent>
                </React.Fragment>
            )}
            </TransformWrapper>
      </div>

      <div className='prk_img_popup' id='div_mob5'>
        <a className="prk_img_popup_close">
            <img
                src={require("../../../../assets/img/elsc_landing_pg/cancel.png")}
            ></img>
            </a>

            <TransformWrapper
            initialScale={1}
            initialPositionX={200}
            initialPositionY={100}
            >
            {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
                <React.Fragment>
                <div className="zoom_dv">
                    <div className="tools">
                        <button onClick={() => resetTransform()}>x</button>
                        <button onClick={() => zoomIn()}>+</button>
                        <button onClick={() => zoomOut()}>-</button>
                    </div>
                </div>
                <TransformComponent>
                    <img
                    className="elsc_park_map_img epm_img"
                    src={require("../../../../assets/img/elsc_north_pg/Delhi_I_map/popup_img/Delhi_I-c.jpg")}
                    ></img>
                </TransformComponent>
                </React.Fragment>
            )}
            </TransformWrapper>
      </div>

      <div className='prk_img_popup_overlay'></div> 
      
       
      
    </>
  )
}
