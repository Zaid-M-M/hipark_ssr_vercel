import React from 'react'
import Slider from 'react-slick';
import { useEffect, useRef } from "react";
import '../../assets/css/customisation_sec.css';
import '../../assets/css/park_gallery.css';
import { gsap } from "../../helper/common";

export default function Customisation_sec() {

    const custm_slider = {
        arrows: true,
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 800,
        centerMode: true,
        centerPadding: '140px',
        responsive: [
            {
                breakpoint: 1090,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll:1,
                  centerMode: true,
                  centerPadding: '50px',
                  adaptiveHeight: true
                }
            },
            {
                breakpoint: 835,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll:1,
                  centerMode: true,
                  centerPadding: '50px',
                  adaptiveHeight: true,
                  infinite: false
                }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll:1,
                centerMode: false,
                centerPadding: '0px',
                adaptiveHeight: true,
                infinite: false
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                centerMode: false,
                centerPadding: '0px',
                adaptiveHeight: true,
                infinite: false
              }
            }
        ]
    };

        // Heading text animation variable
        const custom_hd = useRef(null);
        
        // Para animation variable
        const custm_para1 = useRef(null);
        const custm_para2 = useRef(null);
    
        // border animation variable
        const agileBorder_aniamtion = useRef(null);

        useEffect(() => {
    
            // Heading text animation code
            gsap.to("#custom_hd", {
                y:0,
                duration: 1.3,
                ease: "power4.out",
                delay: 0.3,
                scrollTrigger: {
                    trigger: "#custom_hd",
                    markers: false
                }
            });
    
            // Image animation code
            gsap.to("#img_animation", {
                xPercent:100,
                duration: 1,
                ease: "linear",
                delay: 0.8,
                scrollTrigger: {
                    trigger: "#img_animation",
                    markers: false
                }
            });
    
            // Para animation code
            gsap.to("#custm_para1", {
                opacity:1,
                duration: 1.5,
                ease: "linear",
                delay: 0.9,
                scrollTrigger: {
                    trigger: "#custm_para1",
                    markers: false
                }
            });
            // Para animation code
            gsap.to("#custm_para2", {
                opacity:1,
                duration: 1.5,
                ease: "linear",
                delay: 0.9,
                scrollTrigger: {
                    trigger: "#custm_para2",
                    markers: false
                }
            });
    
            // border animation code
            gsap.to("#agileBorder_aniamtion", {
                opacity:1,
                duration: .5,
                ease: "linear",
                delay: 0.5,
                width: "100%",
                scrollTrigger: {
                    trigger: "#agileBorder_aniamtion",
                    markers: false
                }
            });
    
        }, []);


  return (
    <>
        <div className='customis_sec'>
            <div className='row no_LR_margin custm_row1'>
                <div className='col-12 no_padding'>
                    <div className="animate_txt ">
                        <h2 ref={custom_hd} id='custom_hd' className='section_sub_heading ovrview_sub_hd customise_hd'>360° customization. 360° solutions.</h2>
                    </div>
                    <p className='sub_para ovrview_subpara customise_para p_opacity' ref={custm_para1} id='custm_para1'>Our obsession with surpassing our own benchmarks means setting new milestones across the industry.<br/>It also ensures that our customers get products and services that go beyond their expectations.</p>
                </div>
            </div>

            <div className='row no_LR_margin'>
                <div className='col-12 no_padding p_opacity' ref={custm_para2} id='custm_para2'>
                    <Slider {...custm_slider} className=' custm_main_slider ' >

                        <div className='custm_outer_sld'>
                            <div className='custm_inner'>
                                
                                <div className='content_div'>
                                    <div>
                                        <p>Integrated solutions for multiple requirements</p>
                                        <ul>
                                            <li>Strategic land acquisition</li>
                                            <li>Park compliances and approvals</li>
                                            <li>Product development (ready-to-move and built-to suit facilities)</li>
                                            <li>End-to-end property management</li>
                                            <li>Sustainable and compliant operations (safety,green energy, power and water management)</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className='img_div'>
                                    <img src={require('../../assets/img/customise_slg_img.jpg')}></img>
                                </div>
                            </div>
                        </div>

                        <div className='custm_outer_sld'>
                            <div className='custm_inner'>
                                <div className='content_div'>
                                    <div>
                                        <p>Timely project delivery with full compliance</p>
                                        <ul>
                                            <li>Project deliveries on or before time</li>
                                            <li>No-compromise, 100% compliance on all statutory and regulatory requirements</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className='img_div'>
                                    <img src={require('../../assets/img/Timely_project.jpg')}></img>
                                </div>
                            </div>
                        </div>

                        <div className='custm_outer_sld'>
                            <div className='custm_inner'>
                                <div className='content_div'>
                                    <div>
                                        <p>Domain expertise</p>
                                        <ul>
                                            <li>Domain experts with proven track records across diverse sectors</li>
                                            <li>Extensive and in-depth understanding of local nuances that are specific to industries, sectors and regions </li>
                                            <li>Access to global expertise and scale</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className='img_div'>
                                    <img src={require('../../assets/img/Int_local_domain.jpg')}></img>
                                </div>
                            </div>
                        </div>

                        <div className='custm_outer_sld'>
                            <div className='custm_inner'>
                                <div className='content_div'>
                                    <div>
                                        <p>Global benchmarks</p>
                                        <ul>
                                            <li>All parks built to global standards of institutional players</li>
                                            <li>Grade A infrastructure providing standardised building specifications and facilities</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className='img_div'>
                                    <img src={require('../../assets/img/Global_benchmarks.jpg')}></img>
                                </div>
                            </div>
                        </div>

                    </Slider>
                </div>
            </div>
        </div>
    </>
  )
}
