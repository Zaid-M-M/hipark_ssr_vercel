import React, { useState } from 'react'

import Header from '../components/global/header';
import Client_inside_spotlight from '../components/spotlight/client_inside_spotlight';
import Client_inside_sec from '../components/sections/client/client_inside_sec';
import Footer from '../components/global/footer';

import Transition from '../components/transition';
import { gsap } from "gsap";
import { useEffect , useRef } from 'react';
import { Power3, Power4 } from "gsap";
import { useParams } from 'react-router-dom';




export default function Client_inside_pg({initialData}) { 
  const { slug } = useParams();
  const [data, setData] = useState(initialData || []);

  let body = useRef(null);
  var tl_1 = gsap.timeline()
  
  useEffect(() => {
    
    const fetchData = async () => {
      const data = await fetch(`/api/case-studies/${slug}`);
      const response = await data.json();
      setData(response);
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
        <div className='home_page client_inside_page'>
          <div ref={(el) => (body = el)} className="Headd">
            <div className='clnt_inside_innerdv'>
              <Header/>
              <Client_inside_spotlight initialData={data} />
              <Client_inside_sec initialData={data} />  
              <Footer/>
            </div>


          </div>
        </div>
    </>
  )
}
