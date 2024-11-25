import React from "react";
import "../../../assets/css/prk_overview.css";
import "../../../assets/css/state_landscape_sec.css";
import "../../../assets/css/source_link.css";
import { useEffect } from "react";
import $ from "jquery";

export default function State_landscape_sec({ initialData }) {
  const data = initialData || [];

  useEffect(() => {
    var state_pg = window.location.pathname;

    if (
      state_pg === "/maharashtra" ||
      state_pg === "/tamil-nadu" ||
      state_pg === "/telangana"
    ) {
      $(".state_landscape_sec").addClass("specific_state_pg_landscpe");
    } else {
      $(".state_landscape_sec").removeClass("specific_state_pg_landscpe");
    }
  }, []);

  return (
    <>
      {data &&
        data.map(({ id, title, acf }, index) => (
          <div
            className="ovrview_sec mob_pd_LR snap_sec tab_pd_LR state_landscape_sec"
            id=""
            key={index}>
            <div className="cstm_container">
              <div className="row ">
                <div className="col-lg-8 col-md-12 col-12 ovrview_col exp_col1 st_lands_col1">
                  <h2 className="section_sub_heading ovrview_sub_hd">
                    {acf?.section_title1}
                  </h2>

                  <div>
                    <p
                      className="para ovrview_para"
                      dangerouslySetInnerHTML={{ __html: acf?.paragraph1 }}></p>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6 col-12 st_lands_col2">
                  <div className="ovrview_div">
                    <h3 className="sub_para incen_ttl">
                      {acf?.incentivised_title}
                    </h3>
                    <ul className="sector_list">
                      {/* {acf.incentivised_list.map((incent_list) => ( */}
                      {acf?.incentivised_list?.map((incent_list, idx) => (
                        <li  key={`incentive-${idx}`}>{incent_list.list_text}</li>
                      ))}
                    </ul>
                  </div>

                  {/* <p className='source_link lsnds_surce' >Source: {acf.source_link}</p> */}
                </div>
              </div>
            </div>
          </div>
        ))}
    </>
  );
}
