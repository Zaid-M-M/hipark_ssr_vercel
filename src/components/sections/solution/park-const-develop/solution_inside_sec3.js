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
                        <img alt='Built-to-suit horizon industrial parks' src={require('../../../../assets/img/solutions_inside/park_const/park_const_bts.jpg')}></img>
                    </div>
                </div>
                <div className='col-lg-8 col-md-8 col-12 sip_cntn_col'>
                    <div className='sip_cntn_dv'>
                        <h2 className='sub_para'>Built-to-suit</h2>
                        <p className='para'>Horizon Industrial Parks offers bespoke solutions for companies looking to create a custom-designed facility tailored to their unique business needs. Built-to-suit (BTS) facilities can be completely customised in size, layout, and features, and are much sought after for light manufacturing, e-commerce, and cold chain operations.</p>
                    </div>
                </div>
            </div>

            {/* 2 box section */}
            <div className='row sip_img_cnt_row sol_dv_gray'>
                <div className='col-lg-8 col-md-8 col-12 sip_cntn_col'>
                    <div className='sip_cntn_dv'>
                        <h2 className='sub_para'>Ready-to-move</h2>
                        <p className='para'>These are pre-built facilities that are move-in ready and require minimal customisation. They are ideal for companies that need to start operations quickly and do not have the time to wait for a facility to be built from scratch.</p>
                    </div>
                </div>
                <div className='col-lg-4 col-md-4 col-12 sip_img_col'>
                    <div className='sip_img_dv'>
                        <img alt='Ready-to-move industrial park' src={require('../../../../assets/img/solutions_inside/park_const/park_const_readymove.jpg')}></img>
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
                                <img alt='Built-to-suit horizon industrial parks' src={require('../../../../assets/img/solutions_inside/park_const/park_const_bts.jpg')}></img>
                            </div>
                        </div>
                        <div className='col-lg-8 col-md-8 col-12 sip_cntn_col'>
                            <div className='sip_cntn_dv'>
                                <h2 className='sub_para'>Built-to-suit</h2>
                                <p className='para'>Horizon Industrial Parks offers bespoke solutions for companies looking to create a custom-designed facility tailored to their unique business needs. Built-to-suit (BTS) facilities can be completely customised in size, layout, and features, and are much sought after for light manufacturing, e-commerce, and cold chain operations.</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                {/* <SwiperSlide>
                    <div className='row sip_img_cnt_row'>

                        <div className='col-lg-4 col-md-4 col-12 sip_img_col'>
                            <div className='sip_img_dv'>
                                <img alt='Ready-to-move industrial park' src={require('../../../../assets/img/solutions_inside/park_const/park_const_readymove.jpg')}></img>
                            </div>
                        </div>
                        <div className='col-lg-8 col-md-8 col-12 sip_cntn_col'>
                            <div className='sip_cntn_dv'>
                                <h2 className='sub_para'>Ready-to-move</h2>
                                <p className='para'>These are pre-built facilities that are move-in ready and require minimal customisation. They are ideal for companies that need to start operations quickly and do not have the time to wait for a facility to be built from scratch.</p>
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
