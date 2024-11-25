import React, { useState } from 'react'

import Header from '../components/global/header';
import Pr_spotlight from '../components/spotlight/pr_spotlight.js';
import Press_release_sec from '../components/sections/press_release_sec';
import News from '../components/sections/news';
import Footer from '../components/global/footer';

import Transition from '../components/transition';
import { gsap } from "gsap";
import { useEffect , useRef } from 'react';
import { Power3, Power4 } from "gsap";
import ITS_tab_sec1 from '../components/sections/ITS_tab_sec1';
import { useParams } from 'react-router-dom';

export default function Press_release_page({initialData}) {
  const { slug } = useParams(); 
  const [response, setResponse] = useState(initialData || []);
console.log(slug)
  let body = useRef(null);
  var tl_1 = gsap.timeline()
  
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(`/api/press_releases/${slug}`);
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

  }, [slug])

  return (
    <>
        <Transition/>
        <div className='home_page contact-pg pr_inside_pg'>
          <div ref={(el) => (body = el)} className="Headd">

            <div className='pr_inside_innerdv'>
              <Header/>
              <Pr_spotlight initialData={response}/>
              <Press_release_sec initialData={response}/>
              {/* <News/> */}
              <ITS_tab_sec1 initialData={response}/>
              <Footer/>
            </div>



            </div>
        </div>
    </>
  )
}
