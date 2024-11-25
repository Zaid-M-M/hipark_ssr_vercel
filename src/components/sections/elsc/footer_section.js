import React from "react";
import "../../../assets/css/footer_section.css";
import { useEffect, useRef } from "react";

export default function Footer_section() {


  return (
    <>
      <div className="elsc_footer_section mob_pd_LR tab_pd_LR">
        <div className="cstm_container">

          {/* footer row 1 */}
          <div className="row footer_row1 no_LR_margin">
            <div className="col-12">
                <div className="footer_logo">
                  <img src={require('../../../assets/img/elsc_landing_pg/section1/hip_blck_logo.png')}></img>
                </div>
            </div>
          </div>

          {/* footer row 2 */}
          <div className="row footer_row2 no_LR_margin">

            <div className="col-lg-4 col-md-4 col-12 footer_col1">
              <div className="fc_inner">
                <p className="ofc_address"><span>Horizon Industrial Parks Pvt Ltd</span> Floor 15, Tower 1, One World Center Lower Parel, Mumbai 400 013 Maharashtra</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-4 col-12 footer_col2">
              <div className="fc_inner">
                  <div className="email_dv">
                    <label>Email:</label>
                    <a href='mailto:contactus@hiparks.com'>contactus@HiParks.com</a>
                  </div>
                  <div className="phone_dv">
                    <label>Phone no.:</label>
                    <a href='tel:+91 88799 70705' >+91 88799 70705</a>
                  </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-4 col-12 footer_col3">
              <div className="fc_inner">
                <h3>Follow us</h3>
                <ul>
                  <li><a href='https://in.linkedin.com/company/horizon-industrial-parks' target='_black'>
                    <img src={require('../../../assets/img/svg/elsc_landing/elsc_Linkedin.svg')}></img>
                    </a></li>
                  <li><a href='https://www.youtube.com/channel/UCOfvGN61RBCKY48sE8I6mJQ' target='_black'>
                    <img src={require('../../../assets/img/svg/elsc_landing/elsc_youtube.svg')}></img>
                    </a></li>
                  <li><a href='https://www.instagram.com/horizonindustrialparks/' target='_black'>
                    <img src={require('../../../assets/img/svg/elsc_landing/elsc_instagram.svg')}></img>
                    </a></li>
                  {/* <li><a>
                    <img src={require('../../../assets/img/svg/elsc_landing/elsc_Facebook.svg')}></img>
                    </a></li> */}
                </ul>
              </div>
            </div>

          </div>


          {/* footer row 3 */}
          <div className="row footer_row3 no_LR_margin">
            <div className="col-12">
              <div className="footer_bottom_bar">
                <p className="copyright_txt_elsc">2023 Horizon Industrial Parks. All Rights Reserved.</p>
                <p className="footer_links_elsc"> <a href='/privacy_policy'>Privacy Policy </a>  <a href='/disclaimer'> Disclaimer</a> </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
