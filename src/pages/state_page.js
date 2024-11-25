import React, { useState } from "react";
import Header from "../components/global/header";
import State_spotlight from "../components/spotlight/state/state_spotlight";
import State_info_sec from "../components/sections/state/state_info_sec";
import State_amenities_sec from "../components/sections/state/state_amenities_sec";
import State_landscape_sec from "../components/sections/state/state_landscape_sec";
import State_eco_indict_sec from "../components/sections/state/state_eco_indict_sec";
import State_incentives_sec from "../components/sections/state/state_incentives_sec";
import State_info2_sec from "../components/sections/state/state_info2_sec";
import State_slider_sec from "../components/sections/state/state_slider_sec";
import Faq_sec from '../components/sections/state/faq_sec';
import State_micblog_link_sec from '../components/sections/state/state_micblog_link_sec';
import Footer from "../components/global/footer";

import Transition from "../components/transition";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import { Power3, Power4 } from "gsap";
import { useParams } from "react-router-dom";
import useFetch from "react-fetch-hook";

export default function State_page({ initialData }) {
  const { slug } = useParams();
  const [response, setResponse] = useState(initialData || []);

  let body = useRef(null);
  var tl_2 = gsap.timeline();
  
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(`https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-json/wp/v2/states/?slug=${slug}`);
      const response = await data.json();
      setResponse(response);
    };
    fetchData();

    tl_2.to(body, {
      opacity: "1",
      pointerEvents: "auto",
      ease: Power4.easeInOut,
      delay: 1.2,
    });
    return () => {
      tl_2.to(body, {
        opacity: "0",
        pointerEvents: "none",
      });
    };
  }, [slug]);

  return (
    <>
      <div className="State_page">
        <div
          ref={(el) => (body = el)}
          className="Headd">
          <Header />
          <State_spotlight initialData={response} />
          <State_info_sec initialData={response} />
          <State_amenities_sec initialData={response} />
          <State_landscape_sec initialData={response} />
          <State_eco_indict_sec initialData={response} />
          <State_incentives_sec initialData={response} />
          <State_info2_sec initialData={response} />
          <Faq_sec/>
          <State_slider_sec initialData={response} />
          <State_micblog_link_sec />
          <Footer />
        </div>
        <Transition />
      </div>
    </>
  );
}
