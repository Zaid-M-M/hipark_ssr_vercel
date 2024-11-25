import React from 'react'
import { useEffect, useRef } from "react";
import { gsap } from '../../helper/common'
import '../../assets/css/park_env.css'

export default function Park_env() {

  // border animation variable
  const envBorder_aniamtion = useRef(null);

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
    // gsap.to("#txt_animate", {
    //     y:0,
    //     duration: 1.3,
    //     ease: "power4.out",
    //     delay: 0.3,
    //     scrollTrigger: {
    //         trigger: "#txt_animate",
    //         markers: false
    //     }
    // });

    // Para animation code
    // gsap.to("#para_aniamtion", {
    //     opacity:1,
    //     duration: 1.5,
    //     ease: "linear",
    //     delay: 0.9,
    //     scrollTrigger: {
    //         trigger: "#para_aniamtion",
    //         markers: false
    //     }
    // });


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


  attemptPlay();
}, []);

  return (
    <>
      <div className='esg_env_sec park_env_sec snap_sec'>
        <div className='cstm_container'>
          <div className='row'>
            <div className='col-lg-12 col-md-12 col-12'>
              <h2 className='hdg_esg'>Advantage Horizon</h2>
              <hr className='add_border p_opacity' ref={envBorder_aniamtion} id='envBorder_aniamtion'/>
            </div>
            <div className='row img-grid'>

              <div className='col-lg-4 col-md-6 col-12 guttr-spc'>
                  <div className='img-clm'>
                    <img className="park-env-img" src={require('../../assets/img/Pan_India_Presence.jpg')}></img>
                    <div className='img-content'>
                      <h2>Pan India presence</h2><img className="toggl-icon" src={require('../../assets/img/svg/close_icon.svg')}></img>
                      <p>Expand anywhere in India with a reliable partner for integrated solutions for industrial and logistics real estate.</p>
                    </div>
                  </div>
              </div>

              <div className='col-lg-4 col-md-6 col-12 guttr-spc'>
                  <div className='img-clm'>
                    <img className="park-env-img" src={require('../../assets/img/Scalability.jpg')}></img>
                    <div className='img-content'>
                      <h2>Scalability</h2><img className="toggl-icon" src={require('../../assets/img/svg/close_icon.svg')}></img>
                      <p>Well-equipped to ramp up our resources and infrastructure to support our customers' growth in real time, in existing and new markets.</p>
                    </div>
                  </div>
              </div>

              <div className='col-lg-4 col-md-6 col-12 guttr-spc'>
                  <div className='img-clm'>
                    <img className="park-env-img" src={require('../../assets/img/Efficiency.jpg')}></img>
                    <div className='img-content'>
                      <h2>Efficiency</h2><img className="toggl-icon" src={require('../../assets/img/svg/close_icon.svg')}></img>
                      <p>Parks are planned using design thinking principles to boost productivity.</p>
                    </div>
                  </div>
              </div>
            {/* </div> */}


            {/* <div className='row img-grid no-padding'> */}
              <div className='col-lg-4 col-md-6 col-12 guttr-spc'>
                <div className='img-clm'>
                    <img className="park-env-img" src={require('../../assets/img/compliance.jpg')}></img>
                    <div className='img-content'>
                      <h2>Fully compliant</h2><img className="toggl-icon" src={require('../../assets/img/svg/close_icon.svg')}></img>
                      <p>Adherence to the strictest norms to meet every mandated requirement, to support quick clearances for our customers’ operations.</p>
                    </div>
                </div>
              </div>

              <div className='col-lg-4 col-md-6 col-12 guttr-spc'>
                <div className='img-clm'>
                    <img className="park-env-img" src={require('../../assets/img/Sustainability.jpg')}></img>
                    <div className='img-content'>
                      <h2>Sustainability</h2><img className="toggl-icon" src={require('../../assets/img/svg/close_icon.svg')}></img>
                      <p>Materials with less embodied energy, environment friendly construction methods, water recycling, renewable power solutions, and Miyawaki forest are some of the sustainability initiatives at Horizon parks to help our customers achieve their carbon emissions reduction goals.</p>
                    </div>
                </div>
              </div>

              <div className='col-lg-4 col-md-6 col-12 guttr-spc'>
                  <div className='img-clm'>
                    <img className="park-env-img" src={require('../../assets/img/Safety_and_security.jpg')}></img>
                    <div className='img-content'>
                      <h2>Safety and security</h2><img className="toggl-icon" src={require('../../assets/img/svg/close_icon.svg')}></img>
                      <p>Fully committed to ensuring 100% safety in all our parks, with 24×7 CCTV coverage, fenced boundaries, fire fighting systems, quick-response emergency systems manned by trained professionals, ambulance on standby, and first-aid centres.</p>                
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
