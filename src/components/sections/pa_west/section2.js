import React from "react";
import "../../../assets/css/section2.css";
import { useEffect, useRef } from "react";
import $ from "jquery";

import Chakan_v_slider_pa_west from "../elsc/elsc_parks_slider/chakan_v_slider_elsc";
import Venkatapura_slider_pa_west from "../elsc/elsc_parks_slider/venkatapura_slider_elsc";
import Bhayala_slider_pa_west from "../elsc/elsc_parks_slider/bhayala_slider_elsc";


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
                  <a className="nav-link active cstm_link infra_link elsc_tab1_link" data-bs-toggle="pill" href="#pune">Pune</a>
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


                {/* Chakan TAB  ------------------------------------------------------------------------------------- Chakan TAB  */}
                <div id="pune" className="tab-pane active fade show client_logo_tab">

                  <div className="row">

                    {/* TAB Links */}
                    <div className="col-lg-2 col-md-12 col-12">

                      <div className="elsc_sec_tab2_links_div">
                        <ul className="nav nav-pills elsc_sec2_tab2" role="tablist">
                          <li className="nav-item">
                            <a className="nav-link active elsc_tab2_link" data-bs-toggle="pill" href="#chakan_v">Chakan V {'(5)'}</a>
                          </li>
                        </ul>
                      </div>

                    </div>

                    {/*  TAB panels  */}
                    <div className="col-lg-10 col-md-12 col-12">

                      <div className="tab-content">

                        <div id="chakan_v" className="tab-pane active fade show ">
                          <Chakan_v_slider_pa_west />
                        </div>

                      </div>

                    </div>

                  </div>

                </div>



                {/* Goa TAB  ------------------------------------------------------------------------------------- Goa TAB  */}
                <div id="goa" className="tab-pane fade show client_logo_tab">

                  <div className="row">

                    {/* TAB Links */}
                    <div className="col-lg-2 col-md-12 col-12">

                      <div className="elsc_sec_tab2_links_div">
                        <ul className="nav nav-pills elsc_sec2_tab2" role="tablist">
                          <li className="nav-item">
                            <a className="nav-link active elsc_tab2_link" data-bs-toggle="pill" href="#venkatapura">Venkatapura {'(2)'}</a>
                          </li>
                        </ul>
                      </div>

                    </div> 

                    {/*  TAB panels  */}
                    <div className="col-lg-10 col-md-12 col-12">

                      <div className="tab-content">

                        <div id="venkatapura" className="tab-pane active fade show">
                          <Venkatapura_slider_pa_west />
                        </div>

                      </div>

                    </div>

                  </div>

                </div>



                {/* Bhayala TAB  ------------------------------------------------------------------------------------- Bhayala TAB  */}
                <div id="gujarat" className="tab-pane fade show client_logo_tab">

                  <div className="row">

                    {/* TAB Links */}
                    <div className="col-lg-2 col-md-12 col-12">

                      <div className="elsc_sec_tab2_links_div">
                        <ul className="nav nav-pills elsc_sec2_tab2" role="tablist">
                          <li className="nav-item">
                            <a className="nav-link active elsc_tab2_link" data-bs-toggle="pill" href="#bhayala">Bhayala {'(1)'}</a>
                          </li>
                        </ul>
                      </div>

                    </div>

                    {/*  TAB panels  */}
                    <div className="col-lg-10 col-md-12 col-12">

                      <div className="tab-content">

                        <div id="bhayala" className="tab-pane active fade show ">
                          <Bhayala_slider_pa_west />
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
