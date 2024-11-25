import React, {  }  from 'react'
import '../../../assets/css/park_inside_spotlight.css';
import Helmet from 'react-helmet';
import { Link } from 'react-router-dom';

export default function State_spotlight({initialData}) {
    const data = initialData || [];
  return (
    <>
     {data && data.map(({ id, acf }) => (
        
        <div key={id}>
              
            <div className='park_inside_spotlight_sec' >
    
                <Helmet>
                    <title>{acf.meta_title}</title>
                    <meta name="description" content={acf.meta_description} />
                    <meta property="og:title" content={acf.meta_title} />
                    <meta property="og:description" content={acf.meta_description} />
                    <meta property="og:image" content={acf.state_image} />
                </Helmet>

                <img src={acf.state_image} alt={acf.state_spotlight_image_alt} className='park_inside_bg_img'></img>
                <img className='inside_spotlight_arrow' src={require('../../../assets/img/home_sldr_arrow.png')}></img>

                <div className='breadcrum_div'>
                    <div className='cstm_container'>
                        <div className='row'>
                            <div className='col-12 '>
                                <div className='breadcrum_content'>
                                    <h3><Link to='/'>Home</Link> /  {acf.state_name}</h3>
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
                                        <h1 className='spotlight_pg_title bg_size_ttl'>{acf.state_name}</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        ))}
    </>
  )
}
