import React from "react";
import "../../../assets/css/state_eco_indict_sec.css";
import State_manufacturing_sec from "./state_manufacturing_sec";
import { useEffect, useRef } from "react";
import useFetch from "react-fetch-hook";
import { useParams } from "react-router-dom";
import $ from "jquery";

export default function State_eco_indict_sec({ initialData }) {
  const data = initialData || [];
    useEffect(() => {
        $(window).on('load', function() {
          
          setTimeout(function () {
            var mannuf_h2 = $(".manufac_contri_sec h2").text().trim();

            if(mannuf_h2.length <= 0){
              $('.manu_col1').hide();
              $('.manu_col2').hide();
              $('.eco_indict_sec').css('padding-bottom','0');
              $('.manuf_sourc').css('color','#fff');
              $('.eco_manufec_bg').css('background','#f37920');
            }
            else {
              $('.manufac_contri_sec').show();
              $('.eco_manufec_bg').css('background','linear-gradient(180deg, #f37920 74%, #ffffff 74%)');
            }
          }, 3000);
    
        });
    }, []);

  return (
    <>
    {data && data.map(({ id, title , acf  }) => (
        <div className="eco_manufec_bg">
            <div className="eco_indict_sec mob_pd_LR tab_pd_LR" id="" key={id}>
                <div className="cstm_container">
                    <div className="row">
                        <div className="col-12">
                            <h2 className='section_sub_heading'>{acf?.section_title_indic}</h2>
                        </div>
                        <div className="col-lg-12 col-12">

                            <div className="indict_main">

                                {/* {acf.indicator_data.map(indic_d => (     */}
                                {acf?.indicator_data?.map((indic_d, idx) => (
                                    <div className="indict_div" key={`indic-${idx}`}>
                                        <h3 className="indict_num" dangerouslySetInnerHTML={{ __html: indic_d.indicator_no }}></h3>
                                        <p className="indict_txt" dangerouslySetInnerHTML={{ __html: indic_d.indicator_description }}></p>
                                    </div>
                                ))}
            
                            </div>

                        </div>

                    </div>
                </div>
            </div>

            <State_manufacturing_sec/>

        </div>
    ))}
    </>
  );
}
