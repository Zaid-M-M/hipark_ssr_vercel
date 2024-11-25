import React from 'react'
import { useEffect, useRef } from "react";
import { gsap } from '../../../helper/common'
import Contact_form from '../../sections/contact_form';
import '../../../assets/css/intg_solution.css'
import '../../../assets/css/contact.css'
import '../../../assets/css/client_form.css'

export default function Client_form_sec() {

    // gloabl line GSAP
    

    // Heading text animation variable
    const txt_animate = useRef(null);

    // Image animation variable
    const img_animation = useRef(null);

    // Para animation variable
    const para_aniamtion = useRef(null);

    // video tag play code
    const videoEl = useRef(null);
    const attemptPlay = () => {
        videoEl &&
            videoEl.current &&
            videoEl.current.play().catch((error) => {
                console.error("Error attempting to play", error);
            });
    };

    useEffect(() => {

        // Heading text animation code
        gsap.to("#txt_animate", {
            y: 0,
            duration: 1.3,
            ease: "power4.out",
            delay: 0.3,
            scrollTrigger: {
                trigger: "#txt_animate",
                markers: false
            }
        });

        // Image animation code
        gsap.to("#img_animation", {
            xPercent: 100,
            duration: 1,
            ease: "linear",
            delay: 0.8,
            scrollTrigger: {
                trigger: "#img_animation",
                markers: false
            }
        });

        // Para animation code
        gsap.to("#para_aniamtion", {
            opacity: 1,
            duration: 1.5,
            ease: "linear",
            delay: 0.9,
            scrollTrigger: {
                trigger: "#para_aniamtion",
                markers: false
            }
        });




        attemptPlay();
    }, []);

    return (
        <>
        <hr className='hr'></hr>
            <div className="address_sec snap_sec">
                <div className="row no_LR_margin iteg_row">
                    <div className="col-lg-6 col-md-12 col-12 addrss_col_1 clnt_frm_col">

                        <div className='client_form_info'>
          
                            <div className='client_form_info_inner'>
                                {/* <h2 className='addrss-hdng section_heading'>Reach us</h2> */}
                                <h3 className='section_sub_heading blck_crl'>LET’S CO-CREATE THE RIGHTSOLUTION FOR YOUR BUSINESS</h3>
                                                            <p className='para clnt_frm_para'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non augue quis mauris egestas vestibulum. Curabitur eleifend, ante nec commodo ultrices, enim mauris mollis ipsum,</p>
                            </div>

                        </div>
                        

                    </div>
                    <div className="col-lg-6 col-md-12 col-12 addrss_col_2 client_contact_form_col">
                        {/* <img className='intg_sol_img assts_dev_img' src={require('../../assets/img/Land_acquisition.jpg')} ></img> */}
                        <Contact_form />
                    </div>
                </div>
            </div>
            
        </>
    )
}
