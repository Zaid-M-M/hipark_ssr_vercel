import React from 'react'
import Header from '../components/global/header';
import Park_spotlight from '../components/spotlight/park_spotlight';
import Agile_eco from '../components/sections/agile_eco';
import Park from '../components/sections/park';
import Ambition from '../components/sections/ambition';
import Park_infrastructure from '../components/sections/park_infrastructure';
import Flexible_sec from '../components/sections/flexible_sec';
import Wrk_envrmnt from '../components/sections/wrk_envrmnt';
import Adv_horiz from '../components/sections/adv_horiz';
import Cstmr_sucss from '../components/sections/cstmr_sucss';
import Park_env from '../components/sections/park_env'; 
import Client from '../components/sections/client';
import Footer from '../components/global/footer';

import Transition from '../components/transition';
import { gsap } from "gsap";
import { useEffect , useRef } from 'react';
import { Power3, Power4 } from "gsap";


export default function Park_page() {
  
  
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
        <div className='home_page'>
          <div ref={(el) => (body = el)} className="Headd">
            <Header/>

              <Park_spotlight/>
              <Agile_eco/>
              <Park/>
              <Ambition/>
              <Park_infrastructure/>
              <Flexible_sec/>
              <Wrk_envrmnt/>
              <Park_env />
              <Cstmr_sucss/>
              <Client/>
              <Footer/>

         
        </div>
      </div>
    </>
  )
}
