import React from 'react'
import '../../../../assets/css/solution_inside.css';
import "../../../../helper/common"

export default function Solution_inside_sec3() {
  return (
    <>
      <div className='sol_inside_sec3 mob_pd_LR tab_pd_LR solution_desktop_sec'>
        <div className='cstm_container'>

            <div className='row solution_sec3_hd'>
                <div className='col-12'>
                    <h2 className="section_sub_heading ovrview_sub_hd" >Advantage Horizon</h2>
                </div>
            </div>
            
            {/* 1 box section */}
            <div className='row sip_img_cnt_row1 sol_dv_orange'>
                <div className='col-lg-4 col-md-4 col-12 sip_img_col'>
                    <div className='sip_img_dv'>
                        <img alt='Industrial park compliance with regulations' src={require('../../../../assets/img/solutions_inside/parks_compliance/park_complnce_spotlight.jpg')}></img>
                    </div>
                </div>
                <div className='col-lg-8 col-md-8 col-12 sip_cntn_col'>
                    <div className='sip_cntn_dv'>
                        <h2 className='sub_para'>Compliance and transparency</h2>
                        <p className='para'>At Horizon Industrial Parks, we ensure that our business complies with all relevant state and national regulations for land acquisition, construction and operations.</p>
                        <p className='para'>Transparency and disclosure regarding our ESG performance in line with global standards and regulatory requirements. We conform to POSH Policy, Code of Conduct and Compliance Manuals. We say no to vendors and contractors who engage in child labour, forced labour, bribery and corruption.</p>
                    </div>
                </div>
            </div>

            {/* 2 box section */}
            <div className='row sip_img_cnt_row sol_dv_gray'>
                <div className='col-lg-8 col-md-8 col-12 sip_cntn_col'>
                    <div className='sip_cntn_dv'>
                        <h2 className='sub_para'>Contract & Lease Management</h2>
                        <p className='para'>Contract and lease management is an essential aspect of our business and we have a dedicated team that manages all contracts and leases to ensure that they are fair, transparent, and aligned with the interests of both parties. We also ensure that all necessary legal documents are in place and that the terms and conditions are clearly communicated to our customers.</p>
                    </div>
                </div>
                <div className='col-lg-4 col-md-4 col-12 sip_img_col'>
                    <div className='sip_img_dv'>
                        <img alt='Industrial park contract & lease management' src={require('../../../../assets/img/solutions_inside/parks_compliance/park_complnce_contract.jpg')}></img>
                    </div>
                </div>
            </div>

            {/* 3 box section */}
            <div className='row sip_img_cnt_row sol_dv_orange'>
                <div className='col-lg-4 col-md-4 col-12 sip_img_col'>
                    <div className='sip_img_dv'>
                        <img alt='Industrial park due diligence' src={require('../../../../assets/img/solutions_inside/parks_compliance/park_complnce_diligence.jpg')}></img>
                    </div>
                </div>
                <div className='col-lg-8 col-md-8 col-12 sip_cntn_col'>
                    <div className='sip_cntn_dv'>
                        <h2 className='sub_para'>Due Diligence</h2>
                        <p className='para'>Before acquiring any land or asset, we conduct thorough due diligence to ensure that the land or asset has a clear title and that no legal disputes or encumbrances are associated with it. This helps to prevent any legal complications or disputes that may arise in the future.</p>
                    </div>
                </div>
            </div>

    

        </div>
      </div>

      {/* <div className='sol_inside_sec3 mob_pd_LR tab_pd_LR solution_mob_sec'>
        <div className='cstm_container'>


             <Swiper
                    slidesPerView={4}
                    breakpoints={{
                        320: {
                            slidesPerView: 1
                        },
                        600: {
                            slidesPerView: 1
                        },
                        850: {
                            slidesPerView: 1
                        },
                        1024: {
                            slidesPerView: 1
                        },
                        1440: {
                            slidesPerView: 1
                        },
                        }}
                    spaceBetween={0}
                    speed={500}
                    navigation={true}
                    modules={[Navigation]}
                    className="mySwiper news_slider solutions_mob_slider"
                >

                {/* <SwiperSlide>
                    <div className='row sip_img_cnt_row1'>
                        <div className='col-lg-4 col-md-4 col-12 sip_img_col'>
                            <div className='sip_img_dv'>
                                <img alt='Industrial park complaince with regulations' src={require('../../../../assets/img/solutions_inside/parks_compliance/park_complnce_spotlight.jpg')}></img>
                            </div>
                        </div>
                        <div className='col-lg-8 col-md-8 col-12 sip_cntn_col'>
                            <div className='sip_cntn_dv'>
                                <h2 className='sub_para'>Compliance and transparency</h2>
                                <p className='para'>At Horizon Industrial Parks, we ensure that our business complies with all relevant state and national regulations for land acquisition, construction and operations.</p><br></br>
                                <p className='para'>Transparency and disclosure regarding our ESG performance in line with global standards and regulatory requirements. We conform to POSH Policy, Code of Conduct and Compliance Manuals. We say no to vendors and contractors who engage in child labour, forced labour, bribery and corruption.</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                {/* <SwiperSlide>
                    <div className='row sip_img_cnt_row'>

                            <div className='col-lg-4 col-md-4 col-12 sip_img_col'>
                                <div className='sip_img_dv'>
                                    <img alt='Industrial park contract & lease management' src={require('../../../../assets/img/solutions_inside/parks_compliance/park_complnce_contract.jpg')}></img>
                                </div>
                            </div>
                            <div className='col-lg-8 col-md-8 col-12 sip_cntn_col'>
                                <div className='sip_cntn_dv'>
                                    <h2 className='sub_para'>Contract & Lease Management</h2>
                                    <p className='para'>Contract and lease management is an essential aspect of our business and we have a dedicated team that manages all contracts and leases to ensure that they are fair, transparent, and aligned with the interests of both parties. We also ensure that all necessary legal documents are in place and that the terms and conditions are clearly communicated to our customers.</p>
                                </div>
                            </div>
                            
                        </div>
                </SwiperSlide>

                {/* <SwiperSlide>
                    <div className='row sip_img_cnt_row'>
                        <div className='col-lg-4 col-md-4 col-12 sip_img_col'>
                            <div className='sip_img_dv'>
                                <img alt='Industrial park due diligence' src={require('../../../../assets/img/solutions_inside/parks_compliance/park_complnce_diligence.jpg')}></img>
                            </div>
                        </div>
                        <div className='col-lg-8 col-md-8 col-12 sip_cntn_col'>
                            <div className='sip_cntn_dv'>
                                <h2 className='sub_para'>Due Diligence</h2>
                                <p className='para'>Before acquiring any land or asset, we conduct thorough due diligence to ensure that the land or asset has a clear title and that no legal disputes or encumbrances are associated with it. This helps to prevent any legal complications or disputes that may arise in the future.</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>



            </Swiper> 
    

        </div>
      </div> */}

    </>
  )
}
