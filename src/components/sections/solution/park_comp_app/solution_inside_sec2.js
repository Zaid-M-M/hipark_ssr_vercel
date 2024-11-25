import React from 'react'
import '../../../../assets/css/solution_inside.css';

export default function Solution_inside_sec2() {
  return (
    <>
      <div className='sol_inside_sec2 mob_pd_LR tab_pd_LR'>
        <div className='cstm_container'>

            <div className='row'>
                <div className='col-12 sol_icon_col'>
                   <div className='row'>

                      <div className='col-lg-4 col-md-6 col-12'>
                        <div className='sip_info_box'>
                          <img alt='Statutory and Regulatory Expertise' src={require('../../../../assets/img/solutions_inside/parks_compliance/svg/Statutory-icon.svg')}></img>
                          <h3 className=''>Statutory and Regulatory Expertise</h3>
                        </div>
                      </div>

                      <div className='col-lg-4 col-md-6 col-12'>
                        <div className='sip_info_box'>
                          <img alt='Risk Mitigation' src={require('../../../../assets/img/solutions_inside/parks_compliance/svg/risk-icon.svg')}></img>
                          <h3 className=''>Risk Mitigation</h3>
                        </div>
                      </div>

                      <div className='col-lg-4 col-md-6 col-12'>
                        <div className='sip_info_box'>
                          <img alt='Customer-Centric Approach' src={require('../../../../assets/img/solutions_inside/parks_compliance/svg/customer-icon.svg')}></img>
                          <h3 className=''>Customer-Centric Approach</h3>
                        </div>
                      </div>

                      <div className='offset-lg-2 col-lg-4 col-md-6 col-12'>
                        <div className='sip_info_box'>
                          <img alt='Commitment to Ethical Business Practices' src={require('../../../../assets/img/solutions_inside/parks_compliance/svg/ethical-icon.svg')}></img>
                          <h3 className=''>Commitment to Ethical Business Practices</h3>
                        </div>
                      </div>
                      
                      <div className='col-lg-4 col-md-6 col-12'>
                        <div className='sip_info_box'>
                          <img alt='Data Monitoring' src={require('../../../../assets/img/solutions_inside/parks_compliance/svg/data-icon.svg')}></img>
                          <h3 className=''>Data Monitoring</h3>
                        </div>
                      </div>


                   </div>
                </div>
            </div>
            
        </div>
      </div>
    </>
  )
}
