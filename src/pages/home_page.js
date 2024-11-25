import React, { useState } from "react";
import Header from "../components/global/header";
import HomeSpotlightSlider from "../components/spotlight/home_spotlight_slider";
import Agile from "../components/sections/agile";
import VluAssets from "../components/sections/vlu_assets";
import Park from "../components/sections/park";
import IntgSolution from "../components/sections/intg_solution";
import Esg from "../components/sections/esg";
import Footer from "../components/global/footer";
import News from "../components/sections/news";
import Sticky from "react-sticky-el";
import Transition from "../components/transition";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import { Power4 } from "gsap";
import ITSTabSec from "../components/sections/ITS_tab_sec";
import { Helmet } from "react-helmet";
import Client from "../components/sections/client";

// const Header = loadable(() => import('../components/global/header'));
// const Home_spotlight_slider = loadable(() => import('../components/spotlight/home_spotlight_slider'));
// const Agile = loadable(() => import('../components/sections/agile'));
// const Vlu_assets = loadable(() => import('../components/sections/vlu_assets'));
// const Park = loadable(() => import('../components/sections/park'));
// const Intg_solution = loadable(() => import('../components/sections/intg_solution'));
// const Esg = loadable(() => import('../components/sections/esg'));
// const News = loadable(() => import('../components/sections/news'));

export default function Home_page() {
  const metaData = {
    title: "Home",
    description: "Home",
  };
  let body = useRef(null);

  useEffect(() => {
    var tl_1 = gsap.timeline();
    tl_1.to(body, {
      opacity: "1",
      pointerEvents: "auto",
      ease: Power4.easeInOut,
      delay: 1.2,
    });
    return () => {
      tl_1.to(body, {
        opacity: "0",
        pointerEvents: "none",
      });
    };
  });

  return (
    <>
      <Transition />

      <Helmet>
        <title>
          Industrial and logistics parks in India - Horizon Industrial Park
        </title>
        <meta
          name="description"
          content="Horizon Industrial Parks offers Grade A portfolios of high-quality, modern industrial and logistics parks across India"
        />
        <meta
          property="og:title"
          content="Industrial and logistics parks in India - Horizon Industrial Park"
        />
        <meta property="og:url" content="https://hiparks.com/" />
        <meta
          property="og:description"
          content="Horizon Industrial Parks offers Grade A portfolios of high-quality, modern industrial and logistics parks across India"
        />
        <meta
          property="og:image"
          content="https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-content/uploads/2024/10/og_img_home_pg.jpg"
        />
      </Helmet>

      <div className="home_page">
        <div ref={(el) => (body = el)} className="Headd">
          <Header metaData={metaData} />
          <HomeSpotlightSlider />
          <Agile />
          <VluAssets />
          <Park />
          <IntgSolution />
          <Esg />
          <ITSTabSec />
          {/* <Sticky className='fix-sec'> */}
          <Client />
          {/* </Sticky> */}
          {/* <News /> */}
          <Footer />
        </div>
      </div>
    </>
  );
}
