import React from 'react'
import Slider from 'react-slick';
import { useEffect, useRef } from "react";
import { gsap } from '../../../helper/common'
import '../../../assets/css/client_testimonial.css';

export default function Client_testimonial() {

    const custm_slider = {
        arrows: true,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        speed: 800,
        centerMode: true,
        centerPadding: '50px',
        responsive: [
            {
                breakpoint: 1600,
                settings: {
                    slidesToShow: 2,
                    centerMode: true,
                    centerPadding: '50px',
                }
            },
            {
                breakpoint: 1536,
                settings: {
                    slidesToShow: 2,
                    centerMode: true,
                    centerPadding: '50px',
                }
            },
            {
                breakpoint: 1440,
                settings: {
                    slidesToShow: 1,
                    centerMode: true,
                    centerPadding: '230px',
                }
            },
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 1,
                    centerMode: true,
                    centerPadding: '200px',
                }
            },
            {
                breakpoint: 1090,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll:1,
                  centerMode: true,
                  centerPadding: '150px',
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


    // gloabl line GSAP
     

    // Heading text animation variable
    const social_hd = useRef(null);
    
    // Para animation variable
    const social_para1 = useRef(null);
    const social_para2 = useRef(null);

    // border animation variable
    const agileBorder_aniamtion = useRef(null);

    useEffect(() => {

        // Heading text animation code
        gsap.to("#social_hd", {
            y:0,
            duration: 1.3,
            ease: "power4.out",
            delay: 0.3,
            scrollTrigger: {
                trigger: "#social_hd",
                markers: false
            }
        });

        // Para animation code
        gsap.to("#social_para1", {
            opacity:1,
            duration: 1.5,
            ease: "linear",
            delay: 0.9,
            scrollTrigger: {
                trigger: "#social_para1",
                markers: false
            }
        });
        // Para animation code
        gsap.to("#social_para2", {
            opacity:1,
            duration: 1.5,
            ease: "linear",
            delay: 0.9,
            scrollTrigger: {
                trigger: "#social_para2",
                markers: false
            }
        });

    }, []);


    return (
        <>
            <div className='customis_sec testimonial_sec' >
                {/* <div className='row no_LR_margin'>
                    <div className='col-12 no_padding'>
                        <div className="animate_txt ">
                            <h2 ref={social_hd} id='social_hd' className='section_heading'>Customers Speak</h2>
                        </div>
                    </div>
                </div> */}

                <div className='row no_LR_margin'>
                    <div className='col-12 no_padding p_opacity' ref={social_para2} id='social_para2'>
                        <Slider {...custm_slider} className=' custm_main_slider  Testimonial_slider'>

                            <div className='custm_outer_sld'>
                                <div className='custm_inner'>

                                    <div className='content_div'>
                                        {/* <img src={acf.client_stories_image} className='client_img'></img> */}
                                        <div className='content_div_inner'>
                                            <img className='quote_icon' src={require('../../../assets/img/quote_icon.png')}></img>
                                            <div className=''>
                                                <p className='csm_para'>Our factories abide by the highest safety standards and comprise best-in-class technologies and quality management systems. We’re excited to partner with Horizon Industrial Parks, a proven owner and operator of high-quality industrial parks. We’re confident that they can deliver exactly what we have envisioned for our facility.</p>
                                                <hr className='testimonial_hr'></hr>
                                                
                                                {/* <img className='client_logo_testim' src={require('../../../assets/img/dummy_logo.png')}></img>     */}
                                                <p className='test_nm'>Fosroc Chemicals (India) Pvt Limited</p>
                                                {/* <p className='csm_para test_dsg'>Plant Head – ABC LTD.</p> */}

                                            </div>
                                        </div>
                             
                                    </div>
                                   
                                </div>
                            </div>

                            <div className='custm_outer_sld'>
                                <div className='custm_inner'>

                                    <div className='content_div'>
                                        {/* <img src={acf.client_stories_image} className='client_img'></img> */}
                                        <div className='content_div_inner'>
                                            <img className='quote_icon' src={require('../../../assets/img/quote_icon.png')}></img>
                                            <div className=''>
                                                <p className='csm_para'>Traditionally, Lumax operated out of standalone facilities, but the facilities witnessed at the Horizon Industrial Park prompted us to move within. They bring global technical know-how and provide a one-stop-solution for our industrial real estate needs.</p>
                                                <hr className='testimonial_hr'></hr>
                                                
                                                {/* <img className='client_logo_testim' src={require('../../../assets/img/dummy_logo.png')}></img>     */}
                                                <p className='test_nm'>Lumax-DK Jain Group</p>
                                                {/* <p className='csm_para test_dsg'>Plant Head – ABC LTD.</p> */}

                                            </div>
                                        </div>
                             
                                    </div>
                                   
                                </div>
                            </div>

                            <div className='custm_outer_sld'>
                                <div className='custm_inner'>

                                    <div className='content_div'>
                                        {/* <img src={acf.client_stories_image} className='client_img'></img> */}
                                        <div className='content_div_inner'>
                                            <img className='quote_icon' src={require('../../../assets/img/quote_icon.png')}></img>
                                            <div className=''>
                                                <p className='csm_para'>India's fresh fruit imports hit record levels in 2021. To satisfy the growing appetite, we require a cold storage facility to ensure we can preserve quality and safety across the supply chain and reduce lead-time. Horizon demonstrates its cutting-edge cold chain facility can meet our stringent safety standards and improve our operational efficiency.</p>
                                                <hr className='testimonial_hr'></hr>
                                                
                                                {/* <img className='client_logo_testim' src={require('../../../assets/img/dummy_logo.png')}></img>     */}
                                                <p className='test_nm'>IG International</p>
                                                {/* <p className='csm_para test_dsg'>Plant Head – ABC LTD.</p> */}

                                            </div>
                                        </div>
                             
                                    </div>
                                   
                                </div>
                            </div>

                            <div className='custm_outer_sld'>
                                <div className='custm_inner'>

                                    <div className='content_div'>
                                        {/* <img src={acf.client_stories_image} className='client_img'></img> */}
                                        <div className='content_div_inner'>
                                            <img className='quote_icon' src={require('../../../assets/img/quote_icon.png')}></img>
                                            <div className=''>
                                                <p className='csm_para'>MOVIN aspires to be an agile and collaborative organization, created with the vision to achieve results, and lead the change in the logistics industry.  To accomplish this vision, we wanted to partner with an organization that shares the same values as us, and Horizon Industrial Parks is the preferred partner for us. From our very first interaction, the teams at MOVIN and Horizon have worked with blazing speed and in a collaborative manner to conclude this transaction in record time.</p>
                                                <hr className='testimonial_hr'></hr>
                                                
                                                {/* <img className='client_logo_testim' src={require('../../../assets/img/dummy_logo.png')}></img>     */}
                                                <p className='test_nm'>InterGlobe Enterprises</p>
                                                {/* <p className='csm_para test_dsg'>Plant Head – ABC LTD.</p> */}

                                            </div>
                                        </div>
                             
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
