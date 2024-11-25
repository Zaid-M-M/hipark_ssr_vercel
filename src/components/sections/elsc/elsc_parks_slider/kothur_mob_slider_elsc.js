import React from 'react'
import Slider from 'react-slick';
import '../../../../assets/css/elsc_parks_slider.css';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import Kothur_eoc from '../ease_of_connect_elsc/kothur_eoc';

export default function Kothur_mob_slider_elsc() {

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
                    <h2>Block B 2 Part</h2>
                </div>

                <div className='mob_map_img_dv'>
                    <div className='ep_map_dv'>
                        <img src={require('../../../../assets/img/elsc_south_pg/Kothur_map/thumb/kothur-b.jpg')}></img>
                        <div className='max_btn' target="10">
                            <img src={require('../../../../assets/img/svg/elsc_landing/maximize_btn.svg')}></img>
                        </div>
                    </div>
                </div>

                <div className='ep_details'>
                    <div className='ep_dtls_inner'>
                        <div className='dv_lst'>
                            <p>Available space:</p>
                            <p> 0.15 MSFT</p>
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
                            <p>14</p>
                        </div>
                        <div className='dv_lst'>
                            <p>Floor strength:</p>
                            <p>5 T /m2 UDL and 7T Point Load
                            </p>
                        </div>
                        <div className='dv_lst'>
                            <p>Availability from:</p>
                            <p>Ready To Move</p>
                        </div>
                        <div className='dv_lst'>
                            <p>Built-to-Suit possibility:</p>
                            <p>NA</p>
                        </div>
                    </div>
                </div>

                <div className='ep_divider'></div>

                <div className='ep_ease_connect_dv'>
                    <Kothur_eoc />
                    <a class="bksite_sldr book_visit_btn">Book a site visit</a>
                </div>


            </div>

            <div className='ep_sld_two'>
                <div className='ep_map_dv'>
                    <img src={require('../../../../assets/img/elsc_south_pg/Kothur_map/thumb/kothur-b.jpg')}></img>
                    <div className='maximize_btn' target="10">
                        <img src={require('../../../../assets/img/svg/elsc_landing/maximize_btn.svg')}></img>
                    </div>
                </div>
            </div>

        </div>

        {/*------------ Slide 2     */}
        <div className='ep_sld eps1'>

            <div className='ep_sld_one'>

                <div className='block_name_dv'>
                    <h2>Block E</h2>
                </div>

                <div className='mob_map_img_dv'>
                    <div className='ep_map_dv'>
                        <img src={require('../../../../assets/img/elsc_south_pg/Kothur_map/thumb/kothur-e.jpg')}></img>
                        <div className='max_btn' target="11">
                            <img src={require('../../../../assets/img/svg/elsc_landing/maximize_btn.svg')}></img>
                        </div>
                    </div>
                </div>

                <div className='ep_details'>
                    <div className='ep_dtls_inner'>
                        <div className='dv_lst'>
                            <p>Available space:</p>
                            <p>0.19 MSFT</p>
                        </div>
                        <div className='dv_lst'>
                            <p>Usage:</p>
                            <p>Warehousing</p>
                        </div>
                        <div className='dv_lst'>
                            <p>Height:</p>
                            <p>-</p>
                        </div>
                        <div className='dv_lst'>
                            <p>Docks:</p>
                            <p>-</p>
                        </div>
                        <div className='dv_lst'>
                            <p>Floor strength:</p>
                            <p>-
                            </p>
                        </div>
                        <div className='dv_lst'>
                            <p>Availability from:</p>
                            <p>Built-to-Suit</p>
                        </div>
                        <div className='dv_lst'>
                            <p>Built-to-Suit possibility:</p>
                            <p>Yes</p>
                        </div>
                    </div>
                </div>

                <div className='ep_divider'></div>

                <div className='ep_ease_connect_dv'>
                    <Kothur_eoc />
                    <a class="bksite_sldr book_visit_btn">Book a site visit</a>
                </div>


            </div>

            <div className='ep_sld_two'>
                <div className='ep_map_dv'>
                    <img src={require('../../../../assets/img/elsc_south_pg/Kothur_map/thumb/kothur-e.jpg')}></img>
                    <div className='maximize_btn' target="11">
                        <img src={require('../../../../assets/img/svg/elsc_landing/maximize_btn.svg')}></img>
                    </div>
                </div>
            </div>

        </div>

        {/*------------ Slide 3     */}
        <div className='ep_sld eps1'>

            <div className='ep_sld_one'>

                <div className='block_name_dv'>
                    <h2>Block F</h2>
                </div>

                <div className='mob_map_img_dv'>
                    <div className='ep_map_dv'>
                        <img src={require('../../../../assets/img/elsc_south_pg/Kothur_map/thumb/kothur-f.jpg')}></img>
                        <div className='max_btn' target="12">
                            <img src={require('../../../../assets/img/svg/elsc_landing/maximize_btn.svg')}></img>
                        </div>
                    </div>
                </div>

                <div className='ep_details'>
                    <div className='ep_dtls_inner'>
                        <div className='dv_lst'>
                            <p>Available space:</p>
                            <p>0.20 MSFT</p>
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
                            <p>16</p>
                        </div>
                        <div className='dv_lst'>
                            <p>Floor strength:</p>
                            <p>5T / M2 UDL & 7T Point Load
                            </p>
                        </div>
                        <div className='dv_lst'>
                            <p>Availability from:</p>
                            <p>Dry Access - Q2 CY 2025</p>
                        </div>
                        <div className='dv_lst'>
                            <p>Built-to-Suit possibility:</p>
                            <p>NA</p>
                        </div>
                    </div>
                </div>

                <div className='ep_divider'></div>

                <div className='ep_ease_connect_dv'>
                    <Kothur_eoc />
                    <a class="bksite_sldr book_visit_btn">Book a site visit</a>
                </div>


            </div>

            <div className='ep_sld_two'>
                <div className='ep_map_dv'>
                    <img src={require('../../../../assets/img/elsc_south_pg/Kothur_map/thumb/kothur-f.jpg')}></img>
                    <div className='maximize_btn' target="12">
                        <img src={require('../../../../assets/img/svg/elsc_landing/maximize_btn.svg')}></img>
                    </div>
                </div>
            </div>

        </div>

    </Slider>


    {/* ------------------------------ Parks Image popup code ------------------------------ */}

    {/*--------- Block A ------- */}
    <div className="prk_img_popup" id="div_mob10">
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
                            src={require('../../../../assets/img/elsc_south_pg/Kothur_map/popup_img/KOTHUR B.jpg')}
                        ></img>
                    </TransformComponent>
                </React.Fragment>
            )}
        </TransformWrapper>
    </div>

    <div className="prk_img_popup" id="div_mob11">
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
                            src={require('../../../../assets/img/elsc_south_pg/Kothur_map/popup_img/KOTHUR E.jpg')}
                        ></img>
                    </TransformComponent>
                </React.Fragment>
            )}
        </TransformWrapper>
    </div>

    <div className="prk_img_popup" id="div_mob12">
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
                            src={require('../../../../assets/img/elsc_south_pg/Kothur_map/popup_img/KOTHUR F.jpg')}
                        ></img>
                    </TransformComponent>
                </React.Fragment>
            )}
        </TransformWrapper>
    </div>

    <div className="prk_img_popup_overlay"></div>
</>
  )
}
