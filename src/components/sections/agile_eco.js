import React from 'react'
import '../../assets/css/agile_eco.css';
import { useEffect, useRef } from "react";
import { gsap } from '../../helper/common'

export default function Agile_eco() {
    // Heading text animation variable
    const txt_animate_p1 = useRef(null);
    const egile_txt_fade = useRef(null);

    // Image animation variable
    // const agile_eco_img = useRef(null);

    useEffect(() => {
    
        // Heading text animation code
        gsap.to("#txt_animate_p1", {
            y:0,
            duration: 1.3,
            ease: "power4.out",
            delay: 0.3,
            scrollTrigger: {
                trigger: "#txt_animate_p1",
                markers: false
            }
        });

        // Para animation code
        gsap.to("#egile_txt_fade", {
            opacity:1,
            duration: 1.5,
            ease: "linear",
            delay: 0.9,
            scrollTrigger: {
                trigger: "#egile_txt_fade",
                markers: false
            }
        });

        // Image animation code
        // gsap.to("#agile_eco_img", {
        //     xPercent:100,
        //     duration: 1,
        //     ease: "linear",
        //     delay: 0.8,
        //     scrollTrigger: {
        //         trigger: "#img_animation",
        //         markers: false
        //     }
        // });

    }, []);

  return (
    <>
        <div className='agile_eco_sec snap_sec mob_pd_LR tab_pd_LR'>
            <div className='cstm_container'>
                <div className='row'>
                    <div className='col-12'>

                        <div className="animate_txt ">
                            <h2 ref={txt_animate_p1} className='section_sub_heading ovrview_sub_hd' id='txt_animate_p1'>Agile ecosystems of growth</h2>
                        </div>
                        {/* <p className='section_sub_heading ovrview_sub_hd'>Agile ecosystems of growth</p> */}
                    </div>
                </div>
                <div className='row'>
                    <div className='col-lg-6 col-md-12 col-12 agile_eco_col1'>

                        <p className='sub_para ovrview_subpara p_opacity'  ref={egile_txt_fade} id='egile_txt_fade'>Each of our parks is a self-sustaining business environment that offers 100% customisation with built-to-suit as well as ready-to-move facilities.</p>

                        <p className='para ovrview_para p_opacity'  ref={egile_txt_fade} id='egile_txt_fade'>Our park locations are judiciously chosen for their strategic points of access, the supportive community and surrounding resources, capacity to scale up, and local government support.</p>

                        <p className='para ovrview_para p_opacity'  ref={egile_txt_fade} id='egile_txt_fade'>All of our parks offer grade A infrastructure in line with global standards of institutional players. They provide world class infrastructure, standardised specifications and facilities designed to make work environment highly productive and ergonomic.</p>

                    </div>
                    <div className='col-lg-6 col-md-8 col-12 agile_eco_col2 p_opacity' ref={egile_txt_fade} id='egile_txt_fade'>
                        <img src={require('../../assets/img/agile_eco.jpg')} className='agile_eco_img'></img>
                            {/* <div className='reveal_img'>
                                <div className='reveal_img_dv' ref={agile_eco_img} id='agile_eco_img'></div>
                                <img className='agile_eco_img' src={require('../../assets/img/agile_eco.jpg')} ></img>
                            </div> */}
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}





