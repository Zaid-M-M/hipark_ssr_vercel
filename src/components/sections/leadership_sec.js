import React from 'react'
import '../../assets/css/leadership_sec.css'
import { useEffect, useRef } from "react";
import $ from "jquery";
import { gsap } from '../../helper/common'

export default function Leadership_sec() {

  // Heading text animation variable
  const leader_hd_anmt = useRef(null);

  // Para animation variable
  const leader_para = useRef(null);


  useEffect(() => {

    // Heading text animation code
    gsap.to("#leader_hd_anmt", {
      y: 0,
      duration: 1.3,
      ease: "power4.out",
      delay: 0.3,
      scrollTrigger: {
        trigger: "#leader_hd_anmt",
        markers: false
      }
    });

    // Para animation code
    gsap.to("#leader_para", {
      opacity: 1,
      duration: 1.5,
      ease: "linear",
      delay: 0.9,
      scrollTrigger: {
        trigger: "#leader_para",
        markers: false
      }
    });



    $('.rahul').on("click", function () {
      $('.team_slidebox').css('transform', 'translateX(0%)');
      $('.rahul_cont').fadeIn();
      $('.leader_overlay').fadeIn();
      $('body').css('overflow', 'hidden');

      if ($(window).width() > 1023) {
        $('html, body').animate({
          scrollTop: $(".team_row_sec").offset().top
        }, 200);
      }

    });

    $('.narayn').on("click", function () {
      $('.team_slidebox').css('transform', 'translateX(0%)');
      $('.narayn_cont').fadeIn();
      $('.leader_overlay').fadeIn();
      $('body').css('overflow', 'hidden');

      if ($(window).width() > 1023) {
        $('html, body').animate({
          scrollTop: $(".team_row_sec").offset().top
        }, 200);
      }

    });

    $('.mahendra').on("click", function () {
      $('.team_slidebox').css('transform', 'translateX(0%)');
      $('.mahendra_cont').fadeIn();
      $('.leader_overlay').fadeIn();
      $('body').css('overflow', 'hidden');

      if ($(window).width() > 1023) {
        $('html, body').animate({
          scrollTop: $(".team_row_sec").offset().top
        }, 200);
      }

    });

    $('.pooja').on("click", function () {
      $('.team_slidebox').css('transform', 'translateX(0%)');
      $('.pooja_cont').fadeIn();
      $('.leader_overlay').fadeIn();
      $('body').css('overflow', 'hidden');

      if ($(window).width() > 1023) {
        $('html, body').animate({
          scrollTop: $(".team_row_sec").offset().top
        }, 200);
      }

    });

    $('.kunal').on("click", function () {
      $('.team_slidebox').css('transform', 'translateX(0%)');
      $('.kunal_cont').fadeIn();
      $('.leader_overlay').fadeIn();
      $('body').css('overflow', 'hidden');

      if ($(window).width() > 1023) {
        $('html, body').animate({
          scrollTop: $(".team_row_sec").offset().top
        }, 200);
      }

    });

    $('.aviraj').on("click", function () {
      $('.team_slidebox').css('transform', 'translateX(0%)');
      $('.aviraj_cont').fadeIn();
      $('.leader_overlay').fadeIn();
      $('body').css('overflow', 'hidden');

      if ($(window).width() > 1023) {
        $('html, body').animate({
          scrollTop: $(".team_row_sec").offset().top
        }, 200);
      }

    });

    $('.taruna').on("click", function () {
      $('.team_slidebox').css('transform', 'translateX(0%)');
      $('.taruna_cont').fadeIn();
      $('.leader_overlay').fadeIn();
      $('body').css('overflow', 'hidden');

      if ($(window).width() > 1023) {
        $('html, body').animate({
          scrollTop: $(".team_row_sec").offset().top
        }, 200);
      }

    });

    $('.swati').on("click", function () {
      $('.team_slidebox').css('transform', 'translateX(0%)');
      $('.swati_cont').fadeIn();
      $('.leader_overlay').fadeIn();
      $('body').css('overflow', 'hidden');

      if ($(window).width() > 1023) {
        $('html, body').animate({
          scrollTop: $(".team_row_sec").offset().top
        }, 200);
      }
    });

    $('.mitesh').on("click", function () {
      $('.team_slidebox').css('transform', 'translateX(0%)');
      $('.mitesh_cont').fadeIn();
      $('.leader_overlay').fadeIn();
      $('body').css('overflow', 'hidden');

      if ($(window).width() > 1023) {
        $('html, body').animate({
          scrollTop: $(".team_row_sec").offset().top
        }, 200);
      }
    });


    $('.close_tm_box').on("click", function () {
      $('.team_slidebox').css('transform', 'translateX(100%)');
      $('body').css('overflow-y', 'auto');
      $('.leader_overlay').fadeOut();
      $('.tm_cont_box').fadeOut();
    });

    $('.leader_overlay').on("click", function () {
      $('.team_slidebox').css('transform', 'translateX(100%)');
      $('body').css('overflow-y', 'auto');
      $('.leader_overlay').fadeOut();
      $('.tm_cont_box').fadeOut();
    });



  }, []);
  return (
    <div className='leadership_sec mob_pd_LR tab_pd_LR' id='leadership'>


      <div className='cstm_container'>

        <div className='row'>

          <div className='col-12'>
            <p className='section_name team_head p_opacity' ref={leader_para} id='leader_para'>TEAM OF INDUSTRY VETERANS</p>
          </div>

          <div className='col-lg-6 col-md-6 col-12'>
            <div className="animate_txt leadership_ttl">
              <h2 className='section_heading' ref={leader_hd_anmt} id='leader_hd_anmt'>LEADERSHIP</h2>
            </div>
            <div className="animate_txt ">
              <h2 className='section_heading' ref={leader_hd_anmt} id='leader_hd_anmt'>TEAM</h2>
            </div>
          </div>
          <div className='col-lg-6 col-md-6 col-12'>
            <p className='sub_para ovrview_subpara leadership_ttl_1 p_opacity' ref={leader_para} id='leader_para'>We see things differently, proactively find opportunities with an agile team, and create exceptional value for our customers, partners, and employees.</p>
          </div>
        </div>

      </div>


      <div className='team_row_sec'>

        <div className='cstm_container'>

          <div className='row tm_row1 p_opacity' ref={leader_para} id='leader_para'>
{/* 
            <div className='col-lg-3 col-md-3 col-12 lead_card'>
              <div className='card tm_card rahul'>
                <img className='leader_img' src={require('../../assets/img/explore/Rahul_pandit.jpg')} ></img>
                <div className='card-body tm_body'>
                  <h4 className='card-title tm_content'>Rahul Pandit</h4>
                  <p className='card-text tm_content_1'>Chief Executive Officer</p>
                </div>
              </div>
            </div> */}


            <div className='col-lg-3 col-md-3 col-12 lead_card'>
              <div className='card tm_card narayn'>
                <img className='leader_img' src={require('../../assets/img/explore/RK_narayan.jpg')} ></img>
                <div className='card-body tm_body'>
                  <h4 className='card-title tm_content'>RK Narayan</h4>
                  <p className='card-text tm_content_1'>President Strategy {'&'} Business Development</p>
                </div>
              </div>
            </div>


            <div className='col-lg-3 col-md-3 col-12 lead_card'>
              <div className='card tm_card mahendra'>
                <img className='leader_img' src={require('../../assets/img/explore/Mahendra_waghule.jpg')} ></img>
                <div className='card-body tm_body'>
                  <h4 className='card-title tm_content'>Mahendra Waghule</h4>
                  <p className='card-text tm_content_1'>Head of Projects {'&'} Development</p>
                </div>
              </div>
            </div>




            <div className='col-lg-3 col-md-3 col-12 lead_card'>
              <div className='card tm_card pooja'>
                <img className='leader_img' src={require('../../assets/img/explore/Pooja_malik.jpg')} ></img>
                <div className='card-body tm_body'>
                  <h4 className='card-title tm_content'>Pooja Malik</h4>
                  <p className='card-text tm_content_1'>Head of Leasing</p>
                </div>
              </div>
            </div>


            <div className='col-lg-3 col-md-3 col-12 lead_card'>
              <div className='card tm_card kunal'>
                <img className='leader_img' src={require('../../assets/img/explore/Kunal_shah.jpg')} ></img>
                <div className='card-body tm_body'>
                  <h4 className='card-title tm_content'>Kunal Shah</h4>
                  <p className='card-text tm_content_1'>Chief Financial Officer</p>
                </div>
              </div>
            </div>



            <div className='col-lg-3 col-md-3 col-12 lead_card lead_card_2'>
              <div className='card tm_card aviraj'>
                <img className='leader_img' src={require('../../assets/img/explore/Aviraj_nandan.jpg')} ></img>
                <div className='card-body tm_body'>
                  <h4 className='card-title tm_content'>Aviraj Nandan</h4>
                  <p className='card-text tm_content_1'>Head of Human Resources</p>
                </div>
              </div>
            </div>


            <div className='col-lg-3 col-md-3 col-12 lead_card lead_card_2'>
              <div className='card tm_card taruna'>
                <img className='leader_img' src={require('../../assets/img/explore/Taruna_mahajan.jpg')} ></img>
                <div className='card-body tm_body'>
                  <h4 className='card-title tm_content'>Taruna Mahajan</h4>
                  <p className='card-text tm_content_1'>Head of Marketing</p>
                </div>
              </div>
            </div>


            <div className='col-lg-3 col-md-3 col-12 lead_card lead_card_2'>
              <div className='card tm_card swati'>
                <img className='leader_img' src={require('../../assets/img/explore/Swati_karmarkar.jpg')} ></img>
                <div className='card-body tm_body'>
                  <h4 className='card-title tm_content'>Swati Karmarkar</h4>
                  <p className='card-text tm_content_1'>Head of Legal</p>
                </div>
              </div>
            </div>

            <div className='col-lg-3 col-md-3 col-12 lead_card lead_card_2'>
              <div className='card tm_card mitesh'>
                <img className='leader_img' src={require('../../assets/img/explore/Mitesh_Garg.jpg')} ></img>
                <div className='card-body tm_body'>
                  <h4 className='card-title tm_content'>Mitesh Garg</h4>
                  <p className='card-text tm_content_1'>Head of Technology</p>
                </div>
              </div>
            </div>


          </div>
        </div>

        <div className='team_slidebox'>
          <img className='close_tm_box' src={require('../../assets/img/svg/close_icon.svg')}></img>

          <div className='row'>
            <div className='col-12'>

              {/* Rahul Content */}
              {/* <div className='rahul_cont tm_cont_box'>

                <div className='row'>
                  <div className='col-lg-8 col-md-12 col-12 tm_fullcontent_col'>
                    <h4 className='tm_name_LB'>Rahul Pandit</h4>
                    <h5 className='tm_designation_LB'>Chief Executive Officer</h5>
                    <div className='tm_p_dv'>
                      <p className='para'>Rahul has 30 years of experience building and transforming businesses and has launched multiple award-winning brands and programs.</p>
                      <p className='para'>He was earlier the founding MD & CEO of Hamstede Living, a Warburg Pincus JV for rental housing, and has also served as the MD & CEO of TATA Group's Ginger Hotels. As part of the Tata Leadership Group, he mentored high-potential CXOs across the conglomerate's entities.</p>

                      <p className='para'>Rahul was the founding team member, President & ED of Lemon Tree Hotels, where the company's 'Disability Hiring' initiative was recognised with a National Award by the President of India. The company was also ranked amongst the Top 10 Great Places to Work in India.</p>

                    </div>
                    <a className='linkedin_box' href='https://www.linkedin.com/in/rahulpandit1/' target='_blank'>
                      <img src={require('../../assets/img/svg/linkedin_icon.svg')} ></img>
                    </a>
                  </div>

                  <div className='col-lg-4 col-md-12 col-12 tm_full_img_col'>
                    <img src={require('../../assets/img/explore/rahul_pandit_profile.jpg')}></img>
                  </div>
                </div>

              </div> */}

              {/* Narayan Content */}
              <div className='narayn_cont tm_cont_box'>

                <div className='row'>
                  <div className='col-lg-8 col-md-12 col-12 tm_fullcontent_col'>

                    <h4 className='tm_name_LB'>RK Narayan</h4>
                    <h5 className='tm_designation_LB'>President Strategy {'&'} Business Development</h5>

                    <div className='tm_p_dv'>
                      <p className='para'>RK’s expertise in facilitating expansion through partnerships and acquisitions and maximizing ROI enables Horizon’s growth. RK has over 27 years of experience. Previously, he served as the COO at All Cargo Logistics & Industrial Parks and has earlier worked with the private equity and investment banking teams at JM Financial and the Macquarie group.</p>
                      <p className='para'>RK has completed his MBA from IIM Ahmedabad and BE in Mechanical from BIT Mesra, Ranchi. RK also serves as a member of the Board of Governors of IIM Trichy.</p>
                      {/* <p className='para'>RK has completed his MBA from IIM Ahmedabad and BE Mechanical from BIT Mesra, Ranchi. RK also serves as a member of the Board of Governors of IIM Trichy</p>
                      <p className='para'>RK is an avid reader and unwinds with lawn tennis and jogging.</p> */}


                    </div>
                    <a className='linkedin_box' href='https://www.linkedin.com/in/rknarayan/' target='_blank'>
                      <img src={require('../../assets/img/svg/linkedin_icon.svg')} ></img>
                    </a>
                  </div>

                  <div className='col-lg-4 col-md-12 col-12 tm_full_img_col'>
                    <img src={require('../../assets/img/explore/rk_narayan_profile.jpg')}></img>
                  </div>

                </div>
              </div>

              {/* Mahendra Content */}
              <div className='mahendra_cont tm_cont_box'>

                <div className='row'>
                  <div className='col-lg-8 col-md-12 col-12 tm_fullcontent_col'>

                    <h4 className='tm_name_LB'>Mahendra Waghule</h4>
                    <h5 className='tm_designation_LB'>Head of Projects and Development</h5>

                    <div className='tm_p_dv'>
                      <p className='para'>Mahendra has 29 years of experience with leadership roles in the field of Real Estate Development Management, Corporate Real Estate Management, Project Management, & Facilities Management.</p>
                      <p className='para'>Previously, he served as the Executive Vice President at IndoSpace as part of their core team from the inception of their first asset. He has prior experience in the residential, commercial, data center, and IT real estate development with GTL Group and multiple private developers, besides an entrepreneurial stint. </p>
                      <p className='para'>He has done his B.E. Civil from Walchand College of Engineering and has a Diploma in Business Management from ICFAI. </p>

                      {/* <p className='para'>He did his B.E. Civil from Walchand College of Engineering and has a Diploma in Business Management from ICFAI.</p>

                      <p className='para'>Mahendra deeply cares about the environment and prefers to spend his leisure hours in nature.</p> */}


                    </div>
                    <a className='linkedin_box' href='https://www.linkedin.com/in/mahendrawaghule/' target='_blank'>
                      <img src={require('../../assets/img/svg/linkedin_icon.svg')} ></img>
                    </a>
                  </div>

                  <div className='col-lg-4 col-md-12 col-12 tm_full_img_col'>
                    <img src={require('../../assets/img/explore/mahendra_waghule_profile.jpg')}></img>
                  </div>

                </div>

              </div>

              {/* Pooja Content */}
              <div className='pooja_cont tm_cont_box'>

                <div className='row'>
                  <div className='col-lg-8 col-md-12 col-12 tm_fullcontent_col'>

                    <h4 className='tm_name_LB'>Pooja Malik</h4>
                    <h5 className='tm_designation_LB'>Head of Leasing</h5>

                    <div className='tm_p_dv'>
                      <p className='para'>Pooja has over two decades of experience leading revenue and growth functions with different Indian companies and multinationals. She served as Senior Vice President of Leasing at IndoSpace and, for more than a decade, held various leadership assignments at Decathlon Sports India, Walmart India, and Carrefour, where she focused on expansion, development, and growth.</p>
                      <p className='para'>Pooja is a management graduate from Guru Jambheshwar University and has a reputation in the industry as a thoroughbred Real Estate professional.</p>

                      {/* <p className='para'>As a management graduate from Guru Jambheshwar University, she has a reputation in the industry as a thoroughbred Real Estate professional. </p> */}

                      {/* <p className='para'>Pooja is an avid traveller and loves to unwind with her family.</p> */}


                    </div>
                    <a className='linkedin_box' href='https://www.linkedin.com/in/pooja-malik-17686115/' target='_blank'>
                      <img src={require('../../assets/img/svg/linkedin_icon.svg')} ></img>
                    </a>

                  </div>

                  <div className='col-lg-4 col-md-12 col-12 tm_full_img_col'>
                    <img src={require('../../assets/img/explore/pooja_malik_profile.jpg')}></img>
                  </div>

                </div>

              </div>

              {/* kunal Content */}
              <div className='kunal_cont tm_cont_box'>

                <div className='row'>
                  <div className='col-lg-8 col-md-12 col-12 tm_fullcontent_col'>

                    <h4 className='tm_name_LB'>Kunal Shah</h4>
                    <h5 className='tm_designation_LB'>Chief Financial Officer</h5>

                    <div className='tm_p_dv'>
                      <p className='para'>Kunal is a Chartered Accountant with over two decades of experience leading finance, accounts, and business transformation practices with various Indian companies and consulting majors. </p>

                      <p className='para'>Previously, he served with Blackstone to manage corporate finance, deals, transactions, and business valuation. In addition to his entrepreneurial experience, he has worked with Ernst & Young, Deloitte, and Grant Thornton for accounting, audit, advisory, taxation, underwriting, financial planning, treasury, compliance, and financial management.</p>

                      {/* <p className='para'>Previously, he served with Blackstone to manage corporate finance, deals, transactions, and business valuation. In addition to his entrepreneurial experience, he has worked with Ernst & Young, Deloitte, and Grant Thornton for accounting, audit, advisory, taxation, underwriting, financial planning, treasury, compliances, and financial management.</p>
                      <p className='para'>Kunal is a food connoisseur and extends his help to the cause of communities.</p> */}


                    </div>
                    <a className='linkedin_box' href='https://www.linkedin.com/in/kunal-harun-shah-a457a511/' target='_blank'>
                      <img src={require('../../assets/img/svg/linkedin_icon.svg')} ></img>
                    </a>
                  </div>

                  <div className='col-lg-4 col-md-12 col-12 tm_full_img_col'>
                    <img src={require('../../assets/img/explore/kunal_shah_profile.jpg')}></img>
                  </div>

                </div>

              </div>

              {/* Aviraj Content */}
              <div className='aviraj_cont tm_cont_box'>

                <div className='row'>
                  <div className='col-lg-8 col-md-12 col-12 tm_fullcontent_col'>

                    <h4 className='tm_name_LB'>Aviraj Nandan</h4>
                    <h5 className='tm_designation_LB'>Head of Human Resources</h5>

                    <div className='tm_p_dv'>
                      <p className='para'>He has over 25 years of experience implementing workforce changes, organization design, and talent management in South Asia with leading companies in India. In his previous experience, he has been an entrepreneur at his venture in Latvia, Europe and was earlier serving as Vice President HR at PVR Ltd. Aviraj has held leadership assignments with VFS Global Services Pvt Ltd, DLF Ltd, Govt of India and is a military veteran.</p>

                      <p className='para'>He is an alumnus of the National Defence Academy and Indian Military Academy, holding a master’s Diploma from Symbiosis Institute of Management Studies, Pune.</p>

                      {/* <p className='para'>He is an alumnus of National Defence Academy, Indian Military Academy and holds a Masters Diploma from Symbiosis Institute of Management Studies, Pune.</p>
                      <p className='para'>Aviraj likes to travel and help with causes of elderly care and differently abled.</p> */}


                    </div>
                    <a className='linkedin_box' href='https://www.linkedin.com/in/avirajnandan/' target='_blank'>
                      <img src={require('../../assets/img/svg/linkedin_icon.svg')} ></img>
                    </a>
                  </div>

                  <div className='col-lg-4 col-md-12 col-12 tm_full_img_col'>
                    <img src={require('../../assets/img/explore/aviraj_nandan_profile.jpg')}></img>
                  </div>

                </div>


              </div>

              {/* Taruna Content */}
              <div className='taruna_cont tm_cont_box'>

                <div className='row'>
                  <div className='col-lg-8 col-md-12 col-12 tm_fullcontent_col'>

                    <h4 className='tm_name_LB'>Taruna Mahajan</h4>
                    <h5 className='tm_designation_LB'>Head of Marketing</h5>

                    <div className='tm_p_dv'>
                      <p className='para'>She has two decades of experience leading integrated marketing communications strategies, customer experience, and brand shaping to expand the growth agenda of different Indian companies. Previously, she served as Assistant Vice President of Marketing at IndoSpace and spent nearly a decade at TVS Supply Chain Solutions as Head of Marketing and Communications focused on brand building, post-M&A transition &integration, marketing, and corporate communications to augment sales and customer engagement.</p>

                      <p className='para'>She holds a master’s degree in Clinical Psychology and as a certified examiner, is a proponent of Malcolm Baldrige Model for Performance Excellence.</p>

                      {/* <p className='para'>She holds a master’s degree in Clinical Psychology, and as a certified examiner is a proponent of Malcolm Baldrige Model for Performance Excellence.</p>
                      <p className='para'>Taruna is an avid reader and enjoys spending time with her puppy and family.</p> */}

                    </div>

                    <a className='linkedin_box' href='https://www.linkedin.com/in/taruna-mahajan-marcom/' target='_blank'>
                      <img src={require('../../assets/img/svg/linkedin_icon.svg')} ></img>
                    </a>

                  </div>

                  <div className='col-lg-4 col-md-12 col-12 tm_full_img_col'>
                    <img src={require('../../assets/img/explore/taruna_mahajan_profile.jpg')}></img>
                  </div>

                </div>

              </div>

              {/* Swati Content */}
              <div className='swati_cont tm_cont_box'>

                <div className='row'>
                  <div className='col-lg-8 col-md-12 col-12 tm_fullcontent_col'>

                    <h4 className='tm_name_LB'>Swati Karmarkar </h4>
                    <h5 className='tm_designation_LB'>Head of Legal</h5>

                    <div className='tm_p_dv'>
                      <p className='para'>She has 15 years of experience managing legal affairs related to corporate and real estate matters and transaction support, partnerships, and risk management. Previously, she served as General Manager in the Legal department at Lodha Group. For a decade, she worked with multi-disciplinary law firms in India to counsel customers on documentation, compliance regulations, law, and governance matters. </p>

                      <p className='para'>With a Bachelor of Law from Government Law College, Mumbai, and as a qualified Solicitor, she is the legal prudence partner to our partners and business.</p>

                      {/* <p className='para'>With a Bachelor of Law from Government Law College, Mumbai and as a qualified Solicitor, she serves as the legal prudence partner to our partners and business.</p>
                      <p className='para'>Swati likes to travel.</p> */}

                    </div>
                    <a className='linkedin_box' href='https://www.linkedin.com/in/swati-karmarkar-2bb95128/' target='_blank'>
                      <img src={require('../../assets/img/svg/linkedin_icon.svg')} ></img>
                    </a>

                  </div>

                  <div className='col-lg-4 col-md-12 col-12 tm_full_img_col'>
                    <img src={require('../../assets/img/explore/swati_karmarkar_profile.jpg')}></img>
                  </div>

                </div>

              </div>

              {/* Mitesh Garg Content */}
              <div className='mitesh_cont tm_cont_box'>

                <div className='row'>
                  <div className='col-lg-8 col-md-12 col-12 tm_fullcontent_col'>

                    <h4 className='tm_name_LB'>Mitesh Garg </h4>
                    <h5 className='tm_designation_LB'>Head of Technology</h5>

                    <div className='tm_p_dv'>
                      <p className='para'>Mitesh has over 22 years of experience directing cross-functional teams in designing and integrating leading-edge technology solutions. Previously, he served as Head of IT at Smollan India - a retail solutions company - and was involved in developing and expanding its technology services offerings across various geographies. </p>

                      <p className='para'>He has earlier worked with Philips, Maersk, and Cap Gemini Consulting as a technology leader with repeated success in leading enterprise IT operations, developing architecture, and optimizing data analysis.</p>

                      <p className='para'>He has also managed the technology operations of 26 warehouses and healthcare factories in India.</p>

                      <p className='para'>He has been recognised with the “Next 100 CIO” award by the IT Next magazine.</p>



                      <p className='para'>He graduated as an Electronics Engineer and holds an MBA in Marketing from Narsee Monjee Institute of Management Studies, Mumbai.</p>


                    </div>
                    <a className='linkedin_box' href='https://in.linkedin.com/in/miteshgarg' target='_blank'>
                      <img src={require('../../assets/img/svg/linkedin_icon.svg')} ></img>
                    </a>

                  </div>

                  <div className='col-lg-4 col-md-12 col-12 tm_full_img_col'>
                    <img src={require('../../assets/img/explore/mitesh_garg_profile.jpg')}></img>
                  </div>

                </div>

              </div>



            </div>
          </div>
        </div>

      </div>


      {/* Team Slide box Section */}
      <div className='leader_overlay'></div>


    </div>

  )
}
