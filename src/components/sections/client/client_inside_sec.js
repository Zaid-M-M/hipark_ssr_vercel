import React from "react";
import "../../../assets/css/clinet_inside_sec.css";
import useFetch from "react-fetch-hook";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import $ from "jquery";
import "../../../helper/common";

export default function Client_inside_sec({initialData}) {
  const data = initialData || [];
  useEffect(() => {
    $(".hide_content").hide();
    $(".read_more_btn").on("click", function () {
      var txt = $(".hide_content").is(":visible") ? "Read More " : "Read Less ";
      $(".read_more_btn").text(txt);
      $(".hide_content").slideToggle(200);
      var btn_txt = document.getElementById("read_more_btn").text;
      if (btn_txt === "Read More ") {
        console.log("Read More");
      } else if (btn_txt === "Read Less ") {
        console.log("Read Less");
      }
    });
  });

  return (
    <>
      {data &&
        data.map(({ id, acf, title, content, slug }) => (
          <div className="client_inside_sec ">
            <div className="cstm_container">
              <div className="row no_LR_margin">
                <div className="col-lg-7 col-md-7 col-12 ovrview_col cstm">
                  {/* <p className='section_sub_heading ovrview_sub_hd'>Overview</p> */}

                  <h2
                    className="section_sub_heading ovrview_sub_hd"
                    dangerouslySetInnerHTML={{
                      __html: acf.overview_title,
                    }}></h2>

                  <p
                    className="para ovrview_para clnt_ovrw_para"
                    dangerouslySetInnerHTML={{
                      __html: acf.overview_paragraph,
                    }}></p>
                </div>
                <div className="col-lg-5 col-md-5 col-12 cc_overvw_patch">
                  <div className="ovrview_div">
                    <div className="ovr_lnd_area_spc sector_prt">
                      <p
                        className="ovrview_subpoints"
                        dangerouslySetInnerHTML={{
                          __html: acf.sector_title,
                        }}></p>
                      <p
                        className="ovrview_subpoints_sub_heading cstm"
                        dangerouslySetInnerHTML={{
                          __html: acf.sector_paragraph,
                        }}></p>
                    </div>
                    <div className="ovr_lnd_area_spc prduct_prt">
                      <p
                        className="ovrview_subpoints"
                        dangerouslySetInnerHTML={{
                          __html: acf.product_manufacture_title,
                        }}></p>
                      <p
                        className="ovrview_subpoints_sub_heading cstm"
                        dangerouslySetInnerHTML={{
                          __html: acf.product_manufacture_paragraph,
                        }}></p>

                      <p
                        className="hide_content ovrview_subpoints_sub_heading cstm"
                        dangerouslySetInnerHTML={{
                          __html: acf.product_manufacture_readmore_paragraph,
                        }}></p>
                      <a
                        className="read_more_btn"
                        id="read_more_btn"
                        data-content="toggle-text">
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row no_LR_margin looker_row">
                <div className="col-12">
                  {/* <p className='section_sub_heading ovrview_sub_hd'>Overview</p> */}
                  <h2
                    className="section_sub_heading ovrview_sub_hd ovr_sub_hd"
                    dangerouslySetInnerHTML={{
                      __html: acf.closer_titile,
                    }}></h2>
                  <p
                    className="para ovrview_para clnt_ovrw_para"
                    dangerouslySetInnerHTML={{
                      __html: acf.closer_paragraph,
                    }}></p>

                  {/* <ul className='para ovrview_para clnt_ovrw_para' >
                                    <li>A bespoke facility spanning an area of approximately 1,50,000 sq. ft.</li>
                                    <li>Amenities and design to support manufacturing, assembly, and warehousing operations for rear axles.</li>
                                    <li>A particular focus on harnessing solar energy, using sustainable materials for construction, and energy and water efficient systems</li>
                                </ul> */}
                </div>
              </div>
            </div>

            <div className="info_img_box">
              <div className="row no_LR_margin">
                <div className="col-12 bg_img_col">
                  <img
                    className="img-client-pg"
                    alt={acf.image_alt_tag}
                    src={acf.glance_background_image}
                  />
                  <img
                    className="inside_spotlight_arrow client_pg"
                    alt={acf.image_alt_tag}
                    src={require("../../../assets/img/home_sldr_arrow.png")}></img>
                </div>
              </div>

              <div className="info-content-box">
                <div className="row info-box no_LR_margin">
                  <div className="col-lg-12">
                    <div className="content-box">
                      {acf.glance_details.map((glance_sub) => (
                        <div
                          className="box-one"
                          key={id}>
                          <img
                            className="box_img"
                            alt={acf.image_alt_tag}
                            src={glance_sub.glance_icon}></img>
                          <p
                            className="box_para"
                            dangerouslySetInnerHTML={{
                              __html: glance_sub.glance_para,
                            }}></p>
                          <p
                            className="box_num_para"
                            dangerouslySetInnerHTML={{
                              __html: glance_sub.glance_big_hd,
                            }}></p>
                        </div>
                      ))}

                      {/* <div className='box-one two'>
                                            <img className='box_img' src={require('../../../assets/img/svg/drive_1.svg')}></img>
                                            <p className='box_para'>Open Area for Utilities:</p>
                                            <p className='box_num_para'>24, 801 Sq. Ft.</p>
                                        </div>

                                        <div className='box-one three'>
                                            <img className='box_img' src={require('../../../assets/img/svg/solar-panel_1.svg')}></img>
                                            <p className='box_para'>Roof Top Solar Capacity:</p>
                                            <p className='box_num_para'>7,50,000 Watts</p>
                                        </div>

                                        <div className='box-one four'>
                                            <img className='box_img' src={require('../../../assets/img/svg/co2_1.svg')}></img>
                                            <p className='box_para'>C02 Mitigated with Solar:</p>
                                            <p className='box_num_para'>23, 062 tonnes</p>
                                        </div>


                                        <div className='box-one five'>
                                            <img className='box_img' src={require('../../../assets/img/svg/clock_1.svg')}></img>
                                            <p className='box_para'>Delivery Time:</p>
                                            <p className='box_num_para'>10 Months</p>
                                        </div> */}
                    </div>
                  </div>
                </div>
              </div>

              <div className="hd_text">
                <div className="cstm_container case-std">
                  <div className="row no_LR_margin">
                    <div className="col-12">
                      <h2
                        className="info_hd_txt"
                        dangerouslySetInnerHTML={{
                          __html: acf.solution_title,
                        }}></h2>
                      <p
                        className="para ovrview_para"
                        dangerouslySetInnerHTML={{
                          __html: acf.solution_paragraph,
                        }}></p>

                      {/* <p className='para ovrview_para head_para'>Timely delivery of the facility</p>
                                        <p className='para ovrview_para'>Having understood the requirements put forward by Benteler Automotive India, HiParks proceeded to deliver a tailored BTS space, complete with technical, design and infrastructural expertise. The key highlights of this built-to-suit facility are outlined below.</p>

                                        <p className='para ovrview_para head_para'>Adequate space and floor area</p>
                                        <p className='para ovrview_para'>Benteler Automotive India intended to use the new facility for warehousing, manufacturing, as well as assembly of its products. Keeping this primary requirement at the forefront, HiParks delivered a BTS facility spread across1,50,000 sq. ft. The facility includes an open area perfectly suited for pallet stacking, parking, and other utilities. Furthermore, the unit also offers a customized office space designed to accommodate around 300 employees of Benteler Automotive India.</p>

                                        <p className='para ovrview_para head_para'>Prime location for the BTS facility</p>
                                        <p className='para ovrview_para'>The new facility designed for Benteler Automotive India is situated in a prime location at Chakan’s MIDC area, near Pune. This region is home to major automotive Original Equipment Manufacturers (OEMs) and Tier I and Tier II suppliers, making it an excellent option for the automotive manufacturer to further expand their business and operations successfully.</p>

                                        <p className='para ovrview_para head_para'>Advanced infrastructural facilities</p>
                                        <p className='para ovrview_para'>The built-to-suit warehouse is also equipped with top-of-the-line facilities to ensure efficient and effective operations. The foundations, supporting columns and girders have all been constructed to facilitate the installation of overhead cranes, making the movement and storage of heavy automotive parts easier. Temperature control is also a top priority at the new facility, and the BTS space is equipped with an HVAC system and an air handling unit to regulate the temperature within the premises. Additionally, the roof and the walls in the new BTS facility have been well-insulated to maintain the desired temperature and minimize energy consumption.</p>

                                        <p className='para ovrview_para head_para'>Visionary measures to support future growth</p>
                                        <p className='para ovrview_para'>Horizon Industrial Parks also went the extra mile and took Benteler Automotive India’s plans for the future into consideration while designing the facility and obtaining the necessary approvals. In fact, the facility is soon expected to receive approval for allowing the ‘Red’ category of industrial operations, thus allowing Benteler Automotive India to eventually set up a paint shop within the BTS premises itself..</p> */}
                    </div>
                  </div>
                </div>
              </div>

              <div className="key_section">
                <div className="cstm_container case-std key_forword">
                  <div className="row no_LR_margin ">
                    <div className="col-12">
                      {/* <p className='section_sub_heading ovrview_sub_hd'>Overview</p> */}

                      <h2
                        className="section_sub_heading ovrview_sub_hd"
                        dangerouslySetInnerHTML={{
                          __html: acf.key_title,
                        }}></h2>

                      <p
                        className="para ovrview_para clnt_ovrw_para"
                        dangerouslySetInnerHTML={{
                          __html: acf.key_paragraph,
                        }}></p>
                    </div>
                  </div>
                </div>
              </div>

              {/* <div className="slider_image cc_gallery_sec">
                <div className="cstm_container case-std">
                  <div className="row no_LR_margin ">
                    <div className="col-12">
                      <h2 className="section_sub_heading ovrview_sub_hd btm_hd">
                        Gallery
                      </h2>

                      <div className="leader_slider_cd">
                        <Swiper
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
                          spaceBetween={30}
                          speed={500}
                          navigation={true}
                          className="mySwiper news_slider cc_gallery_slder">
                          {acf.image_gallery.map((image_gallery_photo) => (
                            <SwiperSlide>
                              <div
                                className="slider_img cc_grly_sld"
                                key={id}>
                                <img src={image_gallery_photo}></img>
                              </div>
                            </SwiperSlide>
                          ))}
                        </Swiper>
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        ))}
    </>
  );
}
