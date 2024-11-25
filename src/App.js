import "./App.css";
// import SmoothScroll from './components/SmoothScroll';
import { Route, Routes, useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import React, { useState, useRef } from "react";
import Home from "./pages/home_page";
import Park_page from "./pages/park_page";
import Park_inside_page from "./pages/park_inside_page";
import Search_page from "./pages/search_page";
import Explore_page from "./pages/explore_page";
import Esg_page from "./pages/esg_page";
import Solution_page from "./pages/solution_page";
import Strategic_land_acquisition_page from "./pages/solution/strategic_land_acquisition_page";
import Property_management_page from "./pages/solution/property_management_page";
import Park_const_developed_page from "./pages/solution/park_const_developed_page";
import Park_comp_app_page from "./pages/solution/park_comp_app_page";
import Contact_page from "./pages/contact_page";
import Press_release_page from "./pages/press_release_page";
import Error_page from "./pages/error_page";
import Privacy_policy from "./pages/privacy_page";
import Disclaimer_page from "./pages/disclaimer_page";
import Blog_page from "./pages/blog_page";
import Blog_inside_page from "./pages/blog_inside_page";
import Blog_category_page from "./pages/blog_category_page";
import Blog_tags_page from "./pages/blog_tags_page";
import Client_page from "./pages/client_page";
import Client_inside_pg from "./pages/client_inside_pg";
import Event_page from "./pages/event_page";
import Media_page from "./pages/media_page";
import emailjs from "emailjs-com";
import $ from "jquery";
import ScrollToTop from "../src/components/ScrollToTop";

import State_page from "./pages/state_page";
import Park from "./components/sections/park";

import Elsc_page from "./pages/elsc_page";
import Pa_north_page from "./pages/pa_north_page";
import Pa_south_page from "./pages/pa_south_page";
import Pa_west_page from "./pages/pa_west_page";

import Faq_page from "./pages/faq_page";

import Mh_microblog_inside_page from "./pages/micro_blogs/mh_microblog_inside_page";
import Delhi_microblog_inside_page from "./pages/micro_blogs/delhi_microblog_inside_page";
import Goa_microblog_inside_page from "./pages/micro_blogs/goa_microblog_inside_page";
import Gujarat_microblog_inside_page from "./pages/micro_blogs/gujarat_microblog_inside_page";
import Haryana_microblog_inside_page from "./pages/micro_blogs/haryana_microblog_inside_page";
import Karnataka_microblog_inside_page from "./pages/micro_blogs/karnataka_microblog_inside_page";
import Tamil_nadu_microblog_inside_page from "./pages/micro_blogs/tamil_nadu_microblog_inside_page";
import Telangana_microblog_inside_page from "./pages/micro_blogs/telangana_microblog_inside_page";

import { register } from "swiper/element/bundle";

function App({ initialData, press = [] }) {
  register();

  //---------------------------------------------------------------------------------------- Enquire Form code START
  const form_glb = useRef();
  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

  const nameinput_glb = React.useRef(null);
  const emailinput_glb = React.useRef(null);

  const orginput_glb = React.useRef(null);
  const phoneinput_glb = React.useRef(null);

  const departinput_glb = React.useRef(null);
  const msginput_glb = React.useRef(null);

  const parkinput_lsng = React.useRef(null);
  const spaceinput_lsng = React.useRef(null);

  // All field validation error hide code
  const handleFocus = (e) => {
    e.target.classList.remove("error_line");

    let er1 = document.getElementById("nm_err_frmglb");
    er1.classList.remove("show_error");

    let er1v = document.getElementById("nm_err_frmglb1");
    er1v.classList.remove("show_error");

    let er2 = document.getElementById("eml_err_frmglb");
    er2.classList.remove("show_error");

    let er2v = document.getElementById("eml_err1_frmglb");
    er2v.classList.remove("show_error");

    let er3 = document.getElementById("cmp_err_glb");
    er3.classList.remove("show_error");

    let er5 = document.getElementById("depart_err_glb");
    er5.classList.remove("show_error");

    let er6 = document.getElementById("msg_err_tellglb");
    er6.classList.remove("show_error");

    let er6v = document.getElementById("msg_err_tellglb1");
    er6v.classList.remove("show_error");

    let er7 = document.getElementById("prk_err_lsng_glb");
    er7.classList.remove("show_error");

    let er8 = document.getElementById("spc_err_lsng_glb");
    er8.classList.remove("show_error");
  };

  // Phone field validation error hide code
  const handleFocus11 = (e) => {
    e.target.classList.remove("error_line");

    let er4 = document.getElementById("phn_err_glb");
    er4.classList.remove("show_error");

    let er4v = document.getElementById("phn_err1_glb");
    er4v.classList.remove("show_error");
  };

  // Form action code
  const sendEmail = async (e) => {
    e.preventDefault();

    // Fields get value Code
    let name_fld_glb = nameinput_glb.current.value;
    let email_fld_glb = emailinput_glb.current.value;

    let org_fld_glb = orginput_glb.current.value;
    let phone_fld_glb = phoneinput_glb.current.value;

    let dprt_fld_glb = departinput_glb.current.value;
    let msg_fld_glb = msginput_glb.current.value;

    let parkinput_lsng_fld = parkinput_lsng.current.value;
    let spaceinput_lsng_fld = spaceinput_lsng.current.value;

    // Phone Regex Code
    let phone_fltr_glb = document.getElementById("phone_fld_glb");
    var mob_regx_glb = /^([+][9][1]|[9][1]|[0]){0,1}([7-9]{1})([0-9]{9})$/;
    var mailformat_glb = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var alpha_allwd = /^[A-Za-z ]+$/;

    // Fields validation Code
    if (name_fld_glb === "") {
      let v1 = document.getElementById("name_fld_glb");
      v1.className += " error_line";

      let er1 = document.getElementById("nm_err_frmglb");
      er1.className += " show_error";
    } else if (!name_fld_glb.match(alpha_allwd)) {
      let v1 = document.getElementById("name_fld_glb");
      v1.className += " error_line";

      let er1v = document.getElementById("nm_err_frmglb1");
      er1v.className += " show_error";
    } else if (email_fld_glb === "") {
      let v2 = document.getElementById("email_fld_glb");
      v2.className += " error_line";

      let er2 = document.getElementById("eml_err_frmglb");
      er2.className += " show_error";
    } else if (!email_fld_glb.match(mailformat_glb)) {
      let v2 = document.getElementById("email_fld_glb");
      v2.className += " error_line";

      let er2v = document.getElementById("eml_err1_frmglb");
      er2v.className += " show_error";
    } else if (org_fld_glb === "") {
      let v3 = document.getElementById("org_fld_glb");
      v3.className += " error_line";

      let er3 = document.getElementById("cmp_err_glb");
      er3.className += " show_error";
    } else if (phone_fld_glb === "") {
      let v4 = document.getElementById("phone_fld_glb");
      v4.className += " error_line";

      let er4 = document.getElementById("phn_err_glb");
      er4.className += " show_error";
    } else if (!mob_regx_glb.test(phone_fltr_glb.value)) {
      let v4 = document.getElementById("phone_fld_glb");
      v4.className += " error_line";

      let er4 = document.getElementById("phn_err1_glb");
      er4.className += " show_error";
    } else if (dprt_fld_glb === "") {
      let v5 = document.getElementById("dprt_fld_glb");
      v5.className += " error_line";

      let er5 = document.getElementById("depart_err_glb");
      er5.className += " show_error";
    } else if (parkinput_lsng_fld === "") {
      let v7 = document.getElementById("park_lsng_fld");
      v7.className += " error_line";

      let er7 = document.getElementById("prk_err_lsng_glb");
      er7.className += " show_error";
    } else if (spaceinput_lsng_fld === "") {
      let v8 = document.getElementById("space_lsng_fld");
      v8.className += " error_line";

      let er8 = document.getElementById("spc_err_lsng_glb");
      er8.className += " show_error";
    } else if (msg_fld_glb === "") {
      let v6 = document.getElementById("msg_fld_glb");
      v6.className += " error_line";

      let er6 = document.getElementById("msg_err_tellglb");
      er6.className += " show_error";
    } else if (!msg_fld_glb.match(alpha_allwd)) {
      let v6 = document.getElementById("msg_fld_glb");
      v6.className += " error_line";

      let er6v = document.getElementById("msg_err_tellglb1");
      er6v.className += " show_error";
    } else {
      if (dprt_fld_glb === "Leasing") {
        console.log("you are selected Leasing");

        fetch(
          "https://script.google.com/macros/s/AKfycbx1VjbZ_gfx_OfppiJyIzRMH-eBtvWhiS9WPb8VSvMHj5uwE4_da0tziLWfV2inUG8H/exec",
          {
            method: "POST",
            body: new FormData(form_glb.current),
          }
        )
          .then(() => {
            console.log("SUCCESSFULLY SUBMITTED of Sticky form");
            setLoading(false);
          })
          .catch((err) => console.log(err));

        emailjs
          .sendForm(
            "service_e420df4",
            "template_qxw1h39",
            e.target,
            "SsPYHKCapw4h-xBn_"
          )
          .then(
            (result) => {
              console.log(result.text);
              setStatusMessage("Your Message has been sent successfully");

              let bx = document.getElementById("thnk_box1");
              bx.className += " thnk_show";

              let frm_bx = document.getElementById("enq_form_bx");
              frm_bx.className += " form_hide";
            },
            (error) => {
              console.log(error.text);
              setStatusMessage(`${error.text} happened`);
            }
          );
        e.target.reset();
      } else if (dprt_fld_glb === "Land & Warehouse Investments") {
        console.log("you are selected Land & Warehouse Investments");

        fetch(
          "https://script.google.com/macros/s/AKfycbx1VjbZ_gfx_OfppiJyIzRMH-eBtvWhiS9WPb8VSvMHj5uwE4_da0tziLWfV2inUG8H/exec",
          {
            method: "POST",
            body: new FormData(form_glb.current),
          }
        )
          .then(() => {
            console.log("SUCCESSFULLY SUBMITTED of Sticky form");
            setLoading(false);
          })
          .catch((err) => console.log(err));

        emailjs
          .sendForm(
            "service_e420df4",
            "template_0rku4hn",
            e.target,
            "SsPYHKCapw4h-xBn_"
          )
          .then(
            (result) => {
              console.log(result.text);
              setStatusMessage("Your Message has been sent successfully");
              let bx = document.getElementById("thnk_box1");
              bx.className += " thnk_show";

              let frm_bx = document.getElementById("enq_form_bx");
              frm_bx.className += " form_hide";
            },
            (error) => {
              console.log(error.text);
              setStatusMessage(`${error.text} happened`);
            }
          );
        e.target.reset();
      } else if (dprt_fld_glb === "HR & Admin") {
        console.log("you are selected HR & Admin");

        fetch(
          "https://script.google.com/macros/s/AKfycbx1VjbZ_gfx_OfppiJyIzRMH-eBtvWhiS9WPb8VSvMHj5uwE4_da0tziLWfV2inUG8H/exec",
          {
            method: "POST",
            body: new FormData(form_glb.current),
          }
        )
          .then(() => {
            console.log("SUCCESSFULLY SUBMITTED of Sticky form");
            setLoading(false);
          })
          .catch((err) => console.log(err));

        emailjs
          .sendForm(
            "service_e420df4",
            "template_o4u61xa",
            e.target,
            "SsPYHKCapw4h-xBn_"
          )
          .then(
            (result) => {
              console.log(result.text);
              setStatusMessage("Your Message has been sent successfully");
              let bx = document.getElementById("thnk_box1");
              bx.className += " thnk_show";

              let frm_bx = document.getElementById("enq_form_bx");
              frm_bx.className += " form_hide";
            },
            (error) => {
              console.log(error.text);
              setStatusMessage(`${error.text} happened`);
            }
          );
        e.target.reset();
      } else if (dprt_fld_glb === "Media / Marketing") {
        console.log("you are selected Media / Marketing");

        fetch(
          "https://script.google.com/macros/s/AKfycbx1VjbZ_gfx_OfppiJyIzRMH-eBtvWhiS9WPb8VSvMHj5uwE4_da0tziLWfV2inUG8H/exec",
          {
            method: "POST",
            body: new FormData(form_glb.current),
          }
        )
          .then(() => {
            console.log("SUCCESSFULLY SUBMITTED of Sticky form");
            setLoading(false);
          })
          .catch((err) => console.log(err));

        emailjs
          .sendForm(
            "service_e420df4",
            "template_0svsn5t",
            e.target,
            "SsPYHKCapw4h-xBn_"
          )
          .then(
            (result) => {
              console.log(result.text);
              setStatusMessage("Your Message has been sent successfully");
              let bx = document.getElementById("thnk_box1");
              bx.className += " thnk_show";

              let frm_bx = document.getElementById("enq_form_bx");
              frm_bx.className += " form_hide";
            },
            (error) => {
              console.log(error.text);
              setStatusMessage(`${error.text} happened`);
            }
          );
        e.target.reset();
      } else if (dprt_fld_glb === "Projects & Development") {
        console.log("you are selected Projects & Development");

        fetch(
          "https://script.google.com/macros/s/AKfycbx1VjbZ_gfx_OfppiJyIzRMH-eBtvWhiS9WPb8VSvMHj5uwE4_da0tziLWfV2inUG8H/exec",
          {
            method: "POST",
            body: new FormData(form_glb.current),
          }
        )
          .then(() => {
            console.log("SUCCESSFULLY SUBMITTED of Sticky form");
            setLoading(false);
          })
          .catch((err) => console.log(err));

        emailjs
          .sendForm(
            "service_e420df4",
            "template_a76d30l",
            e.target,
            "SsPYHKCapw4h-xBn_"
          )
          .then(
            (result) => {
              console.log(result.text);
              setStatusMessage("Your Message has been sent successfully");
              let bx = document.getElementById("thnk_box1");
              bx.className += " thnk_show";

              let frm_bx = document.getElementById("enq_form_bx");
              frm_bx.className += " form_hide";
            },
            (error) => {
              console.log(error.text);
              setStatusMessage(`${error.text} happened`);
            }
          );
        e.target.reset();
      } else {
        console.log("you are Not selected");
      }
    }
  };
  //---------------------------------------------------------------------------------------- Enquire Form code END

  //---------------------------------------------------------------------------------------- Book Visit Form code START
  const bk_vst_form_glb = useRef();

  const locationinput_bk_vst = React.useRef(null);
  const sectorinput_bk_vst = React.useRef(null);
  const dateinput_bk_vst = React.useRef(null);

  const nameinput_bk_vst = React.useRef(null);
  const emailinput_bk_vst = React.useRef(null);

  const phoneinput_bk_vst = React.useRef(null);
  const orginput_bk_vst = React.useRef(null);

  const msginput_bk_vst = React.useRef(null);

  // Book Visit Form  All field validation error hide code
  const handleFocus_bkvst = (e) => {
    e.target.classList.remove("error_line");

    let er1 = document.getElementById("nm_err_bk_vst");
    er1.classList.remove("show_error");

    let er1v = document.getElementById("nm_err_bk_vst1");
    er1v.classList.remove("show_error");

    let er2 = document.getElementById("eml_err_bk_vst");
    er2.classList.remove("show_error");

    let er2v = document.getElementById("eml_err1_bk_vst");
    er2v.classList.remove("show_error");

    let er3 = document.getElementById("org_err_bk_vst");
    er3.classList.remove("show_error");

    let er5 = document.getElementById("date_err_bk_vst");
    er5.classList.remove("show_error");

    let er6 = document.getElementById("msg_err_bk_vst");
    er6.classList.remove("show_error");

    let er6v = document.getElementById("msg_err_bk_vst1");
    er6v.classList.remove("show_error");

    let er7 = document.getElementById("sector_err_bk_vst");
    er7.classList.remove("show_error");

    let er8 = document.getElementById("locat_err_bk_vst");
    er8.classList.remove("show_error");
  };

  // Book Visit Form  Phone field validation error hide code
  const handleFocus_bkvst1 = (e) => {
    e.target.classList.remove("error_line");

    let er4 = document.getElementById("phn_err_bk_vst");
    er4.classList.remove("show_error");

    let er4v = document.getElementById("phn_err1_bk_vst");
    er4v.classList.remove("show_error");
  };

  // Book Visit Form action code
  const bk_vst_sendEmail = async (e) => {
    console.log("zaid");
    e.preventDefault();

    // Fields get value Code

    let locat_fld_bk_vst = locationinput_bk_vst.current.value;
    let sector_fld_bk_vst = sectorinput_bk_vst.current.value;
    let date_fld_bk_vst = dateinput_bk_vst.current.value;

    let name_fld_bk_vst = nameinput_bk_vst.current.value;
    let email_fld_bk_vst = emailinput_bk_vst.current.value;

    let org_fld_bk_vst = orginput_bk_vst.current.value;
    let phone_fld_bk_vst = phoneinput_bk_vst.current.value;

    let msg_fld_bk_vst = msginput_bk_vst.current.value;

    // Phone Regex Code
    let phone_fltr_bk_vst = document.getElementById("phone_fld_bk_vst");
    var mob_regx_bk_vst = /^([+][9][1]|[9][1]|[0]){0,1}([7-9]{1})([0-9]{9})$/;
    var mailformat_bk_vst = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var alpha_allwd = /^[A-Za-z ]+$/;

    // Fields validation Code
    if (locat_fld_bk_vst === "") {
      let v5 = document.getElementById("locat_fld_bk_vst");
      v5.className += " error_line";

      let er5 = document.getElementById("locat_err_bk_vst");
      er5.className += " show_error";
    } else if (date_fld_bk_vst === "") {
      let v8 = document.getElementById("date_fld_bk_vst");
      v8.className += " error_line";

      let er8 = document.getElementById("date_err_bk_vst");
      er8.className += " show_error";
    } else if (sector_fld_bk_vst === "") {
      let v7 = document.getElementById("sector_fld_bk_vst");
      v7.className += " error_line";

      let er7 = document.getElementById("sector_err_bk_vst");
      er7.className += " show_error";
    } else if (name_fld_bk_vst === "") {
      let v1 = document.getElementById("name_fld_bk_vst");
      v1.className += " error_line";

      let er1 = document.getElementById("nm_err_bk_vst");
      er1.className += " show_error";
    } else if (!name_fld_bk_vst.match(alpha_allwd)) {
      let v1 = document.getElementById("name_fld_bk_vst");
      v1.className += " error_line";

      let er1v = document.getElementById("nm_err_bk_vst1");
      er1v.className += " show_error";
    } else if (email_fld_bk_vst === "") {
      let v2 = document.getElementById("email_fld_bk_vst");
      v2.className += " error_line";

      let er2 = document.getElementById("eml_err_bk_vst");
      er2.className += " show_error";
    } else if (!email_fld_bk_vst.match(mailformat_bk_vst)) {
      let v2 = document.getElementById("email_fld_bk_vst");
      v2.className += " error_line";

      let er2v = document.getElementById("eml_err1_bk_vst");
      er2v.className += " show_error";
    } else if (phone_fld_bk_vst === "") {
      let v4 = document.getElementById("phone_fld_bk_vst");
      v4.className += " error_line";

      let er4 = document.getElementById("phn_err_bk_vst");
      er4.className += " show_error";
    } else if (!mob_regx_bk_vst.test(phone_fltr_bk_vst.value)) {
      let v4 = document.getElementById("phone_fld_bk_vst");
      v4.className += " error_line";

      let er4 = document.getElementById("phn_err1_bk_vst");
      er4.className += " show_error";
    } else if (org_fld_bk_vst === "") {
      let v3 = document.getElementById("org_fld_bk_vst");
      v3.className += " error_line";

      let er3 = document.getElementById("org_err_bk_vst");
      er3.className += " show_error";
    } else if (msg_fld_bk_vst === "") {
      let v6 = document.getElementById("msg_fld_bk_vst");
      v6.className += " error_line";

      let er6 = document.getElementById("msg_err_bk_vst");
      er6.className += " show_error";
    } else if (!msg_fld_bk_vst.match(alpha_allwd)) {
      let v6 = document.getElementById("msg_fld_bk_vst");
      v6.className += " error_line";

      let er6v = document.getElementById("msg_err_bk_vst1");
      er6v.className += " show_error";
    } else {
      if (
        locat_fld_bk_vst === "Farukhnagar-I" ||
        locat_fld_bk_vst === "Farukhnagar-II" ||
        locat_fld_bk_vst === "Delhi-I" ||
        locat_fld_bk_vst === "Delhi-II" ||
        locat_fld_bk_vst === "Bilaspur-II"
      ) {
        console.log("You have selected NORTH Zone Park");

        fetch(
          "https://script.google.com/macros/s/AKfycbxg37VAUtKWvT0jKRStPB-b2pvgSY5oUdN8r61Umd2IMWADbiLRGYrm-WQ20uFjx_AIlg/exec",
          {
            method: "POST",
            body: new FormData(bk_vst_form_glb.current),
          }
        )
          .then(() => {
            console.log("SUCCESSFULLY SUBMITTED");
            setLoading(false);
          })
          .catch((err) => console.log(err));

        emailjs
          .sendForm(
            "service_e420df4",
            "template_8xqcdvi",
            e.target,
            "SsPYHKCapw4h-xBn_"
          )
          .then(
            (result) => {
              console.log(result.text);
              setStatusMessage("Booking confirmed");

              let bx = document.getElementById("thnk_box_bk_vst");
              bx.className += " thnk_show";

              let frm_bx = document.getElementById("book_vst_form_bx");
              frm_bx.className += " form_hide";
            },
            (error) => {
              console.log(error.text);
              setStatusMessage(`${error.text} happened`);
            }
          );
        e.target.reset();
      } else if (
        locat_fld_bk_vst === "Bhayala" ||
        locat_fld_bk_vst === "Chakan-V"
      ) {
        console.log("You have selected WEST Zone Park");

        fetch(
          "https://script.google.com/macros/s/AKfycbxg37VAUtKWvT0jKRStPB-b2pvgSY5oUdN8r61Umd2IMWADbiLRGYrm-WQ20uFjx_AIlg/exec",
          {
            method: "POST",
            body: new FormData(bk_vst_form_glb.current),
          }
        )
          .then(() => {
            console.log("SUCCESSFULLY SUBMITTED");
            setLoading(false);
          })
          .catch((err) => console.log(err));

        emailjs
          .sendForm(
            "service_e420df4",
            "template_r9mkbyb",
            e.target,
            "SsPYHKCapw4h-xBn_"
          )
          .then(
            (result) => {
              console.log(result.text);
              setStatusMessage("Booking confirmed");

              let bx = document.getElementById("thnk_box_bk_vst");
              bx.className += " thnk_show";

              let frm_bx = document.getElementById("book_vst_form_bx");
              frm_bx.className += " form_hide";
            },
            (error) => {
              console.log(error.text);
              setStatusMessage(`${error.text} happened`);
            }
          );
        e.target.reset();
      } else if (
        locat_fld_bk_vst === "Kothur" ||
        locat_fld_bk_vst === "Patancheru" ||
        locat_fld_bk_vst === "Dobbaspet-I" ||
        locat_fld_bk_vst === "Hosur-I"
      ) {
        console.log("You have selected SOUTH Zone Park");

        fetch(
          "https://script.google.com/macros/s/AKfycbxg37VAUtKWvT0jKRStPB-b2pvgSY5oUdN8r61Umd2IMWADbiLRGYrm-WQ20uFjx_AIlg/exec",
          {
            method: "POST",
            body: new FormData(bk_vst_form_glb.current),
          }
        )
          .then(() => {
            console.log("SUCCESSFULLY SUBMITTED");
            setLoading(false);
          })
          .catch((err) => console.log(err));

        emailjs
          .sendForm(
            "service_e420df4",
            "template_a6m74s3",
            e.target,
            "SsPYHKCapw4h-xBn_"
          )
          .then(
            (result) => {
              console.log(result.text);
              setStatusMessage("Booking confirmed");

              let bx = document.getElementById("thnk_box_bk_vst");
              bx.className += " thnk_show";

              let frm_bx = document.getElementById("book_vst_form_bx");
              frm_bx.className += " form_hide";
            },
            (error) => {
              console.log(error.text);
              setStatusMessage(`${error.text} happened`);
            }
          );
        e.target.reset();
      }
    }
  };

  //---------------------------------------------------------------------------------------- Book Visit Form code END

  useEffect(() => {
    $(document).ready(function () {
      var url = window.location.pathname;

      // Old Url Redirection
      if (url === "/parks") {
        window.location.href = "/industrial-and-logistics-parks-in-india";
      }
      if (url === "/parks/delhi-i") {
        window.location.href = "/warehousing-park-delhi-i";
      }
      if (url === "/parks/delhi-ii") {
        window.location.href = "/warehousing-park-delhi-ii";
      }
      if (url === "/parks/chakan-ii") {
        window.location.href = "/industrial-and-warehousing-park-chakan-ii";
      }
      if (url === "/parks/chakan-v") {
        window.location.href = "/industrial-and-warehousing-park-chakan-v";
      }
      if (url === "/parks/dobbaspet-i") {
        window.location.href = "/industrial-and-warehousing-park-dobbaspet-i";
      }
      if (url === "/parks/dobbaspet-ii") {
        window.location.href = "/industrial-and-warehousing-park-dobbaspet-ii";
      }
      if (url === "/parks/bilaspur-i") {
        window.location.href = "/industrial-and-warehousing-park-bilaspur";
      }
      if (url === "/parks/bilaspur-ii") {
        window.location.href = "/industrial-and-warehousing-park-bilaspur";
      }
      if (url === "/warehousing-park-bilaspur-i") {
        window.location.href = "/industrial-and-warehousing-park-bilaspur";
      }
      if (url === "/warehousing-park-bilaspur-ii") {
        window.location.href = "/industrial-and-warehousing-park-bilaspur";
      }
      if (url === "/parks/farukhnagar") {
        window.location.href = "/warehousing-park-farukhnagar-i";
      }
      if (url === "/parks/patancheru") {
        window.location.href = "/industrial-and-warehousing-park-patancheru";
      }
      if (url === "/parks/malur") {
        window.location.href = "/warehousing-park-malur";
      }
      if (url === "/parks/verna") {
        window.location.href = "/industrial-and-warehousing-park-verna";
      }
      if (url === "/parks/bhayala") {
        window.location.href = "/industrial-and-warehousing-park-bhayala";
      }
      if (url === "/parks/hosur-i") {
        window.location.href = "/industrial-and-warehousing-park-hosur-i";
      }
      if (url === "/parks/kothur") {
        window.location.href = "/industrial-and-warehousing-park-kothur";
      }
      if (url === "/parks/koka") {
        window.location.href = "/warehousing-park-koka";
      }
      if (url === "/parks/Koka") {
        window.location.href = "/warehousing-park-koka";
      }
      if (url === "/Koka") {
        window.location.href = "/warehousing-park-koka";
      }

      // park_inside_page
      if (
        url === "/Delhi-NCR" ||
        url === "/Delhi_NCR" ||
        url === "/DELHI_NCR" ||
        url === "/DELHI_NCR" ||
        url === "/DELHI-NCR" ||
        url === "/delhi-ncr" ||
        url === "/delhi_ncr" ||
        url === "/Delhi_ncr"
      ) {
        window.location.href = "/warehousing-park-farukhnagar-i";
      }
      if (url === "/pune" || url === "/PUNE" || url === "/Pune") {
        window.location.href = "/industrial-and-warehousing-park-chakan-ii";
      }
      if (
        url === "/Ahmedabad" ||
        url === "/AHMEDABAD" ||
        url === "/ahmedabad"
      ) {
        window.location.href = "/industrial-and-warehousing-park-bhayala";
      }
      if (
        url === "/Hyderabad" ||
        url === "/HYDERABAD" ||
        url === "/hyderabad"
      ) {
        window.location.href = "/industrial-and-warehousing-park-kothur";
      }
      if (
        url === "/Bengaluru" ||
        url === "/BENGALURU" ||
        url === "/bengaluru"
      ) {
        window.location.href = "/industrial-and-warehousing-park-dobbaspet-i";
      }

      // Pages Name In hidden field
      if (url === "/") {
        let pg_name = "Home page";
        $("#enquiry_page_name").val(pg_name);
        $("#site_visit_page_name").val(pg_name);
      }

      if (url === "/industrial-and-logistics-parks-in-india") {
        let pg_name = "Parks page";
        $("#enquiry_page_name").val(pg_name);
        $("#site_visit_page_name").val(pg_name);
      }

      if (url === "/warehousing-park-farukhnagar-i") {
        let pg_name = "Farukhnagar I page";
        $("#enquiry_page_name").val(pg_name);
        $("#site_visit_page_name").val(pg_name);
      }

      if (url === "/warehousing-park-delhi-i") {
        let pg_name = "Delhi-i page";
        $("#enquiry_page_name").val(pg_name);
        $("#site_visit_page_name").val(pg_name);
      }

      if (url === "/warehousing-park-delhi-ii") {
        let pg_name = "Delhi-ii page";
        $("#enquiry_page_name").val(pg_name);
        $("#site_visit_page_name").val(pg_name);
      }

      if (url === "/industrial-and-warehousing-park-bilaspur") {
        let pg_name = "Bilaspur page";
        $("#enquiry_page_name").val(pg_name);
        $("#site_visit_page_name").val(pg_name);
      }

      if (url === "/industrial-and-warehousing-park-bilaspur") {
        let pg_name = "Bilaspur page";
        $("#enquiry_page_name").val(pg_name);
        $("#site_visit_page_name").val(pg_name);
      }

      if (url === "/industrial-and-warehousing-park-bhayala") {
        let pg_name = "Bhayala page";
        $("#enquiry_page_name").val(pg_name);
        $("#site_visit_page_name").val(pg_name);
      }

      if (url === "/industrial-and-warehousing-park-chakan-ii") {
        let pg_name = "Chakan-ii page";
        $("#enquiry_page_name").val(pg_name);
        $("#site_visit_page_name").val(pg_name);
      }

      if (url === "/industrial-and-warehousing-park-chakan-v") {
        let pg_name = "Chakan-v page";
        $("#enquiry_page_name").val(pg_name);
        $("#site_visit_page_name").val(pg_name);
      }

      if (url === "/industrial-and-warehousing-park-verna") {
        let pg_name = "Verna page";
        $("#enquiry_page_name").val(pg_name);
        $("#site_visit_page_name").val(pg_name);
      }

      if (url === "/industrial-and-warehousing-park-kothur") {
        let pg_name = "Kothur page";
        $("#enquiry_page_name").val(pg_name);
        $("#site_visit_page_name").val(pg_name);
      }

      if (url === "/industrial-and-warehousing-park-patancheru") {
        let pg_name = "Patancheru page";
        $("#enquiry_page_name").val(pg_name);
        $("#site_visit_page_name").val(pg_name);
      }

      if (url === "/industrial-and-warehousing-park-dobbaspet-i") {
        let pg_name = "Dobbaspet-i page";
        $("#enquiry_page_name").val(pg_name);
        $("#site_visit_page_name").val(pg_name);
      }

      if (url === "/industrial-and-warehousing-park-dobbaspet-ii") {
        let pg_name = "Dobbaspet-ii page";
        $("#enquiry_page_name").val(pg_name);
        $("#site_visit_page_name").val(pg_name);
      }

      if (url === "/industrial-and-warehousing-park-hosur-i") {
        let pg_name = "Hosur-i page";
        $("#enquiry_page_name").val(pg_name);
        $("#site_visit_page_name").val(pg_name);
      }

      if (url === "/industrial-and-warehousing-park-hosur-ii") {
        let pg_name = "Hosur-ii page";
        $("#enquiry_page_name").val(pg_name);
        $("#site_visit_page_name").val(pg_name);
      }

      if (url === "/warehousing-park-malur") {
        let pg_name = "Malur page";
        $("#enquiry_page_name").val(pg_name);
        $("#site_visit_page_name").val(pg_name);
      }

      if (url === "/warehousing-park-koka") {
        let pg_name = "Koka page";
        $("#enquiry_page_name").val(pg_name);
        $("#site_visit_page_name").val(pg_name);
      }

      // park_solution_page

      if (url === "/solutions") {
        let pg_name = "Solutions page";
        $("#enquiry_page_name").val(pg_name);
        $("#site_visit_page_name").val(pg_name);
      }

      if (url === "/solutions/strategic-land-acquisition") {
        let pg_name = "Strategic land acquisition page";
        $("#enquiry_page_name").val(pg_name);
        $("#site_visit_page_name").val(pg_name);
      }

      if (url === "/solutions/property-management") {
        let pg_name = "Property management page";
        $("#enquiry_page_name").val(pg_name);
        $("#site_visit_page_name").val(pg_name);
      }

      if (url === "/solutions/park-construction-and-development") {
        let pg_name = "Park construction and development page";
        $("#enquiry_page_name").val(pg_name);
        $("#site_visit_page_name").val(pg_name);
      }

      if (url === "/solutions/park-compliances-and-approvals") {
        let pg_name = "Park compliances and approvals page";
        $("#enquiry_page_name").val(pg_name);
        $("#site_visit_page_name").val(pg_name);
      }

      if (url === "/explore") {
        let pg_name = "Explore page";
        $("#enquiry_page_name").val(pg_name);
        $("#site_visit_page_name").val(pg_name);
      }

      if (url === "/explore#overview") {
        let pg_name = "Explore page";
        $("#enquiry_page_name").val(pg_name);
        $("#site_visit_page_name").val(pg_name);
      }

      if (url === "/explore#purpose_mission_vision") {
        let pg_name = "Explore page";
        $("#enquiry_page_name").val(pg_name);
        $("#site_visit_page_name").val(pg_name);
      }

      if (url === "/explore#leadership") {
        let pg_name = "Explore page";
        $("#enquiry_page_name").val(pg_name);
        $("#site_visit_page_name").val(pg_name);
      }

      if (url === "/explore#careers") {
        let pg_name = "Explore page";
        $("#enquiry_page_name").val(pg_name);
        $("#site_visit_page_name").val(pg_name);
      }

      if (url === "/sustainability") {
        let pg_name = "Sustainability page";
        $("#enquiry_page_name").val(pg_name);
        $("#site_visit_page_name").val(pg_name);
      }

      if (url === "/sustainability#environment") {
        let pg_name = "Sustainability page";
        $("#enquiry_page_name").val(pg_name);
        $("#site_visit_page_name").val(pg_name);
      }

      if (url === "/sustainability#social") {
        let pg_name = "Sustainability page";
        $("#enquiry_page_name").val(pg_name);
        $("#site_visit_page_name").val(pg_name);
      }

      if (url === "/sustainability#governance") {
        let pg_name = "Sustainability page";
        $("#enquiry_page_name").val(pg_name);
        $("#site_visit_page_name").val(pg_name);
      }

      if (url === "/contact") {
        let pg_name = "Contact page";
        $("#enquiry_page_name").val(pg_name);
        $("#site_visit_page_name").val(pg_name);
      }

      if (url === "/case-studies") {
        let pg_name = "Case Studies page";
        $("#enquiry_page_name").val(pg_name);
        $("#site_visit_page_name").val(pg_name);
      }

      if (url === "/blogs") {
        let pg_name = "Blog page";
        $("#enquiry_page_name").val(pg_name);
        $("#site_visit_page_name").val(pg_name);
      }

      var elsc_pg_url = window.location.pathname;

      if (elsc_pg_url === "/parks-availability") {
        $(".book_vst_sticky_btn").hide();
        $(".enq_sticky_btn").hide();
      }
      if (elsc_pg_url === "/parks-availability-north") {
        $(".book_vst_sticky_btn").hide();
        $(".enq_sticky_btn").hide();
      }
      if (elsc_pg_url === "/parks-availability-south") {
        $(".book_vst_sticky_btn").hide();
        $(".enq_sticky_btn").hide();
      }
      if (elsc_pg_url === "/parks-availability-west") {
        $(".book_vst_sticky_btn").hide();
        $(".enq_sticky_btn").hide();
      }

      var d = new Date();
      var month = d.getMonth() + 1;
      var day = d.getDate();

      // var output = d.getFullYear() + '/' +
      //     (('' + month).length < 2 ? '0' : '') + month + '/' +
      //     (('' + day).length < 2 ? '0' : '') + day;
      var enquire_now =
        day +
        "/" +
        (("" + month).length < 2 ? "0" : "") +
        month +
        "/" +
        (("" + day).length < 2 ? "0" : "") +
        d.getFullYear();

      $("#enquiry_current_date").val(enquire_now);

      $(".cont_enq").on("change", function () {
        var enq_nm = this.value;
        if (enq_nm === "Leasing") {
          console.log("You are selected leasing enquire");
          $(".pkr_lc_fld_dv").addClass("leasing_fld_show");
          $(".spc_rq_fld_dv").addClass("leasing_fld_show");
          let empty_vrbl = "";
          $("#park_lsng_fld").val(empty_vrbl);
          $("#space_lsng_fld").val(empty_vrbl);
        } else {
          console.log("You are selected other enquire");
          $(".pkr_lc_fld_dv").removeClass("leasing_fld_show");
          $(".spc_rq_fld_dv").removeClass("leasing_fld_show");
          let empty_vrbl = "-";
          $("#park_lsng_fld").val(empty_vrbl);
          $("#space_lsng_fld").val(empty_vrbl);
        }
      });
    });

    // Search Page hide & show code
    $(".search_box").on("click", function () {
      $(".scrollbar-track.scrollbar-track-y").css("display", "none");
      $(".search_div").css("z-index", "999");
      $(".search_div").css("opacity", "1");
    });
    $(".cls-btn").on("click", function () {
      $(".scrollbar-track.scrollbar-track-y").css("display", "block");
      $(".search_div").css("z-index", "-2");
      $(".search_div").css("opacity", "0");
    });

    // Global Enquire Form hide & show code
    $(".enq_sticky_btn").on("click", function () {
      $(".enquire_from_div").css("transform", "translateX(0%)");
      $(".enquire_overlay").fadeIn();
      $("body").css("overflow", "hidden");
    });

    $(".cta_btn").on("click", function () {
      $(".enquire_from_div").css("transform", "translateX(0%)");
      $(".enquire_overlay").fadeIn();
      $("body").css("overflow", "hidden");
      // alert('sssszdf')
    });
    $(".enq_close_btn").on("click", function () {
      $(".enquire_from_div").css("transform", "translateX(101%)");
      $(".enquire_overlay").fadeOut();
      $("body").css("overflow-y", "auto");
    });
    $(".enquire_overlay").on("click", function () {
      $(".enquire_from_div").css("transform", "translateX(101%)");
      $(".enquire_overlay").fadeOut();
      $("body").css("overflow-y", "auto");
    });

    // Book visit Form hide & show code
    $(".book_visit_btn").on("click", function () {
      $(".book_visit_from_div").css("transform", "translateX(0%)");
      $(".enquire_overlay").fadeIn();
      $("body").css("overflow", "hidden");
    });
    $(".enq_close_btn").on("click", function () {
      $(".book_visit_from_div").css("transform", "translateX(101%)");
      $(".enquire_overlay").fadeOut();
      $("body").css("overflow-y", "auto");
    });
    $(".enquire_overlay").on("click", function () {
      $(".book_visit_from_div").css("transform", "translateX(101%)");
      $(".enquire_overlay").fadeOut();
      $("body").css("overflow-y", "auto");
    });

    // Snap Scroll Code here
    // var selector = ".snap_sec";
    // var $slides = $(selector);

    // var currentSlide = 0;
    // var isAnimating = false;

    // var stopAnimation = function() {
    //   setTimeout(function() {
    //     isAnimating = false;
    //   }, 300);
    // };

    // var bottomIsReached = function($elem) {
    //   var rect = $elem[0].getBoundingClientRect();
    //   return rect.bottom <= $(window).height();
    // };

    // var topIsReached = function($elem) {
    //   var rect = $elem[0].getBoundingClientRect();
    //   return rect.top >= 0;
    // };

    // document.addEventListener(
    //   "wheel",
    //   function(event) {
    //     var $currentSlide = $($slides[currentSlide]);

    //     if (isAnimating) {
    //       event.preventDefault();
    //       return;
    //     }

    //     var direction = -event.deltaY;

    //     if (direction < 0) {
    //       // next
    //       if (currentSlide + 1 >= $slides.length) return;
    //       if (!bottomIsReached($currentSlide)) return;
    //       event.preventDefault();
    //       currentSlide++;
    //       var $slide = $($slides[currentSlide]);
    //       var offsetTop = $slide.offset().top;
    //       isAnimating = true;
    //       $("html, body").animate(
    //         {
    //           scrollTop: offsetTop
    //         },
    //         1000,
    //         stopAnimation
    //       );
    //     } else {
    //       // back
    //       if (currentSlide - 1 < 0) return;
    //       if (!topIsReached($currentSlide)) return;
    //       event.preventDefault();
    //       currentSlide--;
    //       var $slide = $($slides[currentSlide]);
    //       var offsetTop = $slide.offset().top;
    //       isAnimating = true;
    //       $("html, body").animate(
    //         {
    //           scrollTop: offsetTop
    //         },
    //         1000,
    //         stopAnimation
    //       );
    //     }
    //   },
    //   { passive: false }
    // );
  });
  const resultinput = React.useRef(null);
  const sendResult = (e) => {
    e.preventDefault();

    let resultinput_var = resultinput.current.value;
    window.location.href = "/search/" + resultinput_var;
  };
  //   dynamic page name & date through url
  const CustomRoute = () => {
    const currentSlug = useParams().slug;

    if (
      currentSlug == "karnataka" ||
      currentSlug == "maharashtra" ||
      currentSlug == "telangana" ||
      currentSlug == "tamil-nadu" ||
      currentSlug == "goa" ||
      currentSlug == "gujarat" ||
      currentSlug == "haryana" ||
      currentSlug == "delhi"
    ) {
      return <State_page initialData={initialData} />;
    } else {
      return <Park_inside_page initialData={initialData} />;
    }
  };

  return (
    <>
      {/* <Scroll/> */}

      <ScrollToTop />
      {/* <SmoothScroll/> */}
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/index.php" element={<Home />} />
        <Route
          exact
          path="/industrial-and-logistics-parks-in-india"
          element={<Park_page />}
        />
        {/* <Route exact path="/:slug" element={<Park_inside_page />} /> */}
        <Route exact path="/:slug" element={<CustomRoute />} />
        {/* <Route exact path="/sitemap.xml" element={null} /> */}
        <Route exact path="/search/:name" element={<Search_page />} />
        <Route exact path="/explore" element={<Explore_page />} />
        <Route exact path="/sustainability" element={<Esg_page />} />
        <Route exact path="/solutions" element={<Solution_page />} />
        <Route
          exact
          path="/solutions/strategic-land-acquisition"
          element={<Strategic_land_acquisition_page />}
        />
        <Route
          exact
          path="/solutions/property-management"
          element={<Property_management_page />}
        />
        <Route
          exact
          path="/solutions/park-construction-and-development"
          element={<Park_const_developed_page />}
        />
        <Route
          exact
          path="/solutions/park-compliances-and-approvals"
          element={<Park_comp_app_page />}
        />

        <Route exact path="/contact" element={<Contact_page />} />

        <Route
          exact
          path="/press_releases/:slug"
          element={<Press_release_page initialData={initialData} />}
        />
        <Route
          exact
          path="/media/press_releases/:slug"
          element={<Press_release_page initialData={initialData} />}
        />
        <Route exact path="/privacy_policy" element={<Privacy_policy />} />
        <Route exact path="/disclaimer" element={<Disclaimer_page />} />

        <Route
          exact
          path="/blog"
          element={<Blog_page initialData={initialData} />}
        />
        <Route
          exact
          path="/blog/:slug"
          element={<Blog_inside_page initialData={initialData} />}
        />

        <Route
          exact
          path="/maharashtra/:slug"
          element={<Mh_microblog_inside_page initialData={initialData} />}
        />

        <Route
          exact
          path="/gujarat/:slug"
          element={<Gujarat_microblog_inside_page initialData={initialData} />}
        />

        <Route
          exact
          path="/delhi/:slug"
          element={<Delhi_microblog_inside_page initialData={initialData} />}
        />
        <Route
          exact
          path="/goa/:slug"
          element={<Goa_microblog_inside_page initialData={initialData} />}
        />
        <Route
          exact
          path="/haryana/:slug"
          element={<Haryana_microblog_inside_page initialData={initialData} />}
        />
        <Route
          exact
          path="/karnataka/:slug"
          element={
            <Karnataka_microblog_inside_page initialData={initialData} />
          }
        />
        <Route
          exact
          path="/tamil-nadu/:slug"
          element={
            <Tamil_nadu_microblog_inside_page initialData={initialData} />
          }
        />
        <Route
          exact
          path="/telangana/:slug"
          element={
            <Telangana_microblog_inside_page initialData={initialData} />
          }
        />

        <Route
          exact
          path="/blog/category/:slug"
          element={<Blog_category_page />}
        />
        <Route
          exact
          path="/blog/tags/:id"
          element={<Blog_tags_page initialData={initialData} />}
        />
        <Route
          exact
          path="/case-studies"
          element={<Client_page initialData={initialData} />}
        />
        <Route
          exact
          path="/case-studies/:slug"
          element={<Client_inside_pg initialData={initialData} />}
        />
        <Route
          exact
          path="/events"
          element={<Event_page initialData={initialData} />}
        />
        <Route
          exact
          path="/events/:slug"
          element={<Event_page initialData={initialData} />}
        />

        <Route
          exact
          path="/event/:slug"
          element={<Home initialData={initialData} />}
        />

        <Route
          exact
          path="/media"
          element={<Media_page initialData={initialData} press={press} />}
        />
        <Route
          exact
          path="/media/:slug"
          element={<Media_page initialData={initialData} press={press} />}
        />

        <Route exact path="/parks-availability" element={<Elsc_page />} />

        <Route
          exact
          path="/parks-availability-north"
          element={<Pa_north_page />}
        />

        <Route
          exact
          path="/parks-availability-south"
          element={<Pa_south_page />}
        />

        <Route
          exact
          path="/parks-availability-west"
          element={<Pa_west_page />}
        />

        <Route path="*" element={<Error_page />} />
        <Route path="/page-not-found" element={<Error_page />} />
        <Route path="/faq" element={<Faq_page />} />
      </Routes>
      {/*Enquire Sticky Button  */}
      <a className="enq_sticky_btn">Enquire Now</a>

      {/*Book visit btn Sticky Button  */}
      <a className="book_vst_sticky_btn book_visit_btn">Book a site visit</a>

      {/* Search box Overlay     */}
      <div className="search_div">
        <div className="cls-btn">
          <span className="line1"></span>
          <span className="line2"></span>
        </div>
        <div className="row srch-row">
          <div className="col-12">
            <form onSubmit={sendResult}>
              <input
                className="srch-input"
                type="text"
                placeholder="Search here..."
                ref={resultinput}
              />
              <button type="submit" className="srch-btn">
                <img
                  src={require("./assets/img/svg/search_icon_blk.svg")}
                ></img>
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="enquire_overlay"></div>

      {/*------ Enquire Form Popup start ------    */}
      <div className="enquire_from_div">
        <img
          className="enq_close_btn"
          src={require("./assets/img/svg/close_icon_wht.svg")}
        ></img>
        <h4 className="section_sub_heading ">CONNECT WITH US</h4>

        <div className="enquire_from">
          <form
            className="row g-3 conversion_form enquire_global_form"
            ref={form_glb}
            onSubmit={sendEmail}
            id="enq_form_bx"
          >
            <input
              className="page_name"
              type="hidden"
              name="Page_name"
              id="enquiry_page_name"
            />

            <input
              className="current_date"
              type="hidden"
              name="Date"
              id="enquiry_current_date"
            />

            <div className="col-xl-6 col-lg-12 col-md-12 col-12 conv_frm_spc">
              <label className="form-label conv_frm_label">Name</label>
              <input
                type="text"
                name="name"
                className="form-control"
                id="name_fld_glb"
                ref={nameinput_glb}
                onFocus={handleFocus}
              />
              <p className="error_msg" id="nm_err_frmglb">
                Please Enter Name
              </p>
              <p className="error_msg" id="nm_err_frmglb1">
                Letters and space only.
              </p>
            </div>
            <div className="col-xl-6 col-lg-12  col-md-12 col-12 conv_frm_spc">
              <label className="form-label">Email Address</label>
              <input
                type="email"
                name="email"
                className="form-control"
                id="email_fld_glb"
                ref={emailinput_glb}
                onFocus={handleFocus}
              />
              <p className="error_msg" id="eml_err_frmglb">
                Please Enter Email Address
              </p>
              <p className="error_msg" id="eml_err1_frmglb">
                Please Enter Valid Email
              </p>
            </div>
            <div className="col-xl-6 col-lg-12  col-md-12 col-12 conv_frm_spc">
              <label className="form-label">Organisation</label>
              <input
                type="text"
                name="organisation"
                className="form-control"
                id="org_fld_glb"
                ref={orginput_glb}
                onFocus={handleFocus}
              />
              <p className="error_msg" id="cmp_err_glb">
                Please Enter Organisation
              </p>
            </div>
            <div className="col-xl-6 col-lg-12 col-md-12 col-12 conv_frm_spc">
              <label className="form-label">Phone No</label>
              <input
                type="number"
                name="phone"
                className="form-control"
                id="phone_fld_glb"
                ref={phoneinput_glb}
                onFocus={handleFocus11}
              />
              <p className="error_msg" id="phn_err_glb">
                Please Enter Phone Numbers
              </p>
              <p className="error_msg" id="phn_err1_glb">
                Please Enter Valid Phone Numbers
              </p>
            </div>

            <div className="col-12 conv_frm_spc select_drp">
              <label className="form-label">Type of Enquiry</label>
              <select
                className="form-control enq_frm_slct enq_global_form cont_enq"
                name="enquiry"
                id="dprt_fld_glb"
                ref={departinput_glb}
                onFocus={handleFocus}
              >
                <option value="">Select Type of Enquiry</option>
                <option value="Leasing">Leasing</option>
                <option value="Land & Warehouse Investments">
                  Land {"&"} Warehouse Investments
                </option>
                <option value="HR & Admin">HR {"&"} Admin</option>
                <option value="Media / Marketing">Media / Marketing</option>
                <option value="Projects & Development">
                  Projects {"&"} Development
                </option>
              </select>
              <p className="error_msg" id="depart_err_glb">
                Please Select Type of Enquiry
              </p>
            </div>

            <div className="col-md-6 conv_frm_spc pkr_lc_fld_dv">
              <label className="form-label conv_frm_label">Park location</label>
              <input
                type="text"
                name="park_location"
                className="form-control"
                id="park_lsng_fld"
                ref={parkinput_lsng}
                onFocus={handleFocus}
              />
              <p className="error_msg" id="prk_err_lsng_glb">
                Please Enter Park Location
              </p>
            </div>
            <div className="col-md-6 conv_frm_spc spc_rq_fld_dv">
              <label className="form-label conv_frm_label">
                Space Required
              </label>
              <input
                type="text"
                name="space_required"
                className="form-control"
                id="space_lsng_fld"
                ref={spaceinput_lsng}
                onFocus={handleFocus}
                placeholder="1,00,000 SQFT"
              />
              <p className="error_msg" id="spc_err_lsng_glb">
                Please Enter Space
              </p>
            </div>

            <div className="col-12 conv_frm_spc">
              <label className="form-label">Tell Us More</label>
              {/* <input type="text" className="form-control" id='msg_fld' placeholder="Enter your message" ref={msginput} onFocus={handleFocus}/> */}
              <textarea
                className="form-control req_txt"
                name="message"
                id="msg_fld_glb"
                placeholder="Enter your message"
                ref={msginput_glb}
                onFocus={handleFocus}
                rows="4"
                cols="50"
              ></textarea>
              <p className="error_msg" id="msg_err_tellglb">
                Please Enter Message
              </p>
              <p className="error_msg" id="msg_err_tellglb1">
                Letters and space only.
              </p>
            </div>

            <div className="col-12 btn_col">
              <input
                type="submit"
                className="btn btn-primary conv_btn cont_form_btn"
                value="Submit"
              ></input>
            </div>
          </form>

          <p className="thnk txt_wht" id="thnk_box1">
            Your form has been sent successfully
          </p>
        </div>
      </div>
      {/*------ Enquire Form Popup End ------    */}

      {/*------ Book Visit Form Popup start ------    */}
      <div className="book_visit_from_div">
        <img
          className="enq_close_btn"
          src={require("./assets/img/svg/close_icon_wht.svg")}
        ></img>
        <h4 className="section_sub_heading ">Book A Site Visit</h4>

        <div className="enquire_from">
          <form
            className="row g-3 conversion_form enquire_global_form"
            ref={bk_vst_form_glb}
            onSubmit={bk_vst_sendEmail}
            id="book_vst_form_bx"
          >
            <input
              className="page_name"
              type="hidden"
              name="Page_name"
              id="site_visit_page_name"
            />

            <div className="col-xl-6 col-lg-12 col-md-12 col-12 conv_frm_spc select_drp">
              <label className="form-label">Location</label>
              <select
                className="form-control enq_frm_slct park_dropdown enq_global_form"
                name="location"
                id="locat_fld_bk_vst"
                ref={locationinput_bk_vst}
                onFocus={handleFocus_bkvst}
              >
                <option value="">- Select Park -</option>
                <option value="Farukhnagar-I">Farukhnagar I</option>
                <option value="Farukhnagar-II">Farukhnagar II</option>
                <option value="Delhi-I">Delhi I</option>
                <option value="Delhi-II">Delhi II</option>
                <option value="Bilaspur">Bilaspur</option>
                <option value="Kothur">Kothur</option>
                <option value="Patancheru">Patancheru</option>
                <option value="Hosur-I">Hosur I</option>
                <option value="Dobbaspet-I">Dobbaspet I</option>
                <option value="Dobbaspet=II">Dobbaspet II</option>
                <option value="Chakan-V">Chakan V</option>
                <option value="Bhayala">Bhayala</option>
              </select>
              <p className="error_msg" id="locat_err_bk_vst">
                Please Select Park
              </p>
            </div>

            <div className="col-xl-6 col-lg-12 col-md-12 col-12 conv_frm_spc">
              <label className="form-label conv_frm_label">Select Date</label>
              <input
                type="date"
                className="form-control"
                name="date"
                id="date_fld_bk_vst"
                placeholder="DD-MM-YYYY"
                ref={dateinput_bk_vst}
                onFocus={handleFocus_bkvst}
              />
              <p className="error_msg" id="date_err_bk_vst">
                Please Enter Date
              </p>
            </div>

            <div className="col-xl-12 col-lg-12 col-md-12 col-12 conv_frm_spc select_drp">
              <label className="form-label">Sector</label>
              <select
                className="form-control enq_frm_slct enq_global_form cont_enq"
                name="sector"
                id="sector_fld_bk_vst"
                ref={sectorinput_bk_vst}
                onFocus={handleFocus_bkvst}
              >
                <option value="" disabled>
                  - Select Sector -
                </option>
                <option value="3PL">3PL</option>
                <option value="Automobile">Automobile</option>
                <option value="Automotive Ancillary">
                  Automotive Ancillary
                </option>
                <option value="Construction Materials">
                  Construction Materials
                </option>
                <option value="Consumer Durable">Consumer Durable</option>
                <option value="E-Commerce">E-Commerce</option>
                <option value="Electronics">Electronics</option>
                <option value="Engineering">Engineering</option>
                <option value="FMCD">FMCD</option>
                <option value="FMCG">FMCG</option>
                <option value="IT">IT</option>
                <option value="Pharma">Pharma</option>
                <option value="Renewable Energy">Renewable Energy</option>
                <option value="Retail">Retail</option>
                <option value="Others">Others</option>
              </select>
              <p className="error_msg" id="sector_err_bk_vst">
                Please Select Sector
              </p>
            </div>

            {/* <div className="col-xl-12 col-lg-12 col-md-12 col-12 conv_frm_spc"></div> */}

            <div className="col-xl-6 col-lg-12 col-md-12 col-12 conv_frm_spc">
              <label className="form-label conv_frm_label">Name</label>
              <input
                type="text"
                name="name"
                className="form-control"
                id="name_fld_bk_vst"
                ref={nameinput_bk_vst}
                onFocus={handleFocus_bkvst}
              />
              <p className="error_msg" id="nm_err_bk_vst">
                Please Enter Name
              </p>
              <p className="error_msg" id="nm_err_bk_vst1">
                Letters and space only.
              </p>
            </div>
            <div className="col-xl-6 col-lg-12  col-md-12 col-12 conv_frm_spc">
              <label className="form-label">Email Address</label>
              <input
                type="email"
                name="email"
                className="form-control"
                id="email_fld_bk_vst"
                ref={emailinput_bk_vst}
                onFocus={handleFocus_bkvst}
              />
              <p className="error_msg" id="eml_err_bk_vst">
                Please Enter Email Address
              </p>
              <p className="error_msg" id="eml_err1_bk_vst">
                Please Enter Valid Email
              </p>
            </div>
            <div className="col-xl-6 col-lg-12 col-md-12 col-12 conv_frm_spc">
              <label className="form-label">Phone No</label>
              <input
                type="number"
                name="phone"
                className="form-control"
                id="phone_fld_bk_vst"
                ref={phoneinput_bk_vst}
                onFocus={handleFocus_bkvst1}
              />
              <p className="error_msg" id="phn_err_bk_vst">
                Please Enter Phone Numbers
              </p>
              <p className="error_msg" id="phn_err1_bk_vst">
                Please Enter Valid Phone Numbers
              </p>
            </div>
            <div className="col-xl-6 col-lg-12  col-md-12 col-12 conv_frm_spc">
              <label className="form-label">Organisation</label>
              <input
                type="text"
                name="organisation"
                className="form-control"
                id="org_fld_bk_vst"
                ref={orginput_bk_vst}
                onFocus={handleFocus_bkvst}
              />
              <p className="error_msg" id="org_err_bk_vst">
                Please Enter Organisation
              </p>
            </div>

            <div className="col-12 conv_frm_spc">
              <label className="form-label">Tell Us More</label>
              {/* <input type="text" className="form-control" id='msg_fld' placeholder="Enter your message" ref={msginput} onFocus={handleFocus}/> */}
              <textarea
                className="form-control req_txt"
                name="message"
                id="msg_fld_bk_vst"
                placeholder="Enter your message"
                ref={msginput_bk_vst}
                onFocus={handleFocus_bkvst}
                rows="4"
                cols="50"
              ></textarea>
              <p className="error_msg" id="msg_err_bk_vst">
                Please Enter Message
              </p>
              <p className="error_msg" id="msg_err_bk_vst1">
                Letters and space only.
              </p>
            </div>

            <div className="col-12 btn_col">
              <input
                type="submit"
                className="btn btn-primary conv_btn cont_form_btn"
                value="Submit"
              ></input>
            </div>
          </form>

          <p className="thnk txt_wht" id="thnk_box_bk_vst">
            Your Booking Confirmed
          </p>
        </div>
      </div>
      {/*------ Book Visit Form Popup End ------    */}
    </>
  );
}

export default App;
