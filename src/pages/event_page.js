import React, { useState } from 'react'

import Header from '../components/global/header';
import Event_spotlight from '../components/spotlight/event_spotlight';
import Event_sec from '../components/sections/event/event_sec';
import Footer from '../components/global/footer';

import Transition from '../components/transition';
import { gsap } from "gsap";
import { useEffect , useRef } from 'react';
import { Power3, Power4 } from "gsap";

export default function Event_page({initialData}) { 
  const [response, setResponse] = useState(initialData || []);
  let body = useRef(null);
  var tl_1 = gsap.timeline()
  
  useEffect(() => {
    
    const fetchData = async () => {
      const data = await fetch(`/api/events`);
      const response = await data.json();
      setResponse(response);
    };
    fetchData();

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

  }, [])
  
  return (
    <>
        <Transition/>
        <div className='home_page '>
          <div ref={(el) => (body = el)} className="Headd">

              <Header/>
              <Event_spotlight initialData={response}/>
              <Event_sec initialData={response}/>
              <Footer/>

          </div>
        </div>
    </>
  )
}
