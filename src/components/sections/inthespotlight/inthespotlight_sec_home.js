import React from "react";
import "../../../assets/css/inthespotlight_sec_home.css";
import Groundbreaking_event from "./event_ITS";
import Case_study_ITS from "./case_study_ITS";
import Blog_ITS from "./blog_ITS";
import News_ITS from "./news_ITS";
import Press_ITS from "./pressrels_ITS"
import Groundbreaking_hmsld from "../event/groundbreaking_hmsld";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Inthespotlight_sec_home() {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="news_slider_sec inthe_spotlight_sec">
        <div>
          <div className="row no_LR_margin">
            <div className="col-12">
              <p className="section_name news_hd">HORIZON OF POSSIBILITIES</p>
              <hr className="add_border new_green_line" />
            </div>
          </div>
          <div className="row no_LR_margin">
            <div className="col-12">
              <h2 className="section_heading inthespot_ttl">
                In the spotlight
              </h2>
            </div>
          </div>

          <div className="row no_LR_margin inthe_spotlight_4cols">
            <div className="col-12">
              <Slider {...settings}>
                <div>
                  <Groundbreaking_event />
                </div>
                <div>
                  <Case_study_ITS />
                </div>
                <div>
                  <Blog_ITS />
                </div>
                <div>
                  <News_ITS />
                </div>
                <div>
                  <Press_ITS />
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </div>

      {/* Popup Div Code */}
      <Groundbreaking_hmsld />
    </>
  );
}
