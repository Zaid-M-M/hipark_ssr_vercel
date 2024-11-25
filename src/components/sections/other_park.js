import React from 'react'
import '../../assets/css/other_park.css';
import { useEffect } from 'react';
import $ from "jquery";
import Delhi_oth_slider from './other_park_slider/delhi_oth_slider';
import Ahmedabad_oth_slider from './other_park_slider/ahmedabad_oth_slider';
import Pune_oth_slider from './other_park_slider/pune_oth_slider';
import Goa_oth_slider from './other_park_slider/goa_oth_slider';
import Hyderabad_oth_slider from './other_park_slider/hyderabad_oth_slider';
import Bengaluru_oth_slider from './other_park_slider/bengaluru_oth_slider';
import "../../helper/common";
import Chennai_oth_slider from './other_park_slider/chennai_oth_slider';

export default function Other_park() {

    useEffect(() => {
        $('.states_tab').on("click", function() {
            $('.park_tab_content').fadeOut();
            $('#tab'+$(this).attr('target')).fadeIn();
        });

        $('.delhi').on("click", function() {

            $(this).css({'background-color':'#eb7d2b'});
            $(this).find('p').css({'color':'#fff'});

            $('.ahmedabad').css({'background-color':'#fff'});
            $('.ahmedabad').find('p').css({'color':'#eb7d2b'});

            $('.pune').css({'background-color':'#fff'});
            $('.pune').find('p').css({'color':'#eb7d2b'});

            $('.goa').css({'background-color':'#fff'});
            $('.goa').find('p').css({'color':'#eb7d2b'});

            $('.hyderabad').css({'background-color':'#fff'});
            $('.hyderabad').find('p').css({'color':'#eb7d2b'});

            $('.bengaluru').css({'background-color':'#fff'});
            $('.bengaluru').find('p').css({'color':'#eb7d2b'});

        });

        $('.ahmedabad').on("click", function() {

            $(this).css({'background-color':'#eb7d2b'});
            $(this).find('p').css({'color':'#fff'});

            $('.delhi').css({'background-color':'#fff'});
            $('.delhi').find('p').css({'color':'#eb7d2b'});

            $('.pune').css({'background-color':'#fff'});
            $('.pune').find('p').css({'color':'#eb7d2b'});

            $('.goa').css({'background-color':'#fff'});
            $('.goa').find('p').css({'color':'#eb7d2b'});

            $('.hyderabad').css({'background-color':'#fff'});
            $('.hyderabad').find('p').css({'color':'#eb7d2b'});

            $('.bengaluru').css({'background-color':'#fff'});
            $('.bengaluru').find('p').css({'color':'#eb7d2b'});

        });

        $('.pune').on("click", function() {

            $(this).css({'background-color':'#eb7d2b'});
            $(this).find('p').css({'color':'#fff'});

            $('.ahmedabad').css({'background-color':'#fff'});
            $('.ahmedabad').find('p').css({'color':'#eb7d2b'});

            $('.delhi').css({'background-color':'#fff'});
            $('.delhi').find('p').css({'color':'#eb7d2b'});

            $('.goa').css({'background-color':'#fff'});
            $('.goa').find('p').css({'color':'#eb7d2b'});

            $('.hyderabad').css({'background-color':'#fff'});
            $('.hyderabad').find('p').css({'color':'#eb7d2b'});

            $('.bengaluru').css({'background-color':'#fff'});
            $('.bengaluru').find('p').css({'color':'#eb7d2b'});

        });

        $('.goa').on("click", function() {

            $(this).css({'background-color':'#eb7d2b'});
            $(this).find('p').css({'color':'#fff'});

            $('.ahmedabad').css({'background-color':'#fff'});
            $('.ahmedabad').find('p').css({'color':'#eb7d2b'});

            $('.pune').css({'background-color':'#fff'});
            $('.pune').find('p').css({'color':'#eb7d2b'});

            $('.delhi').css({'background-color':'#fff'});
            $('.delhi').find('p').css({'color':'#eb7d2b'});

            $('.hyderabad').css({'background-color':'#fff'});
            $('.hyderabad').find('p').css({'color':'#eb7d2b'});

            $('.bengaluru').css({'background-color':'#fff'});
            $('.bengaluru').find('p').css({'color':'#eb7d2b'});

        });

        $('.hyderabad').on("click", function() {

            $(this).css({'background-color':'#eb7d2b'});
            $(this).find('p').css({'color':'#fff'});

            $('.ahmedabad').css({'background-color':'#fff'});
            $('.ahmedabad').find('p').css({'color':'#eb7d2b'});

            $('.pune').css({'background-color':'#fff'});
            $('.pune').find('p').css({'color':'#eb7d2b'});

            $('.goa').css({'background-color':'#fff'});
            $('.goa').find('p').css({'color':'#eb7d2b'});

            $('.delhi').css({'background-color':'#fff'});
            $('.delhi').find('p').css({'color':'#eb7d2b'});

            $('.bengaluru').css({'background-color':'#fff'});
            $('.bengaluru').find('p').css({'color':'#eb7d2b'});

        });

        $('.bengaluru').on("click", function() {

            $(this).css({'background-color':'#eb7d2b'});
            $(this).find('p').css({'color':'#fff'});

            $('.ahmedabad').css({'background-color':'#fff'});
            $('.ahmedabad').find('p').css({'color':'#eb7d2b'});

            $('.pune').css({'background-color':'#fff'});
            $('.pune').find('p').css({'color':'#eb7d2b'});

            $('.goa').css({'background-color':'#fff'});
            $('.goa').find('p').css({'color':'#eb7d2b'});

            $('.hyderabad').css({'background-color':'#fff'});
            $('.hyderabad').find('p').css({'color':'#eb7d2b'});

            $('.delhi').css({'background-color':'#fff'});
            $('.delhi').find('p').css({'color':'#eb7d2b'});

        });

        $('#other_prk_dropdown').on('change',function(){
            $('.park_tab_content').fadeOut('slow');
            // $('.client_logo_tab').addClass('fade');
            $('#' + $(this).val()).fadeIn('slow');
            $('#' + $(this).val()).removeClass('fade');
        });

        (function($) {
              
            $.fn.visible = function(partial) {
              
                var $t            = $(this),
                    $w            = $(window),
                    viewTop       = $w.scrollTop(),
                    viewBottom    = viewTop + $w.height(),
                    _top          = $t.offset().top,
                    _bottom       = _top + $t.height(),
                    compareTop    = partial === true ? _bottom : _top,
                    compareBottom = partial === true ? _top : _bottom;
              
              return ((compareBottom <= viewBottom) && (compareTop >= viewTop));
          
            };
              
          })($);
          
          $(window).on("scroll", function(event){
            
            $(".park_main_slider .slick-list").each(function(i, el) {
              var el = $(el);
              if (el.visible(true)) {
                el.addClass("remov-trnsfrm"); 
              } 
            });            
          });

    })

  return (
    <>
        <div className='other_park_sec snap_sec'>
            <div className=''>
                <div className='row no_LR_margin'>
                    <div className='col-12'>
                        <p className='section_name other_prk_hd'>Explore</p>
                        <h2 className='section_heading other_prk_hd'>Our Other Parks</h2>
                    </div>
                </div>
                <div className='row no_LR_margin'>
                    <div className='col-12 no_right_padding'>

                        <div className='other_park_col1'>
                            
                            <div className='states_tab delhi' target='1'>
                                <p>Delhi</p>
                            </div>
                            <div className='states_tab ahmedabad' target='2'>
                                <p>Ahmedabad</p>
                            </div>
                            <div className='states_tab pune' target='3'>
                                <p>Pune</p>
                            </div>
                            <div className='states_tab goa' target='4'>
                                <p>Goa</p>
                            </div>
                            <div className='states_tab hyderabad' target='5'>
                                <p>Hyderabad</p>
                            </div>
                            <div className='states_tab bengaluru' target='6'>
                                <p>Bengaluru</p>
                            </div>
                            <div className='states_tab chennai' target='7'>
                                <p>Chennai</p>
                            </div>

                            <select className='oth_prk_mob_drop' id='other_prk_dropdown'>
                                <option value='tab1'>Delhi</option>
                                <option value='tab2'>Ahmedabad</option>
                                <option value='tab3'>Pune</option>
                                <option value='tab4'>Goa</option>
                                <option value='tab5'>Hyderabad</option>
                                <option value='tab6'>Bengaluru</option>
                                <option value='tab7'>Chennai</option>
                            </select>  

                        </div>

                        <div className='other_park_col2'>

                            <div className='park_tab_content' id='tab1'>
                                <Delhi_oth_slider/>
                            </div>
                            <div className='park_tab_content' id='tab2'>
                                <Ahmedabad_oth_slider/>
                            </div>
                            <div className='park_tab_content' id='tab3'>
                                <Pune_oth_slider/>
                            </div>
                            <div className='park_tab_content' id='tab4'>
                                <Goa_oth_slider/>
                            </div>
                            <div className='park_tab_content' id='tab5'>
                                <Hyderabad_oth_slider/>
                            </div>
                            <div className='park_tab_content' id='tab6'>
                                <Bengaluru_oth_slider/>
                            </div>
                            <div className='park_tab_content' id='tab7'>
                                <Chennai_oth_slider/>
                            </div>

                        </div>   
                        

                    </div>
                </div> 
            </div>
        </div>       
    </>
  )
}
