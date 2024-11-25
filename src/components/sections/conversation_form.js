import React from 'react'
import $ from 'jquery';
import emailjs from 'emailjs-com';
import { useRef, useState } from 'react';
import { useEffect } from 'react';
import { gsap } from '../../helper/common'
import '../../assets/css/conversation_form.css'

export default function Coversation_form() {

    // Heading text animation variable
    const conver_hd = useRef(null);

    useEffect(() => {

        // Heading text animation code
        gsap.to("#conver_hd", {
            y: 0,
            duration: 1.5,
            ease: "power4.out",
            delay: 0.3,
            scrollTrigger: {
                trigger: "#conver_hd",
                markers: false
            }
        });

        $(document).ready(function () {
            var url = window.location.pathname;
            console.log(url);
    
            if (url === '/warehousing-park-farukhnagar-i') {
                let pg_name = 'Farukhnagar I page';
                $('#page_name').val(pg_name);
            }

            if (url === '/warehousing-park-farukhnagar-ii') {
                let pg_name = 'Farukhnagar II page';
                $('#page_name').val(pg_name);
            }
    
            if (url === '/warehousing-park-delhi-i') {
                let pg_name = 'Delhi-i page';
                $('#page_name').val(pg_name);
            }
    
    
            if (url === '/warehousing-park-delhi-ii') {
                let pg_name = 'Delhi-ii page';
                $('#page_name').val(pg_name);
            }
    
            if (url === '/warehousing-park-bilaspur-i') {
                let pg_name = 'Bilaspur-i page';
                $('#page_name').val(pg_name);
            }
    
            if (url === '/warehousing-park-bilaspur-ii') {
                let pg_name = 'Bilaspur-ii page';
                $('#page_name').val(pg_name);
            }
    
            if (url === '/industrial-and-warehousing-park-bhayala') {
                let pg_name = 'Bhayala page';
                $('#page_name').val(pg_name);
            }
    
            if (url === '/industrial-and-warehousing-park-chakan-ii') {
                let pg_name = 'Chakan-ii page';
                $('#page_name').val(pg_name);
            }
    
            if (url === '/industrial-and-warehousing-park-chakan-v') {
                let pg_name = 'Chakan-v page';
                $('#page_name').val(pg_name);
            }
    
            if (url === '/industrial-and-warehousing-park-verna') {
                let pg_name = 'Verna page';
                $('#page_name').val(pg_name);
            }
    
            if (url === '/industrial-and-warehousing-park-kothur') {
                let pg_name = 'Kothur page';
                $('#page_name').val(pg_name);
            }
    
            if (url === '/industrial-and-warehousing-park-patancheru') {
                let pg_name = 'Patancheru page';
                $('#page_name').val(pg_name);
            }
    
            if (url === '/industrial-and-warehousing-park-dobbaspet-i') {
                let pg_name = 'Dobbaspet-i page';
                $('#page_name').val(pg_name);
            }
    
            if (url === '/industrial-and-warehousing-park-dobbaspet-ii') {
                let pg_name = 'Dobbaspet-ii page';
                $('#page_name').val(pg_name);
            }
    
            if (url === '/industrial-and-warehousing-park-hosur-i') {
                let pg_name = 'Hosur-i page';
                $('#page_name').val(pg_name);
            }
    
            if (url === '/industrial-and-warehousing-park-hosur-ii') {
                let pg_name = 'Hosur-ii page';
                $('#page_name').val(pg_name);
            }
    
            if (url === '/warehousing-park-malur') {
                let pg_name = 'Malur page';
                $('#page_name').val(pg_name);
            }
    
            if (url === '/koka') {
                let pg_name = 'Koka page';
                $('#page_name').val(pg_name);
            }
    
            if (url === '/case-studies') {
                let pg_name = 'Case Studies page';
                $('#page_name').val(pg_name);
            }
    
    
    
            var d = new Date();
            var month = d.getMonth() + 1;
            var day = d.getDate();
    
            // var output = d.getFullYear() + '/' +
            //     (('' + month).length < 2 ? '0' : '') + month + '/' +
            //     (('' + day).length < 2 ? '0' : '') + day;
            var output1 = day + '/' +
                (('' + month).length < 2 ? '0' : '') + month + '/' +
                (('' + day).length < 2 ? '0' : '') + d.getFullYear();
    
            $('#current_date').val(output1);
    
        });

    })

    const form = useRef();
    const [loading, setLoading] = useState(false)
    const [statusMessage, setStatusMessage] = useState("");

    const nameinput = React.useRef(null);
    const phoneinput = React.useRef(null);

    const orginput = React.useRef(null);
    const emailinput = React.useRef(null);

    const parkinput = React.useRef(null);
    const spaceinput = React.useRef(null);
    const msginput = React.useRef(null);


    // All field validation error hide code 
    const handleFocus = e => {
        e.target.classList.remove("error_line");

        let er1 = document.getElementById("nm_err");
        er1.classList.remove("show_error");

        let er1v = document.getElementById("nm_err1");
        er1v.classList.remove("show_error");

        let er3 = document.getElementById("cmp_err");
        er3.classList.remove("show_error");

        let er4 = document.getElementById("eml_err");
        er4.classList.remove("show_error");

        let er4v = document.getElementById("eml_err1");
        er4v.classList.remove("show_error");

        let er5 = document.getElementById("prk_err");
        er5.classList.remove("show_error");

        let er6 = document.getElementById("spc_err");
        er6.classList.remove("show_error");

        let er7 = document.getElementById("msg_err");
        er7.classList.remove("show_error");

        let er7v = document.getElementById("msg_err1");
        er7v.classList.remove("show_error");

    };

    // Phone field validation error hide code    
    const handleFocus1 = e => {
        e.target.classList.remove("error_line");

        let er2 = document.getElementById("phn_err");
        er2.classList.remove("show_error");

        let er2v = document.getElementById("phn_err1");
        er2v.classList.remove("show_error");
    };

    // Form action code
    const sendEmail = (e) => {
        e.preventDefault();

        // Fields get value Code
        let name_fld = (nameinput.current.value);
        let org_fld = (orginput.current.value);
        let email_fld = (emailinput.current.value);
        let phone_fld = (phoneinput.current.value);
        let park_fld = (parkinput.current.value);
        let space_fld = (spaceinput.current.value);
        let msg_fld = (msginput.current.value);


        // Phone Regex Code
        let phone_fltr = document.getElementById("phone_fld");
        var mob_regx = /^([+][9][1]|[9][1]|[0]){0,1}([7-9]{1})([0-9]{9})$/;
        var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        var alpha_allwd = /^[A-Za-z ]+$/;


        // Fields validation Code
        if (name_fld == '') {
            let v1 = document.getElementById("name_fld");
            v1.className += " error_line";

            let er1 = document.getElementById("nm_err");
            er1.className += " show_error";
        }
        else if (!name_fld.match(alpha_allwd)) {
            let v1 = document.getElementById("name_fld");
            v1.className += " error_line";

            let er1v = document.getElementById("nm_err1");
            er1v.className += " show_error";
        }
        else if (phone_fld == '') {
            let v2 = document.getElementById("phone_fld");
            v2.className += " error_line";

            let er2 = document.getElementById("phn_err");
            er2.className += " show_error";
        }
        else if (!mob_regx.test(phone_fltr.value)) {
            let v2 = document.getElementById("phone_fld");
            v2.className += " error_line";

            let er2 = document.getElementById("phn_err1");
            er2.className += " show_error";
        }
        else if (org_fld == '') {
            let v3 = document.getElementById("org_fld");
            v3.className += " error_line";

            let er3 = document.getElementById("cmp_err");
            er3.className += " show_error";
        }
        else if (email_fld == '') {
            let v4 = document.getElementById("email_fld");
            v4.className += " error_line";

            let er4 = document.getElementById("eml_err");
            er4.className += " show_error";
        }
        else if (!email_fld.match(mailformat)) {
            let v4 = document.getElementById("email_fld");
            v4.className += " error_line";

            let er4v = document.getElementById("eml_err1");
            er4v.className += " show_error";
        }
        else if (park_fld == '') {
            let v5 = document.getElementById("park_fld");
            v5.className += " error_line";

            let er5 = document.getElementById("prk_err");
            er5.className += " show_error";
        }
        else if (space_fld == '') {
            let v6 = document.getElementById("space_fld");
            v6.className += " error_line";

            let er6 = document.getElementById("spc_err");
            er6.className += " show_error";
        }
        else if (msg_fld == '') {
            let v7 = document.getElementById("msg_fld");
            v7.className += " error_line";

            let er7 = document.getElementById("msg_err");
            er7.className += " show_error";
        }
        else if (!msg_fld.match(alpha_allwd)) {
            let v7 = document.getElementById("msg_fld");
            v7.className += " error_line";

            let er7v = document.getElementById("msg_err1");
            er7v.className += " show_error";
        }
        else {

            if (name_fld === 'Testing' || name_fld === 'TESTING' || name_fld === 'testing' ) {
                // alert('Testing selected');
                fetch('https://script.google.com/macros/s/AKfycbzApJansIkse1MoyXVygffQ1DxW1YH5zIn7YJ28DVYy27hkmCcGw0nrfG9ib6vAXyZsRA/exec', {
                    method: 'POST',
                    body: new FormData(form.current),

                }).then(res => {
                    console.log("SUCCESSFULLY SUBMITTED")
                    setLoading(false)
                })
                    .catch(err => console.log(err))

                emailjs.sendForm('service_e420df4', 'template_lj72r97', e.target, 'SsPYHKCapw4h-xBn_')
                    .then((result) => {

                        console.log(result.text);
                        setStatusMessage("Your Message has been sent successfully");
                        let bx = document.getElementById("thnk_box");
                        bx.className += " thnk_show";

                        let frm_bx = document.getElementById("con_form_bx");
                        frm_bx.className += " form_hide";

                    }, (error) => {

                        console.log(error.text);
                        setStatusMessage(`${error.text} happened`);

                    });
                e.target.reset()
            }
            else {
                fetch('https://script.google.com/macros/s/AKfycbzApJansIkse1MoyXVygffQ1DxW1YH5zIn7YJ28DVYy27hkmCcGw0nrfG9ib6vAXyZsRA/exec', {
                    method: 'POST',
                    body: new FormData(form.current),

                }).then(res => {
                    console.log("SUCCESSFULLY SUBMITTED")
                    setLoading(false)
                })
                    .catch(err => console.log(err))

                emailjs.sendForm('service_e420df4', 'template_5iougvq', e.target, 'SsPYHKCapw4h-xBn_')
                    .then((result) => {

                        console.log(result.text);
                        setStatusMessage("Your Message has been sent successfully");
                        let bx = document.getElementById("thnk_box");
                        bx.className += " thnk_show";

                        let frm_bx = document.getElementById("con_form_bx");
                        frm_bx.className += " form_hide";

                    }, (error) => {

                        console.log(error.text);
                        setStatusMessage(`${error.text} happened`);

                    });
                e.target.reset()

            }

        }
    };


   


    return (
        <>
            <div className='intg_solution_sec snap_sec'>

                <div className='row no_LR_margin'>
                    <div className='col-lg-7 col-md-12 col-12 ing_solu_col_1 convert_form_col1'>

                        <div className='intg_hd_dv'>
                            {/* <h2 className='big_heading intg_hd_1'>Start a</h2>
                            <h2 className='big_heading intg_hd_2 convt_hd'>Conversation</h2> */}

                            <div className='txt_1 cnt_txt'>
                                <div className="animate_big_txt ">
                                    <span ref={conver_hd} id='conver_hd'>
                                        <h2 className='big_heading intg_hd_1' >Start a</h2>
                                    </span>
                                </div>
                            </div>

                            <div className='txt_1 cnt_txt'>
                                <div className="animate_big_txt ">
                                    <span ref={conver_hd} id='conver_hd'>
                                        <h2 className='big_heading intg_hd_2 convt_hd'>Conversation</h2>
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* contact Form start here */}
                        <div className='prkinside_form'>
                            <form className="row g-3 conversion_form" ref={form} onSubmit={sendEmail} id='con_form_bx'>

                                <input className='page_name' type='hidden' name='Page_name' id='page_name' />

                                <input className='current_date' type='hidden' name='Date' id='current_date' />

                                <div className="col-md-6 conv_frm_spc">
                                    <label className="form-label conv_frm_label" >Full Name</label>
                                    <input type="text" className="form-control" name='name' id='name_fld' ref={nameinput} onFocus={handleFocus} />
                                    <p className='error_msg' id='nm_err'>Please Enter Full Name</p>
                                    <p className='error_msg' id='nm_err1'>Letters and space only.</p>
                                </div>
                                <div className="col-md-6 conv_frm_spc">
                                    <label className="form-label">Phone No</label>
                                    <input type="mobile" className="form-control" name='phone' id='phone_fld' ref={phoneinput} onFocus={handleFocus1} />
                                    <p className='error_msg' id='phn_err'>Please Enter Phone No</p>
                                    <p className='error_msg' id='phn_err1'>Please Enter Valid Phone No</p>
                                </div>
                                <div className="col-md-6 conv_frm_spc">
                                    <label className="form-label">Organisation</label>
                                    <input type="text" className="form-control" name='organisation' id='org_fld' ref={orginput} onFocus={handleFocus} />
                                    <p className='error_msg' id='cmp_err'>Please Enter Organisation</p>
                                </div>
                                <div className="col-md-6 conv_frm_spc">
                                    <label className="form-label">Email Address</label>
                                    <input type="email" className="form-control" name='email' id='email_fld' ref={emailinput} onFocus={handleFocus} />
                                    <p className='error_msg' id='eml_err'>Please Enter Email Address</p>
                                    <p className='error_msg' id='eml_err1'>Please Enter Valid Email Address</p>
                                </div>
                                <div className="col-md-6 conv_frm_spc">
                                    <label className="form-label">Park location</label>
                                    <input type="text" className="form-control" name='park_location' id='park_fld' ref={parkinput} onFocus={handleFocus} />
                                    <p className='error_msg' id='prk_err'>Please Enter Park Location</p>
                                </div>
                                <div className="col-md-6 conv_frm_spc">
                                    <label className="form-label">Space Required</label>
                                    <input type="text" className="form-control" name='space' id='space_fld' placeholder="1,00,000 SQFT" ref={spaceinput} onFocus={handleFocus} />
                                    <p className='error_msg' id='spc_err'>Please Enter Space</p>
                                </div>
                                <div className="col-12">
                                    <label className="form-label">Tell Us More</label>
                                    <input type="text" className="form-control" name='message' id='msg_fld' placeholder="Enter your message" ref={msginput} onFocus={handleFocus} />
                                    <p className='error_msg' id='msg_err'>Please Enter Message</p>
                                    <p className='error_msg' id='msg_err1'>Letters and space only.</p>
                                </div>

                                <div className="col-12 btn_col">
                                    <input type="submit" className="btn btn-primary conv_btn" value='Submit'></input>
                                </div>
                            </form>

                            <p className='thnk txt_wht ' id='thnk_box'>Your form has been sent successfully</p>

                        </div>

                        {/* contact Form end here */}

                    </div>

                    <div className='col-lg-5 col-md-12 col-12 ing_solu_col_2 convert_form_col2'>
                        <img className='intg_sol_img assts_dev_img' src={require('../../assets/img/conversation_img.webp')} ></img>

                    </div>

                </div>


            </div>

        </>
    )
}
