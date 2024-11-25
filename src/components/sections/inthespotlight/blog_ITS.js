import React from "react";
import useFetch from "react-fetch-hook";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Blog_ITS() {
  const { data } = useFetch(
    `https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-json/wp/v2/posts?per_page=5`
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
            data.map(({ id, acf, title, category, slug }) => (
              <div key={id}>
                <div className="ITS_sld">
                  <Link>
                    <div className="image-conatoner">
                      <div className="img-box">
                        <img
                          src={acf.blog_image}
                          alt={acf.blog_image_alt_text}></img>
                      </div>
                      <div className="text-box">
                        <p className="new-para blg_cat_name" dangerouslySetInnerHTML={{ __html: category }}></p>

                        <h2 dangerouslySetInnerHTML={{ __html: title }}></h2>
                        <div className="icon-blog">
                          <img
                            src={
                              require("../../../assets/img/svg/ITS_calender_icon.svg")
                                
                            }></img>
                          <p>{acf.blog_publish_date}</p>
                        </div>
                        <hr></hr>
                        <Link
                          to={"/blog/" + slug}
                          className="read_more_btn">
                          Read More
                        </Link>
                        {/* <p
                          className="blg_bx_para"
                          dangerouslySetInnerHTML={{ __html: "content" }}></p> */}
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            ))}
        </Slider>

        <Link
          to="/blog"
          className="arrow_btn ITS_lnding_btn">
          View All
        </Link>
      </div>
    </>
  );
}
