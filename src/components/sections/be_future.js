import React from 'react'
import $ from "jquery";
import { useEffect } from "react";
import Slider from 'react-slick';
import { useRef  , useState } from 'react';
import emailjs from 'emailjs-com';
import { gsap } from "../../helper/common";
import '../../assets/css/be_future.css'

export default function Be_future() {

    // Heading text animation variable
    const be_fut_anmt = useRef(null);
    const be_fut_para = useRef(null);

    const be_future_slider = {
        arrows: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        autoplay: true,
        autoplaySpeed: 2000
    };

    useEffect(() => {

        // Heading text animation code
        gsap.to("#be_fut_anmt", {
            y:0,
            duration: 1.5,
            ease: "power4.out",
            delay: 0.3,
            scrollTrigger: {
                trigger: "#be_fut_anmt",
                markers: false
            }
        });

        // Para animation code
        gsap.to("#be_fut_para", {
            opacity:1,
            duration: 1.5,
            ease: "linear",
            delay: 0.9,
            scrollTrigger: {
                trigger: "#be_fut_para",
                markers: false
            }
        });
    
        //Be-future overview read-more

        $('.moreless_button').on('click', function() {
            console.log('working');
            $('.moretext').slideToggle();
            if ($('.moreless_button').text() == "Read more") {
                $(this).text("Read less")
            } else {
                $(this).text("Read more")
            }
        });

        $('.career_btn').on("click", function() { 
            $('.career_popup_box').fadeIn();
            $('.carrer_overlay').fadeIn();
            $('body').css('overflow','hidden');
        });

        $('.career_cls_btn').on("click", function() { 
            $('.career_popup_box').fadeOut();
            $('.carrer_overlay').fadeOut();
            $('body').css('overflow','auto');
        });

       

    }, []);

    const form = useRef();
    const [loading, setLoading] = useState(false)
    const [statusMessage, setStatusMessage] = useState("");
    
    const nameinput = React.useRef(null);
    const emailinput = React.useRef(null);
    const phoneinput = React.useRef(null);
    const locationinput = React.useRef(null);
    const fileinput = React.useRef(null);
    

    // All field validation error hide code 
    const handleFocus = e => {
        e.target.classList.remove("error_line");

        let er1 = document.getElementById("name_err");
        er1.classList.remove("show_error");

        let er1v = document.getElementById("name_err1");
        er1v.classList.remove("show_error");
        
        let er2 = document.getElementById("email_err");
        er2.classList.remove("show_error");

        let er2v = document.getElementById("email_err1");
        er2v.classList.remove("show_error"); 

        let er4 = document.getElementById("location_err");
        er4.classList.remove("show_error");

        let er5 = document.getElementById("file_err");
        er5.classList.remove("show_error");

        let er6 = document.getElementById("file_err1");
        er6.classList.remove("show_error");

    };

    // Phone field validation error hide code    
    const handleFocus1 = e => {
        e.target.classList.remove("error_line");

        let er3 = document.getElementById("phn_err");
        er3.classList.remove("show_error");

        let er3v = document.getElementById("phn_err1");
        er3v.classList.remove("show_error");    
    };

    // Form action code
    const sendEmail = (e) => {e.preventDefault();

        // Fields get value Code
        let name_fld= (nameinput.current.value);
        let email_fld= (emailinput.current.value);
        let file_fld= (fileinput.current.value);
        let phone_fld= (phoneinput.current.value);
        let location_fld= (locationinput.current.value);


        // Phone Regex Code
        let phone_fltr = document.getElementById("phone_fld");
        var mob_regx = /^([+][9][1]|[9][1]|[0]){0,1}([7-9]{1})([0-9]{9})$/;
        var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        var alpha_allwd = /^[A-Za-z ]+$/;
        // file type
        var allowedExtensions = /(\.doc|\.docx|\.odt|\.pdf|\.wps|\.wks|\.wpd)$/i;
     
        // Fields validation Code
        if(name_fld == '')
        {
            let v1 = document.getElementById("name_fld");
            v1.className += " error_line";

            let er1 = document.getElementById("name_err");
            er1.className += " show_error";
        }
        else if (!name_fld.match(alpha_allwd)) {
            let v1 = document.getElementById("name_fld");
            v1.className += " error_line";

            let er1v = document.getElementById("name_err1");
            er1v.className += " show_error";
        }
        else if(email_fld == '')
        {
            let v2 = document.getElementById("email_fld");
            v2.className += " error_line";

            let er2 = document.getElementById("email_err");
            er2.className += " show_error";
        }
        else if(!email_fld.match(mailformat)) {
            let v2 = document.getElementById("email_fld");
            v2.className += " error_line";

            let er2v = document.getElementById("email_err1");
            er2v.className += " show_error";
        }
        else if(phone_fld == '')
        {
            let v3 = document.getElementById("phone_fld");
            v3.className += " error_line";

            let er3 = document.getElementById("phn_err");
            er3.className += " show_error";
        }
        else if (!mob_regx.test(phone_fltr.value)) {
            let v3 = document.getElementById("phone_fld");
            v3.className += " error_line";

            let er3 = document.getElementById("phn_err1");
            er3.className += " show_error";
        }
        else if(location_fld == '')
        {
            let v4 = document.getElementById("location_fld");
            v4.className += " error_line";

            let er4 = document.getElementById("location_err");
            er4.className += " show_error";
        }
        else if(file_fld == '')
        {
            let v5 = document.getElementById("myFile");
            v5.className += " error_line";

            let er5 = document.getElementById("file_err");
            er5.className += " show_error";
        }
        else if(!allowedExtensions.exec(file_fld)){
            
                // alert('Invalid file type');
                // fileInput.value = '';
                let er6 = document.getElementById("file_err1");
                er6.className += " show_error";
                return false;

                
        }
        else
        {
            fetch('https://script.google.com/macros/s/AKfycbxjXwa_H__4DTdgh22-m9p3K-sKxa7a81030av4UcQRGc_bOsUPdTTrM_irlVZTU3WbIQ/exec', {
                method: 'POST', 
                body: new FormData(form.current),
                
            }).then(res => {

    
                console.log("SUCCESSFULLY SUBMITTED")
                setLoading(false)
                
            })
            .catch(err => console.log(err))


            emailjs.sendForm('service_e420df4', 'template_0vmids6', e.target, 'SsPYHKCapw4h-xBn_')
            .then((result) => {

                console.log(result.text);
                setStatusMessage("Your Message has been sent successfully");
                let bx = document.getElementById("thnk_box");
                bx.className += " thnk_show";

                let frm_bx = document.getElementById("career_form_bx");
                frm_bx.className += " form_hide";

            }, (error) => {

                console.log(error.text);
                setStatusMessage(`${error.text} happened`);

            });  
            e.target.reset()  
        } 

    };

   useEffect(() => {
    $(document).ready(function () {
        var url = window.location.pathname;
        console.log(url);



  var d = new Date();
        var month = d.getMonth() + 1;
        var day = d.getDate();

        // var output = d.getFullYear() + '/' +
        //     (('' + month).length < 2 ? '0' : '') + month + '/' +
        //     (('' + day).length < 2 ? '0' : '') + day;
        var Joinus = day + '/' +
            (('' + month).length < 2 ? '0' : '') + month + '/' +
            (('' + day).length < 2 ? '0' : '') + d.getFullYear();

        $('#joinus_current_date').val(Joinus);

    });
   })

    return (
        <>
            <div className='intg_solution_sec snap_sec be_future_sec' id='careers'>

                <div className='row no_LR_margin'>
                    <div className='col-lg-6 col-md-12 col-12 ing_solu_col_1 convert_form_col1 be_future_col1'>

                        <div className='intg_hd_dv be_future_dv'>
                            {/* <h2 className='big_heading intg_hd_1 fut_hd_1'>Be a Part</h2>
                            <h2 className='big_heading intg_hd_2 convt_hd be_future_head'>of the future</h2> */}

                            <div className='txt_1'>
                                <div className="animate_big_txt ">
                                    <span ref={be_fut_anmt} id='be_fut_anmt'>
                                        <h2  className='big_heading intg_hd_1 fut_hd_1 be_hd' >Be a Part</h2>
                                    </span>
                                </div>
                            </div>
                            
                            <div className='txt_1'>
                                <div className="animate_big_txt ">
                                    <span ref={be_fut_anmt} id='be_fut_anmt'>
                                        <h2 className='big_heading intg_hd_2 convt_hd be_future_head be_hd'>of the future</h2>
                                    </span>
                                </div>
                            </div>

                        </div>

                      
                        <div className='be_future be_future_heading_sec p_opacity' ref={be_fut_para} id="be_fut_para">
                            
                            <p className='sub_para be_ttl'>
                            Our culture is built around our values of agility, collaboration, and excellence. Our employees bring these values alive every day, through every action.
                            </p>
                            <p className='para ovrview_para be_ttl be_future_para'>
                            The combination of high performance and inclusivity helps every employee and partner at Horizon make a difference individually and collectively.
                            </p>

                            <p className='para ovrview_para be_ttl be_future_para'>
                            We are an 'Equal Employment Opportunity' employer. One-third of our workforce comprises women including our top leadership. </p> 

                            <p className='para ovrview_para be_ttl be_future_para'>
                            We provide a safe and inclusive work environment where people of every race, religion, gender, caste and community can collaborate and advance. We nurture our team members through employee-friendly policies, benefits and multiple learning and development opportunities. </p>

                            {/* <a href='#' className='orange_arrow_btn future_btn_1'>Life at Horizon</a> */}

                            <a className='orange_arrow_btn future_btn_2 career_btn'>Join Us</a>
                           
                        </div>

                       

                    </div>

                    <div className='col-lg-6 col-md-12 col-12 ing_solu_col_2 convert_form_col2 p_opacity' ref={be_fut_para} id="be_fut_para">

                        <Slider {...be_future_slider} className='be_future_slider'>
                            <div className='be_fut_sld'>
                                <img className=' ' src={require('../../assets/img/be_future_img_1.jpg')} ></img>
                            </div>
                            <div className='be_fut_sld'>
                                <img className=' ' src={require('../../assets/img/be_future_img_2.jpg')} ></img>
                            </div>
                            <div className='be_fut_sld'>
                                <img className=' ' src={require('../../assets/img/be_future_img_3.jpg')} ></img>
                            </div>
                            <div className='be_fut_sld'>
                                <img className=' ' src={require('../../assets/img/be_future_img_4.jpg')} ></img>
                            </div>
                            <div className='be_fut_sld'>
                                <img className=' ' src={require('../../assets/img/be_future_img_5.jpg')} ></img>
                            </div>
                        </Slider>
                        
                    </div>

                </div>


            </div>

            <div className='carrer_overlay'></div>
            <div className='career_popup_box'>
                <img className='career_cls_btn' src={require('../../assets/img/svg/close_icon_wht.svg')}></img>

                
                <div className='caeer_inner_dv'>
                    <h2 className='career_hd p_opacity' ref={be_fut_para} id="be_fut_para">Join us</h2>

                    <form className="row g-3 conversion_form" ref={form} onSubmit={sendEmail} id='career_form_bx'>

                        <input className='page_name' type='hidden' name='Page_name' id='' value='Explore Page' />
                        <input className='current_date' type='hidden' name='Date' id='joinus_current_date' />

                        <div className="col-md-6 conv_frm_spc">
                            <label className="form-label conv_frm_label" >Full Name</label>
                            <input type="text" className="form-control" name='name' id='name_fld' ref={nameinput} onFocus={handleFocus}/>
                            <p className='error_msg' id='name_err'>Please Enter Full Name</p>
                            <p className='error_msg' id='name_err1'>Letters and space only.</p>
                        </div>
                        <div className="col-md-6 conv_frm_spc">
                            <label className="form-label">Email Address</label>
                            <input type="email" className="form-control" name='email' id='email_fld' ref={emailinput} onFocus={handleFocus}/>
                            <p className='error_msg' id='email_err'>Please Enter Email Address</p>
                            <p className='error_msg' id='email_err1'>Please Enter Valid Email Address</p>
                        </div>
                        <div className="col-md-6 conv_frm_spc">
                            <label className="form-label">Phone No</label>
                            <input type="number" name='phone' className="form-control" id='phone_fld' ref={phoneinput} onFocus={handleFocus1}/>
                            <p className='error_msg' id='phn_err'>Please Enter Phone No</p>
                            <p className='error_msg' id='phn_err1'>Please Enter Valid Phone No</p>
                        </div>  
                        <div className="col-md-6 conv_frm_spc">
                            <label className="form-label conv_frm_label" >Location</label>
                            <input type="text" className="form-control" name='location' id='location_fld' ref={locationinput} onFocus={handleFocus}/>
                            <p className='error_msg' id='location_err'>Please Enter Location</p>
                        </div>
                        <div className="col-md-6 conv_frm_spc">
                            <label className="form-label">Attach CV</label>
                            <input type="file" id="myFile" name="cv" placeholder='Attach CV'  ref={fileinput} onFocus={handleFocus}/>
                            <p className='error_msg' id='file_err'>Please Attach CV</p>
                            <p className='error_msg' id='file_err1'>Please Attach valid file</p>
                        </div>

                        <div className="col-12 btn_col">
                            <input type="submit" className="btn btn-primary conv_btn" value='Submit'></input>
                        </div>
                    </form>

                    <p className='thnk' id='thnk_box'>Your form has been sent successfully</p>    


                </div>
            </div>

        </>
    )
}
