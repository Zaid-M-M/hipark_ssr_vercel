import React from 'react'
import useFetch from "react-fetch-hook";
import { useEffect } from "react";
// import Event_year from './event_year';
import $ from "jquery";
import News_media from './news_media';
import Press_rels_media from './press_rels_media';
import '../../../assets/css/news.css';
import '../../../assets/css/event_sec.css';
import '../../../assets/css/media_sec.css';
import "../../../helper/common";

export default function Event_sec({ initialData, initialData2 }) {
    const data = initialData || [];
    const data2 = initialData2 || [];
    useEffect(() => {
        $( document ).ready(function() {
            var path = window.location.pathname; 
            // console.log('Tetsing '+ ' ' + path);
            if(path === '/media/press_releases') {
                $('.media_news_tab').removeClass('active');
                $('.media_news_content').removeClass('active');
                $('.media_news_content').removeClass('show');

                $('.media_pr_tab').addClass('active');
                $('.media_pr_content').addClass('active');
                $('.media_pr_content').addClass('show');
            }
            else {
                // $('.media_news_tab').addClass('active');
                // $('.media_news_content').addClass('active');

                // $('.media_pr_tab').removeClass('active');
                // $('.media_pr_content').removeClass('active');
            }
        });


        (function($) {
            
            var pagify = {
                items: {},
                container: null,
                totalPages: 3,
                perPage: 6,
                currentPage: 0,
                createNavigation: function() {
                    this.totalPages = Math.ceil(this.items.length / this.perPage);
                    
                    $('.pagination', this.container.parent()).remove();
                    var pagination = $('<div className="pagination"></div>').append('<a className=" pagi nav prev disabled" data-next="false"> < Prev </a>');

                    $(`<img  src={require('../../../assets/img/svg/date_icon.svg')}></img>`).appendTo('.pagi.nav.prev');
                    for (var i = 0; i < this.totalPages; i++) {
                        var pageElClass = "page";
                        if (!i)
                            pageElClass = "page current";
                        var pageEl = '<a className="' + pageElClass + '" data-page="' + (
                        i + 1) + '">' + (
                        i + 1) + "</a>";
                        pagination.append(pageEl);
                    }
                    pagination.append('<a className="pagi nav next" data-next="true"> Next > </a>');
                    $('.event_sec').append(pagination);
                    // this.container.before(pagination);
        
                    var that = this;
                    $("body").off("click", ".nav");
                    this.navigator = $("body").on("click", ".nav", function() {
                        var el = $(this);
                        that.navigate(el.data("next"));
                    });
        
                    $("body").off("click", ".page");
                    this.pageNavigator = $("body").on("click", ".page", function() {
                        var el = $(this);
                        that.goToPage(el.data("page"));
                    });
                },
                navigate: function(next) {
                    // default perPage to 5
                    if (isNaN(next) || next === undefined) {
                        next = true;
                    }
                    $(".pagination .nav").removeClass("disabled");
                    if (next) {
                        this.currentPage++;
                        if (this.currentPage > (this.totalPages - 1))
                            this.currentPage = (this.totalPages - 1);
                        if (this.currentPage == (this.totalPages - 1))
                            $(".pagination .nav.next").addClass("disabled");
                        }
                    else {
                        this.currentPage--;
                        if (this.currentPage < 0)
                            this.currentPage = 0;
                        if (this.currentPage == 0)
                            $(".pagination .nav.prev").addClass("disabled");
                        }
        
                    this.showItems();
                },
                updateNavigation: function() {
        
                    var pages = $(".pagination .page");
                    pages.removeClass("current");
                    $('.pagination .page[data-page="' + (
                    this.currentPage + 1) + '"]').addClass("current");
                },
                goToPage: function(page) {
        
                    this.currentPage = page - 1;
        
                    $(".pagination .nav").removeClass("disabled");
                    if (this.currentPage == (this.totalPages - 1))
                        $(".pagination .nav.next").addClass("disabled");
        
                    if (this.currentPage == 0)
                        $(".pagination .nav.prev").addClass("disabled");
                    this.showItems();
                },
                showItems: function() {
                    this.items.hide();
                    var base = this.perPage * this.currentPage;
                    this.items.slice(base, base + this.perPage).show();
        
                    this.updateNavigation();
                },
                init: function(container, items, perPage) {
                    this.container = container;
                    this.currentPage = 0;
                    this.totalPages = 1;
                    this.perPage = perPage;
                    this.items = items;
                    this.createNavigation();
                    this.showItems();
                }
            };
        
            // stuff it all into a jQuery method!
            $.fn.pagify = function(perPage, itemSelector) {
                var el = $(this);
                var items = $(itemSelector, el);
        
                // default perPage to 5
                if (isNaN(perPage) || perPage === undefined) {
                    perPage = 6;
                }
        
                // don't fire if fewer items than perPage
                if (items.length <= perPage) {
                    return true;
                }
        
                pagify.init(el, items, perPage);
            };
        })($);
        //  $(".event_sec").pagify(6, ".event_box_col");

        
    })
  return (
    <>
        <div className='event_sec mob_pd_LR tab_pd_LR media_sec' id='event_sec'>
            <div className='cstm_container'>
                
                {/* <div className='row dropdown_row'>
                    <div className='col-12'>

                        <div className='year_dv'>
                            <Event_year/>
                        </div>
                        <div className='category_dv'>
                            <Event_category/>
                        </div>
                    </div>
                </div> */}

                <div className='row event_pg_col'>

                        {/* <div className='col-12 event_descp'>
                            <h2 className='hdg_esg'>Lorem ipsum dolor sit amet!</h2>
                            <p className="sub_para ovrview_subpara">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </div> */}

                        <div className='col-12'>

                            {/* Tab Button */}
                            <ul className="nav nav-pills cstm_client_tabs infra_tab media_tab" role="tablist">
                                <li className="nav-item">
                                    <a className="nav-link active cstm_link infra_link media_news_tab" data-bs-toggle="pill" href="#news_media">News</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link cstm_link infra_link media_pr_tab" data-bs-toggle="pill" href="#press_rels_media">Press Releases</a>
                                </li>
                            </ul>
                            {/* Tab Button */}


                            {/* Tab Content */}
                            <div className="tab-content">

                              {/* News Tab */}
                              <div id="news_media" className="tab-pane active fade show client_logo_tab media_news_content"><br />
                                    <News_media initialData={data}/>
                              </div>

                              {/* Press Releases Tab */}          
                              <div id="press_rels_media" className="tab-pane fade client_logo_tab media_pr_content"><br />
                                    <Press_rels_media initialData={data2}/>
                              </div>

                            </div>
                            {/* Tab Content */}

                        </div>
                    
                        {/* {data && data.map(({ id , acf , content , title , event_year , event_categories , slug}) => ( 
                            // <div className='col-lg-6 col-md-6 col-12 event_box_col js-filterable ADD' key={id} data-year={event_year} data-category={event_categories}>
                            <div className='col-lg-6 col-md-6 col-12 event_box_col js-filterable ADD' key={id} >
                                <Link to={slug} >
                                    <div className='event_box'  >
                                        <div className='event_img_dv'>
                                            <img className='event_img' src={acf.feature_image}></img>     
                                        </div>
                                        <h3 className='event_hd' dangerouslySetInnerHTML={{ __html: title.rendered }}></h3>  
                                        <p className='event_date'><img src={require('../../../assets/img/svg/date_icon.svg')}></img>{acf.date}</p>
                                    </div>
                                </Link>
                            </div>
                        ))}
                     */}

                     
                </div>

            </div>
        </div>

       
    </>
  )
}
