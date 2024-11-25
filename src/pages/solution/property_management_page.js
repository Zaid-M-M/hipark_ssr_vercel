import React from 'react'

import Header from '../../components/global/header';
import Property_manag_spotlight from '../../components/spotlight/solution/property_manag_spotlight';
import Solution_inside_sec1 from '../../components/sections/solution/property_management/solution_inside_sec1';
import Solution_inside_sec2 from '../../components/sections/solution/property_management/solution_inside_sec2';
import Solution_inside_sec3 from '../../components/sections/solution/property_management/solution_inside_sec3';
import Conversation_form from '../../components/sections/conversation_form';
import Footer from '../../components/global/footer';

import Transition from '../../components/transition';
import { gsap } from "gsap";
import { useEffect , useRef } from 'react';
import { Power3, Power4 } from "gsap";


export default function Property_management_page() { 
  
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
              <Property_manag_spotlight/>
              <Solution_inside_sec1/>
              <Solution_inside_sec2/>
              <Solution_inside_sec3/>
              <Conversation_form/>
              <Footer/>

          </div>
        </div>
    </>
  )
}
