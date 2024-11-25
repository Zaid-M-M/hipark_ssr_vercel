import React from 'react'

import Header from '../components/global/header';
import Esg_spotlight from '../components/spotlight/esg_spotlight';
import Esg_overview from '../components/sections/esg_ovrview';
import Esg_env from '../components/sections/esg_env';
import Governance from '../components/sections/governance';
import Report from '../components/sections/report';
import Social from '../components/sections/social';
import Footer from '../components/global/footer';

import Transition from '../components/transition';
import { gsap } from "gsap";
import { useEffect , useRef } from 'react';
import { Power3, Power4 } from "gsap";
import Helmet from 'react-helmet';

export default function Esg_page() {

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
      <div className='sustainability_page'>
        <Helmet>
            <title>Green Warehouse: Horizon's Sustainable Solutions for a Better Future</title>
            <meta name="description" content="Explore Horizon's commitment to sustainability, with Green Warehouses  driving eco-friendly practices, social inclusion, and ethical governance for a better tomorrow." />

            <meta property="og:title" content="Green Warehouse: Horizon's Sustainable Solutions for a Better Future" />
            <meta property="og:description" content="Explore Horizon's commitment to sustainability, with Green Warehouses  driving eco-friendly practices, social inclusion, and ethical governance for a better tomorrow." />
            <meta property="og:image" content="https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-content/uploads/2024/10/og_img_sustainable_pg.jpg" />
        </Helmet>
        <div ref={(el) => (body = el)} className="Headd">
          
            <Header />
            <Esg_spotlight />
            <Esg_overview />
            <Esg_env />
            <Social />
            <Governance />
            <Report /> 
            <Footer />

        </div>
      </div>
    </>
  )
}
