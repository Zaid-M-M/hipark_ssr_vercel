import React from "react";
import "../../assets/css/footer.css";
import Cta from "../sections/cta";
import { Link } from "react-router-dom";
import { useState, useRef } from "react";
import $ from "jquery";
import { useEffect } from "react";
import { authentication } from "../../firebase-config";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";

import emailjs from "emailjs-com";
export default function Footer() {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

  useEffect(() => {
    $(document).ready(function () {
        var url = window.location.pathname;
    
        if (url === "/") {
          let pg_name = "Home page";
          $("#footer_page_name").val(pg_name);
        }
    
        // park_overview
    
        if (url === "/industrial-and-logistics-parks-in-india") {
          let pg_name = "Parks page";
          $("#footer_page_name").val(pg_name);
        }
    
        // park_inside_page
    
        if (url === "/warehousing-park-farukhnagar-i") {
          let pg_name = "Farukhnagar I page";
          $("#footer_page_name").val(pg_name);
        }

        if (url === "/warehousing-park-farukhnagar-ii") {
          let pg_name = "Farukhnagar II page";
          $("#footer_page_name").val(pg_name);
        }
    
        if (url === "/warehousing-park-delhi-i") {
          let pg_name = "Delhi-i page";
          $("#footer_page_name").val(pg_name);
        }
    
        if (url === "/warehousing-park-delhi-ii") {
          let pg_name = "Delhi-ii page";
          $("#footer_page_name").val(pg_name);
        }
    
        if (url === "/warehousing-park-bilaspur-i") {
          let pg_name = "Bilaspur-i page";
          $("#footer_page_name").val(pg_name);
        }
    
        if (url === "/warehousing-park-bilaspur-ii") {
          let pg_name = "Bilaspur-ii page";
          $("#footer_page_name").val(pg_name);
        }
    
        if (url === "/industrial-and-warehousing-park-bhayala") {
          let pg_name = "Bhayala page";
          $("#footer_page_name").val(pg_name);
        }
    
        if (url === "/industrial-and-warehousing-park-chakan-ii") {
          let pg_name = "Chakan-ii page";
          $("#footer_page_name").val(pg_name);
        }
    
        if (url === "/industrial-and-warehousing-park-chakan-v") {
          let pg_name = "Chakan-v page";
          $("#footer_page_name").val(pg_name);
        }
    
        if (url === "/industrial-and-warehousing-park-verna") {
          let pg_name = "Verna page";
          $("#footer_page_name").val(pg_name);
        }
    
        if (url === "/industrial-and-warehousing-park-kothur") {
          let pg_name = "Kothur page";
          $("#footer_page_name").val(pg_name);
        }
    
        if (url === "/industrial-and-warehousing-park-patancheru") {
          let pg_name = "Patancheru page";
          $("#footer_page_name").val(pg_name);
        }
    
        if (url === "/industrial-and-warehousing-park-dobbaspet-i") {
          let pg_name = "Dobbaspet-i page";
          $("#footer_page_name").val(pg_name);
        }
    
        if (url === "/industrial-and-warehousing-park-dobbaspet-ii") {
          let pg_name = "Dobbaspet-ii page";
          $("#footer_page_name").val(pg_name);
        }
    
        if (url === "/industrial-and-warehousing-park-hosur-i") {
          let pg_name = "Hosur-i page";
          $("#footer_page_name").val(pg_name);
        }
    
        if (url === "/industrial-and-warehousing-park-hosur-ii") {
          let pg_name = "Hosur-ii page";
          $("#footer_page_name").val(pg_name);
        }
    
        if (url === "/warehousing-park-malur") {
          let pg_name = "Malur page";
          $("#footer_page_name").val(pg_name);
        }
    
        if (url === "/koka") {
          let pg_name = "Koka page";
          $("#footer_page_name").val(pg_name);
        }
    
        // park_solution_page
    
        if (url === "/solutions") {
          let pg_name = "Solutions page";
          $("#footer_page_name").val(pg_name);
        }
    
        if (url === "/explore") {
          let pg_name = "Explore page";
          $("#footer_page_name").val(pg_name);
        }
    
        if (url === "/explore#overview") {
          let pg_name = "Explore page";
          $("#footer_page_name").val(pg_name);
        }
    
        if (url === "/explore#purpose_mission_vision") {
          let pg_name = "Explore page";
          $("#footer_page_name").val(pg_name);
        }
    
        if (url === "/explore#leadership") {
          let pg_name = "Explore page";
          $("#footer_page_name").val(pg_name);
        }
    
        if (url === "/explore#careers") {
          let pg_name = "Explore page";
          $("#footer_page_name").val(pg_name);
        }
    
        if (url === "/sustainability") {
          let pg_name = "Sustainability page";
          $("#footer_page_name").val(pg_name);
        }
    
        if (url === "/sustainability#environment") {
          let pg_name = "Sustainability page";
          $("#footer_page_name").val(pg_name);
        }
    
        if (url === "/sustainability#social") {
          let pg_name = "Sustainability page";
          $("#footer_page_name").val(pg_name);
        }
    
        if (url === "/sustainability#governance") {
          let pg_name = "Sustainability page";
          $("#footer_page_name").val(pg_name);
        }
    
        if (url === "/contact") {
          let pg_name = "Contact page";
          $("#footer_page_name").val(pg_name);
        }
    
        if (url === "/solutions/strategic-land-acquisition") {
          let pg_name = "Strategic Land Acquisition Page";
          $("#footer_page_name").val(pg_name);
        }
        if (url === "/solutions/park-compliances-and-approvals") {
          let pg_name = "Park Compliances & Approvals Page";
          $("#footer_page_name").val(pg_name);
        }
        if (url === "/solutions/park-construction-and-development") {
          let pg_name = "Park Construction & Development Page";
          $("#footer_page_name").val(pg_name);
        }
        if (url === "/solutions/property-management") {
          let pg_name = "Property Management Page";
          $("#footer_page_name").val(pg_name);
        }
    
        var d = new Date();
        var month = d.getMonth() + 1;
        var day = d.getDate();
    
        // var output = d.getFullYear() + '/' +
        //     (('' + month).length < 2 ? '0' : '') + month + '/' +
        //     (('' + day).length < 2 ? '0' : '') + day;
        var footer_date =
          day +
          "/" +
          (("" + month).length < 2 ? "0" : "") +
          month +
          "/" +
          (("" + day).length < 2 ? "0" : "") +
          d.getFullYear();
    
        $("#footer_current_date").val(footer_date);
      });
      
    $("#otpInput").on("click", function () {
      $(".otp_msg").css("display", "none");
    });

    $(".dnld_btn").on("click", function () {
      console.log("download button working");
    });
  });

  const nameinput_b = React.useRef(null);
  const phoneinput_b = React.useRef(null);
  const emailinput_b = React.useRef(null);

  // All field validation error hide code
  const handleFocus = (e) => {
    let er1 = document.getElementById("nm_err_b");
    er1.classList.remove("show_error");

    let er1v = document.getElementById("nm_err_b1");
    er1v.classList.remove("show_error");

    let er4 = document.getElementById("eml_err_b");
    er4.classList.remove("show_error");

    let er4v = document.getElementById("eml_err1_b");
    er4v.classList.remove("show_error");
  };

  // Phone field validation error hide code
  const handleFocus1 = (e) => {
    // e.target.classList.remove("error_line");

    let er2 = document.getElementById("phn_err_b");
    er2.classList.remove("show_error");

    let er2v = document.getElementById("phn_err1_b");
    er2v.classList.remove("show_error");
  };

  const countryCode = "+91";

  const [phoneNumber, setPhoneNumber] = useState(countryCode);
  const [OTP, setOTP] = useState("");
  const [email, setEmail] = useState(null);

  const state = {
    button: 1,
  };

  const generateRecaptcha = () => {
    window.recaptchaVerifier = new RecaptchaVerifier(
      "recaptcha-container",
      {
        size: "invisible",
        callback: (response) => {},
      },
      authentication
    );
  };

  const requestOTP = (e) => {
    e.preventDefault();

    if (state.button === 1) {
      console.log("Button 1 clicked!");

      if (phoneNumber.length == 13) {
        generateRecaptcha();
        let appverifier = window.recaptchaVerifier;
        signInWithPhoneNumber(authentication, phoneNumber, appverifier)
          .then((confirmationResult) => {
            window.confirmationResult = confirmationResult;

            let otp_msg = document.getElementById("otp_msg");
            otp_msg.className += " otp_msg_show";

            let phone_msg = document.getElementById("phone_error");
            phone_msg.classList.remove("otp_err_Show");
            // console.log('valid Mobile no');
            console.log(phoneNumber.length);
          })
          .catch((error) => {
            console.log(error);
            console.log(phoneNumber.length);
          });
      } else {
        let phone_msg = document.getElementById("phone_error");
        phone_msg.className += " otp_err_Show";
      }
    }
    if (state.button === 2) {
      console.log("Button 2 clicked!");

      // Fields get value Code
      let name_fld_b = nameinput_b.current.value;
      let email_fld_b = emailinput_b.current.value;
      let phone_fld_b = phoneinput_b.current.value;

      // Phone Regex Code
      let phone_fltr_b = document.getElementById("phoneNumberInput");
      var mob_regx_b = /^([+][9][1]|[9][1]|[0]){0,1}([7-9]{1})([0-9]{9})$/;
      var mailformat_b = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      var alpha_allwd = /^[A-Za-z ]+$/;

      if (name_fld_b == "") {
        let er1 = document.getElementById("nm_err_b");
        er1.className += " show_error";
      } else if (!name_fld_b.match(alpha_allwd)) {
        let er1v = document.getElementById("nm_err_b1");
        er1v.className += " show_error";
      } else if (phone_fld_b == "") {
        let er2 = document.getElementById("phn_err_b");
        er2.className += " show_error";
      } else if (!mob_regx_b.test(phone_fltr_b.value)) {
        let er2 = document.getElementById("phn_err1_b");
        er2.className += " show_error";
      } else if (email_fld_b == "") {
        let v4 = document.getElementById("email_fld_b");
        v4.className += " error_line";

        let er4 = document.getElementById("eml_err_b");
        er4.className += " show_error";
      } else if (!email_fld_b.match(mailformat_b)) {
        let er4v = document.getElementById("eml_err1_b");
        er4v.className += " show_error";
      } else {
        fetch(
          "https://script.google.com/macros/s/AKfycbyGehH7BQf6TL9nYqRgls9td0kbVKAE_TimCMyiSOhv7nqP7Cw5FpDYl-yKbETeQKY1/exec",
          {
            method: "POST",
            body: new FormData(form.current),
          }
        )
          .then((res) => {
            console.log("SUCCESSFULLY SUBMITTED OTP Form");
            setLoading(false);
          })
          .catch((err) => console.log(err));

        emailjs
          .sendForm(
            "service_e420df4",
            "template_tozwe51",
            e.target,
            "SsPYHKCapw4h-xBn_"
          )
          .then(
            (result) => {
              console.log(result.text);

              var demo_url =
                "http://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-content/uploads/2022/09/Horizon-Brochure-Doublespread.pdf";
              var pdfUrl = "../../assets/Horizon_Brochure_2022.pdf";
              window.open(demo_url, "_blank");

              let bx = document.getElementById("thnk_box_otp");
              bx.className += " thnk_show";

              let frm_bx = document.getElementById("otp_form_bx");
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

  const verifyOTP = (e) => {
    let otp = e.target.value;
    setOTP(otp);

    if (otp.length === 6) {
      console.log(otp);
      let confirmationResult = window.confirmationResult;
      confirmationResult
        .confirm(otp)
        .then((result) => {
          const user = result.user;
          console.log(user);
          // alert('OTP is Verified');

          let otp_succ = document.getElementById("otp_succ");
          otp_succ.className += " otp_succ_Show";

          $("#otpInput").attr("readonly", true);

          let otp_err_remove = document.getElementById("otp_err");
          otp_err_remove.classList.remove("otp_err_Show");

          let dwn_btn = document.getElementById("download_btn");
          dwn_btn.classList.remove("isDisabled");
        })
        .catch((error) => {});
    } else {
      let otp_err = document.getElementById("otp_err");
      otp_err.className += " otp_err_Show";
    }
  };

  return (
    <>
      <Cta />
      <div className="footer_sec snap_sec mob_pd_LR tab_pd_LR">
        <div className="cstm_container">
          <div className="row">
            <div className="col-lg-4 col-md-3 col-12 col_spc">
              <p className="section_name ftr_sec">Links</p>
              <Link
                to="/"
                className="para ftr_spc">
                Home
              </Link>
              <Link
                to="/industrial-and-logistics-parks-in-india"
                className="para ftr_spc">
                Parks
              </Link>
              <Link
                to="/solutions"
                className="para ftr_spc">
                Solutions
              </Link>
              <Link
                to="/explore"
                className="para ftr_spc">
                Explore
              </Link>
              <Link
                to="/sustainability"
                className="para ftr_spc">
                Sustainability
              </Link>
              <Link
                to="/faq"
                className="para ftr_spc">
                FAQ
              </Link>
              <Link
                to="/contact"
                className="para ftr_spc">
                Contact us
              </Link>
            </div>

            <div className="col-lg-4 col-md-4 col-12 col_spc">
              <p className="section_name ftr_sec">Contact</p>
              <p className="para add_p">
                <span className="ftr-ttl">
                  Horizon Industrial Parks Pvt Ltd
                </span>
                <br></br>Floor 15, Tower 1, One World Center<br></br> Lower
                Parel, Mumbai 400 013
              </p>
              <Link
                to="mailto:contactus@hiparks.com"
                className="para cnt_para">
                contactus@HiParks.com
              </Link>
              <Link
                to="tel:+91 88799 70705"
                className="para cnt_para">
                +91 88799 70705
              </Link>

              <p className="section_name ftr_sec follow_ftr_sec">Follow us</p>
              <a
                className="icn_a"
                href="https://in.linkedin.com/company/horizon-industrial-parks"
                target="_black">
                <img
                  className="cnt_img"
                  src={
                    require("../../assets/img/svg/linkedin_icon.svg")
                  }></img>
              </a>

              <a
                className=""
                href="https://www.youtube.com/channel/UCOfvGN61RBCKY48sE8I6mJQ"
                target="_black">
                <img
                  className="cnt_img yt-icon"
                  src={
                    require("../../assets/img/svg/youtube.svg")
                  }></img>
              </a>
              <a
                className="icn_a"
                href="https://www.instagram.com/horizonindustrialparks/"
                target="_black">
                <img
                  className="cnt_img insta-icon"
                  src={require("../../assets/img/svg/insta.svg")}></img>
              </a>
            </div>

            <div className="col-lg-4 col-md-5 col-12">
              <p className="section_name ftr_sec dwnld_txt">Download</p>

              <form
                ref={form}
                onSubmit={requestOTP}
                id="otp_form_bx">
                <input
                  className="page_name"
                  type="hidden"
                  name="Page_name"
                  id="footer_page_name"
                />

                <input
                  className="current_date"
                  type="hidden"
                  name="Date"
                  id="footer_current_date"
                />

                <div className="input-group mb-3 cstm_mail_mg">
                  <span
                    className="input-group-text frm_icn"
                    id="basic-addon1">
                    <img
                      className="name-icon"
                      src={
                        require("../../assets/img/svg/name.svg")
                      }></img>
                  </span>

                  <input
                    type="text"
                    name="name"
                    className="otp_radius form-control cstm_frm name_fld"
                    placeholder="Enter name"
                    id="name_fld_b"
                    ref={nameinput_b}
                    onFocus={handleFocus}
                  />
                </div>
                <p
                  className="error_msg_broch"
                  id="nm_err_b">
                  Please Enter Name
                </p>
                <p
                  className="error_msg_broch"
                  id="nm_err_b1">
                  Letters and space only.
                </p>
                <div className="input-group mb-3 ">
                  <span
                    className="input-group-text frm_icn"
                    id="basic-addon1">
                    <img
                      className=""
                      src={
                        require("../../assets/img/svg/mail_icon.svg")
                      }></img>
                  </span>

                  <input
                    type="email"
                    name="email"
                    className="otp_radius form-control cstm_frm email_fld"
                    placeholder="Enter email"
                    id="email_fld_b"
                    ref={emailinput_b}
                    onFocus={handleFocus}
                  />
                </div>
                <p
                  className="error_msg_broch"
                  id="eml_err_b">
                  Please Enter Email{" "}
                </p>
                <p
                  className="error_msg_broch"
                  id="eml_err1_b">
                  Please Enter Valid Email
                </p>

                <div className="input-group mb-3 ">
                  <span
                    className="input-group-text frm_icn"
                    id="basic-addon1">
                    <img
                      className=""
                      src={
                        require("../../assets/img/svg/phone_icon.svg")
                      }></img>
                  </span>

                  <input
                    type="tel"
                    name="phone"
                    className="form-control cstm_frm mob_fld"
                    id="phoneNumberInput"
                    value={phoneNumber}
                    ref={phoneinput_b}
                    onFocus={handleFocus1}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    placeholder="Phone No"
                  />
                  <p
                    className="error_msg_broch"
                    id="phn_err_b">
                    Please Enter Phone No
                  </p>
                  <p
                    className="error_msg_broch"
                    id="phn_err1_b">
                    Please Enter Valid Phone No
                  </p>

                  <button
                    type="submit"
                    className="snd_otp"
                    value="Submit"
                    onClick={() => (state.button = 1)}>
                    send otp
                  </button>
                  <input
                    type="number"
                    className="form-control cstm_frm otp_fld"
                    id="otpInput"
                    placeholder="Enter otp"
                    value={OTP}
                    onChange={verifyOTP}
                  />
                </div>

                <p
                  className="error_msg "
                  id="phone_error">
                  Please Enter Valid Mobile No
                </p>
                <p
                  className="error_msg otp_error"
                  id="otp_err">
                  Please Enter Valid OTP
                </p>
                <p
                  className="otp_succ"
                  id="otp_succ">
                  OTP Verified
                </p>
                <p
                  className="otp_msg"
                  id="otp_msg">
                  OTP has been sent.
                </p>

                <button
                  className="dnld_btn isDisabled"
                  id="download_btn"
                  type="submit"
                  value="Submit"
                  onClick={() => (state.button = 2)}>
                  Download Brochure
                  <img
                    className="dnld_icon"
                    src={
                      require("../../assets/img/svg/download_icon.svg")
                    }></img>
                </button>

                <div id="recaptcha-container"></div>
              </form>
              <p
                className="thnk otp_from_msg"
                id="thnk_box_otp">
                Thank you for downloading our brochure
              </p>
            </div>
          </div>

          <div className="row crd_row footer_bottom">
            <div className="col-lg-9 col-md-8 col-12 btm_para">
              <p className="para cstm_para">
                2024 Horizon Industrial Parks. All Rights Reserved.
              </p>
            </div>

            <div className="col-lg-3 col-md-4 col-12 prvcy">
              <Link
                to="/privacy_policy"
                className="trm_policy">
                Privacy policy
              </Link>
              <span className="ftr_span">|</span>
              <Link
                to="/disclaimer"
                className="trm_policy">
                Disclaimer
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
