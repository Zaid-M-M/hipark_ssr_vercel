import React from "react";
import "../../../assets/css/section2.css";
import '../../../assets/css/location_map.css';
import { useEffect, useRef } from "react";
import $ from "jquery";

import Faruknagar_slider_elsc from "./elsc_parks_slider/faruknagar_slider_elsc";
import Koka_slider_elsc from "./elsc_parks_slider/koka_slider_elsc";
import Delhi_one_slider_elsc from "./elsc_parks_slider/delhi_one_slider_elsc";
import Delhi_two_slider_elsc from "./elsc_parks_slider/delhi_two_slider_elsc";
import Bilaspur_slider_elsc from "./elsc_parks_slider/bilaspur_slider_elsc";

import Kothur_slider_elsc from "./elsc_parks_slider/kothur_slider_elsc";
import Patancheru_slider_elsc from "./elsc_parks_slider/patancheru_slider_elsc";

import Shoolagiri_slider_elsc from "./elsc_parks_slider/shoolagiri_slider_elsc";
import Dobaspet_slider_elsc from "./elsc_parks_slider/dobaspet_slider_elsc";

import Redhills_slider_elsc from "./elsc_parks_slider/redhills_slider_elsc";

import Chakan_v_slider_elsc from "./elsc_parks_slider/chakan_v_slider_elsc";
import Venkatapura_slider_elsc from "./elsc_parks_slider/venkatapura_slider_elsc";
import Bhayala_slider_elsc from "./elsc_parks_slider/bhayala_slider_elsc";


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
              {/*------------------------------------------------ TAB 1 */}
              {/* TAB 1 Links */}
              <ul className="nav nav-pills cstm_client_tabs  elsc_sec2_tab1" role="tablist">
                <li className="nav-item">
                  <a className="nav-link active cstm_link infra_link elsc_tab1_link" data-bs-toggle="pill" href="#ncr">NCR</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link cstm_link infra_link elsc_tab1_link" data-bs-toggle="pill" href="#hyderabad">Hyderabad</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link cstm_link infra_link elsc_tab1_link" data-bs-toggle="pill" href="#bengaluru">Bengaluru</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link cstm_link infra_link elsc_tab1_link" data-bs-toggle="pill" href="#chennai">Chennai</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link cstm_link infra_link elsc_tab1_link" data-bs-toggle="pill" href="#pune">Pune</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link cstm_link infra_link elsc_tab1_link" data-bs-toggle="pill" href="#goa">Goa</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link cstm_link infra_link elsc_tab1_link" data-bs-toggle="pill" href="#gujarat">Gujarat</a>
                </li>



              </ul>
              {/*  TAB 1 panels  */}
              <div className="tab-content">


                {/* NCR TAB  -------------------------------------------------------------------------------------------------- NCR TAB  */}
                <div id="ncr" className="tab-pane active fade show client_logo_tab">

                  <div className="row">

                    {/* TAB Links */}
                    <div className="col-lg-2 col-md-12 col-12">

                      <div className="elsc_sec_tab2_links_div">
                        <ul className="nav nav-pills elsc_sec2_tab2" role="tablist">
                          <li className="nav-item">
                            <a className="nav-link active elsc_tab2_link" data-bs-toggle="pill" href="#farukhnagar">Farukhnagar {'(2)'}</a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link elsc_tab2_link" data-bs-toggle="pill" href="#koka">Koka {'(1)'}</a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link elsc_tab2_link" data-bs-toggle="pill" href="#delhi_I">Delhi I {'(2)'}</a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link elsc_tab2_link" data-bs-toggle="pill" href="#delhi_II">Delhi II {'(1)'}</a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link elsc_tab2_link" data-bs-toggle="pill" href="#bilaspur">Bilaspur {'(3)'}</a>
                          </li>
                        </ul>
                      </div>

                    </div>

                    {/*  TAB panels  */}
                    <div className="col-lg-10 col-md-12 col-12">

                      <div className="tab-content">

                        <div id="farukhnagar" className="tab-pane active fade show ">
                          <Faruknagar_slider_elsc />
                        </div>

                        <div id="koka" className="tab-pane fade">
                          <Koka_slider_elsc />
                        </div>

                        <div id="delhi_I" className="tab-pane fade ">
                          <Delhi_one_slider_elsc />
                        </div>

                        <div id="delhi_II" className="tab-pane fade ">
                          <Delhi_two_slider_elsc />
                        </div>

                        <div id="bilaspur" className="tab-pane fade ">
                          <Bilaspur_slider_elsc />
                        </div>

                      </div>

                    </div>

                  </div>

                </div>


                {/* Hyderabad TAB ------------------------------------------------------------------------------------------------ Hyderabad TAB  */}
                <div id="hyderabad" className="tab-pane fade client_logo_tab">
                  <div className="row">

                    {/* TAB Links */}
                    <div className="col-lg-2 col-md-2 col-12">

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
                    <div className="col-lg-10 col-md-10 col-12">
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


                {/* Bengaluru TAB --------------------------------------------------------------------------------------- Bengaluru TAB  */}
                <div id="bengaluru" className="tab-pane fade client_logo_tab">

                  <div className="row">

                    {/* TAB Links */}
                    <div className="col-lg-2 col-md-12 col-12">

                      <div className="elsc_sec_tab2_links_div">
                        <ul className="nav nav-pills elsc_sec2_tab2" role="tablist">
                          <li className="nav-item">
                            <a className="nav-link active elsc_tab2_link" data-bs-toggle="pill" href="#shoolagiri">Shoolagiri {'(4)'}</a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link elsc_tab2_link" data-bs-toggle="pill" href="#dobaspet">Dobbaspet I {'(11)'}</a>
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
                        <div id="dobaspet" className="tab-pane fade">
                          <Dobaspet_slider_elsc />
                        </div>
                      </div>

                    </div>

                  </div>

                </div>


                {/* Chennai TAB --------------------------------------------------------------------------------------- Chennai TAB  */}
                <div id="chennai" className="tab-pane fade client_logo_tab">

                  <div className="row">

           
                    <div className="col-lg-2 col-md-12 col-12">

                      <div className="elsc_sec_tab2_links_div">
                        <ul className="nav nav-pills elsc_sec2_tab2" role="tablist">
                          <li className="nav-item">
                            <a className="nav-link active elsc_tab2_link" data-bs-toggle="pill" href="#redhills">Redhills {'(2)'}</a>
                          </li>
                        </ul>
                      </div>

                    </div>

              
                    <div className="col-lg-10 col-md-12 col-12">

                      <div className="tab-content">
                        <div id="chennai" className="tab-pane active fade show ">
                          <Redhills_slider_elsc />
                        </div>
                      </div>

                    </div>

                  </div>

                </div>


                {/* Pune TAB ------------------------------------------------------------------------------------------------------------------- Pune TAB  */}
                <div id="pune" className="tab-pane fade client_logo_tab">


                  <div className="row">

                    {/* TAB Links */}
                    <div className="col-lg-2 col-md-2 col-12">

                      <div className="elsc_sec_tab2_links_div">
                        <ul className="nav nav-pills elsc_sec2_tab2" role="tablist">
                          <li className="nav-item">
                            <a className="nav-link active elsc_tab2_link" data-bs-toggle="pill" href="#chakan_5">Chakan V {'(8)'}</a>
                          </li>
                        </ul>
                      </div>

                    </div>

                    {/*  TAB panels  */}
                    <div className="col-lg-10 col-md-10 col-12">

                      <div className="tab-content">
                        <div id="chakan_5" className="tab-pane active fade show ">
                          <Chakan_v_slider_elsc />
                        </div>
                      </div>

                    </div>

                  </div>


                </div>


                {/* Goa TAB ------------------------------------------------------------------------------------------------------------------- Pune TAB  */}
                <div id="goa" className="tab-pane fade client_logo_tab">


                  <div className="row">

                    <div className="col-lg-2 col-md-2 col-12">

                      <div className="elsc_sec_tab2_links_div">
                        <ul className="nav nav-pills elsc_sec2_tab2" role="tablist">
                          <li className="nav-item">
                            <a className="nav-link active elsc_tab2_link" data-bs-toggle="pill" href="#venkatapura">Venkatapura {'(2)'}</a>
                          </li>
                        </ul>
                      </div>

                    </div>

           
                    <div className="col-lg-10 col-md-10 col-12">

                      <div className="tab-content">
                        <div id="chakan_5" className="tab-pane active fade show ">
                          <Venkatapura_slider_elsc />
                        </div>
                      </div>

                    </div>

                  </div>


                </div>


                {/* Gujarat TAB ------------------------------------------------------------------------------------------------------ Gujarat TAB  */}
                <div id="gujarat" className="tab-pane fade client_logo_tab">

                  <div className="row">

                    {/* TAB Links */}
                    <div className="col-lg-2 col-md-2 col-12">

                      <div className="elsc_sec_tab2_links_div">
                        <ul className="nav nav-pills elsc_sec2_tab2" role="tablist">
                          <li className="nav-item">
                            <a className="nav-link active elsc_tab2_link" data-bs-toggle="pill" href="#bhayala">Bhayala {'(1)'}</a>
                          </li>

                        </ul>
                      </div>

                    </div>

                    {/*  TAB panels  */}
                    <div className="col-lg-10 col-md-10 col-12">

                      <div className="tab-content">

                        <div id="bhayala" className="tab-pane active fade show ">
                          <Bhayala_slider_elsc />
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
