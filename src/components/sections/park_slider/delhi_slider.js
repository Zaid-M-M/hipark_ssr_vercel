import React, { useEffect } from "react";
import Slider from "react-slick";
import useFetch from "react-fetch-hook";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { gsap } from "../../../helper/common";
import "../../../assets/css/park.css";

export default function Delhi_slider() {
  const { data } = useFetch(
    "https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-json/wp/v2/parks/?categories=2"
  );

  const fade_park = useRef(null);
  useEffect(() => {
    gsap.to("#fade_park", {
      opacity: 1,
      duration: 1.5,
      ease: "linear",
      delay: 0.9,
      scrollTrigger: {
        trigger: "#fade_park",
        markers: false,
      },
    });
  });
  return (
    <>
      <div
        className="park_info_dv"
        id="div1">
        <div
          className="park_name_dv p_opacity"
          ref={fade_park}
          id="fade_park">
          <p className="park_name">Delhi NCR</p>
          <p className="park_status">
            <span>05</span> active
          </p>
          <p className="park_status">
            <span>01</span> Under Construction
          </p>
        </div>

        <div
          className="park_slider_outer_dv p_opacity"
          ref={fade_park}
          id="fade_park">
          <Slider className='park_main_slider'
            arrow={true}
            infinite={true}
            speed={500}
            centerMode= {true}
            centerPadding= {40}
            slidesToShow={2}
            slidesToScroll={1}
            responsive={[
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1,
                },
              },
              {
                breakpoint: 991,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  
                }
              },
              {
                breakpoint: 835,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  
                }
              },
              {
                breakpoint: 600,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll:1,
                }
              },
              {
                breakpoint: 480,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  centerMode: true,
                  centerPadding: '20px'
                }
              }
            ]}>
            {data &&
              data.map(({ id, acf, slug }) => (
                <div
                  className="park_sld"
                  key={id}>
                  <Link to={"/" + slug}>
                    <div className="prk_content_dv">
                      <div className="prk_img_dv">
                        <img src={acf.park_spotlight_image}></img>
                        <div className="patch_dv">
                          <p>{acf.park_status}</p>
                        </div>
                        <div className="arrow_circle">
                          <img
                            src={require("../../../assets/img/svg/white_btn_arrow.svg")}></img>
                        </div>
                      </div>

                      <div className="prk_inner_content">
                        <p className="prk_name">{acf.park_name}</p>

                        <div className="prk_cnt_hd">
                          <p className="area_hd">Area</p>
                          <p className="potential_hd">Potential</p>
                          <p className="usage_hd">Usage</p>
                        </div>

                        <div className="prk_cnt_vlu">
                          <p className="area_vlu">{acf.land_area}</p>
                          <p className="potential_hd_vlu">
                            {acf.development_potential}
                          </p>
                          <p className="usage_hd_vlu">{acf.land_usage}</p>
                        </div>

                        <Link
                          to={"/" + slug}
                          className="prk_btn">
                          Explore more
                        </Link>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
          </Slider>
        </div>
      </div>
    </>
  );
}
