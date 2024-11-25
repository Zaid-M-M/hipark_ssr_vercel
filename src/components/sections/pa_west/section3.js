import React from "react";
import "../../../assets/css/section3.css";
import { useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export default function Section3() {

  const settings = {
    slidesToShow: 4,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 4
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4
        },
      },
      {
        breakpoint: 1020,
        settings: {
          slidesToShow: 3
        },
      },
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 3
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 3
        },
      },
      {
        breakpoint: 481,
        settings: {
          slidesToShow: 2
        }
      }
    ],
    speed: 500,
    infinite: true,
    slidesToScroll: 1,
    arrows: true
  };

  return (
    <>
      <div className="elsc_section3 mob_pd_LR tab_pd_LR">
        <div className="cstm_container">


          {/* Header Row   */}
          <div className="row no_LR_margin">
            <div className="col-12">

              <div className="elsc_client_dv">

                <h2 class="section_heading txt_wht">Our Clients</h2>
                <Slider {...settings} className="elsc_client_logo_slider">

                    <div className="elsc_client sld">
                      <div className="elsc_client_inner">
                        <img src={require('../../../assets/img/clients/Amazon_.png')}></img>
                      </div>
                    </div>
                  
                 
                    <div className="elsc_client sld">
                      <div className="elsc_client_inner">
                        <img src={require('../../../assets/img/clients/BlinkIt.png')}></img>
                      </div>
                    </div>
                  
                 
                    <div className="elsc_client sld">
                      <div className="elsc_client_inner">
                        <img src={require('../../../assets/img/clients/Flipkart.png')}></img>
                      </div>
                    </div>
                  
                 
                    <div className="elsc_client sld">
                      <div className="elsc_client_inner">
                        <img src={require('../../../assets/img/clients/Myntra.png')}></img>
                      </div>
                    </div>
                  
                 
                    <div className="elsc_client sld">
                      <div className="elsc_client_inner">
                        <img src={require('../../../assets/img/clients/Reliance-retail.png')}></img>
                      </div>
                    </div>
                  
                 
                    <div className="elsc_client sld">
                      <div className="elsc_client_inner">
                        <img src={require('../../../assets/img/clients/dealshare.png')}></img>
                      </div>
                    </div>
                  
                 
                    <div className="elsc_client sld">
                      <div className="elsc_client_inner">
                        <img src={require('../../../assets/img/clients/decathlon.png')}></img>
                      </div>
                    </div>
                  
                 
                    <div className="elsc_client sld">
                      <div className="elsc_client_inner">
                        <img src={require('../../../assets/img/clients/firstcry.png')}></img>
                      </div>
                    </div>
                  
                 
                    <div className="elsc_client sld">
                      <div className="elsc_client_inner">
                        <img src={require('../../../assets/img/clients/instacart.png')}></img>
                      </div>
                    </div>
                  
                  </Slider>

              </div>
                
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
