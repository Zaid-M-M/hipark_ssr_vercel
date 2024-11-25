import React from 'react'
import '../../assets/css/park_inside_spotlight.css';
import Helmet from 'react-helmet';
import { Link } from 'react-router-dom';

export default function Solution_spotlight() {
  return (
    <>
        <div className='park_inside_spotlight_sec'>

            <Helmet>
                <title>Grade A Industrial Park Excellence: From Land Acquisition to Property Management - Your Complete Solution</title>
                <meta name="description" content="Discover success at our Grade A Industrial Parks with seamless land acquisition, 100% compliance, and expert construction and property management." />
                <meta property="og:title" content="Grade A Industrial Park Excellence: From Land Acquisition to Property Management - Your Complete Solution" />
                <meta property="og:description" content="Discover success at our Grade A Industrial Parks with seamless land acquisition, 100% compliance, and expert construction and property management." />
                <meta property="og:image" content="https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-content/uploads/2024/10/og_img_solution_pg.jpg" />
            </Helmet>

            <img src={require('../../assets/img/solutions_spotlight.jpg')} className='park_inside_bg_img'></img>
            <img className='inside_spotlight_arrow' src={require('../../assets/img/home_sldr_arrow.png')}></img>

            <div className='breadcrum_div'>
                <div className='cstm_container'>
                    <div className='row'>
                        <div className='col-12 '>
                            <div className='breadcrum_content'>
                                <h3><Link to='/'>Home</Link>  /  Solutions</h3>
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
                                    <h1 className='spotlight_pg_title bg_size_ttl'>SOLUTIONS TO CONSISTENTLY DELIVER THE BEST</h1>
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
