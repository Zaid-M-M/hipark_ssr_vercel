import React from "react";
import useFetch from "react-fetch-hook";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "../../../assets/css/blog_landing_sec.css";
import "../../../assets/css/blog_inside_sec.css";

export default function Blog_related_slider(props) {
  const { data } = useFetch(
    `https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-json/wp/v2/posts/?exclude=${props.post_id}&categories=${props.categ_id}`
  );

  const settings = {
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
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
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
    spaceBetween: 30,
    speed: 500,
    navigation: true,
    className: "mySwiper blog-feat-slider news_slider blg_isnide_sld",
  };

  return (
    <>
      <div className="leader_slider_cd">
        <Slider {...settings}>
          {data &&
            data.map(({ id, acf, title, category, slug }) => (
              <div className="blog_feat_sld" key={id}>
                <Link to={"/blog/" + slug}>
                  <div className="image-conatoner">
                    <div className="img-box" id="blg-img">
                      <img
                        src={acf.blog_image}
                        alt={acf.blog_image_alt_text}
                      ></img>
                    </div>
                    <div className="text-box">
                      <p className="new-para">{category}</p>

                      <h2 dangerouslySetInnerHTML={{ __html: title }}></h2>

                      <div className="icon-blog">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="13"
                          height="16"
                          viewBox="0 0 13 16"
                          fill="none"
                        >
                          <path
                            d="M2.75514 7.2H4.13271V8.8H2.75514V7.2ZM12.3981 3.2V14.4C12.3981 15.28 11.7782 16 11.0206 16H1.37757C1.01222 16 0.661825 15.8314 0.403481 15.5314C0.145136 15.2313 0 14.8243 0 14.4L0.00688784 3.2C0.00688784 2.32 0.613019 1.6 1.37757 1.6H2.06635V0H3.44392V1.6H8.9542V0H10.3318V1.6H11.0206C11.7782 1.6 12.3981 2.32 12.3981 3.2ZM1.37757 4.8H11.0206V3.2H1.37757V4.8ZM11.0206 14.4V6.4H1.37757V14.4H11.0206ZM8.26542 8.8H9.64299V7.2H8.26542V8.8ZM5.51028 8.8H6.88785V7.2H5.51028V8.8Z"
                            fill="white"
                          />
                        </svg>
                        <p>{acf.blog_publish_date}</p>
                      </div>
                      <Link className="blog_read_more_btn" to={"/blog/" + slug}>
                        Read More
                      </Link>
                      {/* <p className="blg_bx_para" dangerouslySetInnerHTML={{ __html: content }} ></p> */}
                    </div>
                  </div>
                </Link>
              </div>
            ))}
        </Slider>
      </div>
    </>
  );
}
