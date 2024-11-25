import React, { useState } from 'react'
import Header from '../components/global/header';
import Blog_category_spotlight from '../components/spotlight/blog_category_spotlight';
import Footer from '../components/global/footer';
import '../assets/css/search.css';
import { useParams } from "react-router-dom";
import useFetch from "react-fetch-hook";
import Masonry from 'react-masonry-css';
import $ from "jquery";
import { Link } from 'react-router-dom';
import Transition from '../components/transition';
import { gsap } from "gsap";
import { useEffect , useRef } from 'react';
import { Power4 } from "gsap";

export default function Blog_category_page() {
  // const { id } = useParams();  
  // const [response, setResponse] = useState(initialData || []);

    let body = useRef(null);
    var tl_1 = gsap.timeline();

    const categoryMap = {
      technology: 51,
      policy: 53,
      esg: 54,
      'supply-chain-warehousing': 52
    };

    let { slug } = useParams();
     const categoryId = categoryMap[slug];

    const { isLoading, data, error } = useFetch(
      `https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-json/wp/v2/posts?categories=${categoryId}&per_page=50`
    );
    
    useEffect(() => {
      // const fetchData = async () => {
      //   const data = await fetch(`/api/blog/category/${id}`);
      //   const response = await data.json();
      //   setResponse(response);
      // };
      // fetchData();

  
      
      if ($('.my-masonry-grid_column .category_blog_col').is(':visible'))
      {
        $('.result-error').hide();
        $('.found-txt').show();
      }
      else {         
          $('.result-error').show(); 
          $('.found-txt').hide();              
      }
      tl_1.to(body,{
        opacity: "1",
        pointerEvents: "auto",
        ease: Power4.easeInOut,
        delay: 1.2
      });
      return () => {
        tl_1.to(body, {
          opacity: "0",
          pointerEvents: 'none'
        });
      }
  
    });
 
     const breakpointColumnsObj = {
       default:1,
       1100: 1,
       700: 2,
       500: 1
   };

  return (
    <> <Transition/>
            <div className='pg-layout'>
            <div ref={(el) => (body = el)} className="Headd">
          <Header/>

            <Blog_category_spotlight/>

            <div className='blog_tag_categ_pg'>
                <div className='cstm_container'>
                    <div className='serch-result-dv blg-srch-rsult'>
                        <div className='row'>
                            <div className='col-12 srch_col'>
                            {/* <p className=' section_name  found-txt'> Category &#8220;<span>{id}</span>&#8221;</p>  */}
                                <Masonry
                                    breakpointCols={breakpointColumnsObj}
                                    className="my-masonry-grid"
                                    columnClassName="my-masonry-grid_column"
                                    >

                                        <div className='row no_LR_margin'>
                                          {/* {data && data.map(({ id , acf , title , category , slug}) => (
                                              <div className='col-md-6 col-lg-4 col-12 blog_feat_col2 blog_bx' key={id} >
                                                 <Link className='blog_anchor' to={'/blogs/'+ slug}>
                                                    <div className='feature_blog_bx'>
                                                        <div className='fbb1'>
                                                            <img className='blog_bg_img' src={acf.blog_image}></img>
                                                            <p className='bl_bx_ttl'>{category}</p>
                                                        </div>
                                                        <div className='fbb2'>
                                                            <h3 className='sub_para'  dangerouslySetInnerHTML={{ __html: title }}></h3>
                                                            <p className='bl_bx_date'>{acf.blog_publish_date}</p>
                                                            <p className='para blg_bx_para'>Did you come here for something in particular or just general Riker-bashing? And blowing.</p>
                                                        </div>
                                                    </div>
                                                  </Link>  
                                              </div>
                                          ))} */}
                                          {data && data.map(({ id, acf, title, category, slug, content }) => (
                                            <div className='col-md-6 col-lg-4 col-12 category_blog_col' key={id}>
                                                <Link to={'/blog/'+ slug}>
                                                    <div className='image-conatoner'>
                                                        <div className='img-box'>
                                                            <img src={acf.featured_slider_image} alt={acf.blog_image_alt_text}></img>
                                                        </div>
                                                        <div className='text-box'>
                                                            <p className='new-para' dangerouslySetInnerHTML={{ __html: category }}></p>
                                                           
                                                            <h2 dangerouslySetInnerHTML={{ __html: title }}></h2>
                                                            <div className='icon-blog'>
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="16" viewBox="0 0 13 16" fill="none">
                                                                    <path d="M2.75514 7.2H4.13271V8.8H2.75514V7.2ZM12.3981 3.2V14.4C12.3981 15.28 11.7782 16 11.0206 16H1.37757C1.01222 16 0.661825 15.8314 0.403481 15.5314C0.145136 15.2313 0 14.8243 0 14.4L0.00688784 3.2C0.00688784 2.32 0.613019 1.6 1.37757 1.6H2.06635V0H3.44392V1.6H8.9542V0H10.3318V1.6H11.0206C11.7782 1.6 12.3981 2.32 12.3981 3.2ZM1.37757 4.8H11.0206V3.2H1.37757V4.8ZM11.0206 14.4V6.4H1.37757V14.4H11.0206ZM8.26542 8.8H9.64299V7.2H8.26542V8.8ZM5.51028 8.8H6.88785V7.2H5.51028V8.8Z" fill="white" />
                                                                </svg>
                                                                <p>{acf.blog_publish_date}</p>
                                                            </div>
                                                            <Link className="blog_read_more_btn" to={'/blog/'+ slug}>Read More</Link>
                                                            {/* <p className='blg_bx_para' dangerouslySetInnerHTML={{ __html: content }}></p> */}

                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                          ))} 
                                        </div>
           
                                </Masonry>
                                {/* : 'not found'} */}
                            </div>
                        
                        </div>
                        <div className='result-error'>
                          <h2>No Data In This Category</h2>  
                        </div>

                    </div>
                </div>
            </div>
          <Footer/>
        

      </div>
      </div>
    </>
  )
}
