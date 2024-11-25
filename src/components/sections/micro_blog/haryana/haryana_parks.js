import React from 'react'
import '../../../../assets/css/agile_eco.css';
import '../../../../assets/css/state_info2_sec.css';
import '../../../../assets/css/micro_blg_prk.css';
import State_parks from '../../state/state_parks';
import { useEffect, useRef } from "react";
import useFetch from "react-fetch-hook";
import { useParams } from "react-router-dom";

export default function Haryana_parks() {

  return (
    <>

      <div className='agile_eco_sec snap_sec mob_pd_LR tab_pd_LR state_info2_sec micro_blg_prk'>
          
          <div className='news_slider_sec'>
            <div className='row'>
                  <div className='col-12'>
                      <h2 className='section_sub_heading ovrview_sub_hd'>Horizon Industrial Parks in Maharashtra</h2>
                  </div>
              </div>
            <State_parks park_category = '55'/>
          </div>
      </div>

 
    </>
  )
}
