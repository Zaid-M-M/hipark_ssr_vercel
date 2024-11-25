import React, {  } from "react";
import "../../assets/css/park_inside_spotlight.css";
import { Link } from "react-router-dom";
import Helmet from "react-helmet";

export default function Park_inside_spotlight({initialData}) {
  const data = initialData || [];
  return (
    <>
      {data &&
        data.map(({ id, title, acf }) => (
          <div key={id}>
            <div className="park_inside_spotlight_sec">
              <Helmet>
                <title>{acf.meta_title}</title>
                <meta
                  name="description"
                  content={acf.meta_description}
                />
                <meta property="og:title" content={acf.meta_title} />
                <meta property="og:description" content={acf.meta_description} />
                <meta property="og:image" content={acf.park_spotlight_image} />
              </Helmet>

              <img
                src={acf.park_spotlight_image}
                className="park_inside_bg_img"
                alt=""
              />
              <img
                className="inside_spotlight_arrow"
                src={require("../../assets/img/home_sldr_arrow.png")}
                alt=""
              />

              <div className="breadcrum_div">
                <div className="cstm_container">
                  <div className="row">
                    <div className="col-12 ">
                      <div className="breadcrum_content">
                        <h3>
                          <Link to="/">Home</Link> /{" "}
                          <a href="/industrial-and-logistics-parks-in-india">
                            INDUSTRIAL AND WAREHOUSING PARKS
                          </a>{" "}
                          / {acf.state_name} / {acf.park_name}
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="spotlight_content_dv">
              <div className="cstm_container">
                <div className="row">
                  <div className="col-12 ">
                    <div className="spotlight_content_box">
                      <div className="spotlight_inner_content">
                        <div className="prk_dtl_line1">
                          <h1 className="new_h1">{acf.h1_tag}</h1>
                        </div>
                        <div className="prk_dtl_line2 prk_spot_inside_hd">
                          <h1 className="spotlight_pg_title">
                            {acf.park_name}
                          </h1>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
    </>
  );
}
