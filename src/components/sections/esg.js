import React from 'react'
import { useEffect, useRef } from "react";
import { Link } from 'react-router-dom';
import { gsap } from '../../helper/common'
import '../../assets/css/esg.css';

export default function Esg() {

    // Heading text animation variable
    const txt_animate_5 = useRef(null);
    
    // Para animation variable
    const esg_para = useRef(null);
    const esg_img_bx = useRef(null);

    // border animation variable
    const esgBorder_aniamtion = useRef(null);

    useEffect(() => {

        // border animation code
        gsap.to("#esgBorder_aniamtion", {
            opacity:1,
            duration: .5,
            ease: "linear",
            delay: 0.5,
            width: "100%",
            scrollTrigger: {
                trigger: "#esgBorder_aniamtion",
                markers: false
            }
        });
    

        gsap.to("#esg_img_bx", {
            duration: 4.5,
            ease: "linear",
            delay: 0.5,
            y: "-1670",
            scrollTrigger: {
                trigger: "#esg_img_bx",
                markers: false
            }
        });
    

        // Heading text animation code
        gsap.to("#txt_animate_5", {
            y:0,
            duration: 1.3,
            ease: "power4.out",
            delay: 0.3,
            scrollTrigger: {
                trigger: "#txt_animate_5",
                markers: false
            }
        });

        // Para animation code
        gsap.to("#esg_para", {
            opacity:1,
            duration: 1.5,
            ease: "linear",
            delay: 0.9,
            scrollTrigger: {
                trigger: "#esg_para",
                markers: false
            }
        });

    }, []);

  return (
    
    <>
<div className='esg_sec snap_sec mob_pd_LR tab_pd_LR'>
            <div className='cstm_container'>
                
                <div className='row'>
                    <div className='col-12'>
                        
                        <p className='section_name p_opacity' ref={esg_para} id='esg_para'>Environmental, Social and Governance</p>
                        <hr className='add_border p_opacity' ref={esgBorder_aniamtion} id='esgBorder_aniamtion'/>
                    </div>
                </div>
                <div className='row esg_row2'>
                    <div className='col-lg-6 col-md-12 col-12 esg_col1'>
                        {/* <h2 className='section_heading esg_sec_hd'>Our sustainability Initiatives</h2> */}
                        <div className="animate_txt ">
                            <h2 ref={txt_animate_5} className='section_heading' id='txt_animate_5'>Our sustainability</h2>
                        </div>
                        <div className="animate_txt ">
                            <h2 ref={txt_animate_5} className='section_heading' id='txt_animate_5'>Initiatives</h2>
                        </div>
                        <p className='sub_para esg_sub_para p_opacity esg_p1' ref={esg_para} id='esg_para'>From reducing our carbon footprint to introducing inclusive growth policies, we are wholeheartedly committed to creating a better future for all. </p>

                        <p className='para p_opacity' ref={esg_para} id='esg_para'>We believe that companies have a responsibility towards the society beyond delivering value in their core business. We want to make a difference and contribute to India's 2030 carbon emissions intensity goals through our sustainable operations and design, climate resiliency initiatives, diversity and inclusion programmes compliance and reporting.</p>

                        <Link to='/sustainability' className='arrow_btn p_opacity esg_btn' ref={esg_para} id='esg_para'>Know more about our ESG initiatives</Link>
                    </div>
                    <div className='col-lg-6 col-md-12 col-12 esg_img_col'>
                        <img className='esg_img ' src={require('../../assets/img/esg.webp')} ></img>
                        <div className='esg_img_bx' ref={esg_img_bx} id='esg_img_bx'></div>
                    </div>
                </div>

            </div>
        </div>
    </>
  )
}
