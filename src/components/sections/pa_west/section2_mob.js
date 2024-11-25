import React from "react";
import "../../../assets/css/section2_mob.css";
import { useEffect, useRef } from "react";
import $ from "jquery";

import Pune_slider from "../elsc/elsc_mob_slider/elsc_mob_pune_slider";
import Venkatapura_slider from "../elsc/elsc_mob_slider/elsc_mob_venkatapura_slider";
import Bhayala_slider from "../elsc/elsc_mob_slider/elsc_mob_bhayala_slider";


export default function Section2_mob() {

  useEffect(() => {

    $('.prk_img_popup').hide();

      $('.max_btn').on('click',function() {
        console.log('ardh');
        $('html, body').stop().animate({
          scrollTop: $(".Section2_mob").offset().top
        } , 'fast');

        $('.prk_img_popup').hide();
        $('#div_mob' + $(this).attr('target')).show();
        $('.prk_img_popup_overlay').show();

      });

      $('.prk_img_popup_close').on('click',function() { 
        $('.prk_img_popup').hide();
        $('.prk_img_popup_overlay').hide();
      });


    $('#elsc_prk_dropdown').on('change',function(){
      console.log('working');
        $('.elsc_prk_mob_tab').fadeOut('fast');
        // $('.client_logo_tab').addClass('fade');
        $('#' + $(this).val()).fadeIn('fast');
        $('#' + $(this).val()).removeClass('fade');
    });

    $(window).on("load", function () {
      $(".prk_img_popup .react-transform-component.transform-component-module_content__FBWxo").css("transform", "none");
    });

  }, []);

  return (
    <>
      <div className="Section2_mob mob_pd_LR tab_pd_LR">
        <div className="cstm_container">

          <div className="row no_LR_margin">

              <div className="col-12">
                <h2 class="section_heading txt_wht available_txt">AVAILABLE spaces</h2>
              </div>
              <div className="col-12">
                  {/*------------------------------- TAB 1 */}
                  {/* TAB 1 Links */}

                  <select className='elsc_prk_dropdown' id='elsc_prk_dropdown'>
                      <option value='chakan_v_1'>Chakan V</option>
                      <option value='venkatapura_1'>Venkatapura</option>
                      <option value='bhayala_1'>Bhayala</option>
                  </select> 


                  {/*  TAB 1 panels  */}
                  <div className="tab-content">

                        <div id="chakan_v_1" className="tab-pane active show elsc_prk_mob_tab">
                          <Pune_slider/>
                        </div>

                        <div id="venkatapura_1" className="tab-pane elsc_prk_mob_tab">
                          <Venkatapura_slider/>
                        </div>

                        <div id="bhayala_1" className="tab-pane elsc_prk_mob_tab">
                          <Bhayala_slider/>
                        </div>

                  </div>
        
              </div>

          </div>

        </div>
      </div>
    </>
  );
}











