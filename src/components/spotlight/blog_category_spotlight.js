import React from 'react'
import '../../assets/css/park_inside_spotlight.css';
import { Link } from 'react-router-dom';
import Helmet from 'react-helmet';

export default function Blog_category_spotlight({ initialData }) {
    const data = initialData || [];
    
  return (
    <>
        <div className='park_inside_spotlight_sec'>

            <Helmet>
                <title>Industrial and Warehousing Blog - Horizon Industrial Park</title>
                <meta name="description" content="Explore Horizon’s blog for comprehensive insights into the world of industrial and logistics real estate." />

                <meta property="og:title" content="Industrial and Warehousing Blog - Horizon Industrial Park" />
                <meta property="og:description" content="Explore Horizon’s blog for comprehensive insights into the world of industrial and logistics real estate." />
                <meta property="og:image" content="https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-content/uploads/2024/10/og_img_blog_pg-scaled.jpg" />
            </Helmet>

            <img src={require('../../assets/img/blog_spotlight_new.jpg')} className='park_inside_bg_img'></img>
            <img className='inside_spotlight_arrow' src={require('../../assets/img/home_sldr_arrow.png')}></img>
            
            <div className='breadcrum_div'>
                <div className='cstm_container'>
                    <div className='row'>
                        <div className='col-12 '>

                            {data && data.map(() => (
                                <div className='breadcrum_content'>
                                    <h3><Link to='/'>Home</Link>  /  <Link to='/blog'>Blog</Link></h3>
                                </div>
                            ))}
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
                                    <h1 className='spotlight_pg_title'>Blog</h1>
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