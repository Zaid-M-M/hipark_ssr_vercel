import React from 'react'
import News_ITS from './inthespotlight/news_ITS';
import Pressrels_ITS from './inthespotlight/pressrels_ITS';
import '../../assets/css/ITS_tab_sec.css'
import "../../helper/common"

export default function ITS_tab_sec1() {

    // const { isLoading, data, error } = useFetch(
    //     `https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-json/wp/v2/posts?after=${firstDateOfCurrentMonth}T00:00:00&before=${firstDateOfNextMonth}T00:00:00`
    // );

    // useEffect(() => {

    //     $('#ITS_dropdown').on('change',function(){
    //         $('.ITS_tabs_content').fadeOut();
    //         // $('.ITS_tabs_content').addClass('fade');
    //         $('#' + $(this).val()).fadeIn();
    //         $('#' + $(this).val()).removeClass('fade');
    //     });

    // });

    // const { isLoading, data, error } = useFetch(
    //     `https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-json/wp/v2/posts`
    // );

  return (
    <>
        <div className='news_slider_sec ITS_slider_main_sec' id='inthespotlight'>
            <div className=''>
                
                <div className='row no_LR_margin'>
                    <div className='col-12'>
                        <p className='section_name news_hd'>HORIZON OF POSSIBILITIES</p>
                        <hr className='add_border new_green_line'/>
                    </div>
                </div>
                <div className='row no_LR_margin'>
                    <div className='col-12 no_right_padding'>
                        <h2 className="section_heading blog_bsh_ttl">In The Spotlight</h2>


                        {/* <select className='ITS_mob_drop' id='ITS_dropdown'>
                            <option value='case_studies_inthespot'>Case Studies</option>
                            <option value='events_inthespot'>Events</option>
                            <option value='blogs_inthespot'>Blogs</option>
                            <option value='news_inthespot'>News</option>
                            <option value='press_rels_inthespot'>Press Releases</option>
                        </select>  */}

                        {/*  Tab Button  */}
                        <ul className="nav nav-pills cstm_client_tabs infra_tab ITS_tab ITS_tab1" role="tablist">
                            <li className="nav-item">
                                <a className="nav-link active cstm_link infra_link" data-bs-toggle="pill" href="#news_inthespot">News</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link cstm_link infra_link" data-bs-toggle="pill" href="#press_rels_inthespot">Press Releases</a>
                            </li>
                        </ul>

                        {/*  Tab panes  */}
                        <div className="tab-content">

                              <div id="news_inthespot" className="tab-pane active fade show"><br />
                                <News_ITS />
                              </div>
                              <div id="press_rels_inthespot" className="tab-pane fade "><br />
                                <Pressrels_ITS/>
                              </div>

                        </div>

                       
                    </div>
                </div>

            </div>
        </div>
    </>
  )
}
