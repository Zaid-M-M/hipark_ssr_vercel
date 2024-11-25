import React from "react";
import "../../../assets/css/section2.css";
import "../../../assets/css/location_map.css";
import { useEffect, useRef } from "react";
import $ from "jquery";

import Kothur_slider_elsc from "../../sections/elsc/elsc_parks_slider/kothur_slider_elsc";
import Patancheru_slider_elsc from "../../sections/elsc/elsc_parks_slider/patancheru_slider_elsc";
import Shoolagiri_slider_elsc from "../../sections/elsc/elsc_parks_slider/shoolagiri_slider_elsc";
import Dobaspet_slider_elsc from "../../sections/elsc/elsc_parks_slider/dobaspet_slider_elsc";
import Redhills_slider_elsc from "../../sections/elsc/elsc_parks_slider/redhills_slider_elsc";

export default function Section2() {

  useEffect(() => {

    $(function () {

      $('.prk_img_popup').hide();

      $('.maximize_btn').on('click', function () {

        $('html, body').stop().animate({
          scrollTop: $(".elsc_section2").offset().top
        }, 'fast');



        $('.prk_img_popup').hide();
        $('#div' + $(this).attr('target')).show();
        $('.prk_img_popup_overlay').show();
      });

      $('.prk_img_popup_close').on('click', function () {
        $('.prk_img_popup').hide();
        $('.prk_img_popup_overlay').hide();
      });


    });

  }, []);

  return (
    <>
      <div className="elsc_section2 mob_pd_LR tab_pd_LR">
        <div className="cstm_container">

          <div className="row no_LR_margin">

            <div className="col-12">
              <h2 class="section_heading txt_wht ">AVAILABLE spaces</h2>
            </div>
            <div className="col-12">
              {/*------------------------------------------------------------------------------------------------------------------- TAB 1 */}
              {/* TAB 1 Links */}
              <ul className="nav nav-pills cstm_client_tabs  elsc_sec2_tab1" role="tablist">
                <li className="nav-item">
                  <a className="nav-link active cstm_link infra_link elsc_tab1_link" data-bs-toggle="pill" href="#hyderabad">Hyderabad</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link cstm_link infra_link elsc_tab1_link" data-bs-toggle="pill" href="#bengaluru">Bengaluru</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link cstm_link infra_link elsc_tab1_link" data-bs-toggle="pill" href="#chennai">Chennai</a>
                </li>
                {/* <li className="nav-item">
                          <a className="nav-link cstm_link infra_link elsc_tab1_link" data-bs-toggle="pill" href="#pune">Pune</a>
                      </li> */}
                {/* <li className="nav-item">
                          <a className="nav-link cstm_link infra_link elsc_tab1_link" data-bs-toggle="pill" href="#gujarat">Gujarat</a>
                      </li> */}

              </ul>



              {/*  TAB 1 panels  */}
              <div className="tab-content">


                {/* Hyderabad TAB  -------------------------------------------------------------------------- Hyderabad TAB  */}
                <div id="hyderabad" className="tab-pane active fade show client_logo_tab">

                  <div className="row">

                    {/* TAB Links */}
                    <div className="col-lg-2 col-md-12 col-12">

                      <div className="elsc_sec_tab2_links_div">
                        <ul className="nav nav-pills elsc_sec2_tab2" role="tablist">
                          <li className="nav-item">
                            <a className="nav-link active elsc_tab2_link" data-bs-toggle="pill" href="#kothur">Kothur {'(3)'}</a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link elsc_tab2_link" data-bs-toggle="pill" href="#patancheru">Patancheru {'(2)'}</a>
                          </li>
                        </ul>
                      </div>

                    </div>

                    {/*  TAB panels  */}
                    <div className="col-lg-10 col-md-12 col-12">

                      <div className="tab-content">

                        <div id="kothur" className="tab-pane active fade show ">
                          <Kothur_slider_elsc />
                        </div>

                        <div id="patancheru" className="tab-pane fade ">
                          <Patancheru_slider_elsc />
                        </div>

                      </div>

                    </div>

                  </div>

                </div>



                {/* Bengaluru TAB  -------------------------------------------------------------------------- Bengaluru TAB  */}
                <div id="bengaluru" className="tab-pane fade show client_logo_tab">

                  <div className="row">

                    {/* TAB Links */}
                    <div className="col-lg-2 col-md-12 col-12">

                      <div className="elsc_sec_tab2_links_div">
                        <ul className="nav nav-pills elsc_sec2_tab2" role="tablist">
                          <li className="nav-item">
                            <a className="nav-link active elsc_tab2_link" data-bs-toggle="pill" href="#shoolagiri">Hosur {'(4)'}</a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link elsc_tab2_link" data-bs-toggle="pill" href="#dobaspet">Dobaspet I {'(3)'}</a>
                          </li> 
                        </ul>
                      </div>

                    </div>

                    {/*  TAB panels  */}
                    <div className="col-lg-10 col-md-12 col-12">

                      <div className="tab-content">

                        <div id="shoolagiri" className="tab-pane active fade show ">
                          <Shoolagiri_slider_elsc />
                        </div>

                        <div id="dobaspet" className="tab-pane fade ">
                          <Dobaspet_slider_elsc />
                        </div>

                      </div>

                    </div>

                  </div>

                </div>



                {/* Chennai TAB  -------------------------------------------------------------------------- Chennai TAB  */}
                <div id="chennai" className="tab-pane fade show client_logo_tab">

                  <div className="row">

                    {/* TAB Links */}
                    <div className="col-lg-2 col-md-12 col-12">

                      <div className="elsc_sec_tab2_links_div">
                        <ul className="nav nav-pills elsc_sec2_tab2" role="tablist">
                          <li className="nav-item">
                            <a className="nav-link active elsc_tab2_link" data-bs-toggle="pill" href="#redhills ">Redhills  {'(2)'}</a>
                          </li>
                        </ul>
                      </div>

                    </div>

                    {/*  TAB panels  */}
                    <div className="col-lg-10 col-md-12 col-12">

                      <div className="tab-content">

                        <div id="redhills" className="tab-pane active fade show ">
                          <Redhills_slider_elsc />
                        </div>

                      </div>

                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>
      </div>
    </>
  );
}
