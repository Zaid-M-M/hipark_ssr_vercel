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
                        <img alt='Proximity to key markets' src={require('../../../../assets/img/solutions_inside/Strategic_land/Strategic_land_proximicity.jpg')}></img>
                    </div>
                </div>
                <div className='col-lg-8 col-md-8 col-12 sip_cntn_col'>
                    <div className='sip_cntn_dv'>
                        <h2 className='sub_para'>Proximity to Key Markets</h2>
                        <p className='para'>Horizon Industrial Parks invests in land parcels close to key consumption markets and manufacturing hubs, allowing for faster delivery times and reduced transportation costs.</p>
                    </div>
                </div>
            </div>

            {/* 2 box section */}
            <div className='row sip_img_cnt_row sol_dv_gray'>
                <div className='col-lg-8 col-md-8 col-12 sip_cntn_col'>
                    <div className='sip_cntn_dv'>
                        <h2 className='sub_para'>Access to skilled labour & local amenities </h2>
                        <p className='para'>Access to skilled labour and local amenities is crucial for the success of any industrial or logistics operation. Our parks are strategically located for access to social and industrial infrastructure and essential amenities.</p>
                    </div>
                </div>
                <div className='col-lg-4 col-md-4 col-12 sip_img_col'>
                    <div className='sip_img_dv'>
                        <img alt='Access to skilled labour & local amenities' src={require('../../../../assets/img/solutions_inside/Strategic_land/Strategic_land_labor.jpg')}></img>
                    </div>
                </div>
            </div>

            {/* 3 box section */}
            <div className='row sip_img_cnt_row sol_dv_orange'>
                <div className='col-lg-4 col-md-4 col-12 sip_img_col'>
                    <div className='sip_img_dv'>
                        <img alt='Local community partnerships and government support' src={require('../../../../assets/img/solutions_inside/Strategic_land/Strategic_land_governer.jpg')}></img>
                    </div>
                </div>
                <div className='col-lg-8 col-md-8 col-12 sip_cntn_col'>
                    <div className='sip_cntn_dv'>
                        <h2 className='sub_para'>Local community partnerships and government support</h2>
                        <p className='para'>We understand the importance of building strong relationships with local communities and government authorities. We work closely with them to ensure that our projects comply with the regulations and to obtain the necessary permits and approvals for our developments.</p>
                    </div>
                </div>
            </div>

            {/* 4 box section */}
            <div className='row sip_img_cnt_row sol_dv_gray'>
                <div className='col-lg-8 col-md-8 col-12 sip_cntn_col'>
                    <div className='sip_cntn_dv'>
                        <h2 className='sub_para'>Capacity to Scale Up</h2>
                        <p className='para'>Businesses may need to expand their operations as they grow, which is why we ensure that our park locations have the capacity to scale up. Our parks are designed to meet our customers' growing needs, with infrastructure built to accommodate future expansion.</p>
                    </div>
                </div>
                <div className='col-lg-4 col-md-4 col-12 sip_img_col'>
                    <div className='sip_img_dv'>
                        <img alt='Capacity to scale up' src={require('../../../../assets/img/solutions_inside/Strategic_land/Strategic_land_capacity.webp')}></img>
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
                        <div className='col-lg-4 col-md-12 col-12 sip_img_col'>
                            <div className='sip_img_dv'>
                                <img alt='Proximity to key markets' src={require('../../../../assets/img/solutions_inside/Strategic_land/Strategic_land_proximicity.jpg')}></img>
                            </div>
                        </div>
                        <div className='col-lg-8 col-md-12 col-12 sip_cntn_col'>
                            <div className='sip_cntn_dv'>
                                <h2 className='sub_para'>Proximity to Key Markets</h2>
                                <p className='para'>Horizon Industrial Parks invests in land parcels close to key consumption markets and manufacturing hubs, allowing for faster delivery times and reduced transportation costs.</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                {/* <SwiperSlide>
                    <div className='row sip_img_cnt_row'>
                        <div className='col-lg-4 col-md-12 col-12 sip_img_col'>
                            <div className='sip_img_dv'>
                                <img alt='Access to skilled labour & local amenities' src={require('../../../../assets/img/solutions_inside/Strategic_land/Strategic_land_labor.jpg')}></img>
                            </div>
                        </div>
                        <div className='col-lg-8 col-md-12 col-12 sip_cntn_col'>
                            <div className='sip_cntn_dv'>
                                <h2 className='sub_para'>Access to skilled labour & local amenities </h2>
                                <p className='para'>Access to skilled labour and local amenities is crucial for the success of any industrial or logistics operation. Our parks are strategically located for access to social and industrial infrastructure and essential amenities.</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                {/* <SwiperSlide>
                    <div className='row sip_img_cnt_row'>
                        <div className='col-lg-4 col-md-12 col-12 sip_img_col'>
                            <div className='sip_img_dv'>
                                <img alt='Local community partnerships and government support' src={require('../../../../assets/img/solutions_inside/Strategic_land/Strategic_land_governer.jpg')}></img>
                            </div>
                        </div>
                        <div className='col-lg-8 col-md-12 col-12 sip_cntn_col'>
                            <div className='sip_cntn_dv'>
                                <h2 className='sub_para'>Local community partnerships and government support</h2>
                                <p className='para'>We understand the importance of building strong relationships with local communities and government authorities. We work closely with them to ensure that our projects comply with the regulations and to obtain the necessary permits and approvals for our developments.</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                {/* <SwiperSlide>
                    <div className='row sip_img_cnt_row'>

                        <div className='col-lg-4 col-md-12 col-12 sip_img_col'>
                            <div className='sip_img_dv'>
                                <img alt='Capacity to scale up' src={require('../../../../assets/img/solutions_inside/Strategic_land/Strategic_land_capacity.jpg')}></img>
                            </div>
                        </div>
                        <div className='col-lg-8 col-md-12 col-12 sip_cntn_col'>
                            <div className='sip_cntn_dv'>
                                <h2 className='sub_para'>Capacity to Scale Up</h2>
                                <p className='para'>Businesses may need to expand their operations as they grow, which is why we ensure that our park locations have the capacity to scale up. Our parks are designed to meet our customers' growing needs, with infrastructure built to accommodate future expansion.</p>
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
