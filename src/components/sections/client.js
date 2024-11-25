import React from 'react'
import { useEffect, useRef } from "react";
import $ from "jquery";
import { gsap } from '../../helper/common'
import '../../assets/css/client.css'

export default function Client() {

    // Heading text animation variable
    const clint_big_hd = useRef(null);
    const clint_tab = useRef(null);

    useEffect(() => {
    
        // Heading text animation code
        gsap.to("#clint_big_hd", {
            y:0,
            duration: 1.5,
            ease: "power4.out",
            delay: 0.3,
            scrollTrigger: {
                trigger: "#clint_big_hd",
                markers: false
            }
        });

        // Para animation code
        gsap.to("#clint_tab", {
            opacity:1,
            duration: 1.5,
            ease: "linear",
            delay: 0.9,
            scrollTrigger: {
                trigger: "#clint_tab",
                markers: false
            }
        });


        $('#client_dropdown').on('change',function(){
            $('.client_logo_tab').fadeOut('slow');
            // $('.client_logo_tab').addClass('fade');
            $('#' + $(this).val()).fadeIn('slow');
            $('#' + $(this).val()).removeClass('fade');
        });


    }, []);

    return (
        <>
            <div className='client_sec mob_pd_LR snap_sec tab_pd_LR' id='brand_we_serve'>
                <div className='cstm_container'>

                    <div className='row'>
                        <div className='col-12'>
                            {/* <h2 className='big_heading hdg_client'>OUR<br /> CLIENTS</h2> */}
                            <div className="animate_big_txt ">
                                <h2 ref={clint_big_hd} className='big_heading hdg_client' id='clint_big_hd'>Brands</h2>
                            </div>
                            <div className="animate_big_txt ">
                                <h2 ref={clint_big_hd} className='big_heading hdg_client' id='clint_big_hd'>we serve</h2>
                            </div>
                        </div>



                        {/* tab starts here */}

                        <div className="container mt-3 p_opacity" ref={clint_tab} id='clint_tab'>
                            {/* Nav pills  */}

                            <select className='client_mob_drop' id='client_dropdown'>
                                <option value='home'>Auto {'&'} Auto Components</option>
                                <option value='menu1'>E-Commerce</option>
                                <option value='menu2'>Engineering {'&'} Aerospace</option>
                                <option value='menu3'>Logistics</option>
                                <option value='menu4'>Oil, Energy {'&'} Chemicals</option>
                                <option value='menu5'>Others</option>
                            </select> 
                            
                            <ul className="nav nav-pills cstm_client_tabs" role="tablist">
                                <li className="nav-item">
                                    <a className="nav-link active cstm_link" data-bs-toggle="pill" href="#home">Auto {'&'} Auto Components</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link cstm_link" data-bs-toggle="pill" href="#menu1">E-Commerce</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link cstm_link" data-bs-toggle="pill" href="#menu2">Engineering {'&'} Aerospace</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link cstm_link" data-bs-toggle="pill" href="#menu3">Logistics</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link cstm_link" data-bs-toggle="pill" href="#menu4">Oil, Energy {'&'} Chemicals</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link cstm_link clients_link" data-bs-toggle="pill" href="#menu5">Others</a>
                                </li>
                            </ul>

                               
                           
                            {/*  Tab panes  */}
                            <div className="tab-content">

                                <div id="home" className="container tab-pane active fade show client_logo_tab"><br />
                                    <div className='img_row_1'>
                                        <div className='img_col1'><img className='' src={require('../../assets/img/svg/Auto/SVG/Frame 1Auto.svg')} ></img></div>
                                        <div className='img_col1'><img className='' src={require('../../assets/img/svg/Auto/SVG/Frame 2Auto.svg')} ></img></div>
                                        <div className='img_col1'><img className='' src={require('../../assets/img/svg/Auto/SVG/Frame 3Auto.svg')} ></img></div>
                                        <div className='img_col1'><img className='' src={require('../../assets/img/svg/Auto/SVG/Frame 4Auto.svg')} ></img></div>
                                        <div className='img_col1 non_charcol_img'><img className='' src={require('../../assets/img/svg/Auto/SVG/oetiker.svg')} ></img></div>
                                        <div className='img_col1 charcol_img'><img className='' src={require('../../assets/img/svg/Auto/SVG/oetiker1.svg')} ></img></div>
                    
                                        <div className='img_col1 '><img className='' src={require('../../assets/img/svg/Auto/SVG/Frame 7Auto.svg')} ></img></div>
                                        <div className='img_col1 lumax_logo'><img className='' src={require('../../assets/img/svg/Auto/SVG/lumax_logo.svg')} ></img></div>
                                    
                                    </div>
                                   
                                </div>

                                <div id="menu1" className="container tab-pane fade client_logo_tab"><br />
                                    <div className='img_row_1'>
                                        <div className='img_col1'><img className='' src={require('../../assets/img/svg/Ecommerce/SVG/amazon.svg')} ></img></div>
                                        <div className='img_col1 non_charcol_img'><img className='' src={require('../../assets/img/svg/Ecommerce/SVG/blinkit.svg')} ></img></div>
                                        <div className='img_col1 non_charcol_img'><img className='' src={require('../../assets/img/svg/Ecommerce/SVG/dealshare.svg')} ></img></div>
                                        <div className='img_col1 non_charcol_img'><img className='' src={require('../../assets/img/svg/Ecommerce/SVG/decathlon.svg')} ></img></div>
                                        <div className='img_col1 non_charcol_img'><img className='' src={require('../../assets/img/svg/Ecommerce/SVG/firstcry.svg')} ></img></div>

                                        <div className='img_col1 charcol_img'><img className='' src={require('../../assets/img/svg/Ecommerce/SVG/blinkit1.svg')} ></img></div>
                                        <div className='img_col1 charcol_img'><img className='' src={require('../../assets/img/svg/Ecommerce/SVG/dealshare1.svg')} ></img></div>
                                        <div className='img_col1 charcol_img'><img className='' src={require('../../assets/img/svg/Ecommerce/SVG/decathlon1.svg')} ></img></div>
                                        <div className='img_col1 charcol_img'><img className='' src={require('../../assets/img/svg/Ecommerce/SVG/firstcry1.svg')} ></img></div>
                                        <div className='img_col1'><img className='' src={require('../../assets/img/svg/Ecommerce/SVG/flipkart.svg')} ></img></div>
                                        {/* <div className='img_col1'><img className='' src={require('../../assets/img/svg/Ecommerce/SVG/instacart.svg')} ></img></div> */}
                                        <div className='img_col1 non_charcol_img'><img className='' src={require('../../assets/img/svg/Ecommerce/SVG/myntra.svg')} ></img></div>
                                        <div className='img_col1 charcol_img'><img className='' src={require('../../assets/img/svg/Ecommerce/SVG/myntra1.svg')} ></img></div>
                                        <div className='img_col1'><img className='' src={require('../../assets/img/svg/Ecommerce/SVG/reliance retail.svg')} ></img></div>
                                    </div>
                                </div>

                                <div id="menu2" className="container tab-pane fade client_logo_tab"><br />
                                    <div className='img_row_1'>
                                        <div className='inside_col'>
                                            <div className='img_col1'><img src={require('../../assets/img/svg/Engineering/SVG/Frame 2Engineering.svg')} ></img></div>
                                            <div className='img_col1'><img src={require('../../assets/img/svg/Engineering/SVG/Frame 3Engineering.svg')} ></img></div>
                                            <div className='img_col1'><img src={require('../../assets/img/svg/Engineering/SVG/Frame 4Engineering.svg')} ></img></div>
                                            <div className='img_col1'><img src={require('../../assets/img/svg/Engineering/SVG/Frame 6Engineering.svg')} ></img></div>
                                        </div>
                                    </div>

                                </div>
                                <div id="menu3" className="container tab-pane fade client_logo_tab"><br />
                                    <div className='img_row_1'>
                                        <div className='img_col1'><img className='' src={require('../../assets/img/svg/Logistics/SVG/Frame 8Logistics.svg')} ></img></div>
                                        
                                        <div className='img_col1'><img className='' src={require('../../assets/img/svg/Logistics/SVG/Frame 2Logistics.svg')} ></img></div>
                                        <div className='img_col1'><img className='' src={require('../../assets/img/svg/Logistics/SVG/Frame 9Logistics.svg')}></img></div>
                                        <div className='img_col1'><img className='' src={require('../../assets/img/svg/Logistics/SVG/Frame 4Logistics.svg')} ></img></div>
                                       
                                        <div className='img_col1'><img className='' src={require('../../assets/img/svg/Logistics/SVG/Frame 11Logistics.svg')} ></img></div>
                                    
                            
                                            <div className='img_col2'><img className='' src={require('../../assets/img/svg/Logistics/SVG/ecom_express.svg')} ></img></div>
                                            <div className='img_col2 safe_express'><img className='' src={require('../../assets/img/svg/Logistics/SVG/Frame 10Logistics.svg')} ></img></div>
                                            <div className='img_col2'><img className='' src={require('../../assets/img/svg/Logistics/SVG/acci.svg')} ></img></div>
                                            <div className='img_col2 safe_express non_charcol_img'><img className='' src={require('../../assets/img/svg/Logistics/SVG/safe_express.svg')} ></img></div>
                                            <div className='img_col2 safe_express charcol_img'><img className='' src={require('../../assets/img/svg/Logistics/SVG/safe_express1.svg')} ></img></div>
                                    
                                    </div>
                                </div>

                                <div id="menu4" className="container tab-pane fade client_logo_tab"><br />
                                    <div className='img_row_1'>
                                        <div className='img_col1 non_charcol_img'><img className='' src={require('../../assets/img/svg/Oil&Energy/SVG/wacker.svg')} ></img></div>
                                        <div className='img_col1 charcol_img'><img className='' src={require('../../assets/img/svg/Oil&Energy/SVG/wacker1.svg')} ></img></div>
                                        <div className='img_col1'><img className='' src={require('../../assets/img/svg/Oil&Energy/SVG/Frame 3Oil&Energy.svg')} ></img></div>
                                        <div className='img_col1'><img className='' src={require('../../assets/img/svg/Oil&Energy/SVG/Frame 4Oil&Energy.svg')} ></img></div>
                                        <div className='img_col1'><img className='' src={require('../../assets/img/svg/Oil&Energy/SVG/Frame 9Oil&Energy.svg')}></img></div>
                                        <div className='img_col1 non_charcol_img'><img className='' src={require('../../assets/img/svg/Oil&Energy/SVG/SMA.svg')}></img></div>
                                        <div className='img_col1 charcol_img'><img className='' src={require('../../assets/img/svg/Oil&Energy/SVG/SMA1.svg')}></img></div>
                                    
                         
                            
                                        <div className='img_col1'><img className='' src={require('../../assets/img/svg/Auto/SVG/Frame 5Auto.svg')} ></img></div>

                                        <div className='img_col1 non_charcol_img'><img className='' src={require('../../assets/img/svg/Oil&Energy/SVG/lubrikote.svg')} ></img></div>
                                        <div className='img_col1 charcol_img'><img className='' src={require('../../assets/img/svg/Oil&Energy/SVG/lubrikote1.svg')} ></img></div>
                                      
                                        <div className='img_col2 non_charcol_img'><img className='' src={require('../../assets/img/svg/Oil&Energy/SVG/fosroc.svg')} ></img></div>
                                        <div className='img_col2 charcol_img'><img className='' src={require('../../assets/img/svg/Oil&Energy/SVG/fosroc1.svg')} ></img></div>

                                    </div>

                                </div>

                                <div id="menu5" className="container tab-pane fade client_logo_tab"><br />
                                    <div className='img_row_1'>
                                 
                                        <div className='img_col1'><img className='' src={require('../../assets/img/svg/others/SVG/thermo_fisher.svg')} ></img></div>
                                            <div className='img_col1'><img className='' src={require('../../assets/img/svg/others/SVG/Frame 2others.svg')} ></img></div>
                                            <div className='img_col1'><img className='' src={require('../../assets/img/svg/others/SVG/Frame 4others.svg')} ></img></div>
                                            <div className='img_col1'><img className='' src={require('../../assets/img/svg/others/SVG/siegenia.svg')} ></img></div> 
                                            <div className='img_col1 non_charcol_img'><img className='' src={require('../../assets/img/svg/others/SVG/adtya_birla_group.svg')} ></img></div> 
                                            <div className='img_col1 charcol_img'><img className='' src={require('../../assets/img/svg/others/SVG/adtya_birla_group1.svg')} ></img></div> 

                                    </div>
                                </div>


                            </div>

                        </div>
                        {/* tabs ends here */}
                    </div>

                </div>
            </div>


        </>
    )
}
