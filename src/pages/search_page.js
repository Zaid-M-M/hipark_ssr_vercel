import React from 'react'
import Header from '../components/global/header';
import Cta from '../components/sections/cta';
import Footer from '../components/global/footer';
import '../assets/css/search.css';
import { useParams } from "react-router-dom";
import useFetch from "react-fetch-hook";
import Masonry from 'react-masonry-css';
import $ from "jquery";

import Transition from '../components/transition';
import { gsap } from "gsap";
import { useEffect , useRef } from 'react';
import { Power3, Power4 } from "gsap";

export default function Search_page() {

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

    const form = useRef();
    const resultinput = React.useRef(null);
 
    const sendResult = (e) => {
      e.preventDefault();
  
      let resultinput_var= (resultinput.current.value);
      window.location.href = "/search/" + resultinput_var;
    };
 
   let { name } = useParams();
 
    //  const { isLoading, data, error } = useFetch(
    //    `https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-json/wp/v2/parks?search=${name}`
    //  );

    const { isLoading, data, error } = useFetch(
      `https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-json/wp/v2/search_data?search=${name}`
    );

 
     const breakpointColumnsObj = {
       default:1,
       1100: 1,
       700: 2,
       500: 1
   };
 
   useEffect(() => {
      
 
       if ($('.my-masonry-grid_column').is(':visible'))
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
          
            <div className='search-bg'>
                <div className='cstm_container'>
                    <div className='serch-result-dv blg-srch-rsult'>
                        <div className='row'>
                            <div className='col-12 srch_col'>
                            <p className=' section_name  found-txt'> Showing search result for &#8220;<span>{name}</span>&#8221;</p> 
                                <Masonry
                                    breakpointCols={breakpointColumnsObj}
                                    className="my-masonry-grid"
                                    columnClassName="my-masonry-grid_column"
                                    >
                                    {/* {data.length}  */}
                                        {data && data.map(({  title , acf , content, slug  , excerpt }) => (
                                            <div className='cstm-container blog-inside-page' >
                                            {isLoading && <div>A moment please...</div>}
                                        {error && (
                                            <div>{`There is a problem fetching the post data - ${error}`}</div>
                                        )}

                                        
                                                {/* <h1 className="section_heading">{title.rendered}</h1>
                                                <p className='para'>{acf.park_hd_para}</p>
                                                <a className='blg-view-btn' href={"/parks/" + slug}>Read more </a>  */}
                                              
                                                <h1 className="section_sub_heading">{title.rendered}</h1>
                                                <p className='para srch_para' dangerouslySetInnerHTML={{ __html: content.rendered }}></p>
                                                <a className='blg-view-btn' href={acf.url}>Read more </a>   

                                            </div>
                                        ))}
                                </Masonry>
                                {/* : 'not found'} */}
                            </div>
                        
                        </div>
                        <div className='result-error'>
                            <div className='row srch-row srch-pg-rw'>
                                <div className='col-12'>
                                    
                                    <form onSubmit={sendResult} className='search_form2'> 
                                        <input className='srch-input' type='text' placeholder='Search here...' ref={resultinput} />
                                            <button type="submit" className='srch-btn'>
                                        <img src={require('../assets/img/svg/search_icon_blk.svg')} ></img>
                                        </button>
                                    </form> 
                                    
                                </div>
                            </div>
                            <h2>No results found</h2>                    
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
