import React from 'react'
import Slider from 'react-slick';
import '../../../../assets/css/elsc_parks_slider.css';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Redhills_eoc from '../ease_of_connect_elsc/redhills_eoc';




export default function Redhills_slider_elsc() {

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
                        <img src={require('../../../../assets/img/elsc_south_pg/Redhills_map/thumb/redhills-a.jpg')}></img>
                        <div className='max_btn' target="30">
                            <img src={require('../../../../assets/img/svg/elsc_landing/maximize_btn.svg')}></img>
                        </div>
                    </div>
                </div>

                <div className='ep_details'>
                    <div className='ep_dtls_inner'>
                        <div className='dv_lst'>
                            <p>Available space:</p>
                            <p>0.38 MSFT</p>
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
                            <p>17</p>
                        </div>
                        <div className='dv_lst'>
                            <p>Floor strength:</p>
                            <p>5 T /m2 UDL and 7T Point Load
                            </p>
                        </div>
                        <div className='dv_lst'>
                            <p>Availability from:</p>
                            <p>Dry Acess Q3 2025</p>
                        </div>
                        <div className='dv_lst'>
                            <p>Built-to-Suit possibility:</p>
                            <p>NA</p>
                        </div>
                    </div>
                </div>

                <div className='ep_divider'></div>

                <div className='ep_ease_connect_dv'>
                    {/* <Redhills_eoc /> */}
                    <a class="bksite_sldr book_visit_btn">Book a site visit</a>
                </div>


            </div>

            <div className='ep_sld_two'>
                <div className='ep_map_dv'>
                    <img src={require('../../../../assets/img/elsc_south_pg/Redhills_map/thumb/redhills-a.jpg')}></img>
                    <div className='maximize_btn' target="30">
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
                        <img src={require('../../../../assets/img/elsc_south_pg/Redhills_map/thumb/redhills-b.jpg')}></img>
                        <div className='max_btn' target="31">
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
                            <p>12 mtrs</p>
                        </div>
                        <div className='dv_lst'>
                            <p>Docks:</p>
                            <p>15</p>
                        </div>
                        <div className='dv_lst'>
                            <p>Floor strength:</p>
                            <p>5 T /m2 UDL and 7T Point Load
                            </p>
                        </div>
                        <div className='dv_lst'>
                            <p>Availability from:</p>
                            <p>Dry Acess Q3 2025</p>
                        </div>
                        <div className='dv_lst'>
                            <p>Built-to-Suit possibility:</p>
                            <p>NA</p>
                        </div>
                    </div>
                </div>

                <div className='ep_divider'></div>

                <div className='ep_ease_connect_dv'>
                    {/* <Redhills_eoc /> */}
                    <a class="bksite_sldr book_visit_btn">Book a site visit</a>
                </div>


            </div>

            <div className='ep_sld_two'>
                <div className='ep_map_dv'>
                    <img src={require('../../../../assets/img/elsc_south_pg/Redhills_map/thumb/redhills-b.jpg')}></img>
                    <div className='maximize_btn' target="31">
                        <img src={require('../../../../assets/img/svg/elsc_landing/maximize_btn.svg')}></img>
                    </div>
                </div>
            </div>

        </div>

    </Slider>

    <Redhills_eoc />

    {/* ------------------------------ Parks Image popup code ------------------------------ */}

    <div className='prk_img_popup' id='div30'>
        <a className='prk_img_popup_close'>
            <img src={require('../../../../assets/img/elsc_landing_pg/cancel.png')}></img>
        </a>
        <img className='elsc_park_map_img ' src={require('../../../../assets/img/elsc_south_pg/Redhills_map/popup_img/REDHILLS A.jpg')}></img>
    </div>

    <div className='prk_img_popup' id='div31'>
        <a className='prk_img_popup_close'>
            <img src={require('../../../../assets/img/elsc_landing_pg/cancel.png')}></img>
        </a>
        <img className='elsc_park_map_img ' src={require('../../../../assets/img/elsc_south_pg/Redhills_map/popup_img/REDHILLS B.jpg')}></img>
    </div>

    <div className='prk_img_popup_overlay'></div>



</>
  )
}
