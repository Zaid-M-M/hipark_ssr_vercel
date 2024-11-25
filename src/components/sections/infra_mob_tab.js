import React from 'react'
import { useEffect, useRef } from "react";
import $ from "jquery";
import { gsap } from '../../helper/common'
import '../../assets/css/park_infrastructure.css';
import '../../assets/css/intg_solution.css'
import '../../assets/css/infra_mob_tab.css'

export default function Infra_mob_tab() {

    // Heading text animation variable
    const txt_animate_p3 = useRef(null);

    const struct_fade = useRef(null);

    const accordion = useRef(null);

    const accordion2 = useRef(null);

    useEffect(() => {


        $('.tab-link').on('click', function() {
	
            var tabID = $(this).attr('data-tab');
            
            $(this).addClass('active').siblings().removeClass('active');
            
            $('#tab-'+tabID).addClass('active').siblings().removeClass('active');
        });

        // Heading text animation code
        gsap.to("#txt_animate_p3", {
            y: 0,
            duration: 1.3,
            ease: "power4.out",
            delay: 0.3,
            scrollTrigger: {
                trigger: "#txt_animate_p3",
                markers: false
            }
        });

        // Para animation code
        gsap.to("#struct_fade", {
            opacity:1,
            duration: 1.5,
            ease: "linear",
            delay: 0.9,
            scrollTrigger: {
                trigger: "#struct_fade",
                markers: false
            }
        });

        // Para animation code
        gsap.to("#accordion", {
            opacity:1,
            duration: 1.5,
            ease: "linear",
            delay: 0.9,
            scrollTrigger: {
                trigger: "#accordion",
                markers: false
            }
        });

        // Para animation code
        gsap.to("#accordion2", {
            opacity:1,
            duration: 1.5,
            ease: "linear",
            delay: 0.9,
            scrollTrigger: {
                trigger: "#accordion",
                markers: false
            }
        });


    }, []);


  return (
    <>

        <div className='mob_infra_sec'>
                <div className='cstm_container'>
                    <div className='row'>
                    <div className='col-12'>
                            <div className="sub-hdng">
                                <h2 className='section_sub_heading value_assets_sub_hd ext' id=''>Infrastructure Designed to Global Standards </h2>
                            </div>

                        <div className="tab-wrapper">
                                <ul className="tabs">
                                        <li className="tab-link active" data-tab="1">Block Exterior</li>
                                        <li className="tab-link" data-tab="2">Block Interior</li>
                                </ul>
                            </div>

                            <div className="content-wrapper">

                                <div id="tab-1" className="tab-content active">

                                    {/* acoordian starts here */}
                                        <div id="accordion" className='accord_dv p_opacity' ref={accordion} >
                                                <div className="card intg_card">
                                                    <div className="card-header intg_card_header">
                                                        <a className="btn intg_btn" data-bs-toggle="collapse" href="#collapseOne" id='assts_dev'>
                                                            <span className='plus_icon accord_icon'>+</span><span className='minus_icon accord_icon'>-</span>
                                                            Roof
                                                        </a>
                                                    </div>
                                                    <div id="collapseOne" className="collapse show" data-bs-parent="#accordion">
                                                        <div className="card-body intg_card_body_desc">
                                                            <p className='accord_para'>Standing seam roof with sturdy bare galvalume sheets</p>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="card intg_card">
                                                    <div className="card-header intg_card_header">
                                                        <a className="collapsed btn intg_btn" data-bs-toggle="collapse" href="#collapseTwo" id='licen_dd'>
                                                            <span className='plus_icon accord_icon'>+</span><span className='minus_icon accord_icon'>-</span>
                                                            Truck Apron
                                                        </a>
                                                    </div>
                                                    <div id="collapseTwo" className="collapse" data-bs-parent="#accordion">
                                                        <div className="card-body intg_card_body_desc">
                                                            <p className='accord_para'>16.5m concrete apron with 12m wide roads</p>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="card intg_card">
                                                    <div className="card-header intg_card_header">
                                                        <a className="collapsed btn intg_btn" data-bs-toggle="collapse" href="#collapseThree" id='land_acq'>
                                                            <span className='plus_icon accord_icon'>+</span><span className='minus_icon accord_icon'>-</span>
                                                            Building Height
                                                        </a>
                                                    </div>
                                                    <div id="collapseThree" className="collapse" data-bs-parent="#accordion">
                                                        <div className="card-body intg_card_body_desc">
                                                            <p className='accord_para'>12m at eaves</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                
                                                <div className="card intg_card">
                                                    <div className="card-header intg_card_header">
                                                        <a className="collapsed btn intg_btn" data-bs-toggle="collapse" href="#collapseFour" id='facility_manag'>
                                                            <span className='plus_icon accord_icon'>+</span><span className='minus_icon accord_icon'>-</span>
                                                            Building Structure
                                                        </a>
                                                    </div>
                                                    <div id="collapseFour" className="collapse" data-bs-parent="#accordion">
                                                        <div className="card-body intg_card_body_desc">
                                                            <p className='accord_para'>Pre-engineered buildings with optimised column spacing</p>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="card intg_card">
                                                    <div className="card-header intg_card_header">
                                                        <a className="collapsed btn intg_btn" data-bs-toggle="collapse" href="#collapseFive" id='facility_manag'>
                                                            <span className='plus_icon accord_icon'>+</span><span className='minus_icon accord_icon'>-</span>
                                                            Office Area
                                                        </a>
                                                    </div>
                                                    <div id="collapseFive" className="collapse" data-bs-parent="#accordion">
                                                        <div className="card-body intg_card_body_desc">
                                                            <p className='accord_para'>Ground and bare-shell mezzanine floor on 2.5% of total area</p>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="card intg_card">
                                                    <div className="card-header intg_card_header">
                                                        <a className="collapsed btn intg_btn" data-bs-toggle="collapse" href="#collapseSeven" id='facility_manag'>
                                                            <span className='plus_icon accord_icon'>+</span><span className='minus_icon accord_icon'>-</span>
                                                            Parking
                                                        </a>
                                                    </div>
                                                    <div id="collapseSeven" className="collapse" data-bs-parent="#accordion">
                                                        <div className="card-body intg_card_body_desc">
                                                            <p className='accord_para'>2 and 4-wheeler parking, truck parking designed for peak period load</p>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="card intg_card">
                                                    <div className="card-header intg_card_header">
                                                        <a className="collapsed btn intg_btn" data-bs-toggle="collapse" href="#collapseEight" id='facility_manag'>
                                                            <span className='plus_icon accord_icon'>+</span><span className='minus_icon accord_icon'>-</span>
                                                            SECURITY
                                                        </a>
                                                    </div>
                                                    <div id="collapseEight" className="collapse" data-bs-parent="#accordion">
                                                        <div className="card-body intg_card_body_desc">
                                                            <p className='accord_para'>24*7 CCTV surveillance at main gate</p>
                                                        </div>
                                                    </div>
                                                </div>
                                        </div>
                                        {/* accordian end here */}

                                </div>

                                <div id="tab-2" className="tab-content">

                                    {/* acoordian starts here */}
                                    <div id="accordion2" className='accord_dv p_opacity' ref={accordion2} >
                                                <div className="card intg_card">
                                                    <div className="card-header intg_card_header">
                                                        <a className="btn intg_btn" data-bs-toggle="collapse" href="#collapseOne2" id='assts_dev'>
                                                            <span className='plus_icon accord_icon'>+</span><span className='minus_icon accord_icon'>-</span>
                                                            EFFICIENT LIGHTING
                                                        </a>
                                                    </div>
                                                    <div id="collapseOne2" className="collapse show" data-bs-parent="#accordion2">
                                                        <div className="card-body intg_card_body_desc">
                                                            <p className='accord_para'>Skylights covering 3-5% of roof areas, LED light fixtures</p>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="card intg_card">
                                                    <div className="card-header intg_card_header">
                                                        <a className="collapsed btn intg_btn" data-bs-toggle="collapse" href="#collapseTwo2" id='licen_dd'>
                                                            <span className='plus_icon accord_icon'>+</span><span className='minus_icon accord_icon'>-</span>
                                                            WALL
                                                        </a>
                                                    </div>
                                                    <div id="collapseTwo2" className="collapse" data-bs-parent="#accordion2">
                                                        <div className="card-body intg_card_body_desc">
                                                            <p className='accord_para'>Pre-cast concrete walls/ block walls up to 3.6 m height</p>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="card intg_card">
                                                    <div className="card-header intg_card_header">
                                                        <a className="collapsed btn intg_btn" data-bs-toggle="collapse" href="#collapseThree3" id='land_acq'>
                                                            <span className='plus_icon accord_icon'>+</span><span className='minus_icon accord_icon'>-</span>
                                                            FLOOR
                                                        </a>
                                                    </div>
                                                    <div id="collapseThree3" className="collapse" data-bs-parent="#accordion2">
                                                        <div className="card-body intg_card_body_desc">
                                                            <p className='accord_para'>UDL 5T/sqm, FM2-compliant design</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                
                                                <div className="card intg_card">
                                                    <div className="card-header intg_card_header">
                                                        <a className="collapsed btn intg_btn" data-bs-toggle="collapse" href="#collapseFour4" id='facility_manag'>
                                                            <span className='plus_icon accord_icon'>+</span><span className='minus_icon accord_icon'>-</span>
                                                            FIRE PROTECTION
                                                        </a>
                                                    </div>
                                                    <div id="collapseFour4" className="collapse" data-bs-parent="#accordion2">
                                                        <div className="card-body intg_card_body_desc">
                                                            <p className='accord_para'>Fire detection, alarms, fire escape doors, K160 and K80 sprinklers, external hydrants</p>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="card intg_card">
                                                    <div className="card-header intg_card_header">
                                                        <a className="collapsed btn intg_btn" data-bs-toggle="collapse" href="#collapseFive5" id='facility_manag'>
                                                            <span className='plus_icon accord_icon'>+</span><span className='minus_icon accord_icon'>-</span>
                                                            VENTILATION
                                                        </a>
                                                    </div>
                                                    <div id="collapseFive5" className="collapse" data-bs-parent="#accordion2">
                                                        <div className="card-body intg_card_body_desc">
                                                            <p className='accord_para'>3-6 air changes, passive ventilation through louvers, and roof monitor</p>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="card intg_card">
                                                    <div className="card-header intg_card_header">
                                                        <a className="collapsed btn intg_btn" data-bs-toggle="collapse" href="#collapseSeven7" id='facility_manag'>
                                                            <span className='plus_icon accord_icon'>+</span><span className='minus_icon accord_icon'>-</span>
                                                            DOCK AREA
                                                        </a>
                                                    </div>
                                                    <div id="collapseSeven7" className="collapse" data-bs-parent="#accordion2">
                                                        <div className="card-body intg_card_body_desc">
                                                            <p className='accord_para'>Dock height 1.2m with rolling shutters, dock pits</p>
                                                        </div>
                                                    </div>
                                                </div>

                                        </div>
                                        {/* accordian end here */}

                                </div>

                            </div>


                        
                    </div>
                    </div>
                </div>
            </div>      
    </>
  )
}
