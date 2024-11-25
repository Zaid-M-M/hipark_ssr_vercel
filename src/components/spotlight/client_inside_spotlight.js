import React, { useState } from 'react'
import '../../assets/css/park_inside_spotlight.css';
import useFetch from "react-fetch-hook";
import { useParams } from "react-router-dom";
import $ from "jquery";
import Helmet from 'react-helmet';
import { useEffect } from "react";
import { Link } from 'react-router-dom';

export default function Client_inside_spotlight({initialData}) {
  const data = initialData || [];
  return (
    <>
      {data &&
        data.map(({ acf, title }, index) => (
          <div key={`client_stories + ${index}`}>
            <div className="park_inside_spotlight_sec client_inside_spotlight_sec">
              <Helmet>
                <title>{acf.meta_title}</title>
                <meta
                  name="description"
                  content={acf.meta_description}
                />
                <meta
                  name="keyword"
                  content={acf.meta_keyword}
                />

                <meta property="og:title" content={acf.meta_title} />
                <meta property="og:description" content={acf.meta_description} />
                <meta property="og:image" content={acf.client_stories_image} />
              </Helmet>

              <img
                src={acf.client_stories_image}
                alt={acf.image_alt_tag}
                className="park_inside_bg_img"></img>
              <img
                className="inside_spotlight_arrow"
                src={require("../../assets/img/home_sldr_arrow.png")}
                alt=""></img>

              <div className="breadcrum_div">
                <div className="cstm_container">
                  <div className="row">
                    <div className="col-12 ">
                      <div className="breadcrum_content">
                        <h3>
                          <Link to="/">Home</Link> /{" "}
                          <Link to="/case-studies">Case Studies /</Link>{" "}
                          <span
                            dangerouslySetInnerHTML={{
                              __html: title.rendered,
                            }}></span>
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
                        <div className="prk_dtl_line2">
                          <h1
                            className="spotlight_pg_title bg_size_ttl"
                            dangerouslySetInnerHTML={{
                              __html: title.rendered,
                            }}></h1>
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
  )
}