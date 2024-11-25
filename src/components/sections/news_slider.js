import React from "react";
import useFetch from "react-fetch-hook";
import Slider from "react-slick";

export default function News_slider() {
  const { data } = useFetch(
    "https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-json/wp/v2/news"
  );

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
      <div>
        <Slider {...settings}>
          {data &&
            data.map(({ id, title, acf }) => (
              <div
                className="news_sld"
                key={id}>
                <a
                  target="_blank"
                  href={acf.news_link}>
                  <div className="news_content">
                    <div className="news_inner_dv">
                      <p className="news_name">{title.rendered}</p>
                      <p className="news_desc">{acf.news_description}</p>
                    </div>
                    <div className="news_date_box">
                      <p className="nws_date">{acf.publish_date}</p>
                      <p className="news_year">
                        {acf.publish_month} {acf.publish_year}
                      </p>
                    </div>
                    <div className="news_overlay">
                      <img
                        src={acf.news_image}
                        alt=""
                      />
                    </div>
                  </div>
                </a>
              </div>
            ))}
        </Slider>
      </div>
    </>
  );
}
