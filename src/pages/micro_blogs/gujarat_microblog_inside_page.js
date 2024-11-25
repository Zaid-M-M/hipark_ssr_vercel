import React from 'react'

import Header from '../../components/global/header';
import Gujarat_microblog_spotlight from '../../components/spotlight/micro_blog_spotlight/gujarat_microblog_spotlight';
import Gujarat_microblog_inside_sec from '../../components/sections/micro_blog/gujarat/gujarat_microblog_inside_sec';
import Footer from '../../components/global/footer';

import Transition from '../../components/transition';
import { gsap } from "gsap";
import { useEffect , useRef , useState} from 'react';
import { Power3, Power4 } from "gsap";
import { useParams } from "react-router-dom";

export default function Gujarat_microblog_inside_page({initialData}) {
  const { slug } = useParams();
  const [data, setData] = useState(initialData || []);

  let body = useRef(null);
  var tl_1 = gsap.timeline()
  
  useEffect(() => {

    const fetchData = async () => {
      const data = await fetch(`/api/gujarat/${slug}`);
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
                <Gujarat_microblog_spotlight initialData={data}/>
                <Gujarat_microblog_inside_sec initialData={data}/>
             
                <Footer/>
              </div>

          </div>
        </div>
    </>
  )
}
