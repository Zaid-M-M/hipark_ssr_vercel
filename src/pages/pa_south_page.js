import React from 'react'
import loadable from '@loadable/component'

import Section1 from '../components/sections/pa_south/section1';
import Section2 from '../components/sections/pa_south/section2';
import Section2_mob from '../components/sections/pa_south/section2_mob';
import Section3 from '../components/sections/pa_south/section3';
import Section4 from '../components/sections/pa_south/section4';
import Section5 from '../components/sections/pa_south/section5';
import Section6 from '../components/sections/pa_south/section6';
import Footer_section from '../components/sections/elsc/footer_section';

import Transition from '../components/transition';
import { gsap } from "gsap";
import { useEffect, useRef } from 'react';
import { Power3, Power4 } from "gsap";
import Helmet from 'react-helmet';



// const Header = loadable(() => import('../components/global/header'));
// const Home_spotlight_slider = loadable(() => import('../components/spotlight/home_spotlight_slider'));
// const Agile = loadable(() => import('../components/sections/agile'));
// const Vlu_assets = loadable(() => import('../components/sections/vlu_assets'));
// const Park = loadable(() => import('../components/sections/park'));
// const Intg_solution = loadable(() => import('../components/sections/intg_solution'));
// const Esg = loadable(() => import('../components/sections/esg'));
// const Client = loadable(() => import('../components/sections/client'));
// const News = loadable(() => import('../components/sections/news'));

export default function Pa_south_page() {


  let body = useRef(null);
  var tl_1 = gsap.timeline()

  useEffect(() => {

    // Page Transition Code

    tl_1.to(body, {
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

  const articleStructuredData = {
    
      "@context": "https://schema.org",
      "@type": "ResearchProject",
      "name": "Hiparks",
      "alternateName": "Hiparks",
      "url": "https://www.hiparks.com/",
      "logo": "https://www.hiparks.com/static/media/horizon__logo_icon.6979f8bc5707e550d01a3c6fe4c3504f.svg",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "088799 70705",
        "contactType": "customer service",
        "areaServed": "IN",
        "availableLanguage": "en"
      },
      "sameAs": [
        "https://www.instagram.com/hiparkscommunity/",
        "https://www.youtube.com/channel/UCOfvGN61RBCKY48sE8I6mJQ",
        "https://in.linkedin.com/company/horizon-industrial-parks"
      ]

  };

  

  return (
    <>

      <Transition />
      <div className='ELSC_page'>

      <script type="application/ld+json">
        {JSON.stringify(articleStructuredData)}
      </script>
      
        <Helmet>
            {/* <title>Industrial and logistics parks in India - Horizon Industrial Park</title> */}
            <title>Industrial and logistics parks in India - Horizon Industrial Park</title>
            <meta name="description" content="Horizon Industrial Parks offers Grade A portfolios of high-quality, modern industrial and logistics parks across India" />  
            <meta property="og:title" content="Industrial and logistics parks in India - Horizon Industrial Park" />
            <meta property="og:url" content="https://hiparks.com/" />
            <meta property="og:description" content="Horizon Industrial Parks offers Grade A portfolios of high-quality, modern industrial and logistics parks across India" />
            <meta property="og:image" content="https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-content/uploads/2024/10/og_img_home_pg.jpg" />
        </Helmet>
        <div ref={(el) => (body = el)} className="Headd">

          <Section1/>
          <Section2/>
          <Section2_mob/>
          <Section3/>
          <Section4/>
          <Section5/>
          <Section6/>
          <Footer_section/>
  
        </div>
      </div>

      

    </>
  )
}
