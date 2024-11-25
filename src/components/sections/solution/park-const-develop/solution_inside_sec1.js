import React from 'react'
import '../../../../assets/css/solution_inside.css';

export default function Solution_inside_sec1() {
  return (
    <>
      <div className='sol_inside_sec1 mob_pd_LR tab_pd_LR'>
        <div className='cstm_container'>

            <div className='row'>
                
                <div className='col-lg-8 col-md-12 col-12 sip_cntn_col'>
                    <div className='sip_cntn_dv_sec1 prk_cnt_dev_sec1'>
                      <p className='sub_para'>Our in-house project and development experts are reimagining industrial and logistics parks as social cohorts. They are creating humanistic spaces within industrial setups, that care for the environment and people. </p>
                        <p className='para'>Our vast industry experience and long-standing relationships with leading architects, consultants and contractors, enables us to accelerate the design process, maximise value-engineering, provide reliable technical expertise and post-delivery support to our customers.</p>
                        <p className='para'>We cater to all kinds of requirements including read-to-move and built-to-suit. We have well-planned plug-and-play facilities where our customers can simply move in and get to work. Our built-to-suit facilities can be 100% customized to serve complex requirements of manufacturing and process industries. We offer real-time construction updates to keep our customers informed about the progress of their leased units. </p> 
                        <p className='para'>All parks and buildings are NBC compliant. They are built to global standards of institutional players, using sustainable materials and construction processes that are aimed at reducing the environmental impact of our activities.</p> 
                    </div>
                </div>

                <div className='col-lg-4 col-md-12 col-12 sip_img_col '>
                    <div className='sip_img_dv'>
                      <img alt='Industrial park construction' src={require('../../../../assets/img/solutions_inside/park_const/park_const_info.jpg')}></img>
                    </div>
                </div>
                
            </div>
        </div>
      </div>
    </>
  )
}
