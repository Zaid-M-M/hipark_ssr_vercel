import React from "react";
import Slider from "react-slick";
import useFetch from "react-fetch-hook";
import { useParams } from "react-router-dom";
import "../../../assets/css/state_slider_sec.css";
import "../../../helper/common";

export default function State_slider_sec() {
  let { slug } = useParams();
  const { isLoading, data, error } = useFetch(
    `https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-json/wp/v2/states/?slug=${slug}`
  );

  return (
    <>
      {data &&
        data.map(({ id, title, acf }) => (
          <div className="state_slider_sec mob_pd_LR tab_pd_LR">
            <div className="cstm_container">
              <div className="row">
                <div className="col-12">
                  <h2 className="section_sub_heading ovrview_sub_hd">
                    {acf.section_title_region}
                  </h2>
                </div>
              </div>
            </div>
            <div className="news_slider_sec ">
              <Slider
                arrow={true}
                infinite={false}
                speed={500}
                slidesToShow={3.5}
                slidesToScroll={1}
                responsive={[
                  {
                    breakpoint: 1024,
                    settings: {
                      slidesToShow: 3.5,
                      slidesToScroll: 1,
                    },
                  },
                  {
                    breakpoint: 836,
                    settings: {
                      slidesToShow: 2.3,
                      slidesToScroll: 1,
                    },
                  },
                  {
                    breakpoint: 600,
                    settings: {
                      slidesToShow: 1.3,
                      slidesToScroll:1,
                    }
                  },
                  {
                    breakpoint: 480,
                    settings: {
                      slidesToShow: 1.3,
                      slidesToScroll: 1,
                    }
                  }
                ]}>
                {acf.region_slider.map((rg_sld) => (
                  <div className="st_sld">
                    <div className="st_img_dv">
                      <a href={rg_sld.state_url}>
                        <img
                          src={rg_sld.state_image_region}
                          alt={acf.region_image_alt}></img>
                        <div className="st_name_dv">
                          <h3>{rg_sld.state_name_region}</h3>
                        </div>
                      </a>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        ))}
    </>
  );
}
