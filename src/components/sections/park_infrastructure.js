import React from 'react'
import Infra_mob_tab from '../sections/infra_mob_tab';
import { useEffect, useRef } from "react";
import { gsap } from '../../helper/common'
import '../../assets/css/park_infrastructure.css';
import $ from "jquery";

export default function Park_infrastructure({initialData}) {

    // Heading text animation variable
    const txt_animate_p3 = useRef(null);

    const struct_fade = useRef(null);

    useEffect(() => {

        // Heading text animation code
        gsap.to("#txt_animate_p3", {
            y: 0,
            duration: 1.3,
            ease: "power4.out",
            delay: 0.3,
            scrollTrigger: {
                trigger: "#txt_animate_p3",
                markers: false
            }
        });

        // Para animation code
        gsap.to("#struct_fade", {
            opacity:1,
            duration: 1.5,
            ease: "linear",
            delay: 0.9,
            scrollTrigger: {
                trigger: "#struct_fade",
                markers: false
            }
        });

        $(document).ready(function () {
            var bilaspur_url = window.location.pathname;
            if(bilaspur_url === '/industrial-and-warehousing-park-bilaspur' || bilaspur_url === 'industrial-and-warehousing-park-bilaspur')
            {
                $('.fire_content_dv  .hpt_cotent_para').text('Fire detection, alarms, fire escape doors, K160 sprinklers, external hydrants ')
            }
        });

    }, []);

    return (
        <>
            <div className='park_infra_sec snap_sec'>
                <div className='cstm_container'>

                    <div className='row'>
                        <div className='col-12'>
                            {/* <p className='section_sub_heading value_assets_sub_hd'>Infrastructure Designed to Global Standards </p> */}
                            <div className="animate_txt ">
                                <h2 ref={txt_animate_p3} className='section_sub_heading value_assets_sub_hd ext' id='txt_animate_p3'>Infrastructure Designed to Global Standards </h2>
                            </div>
                        </div>
                    </div>

                    <div className='row'>
                        <div className='col-12 no_padding p_opacity' ref={struct_fade} id='struct_fade'>

                            {/*  Tab Nav */}
                            <ul className="nav nav-pills cstm_client_tabs infra_tab" role="tablist">
                                <li className="nav-item">
                                    <a className="nav-link active cstm_link infra_link" data-bs-toggle="pill" href="#prk_ext">Block Exterior</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link cstm_link infra_link" data-bs-toggle="pill" href="#prk_int">Block Interior</a>
                                </li>
                            </ul>

                            {/*  Tab panes  */}
                            <div className="tab-content prk_infra_content">
                                <div id="prk_ext" className="tab-pane active prk_exterior_col">

                                    <img src={require('../../assets/img/park_exterior.webp')} className='park_plan_img'></img>

                                    {/* Roof Hotspot Div */}
                                    <div className='hotspot_div roof_hotspot'>
                                        <div className='hotspot_circle'>
                                            <div className='orng_circle'></div>
                                        </div>
                                        <div className='hotspot_name roof_hpt_name'>
                                            <p>Roof</p>
                                        </div>
                                    </div>
                                    {/* Roof Content Div */}
                                    <div className='roof_content_dv hpt_content_dv'>
                                        <p className='hpt_cotent_hd'>Roof</p>
                                        {/* <p className='hpt_cotent_para'>Standing seam roof with sturdy bare galvalume sheets for bearing load of solar panels</p> */}
                                        <p className='hpt_cotent_para'>Standing seam roof with sturdy bare galvalume sheets</p>
                                    </div>

                                    {/* Truck Apron Hotspot Div */}
                                    <div className='hotspot_div truck_hotspot'>
                                        <div className='hotspot_circle'>
                                            <div className='orng_circle'></div>
                                        </div>
                                        <div className='hotspot_name truck_hpt_name'>
                                            <p>Truck Apron</p>
                                        </div>
                                    </div>
                                    {/* Truck Apron Content Div */}
                                    <div className='truck_content_dv hpt_content_dv'>
                                        <p className='hpt_cotent_hd'>Truck Apron</p>
                                        <p className='hpt_cotent_para'>16.5m concrete apron with 12m wide roads</p>
                                    </div>

                                    {/* Building height Hotspot Div */}
                                    <div className='hotspot_div building_hght_hotspot'>
                                        <div className='hotspot_circle'>
                                            <div className='orng_circle'></div>
                                        </div>
                                        <div className='hotspot_name building_hght_hpt_name'>
                                            <p>Building Height</p>
                                        </div>
                                    </div>
                                    {/* Building height Content Div */}
                                    <div className='building_hgt_content_dv hpt_content_dv'>
                                        <p className='hpt_cotent_hd'>Building Height</p>
                                        <p className='hpt_cotent_para'>12m at eaves</p>
                                    </div>



                                    {/* Building Structure Hotspot Div */}
                                    <div className='hotspot_div building_strcut_hotspot'>
                                        <div className='hotspot_circle'>
                                            <div className='orng_circle'></div>
                                        </div>
                                        <div className='hotspot_name building_strcut_hpt_name'>
                                            <p>Building Structure</p>
                                        </div>
                                    </div>

                                    {/* Building Structure Content Div */}
                                    <div className='building_struct_content_dv hpt_content_dv'>
                                        <p className='hpt_cotent_hd'>Building Structure</p>
                                        <p className='hpt_cotent_para'>Pre-engineered buildings with optimized column spacing</p>
                                    </div>

                                    {/* Office Area Hotspot Div */}
                                    <div className='hotspot_div office_hotspot'>
                                        <div className='hotspot_circle'>
                                            <div className='orng_circle'></div>
                                        </div>
                                        <div className='hotspot_name office_hpt_name'>
                                            <p>Office Area</p>
                                        </div>
                                    </div>
                                    {/* Office Area Content Div */}
                                    <div className='office_content_dv hpt_content_dv'>
                                        <p className='hpt_cotent_hd'>Office Area</p>
                                        {/* <p className='hpt_cotent_para'>Ground and cold-shell mezzanine floor on 2.5% of total area </p> */}
                                        <p className='hpt_cotent_para'>Ground and bare-shell mezzanine floor on 2.5% of total area </p>
                                    </div>

                                    {/* Parking Hotspot Div */}
                                    <div className='hotspot_div prk_hotspot'>
                                        <div className='hotspot_circle'>
                                            <div className='orng_circle'></div>
                                        </div>
                                        <div className='hotspot_name prk_hpt_name'>
                                            <p>Parking</p>
                                        </div>
                                    </div>
                                    {/* Parking Content Div */}
                                    <div className='prki_content_dv hpt_content_dv'>
                                        <p className='hpt_cotent_hd'>Parking</p>
                                        {/* <p className='hpt_cotent_para'>2- and 4-wheeler parking near park entry and building entrance. Truck parking designed for peak period load</p> */}
                                        <p className='hpt_cotent_para'>2 and 4-wheeler parking, truck parking designed for peak period load</p>
                                    </div>

                                    {/* security Hotspot Div */}
                                    <div className='hotspot_div secu_hotspot'>
                                        <div className='hotspot_circle'>
                                            <div className='orng_circle'></div>
                                        </div>
                                        <div className='hotspot_name secu_hpt_name'>
                                            <p>SECURITY</p>
                                        </div>
                                    </div>
                                    {/* security Content Div */}
                                    <div className='secu_content_dv hpt_content_dv'>
                                        <p className='hpt_cotent_hd'>SECURITY</p>
                                        {/* <p className='hpt_cotent_para'>24* 7 CCTV surveillance at park entry and exit points. Security kiosks and check points at strategic locations.</p> */}
                                        <p className='hpt_cotent_para'>24*7 CCTV surveillance at main gate</p>
                                    </div>

                                </div>

                                <div id="prk_int" className="tab-pane fade prk_interior_col prk_exterior_col ">

                                    <img src={require('../../assets/img/interior.webp')} className='park_plan_img '></img>

                                    {/* EFFICIENT LIGHTING Hotspot Div */}
                                    <div className='hotspot_div light_hotspot'>
                                        <div className='hotspot_circle'>
                                            <div className='orng_circle'></div>
                                        </div>
                                        <div className='hotspot_name light_hpt_name'>
                                            <p>EFFICIENT LIGHTING</p>
                                        </div>
                                    </div>
                                    {/* EFFICIENT LIGHTING Content Div */}
                                    <div className='light_content_dv hpt_content_dv'>
                                        <p className='hpt_cotent_hd'>EFFICIENT LIGHTING</p>
                                        {/* <p className='hpt_cotent_para'>Skylights 3-5% of roof areas. LED light fixtures, PV cells and 100% backup for lighting of common areas and amenities</p> */}
                                        <p className='hpt_cotent_para'>Skylights covering 3-5% of roof areas, LED light fixtures</p>
                                    </div>

                                    {/* WALL Hotspot Div */}
                                    <div className='hotspot_div wall_hotspot'>
                                        <div className='hotspot_circle'>
                                            <div className='orng_circle'></div>
                                        </div>
                                        <div className='hotspot_name wall_hpt_name'>
                                            <p>WALL</p>
                                        </div>
                                    </div>
                                    {/* WALL Content Div */}
                                    <div className='wall_content_dv hpt_content_dv'>
                                        <p className='hpt_cotent_hd'>WALL</p>
                                        {/* <p className='hpt_cotent_para'>Pre-cast concrete walls up to 3.6m height</p> */}
                                        <p className='hpt_cotent_para'>Pre-cast concrete walls/ block walls up to 3.6 m height</p>
                                    </div>

                                    {/* FLOOR Hotspot Div */}
                                    <div className='hotspot_div flr_hotspot'>
                                        <div className='hotspot_circle'>
                                            <div className='orng_circle'></div>
                                        </div>
                                        <div className='hotspot_name flr_hpt_name'>
                                            <p>FLOOR</p>
                                        </div>
                                    </div>

                                    {/* FLOOR Content Div */}
                                    <div className='flr_content_dv hpt_content_dv'>
                                        <p className='hpt_cotent_hd'>FLOOR</p>
                                        {/* <p className='hpt_cotent_para'>Uniformly distributed load 5T/sqm. Flat floors, FM2 compliant design</p> */}
                                        <p className='hpt_cotent_para'>UDL 5T/sqm, FM2-compliant design</p>
                                    </div>

                                    {/* FIRE PROTECTION Hotspot Div */}
                                    <div className='hotspot_div fire_hotspot'>
                                        <div className='hotspot_circle'>
                                            <div className='orng_circle'></div>
                                        </div>
                                        <div className='hotspot_name fire_hpt_name'>
                                            <p>FIRE PROTECTION</p>
                                        </div>
                                    </div>

                                    {/* FLOOR Content Div */}
                                    <div className='fire_content_dv hpt_content_dv'>
                                        <p className='hpt_cotent_hd'>FIRE PROTECTION</p>
                                        {/* <p className='hpt_cotent_para'>Fire detections, alarm and fire escape doors as per norms. K115 type roof sprinkler, K80 type mezzanine sprinklers and external hydrants.</p> */}
                                        <p className='hpt_cotent_para'>Fire detection, alarms, fire escape doors, K160 and K80 sprinklers, external hydrants </p>
                                    </div>

                                    {/* VENTILATION Hotspot Div */}
                                    <div className='hotspot_div vent_hotspot'>
                                        <div className='hotspot_circle'>
                                            <div className='orng_circle'></div>
                                        </div>
                                        <div className='hotspot_name vent_hpt_name'>
                                            <p>VENTILATION</p>
                                        </div>
                                    </div>

                                    {/* VENTILATION Content Div */}
                                    <div className='vent_content_dv hpt_content_dv'>
                                        <p className='hpt_cotent_hd'>VENTILATION</p>
                                        {/* <p className='hpt_cotent_para'> 3-6 air changes per hour as per NBC norms. Passive ventilation through louvers and roof monitors</p> */}

                                        <p className='hpt_cotent_para'> 3-6 air changes, passive ventilation through louvers, and roof monitor</p>
                                    </div>

                                    {/* DOCK AREA Hotspot Div */}
                                    <div className='hotspot_div dck_hotspot'>
                                        <div className='hotspot_circle'>
                                            <div className='orng_circle'></div>
                                        </div>
                                        <div className='hotspot_name dck_hpt_name'>
                                            <p>DOCK AREA</p>
                                        </div>
                                    </div>

                                    {/* DOCK AREA Content Div */}
                                    <div className='dck_content_dv hpt_content_dv'>
                                        <p className='hpt_cotent_hd'>DOCK AREA</p>
                                        {/* <p className='hpt_cotent_para'>Dock height 1.2m with rolling shutters and dock pits.</p> */}
                                        <p className='hpt_cotent_para'>Dock height 1.2m with rolling shutters, dock pits</p>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
            <Infra_mob_tab />
        </>
    )
}
