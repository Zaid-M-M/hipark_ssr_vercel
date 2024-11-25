import React from 'react'
import '../../../assets/css/park_inside_spotlight.css';
import Helmet from 'react-helmet';
import { Link } from 'react-router-dom';

export default function Park_const_devel_spotlight() {
  return (
    <>
        <div className='park_inside_spotlight_sec'>

            <Helmet>
                <title>Partner with Horizon for Industrial and Logistics Park Construction in India</title>
                <meta name="description" content="Discover Horizon Industrial Parks, where we create world-class industrial and logistics parks tailored to your unique needs. Choose from our Built-to-Suit or Ready-to-Move options and experience the Horizon Advantage." />
                
                <meta property="og:title" content="Partner with Horizon for Industrial and Logistics Park Construction in India" />
                <meta property="og:description" content="Discover Horizon Industrial Parks, where we create world-class industrial and logistics parks tailored to your unique needs. Choose from our Built-to-Suit or Ready-to-Move options and experience the Horizon Advantage." />
                <meta property="og:image" content="https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-content/uploads/2024/10/og_img_park_contraction_pg.jpg" />

            </Helmet>

            
            <img alt='Industrial park construction' src={require('../../../assets/img/solutions_inside/park_const/park_const_spotlight.jpg')} className='park_inside_bg_img'></img>
            <img className='inside_spotlight_arrow' src={require('../../../assets/img/home_sldr_arrow.png')}></img>
            
            <div className='breadcrum_div'>
                <div className='cstm_container'>
                    <div className='row'>
                        <div className='col-12 '>
                            <div className='breadcrum_content'>
                                <h3><Link to='/'>Home</Link>  / <a href='/solutions'> Solutions</a> / PARK CONSTRUCTION & DEVELOPMENT</h3>
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
                                    <h1 className='spotlight_pg_title bg_size_ttl'>PARK CONSTRUCTION & DEVELOPMENT</h1>
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
