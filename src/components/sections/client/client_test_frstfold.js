import React from 'react'
import { useEffect, useRef } from "react";
import "../../../assets/css/client_test_frstfold.css";

export default function Client_test_frstfold() {

    const videoCS = useRef(null);
    const videoCSattemptPlay = () => {
        videoCS &&
      videoCS.current &&
      videoCS.current.play().catch((error) => {
          console.error("Error attempting to play", error);
        });
    };

    useEffect(() => {
        videoCSattemptPlay();
    }, []);


  return (
    <>
      <div className="client_1st_testi_sec mob_pd_LR tab_pd_LR" id='testimonial'>
        <div className="cstm_container">
            <div className="row no_LR_margin">
            <div className="col-12 no_padding">
                <h2 className="section_heading">Customers speak</h2>
                <div className="row ct1_row no_LR_margin">
                    <div className="col-lg-8 col-md-12 col-12 no_padding">
                        <div className="ct1_col1_dv">
                            <iframe id='' className="vm-vid"src="https://player.vimeo.com/video/905851105"  allow="autoplay" allowfullscreen="allowfullscreen" mozallowfullscreen="mozallowfullscreen" msallowfullscreen="msallowfullscreen" oallowfullscreen="oallowfullscreen" webkitallowfullscreen="webkitallowfullscreen"></iframe> 
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-12 col-12 no_padding">
                        <div className="ct1_col2_dv">
                            <p className="sub_para">We are passionate about our customers’ success and take pride in their thriving growth stories.</p>
                            <p className="sub_para">Our quick response times, collaborative approach to creating the right-fit solutions and focus on operating sustainably are the qualities our customers and partners have consistently commended and recognised.</p>
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
