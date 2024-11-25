import React from 'react'
import '../../assets/css/park_inside_spotlight.css';
import Helmet from 'react-helmet';
import { Link } from 'react-router-dom';

export default function Event_spotlight() {
  return (
    <>
        <div className='park_inside_spotlight_sec'>
            
            <Helmet>
                <title>Explore Horizon's Upcoming Events and Collaborations</title>
                <meta name="description" content="Discover innovative solutions, engage with tenants, and connect with industry leaders. Let's co-create the right solution for your business success." />

                <meta property="og:title" content="Explore Horizon's Upcoming Events and Collaborations"/>
                <meta property="og:description" content="Discover innovative solutions, engage with tenants, and connect with industry leaders. Let's co-create the right solution for your business success." />
                <meta property="og:image" content="https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-content/uploads/2024/10/og_img_event_pg.png" />
            </Helmet>

            <img src={require('../../assets/img/Event_Spotlight.jpg')} className='park_inside_bg_img'></img>
            <img className='inside_spotlight_arrow' src={require('../../assets/img/home_sldr_arrow.png')}></img>
   
            <div className='breadcrum_div'>
                <div className='cstm_container'>
                    <div className='row'>
                        <div className='col-12 '>
                            <div className='breadcrum_content'>
                                <h3><Link to='/'>Home</Link>  /  Events</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>

        <div className='spotlight_content_dv'>
            <div className='cstm_container'>
                <div className='row'>
                    <div className='col-12 '>
                        <div className='spotlight_content_box'>
                            <div className='spotlight_inner_content'>
                                <div className='prk_dtl_line2'>
                                    <h1 className='spotlight_pg_title'>Events</h1>
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