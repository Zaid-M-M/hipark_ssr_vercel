import React from "react";
import { useRef, useState, useEffect } from "react";
import emailjs from "emailjs-com";
import $ from "jquery";
import { authentication } from "../../firebase-config";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { gsap } from "../../helper/common";
import "../../assets/css/report.css";

export default function Cta() {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

  useEffect(() => {
    $("#otpInput").on("click", function () {
      $(".otp_msg").css("display", "none");
    });

    $(".dnld_btn").on("click", function () {
      console.log("download button working");
    });

    //

    $("#dprt_fld").change(function () {
      if ($(this).data("options") === undefined) {
        /*Taking an array of all options-2 and kind of embedding it on the select1*/
        $(this).data("options", $("#dprt_fld_rpt option").clone());
      }
      var id = $(this).val();
      var options = $(this)
        .data("options")
        .filter("[value=" + id + "]");
      $("#dprt_fld_rpt").html(options);
    });
  });

  const nameinput = React.useRef(null);
  const emailinput = React.useRef(null);

  const phoneinput = React.useRef(null);

  const departinput = React.useRef(null);

  const departpdfinput = React.useRef(null);

  const countryCode = "+91";

  const [phoneNumber, setPhoneNumber] = useState(countryCode);
  const [OTP, setOTP] = useState("");
  const [email, setEmail] = useState(null);

  const state = {
    button: 1,
  };

  // All field validation error hide code
  const handleFocus = (e) => {
    e.target.classList.remove("error_line");

    let er1 = document.getElementById("nm_err");
    er1.classList.remove("show_error");

    let er1v = document.getElementById("nm_err1");
    er1v.classList.remove("show_error");

    let er2 = document.getElementById("eml_err");
    er2.classList.remove("show_error");

    let er2v = document.getElementById("eml_err1");
    er2v.classList.remove("show_error");

    let er5 = document.getElementById("depart_err");
    er5.classList.remove("show_error");
  };

  // Phone field validation error hide code
  const handleFocus1 = (e) => {
    e.target.classList.remove("error_line");

    let er4 = document.getElementById("phn_err");
    er4.classList.remove("show_error");

    let er4v = document.getElementById("phn_err1");
    er4v.classList.remove("show_error");
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
      // Form action code
      e.preventDefault();

      // Fields get value Code
      let name_fld = nameinput.current.value;
      let email_fld = emailinput.current.value;

      let phone_fld = phoneinput.current.value;

      let dprt_fld = departinput.current.value;

      let depart_pdf = departpdfinput.current.text;
      let prk_pdf = $("#dprt_fld_rpt option:selected").text();

      // Phone Regex Code
      let phone_fltr = document.getElementById("phone_fld");
      var mob_regx = /^([+][9][1]|[9][1]|[0]){0,1}([7-9]{1})([0-9]{9})$/;
      var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      var alpha_allwd = /^[A-Za-z ]+$/;

      // pdf code

      if (dprt_fld == "") {
        let v5 = document.getElementById("dprt_fld");
        v5.className += " error_line";

        let er5 = document.getElementById("depart_err");
        er5.className += " show_error";
      } else if (depart_pdf == "") {
        let v5 = document.getElementById("depart_pdf");
        v5.className += " error_line";

        let er5 = document.getElementById("depart_err");
        er5.className += " show_error";
      } else if (name_fld == "") {
        let v1 = document.getElementById("name_fld");
        v1.className += " error_line";

        let er1 = document.getElementById("nm_err");
        er1.className += " show_error";
      } else if (!name_fld.match(alpha_allwd)) {
        let v1 = document.getElementById("name_fld");
        v1.className += " error_line";

        let er1v = document.getElementById("nm_err1");
        er1v.className += " show_error";
      } else if (email_fld == "") {
        let v2 = document.getElementById("email_fld");
        v2.className += " error_line";

        let er2 = document.getElementById("eml_err");
        er2.className += " show_error";
      } else if (!email_fld.match(mailformat)) {
        let v2 = document.getElementById("email_fld");
        v2.className += " error_line";

        let er2v = document.getElementById("eml_err1");
        er2v.className += " show_error";
      } else if (phone_fld == "") {
        let v4 = document.getElementById("phone_fld");
        v4.className += " error_line";

        let er4 = document.getElementById("phn_err");
        er4.className += " show_error";
      } else if (!mob_regx.test(phone_fltr.value)) {
        let v4 = document.getElementById("phone_fld");
        v4.className += " error_line";

        let er4 = document.getElementById("phn_err1");
        er4.className += " show_error";
      } else {
        if (dprt_fld === "bilaspur") {
          if (prk_pdf === "ENVIRONMENT CLEARANCE") {
            console.log("you are selected ENVIRONMENT CLEARANCE");

            fetch(
              "https://script.google.com/macros/s/AKfycbyXO9hfsXvjUFKheLMngGnwlsvV2hMuYGcCxIBbaNs-gRqaaxtep3aEX_DsYIz9lTg-ng/exec",
              {
                method: "POST",
                body: new FormData(form.current),
              }
            )
              .then((res) => {
                console.log("SUCCESSFULLY SUBMITTED");
                setLoading(false);
              })
              .catch((err) => console.log(err));

            emailjs
              .sendForm(
                "service_e420df4",
                "template_nvksf0m",
                e.target,
                "SsPYHKCapw4h-xBn_"
              )
              .then(
                (result) => {
                  console.log(result.text);
                  setStatusMessage("Your Message has been sent successfully");

                  // var report_url ='http://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-content/uploads/2022/09/Horizon-Brochure-Doublespread.pdf';

                  var report_url =
                    "https://www.hiparks.com/compliance_report/Bilaspur/Environmet%20Clearance.pdf";
                  window.open(report_url, "_blank");

                  let bx = document.getElementById("thnk_box");
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
          } else if (prk_pdf === "COMPLIANCE REPORT DEC-2020") {
            console.log("you are selected COMPLIANCE REPORT DEC-2020");

            fetch(
              "https://script.google.com/macros/s/AKfycbyXO9hfsXvjUFKheLMngGnwlsvV2hMuYGcCxIBbaNs-gRqaaxtep3aEX_DsYIz9lTg-ng/exec",
              {
                method: "POST",
                body: new FormData(form.current),
              }
            )
              .then((res) => {
                console.log("SUCCESSFULLY SUBMITTED");
                setLoading(false);
              })
              .catch((err) => console.log(err));

            emailjs
              .sendForm(
                "service_e420df4",
                "template_nvksf0m",
                e.target,
                "SsPYHKCapw4h-xBn_"
              )
              .then(
                (result) => {
                  console.log(result.text);
                  setStatusMessage("Your Message has been sent successfully");

                  // var report_url ='http://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-content/uploads/2022/09/Horizon-Brochure-Doublespread.pdf';

                  var report_url =
                    "https://www.hiparks.com/compliance_report/Bilaspur/Six_Monthly_Compliance_Dec_2020.pdf";
                  window.open(report_url, "_blank");

                  let bx = document.getElementById("thnk_box");
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
          } else if (prk_pdf === "COMPLIANCE REPORT DEC-2021") {
            console.log("you are selected COMPLIANCE REPORT DEC-2021");

            fetch(
              "https://script.google.com/macros/s/AKfycbyXO9hfsXvjUFKheLMngGnwlsvV2hMuYGcCxIBbaNs-gRqaaxtep3aEX_DsYIz9lTg-ng/exec",
              {
                method: "POST",
                body: new FormData(form.current),
              }
            )
              .then((res) => {
                console.log("SUCCESSFULLY SUBMITTED");
                setLoading(false);
              })
              .catch((err) => console.log(err));

            emailjs
              .sendForm(
                "service_e420df4",
                "template_nvksf0m",
                e.target,
                "SsPYHKCapw4h-xBn_"
              )
              .then(
                (result) => {
                  console.log(result.text);
                  setStatusMessage("Your Message has been sent successfully");

                  // var report_url ='http://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-content/uploads/2022/09/Horizon-Brochure-Doublespread.pdf';

                  var report_url =
                    "https://www.hiparks.com/compliance_report/Bilaspur/Six_Monthly_Compliance_Dec_2021.pdf";
                  window.open(report_url, "_blank");

                  let bx = document.getElementById("thnk_box");
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
          } else if (prk_pdf === "COMPLIANCE REPORT JUNE-2021") {
            console.log("you are selected COMPLIANCE REPORT JUNE-2021");

            fetch(
              "https://script.google.com/macros/s/AKfycbyXO9hfsXvjUFKheLMngGnwlsvV2hMuYGcCxIBbaNs-gRqaaxtep3aEX_DsYIz9lTg-ng/exec",
              {
                method: "POST",
                body: new FormData(form.current),
              }
            )
              .then((res) => {
                console.log("SUCCESSFULLY SUBMITTED");
                setLoading(false);
              })
              .catch((err) => console.log(err));

            emailjs
              .sendForm(
                "service_e420df4",
                "template_nvksf0m",
                e.target,
                "SsPYHKCapw4h-xBn_"
              )
              .then(
                (result) => {
                  console.log(result.text);
                  setStatusMessage("Your Message has been sent successfully");

                  // var report_url ='http://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-content/uploads/2022/09/Horizon-Brochure-Doublespread.pdf';

                  var report_url =
                    "https://www.hiparks.com/compliance_report/Bilaspur/Six_Monthly_Compliance_June_2021.pdf";
                  window.open(report_url, "_blank");

                  let bx = document.getElementById("thnk_box");
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
          } else if (prk_pdf === "COMPLIANCE REPORT JUNE-2022") {
            console.log("you are selected COMPLIANCE REPORT JUNE-2022");

            fetch(
              "https://script.google.com/macros/s/AKfycbyXO9hfsXvjUFKheLMngGnwlsvV2hMuYGcCxIBbaNs-gRqaaxtep3aEX_DsYIz9lTg-ng/exec",
              {
                method: "POST",
                body: new FormData(form.current),
              }
            )
              .then((res) => {
                console.log("SUCCESSFULLY SUBMITTED");
                setLoading(false);
              })
              .catch((err) => console.log(err));

            emailjs
              .sendForm(
                "service_e420df4",
                "template_nvksf0m",
                e.target,
                "SsPYHKCapw4h-xBn_"
              )
              .then(
                (result) => {
                  console.log(result.text);
                  setStatusMessage("Your Message has been sent successfully");

                  // var report_url ='http://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-content/uploads/2022/09/Horizon-Brochure-Doublespread.pdf';

                  var report_url =
                    "https://www.hiparks.com/compliance_report/Bilaspur/Six_Monthly_Compliance_June_2022.pdf";
                  window.open(report_url, "_blank");

                  let bx = document.getElementById("thnk_box");
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
            console.log("you are Not selected bilaspur PDF");
          }
        } else if (dprt_fld === "farukhnagar") {
          if (prk_pdf === "ENVIRONMENT CLEARANCE") {
            console.log("you are selected farukhnagar");

            fetch(
              "https://script.google.com/macros/s/AKfycbyXO9hfsXvjUFKheLMngGnwlsvV2hMuYGcCxIBbaNs-gRqaaxtep3aEX_DsYIz9lTg-ng/exec",
              {
                method: "POST",
                body: new FormData(form.current),
              }
            )
              .then((res) => {
                console.log("SUCCESSFULLY SUBMITTED");
                setLoading(false);
              })
              .catch((err) => console.log(err));

            emailjs
              .sendForm(
                "service_e420df4",
                "template_nvksf0m",
                e.target,
                "SsPYHKCapw4h-xBn_"
              )
              .then(
                (result) => {
                  console.log(result.text);
                  setStatusMessage("Your Message has been sent successfully");

                  // var report_1_url ='http://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-content/uploads/2022/09/Horizon-Brochure-Doublespread.pdf';

                  var report_1_url =
                    "https://www.hiparks.com/compliance_report/Farukhnagar/Environment%20clearance.pdf";
                  window.open(report_1_url, "_blank");

                  let bx = document.getElementById("thnk_box");
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
          } else if (prk_pdf === "COMPLIANCE REPORT DEC-2020") {
            console.log("you are selected COMPLIANCE REPORT DEC-2020");

            fetch(
              "https://script.google.com/macros/s/AKfycbyXO9hfsXvjUFKheLMngGnwlsvV2hMuYGcCxIBbaNs-gRqaaxtep3aEX_DsYIz9lTg-ng/exec",
              {
                method: "POST",
                body: new FormData(form.current),
              }
            )
              .then((res) => {
                console.log("SUCCESSFULLY SUBMITTED");
                setLoading(false);
              })
              .catch((err) => console.log(err));

            emailjs
              .sendForm(
                "service_e420df4",
                "template_nvksf0m",
                e.target,
                "SsPYHKCapw4h-xBn_"
              )
              .then(
                (result) => {
                  console.log(result.text);
                  setStatusMessage("Your Message has been sent successfully");

                  // var report_url ='http://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-content/uploads/2022/09/Horizon-Brochure-Doublespread.pdf';

                  var report_1_url =
                    "https://www.hiparks.com/compliance_report/Farukhnagar/Six_Monthly_Compliance_Dec_20.pdf";
                  window.open(report_1_url, "_blank");

                  let bx = document.getElementById("thnk_box");
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
          } else if (prk_pdf === "COMPLIANCE REPORT DEC-2021") {
            console.log("you are selected COMPLIANCE REPORT DEC-2021");

            fetch(
              "https://script.google.com/macros/s/AKfycbyXO9hfsXvjUFKheLMngGnwlsvV2hMuYGcCxIBbaNs-gRqaaxtep3aEX_DsYIz9lTg-ng/exec",
              {
                method: "POST",
                body: new FormData(form.current),
              }
            )
              .then((res) => {
                console.log("SUCCESSFULLY SUBMITTED");
                setLoading(false);
              })
              .catch((err) => console.log(err));

            emailjs
              .sendForm(
                "service_e420df4",
                "template_nvksf0m",
                e.target,
                "SsPYHKCapw4h-xBn_"
              )
              .then(
                (result) => {
                  console.log(result.text);
                  setStatusMessage("Your Message has been sent successfully");

                  // var report_url ='http://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-content/uploads/2022/09/Horizon-Brochure-Doublespread.pdf';

                  var report_1_url =
                    "https://www.hiparks.com/compliance_report/Farukhnagar/Six_Monthly_Compliance_Dec_21.pdf";
                  window.open(report_1_url, "_blank");

                  let bx = document.getElementById("thnk_box");
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
          } else if (prk_pdf === "COMPLIANCE REPORT JUNE-2021") {
            console.log("you are selected COMPLIANCE REPORT JUNE-2021");

            fetch(
              "https://script.google.com/macros/s/AKfycbyXO9hfsXvjUFKheLMngGnwlsvV2hMuYGcCxIBbaNs-gRqaaxtep3aEX_DsYIz9lTg-ng/exec",
              {
                method: "POST",
                body: new FormData(form.current),
              }
            )
              .then((res) => {
                console.log("SUCCESSFULLY SUBMITTED");
                setLoading(false);
              })
              .catch((err) => console.log(err));

            emailjs
              .sendForm(
                "service_e420df4",
                "template_nvksf0m",
                e.target,
                "SsPYHKCapw4h-xBn_"
              )
              .then(
                (result) => {
                  console.log(result.text);
                  setStatusMessage("Your Message has been sent successfully");

                  // var report_url ='http://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-content/uploads/2022/09/Horizon-Brochure-Doublespread.pdf';

                  var report_1_url =
                    "https://www.hiparks.com/compliance_report/Farukhnagar/Six_Monthly_Compliance_June_21.pdf";
                  window.open(report_1_url, "_blank");

                  let bx = document.getElementById("thnk_box");
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
          } else if (prk_pdf === "COMPLIANCE REPORT JUNE-2022") {
            console.log("you are selected COMPLIANCE REPORT JUNE-2022");

            fetch(
              "https://script.google.com/macros/s/AKfycbyXO9hfsXvjUFKheLMngGnwlsvV2hMuYGcCxIBbaNs-gRqaaxtep3aEX_DsYIz9lTg-ng/exec",
              {
                method: "POST",
                body: new FormData(form.current),
              }
            )
              .then((res) => {
                console.log("SUCCESSFULLY SUBMITTED");
                setLoading(false);
              })
              .catch((err) => console.log(err));

            emailjs
              .sendForm(
                "service_e420df4",
                "template_nvksf0m",
                e.target,
                "SsPYHKCapw4h-xBn_"
              )
              .then(
                (result) => {
                  console.log(result.text);
                  setStatusMessage("Your Message has been sent successfully");

                  // var report_url ='http://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-content/uploads/2022/09/Horizon-Brochure-Doublespread.pdf';

                  var report_1_url =
                    "https://www.hiparks.com/compliance_report/Farukhnagar/Six_Monthly_Compliance_June_22.pdf";
                  window.open(report_1_url, "_blank");

                  let bx = document.getElementById("thnk_box");
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
            console.log("you are Not selected farukhnagar PDF");
          }
        } else if (dprt_fld === "hosur") {
          if (prk_pdf === "ENVIRONMENT CLEARANCE") {
            console.log("you are selected ENVIRONMENT CLEARANCE 3");

            fetch(
              "https://script.google.com/macros/s/AKfycbyXO9hfsXvjUFKheLMngGnwlsvV2hMuYGcCxIBbaNs-gRqaaxtep3aEX_DsYIz9lTg-ng/exec",
              {
                method: "POST",
                body: new FormData(form.current),
              }
            )
              .then((res) => {
                console.log("SUCCESSFULLY SUBMITTED");
                setLoading(false);
              })
              .catch((err) => console.log(err));

            emailjs
              .sendForm(
                "service_e420df4",
                "template_nvksf0m",
                e.target,
                "SsPYHKCapw4h-xBn_"
              )
              .then(
                (result) => {
                  console.log(result.text);
                  setStatusMessage("Your Message has been sent successfully");

                  // var report_2_url ='http://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-content/uploads/2022/09/Horizon-Brochure-Doublespread.pdf';

                  var report_2_url =
                    "https://www.hiparks.com/compliance_report/Hosur/Environment%20Clearance.pdf";

                  window.open(report_2_url, "_blank");

                  let bx = document.getElementById("thnk_box");
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
          } else if (prk_pdf === "COMPLIANCE REPORT DEC-2020") {
            console.log("you are selected COMPLIANCE REPORT DEC-2020");

            fetch(
              "https://script.google.com/macros/s/AKfycbyXO9hfsXvjUFKheLMngGnwlsvV2hMuYGcCxIBbaNs-gRqaaxtep3aEX_DsYIz9lTg-ng/exec",
              {
                method: "POST",
                body: new FormData(form.current),
              }
            )
              .then((res) => {
                console.log("SUCCESSFULLY SUBMITTED");
                setLoading(false);
              })
              .catch((err) => console.log(err));

            emailjs
              .sendForm(
                "service_e420df4",
                "template_nvksf0m",
                e.target,
                "SsPYHKCapw4h-xBn_"
              )
              .then(
                (result) => {
                  console.log(result.text);
                  setStatusMessage("Your Message has been sent successfully");

                  // var report_url ='http://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-content/uploads/2022/09/Horizon-Brochure-Doublespread.pdf';

                  var report_2_url =
                    "https://www.hiparks.com/compliance_report/Hosur/Six_Monthly_Compliance_Dec_20.pdf";

                  window.open(report_2_url, "_blank");

                  let bx = document.getElementById("thnk_box");
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
          } else if (prk_pdf === "COMPLIANCE REPORT DEC-2021") {
            console.log("you are selected COMPLIANCE REPORT DEC-2021");

            fetch(
              "https://script.google.com/macros/s/AKfycbyXO9hfsXvjUFKheLMngGnwlsvV2hMuYGcCxIBbaNs-gRqaaxtep3aEX_DsYIz9lTg-ng/exec",
              {
                method: "POST",
                body: new FormData(form.current),
              }
            )
              .then((res) => {
                console.log("SUCCESSFULLY SUBMITTED");
                setLoading(false);
              })
              .catch((err) => console.log(err));

            emailjs
              .sendForm(
                "service_e420df4",
                "template_nvksf0m",
                e.target,
                "SsPYHKCapw4h-xBn_"
              )
              .then(
                (result) => {
                  console.log(result.text);
                  setStatusMessage("Your Message has been sent successfully");

                  // var report_url ='http://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-content/uploads/2022/09/Horizon-Brochure-Doublespread.pdf';

                  var report_2_url =
                    "https://www.hiparks.com/compliance_report/Hosur/Six_Monthly_Compliance_Dec_21.pdf";

                  window.open(report_2_url, "_blank");

                  let bx = document.getElementById("thnk_box");
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
          } else if (prk_pdf === "COMPLIANCE REPORT JUNE-2021") {
            console.log("you are selected COMPLIANCE REPORT JUNE-2021");

            fetch(
              "https://script.google.com/macros/s/AKfycbyXO9hfsXvjUFKheLMngGnwlsvV2hMuYGcCxIBbaNs-gRqaaxtep3aEX_DsYIz9lTg-ng/exec",
              {
                method: "POST",
                body: new FormData(form.current),
              }
            )
              .then((res) => {
                console.log("SUCCESSFULLY SUBMITTED");
                setLoading(false);
              })
              .catch((err) => console.log(err));

            emailjs
              .sendForm(
                "service_e420df4",
                "template_nvksf0m",
                e.target,
                "SsPYHKCapw4h-xBn_"
              )
              .then(
                (result) => {
                  console.log(result.text);
                  setStatusMessage("Your Message has been sent successfully");

                  // var report_url ='http://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-content/uploads/2022/09/Horizon-Brochure-Doublespread.pdf';

                  var report_2_url =
                    "https://www.hiparks.com/compliance_report/Hosur/Six_Monthly_Compliance_June_21.pdf";

                  window.open(report_2_url, "_blank");

                  let bx = document.getElementById("thnk_box");
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
          } else if (prk_pdf === "COMPLIANCE REPORT JUNE-2022") {
            console.log("you are selected COMPLIANCE REPORT JUNE-2022");

            fetch(
              "https://script.google.com/macros/s/AKfycbyXO9hfsXvjUFKheLMngGnwlsvV2hMuYGcCxIBbaNs-gRqaaxtep3aEX_DsYIz9lTg-ng/exec",
              {
                method: "POST",
                body: new FormData(form.current),
              }
            )
              .then((res) => {
                console.log("SUCCESSFULLY SUBMITTED");
                setLoading(false);
              })
              .catch((err) => console.log(err));

            emailjs
              .sendForm(
                "service_e420df4",
                "template_nvksf0m",
                e.target,
                "SsPYHKCapw4h-xBn_"
              )
              .then(
                (result) => {
                  console.log(result.text);
                  setStatusMessage("Your Message has been sent successfully");

                  // var report_url ='http://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-content/uploads/2022/09/Horizon-Brochure-Doublespread.pdf';

                  var report_2_url =
                    "https://www.hiparks.com/compliance_report/Hosur/Six_Monthly_Compliance_June_22.pdf";

                  window.open(report_2_url, "_blank");

                  let bx = document.getElementById("thnk_box");
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
            console.log("you are Not selected hosur PDF");
          }
        }
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

  // gloabl line GSAP

  // Heading text animation variable
  const txt_animate_p2 = useRef(null);

  // Para animation variable
  const cta_aniamtion = useRef(null);

  useEffect(() => {
    // Heading text animation code
    gsap.to("#txt_animate_p2", {
      y: 0,
      duration: 1.3,
      ease: "power4.out",
      delay: 0.3,
      scrollTrigger: {
        trigger: "#txt_animate_p2",
        markers: false,
      },
    });

    // Para animation code
    gsap.to("#cta_aniamtion", {
      opacity: 1,
      duration: 1.5,
      ease: "linear",
      delay: 0.9,
      scrollTrigger: {
        trigger: "#cta_aniamtion",
        markers: false,
      },
    });
    $(document).ready(function () {
        var url = window.location.pathname;
        console.log(url);
    
        var d = new Date();
        var month = d.getMonth() + 1;
        var day = d.getDate();
    
        // var output = d.getFullYear() + '/' +
        //     (('' + month).length < 2 ? '0' : '') + month + '/' +
        //     (('' + day).length < 2 ? '0' : '') + day;
        var Report =
          day +
          "/" +
          (("" + month).length < 2 ? "0" : "") +
          month +
          "/" +
          (("" + day).length < 2 ? "0" : "") +
          d.getFullYear();
    
        $("#report_current_date").val(Report);
      });
  }, []);


  return (
    <>
      <div className="report_sec snap_sec mob_pd_LR tab_pd_LR">
        <div className="cstm_container ">
          <div className="row">
            <div className="col-lg-6 col-md-3 col-12 compliance_reports">
              <h2
                className="report_sec_heading p_opacity"
                ref={cta_aniamtion}
                id="cta_aniamtion">
                DOWNLOAD <br />
                COMPLIANCE REPORTS
              </h2>
            </div>

            <div className="col-lg-6 col-md-9 col-12 enq_col">
              {/* contact Form start here */}
              <div className="dwnreport_form">
                <form
                  className="row g-3 dwn_rpt_frm conversion_form main_form report_form"
                  ref={form}
                  onSubmit={requestOTP}
                  id="enq_form_bx">
                  <input
                    className="page_name"
                    type="hidden"
                    name="Page_name"
                    id=""
                    value="Sustainability Page"
                  />
                  <input
                    className="current_date"
                    type="hidden"
                    name="Date"
                    id="report_current_date"
                  />

                  <div className="col-lg-6 col-md-12 col-12 conv_frm_spc selectin-fld">
                    <label className="form-label">Select Park</label>

                    <select
                      className="form-control report_control enq_type"
                      name="enquiry"
                      id="dprt_fld"
                      ref={departinput}
                      onFocus={handleFocus}>
                      <option
                        value=""
                        disabled
                        selected>
                        Select Park
                      </option>

                      <option value="bilaspur">Bilaspur</option>
                      <option value="farukhnagar">Farukhnagar</option>
                      <option value="hosur">Hosur</option>
                    </select>
                    <p
                      className="error_msg"
                      id="depart_err">
                      Please Select Park
                    </p>
                  </div>

                  <div className="col-lg-6 col-md-12 col-12 conv_frm_spc selectin-fld">
                    <label className="form-label">Select Report</label>

                    <select
                      className="form-control report_control enq_type"
                      name="enquiry"
                      id="dprt_fld_rpt"
                      ref={departpdfinput}
                      onFocus={handleFocus}>
                      <option
                        value=""
                        disabled>
                        Select Report
                      </option>

                      <option value="bilaspur">ENVIRONMENT CLEARANCE</option>
                      <option value="bilaspur">
                        COMPLIANCE REPORT DEC-2020
                      </option>
                      <option value="bilaspur">
                        COMPLIANCE REPORT DEC-2021
                      </option>
                      <option value="bilaspur">
                        COMPLIANCE REPORT JUNE-2021
                      </option>
                      <option value="bilaspur">
                        COMPLIANCE REPORT JUNE-2022
                      </option>
                      <option value="farukhnagar">ENVIRONMENT CLEARANCE</option>
                      <option value="farukhnagar">
                        COMPLIANCE REPORT DEC-2020
                      </option>
                      <option value="farukhnagar">
                        COMPLIANCE REPORT DEC-2021
                      </option>
                      <option value="farukhnagar">
                        COMPLIANCE REPORT JUNE-2021
                      </option>
                      <option value="farukhnagar">
                        COMPLIANCE REPORT JUNE-2022
                      </option>
                      <option value="hosur">ENVIRONMENT CLEARANCE</option>
                      <option value="hosur">COMPLIANCE REPORT DEC-2020</option>
                      <option value="hosur">COMPLIANCE REPORT DEC-2021</option>
                      <option value="hosur">COMPLIANCE REPORT JUNE-2021</option>
                      <option value="hosur">COMPLIANCE REPORT JUNE-2022</option>
                    </select>
                    <p
                      className="error_msg"
                      id="depart_err">
                      Please Select Park
                    </p>
                  </div>

                  <div className="col-md-6 col-12 conv_frm_spc">
                    <label className="form-label conv_frm_label name-label">
                      NAME
                    </label>
                    <input
                      type="text"
                      name="name"
                      className="form-control name-control"
                      id="name_fld"
                      ref={nameinput}
                      onFocus={handleFocus}
                    />
                    <p
                      className="error_msg"
                      id="nm_err">
                      Please Enter Name
                    </p>
                    <p
                      className="error_msg"
                      id="nm_err1">
                      Letters and space only.
                    </p>
                  </div>

                  <div className="col-md-6 col-12 conv_frm_spc">
                    <label className="form-label email-label">EMAIL</label>
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      id="email_fld"
                      ref={emailinput}
                      onFocus={handleFocus}
                    />
                    <p
                      className="error_msg"
                      id="eml_err">
                      Please Enter Email Address
                    </p>
                    <p
                      className="error_msg"
                      id="eml_err1">
                      Please Enter Valid Email Address
                    </p>
                  </div>

                  <div className="col-lg-8 col-md-12 col-12 conv_frm_spc">
                    <label className="form-label">PHONE</label>

                    <input
                      type="tel"
                      name="phone"
                      className="form-control"
                      id="phone_fld"
                      ref={phoneinput}
                      onFocus={handleFocus1}
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                    />

                    <p
                      className="error_msg"
                      id="phn_err">
                      Please Enter Phone No
                    </p>
                    <p
                      className="error_msg"
                      id="phn_err1">
                      Please Enter Valid Phone No
                    </p>

                    <button
                      type="submit"
                      className="snd_otp sending_otp"
                      value="Submit"
                      onClick={() => (state.button = 1)}>
                      send otp{">"}
                    </button>
                  </div>

                  <div className="col-lg-4 col-md-12 col-12 conv_frm_spc">
                    <input
                      type="number"
                      className="form-control cstm_frm otp_fld report_otp"
                      id="otpInput"
                      placeholder="enter otp"
                      value={OTP}
                      onChange={verifyOTP}></input>

                    <p
                      className="error_msg otp_error "
                      id="otp_err">
                      Please Enter Valid OTP
                    </p>
                    <p
                      className="otp_succ txt_crl"
                      id="otp_succ">
                      OTP Verified
                    </p>
                    <p
                      className="otp_msg txt_crl"
                      id="otp_msg">
                      OTP has been sent.
                    </p>
                  </div>

                  <div className="col-lg-12 col-md-12 col-12">
                    <button
                      className="report_btn isDisabled"
                      id="download_btn"
                      type="submit"
                      value="Submit"
                      onClick={() => (state.button = 2)}>
                      Download Report
                      <img
                        className="dnld_icon"
                        src={
                          require("../../assets/img/svg/ESG/report_icon.svg")
                            .default
                        }></img>
                    </button>

                    <div id="recaptcha-container"></div>
                  </div>
                </form>

                <p
                  className="thnk txt_wht"
                  id="thnk_box">
                  Thank you for downloading the report.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
