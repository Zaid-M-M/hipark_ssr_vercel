import React from 'react'
import '../../assets/css/agile_eco.css';
import { useEffect, useRef } from "react";
import { gsap } from '../../helper/common'

export default function Vlu_integ_sec() {

    // Heading text animation variable
    const txt_animate_p1 = useRef(null);

    // Para animation variable
    const vlu_para = useRef(null);

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
        gsap.to("#vlu_para", {
            opacity:1,
            duration: 1.5,
            ease: "linear",
            delay: 0.9,
            scrollTrigger: {
                trigger: "#vlu_para",
                markers: false
            }
        });

    }, []);

  return (
    <>
        <div className='agile_eco_sec vlu_integ_sec snap_sec mob_pd_LR tab_pd_LR'>
            <div className='cstm_container'>
                <div className='row'>
                    <div className='col-12'>

                        <div className="animate_txt ">
                            <h2 ref={txt_animate_p1} className='section_sub_heading ovrview_sub_hd' id='txt_animate_p1'>Creating Value with Integrated Solutions</h2>
                        </div>
                        {/* <p className='section_sub_heading ovrview_sub_hd'>Agile ecosystems of growth</p> */}
                    </div>
                </div>
                <div className='row'>
                    <div className='col-lg-12 col-md-12 col-12 agile_eco_col1 p_opacity' ref={vlu_para} id='vlu_para'>

                    <p className='sub_para ovrview_subpara'>We create value for our customers by leveraging our pan-India presence and vast experience in acquiring, building, and managing industrial and logistics real estate.</p>

                    <p className='para ovrview_para'>Our integrated solutions for strategic land acquisition, park compliances and approvals, asset development and property management, empower our customers to get a head start and focus on their core business. Combined with our consultative approach and local domain expertise, our end-to-end solutions help them optimize design, control costs and improve efficiency.</p>

                    </div>
                    {/* <div className='col-lg-6 col-md-6 col-12 agile_eco_col2'>
                        <img className='solution_image' src={require('../../assets/img/vlu_intg_img.png')} ></img>
                    </div> */}
                </div>
                
            </div>
        </div>
    </>
  )
}





