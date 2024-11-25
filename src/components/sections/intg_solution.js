import React from 'react'
import '../../assets/css/intg_solution.css'
import $ from "jquery";
import { useEffect ,useRef } from 'react';
import { gsap } from '../../helper/common'

export default function Intg_solution() {

    // Heading text animation variable
    const txt_animate_4 = useRef(null);
    const accordion = useRef(null);
    const iteg_btn = useRef(null);
    const intg_img_trans = useRef(null);
    
    useEffect(() => {

        // Heading text animation code
        gsap.to("#txt_animate_4", {
            y:0,
            duration: 1.5,
            ease: "power4.out",
            delay: 0.3,
            scrollTrigger: {
                trigger: "#txt_animate_4",
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

        // Btn animation code
        gsap.to("#iteg_btn", {
            opacity:1,
            duration: 1.5,
            ease: "linear",
            delay: 0.9,
            scrollTrigger: {
                trigger: "#iteg_btn",
                markers: false
            }
        });

        // Image animation code
        gsap.to("#intg_img_trans", {
            xPercent:100,
            duration: 0.5,
            ease: "linear",
            delay: 0.5,
            scrollTrigger: {
                trigger: "#intg_img_trans",
                markers: false
            }
        });
        
        $('#assts_dev').on("click", function() {
            $('.assts_dev_img').fadeIn();
            $('.land_acq_img').fadeOut();
            $('.licen_dd_img').fadeOut();
            $('.facility_manag_img').fadeOut();
            $('.assts_dev_img .intq_img_overlay').css('transform','translateX(100%)');

            setTimeout(function () {
                $('.land_acq_img .intq_img_overlay').css('transform','translateX(0%)');
                $('.licen_dd_img .intq_img_overlay').css('transform','translateX(0%)');
                $('.facility_manag_img .intq_img_overlay').css('transform','translateX(0%)');
            }, 500);
        });
        
        $('#land_acq').on("click", function() {
            $('.assts_dev_img').fadeOut();
            $('.land_acq_img').fadeIn();
            $('.licen_dd_img').fadeOut();
            $('.facility_manag_img').fadeOut();
            $('.land_acq_img .intq_img_overlay').css('transform','translateX(100%)');
            setTimeout(function () {
                $('.assts_dev_img .intq_img_overlay').css('transform','translateX(0%)');
                $('.licen_dd_img .intq_img_overlay').css('transform','translateX(0%)');
                $('.facility_manag_img .intq_img_overlay').css('transform','translateX(0%)');
            }, 500);
        });

        $('#licen_dd').on("click", function() {
            $('.assts_dev_img').fadeOut();
            $('.land_acq_img').fadeOut();
            $('.licen_dd_img').fadeIn();
            $('.facility_manag_img').fadeOut();
            $('.licen_dd_img .intq_img_overlay').css('transform','translateX(100%)');
            setTimeout(function () {
                $('.assts_dev_img .intq_img_overlay').css('transform','translateX(0%)');
                $('.land_acq_img .intq_img_overlay').css('transform','translateX(0%)');
                $('.facility_manag_img .intq_img_overlay').css('transform','translateX(0%)');
            }, 500);
        });

        $('#facility_manag').on("click", function() {
            $('.assts_dev_img').fadeOut();
            $('.land_acq_img').fadeOut();
            $('.licen_dd_img').fadeOut();
            $('.facility_manag_img').fadeIn();
            $('.facility_manag_img .intq_img_overlay').css('transform','translateX(100%)');
            setTimeout(function () {
                $('.assts_dev_img .intq_img_overlay').css('transform','translateX(0%)');
                $('.land_acq_img .intq_img_overlay').css('transform','translateX(0%)');
                $('.licen_dd_img .intq_img_overlay').css('transform','translateX(0%)');
            }, 500);
        });

       

    })

    return (
        <>

  
            <div className='intg_solution_sec snap_sec'>

                <div className='row no_LR_margin iteg_row'>
                    <div className='col-lg-6 col-md-12 col-12 ing_solu_col_1'>

                        <div className='intg_hd_dv'>
                            {/* <h2 className='big_heading intg_hd_1'>INTEGRATED</h2>
                            <h2 className='big_heading intg_hd_2'>Solutions</h2> */}

                            <div className='txt_1'>
                                <div className="animate_big_txt ">
                                    <span ref={txt_animate_4} id='txt_animate_4'>
                                        <h2  className='big_heading intg_hd_1' >INTEGRATED</h2>
                                    </span>
                                </div>
                            </div>
                            
                            <div className='txt_1'>
                                <div className="animate_big_txt ">
                                    <span ref={txt_animate_4} id='txt_animate_4'>
                                        <h2 className='big_heading intg_hd_2'>Solutions</h2>
                                    </span>
                                </div>
                            </div>

                        </div>

                        {/* acoordian starts here */}
                        <div  className='accord_dv p_opacity' ref={accordion} id="accordion">
                                <div className="card intg_card">
                                    <div className="card-header intg_card_header">
                                        <a className="btn intg_btn" data-bs-toggle="collapse" href="#collapseOne" id='assts_dev'>
                                            <span className='plus_icon accord_icon'>+</span><span className='minus_icon accord_icon'>-</span>
                                            Strategic Land Acquisition
                                        </a>
                                    </div>
                                    <div id="collapseOne" className="collapse show" data-bs-parent="#accordion">
                                        <div className="card-body intg_card_body_desc">
                                            <p className='accord_para'>We proactively identify locations to expand in markets where our customers aspire to grow.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="card intg_card">
                                    <div className="card-header intg_card_header">
                                        <a className="collapsed btn intg_btn" data-bs-toggle="collapse" href="#collapseThree" id='licen_dd'>
                                            <span className='plus_icon accord_icon'>+</span><span className='minus_icon accord_icon'>-</span>
                                            Park compliances and approvals
                                        </a>
                                    </div>
                                    <div id="collapseThree" className="collapse" data-bs-parent="#accordion">
                                        <div className="card-body intg_card_body_desc">
                                            <p className='accord_para'>We are well-versed with regulatory and statutory requirements and will ensure hassle free operations for our customers.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="card intg_card">
                                    <div className="card-header intg_card_header">
                                        <a className="collapsed btn intg_btn" data-bs-toggle="collapse" href="#collapseTwo" id='land_acq'>
                                            <span className='plus_icon accord_icon'>+</span><span className='minus_icon accord_icon'>-</span>
                                            Park construction and development
                                        </a>
                                    </div>
                                    <div id="collapseTwo" className="collapse" data-bs-parent="#accordion">
                                        <div className="card-body intg_card_body_desc">
                                            <p className='accord_para'>Our in-house projects and development experts are reimagining modern industrial and logistics parks as social cohorts providing world-class amenities and delivering bespoke solutions in the shortest time possible.</p>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="card intg_card">
                                    <div className="card-header intg_card_header">
                                        <a className="collapsed btn intg_btn" data-bs-toggle="collapse" href="#collapseFour" id='facility_manag'>
                                            <span className='plus_icon accord_icon'>+</span><span className='minus_icon accord_icon'>-</span>
                                            Property management
                                        </a>
                                    </div>
                                    <div id="collapseFour" className="collapse" data-bs-parent="#accordion">
                                        <div className="card-body intg_card_body_desc">
                                            <p className='accord_para'>Managing the upkeep of all our thoughtfully curated facilities to enable 24x7 operations, minimum downtime and safety and security for our customers are top priorities for our property management team.</p>
                                        </div>
                                    </div>
                                </div>
                        </div>
                        {/* accordian end here */}


                        <a href='/solutions' className='orange_arrow_btn p_opacity iteg_btn' ref={iteg_btn} id='iteg_btn'>Explore our 360° solutions</a>
                    </div>

                    <div className='col-lg-6 col-md-12 col-12 ing_solu_col_2'>
                        
                        <div className='intg_sol_img assts_dev_img'>
                            <div className='intq_img_overlay' ref={intg_img_trans} id='intg_img_trans'></div>
                            <img className='' src={require('../../assets/img/land-acquisition.webp')} ></img>
                        </div>
                        <div className='intg_sol_img land_acq_img'>
                            <div className='intq_img_overlay'></div>
                            <img className='' src={require('../../assets/img/park-construction.webp')} ></img>
                        </div>
                        <div className='intg_sol_img licen_dd_img'>
                            <div className='intq_img_overlay'></div>    
                            <img className='' src={require('../../assets/img/licensing-due-diligence.webp')} ></img>
                        </div>
                        <div className='intg_sol_img facility_manag_img'>
                            <div className='intq_img_overlay'></div>
                            <img className='' src={require('../../assets/img/integrate_solution.webp')} ></img>
                        </div>
                        
                        <img className='intg_arrow chrome_integ_img' src={require('../../assets/img/integrate_arrow.png')} /> 
                        <img className='intg_arrow safari_integ_img' src={require('../../assets/img/integrate_arrow_safari.png')} />   

                    </div>

                </div>


            </div>

       

        </>
    )
}
