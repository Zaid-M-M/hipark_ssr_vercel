import React from 'react'

export default function Chakan_V_eoc() {
  return (
    <>
    <div className='ep_dtls_inner eoc_div'>

        <div className='eoc_pt1'>
            <div className='pt1_dv pt1_dv1'>
                <h3>Ease of Connectivity</h3>
            </div>
            <div className='pt1_dv pt1_dv2'>
                <p>Location:</p>
                <a class='map_link' href='https://goo.gl/maps/7jEdqY1FmNmDwpFN9' target='_blank'><p>https://goo.gl/maps/7jEdqY1FmNmDwpFN9</p></a>
            </div>
            <div className='pt1_dv pt1_dv3'>
                <div className='map_cta_inner'>
                    <a target='_blank' href="https://www.youtube.com/watch?v=AQlYktA4qfs" className='map_btn'>View Park Video 
                    <span><img src={require('../../../../assets/img/svg/play_icon.svg').default}></img></span></a>
                </div>
            </div>
        </div>
        <div className='eoc_pt2'>
            <div className='pt2_dv pt2_dv1'>
                <p>Main access:</p>
                <p>MIDC Chakan Road  (7 km)</p>
            </div>
            <div className='pt2_dv pt2_dv2'>
                <p>Airport:</p>
                <p>Pune Airport  (41 km)</p>
            </div>
            <div className='pt2_dv pt2_dv3'>
                <p>CBD:</p>
                <p>Pune CBD  (44 km)</p>
            </div>
        </div>

    </div>
    </>
  )
}
