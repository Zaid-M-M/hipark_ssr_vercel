import React from 'react'
import { useEffect, useRef } from "react";
import { gsap } from '../../helper/common'
import '../../assets/css/esg_overview.css';

export default function Esg_overview() {

  // Heading text animation variable
  const esg_ovr_hd = useRef(null);
  
  // Para animation variable
  const esg_ovr_para = useRef(null);
 
  useEffect(() => {
    
    // Heading text animation code
    gsap.to("#esg_ovr_hd", {
        y:0,
        duration: 1.3,
        ease: "power4.out",
        delay: 0.3,
        scrollTrigger: {
            trigger: "#esg_ovr_hd",
            markers: false
        }
    });

    // Para animation code
    gsap.to("#esg_ovr_para", {
        opacity:1,
        duration: 1.5,
        ease: "linear",
        delay: 0.9,
        scrollTrigger: {
            trigger: "#esg_ovr_para",
            markers: false
        }
    });


}, []);

  return (
    <>
      <div className='esg_overview_sec mob_pd_LR tab_pd_LR'>
        <div className='cstm_container'>
          <div className='row'>

            <div className='col-lg-5 col-md-12'>
              <div className="animate_txt esg_ovr_txt_animate">
                <h2 className='hdg_esg' ref={esg_ovr_hd} id='esg_ovr_hd'>Environment. Social. Governance.</h2>
              </div>
              <p className='sub_para esg_overview_subpara esg_para p_opacity' ref={esg_ovr_para} id='esg_ovr_para'>Our sustainability initiatives focus on issues pertaining to the environment, social and governance.</p>
              <p className='para esg_para_1 p_opacity' ref={esg_ovr_para} id='esg_ovr_para'>From reducing our carbon footprint to introducing inclusive growth policies, we are committed to creating a better future for all.</p>
            </div>

            <div className='col-lg-7 col-md-12 esg_over_col2 p_opacity' ref={esg_ovr_para} id='esg_ovr_para'>
              <img className='esg_ovrview_img' src={require('../../assets/img/env_compliance.jpg')} ></img>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
