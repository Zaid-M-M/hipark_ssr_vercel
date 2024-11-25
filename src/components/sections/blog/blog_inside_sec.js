import React, { useEffect, useState } from 'react'
import useFetch from "react-fetch-hook";
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';
import '../../../assets/css/blog_landing_sec.css'
import '../../../assets/css/blog_inside_sec.css'
import "../../../helper/common"

import {
    FacebookIcon,
    FacebookShareButton,
    LinkedinShareButton,
    LinkedinIcon,
    TwitterShareButton,
    TwitterIcon
} from "react-share";
import Blog_related_slider from './blog_related_slider';

export default function Blog_inside_sec({ initialData }) {
  const [pgUrl, setPgUrl] = useState("");
    const data = initialData || [];
  useEffect(() => {
    setPgUrl(window.location.href);
  }, []);

    return (
        <>

            {/* section 1 */}

            <div className='blog_inside_Sec'>
                {data && data.map(({ id ,title , acf , tags , term_id ,  slug , content , category}) => ( 
                    <div className='cstm_container'>

                        <div className='row no_LR_margin' >

                            <div className='col-md-12 col-lg-12 col-12 mob_pd_LR tab_pd_LR'>
                               
                                <div className='blog_breadcrum_content'>
                                    <h3><Link to='/'>Home</Link>  /  <a href='/blog'>Blog</a> / <span dangerouslySetInnerHTML={{ __html: title }}></span></h3>
                                </div>

                                <div className='main-blog-cstm'>

                                    <h1 className='blog_ttl_inside'  dangerouslySetInnerHTML={{ __html: title }}></h1>
                                    <img src={acf.blog_image} className='park_inside_bg_img blog_thumb_img' alt={acf.blog_image_alt_text}></img>

                                    

                                    <div className='row'>
                                        <div className='col-md-1 col-lg-1 col-2'>
                                            <div className='social_share-fab'>
                                                <img className='social_icon' src={require('../../../assets/img/svg/social_icon.svg')}></img>
                                                <FacebookShareButton url={pgUrl} quote={'Hello'}>
                                                    <FacebookIcon size={25} round={true}></FacebookIcon>
                                                </FacebookShareButton>

                                                <TwitterShareButton url={pgUrl} >
                                                    <TwitterIcon size={25} round={true}></TwitterIcon>
                                                </TwitterShareButton>
                                                <LinkedinShareButton url={pgUrl} >
                                                    <LinkedinIcon size={25} round={true}></LinkedinIcon>
                                                </LinkedinShareButton>
                                            </div>
                                        </div>
                                        <div className='col-md-11 col-lg-11 col-10 blog_content_dv'>
                                            <p className='para' dangerouslySetInnerHTML={{ __html: content }}></p>
                                        </div>
                                    </div>
                                </div>

                                
                                
                            </div>

                

                            <div className='blog_lnd_sec1-sec mob_pd_LR tab_pd_LR blog_inside_sld_col'>



                                {/* <div className='row no_LR_margin'> */}

                                {/* <div className='col-12 leader_slider_col mob_pd_LR tab_pd_LR'> */}
                                <h2 className='hdg_esg'>related articles</h2>
                                <Blog_related_slider post_id={id} categ_id={acf.category_id}/>
                                {/* </div> */}


                                {/* </div> */}


                            </div>

                        </div>


                    </div>
                ))}  

            </div>





        </>
    )
}

