import React, { useState } from 'react'

import Header from '../components/global/header';
import Blog_spotlight from '../components/spotlight/blog_spotlight';
import Blog_landing_sec from '../components/sections/blog/blog_landing_sec';
import Footer from '../components/global/footer';

import Transition from '../components/transition';
import { gsap } from "gsap";
import { useEffect , useRef } from 'react';
import { Power3, Power4 } from "gsap";

export default function Solution_page({initialData}) { 
  const [response, setResponse] = useState(initialData || []);
  let body = useRef(null);
  var tl_1 = gsap.timeline()
  
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(`/posts`);
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
              <Blog_spotlight/>
              <Blog_landing_sec initialData={response}/>
              
              <Footer/>

          </div>
        </div>
    </>
  )
}
