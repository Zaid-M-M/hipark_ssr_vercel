import React from 'react'

import Header from '../components/global/header';
import Solution_spotlight from '../components/spotlight/solution_spotlight';
import Customisation_sec from '../components/sections/customisation_sec';
import Vlu_integ_sec from '../components/sections/vlu_integ_sec';
import Vlu_integ_servc from '../components/sections/vlu_integ_servc';
import Footer from '../components/global/footer';

import Transition from '../components/transition';
import { gsap } from "gsap";
import { useEffect , useRef } from 'react';
import { Power3, Power4 } from "gsap";

export default function Solution_page() { 
  
  let body = useRef(null);
  var tl_1 = gsap.timeline()
  
  useEffect(() => {

   

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
        <div className='home_page '>
          <div ref={(el) => (body = el)} className="Headd">

              <Header/>
              <Solution_spotlight/>
              <Customisation_sec/>
              <Vlu_integ_sec/>
              <Vlu_integ_servc/>
              <Footer/>

          </div>
        </div>
    </>
  )
}
