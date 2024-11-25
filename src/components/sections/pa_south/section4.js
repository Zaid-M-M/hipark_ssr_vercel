import React from "react";
import "../../../assets/css/section4.css";
import { useEffect, useRef } from "react";

export default function Section4() {


  return (
    <>
      <div className="elsc_section4 mob_pd_LR tab_pd_LR">
        <div className="cstm_container">

          <div className="row no_LR_margin">
            <div className="col-12">
                <h2 className="section_heading inetg_sol_elsc_hd">Integrated Solutions</h2>
            </div>  
          </div>

          <div className="row no_LR_margin">

            <div className="col-lg-3 col-md-6 col-12 no_padding">
              <div className="solutions_bx sol_bx1">
                <div className="solutions_bx_inner">
                  <img src={require('../../../assets/img/svg/elsc_landing/strategic_land_elsc.svg')}></img>
                  <div className="sbi_one">
                    <h3>STRATEGIC LAND ACQUISITION</h3>
                    <p className="para">Based on strategic access points, infrastructure, scalability and local government support.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-12 no_padding">
              <div className="solutions_bx sol_bx2">
                <div className="solutions_bx_inner">
                  <img src={require('../../../assets/img/svg/elsc_landing/prk_compliance_elsc.svg')}></img>
                  <div className="sbi_one">
                    <h3>PARK COMPLIANCES AND APPROVALS</h3>
                    <p className="para">Timely due diligence to accelerate operations at the parks</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-12 no_padding">
              <div className="solutions_bx sol_bx3">
                <div className="solutions_bx_inner">
                  <img src={require('../../../assets/img/svg/elsc_landing/project_dev_elsc.svg')}></img>
                  <div className="sbi_one">
                    <h3>PROJECT DEVELOPMENT</h3>
                    <p className="para">Ready-to-move, built-to-suit, multi-level facilities to meet complex industry requirements.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-12 no_padding">
              <div className="solutions_bx">
                <div className="solutions_bx_inner">
                  <img src={require('../../../assets/img/svg/elsc_landing/op_assets_manage_elsc.svg')}></img>
                  <div className="sbi_one">
                    <h3>Operations and asset management</h3>
                    <p className="para">Multi-disciplinary facility management services for seamless operations.</p>
                  </div>
                </div>
              </div>
            </div>

          </div>

          <a className="booksite_dv_btn booksite_mob book_visit_btn">Book a site visit</a>

        </div>
      </div>
    </>
  );
}
