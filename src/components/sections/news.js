import React from 'react'
import { useEffect, useRef } from "react";
import News_slider from './news_slider';
import Press_rels_slider from './press_rels_slider';
import { gsap } from '../../helper/common'
import '../../assets/css/news.css';

export default function News() {

    // Para animation variable
    const news_hd = useRef(null);

    // border animation variable
    const newsBorder_aniamtion = useRef(null);

    useEffect(() => {

      // Para animation code
      gsap.to("#news_hd", {
        opacity:1,
        duration: 1.5,
        ease: "linear",
        delay: 0.9,
        scrollTrigger: {
            trigger: "#news_hd",
            markers: false
        }
    });

    // border animation code
    gsap.to("#newsBorder_aniamtion", {
      opacity:1,
      duration: .5,
      ease: "linear",
      delay: 0.5,
      width: "100%",
      scrollTrigger: {
          trigger: "#newsBorder_aniamtion",
          markers: false
      }
  });


  }, []);
    
  return (
    <>
      <div className='news_slider_sec snap_sec'>
            <div className=''>
                <div className='row no_LR_margin'>
                    <div className='col-12'>
                        <p className='section_name news_hd p_opacity' ref={news_hd} id='news_hd'>Media</p>
                        <hr className='add_border p_opacity' ref={newsBorder_aniamtion} id='newsBorder_aniamtion'/>
                    </div>
                </div>
                <div className='row no_LR_margin'>
                    <div className='col-12 no_right_padding p_opacity' ref={news_hd} id='news_hd'>

                        <ul className="nav nav-pills cstm_client_tabs infra_tab media_tab" role="tablist">
                            <li className="nav-item">
                                <a className="nav-link active cstm_link infra_link" data-bs-toggle="pill" href="#news">In the News</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link cstm_link infra_link" data-bs-toggle="pill" href="#press_rels">Press Release</a>
                            </li>
                        </ul>


                        {/*  Tab panes  */}
                        <div className="tab-content">

                              {/* News Tab */}
                              <div id="news" className="tab-pane active fade show client_logo_tab"><br />
                                <News_slider/>
                              </div>

                              {/* Press Releases Tab */}          
                              <div id="press_rels" className="tab-pane fade client_logo_tab"><br />
                                  <Press_rels_slider/>
                              </div>

                        </div>


                    </div>
                </div>
            </div>
      </div>
    </>
  )
}
