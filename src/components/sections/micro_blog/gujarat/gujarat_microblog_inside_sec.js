import React from 'react'
import '../../../../assets/css/blog_landing_sec.css'
import '../../../../assets/css/blog_inside_sec.css'
import '../../../../assets/css/microblog_inside_sec.css'
import $ from "jquery";
import { useEffect, useState } from "react";
import useFetch from "react-fetch-hook";
import { useParams } from "react-router-dom";

import {
    FacebookIcon,
    FacebookShareButton,
    LinkedinShareButton,
    LinkedinIcon,
    TwitterShareButton,
    TwitterIcon
} from "react-share";
import Gujarat_parks from './gujarat_parks';

export default function Gujarat_microblog_inside_sec({ initialData }) {
    const [pgUrl, setPgUrl] = useState("");
    const data = initialData || [];
    //let { slug } = useParams(); 
    // const { isLoading, data, error } = useFetch(
    //     `https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-json/wp/v2/gujarat_micro_blog/?slug=${slug}`
    // );

    // const pg_url = document.URL;
    // console.log(pg_url);


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
                                    <h3><a href='/'>Home</a>  /  <a href='/gujarat'>Gujarat</a> / <span dangerouslySetInnerHTML={{ __html: title.rendered }}></span></h3>
                                </div>

                                <div className='main-blog-cstm'>

                                    <h1 className='blog_ttl_inside'  dangerouslySetInnerHTML={{ __html: title.rendered }}></h1>
                                    <img src={acf.maharashtra_micro_blog_image} className='park_inside_bg_img blog_thumb_img' alt={acf.maharashtra_micro_blog_image_alt_text}></img>

                                    

                                    <div className='row'>
                                        <div className='col-md-1 col-lg-1 col-2'>
                                            <div className='social_share-fab'>
                                                <img className='social_icon' src={require('../../../../assets/img/svg/social_icon.svg').default}></img>
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
                                            <p className='para' dangerouslySetInnerHTML={{ __html: content.rendered }}></p>
                                        </div>
                                    </div>
                                </div>

                                
                                
                            </div>

                        </div>


                    </div>
                ))}  

            </div>

             <Gujarat_parks/>       



        </>
    )
}

