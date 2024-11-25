import React from 'react'
import {Link, useParams} from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../../../assets/css/event_sec.css';
import { useEffect, useRef , useState } from "react";
import $ from "jquery";
import Event_slider from './event_slider';
import Event_model from './event_model';
// import { useParams } from "react-router-dom";

export default function Event_sec({ initialData }) {
    const data = initialData || [];
    // const { slug } = useParams();
    useEffect(() => {

    
        (function($) {
            var pagify = {
                items: {},
                container: null,
                totalPages: 3,
                perPage: 6,
                currentPage: 0,
                createNavigation: function() {
                    this.totalPages = Math.ceil(this.items.length / this.perPage);
        
                    // Retrieve the current page from local storage, if available
                    var savedPage = localStorage.getItem('currentPage');
                    if (savedPage) {
                        this.currentPage = parseInt(savedPage, 10);
                    }
        
                    $('.pagination', this.container.parent()).remove();
                    var pagination = $('<div class="pagination"></div>').append('<a class=" pagi nav prev disabled" data-next="false"> < Prev </a>');
        
                    for (var i = 0; i < this.totalPages; i++) {
                        var pageElClass = "page";
                        if (i === this.currentPage) {
                            pageElClass = "page current";
                        }
                        var pageEl = '<a class="' + pageElClass + '" data-page="' + (i + 1) + '">' + (i + 1) + "</a>";
                        pagination.append(pageEl);
                    }
                    pagination.append('<a class="pagi nav next" data-next="true"> Next > </a');
                    $('.event_sec').append(pagination);
        
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
                    if (isNaN(next) || next === undefined) {
                        next = true;
                    }
                    $(".pagination .nav").removeClass("disabled");
                    if (next) {
                        this.currentPage++;
                        if (this.currentPage >= this.totalPages) {
                            this.currentPage = this.totalPages - 1;
                            $(".pagination .nav.next").addClass("disabled");
                        }
                    } else {
                        this.currentPage--;
                        if (this.currentPage < 0) {
                            this.currentPage = 0;
                            $(".pagination .nav.prev").addClass("disabled");
                        }
                    }
                    // Save the current page to local storage
                    localStorage.setItem('currentPage', this.currentPage.toString());
                    this.showItems();
                },
                updateNavigation: function() {
                    var pages = $(".pagination .page");
                    pages.removeClass("current");
                    $('.pagination .page[data-page="' + (this.currentPage + 1) + '"]').addClass("current");
                },
                goToPage: function(page) {
                    this.currentPage = page - 1;
                    $(".pagination .nav").removeClass("disabled");
                    if (this.currentPage === (this.totalPages - 1)) {
                        $(".pagination .nav.next").addClass("disabled");
                    }
                    if (this.currentPage === 0) {
                        $(".pagination .nav.prev").addClass("disabled");
                    }
                    // Save the current page to local storage
                    localStorage.setItem('currentPage', this.currentPage.toString());
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

            var event_url = window.location.pathname;

            if (event_url === '/events#event_sec') {
                $('.event_box_col a').on("click", function() {
                    localStorage.setItem('currentPage', this.currentPage.toString());
                });
                $('.event_popup a').on("click", function() {
                    localStorage.setItem('currentPage', this.currentPage.toString());
                });
                $('a').on("click", function() {
                    localStorage.removeItem('currentPage');
                });
            }
            else if (event_url === '/events') {
                $('.event_box_col a').on("click", function() {
                    localStorage.setItem('currentPage', this.currentPage.toString());
                });
                $('.event_popup a').on("click", function() {
                    localStorage.setItem('currentPage', this.currentPage.toString());
                });
                $('a').on("click", function() {
                    localStorage.removeItem('currentPage');
                });
            }
        
            // Stuff it all into a jQuery method
            $.fn.pagify = function(perPage, itemSelector) {
                var el = $(this);
                var items = $(itemSelector, el);
        
                if (isNaN(perPage) || perPage === undefined) {
                    perPage = 6;
                }
        
                if (items.length <= perPage) {
                    return true;
                }
        
                pagify.init(el, items, perPage);
            };
        })($);
        
        $(".event_sec").pagify(6, ".event_box_col");
        


        $('.event_box').on("click", function() {
            $('.load-container').hide();
            $('.event_popup').addClass('event_popup_opn');
            $('.event_overlay').show();
            $('body').css('overflow','hidden');
        });

        $('.ep_cls_btn').on("click", function() {
            $('.event_popup').removeClass('event_popup_opn');
            $('.event_overlay').hide();
            $('body').css('overflow','visible');
            // $('html, body').animate({
            //     scrollTop: $("#event_sec").offset().top
            //  }, 100);
        });


        var event_url = window.location.pathname;
        // var event_url1 = '/events/'+ slug; 
        // console.log("URL0 "+ event_url);
        // console.log("URL1 "+ event_url1);
     
        $(document).ready(function () {


            $(".event_box_col a").bind("contextmenu", function(e){
                e.preventDefault(); // Stop right click on link
                return false;
            });
            $('.event_box_col').on('click', function (event) {
                // Check if the Ctrl key is pressed
                if (event.ctrlKey || event.metaKey) {
                    // Prevent the default action (opening link in a new tab)
                    event.preventDefault();
                    // You can add your custom logic here if needed
                    console.log('Ctrl + Click disabled');
                    $('.event_popup').removeClass('event_popup_opn');
                    $('.event_overlay').css('display','none');
                    $('body').css('overflow','auto');
                }
              
            });
    
        });
        
    })

    const [data1, setData] = useState(null);
    const [visible, setVisible] = useState(false);

    const toggleItem = (cs_item = null) => {
        setData(cs_item);
        setVisible(cs_item !== null);
    };
    
  return (
    <>
        <div className='event_sec mob_pd_LR tab_pd_LR' id='event_sec'>
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

                        <div className='col-12 event_descp'>
                            <h2 className='hdg_esg'>Welcome to a horizon of possibilities!</h2>
                            <p class="sub_para ovrview_subpara">Step into the dynamic world of Horizon and stay tuned as we unveil our latest developments. From cutting-edge project reveals to engaging tenant interactions, and significant industry gatherings, immerse yourself in our culture and stay connected with our ever-evolving updates.</p>
                        </div>
                    
                        {data && data.map(({ id , acf , content , title , event_year , event_categories , slug}) => ( 
                            // <div className='col-lg-6 col-md-6 col-12 event_box_col js-filterable ADD' key={id} data-year={event_year} data-category={event_categories}>
                            <div className='col-lg-6 col-md-6 col-12 event_box_col js-filterable ADD' key={id} >
                                <a onClick={() => toggleItem({ id, acf, content, title })}>
                                    <div className='event_box'  >
                                        <div className='event_img_dv'>
                                            <img className='event_img' src={acf.feature_image}></img>     
                                        </div>
                                        <h3 className='event_hd' dangerouslySetInnerHTML={{ __html: title.rendered }}></h3>  
                                        <p style={{display: "none"}} className='extra_desc' dangerouslySetInnerHTML={{ __html: content.rendered }}></p>  
                                        <p className='event_date'><img src={require('../../../assets/img/svg/date_icon.svg')}></img>{acf.date}</p>
                                    </div>
                                </a>
                            </div>
                        ))}
                    

                     
                </div>

            </div>
        </div>

        {/* Popup Div Code */}
        {visible === true && data1 !== null && (
          <Event_model data1={data1} closeModal={() => toggleItem()} />
        )}
       
         {/* <Event_slider/> */}
         <div className='event_overlay'></div>
    </>
  )
}
