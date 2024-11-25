import React from 'react'
import { useEffect, useRef } from "react";
import $ from "jquery";
import useFetch from "react-fetch-hook";
import { useParams } from "react-router-dom";
import { gsap } from '../../helper/common'
import '../../assets/css/location_map.css';

export default function Location_map({initialData}) {

    const data = initialData || [];

    // Heading text animation variable
    const txt_animate_pi_2 = useRef(null);

    useEffect(() => {

        // Heading text animation code
        gsap.to("#txt_animate_pi_2", {
            y:0,
            duration: 1.3,
            ease: "power4.out",
            delay: 0.3,
            scrollTrigger: {
                trigger: "#txt_animate_pi_2",
                markers: false
            }
        });
       
        $('.con_name').on("click", function() {
            $('.loc_map_name').css('color','#fff');
            $(this).find('.loc_map_name').css('color','#313D47');

            $('.loc_map_name_div span').css('background-color','#fff');
            $(this).find('span').css('background-color','#313D47');

            $('.map_div').fadeOut();
            $('#con'+$(this).attr('target')).fadeIn();
        });


        $('.indust_name').on("click", function() {
            $('.loc_map_name').css('color','#fff');
            $(this).find('.loc_map_name').css('color','#313D47');

            $('.loc_map_name_div span').css('background-color','#fff');
            $(this).find('span').css('background-color','#313D47');

            $('.map_div').fadeOut();
            $('#indust'+$(this).attr('target')).fadeIn();
        });

        $('.main_acc_name').on("click", function() {
            $('.loc_map_name').css('color','#fff');
            $(this).find('.loc_map_name').css('color','#313D47');

            $('.loc_map_name_div span').css('background-color','#fff');
            $(this).find('span').css('background-color','#313D47');

            $('.map_div').fadeOut();
            $('#main_acc'+$(this).attr('target')).fadeIn();
        });

        
        
        $('#connectivity').on("click", function() {

            $('#con1').fadeIn();
            $('.connectivity_map').fadeIn();
            $('.industrial_map').fadeOut();
            $('.main_access_map').fadeOut();

        });

        $('#industrial').on("click", function() {
            
            $('#indust1').fadeIn();
            $('.connectivity_map').fadeOut();
            $('.industrial_map').fadeIn();
            $('.main_access_map').fadeOut();

        });

        $('#main_access').on("click", function() {

            $('#main_acc1').fadeIn();
            $('.connectivity_map').fadeOut();
            $('.industrial_map').fadeOut();
            $('.main_access_map').fadeIn();

        });

    })

  return (
    <>
        <div className='location_map_sec snap_sec'>
            
            <div className='row no_LR_margin'>

                <div className='col-lg-6 col-md-12 col-12 loca_map_col1'>
                   

                    <div className="animate_txt ">
                        <h2 ref={txt_animate_pi_2} className='section_heading loc_map_hd' id='txt_animate_pi_2'>Ease of Access</h2>
                    </div>

                    {data && data.map(({ id, title , acf  }) => (

                        <div>
                        <div id="accordion1" className='accord_dv loc_map_accord'>
                            <div className="card intg_card">
                                <div className="card-header intg_card_header">
                                    <a className="btn intg_btn" data-bs-toggle="collapse" href="#collapseOne" id='connectivity'>
                                        <span className='plus_icon accord_icon'>+</span><span className='minus_icon accord_icon'>-</span>
                                        CONNECTIVITY
                                    </a>
                                </div>
                                <div id="collapseOne" className="collapse show" data-bs-parent="#accordion1">
                                    <div className="card-body loc_map_body">
                                        <div className='map_loc_div'>
                                            {acf?.connectivity?.map((sub)=>
                                                <div className='loc_map_name_div   con_name' target={sub.no}>
                                                    <span className=''></span>
                                                    <p className='loc_map_name'>{sub.location_name} {sub.location_km}</p>
                                                </div>
                                            )} 
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card intg_card">
                                <div className="card-header intg_card_header">
                                    <a className="collapsed btn intg_btn" data-bs-toggle="collapse" href="#collapseTwo" id='industrial'>
                                        <span className='plus_icon accord_icon'>+</span><span className='minus_icon accord_icon'>-</span>
                                        INDUSTRIAL CLUSTERS NEARBY
                                    </a>
                                </div>
                                <div id="collapseTwo" className="collapse" data-bs-parent="#accordion1">
                                    <div className="card-body loc_map_body">
                                        <div className='map_loc_div'>    
                                            {acf?.industrial_clusters_nearby?.map((sub)=>
                                                <div className='loc_map_name_div   indust_name' target={sub.no}>
                                                    <span className=''></span>
                                                    <p className='loc_map_name'>{sub.location_name} {sub.location_km}</p>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card intg_card">
                                <div className="card-header intg_card_header">
                                    <a className="collapsed btn intg_btn" data-bs-toggle="collapse" href="#collapseThree" id='main_access'>
                                        <span className='plus_icon accord_icon'>+</span><span className='minus_icon accord_icon'>-</span>
                                        Main Access
                                    </a>
                                </div>
                                <div id="collapseThree" className="collapse" data-bs-parent="#accordion1">
                                    <div className="card-body loc_map_body">
                                        <div className='map_loc_div'>
                                            {acf?.main_access?.map((sub)=>
                                                <div className='loc_map_name_div main_acc_name' target={sub.no}>
                                                    <span className=''></span>
                                                    <p className='loc_map_name'>{sub.location_name} {sub.location_km}</p>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            

                        </div>
                        <div className='map_cta_dv'>
                            <div className='map_cta_inner'>
                                <a target='_blank' href={acf.map_button_url} className='map_btn'>View on Map 
                                <span><img src={require('../../assets/img/svg/map_cord_location.svg')}></img></span></a>
                                <h5>Or</h5>
                            </div>
                            <ul>
                                <li>Use these coordinates:</li>
                                <li><a dangerouslySetInnerHTML={{ __html: acf.coordinates_no }}></a></li>
                            </ul>
                        </div>
                         </div>                       

                    ))} 

                </div>

                {data && data.map(({ id, title , acf  }) => (
                <div className='col-lg-6 col-md-12 col-12 loca_map_col2'>

                    {/* Connectivity Map div */}
                    <div className='connectivity_map outer_div_map'>
                        
                        <div className='inner_div_map'>

                            {acf?.connectivity?.map((sub)=>
                                <div className='map_div' id={`con${sub.no}`}>
                                    <iframe src={sub.map_embed} ></iframe>
                                </div>
                            )} 
                           
                        </div>

                    </div>

                    {/* Industrial Map div */}
                    <div className='industrial_map outer_div_map'>

                        <div className='inner_div_map'>

                            {acf?.industrial_clusters_nearby?.map((sub)=>
                                <div className='map_div' id={`indust${sub.no}`}>
                                    <iframe src={sub.map_embed} ></iframe>
                                </div>
                            )} 

                        </div>

                    </div>

                    {/* Main Access Map div */}
                    <div className='main_access_map outer_div_map'>

                        <div className='inner_div_map'>
                            
                            {acf?.main_access?.map((sub)=>
                                <div className='map_div' id={`main_acc${sub.no}`}>
                                    <iframe src={sub.map_embed} ></iframe>
                                </div>
                            )} 

                        </div>

                    </div>
                </div>
                 ))} 

            </div>
            
        </div>
    </>
  )
}
