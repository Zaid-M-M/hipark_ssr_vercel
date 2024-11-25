import React from "react";
import "../../../assets/css/agile_eco.css";
import "../../../assets/css/state_info2_sec.css";
import State_parks from "./state_parks";
import { useEffect, useRef } from "react";
import useFetch from "react-fetch-hook";
import { useParams } from "react-router-dom";

export default function State_info2_sec({ initialData }) {
  const data = initialData || [];

  return (
    <>
      {data &&
        data.map(({ id, title, acf }) => (
          <div
            className="agile_eco_sec snap_sec mob_pd_LR tab_pd_LR state_info2_sec"
            key={id}>
            <div className="cstm_container">
              <div className="row">
                <div className="col-12">
                  <h2 className="section_sub_heading ovrview_sub_hd">
                    {acf.section_title_parks}
                  </h2>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12 col-md-12 col-12">
                  <p
                    className="para ovrview_para"
                    dangerouslySetInnerHTML={{
                      __html: acf.paragraph_parks,
                    }}></p>
                </div>
              </div>
            </div>
            <div className="news_slider_sec State_park_slider">
              <State_parks park_category={acf.select_parks} />
            </div>
          </div>
        ))}
    </>
  );
}
