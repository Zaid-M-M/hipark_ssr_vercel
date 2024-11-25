import React from "react";
import "../../../assets/css/blog_landing_sec.css";
import useFetch from "react-fetch-hook";
import { Link } from "react-router-dom";
import {
  Swiper,
  SwiperSlide,
  Navigation,
  Pagination,
} from "../../../helper/common";

export default function Blog_featureslider() {
  function formatDate(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = "01";
    return `${year}-${month}-${day}`;
  }

  function getFirstDateOfCurrentMonth() {
    const today = new Date(); // Get the current date
    return formatDate(new Date(today.getFullYear(), today.getMonth(), 1));
  }

  function getFirstDateOfNextMonth() {
    const today = new Date(); // Get the current date
    return formatDate(new Date(today.getFullYear(), today.getMonth() + 1, 1));
  }

  // Example usage:
  const firstDateOfCurrentMonth = getFirstDateOfCurrentMonth();
  const firstDateOfNextMonth = getFirstDateOfNextMonth();
  const { data } = useFetch(
    `https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-json/wp/v2/posts?after=${firstDateOfCurrentMonth}T00:00:00&before=${firstDateOfNextMonth}T00:00:00`
  );

  // https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-json/wp/v2/posts?after=2023-07-01T00:00:00&before=2023-08-01T00:00:00

  return (
    <>
      <div className="leader_slider_cd">
        {/* <Swiper
          slidesPerView={2}
          breakpoints={{
            320: {
              slidesPerView: 1,
            },
            600: {
              slidesPerView: 2,
            },
            850: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 2,
            },
          }}
          modules={[Navigation, Pagination]}
          pagination={{ type: "fraction", clickable: true }}
          spaceBetween={30}
          speed={500}
          navigation={true}
          className="mySwiper blog-feat-slider news_slider blog_frst_slider">
          {data &&
            data.map(({ id, acf, title, category, slug }) => (
              {/* <SwiperSlide>
                <div
                  className="blog_feat_sld"
                  key={id}>
                  <Link to={"/blog/" + slug}>
                    <div className="blg_main_container">
                      <div className="blg-custm-contain">
                        <p className="new-para">{category}</p>
                        <h2 dangerouslySetInnerHTML={{ __html: title }}></h2>
                        <div className="icon-blog">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="13"
                            height="16"
                            viewBox="0 0 13 16"
                            fill="none">
                            <path
                              d="M2.75514 7.2H4.13271V8.8H2.75514V7.2ZM12.3981 3.2V14.4C12.3981 15.28 11.7782 16 11.0206 16H1.37757C1.01222 16 0.661825 15.8314 0.403481 15.5314C0.145136 15.2313 0 14.8243 0 14.4L0.00688784 3.2C0.00688784 2.32 0.613019 1.6 1.37757 1.6H2.06635V0H3.44392V1.6H8.9542V0H10.3318V1.6H11.0206C11.7782 1.6 12.3981 2.32 12.3981 3.2ZM1.37757 4.8H11.0206V3.2H1.37757V4.8ZM11.0206 14.4V6.4H1.37757V14.4H11.0206ZM8.26542 8.8H9.64299V7.2H8.26542V8.8ZM5.51028 8.8H6.88785V7.2H5.51028V8.8Z"
                              fill="white"
                            />
                          </svg>
                          <p>{acf.blog_publish_date}</p>
                        </div>
                        <Link
                          className="blog_read_more_btn"
                          to={"/blog/" + slug}>
                          Read More
                        </Link>
                      </div>

                      <div className="blg-img-contain">
                        <img
                          src={acf.featured_slider_image}
                          alt={acf.blog_image_alt_text}></img>
                      </div>
                    </div>
                  </Link>
                </div>
              </SwiperSlide>
            ))}

          {/* <SwiperSlide>
                    <div className='blog_feat_sld'  >
                        <Link target='_blank' to='blog/blog_inside_page'>
                            <div className='blg_main_container'>
                                <div className='blg-custm-contain'>
                                    <p className='new-para'>News</p>
                                    <h2 >A Sneak Peek into Specialised Sector-Specific BTS Warehousing...</h2>
                                    <div className='icon-blog'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="13" height="16" viewBox="0 0 13 16" fill="none">
                                            <path d="M2.75514 7.2H4.13271V8.8H2.75514V7.2ZM12.3981 3.2V14.4C12.3981 15.28 11.7782 16 11.0206 16H1.37757C1.01222 16 0.661825 15.8314 0.403481 15.5314C0.145136 15.2313 0 14.8243 0 14.4L0.00688784 3.2C0.00688784 2.32 0.613019 1.6 1.37757 1.6H2.06635V0H3.44392V1.6H8.9542V0H10.3318V1.6H11.0206C11.7782 1.6 12.3981 2.32 12.3981 3.2ZM1.37757 4.8H11.0206V3.2H1.37757V4.8ZM11.0206 14.4V6.4H1.37757V14.4H11.0206ZM8.26542 8.8H9.64299V7.2H8.26542V8.8ZM5.51028 8.8H6.88785V7.2H5.51028V8.8Z" fill="white" />
                                        </svg>
                                        <p>02 december 2022</p>
                                    </div>
                                    <p>Did you come here for something in particular or just general Riker-bashing? And blowing into</p>

                                </div>

                                <div className='blg-img-contain'>
                                    <img src={require('../../../assets/img/feature-2.png')}></img>
                                </div>
                            </div>
                        </Link>
                    </div>
                </SwiperSlide>

                {/* <SwiperSlide>
                    <div className='blog_feat_sld'  >
                        <Link target='_blank' to='blog/blog_inside_page'>
                            <div className='blg_main_container'>
                                <div className='blg-custm-contain'>
                                    <p className='new-para'>News</p>
                                    <h2 >BTS warehousing</h2>
                                    <div className='icon-blog'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="13" height="16" viewBox="0 0 13 16" fill="none">
                                            <path d="M2.75514 7.2H4.13271V8.8H2.75514V7.2ZM12.3981 3.2V14.4C12.3981 15.28 11.7782 16 11.0206 16H1.37757C1.01222 16 0.661825 15.8314 0.403481 15.5314C0.145136 15.2313 0 14.8243 0 14.4L0.00688784 3.2C0.00688784 2.32 0.613019 1.6 1.37757 1.6H2.06635V0H3.44392V1.6H8.9542V0H10.3318V1.6H11.0206C11.7782 1.6 12.3981 2.32 12.3981 3.2ZM1.37757 4.8H11.0206V3.2H1.37757V4.8ZM11.0206 14.4V6.4H1.37757V14.4H11.0206ZM8.26542 8.8H9.64299V7.2H8.26542V8.8ZM5.51028 8.8H6.88785V7.2H5.51028V8.8Z" fill="white" />
                                        </svg>
                                        <p>02 december 2022</p>
                                    </div>
                                    <p>Did you come here for something in particular or just general Riker-bashing? And blowing into</p>

                                </div>

                                <div className='blg-img-contain'>
                                    <img src={require('../../../assets/img/blog-image.png')}></img>
                                </div>
                            </div>
                        </Link>
                    </div>
                </SwiperSlide>
        </Swiper> */}
      </div>
    </>
  );
}
