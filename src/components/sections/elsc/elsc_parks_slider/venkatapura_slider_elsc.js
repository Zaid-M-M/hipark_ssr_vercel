import React from 'react'
import Slider from 'react-slick';
import '../../../../assets/css/elsc_parks_slider.css';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Venkatapura_eoc from '../ease_of_connect_elsc/venkatapura_eoc';

export default function Venkatapura_slider_elsc() {

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
                            <h2>Block A3</h2>
                        </div>

                        <div className='mob_map_img_dv'>
                            <div className='ep_map_dv'>
                                <img src={require('../../../../assets/img/elsc_west_pg/venkatapura_map/thumb/goa-thumb-a.jpg')}></img>
                                <div className=' max_btn' target="40">
                                    <img src={require('../../../../assets/img/svg/elsc_landing/maximize_btn.svg')}></img>
                                </div>
                            </div>
                        </div>


                        <div className='ep_details'>
                            <div className='ep_dtls_inner'>
                                <div className='dv_lst'>
                                    <p>Available space:</p>
                                    <p>0.06 MSFT</p>
                                </div>
                                <div className='dv_lst'>
                                    <p>Usage:</p>
                                    <p>Industrial / Warehousing</p>
                                </div>
                                <div className='dv_lst'>
                                    <p>Height:</p>
                                    <p>6.8 mtrs on dock side & 10mtrs in the back</p>
                                </div>
                                <div className='dv_lst'>
                                    <p>Docks:</p>
                                    <p>9</p>
                                </div>
                                <div className='dv_lst'>
                                    <p>Floor Strength:</p>
                                    <p>VDF Tremix Floor with 5MT/m2 capacity</p>
                                </div>
                                <div className='dv_lst'>
                                    <p>Availability From:</p>
                                    <p>Ready to Move</p>
                                </div>
                                <div className='dv_lst'>
                                    <p>Built-to-suit possibility:</p>
                                    <p>NA</p>
                                </div>
                            </div>

                        </div>

                        <div className='ep_divider'></div>

                        <div className='ep_ease_connect_dv'>

                            {/* <Venkatapura_eoc /> */}
                            <a class="bksite_sldr book_visit_btn">Book a site visit</a>

                        </div>


                    </div>

                    <div className='ep_sld_two'>
                        <div className='ep_map_dv'>
                            <img src={require('../../../../assets/img/elsc_west_pg/venkatapura_map/thumb/goa-thumb-a.jpg')}></img>
                            <div className='maximize_btn' target="40">
                                <img src={require('../../../../assets/img/svg/elsc_landing/maximize_btn.svg')}></img>
                            </div>
                        </div>
                    </div>

                </div>

                {/*------------ Slide 2     */}
                <div className='ep_sld eps1'>

                    <div className='ep_sld_one'>
                        <div className='block_name_dv'>
                            <h2>Block B</h2>
                        </div>

                        <div className='mob_map_img_dv'>
                            <div className='ep_map_dv'>
                                <img src={require('../../../../assets/img/elsc_west_pg/venkatapura_map/thumb/goa-thumb-b.jpg')}></img>
                                <div className=' max_btn' target="41">
                                    <img src={require('../../../../assets/img/svg/elsc_landing/maximize_btn.svg')}></img>
                                </div>
                            </div>
                        </div>


                        <div className='ep_details'>
                            <div className='ep_dtls_inner'>
                                <div className='dv_lst'>
                                    <p>Available space:</p>
                                    <p>0.06 MSFT</p>
                                </div>
                                <div className='dv_lst'>
                                    <p>Usage:</p>
                                    <p>Industrial / Warehousing</p>
                                </div>
                                <div className='dv_lst'>
                                    <p>Height:</p>
                                    <p>10.5</p>
                                </div>
                                <div className='dv_lst'>
                                    <p>Docks:</p>
                                    <p>14</p>
                                </div>
                                <div className='dv_lst'>
                                    <p>Floor Strength:</p>
                                    <p>VDF Tremix Floor with 5MT/m2 capacity</p>
                                </div>
                                <div className='dv_lst'>
                                    <p>Availability From:</p>
                                    <p>Ready to Move</p>
                                </div>
                                <div className='dv_lst'>
                                    <p>Built-to-suit possibility:</p>
                                    <p>NA</p>
                                </div>
                            </div>

                        </div>

                        <div className='ep_divider'></div>

                        <div className='ep_ease_connect_dv'>

                            {/* <Venkatapura_eoc /> */}
                            <a class="bksite_sldr book_visit_btn">Book a site visit</a>

                        </div>


                    </div>

                    <div className='ep_sld_two'>
                        <div className='ep_map_dv'>
                            <img src={require('../../../../assets/img/elsc_west_pg/venkatapura_map/thumb/goa-thumb-b.jpg')}></img>
                            <div className='maximize_btn' target="41">
                                <img src={require('../../../../assets/img/svg/elsc_landing/maximize_btn.svg')}></img>
                            </div>
                        </div>
                    </div>

                </div>

            </Slider>

            <Venkatapura_eoc />

            {/* ------------------------------ Parks Image popup code ------------------------------ */}

            <div className='prk_img_popup' id='div40'>
                <a className='prk_img_popup_close'>
                    <img src={require('../../../../assets/img/elsc_landing_pg/cancel.png')}></img>
                </a>
                <img className='elsc_park_map_img ' src={require('../../../../assets/img/elsc_west_pg/venkatapura_map/popup_img/Goa-A.jpg')}></img>
            </div>

            <div className='prk_img_popup' id='div41'>
                <a className='prk_img_popup_close'>
                    <img src={require('../../../../assets/img/elsc_landing_pg/cancel.png')}></img>
                </a>
                <img className='elsc_park_map_img ' src={require('../../../../assets/img/elsc_west_pg/venkatapura_map/popup_img/Goa-B.jpg')}></img>
            </div>

            <div className='prk_img_popup_overlay'></div>



        </>
    )
}
