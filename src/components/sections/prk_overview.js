import React from 'react'
import useFetch from "react-fetch-hook";
import { useParams } from "react-router-dom";
import { useEffect, useRef } from "react";
import { gsap } from '../../helper/common'
import '../../assets/css/prk_overview.css'

export default function Overview({initialData}) {
    // Heading text animation variable
    const txt_animate_pi_1 = useRef(null);
    const park_in_fade = useRef(null);
    const data = initialData || [];
    useEffect(() => {
    
        // Heading text animation code
        gsap.to("#txt_animate_pi_1", {
            y:0,
            duration: 1.3,
            ease: "power4.out",
            delay: 0.3,
            scrollTrigger: {
                trigger: "#txt_animate_pi_1",
                markers: false
            }
        });

        // Para animation code
        gsap.to("#park_in_fade", {
            opacity:1,
            duration: 1.5,
            ease: "linear",
            delay: 0.9,
            scrollTrigger: {
                trigger: "#park_in_fade",
                markers: false
            }
        });

    }, []);

    return (
        <>
            <div className='ovrview_sec snap_sec mob_pd_LR tab_pd_LR'>
                
                <div className='cstm_container'>

                    <div className='row ' >
                        <div className='col-lg-7 col-md-7 col-12 ovrview_col pkr_ovw'>
                            {/* <p className='section_sub_heading ovrview_sub_hd'>Overview</p> */}

                            <div className="animate_txt ">
                                <h2 ref={txt_animate_pi_1} className='section_sub_heading ovrview_sub_hd' id='txt_animate_pi_1'>Overview</h2>
                            </div>
                            {data && data.map(({ id, title , acf , content }) => (
                                <div>
                             
                                    <p className='sub_para ovrview_subpara prk_ovr_1' dangerouslySetInnerHTML={{ __html: acf.park_hd_para }}></p>
                                    <p className='para ovrview_para' dangerouslySetInnerHTML={{ __html: acf.park_para1 }}></p>
                                    <p className='para ovrview_para' dangerouslySetInnerHTML={{ __html: content.rendered }}></p>
                                </div>
                            ))} 

                        </div>

                        <div className='col-lg-5 col-md-5 col-12'>

                            {data && data.map(({ id, title , acf , content }) => (
                                <div className='ovrview_div'>
                                    
                                    <div className='ovr_lnd_area_spc'>
                                        <p className='ovrview_subpoints'>Land area</p>
                                        <p className='ovrview_subpoints_sub_heading'>{acf.land_area}</p>
                                    </div>
                                    <div className='ovr_lnd_area_spc'>
                                        <p className='ovrview_subpoints'>development potential</p>
                                        <p className='ovrview_subpoints_sub_heading'>{acf.development_potential}</p>
                                    </div>
                                    <div className='ovr_lnd_area_spc'>
                                        <p className='ovrview_subpoints'>Land usage</p>
                                        <p className='ovrview_subpoints_sub_heading'>{acf.land_usage}</p>
                                    </div>
                                    {/* <div className=''>
                                        <p className='ovrview_subpoints'>Construction status</p>
                                        <p className='ovrview_subpoints_sub_heading'>{acf.construction_status}</p>
                                    </div> */}

                                </div>
                            ))} 

                        </div>
                    </div>


                </div>
                
            </div>

        </>
    )
}

