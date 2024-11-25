import React, { useState } from 'react'
import Header from '../components/global/header';
import Park_inside_spotlight from '../components/spotlight/park_inside_spotlight';
import Prk_overview from '../components/sections/prk_overview';
import Location_map from '../components/sections/location_map';
import Park_infrastructure from '../components/sections/park_infrastructure';
import Park_gallery from '../components/sections/park_gallery';
import Other_park from '../components/sections/other_park';
import Conversation_form from '../components/sections/conversation_form';
import Footer from '../components/global/footer';
import Transition from '../components/transition';
import { gsap } from "gsap";
import { useEffect , useRef } from 'react';
import { Power4 } from "gsap";
import useFetch from 'react-fetch-hook';
import { useParams } from 'react-router-dom';
export default function Park_inside_page({initialData}) {
  let body = useRef(null);
    var tl_1 = gsap.timeline()
    const { slug } = useParams();
    const [response, setResponse] = useState(initialData || []);
  
    useEffect(() => {
      const fetchData = async () => {
        const data = await fetch(`https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-json/wp/v2/parks/?slug=${slug}`);
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
    }, [slug]);

  return (
    <>
       
        <div className='park_inside_page'>
          <div ref={(el) => (body = el)} className="Headd">

            <div className='park_inside_innerdv'>  
              <Header/>
              <Park_inside_spotlight initialData={response} />
              <Prk_overview initialData={response} />
              <Location_map initialData={response} />
              <Park_infrastructure initialData={response} />
              <Park_gallery initialData={response} />
              <Other_park initialData={response} />
              <Conversation_form initialData={response}/>
              <Footer/>
            </div>
            

          </div>
          <Transition/>
        </div>
        
    </>
  )
}
