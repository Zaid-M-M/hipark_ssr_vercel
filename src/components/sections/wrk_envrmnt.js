import React from 'react'
import Slider from 'react-slick';
import { useEffect, useRef } from "react";
import { gsap } from '../../helper/common'
import '../../assets/css/wrk_envrmnt.css'


export default function Wrk_envrmnt() {

    const work_slider = {
        arrows: true,
        infinite: false,
        slidesToShow:5,
        slidesToScroll: 1,
        speed: 500,
        responsive: [
        {
            breakpoint: 1024,
            settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            
            }
        },
        {
            breakpoint: 600,
            settings: {
            slidesToShow: 2,
            slidesToScroll:1,
            }
        },
        {
            breakpoint: 480,
            settings: {
            slidesToShow: 2,
            slidesToScroll: 1
            }
        }
        ]
    };
    

    // gloabl line GSAP
     

    // Heading text animation variable
    const txt_animate_p4 = useRef(null);
    const work_fade = useRef(null);

    useEffect(() => {
    
        // Heading text animation code
        gsap.to("#txt_animate_p4", {
            y:0,
            duration: 1.3,
            ease: "power4.out",
            delay: 0.3,
            scrollTrigger: {
                trigger: "#txt_animate_p4",
                markers: false
            }
        });

        // Para animation code
        gsap.to("#work_fade", {
            opacity:1,
            duration: 1.5,
            ease: "linear",
            delay: 0.9,
            scrollTrigger: {
                trigger: "#work_fade",
                markers: false
            }
        });


    }, []);

    return (
        <>
            <div className='wrk_sec snap_sec'>
                <div className='cstm_container mob_pd_LR tab_pd_LR'>

                    <div className='row' >
                        <div className='col-12'>
                            {/* <p className='section_sub_heading wrk_sub_hd'>A humanistic work environment</p> */}
                            <div className="animate_txt ">
                                <h2 ref={txt_animate_p4} className='section_sub_heading wrk_sub_hd' id='txt_animate_p4'>An Ergonomic work environment</h2>
                            </div>
                        </div>
                    </div>
                    <div className='row' >
                        
                        <div className='col-12 p_opacity' ref={work_fade} id='work_fade'>
                            
                            <Slider {...work_slider} className='work_slider'>
                                
                                <div className='wrk_sld ws_1'>
                                    <div className='wrk_content'>
                                        <img className='' src={require('../../assets/img/svg/work/Barrier free design.svg')}></img>
                                        <p className=''>Barrier free design for building access to the differently abled</p>
                                    </div>
                                </div>
                                <div className='wrk_sld ws_2'>
                                    <div className='wrk_content'>
                                        <img className='' src={require('../../assets/img/svg/work/Green cover.svg')}></img>
                                        <p className=''>Miyawaki urban forests, green cover around the perimeter and in common areas</p>
                                    </div>
                                </div>
                                <div className='wrk_sld ws_3'>
                                    <div className='wrk_content'>
                                        <img className='' src={require('../../assets/img/svg/work/Conveniences.svg')}></img>
                                        <p className=''>Conveniences including refreshment on meals and ATM</p>
                                    </div>
                                </div>
                                <div className='wrk_sld ws_4'>
                                    <div className='wrk_content'>
                                        <img className='' src={require('../../assets/img/svg/work/Exit.svg')}></img>
                                        <p className=''>Signage for regulatory information, safety and emergency guidelines</p>
                                    </div>
                                </div>

                                <div className='wrk_sld ws_5'>
                                    <div className='wrk_content'>
                                        <img className='' src={require('../../assets/img/svg/work/Smartly designed.svg')}></img>
                                        <p className=''>Smartly designed and well-located signage for easy navigation</p>
                                    </div>
                                </div>

                                <div className='wrk_sld ws_6'>
                                    <div className='wrk_content'>
                                        <img className='' src={require('../../assets/img/svg/work/ambulance.svg')}></img>
                                        <p className=''>First-aid center with an ambulance facility</p>
                                    </div>
                                </div>
                                <div className='wrk_sld ws_7'>
                                    <div className='wrk_content'>
                                        <img className='' src={require('../../assets/img/svg/work/Toilets.svg')}></img>
                                        <p className=''>Toilets in common areas and rest rooms for drivers</p>
                                    </div>
                                </div>
                                <div className='wrk_sld ws_8'>
                                    <div className='wrk_content'>
                                        <img className='' src={require('../../assets/img/svg/work/zen garden.svg')}></img>
                                        <p className=''>Water body with garden</p>
                                    </div>
                                </div>
                                <div className='wrk_sld ws_9'>
                                    <div className='wrk_content'>
                                        <img className='' src={require('../../assets/img/svg/work/GYM.svg')}></img>
                                        <p className=''>Open gymnasium and netted box</p>
                                    </div>
                                </div>
                                <div className='wrk_sld ws_10'>
                                    <div className='wrk_content'>
                                        <img className='' src={require('../../assets/img/svg/work/EV.svg')}></img>
                                        <p className=''>Pavegen areas and EV plug points</p>
                                    </div>
                                </div>

                            </Slider>

                        </div>
                        
                    </div>


                </div>

                <div className='wrk_img_dv p_opacity' ref={work_fade} id='work_fade'>
                    <img className='wrk_img' src={require('../../assets/img/wrk_envr.jpg')} ></img>
                </div>

            </div>

            {/* <div className='work_img_div'>

            </div> */}

        </>
    )
}
