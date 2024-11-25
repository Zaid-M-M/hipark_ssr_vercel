import React from "react";
import "../../../assets/css/solution_inside.css";
import "../../../assets/css/state_amenities_sec.css";
import "../../../assets/css/source_link.css";
import { useEffect } from "react";
import $ from "jquery";
export default function State_amenities_sec({ initialData }) {
  const data = initialData || [];
  useEffect(() => {
    $(document).ready(function () {
      var source_link = $(".amenities_sec .source_link span").text().trim();
      // alert('working');
      if (source_link.length <= 0) {
        $(".amenities_sec .source_link").hide();
      } else {
        $(".amenities_sec .source_link").show();
      }
    });
  }, []); // Empty dependency array ensures this runs only once

  return (
    <>
      {data &&
        data.map(({ id, title, acf },index) => (
          <div
            className="sol_inside_sec2 mob_pd_LR tab_pd_LR amenities_sec"
            key={`am-${index}`}>
            <div className="cstm_container">
              <div className="row">
                <div className="col-12 sol_icon_col">
                  <div className="row">
                    {/* {acf.amenities_list.map((amenit_list) => ( */}
                    {acf?.amenities_list?.map((amenit_list, idx) => (
                      <div className="col-lg-3 col-md-6 col-12 amenit_col12" key={`amenity-${idx}`}>
                        <div className="sip_info_box">
                          <img
                            alt={acf.amenities_image_alt}
                            src={amenit_list.amenities_image}></img>
                          <h3
                            className=""
                            dangerouslySetInnerHTML={{
                              __html: amenit_list.amenities_title,
                            }}></h3>
                        </div>
                      </div>
                    ))}
                    {/* <div className='col-lg-3 col-md-6 col-12'>
                        <div className='sip_info_box'>
                          <img alt='Statutory and Regulatory Expertise' src={require('../../../assets/img/state/amenities_icons/area.svg')}></img>
                          <h3 className=''>2/3 Area in<br></br> NCR Region</h3>
                        </div>
                      </div>

                      <div className='col-lg-3 col-md-6 col-12'>
                        <div className='sip_info_box'>
                          <img alt='Risk Mitigation' src={require('../../../assets/img/state/amenities_icons/airport.svg')}></img>
                          <h3 className=''>2 International<br></br>Airports: Chandigarh<br></br>and New Delhi</h3>
                        </div>
                      </div>

                      <div className='col-lg-3 col-md-6 col-12'>
                        <div className='sip_info_box'>
                          <img alt='Customer-Centric Approach' src={require('../../../assets/img/state/amenities_icons/road.svg')}></img>
                          <h3 className=''>26131 km of Total Road<br></br>Network, 21 NHs Passing<br></br>Through</h3>
                        </div>
                      </div>

                      <div className='col-lg-3 col-md-6 col-12'>
                        <div className='sip_info_box'>
                          <img alt='Customer-Centric Approach' src={require('../../../assets/img/state/amenities_icons/bridge.png')}></img>
                          <h3 className=''>Connectivity with<br></br>100% Metalled<br></br>Roads</h3>
                        </div>
                      </div>

                      <div className='offset-lg-2 col-lg-3 col-md-6 col-12'>
                        <div className='sip_info_box'>
                          <img alt='Commitment to Ethical Business Practices' src={require('../../../assets/img/state/amenities_icons/rail_track.svg')}></img>
                          <h3 className=''>1710 km Rail<br></br>Routes</h3>
                        </div>
                      </div>
                      
                      <div className='col-lg-3 col-md-6 col-12'>
                        <div className='sip_info_box'>
                          <img alt='Data Monitoring' src={require('../../../assets/img/state/amenities_icons/pwr_capacity.svg')}></img>
                          <h3 className=''>11,242 MW Installed<br></br>Power Capacity</h3>
                        </div>
                      </div>
                      <div className='col-lg-3 col-md-6 col-12'>
                        <div className='sip_info_box'>
                          <img alt='Data Monitoring' src={require('../../../assets/img/state/amenities_icons/electrical.svg')}></img>
                          <h3 className=''>100%<br></br>Electrification</h3>
                        </div>
                      </div> */}
                  </div>
                  <p
                    className="sub_para ovrview_subpara"
                    dangerouslySetInnerHTML={{
                      __html: acf?.amenities_para,
                    }}></p>
                  <p className="source_link">
                    Source:{" "}
                    <span
                      dangerouslySetInnerHTML={{
                        __html: acf?.amen_source_link,
                      }}></span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
    </>
  );
}
