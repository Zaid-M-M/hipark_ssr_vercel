import React, { useState } from "react";

import Header from "../components/global/header";
import Blog_inside_spotlight from "../components/spotlight/blog_inside_spotlight";
import BlogInsideSec from "../components/sections/blog/blog_inside_sec";
import Footer from "../components/global/footer";

import Transition from "../components/transition";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import { Power3, Power4 } from "gsap";
import { useParams } from "react-router-dom";

export default function Blog_inside_page({ initialData }) {
  const { slug } = useParams();
  // const [response, setResponse] = useState(initialData || []);
  const [data, setData] = useState(initialData || []);

  
  console.log(slug);
  let body = useRef(null);
  var tl_1 = gsap.timeline();

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(`/api/blog/${slug}`);
      const response = await data.json();
      // setResponse(response);
      setData(response);
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
      <div className="home_page Blog_inside_page">
        <div
          ref={(el) => (body = el)}
          className="Headd">
          <div className="blog_inside_innerdv">
            <Header />
            <Blog_inside_spotlight initialData={data} />
            <BlogInsideSec initialData={data} />
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}
