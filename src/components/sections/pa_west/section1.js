import React from "react";
import "../../../assets/css/section1.css";
import { useEffect, useRef } from "react";
import $ from "jquery";

export default function Section1() {
  const videoEl = useRef(null);
  const attemptPlay = () => {
    videoEl &&
      videoEl.current &&
      videoEl.current.play().catch((error) => {
        console.error("Error attempting to play", error);
      });
  };

  useEffect(() => {
    $(".stat_number").each(function () {
      var size = $(this).text().split(".")[1]
        ? $(this).text().split(".")[1].length
        : 0;
      $(this)
        .prop("Counter", 0)
        .animate(
          {
            Counter: $(this).text(),
          },
          {
            duration: 4000,
            step: function (func) {
              $(this).text(parseFloat(func).toFixed(size));
            },
          }
        );
    });
  }, []);

  attemptPlay();

  return (
    <>
      <div className="elsc_section1 mob_pd_LR tab_pd_LR">
        <div className="cstm_container">
          {/* Header Row   */}
          <div className="row header_row no_LR_margin">
            <div className="col-lg-6 col-md-6 col-12">
              <div className="hip_logo_div">
                <a href="/">
                  <img
                    src={require("../../../assets/img/elsc_landing_pg/section1/hip_blck_logo.png")}
                  ></img>
                </a>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-12">
              <div className="booksite_dv">
                <a className="booksite_dv_btn book_visit_btn">
                  Book a site visit
                </a>
              </div>
            </div>
          </div>
          {/* Banner Row   */}
          <div className="row banner_row no_LR_margin">
            <div className="col-lg-6 col-md-12 col-12 banner_Col1">
              <div className="banner_content">
                <h1>Scale up the Agile Way Scale up with Horizon</h1>
                <p className="para">
                  Horizon Industrial Parks is Blackstone's logistics platform in
                  India.{" "}
                </p>
                <p className="para">
                  It is one of India’s most significant Grade A industrial,
                  warehousing and logistics real-estate developers.
                </p>
                <p className="para">
                  Our team of industry experts, backed by Blackstone's global
                  experience, deliver parks built to global standards with
                  world-class infrastructure, standardised specifications, and
                  facilities designed to make the work environment highly
                  productive
                </p>
              </div>

              <a className="booksite_dv_btn booksite_mob book_visit_btn">
                Book a site visit
              </a>
            </div>
            <div className="col-lg-6 col-md-12 col-12 banner_Col2">
              <div className="banner_video">
                <video
                  className=" gloabl_video"
                  controls
                  playsInline
                  autoPlay
                  loop
                  muted
                  src={require("../../../assets/video/Horizon_Industrial_Parks_Brand_Manifesto1.mp4")}
                  ref={videoEl}
                />
              </div>
            </div>
          </div>

          {/* Counter Row   */}
          <div className="row no_LR_margin counter_row">
            <div className="col-lg-3 col-md-3 col-6">
              <div className="counter_dv cd1">
                <h3 className="cd_hd stat_number">1800</h3>
                <p className="cd_p">Acres</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-6">
              <div className="counter_dv cd2">
                <h3 className="cd_hd stat_number">44</h3>
                <p className="cd_p">Million sq ft</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-6">
              <div className="counter_dv cd3">
                <h3 className="cd_hd stat_number">10</h3>
                <p className="cd_p">Markets</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-6">
              <div className="counter_dv cd4">
                <h3 className="cd_hd stat_number">37</h3>
                <p className="cd_p">Parks</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
