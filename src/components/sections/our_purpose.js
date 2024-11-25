import React from 'react'
import { useEffect, useRef } from "react";
import { gsap } from '../../helper/common'
import '../../assets/css/our_purpose.css'

export default function Our_purpose() {

    // Heading text animation variable
    const purp_txt_anmt = useRef(null);
    const purp_txt_anmt1 = useRef(null);
    const purp_txt_anmt2 = useRef(null);

    const pur_para_anmt = useRef(null);
    const pur_para_anmt1 = useRef(null);
    const pur_para_anmt2 = useRef(null);
    const pur_para_anmt3 = useRef(null);
    const pur_para_anmt4 = useRef(null);
    const pur_para_anmt5 = useRef(null);
    const pur_para_anmt6 = useRef(null);
    const pur_para_anmt7 = useRef(null);
    const pur_para_anmt8 = useRef(null);

    useEffect(() => {

    // Heading text animation code
    gsap.to("#purp_txt_anmt", {
        y:0,
        duration: 1.3,
        ease: "power4.out",
        delay: 0.3,
        scrollTrigger: {
            trigger: "#purp_txt_anmt",
            markers: false
        }
    });
    gsap.to("#purp_txt_anmt1", {
        y:0,
        duration: 1.3,
        ease: "power4.out",
        delay: 0.3,
        scrollTrigger: {
            trigger: "#purp_txt_anmt1",
            markers: false
        }
    });
    gsap.to("#purp_txt_anmt2", {
        y:0,
        duration: 1.3,
        ease: "power4.out",
        delay: 0.3,
        scrollTrigger: {
            trigger: "#purp_txt_anmt2",
            markers: false
        }
    });

    // Para animation code
    gsap.to("#pur_para_anmt", {
        opacity:1,
        duration: 1.5,
        ease: "linear",
        delay: 0.9,
        scrollTrigger: {
            trigger: "#pur_para_anmt",
            markers: false
        }
    });
    gsap.to("#pur_para_anmt1", {
        opacity:1,
        duration: 1.5,
        ease: "linear",
        delay: 0.9,
        scrollTrigger: {
            trigger: "#pur_para_anmt1",
            markers: false
        }
    });
    gsap.to("#pur_para_anmt2", {
        opacity:1,
        duration: 1.5,
        ease: "linear",
        delay: 0.9,
        scrollTrigger: {
            trigger: "#pur_para_anmt2",
            markers: false
        }
    });
    gsap.to("#pur_para_anmt3", {
        opacity:1,
        duration: 1.5,
        ease: "linear",
        delay: 0.9,
        scrollTrigger: {
            trigger: "#pur_para_anmt3",
            markers: false
        }
    });
    gsap.to("#pur_para_anmt4", {
        opacity:1,
        duration: 1.5,
        ease: "linear",
        delay: 0.9,
        scrollTrigger: {
            trigger: "#pur_para_anmt4",
            markers: false
        }
    });
    gsap.to("#pur_para_anmt5", {
        opacity:1,
        duration: 1.5,
        ease: "linear",
        delay: 0.9,
        scrollTrigger: {
            trigger: "#pur_para_anmt5",
            markers: false
        }
    });
    gsap.to("#pur_para_anmt6", {
        opacity:1,
        duration: 1.5,
        ease: "linear",
        delay: 0.9,
        scrollTrigger: {
            trigger: "#pur_para_anmt6",
            markers: false
        }
    });
    gsap.to("#pur_para_anmt7", {
        opacity:1,
        duration: 1.5,
        ease: "linear",
        delay: 0.9,
        scrollTrigger: {
            trigger: "#pur_para_anmt7",
            markers: false
        }
    });
    gsap.to("#pur_para_anmt8", {
        opacity:1,
        duration: 1.5,
        ease: "linear",
        delay: 0.9,
        scrollTrigger: {
            trigger: "#pur_para_anmt8",
            markers: false
        }
    });

}, []);

    return (
        <>
            <div className='purpose_sec' id='purpose_mission_vision'>
                <div className='cstm_container'>

                    <div className='row'>
                        <div className='col-12'>
                            <div className="animate_txt purpos_anmt_txt">
                                <h2 className='section_heading prps_ttl' ref={purp_txt_anmt} id='purp_txt_anmt'>OUR PURPOSE</h2>
                            </div>
                            <p className='purpose_ttl_1 p_opacity' ref={pur_para_anmt} id='pur_para_anmt'>Enable our customers succeed by proactively delivering agile solutions for accelerated growth.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='purpose_sec_1'>
                <div className=''>
                    <div className='row no_LR_margin'>
                        <div className='col-lg-6 col-md-12 col-12 purpose_inside_sec'>

                            <div>
                                <div className="animate_txt purpos_anmt_txt">
                                    <h2 className='section_heading mssion_ttl' ref={purp_txt_anmt1} id='purp_txt_anmt1'>OUR MISSION</h2>
                                </div>
  
                                <p className='purpose_title p_opacity' ref={pur_para_anmt1} id='pur_para_anmt1'>Make Horizon the dominant and preferred industrial and warehousing partner, sustainably delivering benchmark quality and superior returns.</p>
                            </div>
                        </div>
                        <div className='col-lg-6 col-md-12 col-12 purpose_inside_sec1'>

                            <div>
                                <div className="animate_txt purpos_anmt_txt">
                                    <h2 className='section_heading vlus_ttl' ref={purp_txt_anmt2} id='purp_txt_anmt2'>OUR VALUES</h2>
                                </div>
                                <p className='purpose_title1 p_opacity' ref={pur_para_anmt2} id='pur_para_anmt2'>Our values define who we are. These are the ideals that give us roots to anchor and wings to fly. They help us create a better, sustainable future for all our stakeholders.</p>

                                <h1 className='purpose_head2 p_opacity' ref={pur_para_anmt3} id='pur_para_anmt3'>AGILITY</h1>
                                <p className='purpose_title2 para p_opacity' ref={pur_para_anmt4} id='pur_para_anmt4'>Be proactive and alert to the needs of our stakeholders</p>

                                <h1 className='purpose_head2 p_opacity' ref={pur_para_anmt5} id='pur_para_anmt5'>Collaboration</h1>
                                <p className='purpose_title2 para p_opacity' ref={pur_para_anmt6} id='pur_para_anmt6'>Practise mutual respect and teamwork to maximise value of partnerships</p>

                                <h1 className='purpose_head2 p_opacity' ref={pur_para_anmt7} id='pur_para_anmt7'>Excellence</h1>
                                <p className='purpose_title2 para p_opacity' ref={pur_para_anmt8} id='pur_para_anmt8'>Create systems to continuously establish and surpass benchmarks</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>


        </>

    )
}
