import React from 'react'

import Header from '../../components/global/header';
import Tamil_nadu_microblog_spotlight from '../../components/spotlight/micro_blog_spotlight/tamil_nadu_microblog_spotlight';
import Tamil_microblog_inside_sec from '../../components/sections/micro_blog/tamil_nadu/tamil_microblog_inside_sec';
import Footer from '../../components/global/footer';

import Transition from '../../components/transition';
import { gsap } from "gsap";
import { useEffect , useRef , useState} from 'react';
import { Power3, Power4 } from "gsap";
import { useParams } from "react-router-dom";

export default function Tamil_nadu_microblog_inside_page({initialData}) { 
  const { slug } = useParams();
  const [data, setData] = useState(initialData || []);

  let body = useRef(null);
  var tl_1 = gsap.timeline()
  
  useEffect(() => {

    const fetchData = async () => {
      const data = await fetch(`/api/tamil-nadu/${slug}`);
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

  }, [slug]);
  
  return (
    <>
        <Transition/>
        <div className='home_page Blog_inside_page'>
          <div ref={(el) => (body = el)} className="Headd">
              
              <div className='blog_inside_innerdv'>
                <Header/>
                <Tamil_nadu_microblog_spotlight initialData={data}/>
                <Tamil_microblog_inside_sec initialData={data}/>
             
                <Footer/>
              </div>

          </div>
        </div>
    </>
  )
}
