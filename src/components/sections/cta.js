import React from 'react'
import { useEffect, useRef } from "react";
import { gsap } from '../../helper/common'
import '../../assets/css/cta.css';
import $ from "jquery";

export default function Cta() {
    // Heading text animation variable
    const txt_animate_p2 = useRef(null);

    // Para animation variable
    const cta_aniamtion = useRef(null);

    useEffect(() => {
    
        // Heading text animation code
        gsap.to("#txt_animate_p2", {
            y:0,
            duration: 1.3,
            ease: "power4.out",
            delay: 0.3,
            scrollTrigger: {
                trigger: "#txt_animate_p2",
                markers: false
            }
        });

        // Para animation code
        gsap.to("#cta_aniamtion", {
            opacity:1,
            duration: 1.5,
            ease: "linear",
            delay: 0.9,
            scrollTrigger: {
                trigger: "#cta_aniamtion",
                markers: false
            }
        });

        $(".cta_btn").on("click", function () {
            $(".enquire_from_div").css("transform", "translateX(0%)");
            $(".enquire_overlay").fadeIn();
            $("body").css("overflow", "hidden");
            console.log('CTA Button trigger');
        });

    }, []);

  return (
    <>
      <div className='cta_sec snap_sec mob_pd_LR tab_pd_LR'>
                <div className='cstm_container '>
                
                    <div className='row'>
                        <div className='col-lg-9 col-md-9 col-12'>
                            <h2 className='cta_sec_heading p_opacity' ref={cta_aniamtion} id='cta_aniamtion'>Let’s co-create the right <br/>solution for your business</h2>
                        </div>

                        <div className='col-lg-3 col-md-3 col-12 enq_col'>
                            <a className='cta_btn p_opacity enq_bnt' ref={cta_aniamtion} id='cta_aniamtion'>Enquire Now <span><img src={require('../../assets/img/svg/sldr_right_arrow_blk.svg')}></img></span></a>
                        </div>
                    </div>

                </div>
            </div>
    </>
  )
}
