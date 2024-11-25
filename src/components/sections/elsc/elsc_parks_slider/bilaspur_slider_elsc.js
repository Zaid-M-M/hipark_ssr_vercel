import React from 'react'
import Slider from 'react-slick';
import '../../../../assets/css/elsc_parks_slider.css';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Bilaspur_eoc from '../ease_of_connect_elsc/bilaspur_eoc';



export default function Bilaspur_slider_elsc() {

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
                    <h2>Block F</h2>
                </div>

                <div className='mob_map_img_dv'>
                    <div className='ep_map_dv'>
                        <img src={require('../../../../assets/img/elsc_north_pg/Bilaspur_map/thumb/Bilaspur-f.jpg')}></img>
                        <div className='max_btn' target="7">
                            <img src={require('../../../../assets/img/svg/elsc_landing/maximize_btn.svg')}></img>
                        </div>
                    </div>
                </div>

                <div className='ep_details'>
                    <div className='ep_dtls_inner'>
                        <div className='dv_lst'>
                            <p>Available space:</p>
                            <p>0.11 MSFT</p>
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
                            <p>10</p>
                        </div>
                        <div className='dv_lst'>
                            <p>Floor Strength:</p>
                            <p>5 T /m2 UDL and 7T Point Load
                            </p>
                        </div>
                        <div className='dv_lst'>
                            <p>Availability From:</p>
                            <p>31st July'24</p>
                        </div>
                        <div className='dv_lst'>
                            <p>Built-to-suit possibility:</p>
                            <p>NA</p>
                        </div>
                    </div>
                </div>

                <div className='ep_divider'></div> 

                <div className='ep_ease_connect_dv'>
                    
                    {/* <Bilaspur_eoc/> */}
                    <a class="bksite_sldr book_visit_btn">Book a site visit</a>
                </div>


            </div>
            
            <div className='ep_sld_two'>
                <div className='ep_map_dv'>
                    <img src={require('../../../../assets/img/elsc_north_pg/Bilaspur_map/thumb/Bilaspur-f.jpg')}></img>
                    <div className='maximize_btn' target="7">
                        <img src={require('../../../../assets/img/svg/elsc_landing/maximize_btn.svg')}></img>
                    </div>
                </div>
            </div>

        </div>

        {/*------------ Slide 2     */}
        <div className='ep_sld eps1'>

            <div className='ep_sld_one'>

                <div className='block_name_dv'>
                    <h2>Block G</h2>
                </div>

                <div className='mob_map_img_dv'>
                    <div className='ep_map_dv'>
                        <img src={require('../../../../assets/img/elsc_north_pg/Bilaspur_map/thumb/Bilaspur-g.jpg')}></img>
                        <div className='max_btn' target="8">
                            <img src={require('../../../../assets/img/svg/elsc_landing/maximize_btn.svg')}></img>
                        </div>
                    </div>
                </div>

                <div className='ep_details'>
                    <div className='ep_dtls_inner'>
                        <div className='dv_lst'>
                            <p>Available space:</p>
                            <p>0.09 MSFT</p>
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
                            <p>8</p>
                        </div>
                        <div className='dv_lst'>
                            <p>Floor Strength:</p>
                            <p>5 T /m2 UDL and 7T Point Load
                            </p>
                        </div>
                        <div className='dv_lst'>
                            <p>Availability From:</p>
                            <p>30th June'24</p>
                        </div>
                        <div className='dv_lst'>
                            <p>Built-to-suit possibility:</p>
                            <p>NA</p>
                        </div>
                    </div>
                </div>

                <div className='ep_divider'></div> 

                <div className='ep_ease_connect_dv'>
                    {/* <Bilaspur_eoc/> */}
                    <a class="bksite_sldr book_visit_btn">Book a site visit</a>
                </div>


            </div>
            
            <div className='ep_sld_two'>
                <div className='ep_map_dv'>
                    <img src={require('../../../../assets/img/elsc_north_pg/Bilaspur_map/thumb/Bilaspur-g.jpg')}></img>
                    <div className='maximize_btn' target="8">
                        <img src={require('../../../../assets/img/svg/elsc_landing/maximize_btn.svg')}></img>
                    </div>
                </div>
            </div>

        </div>

        {/*------------ Slide 3     */}
        <div className='ep_sld eps1'>

            <div className='ep_sld_one'>

                <div className='block_name_dv'>
                    <h2>Block H</h2>
                </div>

                <div className='mob_map_img_dv'>
                    <div className='ep_map_dv'>
                        <img src={require('../../../../assets/img/elsc_north_pg/Bilaspur_map/thumb/Bilaspur-h.jpg')}></img>
                        <div className='max_btn' target="9">
                            <img src={require('../../../../assets/img/svg/elsc_landing/maximize_btn.svg')}></img>
                        </div>
                    </div>
                </div>

                <div className='ep_details'>
                    <div className='ep_dtls_inner'>
                        <div className='dv_lst'>
                            <p>Available space:</p>
                            <p>0.44 MSFT</p>
                        </div>
                        <div className='dv_lst'>
                            <p>Usage:</p>
                            <p>Warehousing</p>
                        </div>
                        <div className='dv_lst'>
                            <p>Height:</p>
                            <p>12.7</p>
                        </div>
                        <div className='dv_lst'>
                            <p>Docks:</p>
                            <p>36</p>
                        </div>
                        <div className='dv_lst'>
                            <p>Floor Strength:</p>
                            <p>5 T /m2 UDL and 7.5T Point Load
                            </p>
                        </div>
                        <div className='dv_lst'>
                            <p>Availability From:</p>
                            <p>30th Oct'24</p>
                        </div>
                        <div className='dv_lst'>
                            <p>Built-to-suit possibility:</p>
                            <p>NA</p>
                        </div>
                    </div>
                </div>

                <div className='ep_divider'></div> 

                <div className='ep_ease_connect_dv'>
                    {/* <Bilaspur_eoc/> */}
                    <a class="bksite_sldr book_visit_btn">Book a site visit</a>
                </div>


            </div>
            
            <div className='ep_sld_two'>
                <div className='ep_map_dv'>
                    <img src={require('../../../../assets/img/elsc_north_pg/Bilaspur_map/thumb/Bilaspur-h.jpg')}></img>
                    <div className='maximize_btn' target="9">
                        <img src={require('../../../../assets/img/svg/elsc_landing/maximize_btn.svg')}></img>
                    </div>
                </div>
            </div>

        </div>

      </Slider>

      <Bilaspur_eoc/>

      {/* ------------------------------ Parks Image popup code ------------------------------ */}

      <div className='prk_img_popup' id='div7'>
        <a className='prk_img_popup_close'>
            <img src={require('../../../../assets/img/elsc_landing_pg/cancel.png')}></img>
        </a>
        <img className='elsc_park_map_img ' src={require('../../../../assets/img/elsc_north_pg/Bilaspur_map/popup_img/Bilaspur-f.jpg')}></img>
      </div>

      <div className='prk_img_popup' id='div8'>
        <a className='prk_img_popup_close'>
            <img src={require('../../../../assets/img/elsc_landing_pg/cancel.png')}></img>
        </a>
        <img className='elsc_park_map_img ' src={require('../../../../assets/img/elsc_north_pg/Bilaspur_map/popup_img/Bilaspur-g.jpg')}></img>
      </div>

      <div className='prk_img_popup' id='div9'>
        <a className='prk_img_popup_close'>
            <img src={require('../../../../assets/img/elsc_landing_pg/cancel.png')}></img>
        </a>
        <img className='elsc_park_map_img ' src={require('../../../../assets/img/elsc_north_pg/Bilaspur_map/popup_img/Bilaspur-h.jpg')}></img>
      </div>

      <div className='prk_img_popup_overlay'></div> 
      
       
      
    </>
  )
}
