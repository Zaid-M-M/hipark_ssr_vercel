import React from 'react'
import useFetch from "react-fetch-hook";
import { useEffect, useRef } from "react";
import {NavLink , Link} from "react-router-dom";
export default function News_media({initialData}) {
   const data = initialData || [];
  return (
    <>
    <div className='row'>
        {data && data.map(({ id , acf , content , title , event_year , event_categories , slug}) => ( 
            // <div className='col-lg-6 col-md-6 col-12 event_box_col js-filterable ADD' key={id} data-year={event_year} data-category={event_categories}>
            
            <div className='col-lg-6 col-md-6 col-12 event_box_col js-filterable ADD'  key={id} >
                <a target='_blank'  href={acf.news_link} >
                    <div className='event_box'  >
                        <div className='event_img_dv'>
                            <img className='event_img' src={acf.news_image}></img>     
                        </div>
                        <h3 className='event_hd' dangerouslySetInnerHTML={{ __html: title.rendered }}></h3>
                        <p className='news_thumb_desc' dangerouslySetInnerHTML={{ __html: acf.news_description }}></p>  
                        <p className='event_date'><img src={require('../../../assets/img/svg/date_icon.svg')}></img>{acf.publish_date} {acf.publish_month} {acf.publish_year}</p>
                    </div>
                </a>
            </div>
            
        ))}
    </div>
    </>
  )
}
