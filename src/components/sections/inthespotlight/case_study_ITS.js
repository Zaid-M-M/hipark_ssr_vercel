import React from "react";
import useFetch from "react-fetch-hook";
import { Link } from "react-router-dom";
import Slider from "react-slick";
export default function Case_study_ITS() {
  const { data } = useFetch(
    "https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-json/wp/v2/client_stories?per_page=5"
  );

  const settings = {
    slidesToShow: 2,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 2,
          centerPadding: 50
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          centerMode: true,
          centerPadding:50
        },
      },
      {
        breakpoint: 1020,
        settings: {
          slidesToShow: 2,
          centerMode: true,
          centerPadding:50
        },
      },
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 2,
          centerMode: true,
          centerPadding:15
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          centerMode: false,
          centerPadding: 0
        },
      },
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 1,
          centerMode: false,
          centerPadding: 0
        }
      }
    ],
    speed: 500,
    infinite: true,
    slidesToScroll: 1,
    arrows: true,
    centerMode: true,
    centerPadding: 100,
    initialSlide:1
  };

  return (
    <>
      <div className="ITS_slider_sec">
        <Slider {...settings} className="news_slider ITS_slider_dv">
          {data &&
            data.map(({ id, acf, title, slug }) => (
              <div>
              <div
                className="ITS_sld"
                key={id}>
                <a href="#">
                  <div className="image-conatoner">
                    <div className="img-box">
                      <img src={acf.client_stories_image}></img>
                    </div>
                    <div className="text-box">
                      <h2
                        dangerouslySetInnerHTML={{
                          __html: title.rendered,
                        }}></h2>
                      {/* <div className="icon-blog">
                        <img
                          src={
                            require("../../../assets/img/svg/ITS_calender_icon.svg")
                              
                          }></img>
                        <p>{acf.short_date}</p>
                      </div> */}
                      <hr></hr>
                      <Link
                        to={"/case-studies/" + slug}
                        className="read_more_btn">
                        Read More
                      </Link>
                      {/* <p
                        className="blg_bx_para"
                        dangerouslySetInnerHTML={{ __html: "content" }}></p> */}
                    </div>
                  </div>
                </a>
              </div>
              </div>
            ))}
        </Slider>
        <Link
          to="/case-studies"
          className="arrow_btn ITS_lnding_btn">
          View All
        </Link>
      </div>
    </>
  );
}
