import React from 'react'
import Slider from 'react-slick';
import '../../../../assets/css/elsc_parks_slider.css';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Chakan_V_eoc from '../ease_of_connect_elsc/chakan_V_eoc';

export default function Chakan_v_slider_elsc() {

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

                {/*------------ Slide 1   */}
                <div className='ep_sld eps1'>

                    <div className='ep_sld_one'>
                        <div className='block_name_dv'>
                            <h2>Block A</h2>
                        </div>

                        <div className='mob_map_img_dv'>
                            <div className='ep_map_dv'>
                                <img src={require('../../../../assets/img/elsc_west_pg/chakan_v_map/thumb/chakan-thumb-a.jpg')}></img>
                                <div className=' max_btn' target="32">
                                    <img src={require('../../../../assets/img/svg/elsc_landing/maximize_btn.svg')}></img>
                                </div>
                            </div>
                        </div>


                        <div className='ep_details'>
                            <div className='ep_dtls_inner'>
                                <div className='dv_lst'>
                                    <p>Available space:</p>
                                    <p>0.43 MSFT</p>
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
                                    <p>Floor Strength:</p>
                                    <p>-</p>
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

                        <div className='ep_ease_connect_dv'>

                            {/* <Chakan_V_eoc /> */}
                            <a class="bksite_sldr book_visit_btn">Book a site visit</a>

                        </div>


                    </div>

                    <div className='ep_sld_two'>
                        <div className='ep_map_dv'>
                            <img src={require('../../../../assets/img/elsc_west_pg/chakan_v_map/thumb/chakan-thumb-a.jpg')}></img>
                            <div className='maximize_btn' target="32">
                                <img src={require('../../../../assets/img/svg/elsc_landing/maximize_btn.svg')}></img>
                            </div>
                        </div>
                    </div>

                </div>

                {/*------------ Slide 2   */}
                <div className='ep_sld eps1'>

                    <div className='ep_sld_one'>
                        <div className='block_name_dv'>
                            <h2>Block B</h2>
                        </div>

                        <div className='mob_map_img_dv'>
                            <div className='ep_map_dv'>
                                <img src={require('../../../../assets/img/elsc_west_pg/chakan_v_map/thumb/chakan-thumb-b.jpg')}></img>
                                <div className=' max_btn' target="33">
                                    <img src={require('../../../../assets/img/svg/elsc_landing/maximize_btn.svg')}></img>
                                </div>
                            </div>
                        </div>


                        <div className='ep_details'>
                            <div className='ep_dtls_inner'>
                                <div className='dv_lst'>
                                    <p>Available space:</p>
                                    <p>0.30 MSFT</p>
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
                                    <p>Floor Strength:</p>
                                    <p>-</p>
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

                        <div className='ep_ease_connect_dv'>

                            {/* <Chakan_V_eoc /> */}
                            <a class="bksite_sldr book_visit_btn">Book a site visit</a>

                        </div>


                    </div>

                    <div className='ep_sld_two'>
                        <div className='ep_map_dv'>
                            <img src={require('../../../../assets/img/elsc_west_pg/chakan_v_map/thumb/chakan-thumb-b.jpg')}></img>
                            <div className='maximize_btn' target="33">
                                <img src={require('../../../../assets/img/svg/elsc_landing/maximize_btn.svg')}></img>
                            </div>
                        </div>
                    </div>

                </div>

                {/*------------ Slide 3   */}
                <div className='ep_sld eps1'>

                    <div className='ep_sld_one'>
                        <div className='block_name_dv'>
                            <h2>Block C</h2>
                        </div>

                        <div className='mob_map_img_dv'>
                            <div className='ep_map_dv'>
                                <img src={require('../../../../assets/img/elsc_west_pg/chakan_v_map/thumb/chakan-thumb-c.jpg')}></img>
                                <div className=' max_btn' target="34">
                                    <img src={require('../../../../assets/img/svg/elsc_landing/maximize_btn.svg')}></img>
                                </div>
                            </div>
                        </div>


                        <div className='ep_details'>
                            <div className='ep_dtls_inner'>
                                <div className='dv_lst'>
                                    <p>Available space:</p>
                                    <p>0.14 MSFT</p>
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
                                    <p>Floor Strength:</p>
                                    <p>-</p>
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

                        <div className='ep_ease_connect_dv'>

                            {/* <Chakan_V_eoc /> */}
                            <a class="bksite_sldr book_visit_btn">Book a site visit</a>

                        </div>


                    </div>

                    <div className='ep_sld_two'>
                        <div className='ep_map_dv'>
                            <img src={require('../../../../assets/img/elsc_west_pg/chakan_v_map/thumb/chakan-thumb-c.jpg')}></img>
                            <div className='maximize_btn' target="34">
                                <img src={require('../../../../assets/img/svg/elsc_landing/maximize_btn.svg')}></img>
                            </div>
                        </div>
                    </div>

                </div>

                {/*------------ Slide 4   */}
                <div className='ep_sld eps1'>

                    <div className='ep_sld_one'>
                        <div className='block_name_dv'>
                            <h2>Block D</h2>
                        </div>

                        <div className='mob_map_img_dv'>
                            <div className='ep_map_dv'>
                                <img src={require('../../../../assets/img/elsc_west_pg/chakan_v_map/thumb/chakan-thumb-d.jpg')}></img>
                                <div className=' max_btn' target="35">
                                    <img src={require('../../../../assets/img/svg/elsc_landing/maximize_btn.svg')}></img>
                                </div>
                            </div>
                        </div>


                        <div className='ep_details'>
                            <div className='ep_dtls_inner'>
                                <div className='dv_lst'>
                                    <p>Available space:</p>
                                    <p>0.26 MSFT</p>
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
                                    <p>18</p>
                                </div>
                                <div className='dv_lst'>
                                    <p>Floor Strength:</p>
                                    <p>5 T /m2 UDL and 7T Point Load                                    </p>
                                </div>
                                <div className='dv_lst'>
                                    <p>Availability From:</p>
                                    <p>Dry access Q2 2025</p>
                                </div>
                                <div className='dv_lst'>
                                    <p>Built-to-suit possibility:</p>
                                    <p>NA</p>
                                </div>
                            </div>

                        </div>

                        <div className='ep_divider'></div>

                        <div className='ep_ease_connect_dv'>

                            {/* <Chakan_V_eoc /> */}
                            <a class="bksite_sldr book_visit_btn">Book a site visit</a>

                        </div>


                    </div>

                    <div className='ep_sld_two'>
                        <div className='ep_map_dv'>
                            <img src={require('../../../../assets/img/elsc_west_pg/chakan_v_map/thumb/chakan-thumb-d.jpg')}></img>
                            <div className='maximize_btn' target="35">
                                <img src={require('../../../../assets/img/svg/elsc_landing/maximize_btn.svg')}></img>
                            </div>
                        </div>
                    </div>

                </div>

                {/*------------ Slide 5   */}
                <div className='ep_sld eps1'>

                    <div className='ep_sld_one'>
                        <div className='block_name_dv'>
                            <h2>Block E</h2>
                        </div>

                        <div className='mob_map_img_dv'>
                            <div className='ep_map_dv'>
                                <img src={require('../../../../assets/img/elsc_west_pg/chakan_v_map/thumb/chakan-thumb-e.jpg')}></img>
                                <div className=' max_btn' target="36">
                                    <img src={require('../../../../assets/img/svg/elsc_landing/maximize_btn.svg')}></img>
                                </div>
                            </div>
                        </div>


                        <div className='ep_details'>
                            <div className='ep_dtls_inner'>
                                <div className='dv_lst'>
                                    <p>Available space:</p>
                                    <p>0.30 MSFT</p>
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
                                    <p>16</p>
                                </div>
                                <div className='dv_lst'>
                                    <p>Floor Strength:</p>
                                    <p>5 T /m2 UDL and 7T Point Load</p>
                                </div>
                                <div className='dv_lst'>
                                    <p>Availability From:</p>
                                    <p>Dry access Q2 2025</p>
                                </div>
                                <div className='dv_lst'>
                                    <p>Built-to-suit possibility:</p>
                                    <p>NA</p>
                                </div>
                            </div>

                        </div>

                        <div className='ep_divider'></div>

                        <div className='ep_ease_connect_dv'>

                            {/* <Chakan_V_eoc /> */}
                            <a class="bksite_sldr book_visit_btn">Book a site visit</a>

                        </div>


                    </div>

                    <div className='ep_sld_two'>
                        <div className='ep_map_dv'>
                            <img src={require('../../../../assets/img/elsc_west_pg/chakan_v_map/thumb/chakan-thumb-e.jpg')}></img>
                            <div className='maximize_btn' target="36">
                                <img src={require('../../../../assets/img/svg/elsc_landing/maximize_btn.svg')}></img>
                            </div>
                        </div>
                    </div>

                </div>
                
            </Slider>

            <Chakan_V_eoc />

            {/* ------------------------------ Parks Image popup code ------------------------------ */}

            <div className='prk_img_popup' id='div32'>
                <a className='prk_img_popup_close'>
                    <img src={require('../../../../assets/img/elsc_landing_pg/cancel.png')}></img>
                </a>
                <img className='elsc_park_map_img ' src={require('../../../../assets/img/elsc_west_pg/chakan_v_map/popup_img/CHAKAN A.jpg')}></img>
            </div>

            <div className='prk_img_popup' id='div33'>
                <a className='prk_img_popup_close'>
                    <img src={require('../../../../assets/img/elsc_landing_pg/cancel.png')}></img>
                </a>
                <img className='elsc_park_map_img ' src={require('../../../../assets/img/elsc_west_pg/chakan_v_map/popup_img/CHAKAN B.jpg')}></img>
            </div>

            <div className='prk_img_popup' id='div34'>
                <a className='prk_img_popup_close'>
                    <img src={require('../../../../assets/img/elsc_landing_pg/cancel.png')}></img>
                </a>
                <img className='elsc_park_map_img ' src={require('../../../../assets/img/elsc_west_pg/chakan_v_map/popup_img/CHAKAN C.jpg')}></img>
            </div>

            <div className='prk_img_popup' id='div35'>
                <a className='prk_img_popup_close'>
                    <img src={require('../../../../assets/img/elsc_landing_pg/cancel.png')}></img>
                </a>
                <img className='elsc_park_map_img ' src={require('../../../../assets/img/elsc_west_pg/chakan_v_map/popup_img/CHAKAN D.jpg')}></img>
            </div>

            <div className='prk_img_popup' id='div36'>
                <a className='prk_img_popup_close'>
                    <img src={require('../../../../assets/img/elsc_landing_pg/cancel.png')}></img>
                </a>
                <img className='elsc_park_map_img ' src={require('../../../../assets/img/elsc_west_pg/chakan_v_map/popup_img/CHAKAN E.jpg')}></img>
            </div>

            <div className='prk_img_popup' id='div37'>
                <a className='prk_img_popup_close'>
                    <img src={require('../../../../assets/img/elsc_landing_pg/cancel.png')}></img>
                </a>
                <img className='elsc_park_map_img ' src={require('../../../../assets/img/elsc_west_pg/chakan_v_map/popup_img/CHAKAN F.jpg')}></img>
            </div>

            <div className='prk_img_popup' id='div38'>
                <a className='prk_img_popup_close'>
                    <img src={require('../../../../assets/img/elsc_landing_pg/cancel.png')}></img>
                </a>
                <img className='elsc_park_map_img ' src={require('../../../../assets/img/elsc_west_pg/chakan_v_map/popup_img/CHAKAN G.jpg')}></img>
            </div>

            <div className='prk_img_popup' id='div39'>
                <a className='prk_img_popup_close'>
                    <img src={require('../../../../assets/img/elsc_landing_pg/cancel.png')}></img>
                </a>
                <img className='elsc_park_map_img ' src={require('../../../../assets/img/elsc_west_pg/chakan_v_map/popup_img/CHAKAN H.jpg')}></img>
            </div>

            <div className='prk_img_popup_overlay'></div>



        </>
    )
}
