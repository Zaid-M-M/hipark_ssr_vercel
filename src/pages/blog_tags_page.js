import React from 'react'
import Header from '../components/global/header';
import Blog_tags_spotlight from '../components/spotlight/blog_tags_spotlight';
import Cta from '../components/sections/cta';
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
import { Power3, Power4 } from "gsap";

export default function Blog_tags_page() {

    // 

    let body = useRef(null);
    var tl_1 = gsap.timeline()
    
    useEffect(() => {
  
     
  
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
  
    })


   let { id } = useParams();

    const { isLoading, data, error } = useFetch(
      `https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-json/wp/v2/posts?tags=${id}`
    );

 
     const breakpointColumnsObj = {
       default:1,
       1100: 1,
       700: 2,
       500: 1
   };
 
   useEffect(() => {
      
 
       if ($('.my-masonry-grid_column .blog_feat_col2.blog_bx').is(':visible'))
       {
         $('.result-error').hide();
         $('.found-txt').show();
       }
       else {         
           $('.result-error').show(); 
           $('.found-txt').hide();              
       }
   })
 

   
  return (
    <> <Transition/>
            <div className='pg-layout'>
            <div ref={(el) => (body = el)} className="Headd">
          <Header/>
          <Blog_tags_spotlight/>
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
                                          {data && data.map(({ id , acf , title , category , slug}) => (
                                              <div className='col-md-6 col-lg-4 col-12 blog_feat_col2 blog_bx' key={id} >

                                                <Link className='blog_anchor' to={'/blogs/'+ slug}>
                                                  <div className='feature_blog_bx'>
                                                      <div className='fbb1'>
                                                          <img className='blog_bg_img' src={acf.featured_slider_image}></img>
                                                          <p className='bl_bx_ttl'>{category}</p>
                                                      </div>
                                                      <div className='fbb2'>
                                                          <h3 className='sub_para' dangerouslySetInnerHTML={{ __html: title }}></h3>
                                                          <p className='bl_bx_date'>{acf.blog_publish_date}</p>
                                                          <p className='para blg_bx_para'>Did you come here for something in particular or just general Riker-bashing? And blowing.</p>
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
                          <h2>No Data In This Tags</h2>  
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
