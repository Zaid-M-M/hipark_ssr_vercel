import React from 'react'
import '../../../../assets/css/solution_inside.css';

export default function Solution_inside_sec1() {
  return (
    <>
      <div className='sol_inside_sec1 mob_pd_LR tab_pd_LR'>
        <div className='cstm_container'>

            <div className='row'>
                
                <div className='col-lg-8 col-md-12 col-12'>
                    <div className='sip_cntn_dv_sec1 prk_cnt_dev_sec1'>
                        <p className='sub_para'>Our property management team's key duties include managing the upkeep of all our facilities and ensuring 24x7 operations for our customers.</p>
                        <p className='para'>In our property management services, we prioritize emergency preparedness, ensuring quick and efficient responses in any situation. Our tenants’ goods and employees are in safe hands with our robust safety measures. We work tirelessly to maintain impeccable hygiene standards, and exemplary customer service, ensuring uninterrupted operations and more efficient environment for your business.</p> 
                    </div>
                </div>

                <div className='col-lg-4 col-md-12 col-12 sip_img_col'>
                    <div className='sip_img_dv'>
                      <img alt='Hiparks wareshouse management services' src={require('../../../../assets/img/solutions_inside/proprty_mang/proprty_mang_info.webp')}></img>
                    </div>
                </div>

            </div>
        </div>
      </div>
    </>
  )
}
