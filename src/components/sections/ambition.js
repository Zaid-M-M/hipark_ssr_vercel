import React from 'react'
import { useEffect, useRef } from "react";
import $ from "jquery";
import { gsap } from '../../helper/common'
import '../../assets/css/ambition.css';

export default function Ambition() {

    // Heading text animation variable
    const txt_animate_p2 = useRef(null);

    // Para animation variable
    const para_aniamtion = useRef(null);

    useEffect(() => {

        //Ambition overview read-more
        $('.moreless_button').on('click', function() {
            console.log('working');
            $('.moretext').slideToggle();
            if ($('.moreless_button').text() == "Read more") {
                $(this).text("Read less")
            } else {
                $(this).text("Read more")
            }
        });
    
        // Heading text animation code
        gsap.to("#txt_animate_p2", {
            y:0,
            duration: 1.3,
            ease: "power4.out",
            delay: 0.3,
            scrollTrigger: {
                trigger: "#txt_animate_p2",
                markers: false
            }
        });

        // Para animation code
        gsap.to("#para_aniamtion", {
            opacity:1,
            duration: 1.5,
            ease: "linear",
            delay: 0.9,
            scrollTrigger: {
                trigger: "#para_aniamtion",
                markers: false
            }
        });

    }, []);

  return (
    <>
        <div className='ambition_sec snap_sec'>
            <div className='row no_LR_margin'>
                <div className='col-lg-6 col-md-12 col-12 ambition_col1'>
                    {/* <img className='ambition_img' src={require('../../assets/img/ambition_img.jpg')}></img> */}
                    <img className='ambition_arrow' src={require('../../assets/img/integrate_arrow.png')}></img>
                </div>
                <div className='col-lg-6 col-md-12 col-12 ambition_col2 tab_pd_LR'>

                    {/* <p className='section_sub_heading ovrview_sub_hd'>Delivering to your ambitions</p> */}

                    <div className="animate_txt ">
                        <h2 ref={txt_animate_p2} className='section_sub_heading ambition_hd' id='txt_animate_p2'>Delivering to your aspirations</h2>
                    </div>

                    <p className='sub_para ovrview_subpara am_p1 p_opacity ambition_p' ref={para_aniamtion} id='para_aniamtion'>Given the rise in multi-channel sales, our customers are faced with new and ever evolving business challenges in their supply chain systems. We aspire to be their partner in addressing these business needs and help them improve their service levels.</p>

                    <p className='para ovrview_para p_opacity' ref={para_aniamtion} id='para_aniamtion'>This requires large scale and pan-India presence and varied offering of warehousing and industrial real estate solutions and services.  We offer big boxes for distribution and fulfilment centers that support large-scale efficiencies and urban logistics/ in-city warehousing bringing our customers closer to theirs.</p>

                    <p className='para ovrview_para p_opacity moretext' ref={para_aniamtion} id='para_aniamtion'>With India emerging as an alternate manufacturing investment destination catalysed by government policy and incentives, we are also making significant investment in industrial parks for customers in the light engineering and manufacturing sectors.</p>

                    <a className="moreless_button moreless_ttl ambition_read_btn p_opacity" ref={para_aniamtion} id='para_aniamtion'>Read more</a>

                </div>
            </div>
        </div>      
    </>
  )
}


 



