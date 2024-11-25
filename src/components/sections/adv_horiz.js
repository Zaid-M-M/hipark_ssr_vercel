import React from 'react'
import Slider from 'react-slick';
import { useState, useEffect } from 'react';
import { useRef } from "react";
import '../../assets/css/adv_horiz.css'
import "../../helper/common";
import { gsap } from '../../helper/common'

export default function Adv_horiz() {
    const [nav1, setNav1] = useState(null);
    const [nav2, setNav2] = useState(null);
    const [slider1, setSlider1] = useState(null);
    const [slider2, setSlider2] = useState(null);

    // Heading text animation variable
    const ad_hroi_hd = useRef(null);
    const adv_hori_fade = useRef(null);

    useEffect(() => {

        setNav1(slider1);
        setNav2(slider2);


        // Heading text animation code
        gsap.to("#ad_hroi_hd", {
            y:0,
            duration: 1.3,
            ease: "power4.out",
            delay: 0.3,
            scrollTrigger: {
                trigger: "#ad_hroi_hd",
                markers: false
            }
        });

        // Para animation code
        gsap.to("#adv_hori_fade", {
            opacity:1,
            duration: 1.5,
            ease: "linear",
            delay: 0.9,
            scrollTrigger: {
                trigger: "#adv_hori_fade",
                markers: false
            }
        });

    });


    const sctr_settings = {
        dots: false,
        swipe: false,
        fade: true,
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 500,
        arrow: false,
        asNavFor: '.slider-nav'
    };

    const sctr1_settings = {
        dots: false,
        infinite: false,
        vertical: true,
        slidesToShow: 6,
        arrow: true,
        asNavFor: '.slider-for',
        centerMode: true,
        focusOnSelect: true,
        centerPadding: '10px'
    };

    

    return (
        <>
            <div className='adv_horiz_sec'>

                <div className='row adv_row no_LR_margin'>
                    <div className='col-lg-6 col-md-6 col-12 nav_col custm_div'>

                        <div className="animate_txt no_float">
                            <h2 ref={ad_hroi_hd} className='section_sub_heading adv_horz_sub_hd' id='ad_hroi_hd'>Advantage Horizon</h2>
                        </div>
                        {/* <p className='section_sub_heading adv_horz_sub_hd'>Advantage Horizon</p> */}
                        <div className='p_opacity' ref={adv_hori_fade} id='adv_hori_fade'>
                            <Slider {...sctr1_settings} className='ad_horzion_nav' asNavFor={nav1} ref={slider => (setSlider2(slider))}>

                                <div className='adv_hz_outer_nav'>
                                    <div className='ad_hz_inner_nav'>
                                        <p className=''>Sustainability</p>
                                    </div>
                                </div>

                                <div className='adv_hz_outer_nav'>
                                    <div className='ad_hz_inner_nav'>
                                        <p className=''>Pan India Presence </p>
                                    </div>
                                </div>

                                <div className='adv_hz_outer_nav'>
                                    <div className='ad_hz_inner_nav'>
                                        <p className=''>Efficiency</p>
                                    </div>
                                </div>

                                <div className='adv_hz_outer_nav'>
                                    <div className='ad_hz_inner_nav'>
                                        <p className=''>100% compliance </p>
                                    </div>
                                </div>

                                <div className='adv_hz_outer_nav'>
                                    <div className='ad_hz_inner_nav'>
                                        <p className=''>Scalability</p>
                                    </div>
                                </div>

                                <div className='adv_hz_outer_nav'>
                                    <div className='ad_hz_inner_nav'>
                                        <p className=''>Safety and security</p>
                                    </div>
                                </div>

                            </Slider>
                        </div>
                    </div>

                    <div className='col-lg-6 col-md-6 col-12 info_col p_opacity'  ref={adv_hori_fade} id='adv_hori_fade'>
                        <Slider {...sctr_settings} className='ad_horzion_sld' asNavFor={nav2} ref={slider => (setSlider1(slider))}>
                            <div className='ad_hz_outer'>
                                <div className='ad_hz_inner'>
                                    <img src={require('../../assets/img/svg/Sustainability_icon.svg')} className=''></img>
                                    <h2 className='adv_section_hdg'>Sustainability </h2>
                                    <p className='adv_sub_head' >Materials with less embodied energy, environment friendly construction methods, water recycling and renewable power solutions, Miyawaki forest are some of the sustainability initiatives at Horizon parks to help our clients achieve their carbon goals.</p>

                                </div>
                            </div>

                            <div className='ad_hz_outer'>
                                <div className='ad_hz_inner'>
                                    <img src={require('../../assets/img/svg/pan_india.svg')} className=''></img>
                                    <h2 className='adv_section_hdg'>Pan India <br /> Presencess</h2>
                                    <p className='adv_sub_head'>Expand anywhere in India with a reliable partner for integrated solutions for industrial and logistics real estate.</p>


                                </div>
                            </div>

                            <div className='ad_hz_outer'>
                                <div className='ad_hz_inner'>
                                    <img src={require('../../assets/img/svg/productivity_icon.svg')} className=''></img>
                                    <h2 className='adv_section_hdg'>Efficiency</h2>
                                    <p className='adv_sub_head'>Parks are planned using design thinking principles, boosting average productivity by over 30%</p>

                                </div>
                            </div>

                            <div className='ad_hz_outer'>
                                <div className='ad_hz_inner'>

                                    <img src={require('../../assets/img/svg/Compliance_icon.svg')} className=''></img>
                                    <h2 className='adv_section_hdg'>100% compliance</h2>
                                    <p className='adv_sub_head'>Adherence to the strictest norms to meet every mandated requirement, to ensure quick clearances for our clients’ operations</p>
                                </div>
                            </div>

                            <div className='ad_hz_outer'>
                                <div className='ad_hz_inner'>

                                    <img src={require('../../assets/img/svg/Scalability_icon.svg')} className=''></img>
                                    <h2 className='adv_section_hdg'>Scalability</h2>
                                    <p className='adv_sub_head'>Well-equipped to ramp up our resources and infrastructure to support our clients’ growth in real time</p>
                                </div>
                            </div>

                            <div className='ad_hz_outer'>
                                <div className='ad_hz_inner'>                                    
                                    <img src={require('../../assets/img/svg/security_icon.svg')} className=''></img>
                                    <h2 className='adv_section_hdg'>Safety and security</h2>
                                    <p className='adv_sub_head'>Fully committed to ensuring 100% safety in all our parks, with 24×7 CCTV coverage, fenced boundaries, fire fighting systems, quick-response emergency systems manned by trained professionals, ambulance on standby, and first-aid centres</p>
                                </div>
                            </div>
                        </Slider>

                    </div>

                </div>

            </div>


        </>
    )
}
