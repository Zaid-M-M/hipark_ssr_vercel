import React from 'react'
import { useEffect, useRef } from "react";
import { gsap } from '../../helper/common'
import '../../assets/css/cstmr_sucss.css'

export default function Cstmr_sucss() {

  // Heading text animation variable
  const cstmr_hd = useRef(null);
  const cstmer_fade = useRef(null);

  useEffect(() => {
  
      // Heading text animation code
      gsap.to("#cstmr_hd", {
          y:0,
          duration: 1.3,
          ease: "power4.out",
          delay: 0.3,
          scrollTrigger: {
              trigger: "#cstmr_hd",
              markers: false
          }
      });

      // Para animation code
      gsap.to("#cstmer_fade", {
        opacity:1,
        duration: 1.5,
        ease: "linear",
        delay: 0.9,
        scrollTrigger: {
            trigger: "#cstmer_fade",
            markers: false
        }
      });

  }, []);


  return (
    <>
      <div className='cstr_sec mob_pd_LR tab_pd_LR snap_sec'>
        <div className='cstm_container'>
          <div className='row'>
            <div className='col-12'>
              {/* <p className='section_sub_heading ovrview_sub_hd cstm_bdr'>Customer Success is our success </p> */}
              <div className="animate_txt ">
                  <h2 ref={cstmr_hd} className='section_sub_heading ovrview_sub_hd cstm_bdr' id='cstmr_hd'>Customer Success is our success </h2>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-lg-6 col-md-12 col-12 cstmr_sucss_col1'>

              <p className='sub_para ovrview_subpara p_opacity' ref={cstmer_fade} id='cstmer_fade'>Being true partners in our customers’ growth, we pull out all stops to meet their business requirements. 365 days a year, 24 hours a day.</p>

              <p className='para ovrview_para p_opacity' ref={cstmer_fade} id='cstmer_fade'>Horizon Industrial Parks is proud to partner with leading global and national brands from diverse sectors and offer them modern, well planned, technology-enabled industrial and logistics spaces.
              </p>

              <p className='para ovrview_para p_opacity' ref={cstmer_fade} id='cstmer_fade'>
              Horizon portfolio comprises more than 45 brands from a variety of industry verticals including Third-party logistics, e-Commerce, Automotive & Auto Ancillaries, Aerospace, Engineering, FMCG and Retail.</p>

            </div>
            <div className='col-lg-6 col-md-8 col-12 p_opacity' ref={cstmer_fade} id='cstmer_fade'>
              <img src={require('../../assets/img/cutomer_growth.jpg')} className='cstmr_sucss_img'></img>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}
