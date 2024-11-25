import React from 'react'
import $ from "jquery";
import { useEffect, useRef } from 'react';
import { gsap } from '../../helper/common'
import '../../assets/css/governance.css'

export default function Governance() {

    // Heading text animation variable
    const governc_hd = useRef(null);
    const governc_para = useRef(null);

    useEffect(() => {

        // Heading text animation code
        gsap.to("#governc_hd", {
            y: 0,
            duration: 1.5,
            ease: "power4.out",
            delay: 0.3,
            scrollTrigger: {
                trigger: "#governc_hd",
                markers: false
            }
        });

        // Para animation code
        gsap.to("#governc_para", {
            opacity:1,
            duration: 1.5,
            ease: "linear",
            delay: 0.9,
            scrollTrigger: {
                trigger: "#governc_para",
                markers: false
            }
        });

        $('#assts_dev').on("click", function () {
            $('.assts_dev_img').fadeIn();
            $('.land_acq_img').fadeOut();
            $('.licen_dd_img').fadeOut();
            $('.facility_manag_img').fadeOut();
        });

        $('#land_acq').on("click", function () {
            $('.assts_dev_img').fadeOut();
            $('.land_acq_img').fadeIn();
            $('.licen_dd_img').fadeOut();
            $('.facility_manag_img').fadeOut();
        });

        $('#licen_dd').on("click", function () {
            $('.assts_dev_img').fadeOut();
            $('.land_acq_img').fadeOut();
            $('.licen_dd_img').fadeIn();
            $('.facility_manag_img').fadeOut();
        });

        $('#facility_manag').on("click", function () {
            $('.assts_dev_img').fadeOut();
            $('.land_acq_img').fadeOut();
            $('.licen_dd_img').fadeOut();
            $('.facility_manag_img').fadeIn();
        });



    })

    return (
        <>
 <div className='gvrnce_sec snap_sec esg_gv_sec ' id='governance'>

    <div className='row no_LR_margin iteg_row'>
        <div className='col-lg-6 col-md-12 col-12 ing_solu_col_1 gvr_col_1'>
            <div className='gvr_hd_dv'>
                <div className="animate_txt ">
                    <h2 ref={governc_hd} id='governc_hd' className="section_sub_heading gvr_hdg">Governance</h2>
                </div>
                <p className="sub_para gvr_para p_opacity" ref={governc_para} id='governc_para'>We uphold our ethics and our responsibility towards our stakeholders by investing in training and implementation to ensure 100% compliance. We also encourage our vendors and suppliers to practise transparency and adhere to all laws and regulations.</p>

            </div>

            {/* acoordian starts here */}
            <div className='p_opacity' ref={governc_para} id='governc_para'>
            <div id="accordion" className='' >
                <div className="card intg_card fst_card " >
                    <div className="card-header intg_card_header">
                        <a className="btn intg_btn" data-bs-toggle="collapse" href="#collapseOne" id='assts_dev'>
                            <span className='plus_icon accord_icon'>+</span><span className='minus_icon accord_icon'>-</span>
                            Compliance and reporting
                        </a>
                    </div>
                    <div id="collapseOne" className="collapse show" data-bs-parent="#accordion">
                        <div className="card-body intg_card_body_desc gvr_card">
                            <p className='accord_para gvr_accord '>We deploy a structured governance mechanism to cover all aspects of operational compliance:</p>
                            <ul className='gvr_list'>                                            
                                <li className='gvr_li'>Regular reviews via operational audits to maintain global standards and meet regulatory requirements in our facilities.</li>
                                <li className='gvr_li'>Submitting periodic environmental compliances for our operational parks.</li>
                                

                            </ul>
                        </div>
                    </div>
                </div>
                <div className="card intg_card">
                    <div className="card-header intg_card_header">
                        <a className="collapsed btn intg_btn" data-bs-toggle="collapse" href="#collapseThree" id='licen_dd'>
                            <span className='plus_icon accord_icon'>+</span><span className='minus_icon accord_icon'>-</span>
                            Data monitoring
                        </a>
                    </div>
                    <div id="collapseThree" className="collapse" data-bs-parent="#accordion">
                        <div className="card-body intg_card_body_desc gvr_card">
                            <p className='accord_para gvr_accord '>We monitor our progress on ESG initiatives by:</p>
                            <ul className='gvr_list'>                                            
                                <li className='gvr_li'>Creating a detailed roadmap for digitisation of operations.</li>
                                <li className='gvr_li'>Tracking consumption of energy and water.</li>
                                <li className='gvr_li'>Conducting 3rd party audits on a yearly basis to assess CO2 and GHG emissions.</li>                                           

                            </ul>
                        </div>
                    </div>
                </div>
                <div className="card intg_card">
                    <div className="card-header intg_card_header">
                        <a className="collapsed btn intg_btn" data-bs-toggle="collapse" href="#collapseTwo" id='land_acq'>
                            <span className='plus_icon accord_icon'>+</span><span className='minus_icon accord_icon'>-</span>
                            Statutory requirements
                        </a>
                    </div>
                    <div id="collapseTwo" className="collapse" data-bs-parent="#accordion">
                        <div className="card-body intg_card_body_desc gvr_card">
                            <ul className='gvr_list'>                                            
                                <li className='gvr_li'>We comply with all statutory norms.</li>
                                <li className='gvr_li'>We conform to POSH Policy, Code of Conduct, and Compliance Manual.</li>
                                <li className='gvr_li'>We say no to vendors and contractors who engage in child labour, forced labour, bribery, and corruption.</li>                                           

                            </ul>
                            {/* <p className='accord_para gvr_accord'>We comply with all statutory norms</p> */}
                            {/* <ul className='gvr_list'>                                            
                                <li className='gvr_li'>An ESG champion for each park to drive ESG implementation</li>
                                <li className='gvr_li'>Transparency and disclosure regarding our ESG performance in line with global standards and regulatory requirements</li>
                                
                            </ul> */}
                        </div>
                    </div>
                </div>

                
            </div>
            </div>
            {/* accordian end here */}



        </div>

        <div className='col-lg-6 col-md-12 col-12 ing_solu_col_2 p_opacity ' ref={governc_para} id='governc_para'>
            <img className='intg_sol_img assts_dev_img' src={require('../../assets/img/Compliances_reporting.jpg')} ></img>
            <img className='intg_sol_img land_acq_img' src={require('../../assets/img/Statutory_requirements.jpg')} ></img>
            <img className='intg_sol_img licen_dd_img' src={require('../../assets/img/Data_management.jpg')} ></img>
        

            <img className='intg_arrow' src={require('../../assets/img/integrate_arrow.png')} />
        </div>

    </div>


</div>

        </>
    )
}
