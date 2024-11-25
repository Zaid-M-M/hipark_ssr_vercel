import React from 'react'
import { useEffect, useRef } from "react";
import { Link } from 'react-router-dom';
import { gsap } from '../../helper/common'
import '../../assets/css/park_inside_spotlight.css';

export default function Esg_spotlight() {

        // Heading text animation variable
        const spot_hd_anmt_esg = useRef(null);
    
        useEffect(() => {
        
            // Heading text animation code
            gsap.to("#spot_hd_anmt_esg", {
                y:0,
                duration: 1.3,
                ease: "power4.out",
                delay: 0.7,
                scrollTrigger: {
                    trigger: "#spot_hd_anmt_esg",
                    markers: false
                }
            });
    
    }, []);

  return (
    <>
        <div className='park_inside_spotlight_sec'>
            
            <img src={require('../../assets/img/esg_spotlight.jpg')} className='park_inside_bg_img'></img>
            <img className='inside_spotlight_arrow' src={require('../../assets/img/home_sldr_arrow.png')}></img>
  
            <div className='breadcrum_div'>
                <div className='cstm_container'>
                    <div className='row'>
                        <div className='col-12 '>
                            <div className='breadcrum_content'>
                                <h3><Link to='/'>Home</Link>  /  Sustainability</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>

        <div className='spotlight_content_dv'>
            <div className='cstm_container'>
                <div className='row'>
                    <div className='col-12 '>
                        <div className='spotlight_content_box'>
                            <div className='spotlight_inner_content'>
                                <div className='prk_dtl_line2'>
                                    <h1 className='spotlight_pg_title bg_size_ttl'>Creating new benchmarks in sustainability</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </>
  )
}
