import React from 'react'
import { Link } from "react-router-dom";
import Header from '../components/global/header';
import '../assets/css/error_sec.css';
import Footer from '../components/global/footer';
import Transition from '../components/transition';
import { gsap } from "gsap";
import { useEffect , useRef } from 'react';
import { Power4 } from "gsap";
import Helmet from 'react-helmet';
import rightArrow from '../assets/img/svg/sldr_right_arrow_wht.svg';

export default function Error_page() {


  let body = useRef(null);
  var tl_1 = gsap.timeline()

  useEffect(() => {

    // Page Transition Code

    tl_1.to(body,{
      opacity: "1",
      pointerEvents: "auto",
      ease: Power4.easeInOut,
      delay: 1.2
    });
    return () => {
      tl_1.to(body, {
        opacity: "0",
        pointerEvents: 'none'
      });
    }

  })
  
  return (
    <>
        <Transition/>
        <div className='home_page contact-pg error_page'>

          <Helmet>
              <title>Page not found - Horizon Industrial Park</title>
          </Helmet>

          <div ref={(el) => (body = el)} className="Headd">
            
              <Header/>

              <div className='error_sec'>
                <div className='cstm_container'>
                  <div className='row'>
                    <div className='col-12'>
                      <div className='error_box'>
                          <h1 className=''>Oops!</h1>
                          <h2 className='section_sub_heading '>404 - Page not found</h2>
                          <p className='para'>The page you are looking is not found.</p>
                          <Link to='/' className='enq_bnt goto_btn'>Go to homepage 
                            <span>
                            <img src={rightArrow} alt="Right Arrow" />
                            </span>
                          </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <Footer/>

          </div>
        </div>

    </>
  )
}
