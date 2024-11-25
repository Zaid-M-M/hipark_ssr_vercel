import React from 'react'
import { useEffect, useRef } from "react";
import Contact_form from '../sections/contact_form';
import { gsap } from '../../helper/common'
import '../../assets/css/intg_solution.css'
import '../../assets/css/contact.css'

export default function Address_sec() {
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
            <div className="address_sec snap_sec">
                <div className="row no_LR_margin iteg_row">
                    <div className="col-lg-6 col-md-12 col-12 addrss_col_1">
                        {/* <h2 className='addrss-hdng section_heading'>Reach us</h2> */}
                            <h3 className='sub_para'>Corporate Office</h3>
                            <p className='para'>Horizon Industrial Parks Pvt Ltd<br /> Floor 15, Tower 1, One World Center<br /> Lower Parel, Mumbai 400 013</p>

                            <h3 className='sub_para'>Phone</h3>
                            <a className='para' href='tel:22 4158 1000'>+91 22 4158 1000</a><br></br>
                            <a className='para' href='tel:8879970705'>+91 88799 70705</a>

                            <h5 className='grand_para'>Business Hours</h5>                            
                            <h6 className='para no-mrgin'>Monday to Friday | 9 am to 6 pm IST</h6>

                            <h3 className='sub_para bottm-mrgin'>For Leasing Inquiries</h3>
                            
                            <h5 className='grand_para'>South Region</h5>                            
                            <h6 className='para no-mrgin'>Jeyaraj Antony</h6>
                            <a className='para' href="tel:+919008495077">+91 9008495077 | </a> <a className='para' href="mailto:jeyaraj.antony@hiparks.com">jeyaraj.antony@hiparks.com</a> <br></br>

                            <h5 className='grand_para'>West Region</h5>                            
                            <h6 className='para no-mrgin'>Muktesh Sheth</h6>
                            <a className='para' href="tel:+919922956032">+91 99229 56032 | </a> <a className='para' href="mailto:muktesh.sheth@HiParks.com">muktesh.sheth@HiParks.com</a>
                            
                            <h5 className='grand_para top-mrgin'>North and East Regions</h5>
                            <h6 className='para no-mrgin'>Aanchal Kaul</h6>
                            <a className='para' href="tel:+917899449668">+91 78994 49668 | </a> <a className='para' href="mailto:aanchal.kaul@hiparks.com">aanchal.kaul@HiParks.com</a>

                            <h3 className='sub_para'>For Land and Warehouse Investment Proposals</h3>
                            <a className='para' href="mailto:acquisitions@HiParks.com">acquisitions@HiParks.com</a>

                    </div>
                    <div className="col-lg-6 col-md-12 col-12 addrss_col_2">
                        {/* <img className='intg_sol_img assts_dev_img' src={require('../../assets/img/Land_acquisition.jpg')} ></img> */}
                        <Contact_form />
                    </div>
                </div>
            </div>
            
        </>
    )
}
