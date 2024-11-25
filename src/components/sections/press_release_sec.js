import React, { useState } from 'react'
import useFetch from "react-fetch-hook";
import $ from "jquery";
import { useParams } from "react-router-dom";
import '../../assets/css/press_release_sec.css';
import { useEffect, useRef } from "react";
import Helmet from "react-helmet";
import {
    FacebookShareButton,
    LinkedinShareButton,
    TwitterShareButton,
    PinterestShareButton,
    VKShareButton,
    WhatsappShareButton,
    EmailShareButton,

    FacebookIcon,
    TwitterIcon,
    LinkedinIcon,
    PinterestIcon,
    VKIcon,
    WhatsappIcon,
    EmailIcon
  } from "react-share";

export default function Press_release_sec({ initialData }) {
    const data = initialData || [];
    useEffect(() => {
        var pr_url = window.location.pathname;
        // var pr_url1 = '/press_releases/'+ slug; 
        // console.log("URL0 "+ pr_url);
        // console.log("URL1 "+ pr_url1);
     
        $(document).ready(function () {
    
            $.ajax({
                url: `https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-json/wp/v2/press_release/?slug=${slug}`,
                type: 'GET',
                dataType: 'json',
                success: function(data) {
                    // Process the data and extract slug values
                    var slugs = data.map(function(item) {
                        return item.slug;
                    });
    
                    // Log the slug values to the console (you can do whatever you want with them)
                    console.log(slugs);
                    if (pr_url === '/press_releases/'+ slugs) {

                    }
                    else  {
                        window.location.href="/page-not-found";
                    }
                },
                error: function(error) {
                    console.log('Error:', error);
                }
            });
    
        });
    
    });

  return (
    <>
      <div className='press_rls_sec snap_sec'>
        <div className='pr_container'>
            {data && data.map(({ id ,title , acf , slug}) => ( 
                
                <div className='row pr_row'>
                    <Helmet>
                        <title>{acf.meta_title}</title>
                        <meta
                        name="description"
                        content={acf.meta_description}
                        />
                        <meta property="keyword" content={acf.meta_keyword} />
                        <meta property="og:title" content={acf.meta_title} />
                        <meta property="og:description" content={acf.meta_description} />
                        <meta property="og:image" content={acf.pr_image} />
                    </Helmet>

                    <div className='col-12 no_padding'>
                        <p className='para pr_date'>{acf.publish_date} {acf.publish_month} {acf.publish_year}</p>
                        <h2 className='section_sub_heading pr_hd'>{title.rendered}</h2>
                        <img className='pr_img' src={acf.pr_spotlight_image}></img>
                    </div>
                    <div className='col-12 no_padding'>
                        
                        
                            <div className='row'>

                                {/* <div className='col-lg-1 col-md-1 col-1 social_col'>
                                    
                                    <div className='social_sticky_dv'>
                                        <div className='social_dv'>
                                            <FacebookShareButton url={"/press_release/" + slug} >
                                                <FacebookIcon size={"2.5rem"} round={true}/>
                                            </FacebookShareButton>
                                        </div>   
                                        <div className='social_dv'>
                                            <LinkedinShareButton  url={"/press_release/" + slug}>
                                                <LinkedinIcon size={"2.5rem"} round={true}/>
                                            </LinkedinShareButton>
                                        </div>
                                        <div className='social_dv'>
                                            <EmailShareButton  url={"/press_release/" + slug}>
                                                <EmailIcon size={"2.5rem"} round={true}/>
                                            </EmailShareButton>
                                        </div>
                                    </div>
                                    
                                </div>
                         */}
                                <div className='col-lg-12s col-md-12 col-12 '>
                                    {acf.pr_sub_heading.map((sub)=>
                                        <div>
                                            <h2 className='sub_para pr_sub_para' dangerouslySetInnerHTML={{ __html: sub.pr_heading }}></h2>
                                            <p className='para pr_para' dangerouslySetInnerHTML={{ __html: sub.pr_description }}></p> 
                                        </div>
                                    )} 
                                    {acf.media_contact_details.map((sub)=>
                                        <div className='media_dv'>
                                            <h5 className='media_hd'>Media Contact: {sub.media_name}</h5>
                                            <p className='para'>{sub.media_person_name}</p>
                                            <a href={"mailto:"+sub.media_person_mail} className='para'> {sub.media_person_mail}</a>
                                            <p className='para'><b></b><a href={"tel:"+sub.media_person_mobile} className='para'> {sub.media_person_mobile}</a></p>
                                        </div>
                                    )} 
                                </div>
                                
                            </div>
                        
                    </div>
                </div>
            ))} 
        </div>
      </div>
    </>
  )
}
