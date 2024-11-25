import React from "react";
import "../../assets/css/header.css";
import $ from "jquery";
import { useEffect } from "react";
import { Link , useLocation  } from "react-router-dom";
import { Helmet } from "react-helmet";

export default function Header(initialData) {
  const resultinput = React.useRef(null);

  const location = useLocation();

  const sendResult = (e) => {
    e.preventDefault();

    let resultinput_var = resultinput.current.value;
    window.location.href = "/search/" + resultinput_var;
  };

  useEffect(() => {

    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location.hash]);

  useEffect(() => {

    //----------------------------------------------------------------------- Desktop Header 1 Jquery Code Start Here
    // $('.park_drp').on("click", function(e) {
    $(".park_drp").mouseenter(function (e) {
      $(".solution_drp").find(".megamenu").removeClass("open_megamenu");
      $(".explore_drp").find(".megamenu").removeClass("open_megamenu");
      $(".esg_drp").find(".megamenu").removeClass("open_megamenu");
      $(".solution_drp").removeClass("add_black");
      $(".explore_drp").removeClass("add_black");
      $(".esg_drp").removeClass("add_black");
      $(".prk_col3").css("border-right", "1px solid rgba(255, 255, 255, 0.35)");

      $(".menu_animate_box").removeClass("submenu_animation");
      $(this).find(".megamenu").addClass("open_megamenu");
      $(".hdr_container").removeClass("show_header_bg2");
      $(".hdr_container").addClass("show_header_bg1");
      $(".park_drp .menu_animate_box").addClass("submenu_animation");
      $(this).toggleClass("add_black");
      e.stopPropagation();
    });

    $(".prk_menu2").mouseenter(function (e) {
      $(".hdr_container").removeClass("show_header_bg1");
      $(".hdr_container").addClass("show_header_bg_sticky2");
    });

    $(".park_drp").mouseleave(function (e) {
      $(".megamenu").removeClass("open_megamenu");
      $(".hdr_container").removeClass("show_header_bg1");
      $(".hdr_container").removeClass("show_header_bg2");
      $(".dropdown").removeClass("add_black");
      $(".dropdown").append(
        "<style>.dropdown a::after{right:2px !important;}</style>"
      );
      $(".prk_col3").css("border-right", "1px solid #ffffff00");
    });

    $(".prk_menu2").mouseleave(function (e) {
      $(".hdr_container").removeClass("show_header_bg_sticky2");
    });

    // $('.solution_drp').on("click", function(e) {
    $(".solution_drp").mouseenter(function (e) {
      $(".park_drp").find(".megamenu").removeClass("open_megamenu");
      $(".explore_drp").find(".megamenu").removeClass("open_megamenu");
      $(".esg_drp").find(".megamenu").removeClass("open_megamenu");
      $(".park_drp").removeClass("add_black");
      $(".explore_drp").removeClass("add_black");
      $(".esg_drp").removeClass("add_black");

      $(".menu_animate_box").removeClass("submenu_animation");
      $(this).find(".megamenu").addClass("open_megamenu");
      $(".hdr_container").removeClass("show_header_bg2");
      $(".hdr_container").addClass("show_header_bg1");
      $(".solution_drp .menu_animate_box").addClass("submenu_animation");
      $(this).toggleClass("add_black");
      $(".prk_col3").css("border-right", "1px solid #ffffff00");
      e.stopPropagation();
    });

    $(".solu_menu2").mouseenter(function (e) {
      $(".hdr_container").removeClass("show_header_bg1");
      $(".hdr_container").addClass("show_header_bg_sticky2");
      $(".prk_col3").css("border-right", "1px solid #ffffff00");
    });

    $(".solution_drp").mouseleave(function (e) {
      $(".megamenu").removeClass("open_megamenu");
      $(".hdr_container").removeClass("show_header_bg1");
      $(".hdr_container").removeClass("show_header_bg2");
      $(".dropdown").removeClass("add_black");
      $(".dropdown").append(
        "<style>.dropdown a::after{right:2px !important;}</style>"
      );
    });

    $(".solu_menu2").mouseleave(function (e) {
      $(".hdr_container").removeClass("show_header_bg_sticky2");
    });

    // $('.explore_drp').on("click", function(e) {
    $(".explore_drp").mouseenter(function (e) {
      $(".park_drp").find(".megamenu").removeClass("open_megamenu");
      $(".solution_drp").find(".megamenu").removeClass("open_megamenu");
      $(".esg_drp").find(".megamenu").removeClass("open_megamenu");
      $(".park_drp").removeClass("add_black");
      $(".solution_drp").removeClass("add_black");
      $(".esg_drp").removeClass("add_black");

      $(".menu_animate_box").removeClass("submenu_animation");
      $(this).find(".megamenu").addClass("open_megamenu");
      $(".hdr_container").removeClass("show_header_bg2");
      $(".hdr_container").addClass("show_header_bg1");
      $(".explore_drp .menu_animate_box").addClass("submenu_animation");
      $(this).toggleClass("add_black");
      $(".prk_col3").css("border-right", "1px solid #ffffff00");
      e.stopPropagation();
    });

    $(".explo_menu2").mouseenter(function (e) {
      $(".hdr_container").removeClass("show_header_bg1");
      $(".hdr_container").addClass("show_header_bg_sticky2");
      $(".prk_col3").css("border-right", "1px solid #ffffff00");
    });

    $(".explore_drp").mouseleave(function (e) {
      $(".megamenu").removeClass("open_megamenu");
      $(".hdr_container").removeClass("show_header_bg1");
      $(".hdr_container").removeClass("show_header_bg2");
      $(".dropdown").removeClass("add_black");
      $(".dropdown").append(
        "<style>.dropdown a::after{right:2px !important;}</style>"
      );
    });

    $(".explo_menu2").mouseleave(function (e) {
      $(".hdr_container").removeClass("show_header_bg_sticky2");
    });

    // $('.esg_drp').on("click", function(e) {
    $(".esg_drp").mouseenter(function (e) {
      $(".park_drp").find(".megamenu").removeClass("open_megamenu");
      $(".solution_drp").find(".megamenu").removeClass("open_megamenu");
      $(".explore_drp").find(".megamenu").removeClass("open_megamenu");
      $(".park_drp").removeClass("add_black");
      $(".solution_drp").removeClass("add_black");
      $(".explore_drp").removeClass("add_black");

      $(".menu_animate_box").removeClass("submenu_animation");
      $(this).find(".megamenu").addClass("open_megamenu");
      $(".hdr_container").removeClass("show_header_bg1");
      $(".hdr_container").addClass("show_header_bg2");
      $(".esg_drp .menu_animate_box").addClass("submenu_animation");
      $(this).toggleClass("add_black");
      $(".prk_col3").css("border-right", "1px solid #ffffff00");
      e.stopPropagation();
    });

    $(".esg_drp").mouseleave(function (e) {
      $(".megamenu").removeClass("open_megamenu");
      $(".hdr_container").removeClass("show_header_bg1");
      $(".hdr_container").removeClass("show_header_bg2");
      $(".dropdown").removeClass("add_black");
      $(".dropdown").append(
        "<style>.dropdown a::after{right:2px !important;}</style>"
      );
    });

    // $('.contact_link').on("click", function(e) {
    $(".contact_link").mouseenter(function (e) {
      $(".megamenu").removeClass("open_megamenu");
      // $('.hdr_container').css({'background-color':'transparent','height':'180px'});
      $(".hdr_container").removeClass("show_header_bg1");
      $(".hdr_container").removeClass("show_header_bg2");
      $(".dropdown").removeClass("add_black");
      $(".prk_col3").css("border-right", "1px solid #ffffff00");
      e.stopPropagation();
    });

    $(".contact_link").mouseleave(function (e) {
      $(".megamenu").removeClass("open_megamenu");
      $(".hdr_container").removeClass("show_header_bg1");
      $(".hdr_container").removeClass("show_header_bg2");
      $(".dropdown").removeClass("add_black");
      $(".dropdown").append(
        "<style>.dropdown a::after{right:2px !important;}</style>"
      );
    });

    // $('.book_visit_btn').on("click", function(e) {
    //     $('.megamenu').removeClass('open_megamenu');
    //     $('.hdr_container').removeClass('show_header_bg1');
    //     $('.hdr_container').removeClass('show_header_bg2');
    //     $('.dropdown').removeClass('add_black');
    //     $('.dropdown').append('<style>.dropdown a::after{right:2px !important;}</style>');
    //     e.stopPropagation();
    // });

    // $('body').on("click", function() {
    //     $('.megamenu').removeClass('open_megamenu');
    //     $('.hdr_container').removeClass('show_header_bg1');
    //     $('.hdr_container').removeClass('show_header_bg2');
    //     $('.dropdown').removeClass('add_black');
    //     $('.dropdown').append('<style>.dropdown a::after{right:2px !important;}</style>');
    // });

    $(".dropdown").on("click", function (e) {
      $(".dropdown")
        .find("a.dropdown-toggle.nav-link")
        .css("padding-left", "2px");
      $(".dropdown").find("a::after").css("right", "2px");
      $(".dropdown").css("background-color", "transparent");

      $(this).find("a.dropdown-toggle.nav-link").css("padding-left", "7%");
      // $(this).append('<style> a::after{right:7% !important;}</style>');
    });
    //----------------------------------------------------------------------- Desktop Header 1 Jquery Code End Here

    //----------------------------------------------------------------------- Desktop Header 2 Jquery Code Start Here

    $(".desktop_header2 .esg_drp").on("click", function (e) {
      $(".desktop_header2 .park_drp")
        .find(".desktop_header2 .megamenu")
        .removeClass("open_megamenu");
      $(".desktop_header2 .solution_drp")
        .find(".desktop_header2 .megamenu")
        .removeClass("open_megamenu");
      $(".desktop_header2 .explore_drp")
        .find(".desktop_header2 .megamenu")
        .removeClass("open_megamenu");
      $(".desktop_header2 .park_drp").removeClass("add_black");
      $(".desktop_header2 .solution_drp").removeClass("add_black");
      $(".desktop_header2 .explore_drp").removeClass("add_black");

      $(".desktop_header2 .menu_animate_box").removeClass("submenu_animation");
      $(this).find(".desktop_header2 .megamenu").addClass("open_megamenu");
      $(".desktop_header2 .hdr_container").removeClass("show_header_bg1");
      $(".desktop_header2 .hdr_container").addClass("show_header_bg2");
      $(".desktop_header2 .esg_drp .menu_animate_box").addClass(
        "submenu_animation"
      );
      $(this).toggleClass("add_black");
      e.stopPropagation();
    });

    $("body").on("click", function () {
      $(".desktop_header2 .megamenu").removeClass("open_megamenu");
      $(".desktop_header2 .hdr_container").removeClass("show_header_bg1");
      $(".desktop_header2 .hdr_container").removeClass("show_header_bg2");
      $(".desktop_header2 .dropdown").removeClass("add_black");
      $(".desktop_header2 .dropdown").append(
        "<style>.dropdown a::after{right:2px !important;}</style>"
      );
    });

    $(".desktop_header2 .dropdown").on("click", function (e) {
      $(".desktop_header2 .dropdown")
        .find("a.dropdown-toggle.nav-link")
        .css("padding-left", "2px");
      $(".desktop_header2 .dropdown").find("a::after").css("right", "2px");
      $(".desktop_header2 .dropdown").css("background-color", "transparent");

      $(this)
        .find(".desktop_header2 a.dropdown-toggle.nav-link")
        .css("padding-left", "7%");
      // $(this).append('<style>.desktop_header2 a::after{right:7% !important;}</style>');
    });
    //----------------------------------------------------------------------- Desktop Header 1 Jquery Code End Here

    $(".mob_menu_btn").on("click", function () {
      $(".mobile_nav").addClass("open_mob_nav");
    });

    $(".close_mob_nav").on("click", function () {
      $(".mobile_nav").removeClass("open_mob_nav");
    });

    $(".lv_3").on("click", function () {
      $(".mobile_nav").removeClass("open_mob_nav");
    });

    

    $(".anchr_btn").on("click", function () {
      $(".mobile_nav").removeClass("open_mob_nav");
    });

    if ($(window).width() > 1023) {
      var prevScrollpos = window.pageYOffset;

      window.onscroll = function () {
        var header = document.getElementById("desk_header");
        var currentScrollPos = window.pageYOffset;

        if (prevScrollpos > currentScrollPos) {
          // header.classList.add("fixed");
          header.style.display = "block";
        } else {
          header.style.display = "none";
        }
        prevScrollpos = currentScrollPos;
      };

      $(window).on("scroll", function () {
        var sticky = $("#desk_header"),
          scroll = $(window).scrollTop();

        if (scroll <= 450) {
          sticky.hide();
        }
      });
    }

    if ($(window).width() < 1023) {
      var prevScrollpos = window.pageYOffset;
      window.onscroll = function () {
        var header = document.getElementById("desk_header_1");
        var currentScrollPos = window.pageYOffset;

        if (prevScrollpos > currentScrollPos) {
          header.classList.add("fixed");
        } else {
          header.classList.remove("fixed");
        }
        prevScrollpos = currentScrollPos;
      };

      $(window).on("scroll", function () {
        var sticky = $(".desktop_header1"),
          scroll = $(window).scrollTop();

        if (scroll == 0) {
          sticky.removeClass("fixed");
        }
      });
    }

    //     $('.mobile_nav .l1').on('click',function(){

    //         var tag = $(this).attr('value');
    //         var tag1 = $(this).text();
    //        var back_link="#layer"+tag;
    //       $('.mobile_nav .nav-link').attr('href',back_link);
    //        $('.mobile_nav .nav-link').attr('value',tag);
    //        $(".mobile_nav #layer"+tag).removeClass('hide-menu');
    //         $(".mobile_nav #layer"+tag).toggleClass('show-menu');
    //    });
    //    $('.mobile_nav .nav-link').on('click',function(){
    //         var tag = $(this).attr('href');
    //        var val= $(this).attr('value');
    //         $(tag).removeClass('show-menu');
    //         var back_link="#layer"+(val-1);
    //         $('.mobile_nav .nav-link').attr('href',back_link);
    //        $('.mobile_nav .nav-link').attr('value',val-1);
    //    });

    $("#mob_accordian a").on("click", function () {
      $(".State_page .load-container").css("display", "none");
      $(".park_inside_page .load-container").css("display", "none");
      var link = $(this);
      var closest_ul = link.closest("ul");
      var parallel_active_links = closest_ul.find(".active");
      var closest_li = link.closest("li");
      var link_status = closest_li.hasClass("active");
      var count = 0;

      closest_ul.find("ul").slideUp(function () {
        if (++count == closest_ul.find("ul").length)
          parallel_active_links.removeClass("active");
      });

      if (!link_status) {
        closest_li.children("ul").slideDown();
        closest_li.addClass("active");
      }
    });

    $(".load-container").css("display", "show");
  }, []);

//   const articleStructuredData1 = {
    
//     "@context": "http://schema.org/",
//     "@type": "Organization",
//     "name": "Horizon Industrial Parks Pvt Ltd",
//     "logo": "https://phpstack-725513-4659896.cloudwaysapps.com/assets/horizon_logo.9eebd95c8ccc564170fc.svg",
//     "url": "https://phpstack-725513-4659896.cloudwaysapps.com/",
//     "address": {
//       "@type": "PostalAddress",
//       "streetAddress": "Floor 15, One World Center, TOWER-1, Horizon Industrial Parks Pvt Ltd, Lower Parel",
//       "addressLocality": "Mumbai",
//       "addressRegion": "Maharashtra",
//       "postalCode": "400013",
//       "addressCountry": "India"
//     },
//     "sameAs": []

// };


  return (
    <>  

    {/* <script type="application/ld+json">
      {JSON.stringify(articleStructuredData1)}
    </script> */}


      {/*------------------------------------------------------------------------------------- Desktop header 1  */}
      <div
        className="header_sec snap_sec desktop_header1"
        id="desk_header_1">
        <div className="hdr_container">
          {/* Header top bar */}
          <div className="row header_top_bar">
            <div className="col-lg-7 col-md-6 col-5 no_padding">
              <div className="logo_dv">
                <Link to="/">
                  <img
                    className="white_logo"
                    src={
                      require("../../assets/img/horizon_logo.svg")
                    }></img>
                </Link>
              </div>
            </div>
            <div className="col-lg-5 col-md-6 col-7 no_padding">
              <div className="hdr_cntact_dv">
                {/* <Link to='tel:+91 88799 70705' className='hr_contact_no'>+91 88799 70705</Link> */}

                <div className="search_box">
                  <img
                    src={
                      require("../../assets/img/svg/search_icon.svg")
                    }></img>
                </div>

                {/* <Link className='enq_bnt'>Enquire Now <span><img src={require('../../assets/img/svg/sldr_right_arrow_wht.svg')}></img></span></Link> */}

                <Link
                  to="https://www.blackstone.com/"
                  target="_blank"
                  className="hr_contact_no">
                  A blackstone <br></br>logistics platform
                </Link>

                {/* ============ mobile menu button */}
                <div id="mobile_menu">
                  <img
                    className="mob_menu_btn"
                    src={
                      require("../../assets/img/svg/mob_menu.svg")
                    }></img>
                </div>
              </div>
            </div>
          </div>

          {/* Desktop Navbar  */}
          <div className="row desk_menu_row">
            <div className="col-12 zero_padding">
              <nav className="navbar navbar-expand-lg navbar-dark">
                <div className="container-fluid no_padding">
                  <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#main_nav"
                    aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                  </button>
                  <div
                    className="collapse navbar-collapse"
                    id="main_nav">
                    <ul className="navbar-nav">
                      <li className="nav-item dropdown has-megamenu menu_link park_drp">
                        <Link
                          className="nav-link dropdown-toggle "
                          to="#"
                          data-bs-toggle="dropdown"
                          data-bs-hover="dropdown">
                          Parks
                        </Link>
                        <div
                          className="dropdown-menu megamenu"
                          role="menu">
                          <div className="row row_border">
                            <div className="col-lg-3 col-6 over_flow">
                              <div className="col-megamenu menu_animate_box animi_bx1 park_menu_col1">
                                <Link to="/industrial-and-logistics-parks-in-india">
                                  <h5>Park Overview</h5>
                                </Link>
                                <img
                                  src={require("../../assets/img/park_2.jpg")}></img>
                                <Link className="book_visit_btn bk_vst_btn">
                                  Book a site visit
                                </Link>
                              </div>
                            </div>
                            <div className="col-lg-2 col-6 over_flow">
                              <div className="col-megamenu menu_animate_box animi_bx2">
                                <h5>Delhi NCR</h5>
                                <ul className="list-unstyled">
                                  <li>
                                    <Link to="/warehousing-park-farukhnagar-i">
                                      Farukhnagar I
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="/warehousing-park-farukhnagar-ii">
                                      Farukhnagar II
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="/warehousing-park-delhi-i">
                                      Delhi I
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="/warehousing-park-delhi-ii">
                                      Delhi II
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="/industrial-and-warehousing-park-bilaspur">
                                      Bilaspur
                                    </Link>
                                  </li>
                                  {/* <li>
                                    <Link to="/warehousing-park-bilaspur-i">
                                      Bilaspur I
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="/warehousing-park-bilaspur-ii">
                                      Bilaspur II
                                    </Link>
                                  </li> */}
                                  <li>
                                    <Link to="/warehousing-park-koka">
                                      Koka
                                    </Link>
                                  </li>
                                  
                                </ul>
                                <h5 className="top_spc">Ahmedabad</h5>
                                <ul className="list-unstyled">
                                  <li>
                                    <Link to="/industrial-and-warehousing-park-bhayala">
                                      Bhayala
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="col-lg-2 col-6 over_flow">
                              <div className="col-megamenu menu_animate_box animi_bx3">
                                <h5>Pune</h5>
                                <ul className="list-unstyled">
                                  <li>
                                    <Link to="/industrial-and-warehousing-park-chakan-ii">
                                      Chakan II
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="/industrial-and-warehousing-park-chakan-v">
                                      Chakan V
                                    </Link>
                                  </li>
                                </ul>

                                {/* <h5 className='top_spc'>Nagpur</h5>
                                  <ul className="list-unstyled">
                                      <li><Link to="#">Nagpur</Link></li>
                                  </ul> */}

                                <h5 className="top_spc">Goa</h5>
                                <ul className="list-unstyled">
                                  <li>
                                    <Link to="/industrial-and-warehousing-park-verna">
                                      Verna
                                    </Link>
                                  </li>
                                </ul>

                                <h5 className="top_spc">Hyderabad</h5>
                                <ul className="list-unstyled">
                                  <li>
                                    <Link to="/industrial-and-warehousing-park-kothur">
                                      Kothur
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="/industrial-and-warehousing-park-patancheru">
                                      Patancheru
                                    </Link>
                                  </li>
                                </ul>

                                
                              </div>
                            </div>
                            <div className="col-lg-2 col-6 over_flow prk_col3">
                              <div className="col-megamenu menu_animate_box animi_bx4 ">
                                
                                

                                <h5>Bengaluru</h5>
                                <ul className="list-unstyled">
                                  <li>
                                    <Link to="/industrial-and-warehousing-park-dobbaspet-i">
                                      Dobbaspet I
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="/industrial-and-warehousing-park-dobbaspet-ii">
                                      Dobbaspet II
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="/industrial-and-warehousing-park-hosur-i">
                                      Hosur I
                                    </Link>
                                  </li>
                                  {/* <li><Link to="/hosur-ii">Hosur II</Link></li>   */}
                                  <li>
                                    <Link to="/warehousing-park-malur">
                                      Malur
                                    </Link>
                                  </li>
                                </ul>

                                <h5 className="top_spc">Chennai</h5>
                                <ul className="list-unstyled">
                                  <li>
                                    <Link to="/industrial-and-warehousing-park-redhills-i">
                                      Redhills-I
                                    </Link>
                                  </li>
                                </ul>


                              </div>
                            </div>
                            <div className="col-lg-3 col-6 over_flow">
                              <div className="col-megamenu menu_animate_box animi_bx4 state_col">
                                <h5>View by States</h5>
                                <ul className="list-unstyled">
                                  <li>
                                    <Link to="/delhi">Delhi</Link>
                                  </li>
                                  <li>
                                    <Link to="/haryana">Haryana</Link>
                                  </li>
                                  <li>
                                    <Link to="/goa">Goa</Link>
                                  </li>
                                  <li>
                                    <Link to="/maharashtra">Maharashtra</Link>
                                  </li>
                                  <li>
                                    <Link to="/gujarat">Gujarat</Link>
                                  </li>
                                  <li>
                                    <Link to="/tamil-nadu">Tamil Nadu</Link>
                                  </li>
                                  <li>
                                    <Link to="/telangana">Telangana</Link>
                                  </li>
                                  <li>
                                    <Link to="/karnataka">Karnataka</Link>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>

                      {/* <li className="nav-item menu_link  contact_link"><Link className="nav-link" to="/solutions"> Solutions </Link></li> */}

                      <li className="nav-item dropdown has-megamenu menu_link solution_drp">
                        <Link
                          className="nav-link dropdown-toggle "
                          to="#"
                          data-bs-toggle="dropdown"
                          data-bs-hover="dropdown">
                          {" "}
                          Solutions
                        </Link>
                        <div
                          className="dropdown-menu megamenu"
                          role="menu">
                          <div className="row row_border">
                            <div className="col-lg-4 col-6 over_flow">
                              <div className="col-megamenu menu_animate_box animi_bx1 park_menu_col1">
                                <Link to="/solutions">
                                  <h5>Solutions Overview</h5>
                                </Link>
                                <img
                                  src={require("../../assets/img/solution_menu.png")}></img>
                              </div>
                            </div>
                            <div className="col-lg-4 col-6 over_flow">
                              <div className="col-megamenu menu_animate_box animi_bx2">
                                <h5>Integrated Solutions</h5>
                                <ul className="list-unstyled">
                                  <li>
                                    <Link to="/solutions/strategic-land-acquisition">
                                      Strategic Land Acquisition
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="/solutions/park-compliances-and-approvals">
                                      Park compliances and approvals
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="/solutions/park-construction-and-development">
                                      Park construction and development
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="/solutions/property-management">
                                      Property management
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="col-lg-4 col-6 over_flow">
                              <div className="col-megamenu menu_animate_box animi_bx3">
                                <h5>Customer Chronicles</h5>
                                <ul className="list-unstyled">
                                  <li>
                                    <Link to="/case-studies">Case Studies</Link>
                                  </li>
                                  <li>
                                    <Link to="/case-studies#testimonial">
                                      Testimonials
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="/case-studies#brand_we_serve">
                                      Brand We Serve
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>

                      <li className="nav-item dropdown has-megamenu menu_link explore_drp">
                        <Link
                          className="nav-link dropdown-toggle "
                          to="#"
                          data-bs-toggle="dropdown"
                          data-bs-hover="dropdown">
                          {" "}
                          Explore Horizon
                        </Link>
                        <div
                          className="dropdown-menu megamenu"
                          role="menu">
                          <div className="row row_border">
                            <div className="col-lg-4 col-6 over_flow">
                              <div className="col-megamenu menu_animate_box animi_bx1 park_menu_col1">
                                <img
                                  src={require("../../assets/img/explore_menu.png")}></img>
                              </div>
                            </div>
                            <div className="col-lg-4 col-6 over_flow">
                              <div className="col-megamenu menu_animate_box animi_bx2">
                                <h5>About Us</h5>
                                <ul className="list-unstyled">
                                  <li>
                                    <Link to="/explore">About Horizon</Link>
                                  </li>
                                  <li>
                                    <Link to="/explore#leadership">
                                      Leadership
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="/explore#purpose_mission_vision">
                                      Purpose
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="/explore#careers">Careers</Link>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="col-lg-4 col-6 over_flow">
                              <div className="col-megamenu menu_animate_box animi_bx3">
                                <h5>Media</h5>
                                <ul className="list-unstyled">
                                  <li>
                                    <Link to="/events">Events</Link>
                                  </li>
                                  <li>
                                    <Link to="/blog">Blog</Link>
                                  </li>
                                  <li>
                                    <Link to="/media">News</Link>
                                  </li>
                                  <li>
                                    <Link to="/media/press_releases">
                                      Press Releases
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="nav-item dropdown has-megamenu menu_link esg_drp">
                        <Link
                          className="nav-link dropdown-toggle "
                          to="#"
                          data-bs-toggle="dropdown"
                          data-bs-hover="dropdown">
                          {" "}
                          Sustainability{" "}
                        </Link>
                        <div
                          className="dropdown-menu megamenu"
                          role="menu">
                          <div className="row row_border esg_menus">
                            <div className="col-lg-4 col-6 over_flow">
                              <div className="col-megamenu menu_animate_box animi_bx1">
                                <ul className="list-unstyled">
                                  <li>
                                    <Link to="/sustainability#environment">
                                      Environment
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="col-lg-4 col-6 over_flow">
                              <div className="col-megamenu menu_animate_box animi_bx2">
                                <ul className="list-unstyled">
                                  <li>
                                    <Link to="/sustainability#social">
                                      Social
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="col-lg-4 col-6 over_flow">
                              <div className="col-megamenu menu_animate_box animi_bx3">
                                <ul className="list-unstyled">
                                  <li>
                                    <Link to="/sustainability#governance">
                                      Governance
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="nav-item menu_link no_LR_margin contact_link">
                        <Link
                          className="nav-link"
                          to="/contact">
                          {" "}
                          Contact Us{" "}
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>

      {/*------------------------------------------------------------------------------------- Desktop header 2  */}
      <div
        className="header_sec snap_sec desktop_header2 fixed"
        id="desk_header">
        <div className="hdr_container">
          {/* Header top bar */}
          <div className="row header_top_bar">
            <div className="col-lg-12 col-md-12 col-12 zero_padding  hdr_2_menu">
              <div className="hiprk_logo_dv">
                <Link to="/">
                  <img
                    className="hiprk_logo"
                    src={ require("../../assets/img/svg/horizon__logo_icon.svg")}></img>
                </Link>
                
              </div>
              <nav className="navbar navbar-expand-lg navbar-dark">
                <div className="container-fluid no_padding">
                  <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#main_nav"
                    aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                  </button>
                  <div
                    className="collapse navbar-collapse"
                    id="main_nav">
                    <ul className="navbar-nav">
                      <li className="nav-item dropdown has-megamenu menu_link park_drp prk_menu2">
                        <Link
                          className="nav-link dropdown-toggle "
                          to="#"
                          data-bs-toggle="dropdown"
                          data-bs-hover="dropdown">
                          Parks
                        </Link>
                        <div
                          className="dropdown-menu megamenu"
                          role="menu">
                          <div className="row row_border">
                            <div className="col-lg-3 col-6 over_flow">
                              <div className="col-megamenu menu_animate_box animi_bx1 park_menu_col1">
                                <Link to="/industrial-and-logistics-parks-in-india">
                                  <h5>Park Overview</h5>
                                </Link>
                                <img
                                  src={require("../../assets/img/park_2.jpg")}></img>
                                <Link className="book_visit_btn bk_vst_btn">
                                  Book a site visit
                                </Link>
                              </div>
                            </div>
                            <div className="col-lg-2 col-6 over_flow">
                              <div className="col-megamenu menu_animate_box animi_bx2">
                                <h5>Delhi NCR</h5>
                                <ul className="list-unstyled">
                                  <li>
                                    <Link to="/warehousing-park-farukhnagar-i">
                                      Farukhnagar I
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="/warehousing-park-farukhnagar-ii">
                                      Farukhnagar II
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="/warehousing-park-delhi-i">
                                      Delhi I
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="/warehousing-park-delhi-ii">
                                      Delhi II
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="/industrial-and-warehousing-park-bilaspur">
                                      Bilaspur
                                    </Link>
                                  </li>
                                  {/* <li>
                                    <Link to="/warehousing-park-bilaspur-i">
                                      Bilaspur I
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="/warehousing-park-bilaspur-ii">
                                      Bilaspur II
                                    </Link>
                                  </li> */}
                                  <li>
                                    <Link to="/warehousing-park-koka">
                                      Koka
                                    </Link>
                                  </li>
                                </ul>
                                <h5 className="top_spc">Ahmedabad</h5>
                                <ul className="list-unstyled">
                                  <li>
                                    <Link to="/industrial-and-warehousing-park-bhayala">
                                      Bhayala
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="col-lg-2 col-6 over_flow">
                              <div className="col-megamenu menu_animate_box animi_bx3">
                                <h5>Pune</h5>
                                <ul className="list-unstyled">
                                  <li>
                                    <Link to="/industrial-and-warehousing-park-chakan-ii">
                                      Chakan II
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="/industrial-and-warehousing-park-chakan-v">
                                      Chakan V
                                    </Link>
                                  </li>
                                </ul>

                                {/* <h5 className='top_spc'>Nagpur</h5>
                                                                <ul className="list-unstyled">
                                                                    <li><Link to="#">Nagpur</Link></li>
                                                                </ul> */}

                                <h5 className="top_spc">Goa</h5>
                                <ul className="list-unstyled">
                                  <li>
                                    <Link to="/industrial-and-warehousing-park-verna">
                                      Verna
                                    </Link>
                                  </li>
                                </ul>

                                <h5 className="top_spc">Hyderabad</h5>
                                <ul className="list-unstyled">
                                  <li>
                                    <Link to="/industrial-and-warehousing-park-kothur">
                                      Kothur
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="/industrial-and-warehousing-park-patancheru">
                                      Patancheru
                                    </Link>
                                  </li>
                                </ul>


                              </div>
                            </div>
                            <div className="col-lg-2 col-6 over_flow prk_col3">
                              <div className="col-megamenu menu_animate_box animi_bx4 ">
                               

                                <h5 className="">Bengaluru</h5>
                                <ul className="list-unstyled">
                                  <li>
                                    <Link to="/industrial-and-warehousing-park-dobbaspet-i">
                                      Dobbaspet I
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="/industrial-and-warehousing-park-dobbaspet-ii">
                                      Dobbaspet II
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="/industrial-and-warehousing-park-hosur-i">
                                      Hosur I
                                    </Link>
                                  </li>
                                  {/* <li><Link to="/hosur-ii">Hosur II</Link></li>   */}
                                  <li>
                                    <Link to="/warehousing-park-malur">
                                      Malur
                                    </Link>
                                  </li>
                                </ul>

                                <h5 className="top_spc">Chennai</h5>
                                <ul className="list-unstyled">
                                  <li>
                                    <Link to="/industrial-and-warehousing-park-redhills-i">
                                      Redhills-I
                                    </Link>
                                  </li>
                                </ul>


                              </div>
                            </div>
                            <div className="col-lg-3 col-6 over_flow">
                              <div className="col-megamenu menu_animate_box animi_bx4 state_col">
                                <h5>View by States</h5>
                                <ul className="list-unstyled">
                                  <li>
                                    <Link to="/delhi">Delhi</Link>
                                  </li>
                                  <li>
                                    <Link to="/haryana">Haryana</Link>
                                  </li>
                                  <li>
                                    <Link to="/goa">Goa</Link>
                                  </li>
                                  <li>
                                    <Link to="/maharashtra">Maharashtra</Link>
                                  </li>
                                  <li>
                                    <Link to="/gujarat">Gujarat</Link>
                                  </li>
                                  <li>
                                    <Link to="/tamil-nadu">Tamil Nadu</Link>
                                  </li>
                                  <li>
                                    <Link to="/telangana">Telangana</Link>
                                  </li>
                                  <li>
                                    <Link to="/karnataka">Karnataka</Link>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>

                      <li className="nav-item dropdown has-megamenu menu_link solution_drp solu_menu2">
                        <Link
                          className="nav-link dropdown-toggle "
                          to="#"
                          data-bs-toggle="dropdown"
                          data-bs-hover="dropdown">
                          {" "}
                          Solutions
                        </Link>
                        <div
                          className="dropdown-menu megamenu"
                          role="menu">
                          <div className="row row_border">
                            <div className="col-lg-4 col-6 over_flow">
                              <div className="col-megamenu menu_animate_box animi_bx1 park_menu_col1">
                                <Link to="/solutions">
                                  <h5>Solutions Overview</h5>
                                </Link>
                                <img
                                  src={require("../../assets/img/solution_menu.png")}></img>
                              </div>
                            </div>
                            <div className="col-lg-4 col-6 over_flow">
                              <div className="col-megamenu menu_animate_box animi_bx2">
                                <h5>Integrated Solutions</h5>
                                <ul className="list-unstyled">
                                  <li>
                                    <Link to="/solutions/strategic-land-acquisition">
                                      Strategic Land Acquisition
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="/solutions/park-compliances-and-approvals">
                                      Park compliances and approvals
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="/solutions/park-construction-and-development">
                                      Park construction and development
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="/solutions/property-management">
                                      Property management
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="col-lg-4 col-6 over_flow">
                              <div className="col-megamenu menu_animate_box animi_bx3">
                                <h5>Customer Chronicles</h5>
                                <ul className="list-unstyled">
                                  <li>
                                    <Link to="/case-studies">Case Studies</Link>
                                  </li>
                                  <li>
                                    <Link to="/case-studies#testimonial">
                                      Testimonials
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="/case-studies#brand_we_serve">
                                      Brand We Serve
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>

                      {/* <li className="nav-item menu_link contact_link"><Link className="nav-link" to="/solutions"> Solutions </Link></li> */}

                      <li className="nav-item dropdown has-megamenu menu_link explore_drp explo_menu2">
                        <Link
                          className="nav-link dropdown-toggle "
                          to="#"
                          data-bs-toggle="dropdown"
                          data-bs-hover="dropdown">
                          {" "}
                          Explore Horizon
                        </Link>
                        <div
                          className="dropdown-menu megamenu"
                          role="menu">
                          <div className="row row_border">
                            <div className="col-lg-4 col-6 over_flow">
                              <div className="col-megamenu menu_animate_box animi_bx1 park_menu_col1">
                                <img
                                  src={require("../../assets/img/explore_menu.png")}></img>
                              </div>
                            </div>
                            <div className="col-lg-4 col-6 over_flow">
                              <div className="col-megamenu menu_animate_box animi_bx2">
                                <h5>About Us</h5>
                                <ul className="list-unstyled">
                                  <li>
                                    <Link to="/explore">About Horizon</Link>
                                  </li>
                                  <li>
                                    <Link to="/explore#leadership">
                                      Leadership
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="/explore#purpose_mission_vision">
                                      Purpose
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="/explore#careers">Careers</Link>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="col-lg-4 col-6 over_flow">
                              <div className="col-megamenu menu_animate_box animi_bx3">
                                <h5>Media</h5>
                                <ul className="list-unstyled">
                                  <li>
                                    <Link to="/events">Events</Link>
                                  </li>
                                  <li>
                                    <Link to="/blog">Blog</Link>
                                  </li>
                                  <li>
                                    <Link to="/media">News</Link>
                                  </li>
                                  <li>
                                    <Link to="/media/press_releases">
                                      Press Releases
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="nav-item dropdown has-megamenu menu_link esg_drp">
                        <Link
                          className="nav-link dropdown-toggle "
                          to="#"
                          data-bs-toggle="dropdown"
                          data-bs-hover="dropdown">
                          {" "}
                          Sustainability{" "}
                        </Link>
                        <div
                          className="dropdown-menu megamenu"
                          role="menu">
                          <div className="row row_border esg_menus">
                            <div className="col-lg-4 col-6 over_flow">
                              <div className="col-megamenu menu_animate_box animi_bx1">
                                <ul className="list-unstyled">
                                  <li>
                                    <Link to="/sustainability#environment">
                                      Environment
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="col-lg-4 col-6 over_flow">
                              <div className="col-megamenu menu_animate_box animi_bx2">
                                <ul className="list-unstyled">
                                  <li>
                                    <Link to="/sustainability#social">
                                      Social
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="col-lg-4 col-6 over_flow">
                              <div className="col-megamenu menu_animate_box animi_bx3">
                                <ul className="list-unstyled">
                                  <li>
                                    <Link to="/sustainability#governance">
                                      Governance
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="nav-item menu_link  contact_link">
                        <Link
                          className="nav-link"
                          to="/contact">
                          {" "}
                          Contact Us{" "}
                        </Link>
                      </li>

                      {/* <li className="nav-item menu_link no_LR_margin contact_link enq_txt_btn enq_bnt"><Link className="nav-link" > Enquire Now</Link></li> */}
                    </ul>
                  </div>
                </div>
              </nav>
            </div>

            {/* <div className='col-lg-2 col-md-2 col-2 no_padding '>
                        <div className='hdr_cntact_dv'>
                            ============ mobile menu button =========
                             <div id="mobile_menu">
                                <img className='mob_menu_btn' src={require('../../assets/img/svg/mob_menu.svg')}></img> 
                            </div>
                        </div>
                    </div> */}
          </div>
        </div>
      </div>

      {/* ============================================================================ mobile Navbar*/}
      <div className="mobile_nav">
        <img
          className="close_mob_nav"
          src={require("../../assets/img/svg/close_icon.svg")}></img>

        <div id="mob_accordian">
          <ul>
            <li className="active">
              <ul>
                <li className="">
                  <Link
                    className="lv_1"
                    to="#">
                    Parks
                  </Link>
                  <ul>
                    <li>
                      <Link
                        className="lv_2"
                        to="/industrial-and-logistics-parks-in-india">
                        Park Overview
                      </Link>
                    </li>
                    {/*---- Delhi NCR */}
                    <li>
                      <Link
                        className="lv_2"
                        to="#">
                        Delhi NCR
                      </Link>
                      <ul className="lv_3ul">
                        <li>
                          <Link
                            className="lv_3"
                            to="/warehousing-park-farukhnagar-i">
                            Farukhnagar I
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="lv_3"
                            to="/warehousing-park-farukhnagar-ii">
                            Farukhnagar II
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="lv_3"
                            to="/warehousing-park-delhi-i">
                            Delhi I
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="lv_3"
                            to="/warehousing-park-delhi-ii">
                            Delhi II
                          </Link>
                        </li>
             
                        <li>
                          <Link
                            className="lv_3"
                            to="/industrial-and-warehousing-park-bilaspur">
                            Bilaspur
                          </Link>
                        </li>
                        {/* <li>
                          <Link
                            className="lv_3"
                            to="/warehousing-park-bilaspur-i">
                            Bilaspur I
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="lv_3"
                            to="/warehousing-park-bilaspur-ii">
                            Bilaspur II
                          </Link>
                        </li> */}
                        <li>
                          <Link
                            className="lv_3"
                            to="/warehousing-park-koka">
                            Koka
                          </Link>
                        </li>
                      </ul>
                    </li>

                    {/*---- AHMEDABAD */}
                    <li>
                      <Link
                        className="lv_2"
                        to="#">
                        Ahmedabad
                      </Link>
                      <ul className="lv_3ul">
                        <li>
                          <Link
                            className="lv_3"
                            to="/industrial-and-warehousing-park-bhayala">
                            Bhayala
                          </Link>
                        </li>
                      </ul>
                    </li>

                    {/*---- Pune */}
                    <li>
                      <Link
                        className="lv_2"
                        to="#">
                        Pune
                      </Link>
                      <ul className="lv_3ul">
                        <li>
                          <Link
                            className="lv_3"
                            to="/industrial-and-warehousing-park-chakan-ii">
                            Chakan II
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="lv_3"
                            to="/industrial-and-warehousing-park-chakan-v">
                            Chakan V
                          </Link>
                        </li>
                      </ul>
                    </li>

                    {/*---- Nagpur */}
                    {/* <li>
                                        <Link className='lv_2' to="#">Nagpur</Link>
                                        <ul className='lv_3ul'>
                                            <li><Link className='lv_3' to="#">Nagpur</Link></li>
                                        </ul>
                                    </li> */}

                    {/*---- Goa */}
                    <li>
                      <Link
                        className="lv_2"
                        to="#">
                        Goa
                      </Link>
                      <ul className="lv_3ul">
                        <li>
                          <Link
                            className="lv_3"
                            to="/industrial-and-warehousing-park-verna">
                            Verna
                          </Link>
                        </li>
                      </ul>
                    </li>

                    {/*---- HYDERABAD */}
                    <li>
                      <Link
                        className="lv_2"
                        to="#">
                        Hyderabad
                      </Link>
                      <ul className="lv_3ul">
                        <li>
                          <Link
                            className="lv_3"
                            to="/industrial-and-warehousing-park-kothur">
                            Kothur
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="lv_3"
                            to="/industrial-and-warehousing-park-patancheru">
                            Patancheru
                          </Link>
                        </li>
                      </ul>
                    </li>

                    {/*---- BENGALURU */}
                    <li>
                      <Link
                        className="lv_2"
                        to="#">
                        Bengaluru
                      </Link>
                      <ul className="lv_3ul">
                        <li>
                          <Link
                            className="lv_3"
                            to="/warehousing-park-malur">
                            Malur
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="lv_3"
                            to="/industrial-and-warehousing-park-hosur-i">
                            Hosur I
                          </Link>
                        </li>
                        {/* <li><Link className='lv_3' to="/hosur-ii">Hosur II</Link></li>     */}
                        <li>
                          <Link
                            className="lv_3"
                            to="/industrial-and-warehousing-park-dobbaspet-i">
                            Dobbaspet I
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="lv_3"
                            to="/industrial-and-warehousing-park-dobbaspet-ii">
                            Dobbaspet II
                          </Link>
                        </li>
                      </ul>
                    </li>

                    {/*---- Chennai */}
                    <li>
                      <Link
                        className="lv_2"
                        to="#">
                        Chennai
                      </Link>
                      <ul className="lv_3ul">
                        <li>
                          <Link
                            className="lv_3"
                            to="/industrial-and-warehousing-park-redhills-i">
                            Redhills-I
                          </Link>
                        </li>
                      </ul>
                    </li>

                    {/*---- State */}
                    <li>
                      <Link
                        className="lv_2"
                        to="#">
                        View by State
                      </Link>
                      <ul className="lv_3ul">
                        <li>
                          <Link
                            className="lv_3"
                            to="/delhi">
                            Delhi
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="lv_3"
                            to="/haryana">
                            Haryana
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="lv_3"
                            to="/goa">
                            Goa
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="lv_3"
                            to="/maharashtra">
                            Maharashtra
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="lv_3"
                            to="/gujarat">
                            Gujarat
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="lv_3"
                            to="/tamil-nadu">
                            Tamil Nadu
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="lv_3"
                            to="/telangana">
                            Telangana
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="lv_3"
                            to="/karnataka">
                            Karnataka
                          </Link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                {/* <li>
                                <Link className='lv_1' to="/solutions">Solutions</Link>
                            </li> */}
                <li>
                  <Link
                    className="lv_1"
                    to="#">
                    Solutions
                  </Link>
                  <ul>
                    <li>
                      <Link
                        className="lv_2"
                        to="/solutions">
                        Solutions Overview
                      </Link>
                    </li>

                    <li>
                      <Link
                        className="lv_2"
                        to="#">
                        Integrated Solutions
                      </Link>
                      <ul className="lv_3ul">
                        <li>
                          <Link
                            className="lv_3"
                            to="/solutions/strategic-land-acquisition">
                            Strategic Land acquisition
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="lv_3"
                            to="/solutions/park-compliances-and-approvals">
                            Park compliances and approvals
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="lv_3"
                            to="/solutions/park-construction-and-development">
                            Park construction and development
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="lv_3"
                            to="/solutions/property-management">
                            Property management
                          </Link>
                        </li>
                      </ul>
                    </li>

                    <li>
                      <Link
                        className="lv_2"
                        to="#">
                        Customer Chronicles
                      </Link>
                      <ul className="lv_3ul">
                        <li>
                          <Link
                            className="lv_3"
                            to="/case-studies">
                            Case Studies
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="lv_3 anchr_btn"
                            to="/case-studies#testimonial">
                            Testimonials
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="lv_3 anchr_btn"
                            to="/case-studies#brand_we_serve">
                            Brand We Serve
                          </Link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>

                <li>
                  <Link
                    className="lv_1"
                    to="#">
                    Explore Horizon
                  </Link>
                  <ul>
                    <li>
                      <Link
                        className="lv_2"
                        to="#">
                        About Us
                      </Link>
                      <ul className="lv_3ul">
                        <li>
                          <Link
                            className="lv_3"
                            to="/explore">
                            About Horizon
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="lv_3"
                            to="/explore#leadership">
                            Leadership
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="lv_3 anchr_btn"
                            to="/explore#purpose_mission_vision">
                            Purpose
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="lv_3 anchr_btn"
                            to="/explore#careers">
                            Careers
                          </Link>
                        </li>
                      </ul>
                    </li>

                    <li>
                      <Link
                        className="lv_2"
                        to="#">
                        Media
                      </Link>
                      <ul className="lv_3ul">
                        <li>
                          <Link
                            className="lv_3"
                            to="/events">
                            Events
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="lv_3"
                            to="/blog">
                            Blog
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="lv_3"
                            to="/media">
                            News
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="lv_3"
                            to="/media/press_releases">
                            Press Releases
                          </Link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>

                <li>
                  <Link
                    className="lv_1"
                    to="#">
                    Sustainability
                  </Link>
                  <ul>
                    <li>
                      <Link
                        className="lv_2 anchr_btn"
                        to="/sustainability#environment">
                        Environment
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="lv_2 anchr_btn"
                        to="/sustainability#social">
                        Social
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="lv_2 anchr_btn"
                        to="/sustainability#governance">
                        Governance
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link
                    className="lv_1"
                    to="/contact">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link className="lv_1 bk_vst_btn book_visit_btn">
                    Book a site visit
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>

        <div className="mob_search_dv">
          <form onSubmit={sendResult}>
            <input
              className="srch-input"
              type="text"
              placeholder="Search here..."
              ref={resultinput}
            />
            <button
              type="submit"
              className="srch-btn">
              <img
                src={
                  require("../../assets/img/svg/search_icon.svg")
                }></img>
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
