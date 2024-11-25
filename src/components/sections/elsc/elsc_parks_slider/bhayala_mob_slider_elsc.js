import React from 'react'
import Slider from 'react-slick';
import '../../../../assets/css/elsc_parks_slider.css';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import Bhayala_eoc from '../ease_of_connect_elsc/bhayala_eoc';

export default function Bhayala_mob_slider_elsc() {

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
                            <h2>Block E</h2>
                        </div>

                        <div className='mob_map_img_dv'>
                            <div className='ep_map_dv'>
                                <img src={require('../../../../assets/img/elsc_west_pg/bhayala_map/thumb/bhayala-thumb-e.jpg')}></img>
                                <div className=' max_btn' target="42">
                                    <img src={require('../../../../assets/img/svg/elsc_landing/maximize_btn.svg')}></img>
                                </div>
                            </div>
                        </div>


                        <div className='ep_details'>
                            <div className='ep_dtls_inner'>
                                <div className='dv_lst'>
                                    <p>Available space:</p>
                                    <p>0.10 MSFT</p>
                                </div>
                                <div className='dv_lst'>
                                    <p>Usage:</p>
                                    <p>Industrial / Warehousing</p>
                                </div>
                                <div className='dv_lst'>
                                    <p>Height:</p>
                                    <p>12</p>
                                </div>
                                <div className='dv_lst'>
                                    <p>Docks:</p>
                                    <p>9</p>
                                </div>
                                <div className='dv_lst'>
                                    <p>Floor Strength:</p>
                                    <p>5 T /m2 UDL and 7T Point Load</p>
                                </div>
                                <div className='dv_lst'>
                                    <p>Availability From:</p>
                                    <p>Built-to-Suit</p>
                                </div>
                                <div className='dv_lst'>
                                    <p>Built-to-suit possibility:</p>
                                    <p>Yes</p>
                                </div>
                            </div>

                        </div>

                        <div className='ep_divider'></div>

                        


                    </div>

                    <div className='ep_sld_two'>
                        <div className='ep_map_dv'>
                            <img src={require('../../../../assets/img/elsc_west_pg/bhayala_map/thumb/bhayala-thumb-e.jpg')}></img>
                            <div className='maximize_btn' target="42">
                                <img src={require('../../../../assets/img/svg/elsc_landing/maximize_btn.svg')}></img>
                            </div>
                        </div>
                    </div>

                </div>

            </Slider>

            <div className='ep_ease_connect_dv'>

                <Bhayala_eoc />
                <a class="bksite_sldr book_visit_btn">Book a site visit</a>

            </div>



            {/* ------------------------------ Parks Image popup code ------------------------------ */}

            <div className='prk_img_popup' id='div_mob42'>
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
                                    src={require("../../../../assets/img/elsc_west_pg/bhayala_map/popup_img/Gujarat-E.jpg")}
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


