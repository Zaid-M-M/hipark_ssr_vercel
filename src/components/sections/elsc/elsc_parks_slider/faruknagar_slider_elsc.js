import React from 'react'
import Slider from 'react-slick';
import '../../../../assets/css/elsc_parks_slider.css';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Faruknagar_eoc from '../ease_of_connect_elsc/faruknagar_eoc';



export default function Faruknagar_slider_elsc() {

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
                                <img src={require('../../../../assets/img/elsc_north_pg/Farukhnagar_map/thumb/Farukhnagar-I.jpg')}></img>

                                <div className=' max_btn' target="1">
                                    <img src={require('../../../../assets/img/svg/elsc_landing/maximize_btn.svg')}></img>
                                </div>
                            </div>
                        </div>

                        <div className='ep_details'>
                            <div className='ep_dtls_inner'>
                                <div className='dv_lst'>
                                    <p>Available space:</p>
                                    <p>0.16 MSFT</p>
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
                                    <p>11</p>
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

                            {/* <Faruknagar_eoc/> */}
                            <a class="bksite_sldr book_visit_btn">Book a site visit</a>
                        </div>


                    </div>

                    <div className='ep_sld_two'>
                        <div className='ep_map_dv'>
                            {/* <img src={require('../../../../assets/img/elsc_landing_pg/Farukhnagar_map/thumb/Block_A.png')}></img> */}
                            <img src={require('../../../../assets/img/elsc_north_pg/Farukhnagar_map/thumb/Farukhnagar-I.jpg')}></img>
                            <div className='maximize_btn' target="1">
                                <img src={require('../../../../assets/img/svg/elsc_landing/maximize_btn.svg')}></img>
                            </div>
                        </div>
                    </div>

                </div>

                {/*------------ Slide 2     */}
                <div className='ep_sld eps1'>

                    <div className='ep_sld_one'>
                        <div className='block_name_dv'>
                            <h2>Block K</h2>
                        </div>

                        <div className='mob_map_img_dv'>
                            <div className='ep_map_dv'>
                                <img src={require('../../../../assets/img/elsc_north_pg/Farukhnagar_map/thumb/Farukhnagar-II.jpg')}></img>
                                <div className=' max_btn' target="2">
                                    <img src={require('../../../../assets/img/svg/elsc_landing/maximize_btn.svg')}></img>
                                </div>
                            </div>
                        </div>

                        <div className='ep_details'>
                            <div className='ep_dtls_inner'>
                                <div className='dv_lst'>
                                    <p>Available space:</p>
                                    <p>0.25 MSFT</p>
                                </div>
                                <div className='dv_lst'>
                                    <p>Usage:</p>
                                    <p>Warehousing</p>
                                </div>
                                <div className='dv_lst'>
                                    <p>Height:</p>
                                    <p>11.5 mtrs</p>
                                </div>
                                <div className='dv_lst'>
                                    <p>Docks:</p>
                                    <p>22</p>
                                </div>
                                <div className='dv_lst'>
                                    <p>Floor strength:</p>
                                    <p>5 T /m2 UDL and 7T Point Load
                                    </p>
                                </div>
                                <div className='dv_lst'>
                                    <p>Availability from:</p>
                                    <p>June, 2024</p>
                                </div>
                                <div className='dv_lst'>
                                    <p>Built-to-Suit possibility:</p>
                                    <p>NA</p>
                                </div>
                            </div>
                        </div>

                        <div className='ep_divider'></div>

                        <div className='ep_ease_connect_dv'>
                            <a class="bksite_sldr book_visit_btn">Book a site visit</a>
                        </div>


                    </div>

                    <div className='ep_sld_two'>
                        <div className='ep_map_dv'>
                            <img src={require('../../../../assets/img/elsc_north_pg/Farukhnagar_map/thumb/Farukhnagar-II.jpg')}></img>
                            <div className='maximize_btn max_btn' target="2">
                                <img src={require('../../../../assets/img/svg/elsc_landing/maximize_btn.svg')}></img>
                            </div>
                        </div>
                    </div>

                </div>

            </Slider>

            <Faruknagar_eoc />

            {/* ------------------------------ Parks Image popup code ------------------------------ */}


            {/*--------- Block A ------- */}
            <div className='prk_img_popup' id='div1'>
                <a className='prk_img_popup_close'>
                    <img src={require('../../../../assets/img/elsc_landing_pg/cancel.png')}></img>
                </a>
                <img className='elsc_park_map_img ' src={require('../../../../assets/img/elsc_north_pg/Farukhnagar_map/popup_img/Farukhnagar_I.jpg')}></img>
            </div>

            {/*--------- Block K ------- */}
            <div className='prk_img_popup' id='div2'>
                <a className='prk_img_popup_close'>
                    <img src={require('../../../../assets/img/elsc_landing_pg/cancel.png')}></img>
                </a>
                <img className='elsc_park_map_img ' src={require('../../../../assets/img/elsc_north_pg/Farukhnagar_map/popup_img/Farukhnagar_II.jpg')}></img>
            </div>
            <div className='prk_img_popup_overlay'></div>



        </>
    )
}
