import React from 'react'
import { useEffect, useRef } from "react";
import $ from "jquery";
import { Link } from 'react-router-dom';
import { gsap } from '../../helper/common'
import '../../assets/css/vlu_integ_servc_sec.css';
import '../../assets/css/agile_eco.css';

export default function Vlu_integ_servc() {
    // Heading text animation variable

    const vlu_box1 = useRef(null);
    const vlu_box2 = useRef(null);
    const vlu_box3 = useRef(null);
    const vlu_box4 = useRef(null);

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
        gsap.to("#vlu_box1", {
            opacity:1,
            duration: 1.5,
            ease: "linear",
            delay: 0.9,
            scrollTrigger: {
                trigger: "#vlu_box1",
                markers: false
            }
        });
        gsap.to("#vlu_box2", {
            opacity:1,
            duration: 1.5,
            ease: "linear",
            delay: 0.9,
            scrollTrigger: {
                trigger: "#vlu_box2",
                markers: false
            }
        });
        gsap.to("#vlu_box3", {
            opacity:1,
            duration: 1.5,
            ease: "linear",
            delay: 0.9,
            scrollTrigger: {
                trigger: "#vlu_box3",
                markers: false
            }
        });
        gsap.to("#vlu_box4", {
            opacity:1,
            duration: 1.5,
            ease: "linear",
            delay: 0.9,
            scrollTrigger: {
                trigger: "#vlu_box4",
                markers: false
            }
        });

        $('.land_outer').on("click", function() { 
            $('.vlu_integ_sld_box').css('transform','translateX(0%)');
            $('.land_acq').fadeIn();
            $('body').css('overflow','hidden');
            if($(window).width() >1023)
            {  
                $('html, body').animate({
                scrollTop: $(".vlu_integ_servc_sec").offset().top
                }, 100);
            }
        });

        $('.lice_outer').on("click", function() { 
            $('.vlu_integ_sld_box').css('transform','translateX(0%)');
            $('.licen_due').fadeIn();
            $('body').css('overflow','hidden');
            if($(window).width() >1023)
            {  
                $('html, body').animate({
                scrollTop: $(".vlu_integ_servc_sec").offset().top
                }, 100);
            }
        });

        $('.const_outer').on("click", function() { 
            $('.vlu_integ_sld_box').css('transform','translateX(0%)');
            $('.prk_const').fadeIn();
            $('body').css('overflow','hidden');
            if($(window).width() >1023)
            {  
                $('html, body').animate({
                scrollTop: $(".vlu_integ_servc_sec").offset().top
                }, 100);
            }
        });

        $('.faci_outer').on("click", function() { 
            $('.vlu_integ_sld_box').css('transform','translateX(0%)');
            $('.facility_manag').fadeIn();
            $('body').css('overflow','hidden');

            if($(window).width() >1023)
            {  
                $('html, body').animate({
                scrollTop: $(".vlu_integ_servc_sec").offset().top
                }, 100);
            }
        });
        
        $('.close_sld_box').on("click", function() { 
            $('.vlu_integ_sld_box').css('transform','translateX(100%)');
            $('.vlue_integ_cont_LB').fadeOut();
            $('body').css('overflow','auto');
        });

    }, []);

  return (
    <>
        <div className='vlu_integ_servc_sec snap_sec mob_pd_LR tab_pd_LR'>
        <div className='cstm_container'>
                <div className='row'>
                    <div className='col-12 vlu_box_pd'>

                        <div className='row'>
                            <div className='col-lg-6 col-md-6 col-12 no_padding vlu_col1'>

                                <Link to='/solutions/strategic-land-acquisition' className=''>
                                    <div className='vlu_intg_srvc_outer land_outer p_opacity' ref={vlu_box1} id='vlu_box1'>
                                        <div className='vlu_intg_srvc_inner'>
                                            <img src={require('../../assets/img/Land_Acquisition1.jpg')}></img>
                                            <div className='srvc_content '>
                                                <h3>Strategic Land acquisition</h3>
                                                <div>
                                                    <p>At Horizon Industrial Parks, we invest substantial resources in finding the right locations.</p>
                                                    <Link to='/solutions/strategic-land-acquisition' className='ladn_acq_btn'>Read More</Link>
                                                </div>  
                                            </div>
                                            <div className='ovrlay_box'></div>
                                        </div>
                                    </div>
                                </Link>

                            </div> 
                            <div className='col-lg-6 col-md-6 col-12 no_padding vlu_col2'>

                                <Link to='/solutions/park-compliances-and-approvals'>
                                    <div className='vlu_intg_srvc_outer lice_outer p_opacity' ref={vlu_box2} id='vlu_box2'>
                                        <div className='vlu_intg_srvc_inner'>
                                            <img src={require('../../assets/img/Licensing_due.jpg')}></img>
                                            <div className='srvc_content licensing_content '>
                                                <h3>Park compliances and approvals</h3>
                                                <div>
                                                    <p>We are well-versed and experienced in statutory and regulatory framework to support seamless customer operations.</p>
                                                    <Link to='/solutions/park-compliances-and-approvals'>Read More</Link>
                                                </div>  
                                            </div>
                                            <div className='ovrlay_box'></div>
                                        </div>
                                    </div>
                                </Link>

                            </div>
                            <div className='col-lg-6 col-md-6 col-12 no_padding vlu_col3'>

                                <Link to='/solutions/park-construction-and-development'>
                                    <div className='vlu_intg_srvc_outer const_outer p_opacity' ref={vlu_box3} id='vlu_box3'>
                                        <div className='vlu_intg_srvc_inner'>
                                            <img src={require('../../assets/img/Park_construction1.jpg')}></img>
                                            <div className='srvc_content '>
                                                <h3>Park construction and development</h3>
                                                <div>
                                                    <p>Our in-house projects and development experts are reimagining industrial and logistics parks as social cohorts.</p>
                                                    <Link to='/solutions/park-construction-and-development'>Read More</Link>
                                                </div>  
                                            </div>
                                            <div className='ovrlay_box'></div>
                                        </div>
                                    </div>
                                </Link>

                            </div>
                            <div className='col-lg-6 col-md-6 col-12 no_padding vlu_col4'>

                                <Link to='/solutions/property-management'>
                                    <div className='vlu_intg_srvc_outer faci_outer p_opacity' ref={vlu_box4} id='vlu_box4'>
                                        <div className='vlu_intg_srvc_inner'>
                                            <img src={require('../../assets/img/Facilities_management.jpg')}></img>
                                            <div className='srvc_content oprations_contnt'>
                                                <h3>Property management </h3>
                                                <div>
                                                    <p>Managing the upkeep of all our facilities and ensuring 24x7 operations for our customers are top priorities for our property management team.</p>
                                                    <Link to='/solutions/property-management'>Read More</Link>
                                                </div>  
                                            </div>
                                            <div className='ovrlay_box'></div>
                                        </div>
                                    </div>
                                </Link>

                            </div>
                        </div>
                    
                    </div>
                </div>
            </div>

            {/*--------------------------------- Value Integrate Service lightbox */}
            {/* <div className='vlu_integ_sld_box '>

                    <img className='close_sld_box' src={require('../../assets/img/svg/close_icon_wht.svg')}></img>

                    Land acquisition Slide
                    <div className='land_acq vlue_integ_cont_LB'>
                        <div className='row'>
                            <div className='col-lg-7 col-md-12 col-12 vlue_dls_col1'>
                                <h4 className='section_sub_heading ovrview_sub_hd '>Strategic Land Acquisition</h4>

                                <div className='vlu_scroll_div'>
                                    <p className='sub_para'>At Horizon Industrial Parks, we invest substantial resources in finding the right locations to proactively expand in regions where our customers aspire to grow. Our park locations are judiciously chosen for their strategic points of access, the supportive community and surrounding resources, capacity to scale up, and local government support.</p>
                                    <p className='para'>Our land acquisition and investment strategy are derived from our in-depth knowledge of the Indian supply chain dynamics and trends, our deep understanding of our customers' infrastructure requirements, the market knowledge required to identify prospective catchment areas and the commitment to excel in delivering exceptionally engineered warehousing facilities that are on par with global standards and certifications.</p>
                                    <p className='para'>Our parks are located in eight markets across India including Delhi NCR, Pune, Bengaluru, Hyderabad. We are also expanding our presence into other Tier I & Tier II markets and acquiring land / ready assets within city limits for mid and last mile distribution and value-added services. </p>
                                </div>
                            </div>
                            <div className='col-lg-5 col-md-12 col-12 vlue_dls_col2'>
                                <img src={require('../../assets/img/Land_acquisition.jpg')}></img>
                            </div>
                        </div>
                    </div>

                    Park compliances Slide
                    <div className='licen_due vlue_integ_cont_LB'>
                        <div className='row'>
                            <div className='col-lg-7 col-md-12 col-12 vlue_dls_col1'>
                                <h4 className='section_sub_heading ovrview_sub_hd '>Park compliances and approvals</h4>

                                <div className='vlu_scroll_div'>
                                    <p className='sub_para'>We are well-versed and experienced in statutory and regulatory framework to support seamless customer operations. Legal due diligence is done at the time of land or asset acquisitions to ensure clear land title. </p>
                                </div>
                            </div>
                            <div className='col-lg-5 col-md-12 col-12 vlue_dls_col2'>
                                <img src={require('../../assets/img/Licensing_due_diligence.jpg')}></img>
                            </div>
                        </div>
                    </div>

                    Park construction Slide
                    <div className='prk_const vlue_integ_cont_LB'>
                        <div className='row'>
                            <div className='col-lg-7 col-md-12 col-12 vlue_dls_col1'>
                                <h4 className='section_sub_heading ovrview_sub_hd '>Park Construction and Development</h4>

                                <div className='vlu_scroll_div'>
                                    <p className='sub_para'>Our in-house project and development experts are reimagining industrial and logistics parks as social cohorts. They are creating humanistic spaces within industrial setups, that care for the environment and people.</p>
                                    <p className='para'>Our vast industry experience and long-standing relationships with leading architects, consultants and contractors, enables us to accelerate the design process, maximise value-engineering, provide reliable technical expertise and post-delivery support to our customers.</p>
                                    <p className='para'>We cater to all kinds of requirements including read-to-move, built-to-suit and multi-level facilities. We have well-planned plug-and-play facilities where our customers can simply move in and get to work. Our built-to-suit facilities can be 100% customized to serve complex requirements of manufacturing and process industries. We offer real-time construction updates to keep our customers informed about the progress of their leased units. </p>
                                    <p className='para'>All parks and buildings are NBC compliant. They are built to global standards of institutional players, using sustainable materials and construction processes that are aimed at reducing the environmental impact of our activities.  </p>
                                </div>
                            </div>
                            <div className='col-lg-5 col-md-12 col-12 vlue_dls_col2'>
                                <img src={require('../../assets/img/Park_construction.jpg')}></img>
                            </div>
                        </div>
                    </div>

                    Facilities management Slide
                    <div className='facility_manag vlue_integ_cont_LB'>
                        <div className='row'>
                            <div className='col-lg-7 col-md-12 col-12 vlue_dls_col1'>
                                <h4 className='section_sub_heading ovrview_sub_hd '>Property management  </h4>

                                <div className='vlu_scroll_div'>
                                    <p className='sub_para'>Managing the upkeep of all our facilities and ensuring 24x7 operations for our customers are top priorities for our property management team.</p>
                                    <p className='para'>We manage and maintain the infrastructure and ensure a greener and more inviting landscape at our parks.</p>
                                    <p className='para'>Through round-the clock-surveillance, regular safety drills and equipment tests, the facility management team ensures safety and security of our customers and their assets. </p>
                                    <p className='para'>Our 24-hour quick response team collaborates with local hospitals, law enforcement authorities and fire departments to tackle any emergency. In addition, our disaster management planning services, medical centres and ambulance services cater to emergency first-aid requirements of our customers in every Horizon park, giving them complete peace of mind.</p>
                                    <p className='para'>We maintain high hygiene standards within our parks by professional handling and disposal of all kinds of waste materials. </p>
                                </div>
                            </div>
                            <div className='col-lg-5 col-md-12 col-12 vlue_dls_col2'>
                                <img src={require('../../assets/img/integrate_solution.jpg')}></img>
                            </div>
                        </div>
                    </div>


            </div> */}

            

        </div>
    </>
  )
}





