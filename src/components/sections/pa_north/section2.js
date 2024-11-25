import React from "react";
import "../../../assets/css/section2.css";
import "../../../assets/css/location_map.css";
import { useEffect, useRef } from "react";
import $ from "jquery";

import Faruknagar_slider_pa_north from "../elsc/elsc_parks_slider/faruknagar_slider_elsc";
import Koka_slider_pa_north from "../elsc/elsc_parks_slider/koka_slider_elsc";
import Delhi_one_slider_pa_north from "../elsc/elsc_parks_slider/delhi_one_slider_elsc";
import Delhi_two_slider_pa_north from "../elsc/elsc_parks_slider/delhi_two_slider_elsc";
import Bilaspur_slider_pa_north from "../elsc/elsc_parks_slider/bilaspur_slider_elsc";


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

      //////////////////////  Tab Active on URL  ///////////////////////////////////////
      // Activate other tabs based on URL
      var pg_url = window.location.pathname;
      var hash = window.location.hash;
      var pa_url = pg_url+hash;
      console.log(pa_url);
      if (pa_url === '/parks-availability-north#farukhnagar') {

        $('.faaruknagar_tb').addClass('active');
        $('#farukhnagar').addClass('active show');

        $('.delhi_2_tb, .delhi_I_tb, .koka_tb, .bilaspur_tb').removeClass('active');
        $('#delhi_II, #delhi_I, #koka, #bilaspur').removeClass('active show');

        $('html, body').animate({
          scrollTop: $('.elsc_section2 ').offset().top
        }, 1000); 

      } else if (pa_url === '/parks-availability-north#koka') {

        $('.koka_tb').addClass('active');
        $('#koka').addClass('active show');

        $('.delhi_2_tb, .delhi_I_tb, .faaruknagar_tb, .bilaspur_tb').removeClass('active');
        $('#delhi_II, #delhi_I, #farukhnagar, #bilaspur').removeClass('active show');

        $('html, body').animate({
          scrollTop: $('.elsc_section2 ').offset().top
        }, 1000); 

      } else if (pa_url === '/parks-availability-north#delhi-i') {

        $('.delhi_I_tb').addClass('active');
        $('#delhi_I').addClass('active show');

        $('.delhi_2_tb, .faaruknagar_tb, .koka_tb, .bilaspur_tb').removeClass('active');
        $('#delhi_II, #farukhnagar, #koka, #bilaspur').removeClass('active show');

        $('html, body').animate({
          scrollTop: $('.elsc_section2 ').offset().top
        }, 1000); 
        
      } else if (pa_url === '/parks-availability-north#delhi-ii') {

        $('.delhi_2_tb').addClass('active');
        $('#delhi_II').addClass('active show');

        $('.delhi_I_tb, .faaruknagar_tb, .koka_tb, .bilaspur_tb').removeClass('active');
        $('#delhi_I, #farukhnagar, #koka, #bilaspur').removeClass('active show');

        $('html, body').animate({
          scrollTop: $('.elsc_section2 ').offset().top
        }, 1000); 

      } else if (pa_url === '/parks-availability-north#bilaspur') {

        $('.bilaspur_tb').addClass('active');
        $('#bilaspur').addClass('active show');

        $('.delhi_2_tb, .delhi_I_tb, .faaruknagar_tb, .koka_tb').removeClass('active');
        $('#delhi_II, #delhi_I, #farukhnagar, #koka').removeClass('active show');

        $('html, body').animate({
          scrollTop: $('.elsc_section2 ').offset().top
        }, 1000); 
      }

      ///////////////////////  Tab Active on URL  /////////////////////////////////////////////


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
                  <a className="nav-link active cstm_link infra_link elsc_tab1_link" data-bs-toggle="pill" href="#ncr">NCR</a>
                </li>
                {/* <li className="nav-item">
                          <a className="nav-link cstm_link infra_link elsc_tab1_link" data-bs-toggle="pill" href="#hyderabad">Hyderabad</a>
                      </li> */}
                {/* <li className="nav-item">
                          <a className="nav-link cstm_link infra_link elsc_tab1_link" data-bs-toggle="pill" href="#bengaluru">Bengaluru</a>
                      </li> */}
                {/* <li className="nav-item">
                          <a className="nav-link cstm_link infra_link elsc_tab1_link" data-bs-toggle="pill" href="#pune">Pune</a>
                      </li> */}
                {/* <li className="nav-item">
                          <a className="nav-link cstm_link infra_link elsc_tab1_link" data-bs-toggle="pill" href="#gujarat">Gujarat</a>
                      </li> */}



              </ul>
              {/*  TAB 1 panels  */}
              <div className="tab-content">


                {/* NCR TAB  ------------------------------------------------------------------------------------------------------------------- NCR TAB  */}
                <div id="ncr" className="tab-pane active fade show client_logo_tab">

                  <div className="row">

                    {/* TAB Links */}
                    <div className="col-lg-2 col-md-12 col-12">

                      <div className="elsc_sec_tab2_links_div">
                        <ul className="nav nav-pills elsc_sec2_tab2" role="tablist">
                          <li className="nav-item">
                            <a className="nav-link active elsc_tab2_link faaruknagar_tb" data-bs-toggle="pill" href="#farukhnagar">Farukhnagar {'(2)'}</a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link elsc_tab2_link koka_tb" data-bs-toggle="pill" href="#koka">Koka {'(1)'}</a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link elsc_tab2_link delhi_I_tb" data-bs-toggle="pill" href="#delhi_I">Delhi I {'(2)'}</a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link elsc_tab2_link delhi_2_tb" data-bs-toggle="pill" href="#delhi_II">Delhi II {'(1)'}</a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link elsc_tab2_link bilaspur_tb" data-bs-toggle="pill" href="#bilaspur">Bilaspur {'(3)'}</a>
                          </li>
                        </ul>
                      </div>

                    </div>

                    {/*  TAB panels  */}
                    <div className="col-lg-10 col-md-12 col-12">

                      <div className="tab-content">

                        <div id="farukhnagar" className="tab-pane active fade show ">
                          <Faruknagar_slider_pa_north />
                        </div>

                        <div id="koka" className="tab-pane fade ">
                          <Koka_slider_pa_north />
                        </div>

                        <div id="delhi_I" className="tab-pane fade ">
                          <Delhi_one_slider_pa_north />
                        </div>

                        <div id="delhi_II" className="tab-pane fade ">
                          <Delhi_two_slider_pa_north />
                        </div>

                        <div id="bilaspur" className="tab-pane fade ">
                          <Bilaspur_slider_pa_north />
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
