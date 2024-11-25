import React from 'react'
import '../../../assets/css/agile_eco.css';
import '../../../assets/css/state_info_sec.css';
import $ from "jquery";
import { useEffect, useRef } from "react";
import useFetch from "react-fetch-hook";
import { useParams } from "react-router-dom";

export default function State_info_sec({ initialData }) {
    const data = initialData || [];
    useEffect(() => {

        //Read More Button Code
        $('.moreless_button').on('click', function() {
            
            console.log('working');
            $('.moretext').slideToggle();
            if ($('.moreless_button').text() == "Read more") {
                $(this).text("Read less")
            } else {
                $(this).text("Read more")
            }
        });

    });

  return (
    <>
    {data && data.map(({ id, title , acf  }) => (
        <div className='agile_eco_sec snap_sec mob_pd_LR tab_pd_LR state_info_sec' key={id}>
            <div className='cstm_container'>
                <div className='row'>
                    <div className='col-12'>
                        <h2 className='section_sub_heading ovrview_sub_hd'>{acf.section_title}</h2>
                        <p className='sub_para ovrview_subpara'>{acf.sub_title}</p>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-lg-6 col-md-12 col-12 agile_eco_col1'>

                        <p className='sub_para ovrview_subpara' dangerouslySetInnerHTML={{ __html: acf.sub_paragraph }}></p>

                        <p className='para ovrview_para' dangerouslySetInnerHTML={{ __html: acf.paragraph }}></p>
                        <p className='para ovrview_para moretext' dangerouslySetInnerHTML={{ __html: acf.extra_paragraph }}></p>

                    <a className="moreless_button moreless_ttl state_info_read_btn" >Read more</a>

                    </div>
                    <div className='col-lg-6 col-md-12 col-12 agile_eco_col2'>
                        <img src={acf.section_image} alt={acf.state_info_image_alt} className='agile_eco_img'></img>
                            {/* <div className='reveal_img'>
                                <div className='reveal_img_dv' ref={agile_eco_img} id='agile_eco_img'></div>
                                <img className='agile_eco_img' src={require('../../assets/img/agile_eco.jpg')} ></img>
                            </div> */}
                    </div>
                </div>
            </div>
        </div>
    ))}
    </>
  )
}





