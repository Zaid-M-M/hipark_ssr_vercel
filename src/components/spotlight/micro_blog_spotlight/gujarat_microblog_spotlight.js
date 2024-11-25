import React from 'react'
import '../../../assets/css/park_inside_spotlight.css';
import '../../../assets/css/blog_inside_spotlight.css';
import { useEffect , useState } from "react";
import useFetch from "react-fetch-hook";
import { useParams } from "react-router-dom";
import Helmet from 'react-helmet';
import $ from "jquery";

export default function Gujarat_microblog_spotlight({initialData}) {
  const data = initialData || [];
    // let { slug } = useParams(); 
    // const { isLoading, data, error } = useFetch(
    //     `https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-json/wp/v2/gujarat_micro_blog/?slug=${slug}`
    // );

  return (
    <>
        {data && data.map(({ id , acf , title , category , slug}) => (
            <Helmet>
                    <title>{acf.gujarat_micro_blog_meta_title}</title>
                    <meta name="description" content={acf.gujarat_micro_blog_meta_description} />
                    <meta name="keyword" content={acf.gujarat_micro_blog_meta_keyword} />

                    <meta property="og:title" content={acf.gujarat_micro_blog_meta_title} />
                    <meta property="og:description" content={acf.gujarat_micro_blog_meta_description} />
                    <meta property="og:image" content="https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-content/uploads/2024/02/gujarat_masthead.webp" />

            </Helmet>

        ))} 
    </>
  )
}