import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../../../assets/css/state_info_sec.css';
import "../../../assets/css/park.css";
import useFetch from "react-fetch-hook";
import { Link } from "react-router-dom";

export default function State_parks({ park_category }) {
  const { data } = useFetch(
    `https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-json/wp/v2/parks/?categories=${park_category}`
  );

  return (
    <>
      {data && data.length > 0 ? (
        <Slider
          infinite={data.length > 5} // Conditionally set infinite based on data length
          speed={500}
          slidesToShow={5}
          slidesToScroll={1}
          responsive={[
            {
              breakpoint: 1921,
              settings: {
                slidesToShow: 5,
                slidesToScroll: 1,
              },
            },
            {
              breakpoint: 1660,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
              },
            },
            {
              breakpoint: 1536,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
              },
            },
            {
              breakpoint: 1440,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
              },
            },
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: data.length > 2, // Conditionally set infinite based on data length
              },
            },
            {
              breakpoint: 836,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: data.length > 2, // Conditionally set infinite based on data length
              },
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: data.length > 2,
              },
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: data.length > 2,
              },
            },
          ]}
        >
          {data.map(({ id, acf, slug }) => (
            <div className="park_sld" key={id}>
              <Link to={"/" + slug}>
                <div className="prk_content_dv">
                  <div className="prk_img_dv">
                    <img
                      src={acf.park_spotlight_image}
                      alt={acf.park_name}
                    ></img>
                    <div className="patch_dv">
                      <p>{acf.park_status}</p>
                    </div>
                    <div className="arrow_circle">
                      <img
                        src={require("../../../assets/img/svg/white_btn_arrow.svg")}
                        alt=""
                      ></img>
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

                    <Link to={"/" + slug} className="prk_btn">
                      Explore more
                    </Link>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </Slider>
      ) : (
        <p>No parks available</p> // Fallback message for no data
      )}
    </>
  );
}
