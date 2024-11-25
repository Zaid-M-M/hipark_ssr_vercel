import React from 'react'
import '../../../../assets/css/solution_inside.css';
import "../../../../helper/common"

export default function Solution_inside_sec3() {

  return (
    <>
      <div className='sol_inside_sec3 mob_pd_LR tab_pd_LR prop_mang_sec3 solution_desktop_sec'>
        <div className='cstm_container'>

            <div className='row solution_sec3_hd'>
                <div className='col-12'>
                    <h2 className="section_sub_heading ovrview_sub_hd" >Advantage Horizon</h2>
                </div>
            </div>
            
            {/* 1 box section */}
            <div className='row sip_img_cnt_row1 sol_dv_orange'>
                <div className='col-lg-4 col-md-12 col-12 sip_img_col'>
                    <div className='sip_img_dv'>
                        <img alt='Safety and security' src={require('../../../../assets/img/solutions_inside/proprty_mang/proprty_mang_safety.jpg')}></img>
                    </div>
                </div>
                <div className='col-lg-8 col-md-12 col-12 sip_cntn_col'>
                    <div className='sip_cntn_dv'>
                        <h2 className='sub_para'>Safety and Security</h2>
                        <p className='para'>Our comprehensive safety and security protocol includes round-the-clock surveillance, regular safety drills, and equipment tests to ensure our customers and their assets' safety and security. </p>
                    </div>
                </div>
            </div>

            {/* 2 box section */}
            <div className='row sip_img_cnt_row sol_dv_gray'>
                <div className='col-lg-8 col-md-12 col-12 sip_cntn_col'>
                    <div className='sip_cntn_dv'>
                        <h2 className='sub_para'>Emergency Preparedness</h2>
                        <p className='para'>Our proactive emergency plans guarantee minimal downtime during unexpected events, allowing your operations to swiftly recover and continue running smoothly. We provide disaster management planning services, first-aid centers, and ambulance services that cater to the emergency first-aid requirements of our customers in every Horizon park, giving them a complete peace of mind. </p>
                    </div>
                </div>
                <div className='col-lg-4 col-md-12 col-12 sip_img_col'>
                    <div className='sip_img_dv'>
                        <img alt='Emergency preparedness' src={require('../../../../assets/img/solutions_inside/proprty_mang/proprty_mang_emergency.jpg')}></img>
                    </div>
                </div>
            </div>

            {/* 3 box section */}
            <div className='row sip_img_cnt_row sol_dv_orange'>
                <div className='col-lg-4 col-md-12 col-12 sip_img_col'>
                    <div className='sip_img_dv'>
                        <img alt='24*7 uninterrupted operations' src={require('../../../../assets/img/solutions_inside/proprty_mang/proprty_mang_24x7.jpg')}></img>
                    </div>
                </div>
                <div className='col-lg-8 col-md-12 col-12 sip_cntn_col'>
                    <div className='sip_cntn_dv'>
                        <h2 className='sub_para'>24*7 Uninterrupted Operations</h2>
                        <p className='para'>Our property management team provides technical assistance and maintenance solutions to minimise breakdown of equipment, and conduct civil repairs of common area infrastructure and amenities. In addition to facility upkeep, we also maintain high hygiene standards by professionally disposing of waste materials and using organic waste converters. </p>
                    </div>
                </div>
            </div>

            {/* 4 box section */}
            <div className='row sip_img_cnt_row sol_dv_gray'>
                
                <div className='col-lg-8 col-md-12 col-12 sip_cntn_col'>
                    <div className='sip_cntn_dv'>
                        <h2 className='sub_para'>Green Landscape</h2>
                        <p className='para'>With ESG guidelines at the forefront of every decision, we ensure ecological balance and community well-being. We carefully select native plant species to ensure low-maintenance landscapes that thrive even in challenging conditions, reducing the need for excessive watering or chemical intervention. </p>
                        <p className='para'>These gardens not only enhance the aesthetic appeal of our industrial parks but also contribute to improved air quality and employee well-being. Our property management team not only maintains the biodiversity gardens in our park, they also facilitate the upkeep of other humanistic and nature friendly amenities such as butterfly gardens and lily ponds. </p>
                    </div>
                </div>
                <div className='col-lg-4 col-md-12 col-12 sip_img_col'>
                    <div className='sip_img_dv'>
                        <img alt='Green Landscape' src={require('../../../../assets/img/solutions_inside/proprty_mang/green_landscape.jpg')}></img>
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

                <SwiperSlide>
                    <div className='row sip_img_cnt_row1'>
                        <div className='col-lg-4 col-md-12 col-12 sip_img_col'>
                            <div className='sip_img_dv'>
                                <img alt='Safety and security' src={require('../../../../assets/img/solutions_inside/proprty_mang/proprty_mang_safety.jpg')}></img>
                            </div>
                        </div>
                        <div className='col-lg-8 col-md-12 col-12 sip_cntn_col'>
                            <div className='sip_cntn_dv'>
                                <h2 className='sub_para'>Safety and Security</h2>
                                <p className='para'>Our comprehensive safety and security protocol includes round-the-clock surveillance, regular safety drills, and equipment tests to ensure our customers and their assets' safety and security. </p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className='row sip_img_cnt_row'>

                        <div className='col-lg-4 col-md-12 col-12 sip_img_col'>
                            <div className='sip_img_dv'>
                                <img alt='Emergency preparedness' src={require('../../../../assets/img/solutions_inside/proprty_mang/proprty_mang_emergency.jpg')}></img>
                            </div>
                        </div>
                        <div className='col-lg-8 col-md-12 col-12 sip_cntn_col'>
                            <div className='sip_cntn_dv'>
                                <h2 className='sub_para'>Emergency Preparedness</h2>
                                <p className='para'>Our proactive emergency plans guarantee minimal downtime during unexpected events, allowing your operations to swiftly recover and continue running smoothly. We provide disaster management planning services, first-aid centers, and ambulance services that cater to the emergency first-aid requirements of our customers in every Horizon park, giving them a complete peace of mind. </p>
                            </div>
                        </div>
                        
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className='row sip_img_cnt_row'>
                        <div className='col-lg-4 col-md-12 col-12 sip_img_col'>
                            <div className='sip_img_dv'>
                                <img alt='24*7 uninterrupted operations' src={require('../../../../assets/img/solutions_inside/proprty_mang/proprty_mang_24x7.jpg')}></img>
                            </div>
                        </div>
                        <div className='col-lg-8 col-md-12 col-12 sip_cntn_col'>
                            <div className='sip_cntn_dv'>
                                <h2 className='sub_para'>24*7 Uninterrupted Operations</h2>
                                <p className='para'>Our property management team provides technical assistance and maintenance solutions to minimise breakdown of equipment, and conduct civil repairs of common area infrastructure and amenities. In addition to facility upkeep, we also maintain high hygiene standards by professionally disposing of waste materials and using organic waste converters.</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className='row sip_img_cnt_row'>
                        
                        <div className='col-lg-4 col-md-12 col-12 sip_img_col'>
                            <div className='sip_img_dv'>
                                <img alt='Green Landscape' src={require('../../../../assets/img/solutions_inside/proprty_mang/green_landscape.jpg')}></img>
                            </div>
                        </div>
                        <div className='col-lg-8 col-md-12 col-12 sip_cntn_col'>
                            <div className='sip_cntn_dv'>
                                <h2 className='sub_para'>Green Landscape</h2>
                                <p className='para'>With ESG guidelines at the forefront of every decision, we ensure ecological balance and community well-being. We carefully select native plant species to ensure low-maintenance landscapes that thrive even in challenging conditions, reducing the need for excessive watering or chemical intervention. </p>
                                <p className='para'>These gardens not only enhance the aesthetic appeal of our industrial parks but also contribute to improved air quality and employee well-being. Our property management team not only maintains the biodiversity gardens in our park, they also facilitate the upkeep of other humanistic and nature friendly amenities such as butterfly gardens and lily ponds. </p>
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
