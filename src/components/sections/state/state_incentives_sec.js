import React, { useState } from "react";
import "../../../assets/css/ambition.css";
import "../../../assets/css/state_incentives_sec.css";
import { useEffect, useRef } from "react";
import useFetch from "react-fetch-hook";
import { useParams } from "react-router-dom";
import $ from "jquery";

export default function State_incentives_sec({ initialData }) {
  const [data, setData] = useState([]);
  useEffect(() => {
    $(window).on("load", function () {
      setTimeout(function () {
        var incent_h2 = $(".incentives_sec h2").text().trim();

        if (incent_h2.length <= 0) {
          console.log("H2 Data not found");
          $(".incentives_sec").hide();
        } else {
          console.log("H2 Data found");
          $(".incentives_sec").show();
        }
      }, 3000);
    });
    setData(initialData)
    console.log(initialData)
  }, [initialData]);

  return (
    <>
      {data &&
        data.map(({ id, title, acf }) => (
          <>
            {acf.section_title_incen && (
              <div
                className="ambition_sec snap_sec incentives_sec"
                key={id}>
                <div className="row no_LR_margin">
                  <div className="col-lg-5 col-md-12 col-12 no_padding ambition_col1">
                    <img
                      className="ambition_img"
                      src={acf.section_image_incen}
                      alt={acf.incentives_image_alt}
                    />
                  </div>
                  <div className="col-lg-7 col-md-12 col-12 ambition_col2 tab_pd_LR">
                    <h2 className="section_sub_heading">
                      {acf.section_title_incen}
                    </h2>

                    <p
                      className="para ovrview_para"
                      dangerouslySetInnerHTML={{ __html: acf.paragraph_incen }}
                    />
                  </div>
                </div>
              </div>
            )}
          </>
        ))}
    </>
  );
}
