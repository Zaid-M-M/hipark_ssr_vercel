import React from 'react'
import Slider from 'react-slick';
import { useEffect , useRef} from 'react';
import { gsap } from "../../helper/common";
import '../../assets/css/milestone_sec.css';

export default function Milestone_sec() {

    const milstone_slider = {
        arrows: true,
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        speed: 800,
        responsive: [
            {
              breakpoint: 1080,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1
                
              }
            },
            {
                breakpoint: 835,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll:1
                }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll:1
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
      };

    // Heading text animation variable
    const mile_hd_anmt = useRef(null);

    // Para animation variable
    const mile_para = useRef(null);

    useEffect(() => {
    
        // Heading text animation code
        gsap.to("#mile_hd_anmt", {
            y:0,
            duration: 1.3,
            ease: "power4.out",
            delay: 0.3,
            scrollTrigger: {
                trigger: "#mile_hd_anmt",
                markers: false
            }
        });

        // Para animation code
        gsap.to("#mile_para", {
            opacity:1,
            duration: 1.5,
            ease: "linear",
            delay: 0.9,
            scrollTrigger: {
                trigger: "#mile_para",
                markers: false
            }
        });



    }, []);


  return (
    <>
      <div className='milestone_sec ' id='milestones'>
            
            <div className='cstm_container tab_pd_LR'>
                <div className='row'>
                    <div className='col-12'>
                        <p className='section_name mile_sec_hd p_opacity' ref={mile_para} id='mile_para'>On the growth path</p>
                    </div>
                </div>
                <div className='row mile_hd_row'>
                    <div className='col-lg-6 col-md-6 col-12'>
                        <div className="animate_txt ">
                            <h2 className='section_heading' ref={mile_hd_anmt} id='mile_hd_anmt'>Key </h2>
                        </div>
                        <div className="animate_txt ">
                            <h2 className='section_heading' ref={mile_hd_anmt} id='mile_hd_anmt'>milestones</h2>
                        </div>
                    </div>
                    <div className='col-lg-6 col-md-6 col-12'>
                        <p className='sub_para p_opacity' ref={mile_para} id='mile_para'>At Horizon, we move swiftly to co-create the best possible solutions for our clients. Here are some milestones we have achieved so far.</p>
                    </div>
                </div>
            </div>

            <div className='row no_LR_margin'>
                <div className='col-12 no_padding p_opacity' ref={mile_para} id='mile_para'>
                    <Slider {...milstone_slider} className='milstone_main_slider'>

                        <div className='milstone_sld'>
                            <div className='mils_inner'>
                                <div className='mils_content'>
                                    <p>Completed acquisition of Embassy Industrial Parks</p>
                                    <h4>May 2021</h4>
                                </div>
                            </div>
                        </div>

                        <div className='milstone_sld'>
                            <div className='mils_inner'>
                                <div className='mils_content'>
                                    <p>First lease {'('}India’s leading retail company{')'}</p>
                                    <h4>May 2021</h4>
                                </div>
                            </div>
                        </div>

                        <div className='milstone_sld'>
                            <div className='mils_inner'>
                                <div className='mils_content'>
                                    <p>Acquired the first land parcel for urban logistics in West Delhi</p>
                                    <h4>SEP 2021</h4>
                                </div>
                            </div>
                        </div>

                        <div className='milstone_sld'>
                            <div className='mils_inner'>
                                <div className='mils_content'>
                                    <p>First refinancing of INR 350Cr {'('}Towards Chakan II project{')'}</p>
                                    <h4>Sep 2021</h4>
                                </div>
                            </div>
                        </div>

                        <div className='milstone_sld'>
                            <div className='mils_inner'>
                                <div className='mils_content'>
                                    <p>First ground breaking for a fulfilment center of a leading eCommerce company</p>
                                    <h4>May 2022</h4>
                                </div>
                            </div>
                        </div>

                        <div className='milstone_sld'>
                            <div className='mils_inner'>
                                <div className='mils_content'>
                                    <p>Completed acquisition of XSIO Logistics Parks</p>
                                    <h4>Jun 2022</h4>
                                </div>
                            </div>
                        </div>

                    </Slider>
                </div>
            </div>

      </div>
    </>
  )
}
