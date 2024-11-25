import React from 'react'
import { useEffect, useRef } from "react";
import { gsap } from '../../helper/common'
import '../../assets/css/esg_env.css'


export default function Esg_env() {
  
  // border animation variable
  const esg_env_hd = useRef(null);
  const esg_para = useRef(null);
  const envBorder_aniamtion = useRef(null);

  useEffect(() => {
    
    // Heading text animation code
    gsap.to("#esg_env_hd", {
        y:0,
        duration: 1.3,
        ease: "power4.out",
        delay: 0.3,
        scrollTrigger: {
            trigger: "#esg_env_hd",
            markers: false
        }
    });

    // Para animation code
    gsap.to("#esg_para", {
        opacity:1,
        duration: 1.5,
        ease: "linear",
        delay: 0.9,
        scrollTrigger: {
            trigger: "#esg_para",
            markers: false
        }
    });


    // border animation code
    gsap.to("#envBorder_aniamtion", {
        opacity:1,
        duration: .5,
        ease: "linear",
        delay: 0.5,
        width: "100%",
        scrollTrigger: {
            trigger: "#envBorder_aniamtion",
            markers: false
        }
    });

}, []);

  return (
    <>
 <div className='esg_env_sec tab_pd_LR' id='environment'>
        <div className='cstm_container'>
          <div className='row'>
            <div className='col-lg-12 col-md-12 col-12'>
              <div className="animate_txt">
                <h2 className='hdg_esg' ref={esg_env_hd} id='esg_env_hd'>Environment</h2>
              </div>
              <hr className='add_border p_opacity' ref={envBorder_aniamtion} id='envBorder_aniamtion'/>
              <p className='sub_para p_opacity' ref={esg_para} id='esg_para'>We are fully dedicated to forging a green and sustainable future. Our target was to achieve 12.8 MW solar capacity by 2025. We are proud to note that we achieved that by 2023 and we are aiming for higher goals moving forward.</p>
            </div>
            <div className='row img-grid p_opacity' ref={esg_para} id='esg_para'>
              <div className='col-lg-4 col-md-6 col-12 guttr-spc'>
                <div className='img-clm'>
                    <img className="esg-env-img" src={require('../../assets/img/energy_saving.jpg')}></img>
                    <div className='img-content'>
                      <h2>Energy saving</h2><img className="toggl-icon" src={require('../../assets/img/svg/close_icon.svg')}></img>
                    
                      <ul>
                        <li>Installed 7.4 MWP rooftop solar capacity, aiming to expand to 20 MWP by December 2024, saving 10-15% energy costs for customers.</li>
                        <li>Use of energy-efficient retrofits such as LEDs for illumination, solar-powered street lights, and smart meters to monitor and optimise consumption.</li>
                        <li>Incorporation of passive features to maximise natural lighting and sustainable HVAC systems to reduce mechanical energy consumption.</li>
                      </ul>
                    </div>
                </div>
              </div>

              <div className='col-lg-4 col-md-6 col-12 guttr-spc'>
                  <div className='img-clm'>
                  <img className="esg-env-img" src={require('../../assets/img/renewable_energy.jpg')}></img>
                    <div className='img-content'>
                      <h2>Renewable Energy Use</h2><img className="toggl-icon" src={require('../../assets/img/svg/close_icon.svg')}></img>
                      {/* <p>We will mitigate 3.1 Lac tonnes worth of carbon, which is equivalent to planting 4.9L trees, and reduce our carbon footprint by 10% across our operations by:</p> */}
                      <ul>
                        <li>Goal to achieve 35% renewable energy capacity.</li>
                        <li>Continue installation of solar panels on roof surfaces to reduce energy costs and help customers meet their carbon goals.</li>
                      </ul>
                    </div>
                  </div>
              </div>

              <div className='col-lg-4 col-md-6 col-12 guttr-spc'>
                  <div className='img-clm'>
                    <img className="esg-env-img" src={require('../../assets/img/biodiversity.jpg')}></img>
                    <div className='img-content'>
                      <h2>Biodiversity</h2><img className="toggl-icon" src={require('../../assets/img/svg/close_icon.svg')}></img>

                      <ul>
                        <li>We are committed to preserving and enhancing the biodiversity across our parks and their surrounding areas.</li>
                        <li>Creation of large landscaped zones, shaded rest areas, urban forests, and lily ponds, and open gyms with the aim to absorb 30X more carbon dioxide and nurture eco-diversity.</li>
                        <li>For landscape, we plant trees indigenous to the geography that in turn nurture native wildlife.</li>
                      </ul>
                    </div>
                  </div>
              </div>
            {/* </div> */}


            {/* <div className='row img-grid no-padding'> */}
            <div className='col-lg-4 col-md-6 col-12 guttr-spc'>
                  <div className='img-clm'>
                    <img className="esg-env-img" src={require('../../assets/img/water_management.jpg')}></img>
                    <div className='img-content'>
                      <h2>Water management</h2><img className="toggl-icon" src={require('../../assets/img/svg/close_icon.svg')}></img>
                     
                      <ul>
                        <li>Treating 100% of the grey water for landscaping and flushing.</li>
                        <li>Maximised stormwater retention with additional rainwater harvesting pits</li>
                        <li>Installed low flow plumbing fixtures to reduce freshwater utilisation.</li>
                        <li>Metering water to analyse and reduce water consumption at our parks and conducting regular, third-party water audits.</li>
                      </ul>
                    </div>
                  </div>
            </div>

             

            <div className='col-lg-4 col-md-6 col-12 guttr-spc'>
                  <div className='img-clm'>
                    <img className="esg-env-img" src={require('../../assets/img/waste_management.jpg')}></img>
                    <div className='img-content'>
                      <h2>Waste management</h2><img className="toggl-icon" src={require('../../assets/img/svg/close_icon.svg')}></img>
                     
                      <ul>
                        <li>Use of eco-friendly materials, such as incorporating fly-ash during construction.</li>
                        <li>Encouragement of good waste management practices with segregated waste bins, recycling, and onsite compost pits for horticulture waste.</li>
                        <li>Steel structures for durability and recyclability at the end of their lifecycle.</li>
                      </ul>
                    </div>
                  </div>
              </div>

              <div className='col-lg-4 col-md-6 col-12 guttr-spc'>
                <div className='img-clm'>
                    <img className="esg-env-img" src={require('../../assets/img/certifications.jpg')}></img>
                    <div className='img-content'>
                      <h2>Certifications</h2><img className="toggl-icon" src={require('../../assets/img/svg/close_icon.svg')}></img>
                      <p>We are working towards achieving ISO certifications (ISO 9001, ISO 14001 and ISO 45001) for operations.</p>
                      <p>Two of our parks have been IGBC Certified: Platinum for Bilaspur Park and Platinum Pre-Certification for Delhi II.</p>
                      <p>We are on track to get all operational parks IGBC-certified as green developments by 2025.</p>
                     
                    </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  )
}
