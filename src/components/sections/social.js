import React from 'react'
import Slider from 'react-slick';
import { useEffect, useRef, useState } from "react";
import { gsap } from '../../helper/common'
import '../../assets/css/social.css';
import '../../assets/css/park_gallery.css';
import "../../helper/common";

export default function Social() {

    const [isOpen, setIsOpen] = useState(false);

    const openPopup = () => setIsOpen(true);
    const closePopup = () => setIsOpen(false)

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
                  centerMode: false,
                  centerPadding: '140px',
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
            <div className='customis_sec' id='social'>
                <div className='row no_LR_margin'>
                    <div className='col-12'>
                        <div className="animate_txt ">
                            <h2 ref={social_hd} id='social_hd' className='section_sub_heading ovrview_sub_hd customise_hd scl_bdr'>SOCIAL</h2>
                        </div>
                        <p className='sub_para ovrview_subpara customise_para p_opacity' ref={social_para1} id='social_para1'>At Horizon, we believe that real progress happens when everyone benefits. We are committed to inclusive <br></br> growth by providing opportunities within our ecosystem for differently abled individuals.</p>
                    </div>
                </div>

                <div className='row no_LR_margin'>
                    <div className='col-12 no_padding p_opacity' ref={social_para2} id='social_para2'>
                        <Slider {...custm_slider} className=' custm_main_slider social_main_slider'>

                            <div className='custm_outer_sld'>
                                <div className='custm_inner'>
                                    <div className='content_div'>
                                        <div>
                                            <p>Community Actions</p>
                                           
                                            <p className='csm_para'>We contribute actively to the social, economic, and environmental development of the communities in which we operate. Our focus areas include:</p>
                                            <ul className='soc_li'>
                                                <li>Infrastructure support to schools and health facilities.</li>
                                                <li>Organising health check-up camps, conducting regular road and fire safety workshops.</li>
                                            </ul>
                                            
                                        </div>
                                    </div>
                                    <div className='img_div vdeo_dv' onClick={openPopup}>
                                        <img  src={require('../../assets/img/community_esg.jpg')}></img>
                                        <img className='vdo_btn'  src={require('../../assets/img/plat_icon.png')}></img>
                                       
                                    </div>
                                </div>
                            </div>

                            <div className='custm_outer_sld'>
                                <div className='custm_inner'>

                                    <div className='content_div'>
                                        <div>
                                            <p>Inclusion {'&'} Diversity</p>
                                            <p className='csm_para'>We are committed to inclusive growth by enabling opportunities to include differently abled employees within our ecosystem. We welcome employees of all abilities, genders, ages, cultural backgrounds, and identities.</p>

                                            <p className='csm_para'>We also dedicatedly promote employee awareness on inclusivity, diversity, and sustainability through initiatives like POSH and women's mentorship program.</p>
                                            
                                        </div>
                                    </div>
                                    <div className='img_div'>
                                        <img src={require('../../assets/img/Diversity_inclusion.jpg')}></img>
                                    </div>
                                </div>
                            </div>

                            <div className='custm_outer_sld'>
                                <div className='custm_inner'>
                                    <div className='content_div'>
                                        <div>
                                            <p>Employee Training</p>
                                            <p className='csm_para'>We engage in special training sessions for employees:</p>
                                            
                                            <ul className='soc_li'>
                                                <li>To sensitise them on inclusion and diversity</li>
                                                <li>Create awareness around sustainability </li>
                                                <li>Define leadership KRAs around specific ESG-related action points</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className='img_div'>
                                        <img src={require('../../assets/img/Employee_Training.jpg')}></img>
                                    </div>
                                </div>
                            </div>

                            

                        </Slider>
                    </div>
                </div>

                

            </div>

            {isOpen && (
                    <div className="comm_popup_overlay">
                    <div className="comm_popup">
                    <img className='pp_cls' onClick={closePopup} src={require('../../assets/img/svg/close_icon_wht.svg')}></img>
                        <embed className="vm-vid" src="https://player.vimeo.com/video/1022385863"></embed>
                        
                    </div>
                    </div>
                )}
        </>
    )
}
