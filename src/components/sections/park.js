import React from "react";
import Delhi_slider from "./park_slider/delhi_slider";
import Ahmedabad_slider from "./park_slider/ahmedabad_slider";
import Mumbai_slider from "./park_slider/mumbai_slider";
import Pune_slider from "./park_slider/pune_slider";
import Goa_slider from "./park_slider/goa_slider";
import Bengaluru_slider from "./park_slider/bengaluru_slider";
import Hyderabad_slider from "./park_slider/hyderabad_slider";
import Nagpur_slider from "./park_slider/nagpur_slider";
import Kolkata_slider from "./park_slider/kolkata_slider";
import $ from "jquery";
import { useEffect, useRef } from "react";
import { gsap } from "../../helper/common";
import "../../assets/css/park.css";
import Chennai_slider from "./park_slider/chennai_slider";

export default function Park() {
  // Heading text animation variable
  const txt_animate_3 = useRef(null);

  // border animation variable
  const parkBorder_aniamtion = useRef(null);

  const pin_animate_1 = useRef(null);
  const pin_animate_2 = useRef(null);
  const pin_animate_3 = useRef(null);
  const pin_animate_4 = useRef(null);
  const pin_animate_5 = useRef(null);
  const pin_animate_6 = useRef(null);
  const pin_animate_7 = useRef(null);
  const pin_animate_8 = useRef(null);
  const pin_animate_9 = useRef(null);
  const pin_animate_10 = useRef(null);

  const fade_para = useRef(null);

  useEffect(() => {
    // border animation code
    gsap.to("#parkBorder_aniamtion", {
      opacity: 1,
      duration: 0.5,
      ease: "linear",
      delay: 0.5,
      width: "60%",
      scrollTrigger: {
        trigger: "#parkBorder_aniamtion",
        markers: false,
      },
    });

    // Para animation code
    gsap.to("#fade_para", {
      opacity: 1,
      duration: 1.5,
      ease: "linear",
      delay: 0.9,
      scrollTrigger: {
        trigger: "#fade_para",
        markers: false,
      },
    });

    // Heading text animation code
    gsap.to("#txt_animate_3", {
      y: 0,
      duration: 1.3,
      ease: "power4.out",
      delay: 0.3,
      scrollTrigger: {
        trigger: "#txt_animate_3",
        markers: false,
      },
    });

    gsap.to("#pin_animate_1", {
      opacity: 1,
      scale: 1,
      duration: 0.5,
      ease: "linear",
      delay: 0.3,
      scrollTrigger: {
        trigger: "#pin_animate_1",
        markers: false,
      },
    });

    gsap.to("#pin_animate_2", {
      opacity: 1,
      scale: 1,
      duration: 0.5,
      ease: "linear",
      delay: 0.6,
      scrollTrigger: {
        trigger: "#pin_animate_2",
        markers: false,
      },
    });

    gsap.to("#pin_animate_3", {
      opacity: 1,
      scale: 1,
      duration: 0.5,
      ease: "linear",
      delay: 1.2,
      scrollTrigger: {
        trigger: "#pin_animate_3",
        markers: false,
      },
    });

    gsap.to("#pin_animate_4", {
      opacity: 1,
      scale: 1,
      duration: 0.5,
      ease: "linear",
      delay: 0.3,
      scrollTrigger: {
        trigger: "#pin_animate_4",
        markers: false,
      },
    });

    gsap.to("#pin_animate_5", {
      opacity: 1,
      scale: 1,
      duration: 0.5,
      ease: "linear",
      delay: 0.6,
      scrollTrigger: {
        trigger: "#pin_animate_5",
        markers: false,
      },
    });

    gsap.to("#pin_animate_6", {
      opacity: 1,
      scale: 1,
      duration: 0.5,
      ease: "linear",
      delay: 1.2,
      scrollTrigger: {
        trigger: "#pin_animate_6",
        markers: false,
      },
    });

    gsap.to("#pin_animate_7", {
      opacity: 1,
      scale: 1,
      duration: 0.5,
      ease: "linear",
      delay: 0.3,
      scrollTrigger: {
        trigger: "#pin_animate_7",
        markers: false,
      },
    });

    gsap.to("#pin_animate_8", {
      opacity: 1,
      scale: 1,
      duration: 0.5,
      ease: "linear",
      delay: 0.6,
      scrollTrigger: {
        trigger: "#pin_animate_8",
        markers: false,
      },
    });

    gsap.to("#pin_animate_9", {
      opacity: 1,
      scale: 1,
      duration: 0.5,
      ease: "linear",
      delay: 1.2,
      scrollTrigger: {
        trigger: "#pin_animate_9",
        markers: false,
      },
    });

    gsap.to("#pin_animate_10", {
      opacity: 1,
      scale: 1,
      duration: 0.5,
      ease: "linear",
      delay: 1.2,
      scrollTrigger: {
        trigger: "#pin_animate_10",
        markers: false,
      },
    });

    $(".park_state").on("click", function () {
      $(".park_info_dv").fadeOut();
      $("#div" + $(this).attr("target")).fadeIn();
    });

    $(".ncr_dv").find(".sd_pin_box").addClass("state_active");
    $(".ncr_dv").find(".park_no_dv").addClass("state_active1");
    $(".ncr_dv").find(".sd_name_box").addClass("state_active1");

    $(".ncr_dv").on("click", function () {
      $(this).find(".sd_pin_box").addClass("state_active");
      $(this).find(".park_no_dv").addClass("state_active1");
      $(this).find(".sd_name_box").addClass("state_active1");

      $(".ahmedabad_dv").find(".sd_pin_box").removeClass("state_active");
      $(".ahmedabad_dv").find(".park_no_dv").removeClass("state_active1");
      $(".ahmedabad_dv").find(".sd_name_box").removeClass("state_active1");
      $(".ahmedabad_dv").find(".sd_pin_box").css("margin-right", "7px");

      $(".mumbai_dv").find(".sd_pin_box").removeClass("state_active");
      $(".mumbai_dv").find(".park_no_dv").removeClass("state_active1");
      $(".mumbai_dv").find(".sd_name_box").removeClass("state_active1");

      $(".pune_dv").find(".sd_pin_box").removeClass("state_active");
      $(".pune_dv").find(".park_no_dv").removeClass("state_active1");
      $(".pune_dv").find(".sd_name_box").removeClass("state_active1");
      $(".pune_dv").find(".sd_name_box").css("margin-top", "4px");

      $(".goa_dv").find(".sd_pin_box").removeClass("state_active");
      $(".goa_dv").find(".park_no_dv").removeClass("state_active1");
      $(".goa_dv").find(".sd_name_box").removeClass("state_active1");
      $(".goa_dv").find(".sd_name_box").css("margin-top", "7px");

      $(".bengaluru_dv").find(".sd_pin_box").removeClass("state_active");
      $(".bengaluru_dv").find(".park_no_dv").removeClass("state_active1");
      $(".bengaluru_dv").find(".sd_name_box").removeClass("state_active1");
      $(".bengaluru_dv").find(".sd_pin_box").css("margin-right", "6px");

      $(".hyderabad_dv").find(".sd_pin_box").removeClass("state_active");
      $(".hyderabad_dv").find(".park_no_dv").removeClass("state_active1");
      $(".hyderabad_dv").find(".sd_name_box").removeClass("state_active1");
      $(".hyderabad_dv").find(".sd_pin_box").css("margin-right", "6px");

      $(".nagpur_dv").find(".sd_pin_box").removeClass("state_active");
      $(".nagpur_dv").find(".park_no_dv").removeClass("state_active1");
      $(".nagpur_dv").find(".sd_name_box").removeClass("state_active1");
      $(".nagpur_dv").find(".sd_pin_box").css("margin-right", "6px");

      $(".chennai_dv").find(".sd_pin_box").removeClass("state_active");
      $(".chennai_dv").find(".park_no_dv").removeClass("state_active1");
      $(".chennai_dv").find(".sd_name_box").removeClass("state_active1");

      $(".kolkata_dv").find(".sd_pin_box").removeClass("state_active");
      $(".kolkata_dv").find(".park_no_dv").removeClass("state_active1");
      $(".kolkata_dv").find(".sd_name_box").removeClass("state_active1");

      $(".bhiwandi_dv").find(".sd_pin_box").removeClass("state_active");
      $(".bhiwandi_dv").find(".park_no_dv").removeClass("state_active1");
      $(".bhiwandi_dv").find(".sd_name_box").removeClass("state_active1");

      $(".nashik_dv").find(".sd_pin_box").removeClass("state_active");
      $(".nashik_dv").find(".park_no_dv").removeClass("state_active1");
      $(".nashik_dv").find(".sd_name_box").removeClass("state_active1");

      $(".indore_dv").find(".sd_pin_box").removeClass("state_active");
      $(".indore_dv").find(".park_no_dv").removeClass("state_active1");
      $(".indore_dv").find(".sd_name_box").removeClass("state_active1");
    });

    $(".ahmedabad_dv").on("click", function () {
      $(this).find(".sd_pin_box").addClass("state_active");
      $(this).find(".park_no_dv").addClass("state_active1");
      $(this).find(".sd_name_box").addClass("state_active1");

      $(".ncr_dv").find(".sd_pin_box").removeClass("state_active");
      $(".ncr_dv").find(".park_no_dv").removeClass("state_active1");
      $(".ncr_dv").find(".sd_name_box").removeClass("state_active1");

      $(".mumbai_dv").find(".sd_pin_box").removeClass("state_active");
      $(".mumbai_dv").find(".park_no_dv").removeClass("state_active1");
      $(".mumbai_dv").find(".sd_name_box").removeClass("state_active1");

      $(".pune_dv").find(".sd_pin_box").removeClass("state_active");
      $(".pune_dv").find(".park_no_dv").removeClass("state_active1");
      $(".pune_dv").find(".sd_name_box").removeClass("state_active1");

      $(".goa_dv").find(".sd_pin_box").removeClass("state_active");
      $(".goa_dv").find(".park_no_dv").removeClass("state_active1");
      $(".goa_dv").find(".sd_name_box").removeClass("state_active1");

      $(".bengaluru_dv").find(".sd_pin_box").removeClass("state_active");
      $(".bengaluru_dv").find(".park_no_dv").removeClass("state_active1");
      $(".bengaluru_dv").find(".sd_name_box").removeClass("state_active1");

      $(".hyderabad_dv").find(".sd_pin_box").removeClass("state_active");
      $(".hyderabad_dv").find(".park_no_dv").removeClass("state_active1");
      $(".hyderabad_dv").find(".sd_name_box").removeClass("state_active1");

      $(".nagpur_dv").find(".sd_pin_box").removeClass("state_active");
      $(".nagpur_dv").find(".park_no_dv").removeClass("state_active1");
      $(".nagpur_dv").find(".sd_name_box").removeClass("state_active1");

      $(".chennai_dv").find(".sd_pin_box").removeClass("state_active");
      $(".chennai_dv").find(".park_no_dv").removeClass("state_active1");
      $(".chennai_dv").find(".sd_name_box").removeClass("state_active1");

      $(".kolkata_dv").find(".sd_pin_box").removeClass("state_active");
      $(".kolkata_dv").find(".park_no_dv").removeClass("state_active1");
      $(".kolkata_dv").find(".sd_name_box").removeClass("state_active1");

      $(".bhiwandi_dv").find(".sd_pin_box").removeClass("state_active");
      $(".bhiwandi_dv").find(".park_no_dv").removeClass("state_active1");
      $(".bhiwandi_dv").find(".sd_name_box").removeClass("state_active1");

      $(".nashik_dv").find(".sd_pin_box").removeClass("state_active");
      $(".nashik_dv").find(".park_no_dv").removeClass("state_active1");
      $(".nashik_dv").find(".sd_name_box").removeClass("state_active1");

      $(".indore_dv").find(".sd_pin_box").removeClass("state_active");
      $(".indore_dv").find(".park_no_dv").removeClass("state_active1");
      $(".indore_dv").find(".sd_name_box").removeClass("state_active1");
    });

    // $('.mumbai_dv').on("click", function() {

    //     $(this).find(".sd_pin_box").addClass('state_active');
    //     $(this).find(".park_no_dv").addClass('state_active1');
    //     $(this).find(".sd_name_box").addClass('state_active1');

    //     $('.ncr_dv').find(".sd_pin_box").removeClass('state_active');
    //     $('.ncr_dv').find(".park_no_dv").removeClass('state_active1');
    //     $('.ncr_dv').find(".sd_name_box").removeClass('state_active1');

    //     $('.ahmedabad_dv').find(".sd_pin_box").removeClass('state_active');
    //     $('.ahmedabad_dv').find(".park_no_dv").removeClass('state_active1');
    //     $('.ahmedabad_dv').find(".sd_name_box").removeClass('state_active1');

    //     $('.pune_dv').find(".sd_pin_box").removeClass('state_active');
    //     $('.pune_dv').find(".park_no_dv").removeClass('state_active1');
    //     $('.pune_dv').find(".sd_name_box").removeClass('state_active1');

    //     $('.goa_dv').find(".sd_pin_box").removeClass('state_active');
    //     $('.goa_dv').find(".park_no_dv").removeClass('state_active1');
    //     $('.goa_dv').find(".sd_name_box").removeClass('state_active1');

    //     $('.bengaluru_dv').find(".sd_pin_box").removeClass('state_active');
    //     $('.bengaluru_dv').find(".park_no_dv").removeClass('state_active1');
    //     $('.bengaluru_dv').find(".sd_name_box").removeClass('state_active1');

    //     $('.hyderabad_dv').find(".sd_pin_box").removeClass('state_active');
    //     $('.hyderabad_dv').find(".park_no_dv").removeClass('state_active1');
    //     $('.hyderabad_dv').find(".sd_name_box").removeClass('state_active1');

    //     $('.nagpur_dv').find(".sd_pin_box").removeClass('state_active');
    //     $('.nagpur_dv').find(".park_no_dv").removeClass('state_active1');
    //     $('.nagpur_dv').find(".sd_name_box").removeClass('state_active1');

    //     $('.kolkata_dv').find(".sd_pin_box").removeClass('state_active');
    //     $('.kolkata_dv').find(".park_no_dv").removeClass('state_active1');
    //     $('.kolkata_dv').find(".sd_name_box").removeClass('state_active1');

    // });

    $(".pune_dv").on("click", function () {
      $(this).find(".sd_pin_box").addClass("state_active");
      $(this).find(".park_no_dv").addClass("state_active1");
      $(this).find(".sd_name_box").addClass("state_active1");

      $(".ncr_dv").find(".sd_pin_box").removeClass("state_active");
      $(".ncr_dv").find(".park_no_dv").removeClass("state_active1");
      $(".ncr_dv").find(".sd_name_box").removeClass("state_active1");

      $(".ahmedabad_dv").find(".sd_pin_box").removeClass("state_active");
      $(".ahmedabad_dv").find(".park_no_dv").removeClass("state_active1");
      $(".ahmedabad_dv").find(".sd_name_box").removeClass("state_active1");

      $(".mumbai_dv").find(".sd_pin_box").removeClass("state_active");
      $(".mumbai_dv").find(".park_no_dv").removeClass("state_active1");
      $(".mumbai_dv").find(".sd_name_box").removeClass("state_active1");

      $(".goa_dv").find(".sd_pin_box").removeClass("state_active");
      $(".goa_dv").find(".park_no_dv").removeClass("state_active1");
      $(".goa_dv").find(".sd_name_box").removeClass("state_active1");

      $(".bengaluru_dv").find(".sd_pin_box").removeClass("state_active");
      $(".bengaluru_dv").find(".park_no_dv").removeClass("state_active1");
      $(".bengaluru_dv").find(".sd_name_box").removeClass("state_active1");

      $(".hyderabad_dv").find(".sd_pin_box").removeClass("state_active");
      $(".hyderabad_dv").find(".park_no_dv").removeClass("state_active1");
      $(".hyderabad_dv").find(".sd_name_box").removeClass("state_active1");

      $(".nagpur_dv").find(".sd_pin_box").removeClass("state_active");
      $(".nagpur_dv").find(".park_no_dv").removeClass("state_active1");
      $(".nagpur_dv").find(".sd_name_box").removeClass("state_active1");

      $(".chennai_dv").find(".sd_pin_box").removeClass("state_active");
      $(".chennai_dv").find(".park_no_dv").removeClass("state_active1");
      $(".chennai_dv").find(".sd_name_box").removeClass("state_active1");

      $(".kolkata_dv").find(".sd_pin_box").removeClass("state_active");
      $(".kolkata_dv").find(".park_no_dv").removeClass("state_active1");
      $(".kolkata_dv").find(".sd_name_box").removeClass("state_active1");

      $(".bhiwandi_dv").find(".sd_pin_box").removeClass("state_active");
      $(".bhiwandi_dv").find(".park_no_dv").removeClass("state_active1");
      $(".bhiwandi_dv").find(".sd_name_box").removeClass("state_active1");

      $(".nashik_dv").find(".sd_pin_box").removeClass("state_active");
      $(".nashik_dv").find(".park_no_dv").removeClass("state_active1");
      $(".nashik_dv").find(".sd_name_box").removeClass("state_active1");

      $(".indore_dv").find(".sd_pin_box").removeClass("state_active");
      $(".indore_dv").find(".park_no_dv").removeClass("state_active1");
      $(".indore_dv").find(".sd_name_box").removeClass("state_active1");
    });
    $(".goa_dv").on("click", function () {
      $(this).find(".sd_pin_box").addClass("state_active");
      $(this).find(".park_no_dv").addClass("state_active1");
      $(this).find(".sd_name_box").addClass("state_active1");

      $(".ncr_dv").find(".sd_pin_box").removeClass("state_active");
      $(".ncr_dv").find(".park_no_dv").removeClass("state_active1");
      $(".ncr_dv").find(".sd_name_box").removeClass("state_active1");

      $(".ahmedabad_dv").find(".sd_pin_box").removeClass("state_active");
      $(".ahmedabad_dv").find(".park_no_dv").removeClass("state_active1");
      $(".ahmedabad_dv").find(".sd_name_box").removeClass("state_active1");

      $(".mumbai_dv").find(".sd_pin_box").removeClass("state_active");
      $(".mumbai_dv").find(".park_no_dv").removeClass("state_active1");
      $(".mumbai_dv").find(".sd_name_box").removeClass("state_active1");

      $(".pune_dv").find(".sd_pin_box").removeClass("state_active");
      $(".pune_dv").find(".park_no_dv").removeClass("state_active1");
      $(".pune_dv").find(".sd_name_box").removeClass("state_active1");

      $(".bengaluru_dv").find(".sd_pin_box").removeClass("state_active");
      $(".bengaluru_dv").find(".park_no_dv").removeClass("state_active1");
      $(".bengaluru_dv").find(".sd_name_box").removeClass("state_active1");

      $(".hyderabad_dv").find(".sd_pin_box").removeClass("state_active");
      $(".hyderabad_dv").find(".park_no_dv").removeClass("state_active1");
      $(".hyderabad_dv").find(".sd_name_box").removeClass("state_active1");

      $(".nagpur_dv").find(".sd_pin_box").removeClass("state_active");
      $(".nagpur_dv").find(".park_no_dv").removeClass("state_active1");
      $(".nagpur_dv").find(".sd_name_box").removeClass("state_active1");

      $(".chennai_dv").find(".sd_pin_box").removeClass("state_active");
      $(".chennai_dv").find(".park_no_dv").removeClass("state_active1");
      $(".chennai_dv").find(".sd_name_box").removeClass("state_active1");

      $(".kolkata_dv").find(".sd_pin_box").removeClass("state_active");
      $(".kolkata_dv").find(".park_no_dv").removeClass("state_active1");
      $(".kolkata_dv").find(".sd_name_box").removeClass("state_active1");

      $(".bhiwandi_dv").find(".sd_pin_box").removeClass("state_active");
      $(".bhiwandi_dv").find(".park_no_dv").removeClass("state_active1");
      $(".bhiwandi_dv").find(".sd_name_box").removeClass("state_active1");

      $(".nashik_dv").find(".sd_pin_box").removeClass("state_active");
      $(".nashik_dv").find(".park_no_dv").removeClass("state_active1");
      $(".nashik_dv").find(".sd_name_box").removeClass("state_active1");

      $(".indore_dv").find(".sd_pin_box").removeClass("state_active");
      $(".indore_dv").find(".park_no_dv").removeClass("state_active1");
      $(".indore_dv").find(".sd_name_box").removeClass("state_active1");
    });
    $(".bengaluru_dv").on("click", function () {
      $(this).find(".sd_pin_box").addClass("state_active");
      $(this).find(".park_no_dv").addClass("state_active1");
      $(this).find(".sd_name_box").addClass("state_active1");

      $(".ncr_dv").find(".sd_pin_box").removeClass("state_active");
      $(".ncr_dv").find(".park_no_dv").removeClass("state_active1");
      $(".ncr_dv").find(".sd_name_box").removeClass("state_active1");

      $(".ahmedabad_dv").find(".sd_pin_box").removeClass("state_active");
      $(".ahmedabad_dv").find(".park_no_dv").removeClass("state_active1");
      $(".ahmedabad_dv").find(".sd_name_box").removeClass("state_active1");

      $(".mumbai_dv").find(".sd_pin_box").removeClass("state_active");
      $(".mumbai_dv").find(".park_no_dv").removeClass("state_active1");
      $(".mumbai_dv").find(".sd_name_box").removeClass("state_active1");

      $(".pune_dv").find(".sd_pin_box").removeClass("state_active");
      $(".pune_dv").find(".park_no_dv").removeClass("state_active1");
      $(".pune_dv").find(".sd_name_box").removeClass("state_active1");

      $(".goa_dv").find(".sd_pin_box").removeClass("state_active");
      $(".goa_dv").find(".park_no_dv").removeClass("state_active1");
      $(".goa_dv").find(".sd_name_box").removeClass("state_active1");

      $(".hyderabad_dv").find(".sd_pin_box").removeClass("state_active");
      $(".hyderabad_dv").find(".park_no_dv").removeClass("state_active1");
      $(".hyderabad_dv").find(".sd_name_box").removeClass("state_active1");

      $(".nagpur_dv").find(".sd_pin_box").removeClass("state_active");
      $(".nagpur_dv").find(".park_no_dv").removeClass("state_active1");
      $(".nagpur_dv").find(".sd_name_box").removeClass("state_active1");

      $(".chennai_dv").find(".sd_pin_box").removeClass("state_active");
      $(".chennai_dv").find(".park_no_dv").removeClass("state_active1");
      $(".chennai_dv").find(".sd_name_box").removeClass("state_active1");

      $(".kolkata_dv").find(".sd_pin_box").removeClass("state_active");
      $(".kolkata_dv").find(".park_no_dv").removeClass("state_active1");
      $(".kolkata_dv").find(".sd_name_box").removeClass("state_active1");

      $(".bhiwandi_dv").find(".sd_pin_box").removeClass("state_active");
      $(".bhiwandi_dv").find(".park_no_dv").removeClass("state_active1");
      $(".bhiwandi_dv").find(".sd_name_box").removeClass("state_active1");

      $(".nashik_dv").find(".sd_pin_box").removeClass("state_active");
      $(".nashik_dv").find(".park_no_dv").removeClass("state_active1");
      $(".nashik_dv").find(".sd_name_box").removeClass("state_active1");

      $(".indore_dv").find(".sd_pin_box").removeClass("state_active");
      $(".indore_dv").find(".park_no_dv").removeClass("state_active1");
      $(".indore_dv").find(".sd_name_box").removeClass("state_active1");
    });

    $(".hyderabad_dv").on("click", function () {
      $(this).find(".sd_pin_box").addClass("state_active");
      $(this).find(".park_no_dv").addClass("state_active1");
      $(this).find(".sd_name_box").addClass("state_active1");

      $(".ncr_dv").find(".sd_pin_box").removeClass("state_active");
      $(".ncr_dv").find(".park_no_dv").removeClass("state_active1");
      $(".ncr_dv").find(".sd_name_box").removeClass("state_active1");

      $(".ahmedabad_dv").find(".sd_pin_box").removeClass("state_active");
      $(".ahmedabad_dv").find(".park_no_dv").removeClass("state_active1");
      $(".ahmedabad_dv").find(".sd_name_box").removeClass("state_active1");

      $(".mumbai_dv").find(".sd_pin_box").removeClass("state_active");
      $(".mumbai_dv").find(".park_no_dv").removeClass("state_active1");
      $(".mumbai_dv").find(".sd_name_box").removeClass("state_active1");

      $(".pune_dv").find(".sd_pin_box").removeClass("state_active");
      $(".pune_dv").find(".park_no_dv").removeClass("state_active1");
      $(".pune_dv").find(".sd_name_box").removeClass("state_active1");

      $(".goa_dv").find(".sd_pin_box").removeClass("state_active");
      $(".goa_dv").find(".park_no_dv").removeClass("state_active1");
      $(".goa_dv").find(".sd_name_box").removeClass("state_active1");

      $(".bengaluru_dv").find(".sd_pin_box").removeClass("state_active");
      $(".bengaluru_dv").find(".park_no_dv").removeClass("state_active1");
      $(".bengaluru_dv").find(".sd_name_box").removeClass("state_active1");

      $(".nagpur_dv").find(".sd_pin_box").removeClass("state_active");
      $(".nagpur_dv").find(".park_no_dv").removeClass("state_active1");
      $(".nagpur_dv").find(".sd_name_box").removeClass("state_active1");

      $(".chennai_dv").find(".sd_pin_box").removeClass("state_active");
      $(".chennai_dv").find(".park_no_dv").removeClass("state_active1");
      $(".chennai_dv").find(".sd_name_box").removeClass("state_active1");

      $(".kolkata_dv").find(".sd_pin_box").removeClass("state_active");
      $(".kolkata_dv").find(".park_no_dv").removeClass("state_active1");
      $(".kolkata_dv").find(".sd_name_box").removeClass("state_active1");

      $(".bhiwandi_dv").find(".sd_pin_box").removeClass("state_active");
      $(".bhiwandi_dv").find(".park_no_dv").removeClass("state_active1");
      $(".bhiwandi_dv").find(".sd_name_box").removeClass("state_active1");

      $(".nashik_dv").find(".sd_pin_box").removeClass("state_active");
      $(".nashik_dv").find(".park_no_dv").removeClass("state_active1");
      $(".nashik_dv").find(".sd_name_box").removeClass("state_active1");

      $(".indore_dv").find(".sd_pin_box").removeClass("state_active");
      $(".indore_dv").find(".park_no_dv").removeClass("state_active1");
      $(".indore_dv").find(".sd_name_box").removeClass("state_active1");
    });
    $(".nagpur_dv").on("click", function () {
      $(this).find(".sd_pin_box").addClass("state_active");
      $(this).find(".park_no_dv").addClass("state_active1");
      $(this).find(".sd_name_box").addClass("state_active1");

      $(".ncr_dv").find(".sd_pin_box").removeClass("state_active");
      $(".ncr_dv").find(".park_no_dv").removeClass("state_active1");
      $(".ncr_dv").find(".sd_name_box").removeClass("state_active1");

      $(".ahmedabad_dv").find(".sd_pin_box").removeClass("state_active");
      $(".ahmedabad_dv").find(".park_no_dv").removeClass("state_active1");
      $(".ahmedabad_dv").find(".sd_name_box").removeClass("state_active1");

      $(".mumbai_dv").find(".sd_pin_box").removeClass("state_active");
      $(".mumbai_dv").find(".park_no_dv").removeClass("state_active1");
      $(".mumbai_dv").find(".sd_name_box").removeClass("state_active1");

      $(".pune_dv").find(".sd_pin_box").removeClass("state_active");
      $(".pune_dv").find(".park_no_dv").removeClass("state_active1");
      $(".pune_dv").find(".sd_name_box").removeClass("state_active1");

      $(".goa_dv").find(".sd_pin_box").removeClass("state_active");
      $(".goa_dv").find(".park_no_dv").removeClass("state_active1");
      $(".goa_dv").find(".sd_name_box").removeClass("state_active1");

      $(".bengaluru_dv").find(".sd_pin_box").removeClass("state_active");
      $(".bengaluru_dv").find(".park_no_dv").removeClass("state_active1");
      $(".bengaluru_dv").find(".sd_name_box").removeClass("state_active1");

      $(".hyderabad_dv").find(".sd_pin_box").removeClass("state_active");
      $(".hyderabad_dv").find(".park_no_dv").removeClass("state_active1");
      $(".hyderabad_dv").find(".sd_name_box").removeClass("state_active1");

      $(".chennai_dv").find(".sd_pin_box").removeClass("state_active");
      $(".chennai_dv").find(".park_no_dv").removeClass("state_active1");
      $(".chennai_dv").find(".sd_name_box").removeClass("state_active1");

      $(".kolkata_dv").find(".sd_pin_box").removeClass("state_active");
      $(".kolkata_dv").find(".park_no_dv").removeClass("state_active1");
      $(".kolkata_dv").find(".sd_name_box").removeClass("state_active1");

      $(".bhiwandi_dv").find(".sd_pin_box").removeClass("state_active");
      $(".bhiwandi_dv").find(".park_no_dv").removeClass("state_active1");
      $(".bhiwandi_dv").find(".sd_name_box").removeClass("state_active1");

      $(".nashik_dv").find(".sd_pin_box").removeClass("state_active");
      $(".nashik_dv").find(".park_no_dv").removeClass("state_active1");
      $(".nashik_dv").find(".sd_name_box").removeClass("state_active1");

      $(".indore_dv").find(".sd_pin_box").removeClass("state_active");
      $(".indore_dv").find(".park_no_dv").removeClass("state_active1");
      $(".indore_dv").find(".sd_name_box").removeClass("state_active1");
    });
    $(".chennai_dv").on("click", function () {
      $(this).find(".sd_pin_box").addClass("state_active");
      $(this).find(".park_no_dv").addClass("state_active1");
      $(this).find(".sd_name_box").addClass("state_active1");

      $(".ncr_dv").find(".sd_pin_box").removeClass("state_active");
      $(".ncr_dv").find(".park_no_dv").removeClass("state_active1");
      $(".ncr_dv").find(".sd_name_box").removeClass("state_active1");

      $(".ahmedabad_dv").find(".sd_pin_box").removeClass("state_active");
      $(".ahmedabad_dv").find(".park_no_dv").removeClass("state_active1");
      $(".ahmedabad_dv").find(".sd_name_box").removeClass("state_active1");

      $(".mumbai_dv").find(".sd_pin_box").removeClass("state_active");
      $(".mumbai_dv").find(".park_no_dv").removeClass("state_active1");
      $(".mumbai_dv").find(".sd_name_box").removeClass("state_active1");

      $(".pune_dv").find(".sd_pin_box").removeClass("state_active");
      $(".pune_dv").find(".park_no_dv").removeClass("state_active1");
      $(".pune_dv").find(".sd_name_box").removeClass("state_active1");

      $(".goa_dv").find(".sd_pin_box").removeClass("state_active");
      $(".goa_dv").find(".park_no_dv").removeClass("state_active1");
      $(".goa_dv").find(".sd_name_box").removeClass("state_active1");

      $(".bengaluru_dv").find(".sd_pin_box").removeClass("state_active");
      $(".bengaluru_dv").find(".park_no_dv").removeClass("state_active1");
      $(".bengaluru_dv").find(".sd_name_box").removeClass("state_active1");

      $(".hyderabad_dv").find(".sd_pin_box").removeClass("state_active");
      $(".hyderabad_dv").find(".park_no_dv").removeClass("state_active1");
      $(".hyderabad_dv").find(".sd_name_box").removeClass("state_active1");

      $(".nagpur_dv").find(".sd_pin_box").removeClass("state_active");
      $(".nagpur_dv").find(".park_no_dv").removeClass("state_active1");
      $(".nagpur_dv").find(".sd_name_box").removeClass("state_active1");

      $(".kolkata_dv").find(".sd_pin_box").removeClass("state_active");
      $(".kolkata_dv").find(".park_no_dv").removeClass("state_active1");
      $(".kolkata_dv").find(".sd_name_box").removeClass("state_active1");

      $(".bhiwandi_dv").find(".sd_pin_box").removeClass("state_active");
      $(".bhiwandi_dv").find(".park_no_dv").removeClass("state_active1");
      $(".bhiwandi_dv").find(".sd_name_box").removeClass("state_active1");

      $(".nashik_dv").find(".sd_pin_box").removeClass("state_active");
      $(".nashik_dv").find(".park_no_dv").removeClass("state_active1");
      $(".nashik_dv").find(".sd_name_box").removeClass("state_active1");

      $(".indore_dv").find(".sd_pin_box").removeClass("state_active");
      $(".indore_dv").find(".park_no_dv").removeClass("state_active1");
      $(".indore_dv").find(".sd_name_box").removeClass("state_active1");
    });

    if ($(window).width() < 602) {
      $(".ncr_dv").on("click", function () {
        $("html, body").animate(
          {
            scrollTop: $(".park_slider_sub_dv").offset().top,
          },
          500
        );
      });

      $(".ahmedabad_dv").on("click", function () {
        $("html, body").animate(
          {
            scrollTop: $(".park_slider_sub_dv").offset().top,
          },
          500
        );
      });

      $(".nagpur_dv").on("click", function () {
        $("html, body").animate(
          {
            scrollTop: $(".park_slider_sub_dv").offset().top,
          },
          500
        );
      });
      $(".chennai_dv").on("click", function () {
        $("html, body").animate(
          {
            scrollTop: $(".park_slider_sub_dv").offset().top,
          },
          500
        );
      });

      $(".pune_dv").on("click", function () {
        $("html, body").animate(
          {
            scrollTop: $(".park_slider_sub_dv").offset().top,
          },
          500
        );
      });
      $(".goa_dv").on("click", function () {
        $("html, body").animate(
          {
            scrollTop: $(".park_slider_sub_dv").offset().top,
          },
          500
        );
      });
      $(".bengaluru_dv").on("click", function () {
        $("html, body").animate(
          {
            scrollTop: $(".park_slider_sub_dv").offset().top,
          },
          500
        );
      });
      $(".hyderabad_dv").on("click", function () {
        $("html, body").animate(
          {
            scrollTop: $(".park_slider_sub_dv").offset().top,
          },
          500
        );
      });

      // -------------------------------------------------

      $(".mumbai_dv").on("click", function () {
        $(this).find(".sd_pin_box").addClass("state_active");
        $(this).find(".park_no_dv").addClass("state_active1");
        $(this).find(".sd_name_box").addClass("state_active1");

        $(".ncr_dv").find(".sd_pin_box").removeClass("state_active");
        $(".ncr_dv").find(".park_no_dv").removeClass("state_active1");
        $(".ncr_dv").find(".sd_name_box").removeClass("state_active1");

        $(".ahmedabad_dv").find(".sd_pin_box").removeClass("state_active");
        $(".ahmedabad_dv").find(".park_no_dv").removeClass("state_active1");
        $(".ahmedabad_dv").find(".sd_name_box").removeClass("state_active1");

        $(".goa_dv").find(".sd_pin_box").removeClass("state_active");
        $(".goa_dv").find(".park_no_dv").removeClass("state_active1");
        $(".goa_dv").find(".sd_name_box").removeClass("state_active1");

        $(".pune_dv").find(".sd_pin_box").removeClass("state_active");
        $(".pune_dv").find(".park_no_dv").removeClass("state_active1");
        $(".pune_dv").find(".sd_name_box").removeClass("state_active1");

        $(".bengaluru_dv").find(".sd_pin_box").removeClass("state_active");
        $(".bengaluru_dv").find(".park_no_dv").removeClass("state_active1");
        $(".bengaluru_dv").find(".sd_name_box").removeClass("state_active1");

        $(".hyderabad_dv").find(".sd_pin_box").removeClass("state_active");
        $(".hyderabad_dv").find(".park_no_dv").removeClass("state_active1");
        $(".hyderabad_dv").find(".sd_name_box").removeClass("state_active1");

        $(".nagpur_dv").find(".sd_pin_box").removeClass("state_active");
        $(".nagpur_dv").find(".park_no_dv").removeClass("state_active1");
        $(".nagpur_dv").find(".sd_name_box").removeClass("state_active1");

        $(".chennai_dv").find(".sd_pin_box").removeClass("state_active");
        $(".chennai_dv").find(".park_no_dv").removeClass("state_active1");
        $(".chennai_dv").find(".sd_name_box").removeClass("state_active1");

        $(".kolkata_dv").find(".sd_pin_box").removeClass("state_active");
        $(".kolkata_dv").find(".park_no_dv").removeClass("state_active1");
        $(".kolkata_dv").find(".sd_name_box").removeClass("state_active1");

        $(".bhiwandi_dv").find(".sd_pin_box").removeClass("state_active");
        $(".bhiwandi_dv").find(".park_no_dv").removeClass("state_active1");
        $(".bhiwandi_dv").find(".sd_name_box").removeClass("state_active1");

        $(".nashik_dv").find(".sd_pin_box").removeClass("state_active");
        $(".nashik_dv").find(".park_no_dv").removeClass("state_active1");
        $(".nashik_dv").find(".sd_name_box").removeClass("state_active1");

        $(".indore_dv").find(".sd_pin_box").removeClass("state_active");
        $(".indore_dv").find(".park_no_dv").removeClass("state_active1");
        $(".indore_dv").find(".sd_name_box").removeClass("state_active1");
      });

      $(".kolkata_dv").on("click", function () {
        $(this).find(".sd_pin_box").addClass("state_active");
        $(this).find(".park_no_dv").addClass("state_active1");
        $(this).find(".sd_name_box").addClass("state_active1");

        $(".ncr_dv").find(".sd_pin_box").removeClass("state_active");
        $(".ncr_dv").find(".park_no_dv").removeClass("state_active1");
        $(".ncr_dv").find(".sd_name_box").removeClass("state_active1");

        $(".ahmedabad_dv").find(".sd_pin_box").removeClass("state_active");
        $(".ahmedabad_dv").find(".park_no_dv").removeClass("state_active1");
        $(".ahmedabad_dv").find(".sd_name_box").removeClass("state_active1");

        $(".goa_dv").find(".sd_pin_box").removeClass("state_active");
        $(".goa_dv").find(".park_no_dv").removeClass("state_active1");
        $(".goa_dv").find(".sd_name_box").removeClass("state_active1");

        $(".pune_dv").find(".sd_pin_box").removeClass("state_active");
        $(".pune_dv").find(".park_no_dv").removeClass("state_active1");
        $(".pune_dv").find(".sd_name_box").removeClass("state_active1");

        $(".bengaluru_dv").find(".sd_pin_box").removeClass("state_active");
        $(".bengaluru_dv").find(".park_no_dv").removeClass("state_active1");
        $(".bengaluru_dv").find(".sd_name_box").removeClass("state_active1");

        $(".hyderabad_dv").find(".sd_pin_box").removeClass("state_active");
        $(".hyderabad_dv").find(".park_no_dv").removeClass("state_active1");
        $(".hyderabad_dv").find(".sd_name_box").removeClass("state_active1");

        $(".nagpur_dv").find(".sd_pin_box").removeClass("state_active");
        $(".nagpur_dv").find(".park_no_dv").removeClass("state_active1");
        $(".nagpur_dv").find(".sd_name_box").removeClass("state_active1");

        $(".chennai_dv").find(".sd_pin_box").removeClass("state_active");
        $(".chennai_dv").find(".park_no_dv").removeClass("state_active1");
        $(".chennai_dv").find(".sd_name_box").removeClass("state_active1");

        $(".mumbai_dv").find(".sd_pin_box").removeClass("state_active");
        $(".mumbai_dv").find(".park_no_dv").removeClass("state_active1");
        $(".mumbai_dv").find(".sd_name_box").removeClass("state_active1");

        $(".bhiwandi_dv").find(".sd_pin_box").removeClass("state_active");
        $(".bhiwandi_dv").find(".park_no_dv").removeClass("state_active1");
        $(".bhiwandi_dv").find(".sd_name_box").removeClass("state_active1");

        $(".nashik_dv").find(".sd_pin_box").removeClass("state_active");
        $(".nashik_dv").find(".park_no_dv").removeClass("state_active1");
        $(".nashik_dv").find(".sd_name_box").removeClass("state_active1");

        $(".indore_dv").find(".sd_pin_box").removeClass("state_active");
        $(".indore_dv").find(".park_no_dv").removeClass("state_active1");
        $(".indore_dv").find(".sd_name_box").removeClass("state_active1");
      });

      $(".bhiwandi_dv").on("click", function () {
        $(this).find(".sd_pin_box").addClass("state_active");
        $(this).find(".park_no_dv").addClass("state_active1");
        $(this).find(".sd_name_box").addClass("state_active1");

        $(".ncr_dv").find(".sd_pin_box").removeClass("state_active");
        $(".ncr_dv").find(".park_no_dv").removeClass("state_active1");
        $(".ncr_dv").find(".sd_name_box").removeClass("state_active1");

        $(".ahmedabad_dv").find(".sd_pin_box").removeClass("state_active");
        $(".ahmedabad_dv").find(".park_no_dv").removeClass("state_active1");
        $(".ahmedabad_dv").find(".sd_name_box").removeClass("state_active1");

        $(".goa_dv").find(".sd_pin_box").removeClass("state_active");
        $(".goa_dv").find(".park_no_dv").removeClass("state_active1");
        $(".goa_dv").find(".sd_name_box").removeClass("state_active1");

        $(".pune_dv").find(".sd_pin_box").removeClass("state_active");
        $(".pune_dv").find(".park_no_dv").removeClass("state_active1");
        $(".pune_dv").find(".sd_name_box").removeClass("state_active1");

        $(".bengaluru_dv").find(".sd_pin_box").removeClass("state_active");
        $(".bengaluru_dv").find(".park_no_dv").removeClass("state_active1");
        $(".bengaluru_dv").find(".sd_name_box").removeClass("state_active1");

        $(".hyderabad_dv").find(".sd_pin_box").removeClass("state_active");
        $(".hyderabad_dv").find(".park_no_dv").removeClass("state_active1");
        $(".hyderabad_dv").find(".sd_name_box").removeClass("state_active1");

        $(".nagpur_dv").find(".sd_pin_box").removeClass("state_active");
        $(".nagpur_dv").find(".park_no_dv").removeClass("state_active1");
        $(".nagpur_dv").find(".sd_name_box").removeClass("state_active1");

        $(".chennai_dv").find(".sd_pin_box").removeClass("state_active");
        $(".chennai_dv").find(".park_no_dv").removeClass("state_active1");
        $(".chennai_dv").find(".sd_name_box").removeClass("state_active1");

        $(".mumbai_dv").find(".sd_pin_box").removeClass("state_active");
        $(".mumbai_dv").find(".park_no_dv").removeClass("state_active1");
        $(".mumbai_dv").find(".sd_name_box").removeClass("state_active1");

        $(".kolkata_dv").find(".sd_pin_box").removeClass("state_active");
        $(".kolkata_dv").find(".park_no_dv").removeClass("state_active1");
        $(".kolkata_dv").find(".sd_name_box").removeClass("state_active1");

        $(".nashik_dv").find(".sd_pin_box").removeClass("state_active");
        $(".nashik_dv").find(".park_no_dv").removeClass("state_active1");
        $(".nashik_dv").find(".sd_name_box").removeClass("state_active1");

        $(".indore_dv").find(".sd_pin_box").removeClass("state_active");
        $(".indore_dv").find(".park_no_dv").removeClass("state_active1");
        $(".indore_dv").find(".sd_name_box").removeClass("state_active1");
      });

      $(".nashik_dv").on("click", function () {
        $(this).find(".sd_pin_box").addClass("state_active");
        $(this).find(".park_no_dv").addClass("state_active1");
        $(this).find(".sd_name_box").addClass("state_active1");

        $(".ncr_dv").find(".sd_pin_box").removeClass("state_active");
        $(".ncr_dv").find(".park_no_dv").removeClass("state_active1");
        $(".ncr_dv").find(".sd_name_box").removeClass("state_active1");

        $(".ahmedabad_dv").find(".sd_pin_box").removeClass("state_active");
        $(".ahmedabad_dv").find(".park_no_dv").removeClass("state_active1");
        $(".ahmedabad_dv").find(".sd_name_box").removeClass("state_active1");

        $(".goa_dv").find(".sd_pin_box").removeClass("state_active");
        $(".goa_dv").find(".park_no_dv").removeClass("state_active1");
        $(".goa_dv").find(".sd_name_box").removeClass("state_active1");

        $(".pune_dv").find(".sd_pin_box").removeClass("state_active");
        $(".pune_dv").find(".park_no_dv").removeClass("state_active1");
        $(".pune_dv").find(".sd_name_box").removeClass("state_active1");

        $(".bengaluru_dv").find(".sd_pin_box").removeClass("state_active");
        $(".bengaluru_dv").find(".park_no_dv").removeClass("state_active1");
        $(".bengaluru_dv").find(".sd_name_box").removeClass("state_active1");

        $(".hyderabad_dv").find(".sd_pin_box").removeClass("state_active");
        $(".hyderabad_dv").find(".park_no_dv").removeClass("state_active1");
        $(".hyderabad_dv").find(".sd_name_box").removeClass("state_active1");

        $(".nagpur_dv").find(".sd_pin_box").removeClass("state_active");
        $(".nagpur_dv").find(".park_no_dv").removeClass("state_active1");
        $(".nagpur_dv").find(".sd_name_box").removeClass("state_active1");

        $(".chennai_dv").find(".sd_pin_box").removeClass("state_active");
        $(".chennai_dv").find(".park_no_dv").removeClass("state_active1");
        $(".chennai_dv").find(".sd_name_box").removeClass("state_active1");

        $(".mumbai_dv").find(".sd_pin_box").removeClass("state_active");
        $(".mumbai_dv").find(".park_no_dv").removeClass("state_active1");
        $(".mumbai_dv").find(".sd_name_box").removeClass("state_active1");

        $(".kolkata_dv").find(".sd_pin_box").removeClass("state_active");
        $(".kolkata_dv").find(".park_no_dv").removeClass("state_active1");
        $(".kolkata_dv").find(".sd_name_box").removeClass("state_active1");

        $(".bhiwandi_dv").find(".sd_pin_box").removeClass("state_active");
        $(".bhiwandi_dv").find(".park_no_dv").removeClass("state_active1");
        $(".bhiwandi_dv").find(".sd_name_box").removeClass("state_active1");

        $(".indore_dv").find(".sd_pin_box").removeClass("state_active");
        $(".indore_dv").find(".park_no_dv").removeClass("state_active1");
        $(".indore_dv").find(".sd_name_box").removeClass("state_active1");
      });

      $(".indore_dv").on("click", function () {
        $(this).find(".sd_pin_box").addClass("state_active");
        $(this).find(".park_no_dv").addClass("state_active1");
        $(this).find(".sd_name_box").addClass("state_active1");

        $(".ncr_dv").find(".sd_pin_box").removeClass("state_active");
        $(".ncr_dv").find(".park_no_dv").removeClass("state_active1");
        $(".ncr_dv").find(".sd_name_box").removeClass("state_active1");

        $(".ahmedabad_dv").find(".sd_pin_box").removeClass("state_active");
        $(".ahmedabad_dv").find(".park_no_dv").removeClass("state_active1");
        $(".ahmedabad_dv").find(".sd_name_box").removeClass("state_active1");

        $(".goa_dv").find(".sd_pin_box").removeClass("state_active");
        $(".goa_dv").find(".park_no_dv").removeClass("state_active1");
        $(".goa_dv").find(".sd_name_box").removeClass("state_active1");

        $(".pune_dv").find(".sd_pin_box").removeClass("state_active");
        $(".pune_dv").find(".park_no_dv").removeClass("state_active1");
        $(".pune_dv").find(".sd_name_box").removeClass("state_active1");

        $(".bengaluru_dv").find(".sd_pin_box").removeClass("state_active");
        $(".bengaluru_dv").find(".park_no_dv").removeClass("state_active1");
        $(".bengaluru_dv").find(".sd_name_box").removeClass("state_active1");

        $(".hyderabad_dv").find(".sd_pin_box").removeClass("state_active");
        $(".hyderabad_dv").find(".park_no_dv").removeClass("state_active1");
        $(".hyderabad_dv").find(".sd_name_box").removeClass("state_active1");

        $(".nagpur_dv").find(".sd_pin_box").removeClass("state_active");
        $(".nagpur_dv").find(".park_no_dv").removeClass("state_active1");
        $(".nagpur_dv").find(".sd_name_box").removeClass("state_active1");

        $(".chennai_dv").find(".sd_pin_box").removeClass("state_active");
        $(".chennai_dv").find(".park_no_dv").removeClass("state_active1");
        $(".chennai_dv").find(".sd_name_box").removeClass("state_active1");

        $(".mumbai_dv").find(".sd_pin_box").removeClass("state_active");
        $(".mumbai_dv").find(".park_no_dv").removeClass("state_active1");
        $(".mumbai_dv").find(".sd_name_box").removeClass("state_active1");

        $(".kolkata_dv").find(".sd_pin_box").removeClass("state_active");
        $(".kolkata_dv").find(".park_no_dv").removeClass("state_active1");
        $(".kolkata_dv").find(".sd_name_box").removeClass("state_active1");

        $(".bhiwandi_dv").find(".sd_pin_box").removeClass("state_active");
        $(".bhiwandi_dv").find(".park_no_dv").removeClass("state_active1");
        $(".bhiwandi_dv").find(".sd_name_box").removeClass("state_active1");

        $(".nashik_dv").find(".sd_pin_box").removeClass("state_active");
        $(".nashik_dv").find(".park_no_dv").removeClass("state_active1");
        $(".nashik_dv").find(".sd_name_box").removeClass("state_active1");
      });
    }

    $("#park_dropdown").on("change", function () {
      $(".park_info_dv").fadeOut();
      $("#" + $(this).val()).fadeIn("slow");
    });

    (function ($) {
      $.fn.visible = function (partial) {
        var $t = $(this),
          $w = $(window),
          viewTop = $w.scrollTop(),
          viewBottom = viewTop + $w.height(),
          _top = $t.offset().top,
          _bottom = _top + $t.height(),
          compareTop = partial === true ? _bottom : _top,
          compareBottom = partial === true ? _top : _bottom;

        return compareBottom <= viewBottom && compareTop >= viewTop;
      };
    })($);

    $(window).on("scroll", function (event) {
      $(".park_main_slider .slick-list").each(function (i, el) {
        var el = $(el);
        if (el.visible(true)) {
          el.addClass("remov-trnsfrm");
        }
      });
    });
  });

  return (
    <>
      <div className="park_sec snap_sec">
        <div className="row no_LR_margin">
          {/*---------------------------------------------------------------------- Map Col */}
          <div className="col-lg-5 col-md-6 col-sm-12 col-12  park_map_col">
            <div className="park_inner_dv mobile_prk_dv">
              <p
                className="section_name map_sec_name p_opacity"
                ref={fade_para}
                id="fade_para"
              >
                Our Reach
              </p>
              <hr
                className="add_border p_opacity"
                ref={parkBorder_aniamtion}
                id="parkBorder_aniamtion"
              />
              <div className="animate_txt ">
                <h2
                  ref={txt_animate_3}
                  className="section_heading"
                  id="txt_animate_3"
                >
                  Grow your world
                </h2>
              </div>
              <div className="animate_txt ">
                <h2
                  ref={txt_animate_3}
                  className="section_heading"
                  id="txt_animate_3"
                >
                  In Ours
                </h2>
              </div>
            </div>

            <div className="map_dv">
              <img
                className="map_img"
                src={require("../../assets/img/map.webp")}
              ></img>

              {/*--------------- Delhi */}
              <div
                className="state_dv park_state ncr_dv"
                ref={pin_animate_1}
                id="pin_animate_1"
                target="1"
              >
                <div className="sd_name_box">
                  <p className="state_name">NCR</p>
                  <div className="state_count">
                    <span className="active_stats">6</span>
                    <span className="incity_stats">7</span>
                  </div>
                </div>
                <div className="sd_pin_box">
                  <img
                    src={require("../../assets/img/svg/white_map_pin.svg")}
                  ></img>
                  {/* <div className='park_no_dv'>
                                    <p className='park_no'>06</p>
                                </div> */}
                </div>
              </div>

              {/*--------------- Ahmedabad */}
              <div
                className="state_dv park_state ahmedabad_dv"
                ref={pin_animate_2}
                id="pin_animate_2"
                target="2"
              >
                <div className="sd_name_box">
                  <p className="state_name">Ahmedabad</p>
                  <div className="state_count">
                    <span className="active_stats">1</span>
                  </div>
                </div>
                <div className="sd_pin_box">
                  <img
                    src={require("../../assets/img/svg/white_map_pin.svg")}
                  ></img>
                  {/* <div className='park_no_dv'>
                                    <p className='park_no'>01</p>
                                </div> */}
                </div>
              </div>

              {/*--------------- Indore    */}
              <div
                className="state_dv indore_dv"
                ref={pin_animate_4}
                id="pin_animate_4"
                target=""
              >
                <div className="sd_name_box">
                  <p className="state_name">Indore</p>
                  <div className="state_count">
                    <span className="planed_stats">1</span>
                  </div>
                </div>
                <div className="sd_pin_box">
                  <img
                    src={require("../../assets/img/svg/white_map_pin.svg")}
                  ></img>
                  <div className="park_no_dv">
                    <p className="park_no">01</p>
                  </div>
                </div>
              </div>

              {/*--------------- Nashik    */}
              <div
                className="state_dv nashik_dv"
                ref={pin_animate_4}
                id="pin_animate_4"
                target=""
              >
                <div className="sd_name_box">
                  <p className="state_name">Nashik</p>
                  <div className="state_count">
                    <span className="jv_stats">1</span>
                  </div>
                </div>
                <div className="sd_pin_box">
                  <img
                    src={require("../../assets/img/svg/white_map_pin.svg")}
                  ></img>
                  <div className="park_no_dv">
                    <p className="park_no">01</p>
                  </div>
                </div>
              </div>

              {/*--------------- bhiwandi    */}
              {/* <div
                className="state_dv bhiwandi_dv"
                ref={pin_animate_4}
                id="pin_animate_4"
                target=""
              >
                <div className="sd_pin_box">
                  <img
                    src={
                      require("../../assets/img/svg/white_map_pin.svg")
                    }
                  ></img>
                  <div className="park_no_dv">
                    <p className="park_no">01</p>
                  </div>
                </div>
                <div className="sd_name_box">
                  <p className="state_name">Bhiwandi</p>
                  <div className="state_count">
                    <span className="jv_stats">1</span>
                  </div>
                </div>
              </div> */}

              {/*--------------- Mumbai */}
              <div
                className="state_dv mumbai_dv"
                ref={pin_animate_4}
                id="pin_animate_4"
                target="3"
              >
                <div className="sd_name_box">
                  <p className="state_name">Mumbai</p>
                  <div className="state_count">
                    <span className="active_stats">1</span>
                    <span className="incity_stats">1</span>
                  </div>
                </div>
                <div className="sd_pin_box">
                  <img
                    src={require("../../assets/img/svg/white_map_pin.svg")}
                  ></img>
                  <div className="park_no_dv">
                    <p className="park_no">01</p>
                  </div>
                </div>
              </div>

              {/*--------------- Pune */}
              <div
                className="state_dv park_state pune_dv"
                ref={pin_animate_6}
                id="pin_animate_6"
                target="4"
              >
                <div className="sd_pin_box">
                  <img
                    src={require("../../assets/img/svg/white_map_pin.svg")}
                  ></img>
                  <div className="park_no_dv">
                    <p className="park_no">03</p>
                  </div>
                </div>
                <div className="sd_name_box">
                  <p className="state_name">Pune</p>
                  <div className="state_count">
                    <span className="active_stats">2</span>
                    <span className="jv_stats">1</span>
                    <span className="incity_stats">1</span>
                  </div>
                </div>
              </div>

              {/*--------------- Goa */}
              <div
                className="state_dv park_state goa_dv"
                ref={pin_animate_8}
                id="pin_animate_8"
                target="5"
              >
                <div className="sd_name_box">
                  <p className="state_name">Goa</p>
                  <div className="state_count">
                    <span className="active_stats">1</span>
                  </div>
                </div>
                <div className="sd_pin_box">
                  <img
                    src={require("../../assets/img/svg/white_map_pin.svg")}
                  ></img>
                  <div className="park_no_dv">
                    <p className="park_no">01</p>
                  </div>
                </div>
              </div>

              {/*--------------- Bengaluru */}
              <div
                className="state_dv park_state bengaluru_dv"
                ref={pin_animate_9}
                id="pin_animate_9"
                target="6"
              >
                <div className="sd_name_box">
                  <p className="state_name">Bengaluru</p>
                  <div className="state_count">
                    <span className="active_stats">4</span>
                    <span className="jv_stats">1</span>
                    <span className="incity_stats">1</span>
                  </div>
                </div>
                <div className="sd_pin_box">
                  <img
                    src={require("../../assets/img/svg/white_map_pin.svg")}
                  ></img>
                  <div className="park_no_dv">
                    <p className="park_no">05</p>
                  </div>
                </div>
              </div>

              {/*--------------- Chennai */}
              <div
                className="state_dv park_state chennai_dv"
                ref={pin_animate_7}
                id="pin_animate_10"
                target="10"
              >
                <div className="sd_pin_box">
                  <img
                    src={require("../../assets/img/svg/white_map_pin.svg")}
                  ></img>
                  <div className="park_no_dv">
                    <p className="park_no">02</p>
                  </div>
                </div>
                <div className="sd_name_box">
                  <p className="state_name">Chennai</p>
                  <div className="state_count">
                    <span className="active_stats">1</span>
                    <span className="jv_stats">1</span>
                    <span className="planed_stats">1</span>
                    <span className="incity_stats">2</span>
                  </div>
                </div>
              </div>

              {/*--------------- Hyderabad */}
              <div
                className="state_dv park_state hyderabad_dv"
                ref={pin_animate_7}
                id="pin_animate_7"
                target="7"
              >
                <div className="sd_pin_box">
                  <img
                    src={require("../../assets/img/svg/white_map_pin.svg")}
                  ></img>
                  <div className="park_no_dv">
                    <p className="park_no">02</p>
                  </div>
                </div>
                <div className="sd_name_box">
                  <p className="state_name">Hyderabad</p>
                  <div className="state_count">
                    <span className="active_stats">2</span>
                  </div>
                </div>
              </div>

              {/*--------------- Nagpur */}
              <div
                className="state_dv park_state nagpur_dv"
                ref={pin_animate_5}
                id="pin_animate_5"
                target="8"
              >
                <div className="sd_pin_box">
                  <img
                    src={require("../../assets/img/svg/white_map_pin.svg")}
                  ></img>
                  <div className="park_no_dv">
                    <p className="park_no">02</p>
                  </div>
                </div>
                <div className="sd_name_box">
                  <p className="state_name">Nagpur</p>
                  <div className="state_count">
                    <span className="active_stats">2</span>
                    <span className="incity_stats">1</span>
                  </div>
                </div>
              </div>

              {/*--------------- Kolkata */}
              <div
                className="state_dv kolkata_dv"
                ref={pin_animate_3}
                id="pin_animate_3"
                target="9"
              >
                <div className="sd_name_box">
                  <p className="state_name">Kolkata</p>
                  <div className="state_count">
                    <span className="planed_stats">1</span>
                  </div>
                </div>
                <div className="sd_pin_box">
                  <img
                    src={require("../../assets/img/svg/white_map_pin.svg")}
                  ></img>
                  <div className="park_no_dv">
                    <p className="park_no">01</p>
                  </div>
                </div>
              </div>

              <div
                className="park_active_status_dv p_opacity"
                ref={fade_para}
                id="fade_para"
              >
                <div>
                  <img
                    src={require("../../assets/img/prk_status/active_prk.jpg")}
                  ></img>
                  <p>ACTIVE / Under Construction</p>
                </div>
                <div>
                  <img
                    src={require("../../assets/img/prk_status/planned_prk.jpg")}
                  ></img>
                  <p>Planned Acquisitions</p>
                </div>
                <div>
                  <img
                    src={require("../../assets/img/prk_status/jv_prk.jpg")}
                  ></img>
                  <p>JV PARKS</p>
                </div>
                <div>
                  <img
                    src={require("../../assets/img/prk_status/city_prk.jpg")}
                  ></img>
                  <p>In city warehouse</p>
                </div>
              </div>
            </div>
          </div>

          {/*---------------------------------------------------------------------- Park Slider Col */}
          <div className="col-lg-7 col-md-6 col-sm-12 col-12 park_slider_col no_right_padding">
            <div className="park_inner_dv ">
              <p
                className="section_name map_sec_name p_opacity mob_hide"
                ref={fade_para}
                id="fade_para"
              >
                Our Reach
              </p>
              <hr
                className="add_border p_opacity mob_hide"
                ref={parkBorder_aniamtion}
                id="parkBorder_aniamtion"
              />
              <div className="animate_txt mob_hide">
                <h2
                  ref={txt_animate_3}
                  className="section_heading"
                  id="txt_animate_3"
                >
                  Grow your world
                </h2>
              </div>
              <div className="animate_txt mob_hide">
                <h2
                  ref={txt_animate_3}
                  className="section_heading"
                  id="txt_animate_3"
                >
                  In Ours
                </h2>
              </div>
              {/* <h2 className='section_heading park_sec_hd'>Grow your world <br/> In Ours</h2> */}

              <div className="park_dp_div">
                <select className="prk_state_dp" id="park_dropdown">
                  <option value="div1">Delhi NCR</option>
                  <option value="div2">Ahmedabad</option>
                  <option value="div8">Nagpur</option>
                  <option value="div5">Goa</option>
                  <option value="div4">Pune</option>
                  <option value="div6">Bengaluru</option>
                  <option value="div7">Hyderabad</option>
                  <option value="div10">Chennai</option>
                </select>
              </div>

              <div className="park_slider_sub_dv prk_wht">
                <Delhi_slider />
                <Ahmedabad_slider />
                <Mumbai_slider />
                <Pune_slider />
                <Goa_slider />
                <Bengaluru_slider />
                <Hyderabad_slider />
                <Nagpur_slider />
                <Kolkata_slider />
                <Chennai_slider />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
