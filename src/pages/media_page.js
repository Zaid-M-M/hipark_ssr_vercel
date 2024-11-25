import React, { useState } from "react";

import Header from "../components/global/header";
import Media_spotlight from "../components/spotlight/media_spotlight";
import Media_sec from "../components/sections/media/media_sec";
import Footer from "../components/global/footer";

import Transition from "../components/transition";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import { Power3, Power4 } from "gsap";
import { useParams } from "react-router-dom";

export default function Media_page({ initialData, press }) {
  const { slug } = useParams();
  const [response, setResponse] = useState(initialData || []);
  const [response2, setResponse2] = useState(press || []);
  
  let body = useRef(null);
  var tl_1 = gsap.timeline();

  useEffect(() => {
    const fetchData = async () => {
      try {
          const data = await fetch(`/api/media`);
          const response = await data.json();
          setResponse(response);
          const data2 = await fetch(`/api/press_releases_landing`);
          const response2 = await data2.json();
          setResponse2(response2);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();

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
  }, [slug]);

  return (
    <>
      <Transition />
      <div className="home_page ">
        <div
          ref={(el) => (body = el)}
          className="Headd">
          <Header />
          <Media_spotlight initialData={response} />
          <Media_sec initialData={response} initialData2={response2} />
          <Footer />
        </div>
      </div>
    </>
  );
}
