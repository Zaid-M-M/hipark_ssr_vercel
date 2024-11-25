import React from "react";
import useFetch from "react-fetch-hook";
import { useEffect, useRef, useState } from "react";
import $ from "jquery";
import { Link } from "react-router-dom";
import EventPopupSlider from "./event_popup_slider";
import Slider from "react-slick";
import "../../../assets/css/event_sec.css";

export default function Event_ITS() {
  useEffect(() => {
    $(".event_box_home").on("click", function () {
      $(".load-container").hide();
      $(".event_popup").addClass("event_popup_opn");
      $(".event_overlay").show();
      $("body").css("overflow", "hidden");
      $("html, body").animate(
        {
          scrollTop: $("#inthespotlight").offset().top,
        },
        10
      );
    });

    $(".ep_cls_btn").on("click", function () {
      $(".event_popup").removeClass("event_popup_opn");
      $(".event_overlay").hide();
      $("body").css("overflow", "visible");
      $("html, body").animate(
        {
          scrollTop: $("#inthespotlight").offset().top,
        },
        10
      );
    });

    $("#events_inthespot .ITS_sld a").bind("contextmenu", function (e) {
      e.preventDefault(); // Stop right click on link
      return false;
    });
    $("#events_inthespot .ITS_sld a").on("click", function (event) {
      // Check if the Ctrl key is pressed
      if (event.ctrlKey || event.metaKey) {
        // Prevent the default action (opening link in a new tab)
        event.preventDefault();
        // You can add your custom logic here if needed
        console.log("Ctrl + Click disabled");
        $(".event_popup").removeClass("event_popup_opn");
        $(".event_overlay").css("display", "none");
        $("body").css("overflow", "auto");
      }
    });
  });

  const { data } = useFetch(
    "https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-json/wp/v2/events?per_page=5"
  );

  const [data1, setData] = useState(null);
  const [visible, setVisible] = useState(false);

  const toggleItem = (cs_item = null) => {
        setData(cs_item);
        setVisible(cs_item !== null);
  };

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
            {data && data.map(({ id , acf , content , title , event_year , event_categories , slug}) => (
              <div>
              <div className="ITS_sld">
                <a onClick={() => toggleItem({ id, acf, content, title })}>
                  <div className="image-conatoner event_box_home">
                    <div className="img-box">
                      <img
                        src={acf.in_thes_potlight_image_home}
                        alt=""
                      ></img>
                    </div>
                    <div className="text-box">
                      <h2
                        dangerouslySetInnerHTML={{
                          __html: title.rendered,
                        }}
                      ></h2>
                      <div className="icon-blog">
                        <img
                          src={
                            require("../../../assets/img/svg/ITS_calender_icon.svg")
                              
                          }
                          alt=""
                        ></img>
                        <p>{acf.date}</p>
                      </div>
                      <hr></hr>
                      <a onClick={() => toggleItem({ id, acf, content, title })} className='read_more_btn'>Read More</a>
                      {/* <Link to={"event/" + slug} className="read_more_btn">
                        Read More
                      </Link> */}
                      {/* <p
                        className="blg_bx_para"
                        dangerouslySetInnerHTML={{ __html: 'content' }}
                      ></p> */}
                    </div>
                  </div>
                </a>
              </div>
              </div>
            ))}
        </Slider>

        <Link to="/events" className="arrow_btn ITS_lnding_btn">
          View All
        </Link>
      </div>

      {/* Popup Div Code */}
      {/* <EventPopupSlider /> */}
      {visible === true && data1 !== null && (
          <EventPopupSlider data1={data1} closeModal={() => toggleItem()} />
      )}
      <div className='event_overlay'></div>

    </>
  );
}
