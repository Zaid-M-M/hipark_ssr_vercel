import React, { useState } from 'react'
import {Link , useParams} from "react-router-dom";
import Slider from 'react-slick';import '../../../assets/css/event_sec.css';
import { useEffect } from "react";
import $ from "jquery";
import "../../../helper/common";

export default function Event_slider({initialData}) {
    const [data, setData] = useState(initialData || []);
    let { slug } = useParams(); 

    const event_img_slider = {
        arrows: true,
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 500
    };

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetch(`/api/events/${slug}`);
            const response = await data.json();
            setData(response);
          };
          fetchData();
        $('.event_box').on("click", function() {
            $('.load-container').hide();
            $('.event_popup').addClass('event_popup_opn');
            // $('.lightbox_overlay').addClass('overlay_open');
            $('body').css('overflow','hidden');
            $('html, body').animate({
                scrollTop: $("#event_sec").offset().top
             }, 100);  
        });
        

        $('.ep_cls_btn').on("click", function() {
            $('.event_popup').removeClass('event_popup_opn');
            // $('.lightbox_overlay').removeClass('overlay_open');
            $('body').css('overflow','visible');
            $('html, body').animate({
                scrollTop: $("#event_sec").offset().top
             }, 100);
        });
        
    }, [slug])

  return (
    <>
       <div className='event_popup'>
            <Link to={{pathname: '/events', hash: '#event_sec'}} >
                <img className='ep_cls_btn' src={require('../../../assets/img/svg/close_icon_wht.svg')}></img>
            </Link>
            {data && data.map(({ id , acf , title , content , event_year}) => (                     
                <div>
                    <h3 className='event_hd_inside' dangerouslySetInnerHTML={{ __html: title.rendered }}></h3>  
                    <Slider {...event_img_slider} className='park_lightbox_photo event_img_sld'>

                        {acf.youtube_video_filed.map(event_ytb_video =>
                            <div className='lb_prk_sld' key={id}>
                                <div className='lb_prk_sld_content'>
                                    {/* <img src={event_photo}></img> */}
                                    <embed className="vm-vid" src={event_ytb_video.youtube_video}></embed>
                                    {/* <iframe id='' className="vm-vid" src={event_ytb_video.youtube_video} allowFullScreen="allowfullscreen" mozallowfullscreen="mozallowfullscreen" msallowfullscreen="msallowfullscreen" oallowfullscreen="oallowfullscreen" webkitallowfullscreen="webkitallowfullscreen"></iframe>                              */}
                                </div>
                                
                            </div>
                        )}

                    </Slider>
                    <p className='cstm_para event_para' dangerouslySetInnerHTML={{ __html: content.rendered }}></p>
                </div>
            ))}

        </div>
    </>
  )
}
