import React from 'react'
import { gsap } from "gsap";
import { useEffect , useRef } from 'react';
import { Power3 } from "gsap";

export default function Transition() {

    let screen = useRef(null);
    let logo_sld = useRef(null);
    useEffect(() => {
      var tl = gsap.timeline();
      tl.add(); 
      tl.to(screen, {
        duration: 0.5,
        opacity: "1",
        ease: Power3.easeInOut
      });
      tl.to(logo_sld, {
        duration: 0.3,
        bottom: "100",
        left:"100",
        // ease: Power3.easeInOut,
        delay: 0
      });
      tl.to(screen, {
        duration: 0.6,
        opacity: "0",
        ease: Power3.easeInOut,
        delay: 0.2
      });
      
      tl.set(screen, { opacity: "0" });

    })

  return (
    <div className="load-container">
        <div className="load-screen" ref={(el) => (screen = el)}>
          {/* <img className='' src={require('../assets/img/logo_gif.gif')} ></img> */}
          <div className='animate_logo_dv'>
            <img className='' src={require('../assets/img/svg/horizon__logo_icon.svg')}></img>
            <div className='animate_logo_sld' ref={(el) => (logo_sld = el)}></div>
          </div>
        </div>
    </div>
  )
}
