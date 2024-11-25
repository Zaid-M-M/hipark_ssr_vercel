import React, { useState } from "react";
import Slider from "react-slick";
import { useEffect, useRef } from "react";
import useFetch from "react-fetch-hook";
import { useParams } from "react-router-dom";
import $ from "jquery";
import "../../../assets/css/wrk_envrmnt.css";
import "../../../assets/css/state_manufacturing_sec.css";
import "../../../assets/css/source_link.css";
import "../../../helper/common";

export default function State_manufacturing_sec() {
  const manufacture_slider = {
    arrows: true,
    infinite: false,
    slidesToShow: 6,
    slidesToScroll: 1,
    speed: 500,
    draggable:false,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  let { slug } = useParams();
  const [sliderData, setSliderData] = useState([]);
  const { isLoading, data, error } = useFetch(
    `https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-json/wp/v2/states/?slug=${slug}`
  );

  const response = data && data.length > 0 ? data[0] : null;
  useEffect(() => {
    $(document).ready(function () {
      var source_link = $(".manufac_contri_sec .source_link span")
        .text()
        .trim();

      if (source_link.length <= 0) {
        $(".manufac_contri_sec .source_link").hide();
      } else {
        $(".manufac_contri_sec .source_link").show();
      }
    });
    if (response) {
      const { acf } = response;
      acf.slider_data.forEach((slide) => {
        if (slide.slider_icon) {
          setSliderData([...sliderData, slide]);
        }
      });
    }
  }, [response]);

  return (
    <>
      {response && (
        <div
          className="manufac_contri_sec mob_pd_LR tab_pd_LR"
          id="">
          <div className="cstm_container">
            <div className="row">
              <div className="col-12 manu_col1">
                <h2 className="section_sub_heading">
                  {response.acf.section_title_manuf}
                </h2>
              </div>
              {sliderData.length > 0 && (
                <div className="col-lg-12 col-12 manu_col2">
                  <Slider
                    {...manufacture_slider}
                    className="work_slider">
                    {response.acf.slider_data.map((sld_d) => (
                      <div className="wrk_sld">
                        <div className="wrk_content">
                          <img
                            className=""
                            src={sld_d.slider_icon}
                            alt={response.acf.slider_icon_alt}></img>
                          <p
                            className=""
                            dangerouslySetInnerHTML={{
                              __html: sld_d.slider_description,
                            }}></p>
                        </div>
                      </div>
                    ))}

                    {/* <div className='wrk_sld ws_1'>
                                    <div className='wrk_content'>
                                        <img className='' src={require('../../../assets/img/state/manu_contribution/passng_car.svg')}></img>
                                        <p className=''>Two-Thirds of India’s Passenger Cars</p>
                                    </div>
                                </div>
                                <div className='wrk_sld ws_2'>
                                    <div className='wrk_content'>
                                        <img className='' src={require('../../../assets/img/state/manu_contribution/tractor.svg')}></img>
                                        <p className=''>50% of India’s Tractors</p>
                                    </div>
                                </div>
                                <div className='wrk_sld ws_3'>
                                    <div className='wrk_content'>
                                        <img className='' src={require('../../../assets/img/state/manu_contribution/motorcycle.svg')}></img>
                                        <p className=''>60% of India’s Motorcycles</p>
                                    </div>
                                </div>
                                <div className='wrk_sld ws_4'>
                                    <div className='wrk_content'>
                                        <img className='' src={require('../../../assets/img/state/manu_contribution/scooter.svg')}></img>
                                        <p className=''>No.1 in World for 2-Wheelers Manufacturing</p>
                                    </div>
                                </div>

                                <div className='wrk_sld ws_5'>
                                    <div className='wrk_content'>
                                        <img className='' src={require('../../../assets/img/state/manu_contribution/software.svg')}></img>
                                        <p className=''>3rd Largest Exporter of Software</p>
                                    </div>
                                </div>
                                

                                <div className='wrk_sld ws_6'>
                                    <div className='wrk_content'>
                                        <img className='' src={require('../../../assets/img/state/manu_contribution/fridge.svg')}></img>
                                        <p className=''>50% of India’s Refrigerators</p>
                                    </div>
                                </div> */}
                  </Slider>
                </div>
              )}
              <div className="col-12 manu_col3">
                <p className="source_link manuf_sourc">
                  Source: <span>{response.acf.manufac_source_link}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
