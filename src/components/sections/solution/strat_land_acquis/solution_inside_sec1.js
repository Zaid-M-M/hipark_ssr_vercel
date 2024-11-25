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
                        <p className='sub_para'>At Horizon Industrial Parks, we invest substantial resources in finding the right locations to proactively expand in regions where our customers aspire to grow. Our park locations are judiciously chosen for their strategic points of access, the supportive community and surrounding resources, capacity to scale up, and local government support.</p>
                        <p className='para'>Our land acquisition and investment strategy are derived from our in-depth knowledge of the Indian supply chain dynamics and trends, our deep understanding of our customers' infrastructure requirements, the market knowledge required to identify prospective catchment areas and the commitment to excel in delivering exceptionally engineered warehousing facilities that are on par with global standards and certifications.</p>
                        <p className='para'>Our parks are located in eight markets across India including Delhi NCR, Pune, Bengaluru, Hyderabad. We are also expanding our presence into other Tier I & Tier II markets and acquiring land / ready assets within city limits for mid and last mile distribution and value-added services.</p>
                    </div>
                </div>

                <div className='col-lg-4 col-md-12 col-12 sip_img_col'>
                    <div className='sip_img_dv'>
                      <img src={require('../../../../assets/img/solutions_inside/Strategic_land/sec1.webp')} alt='Strategic land acquisition'></img>
                    </div>
                </div>

            </div>
        </div>
      </div>
    </>
  )
}
