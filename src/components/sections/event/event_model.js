import React from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../../../assets/css/event_sec.css';
import { useEffect, useRef } from "react";
import useFetch from "react-fetch-hook";
import $ from "jquery";


const Event_model = ({ data1, closeModal }) => {

    const event_img_slider = {
        arrows: true,
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 500
    };

    return (
        <>

            <div className='event_popup'>

            <img className='ep_cls_btn' onClick={closeModal} src={require('../../../assets/img/svg/close_icon_wht.svg')}></img>
                   
                <div>
                    <h3 className='event_hd_inside' dangerouslySetInnerHTML={{ __html: data1.title.rendered }}></h3>  
                    <Slider {...event_img_slider} className='park_lightbox_photo event_img_sld'>

                        {data1.acf.youtube_video_filed.map(event_ytb_video =>
                            <div className='lb_prk_sld' key={event_ytb_video.id}>
                                <div className='lb_prk_sld_content'>
                                    {/* <img src={event_photo}></img> */}
                                    <embed className="vm-vid" src={event_ytb_video.youtube_video}></embed>
                                    {/* <iframe id='' className="vm-vid" src={event_ytb_video.youtube_video} allowfullscreen="allowfullscreen" mozallowfullscreen="mozallowfullscreen" msallowfullscreen="msallowfullscreen" oallowfullscreen="oallowfullscreen" webkitallowfullscreen="webkitallowfullscreen"></iframe>                              */}
                                </div>
                                
                            </div>
                        )}

                    </Slider>
                    <p className='cstm_para event_para' dangerouslySetInnerHTML={{ __html: data1.content.rendered }}></p>
                </div>


        </div>
        </>
    );
};

export default Event_model;
