import React from "react";
import { useEffect, useRef } from "react";
import $ from "jquery";
import { gsap } from "../../helper/common";
import "../../assets/css/prk_overview.css";

export default function Explore_overview() {
  // Heading text animation variable
  const txt_animate_pi_1 = useRef(null);
  const exp_ovr_para = useRef(null);
  const exp_ovr_subpoint = useRef(null);
  const exp_ovr_subpoint1 = useRef(null);
  const exp_ovr_subpoint2 = useRef(null);
  const exp_ovr_subpoint3 = useRef(null);
  const exp_ovr_subpoint4 = useRef(null);

  const exp_sub_hd1 = useRef(null);
  const exp_sub_hd2 = useRef(null);
  const exp_sub_hd3 = useRef(null);
  const exp_sub_hd4 = useRef(null);
  const exp_sub_hd5 = useRef(null);

  useEffect(() => {
    //Explore overview read-more
    $(".moreless_button_exp").on("click", function () {
      console.log("working");
      $(".moretext_exp").slideToggle();
      if ($(".moreless_button_exp").text() == "Read more") {
        $(this).text("Read less");
      } else {
        $(this).text("Read more");
      }
    });

    // Heading text animation code
    gsap.to("#exp_sub_hd1", {
      y: 0,
      duration: 1.3,
      ease: "power4.out",
      delay: 0.3,
      scrollTrigger: {
        trigger: "#exp_sub_hd1",
        markers: false,
      },
    });
    gsap.to("#exp_sub_hd2", {
      y: 0,
      duration: 1.3,
      ease: "power4.out",
      delay: 0.3,
      scrollTrigger: {
        trigger: "#exp_sub_hd2",
        markers: false,
      },
    });
    gsap.to("#exp_sub_hd3", {
      y: 0,
      duration: 1.3,
      ease: "power4.out",
      delay: 0.3,
      scrollTrigger: {
        trigger: "#exp_sub_hd3",
        markers: false,
      },
    });
    gsap.to("#exp_sub_hd4", {
      y: 0,
      duration: 1.3,
      ease: "power4.out",
      delay: 0.3,
      scrollTrigger: {
        trigger: "#exp_sub_hd4",
        markers: false,
      },
    });
    gsap.to("#exp_sub_hd5", {
      y: 0,
      duration: 1.3,
      ease: "power4.out",
      delay: 0.3,
      scrollTrigger: {
        trigger: "#exp_sub_hd5",
        markers: false,
      },
    });

    // Para animation code
    gsap.to("#exp_ovr_para", {
      opacity: 1,
      duration: 1.5,
      ease: "linear",
      delay: 0.9,
      scrollTrigger: {
        trigger: "#exp_ovr_para",
        markers: false,
      },
    });
    gsap.to("#exp_ovr_subpoint", {
      opacity: 1,
      duration: 1.5,
      ease: "linear",
      delay: 0.9,
      scrollTrigger: {
        trigger: "#exp_ovr_subpoint",
        markers: false,
      },
    });
    gsap.to("#exp_ovr_subpoint1", {
      opacity: 1,
      duration: 1.5,
      ease: "linear",
      delay: 0.9,
      scrollTrigger: {
        trigger: "#exp_ovr_subpoint1",
        markers: false,
      },
    });
    gsap.to("#exp_ovr_subpoint2", {
      opacity: 1,
      duration: 1.5,
      ease: "linear",
      delay: 0.9,
      scrollTrigger: {
        trigger: "#exp_ovr_subpoint2",
        markers: false,
      },
    });
    gsap.to("#exp_ovr_subpoint3", {
      opacity: 1,
      duration: 1.5,
      ease: "linear",
      delay: 0.9,
      scrollTrigger: {
        trigger: "#exp_ovr_subpoint3",
        markers: false,
      },
    });
    gsap.to("#exp_ovr_subpoint4", {
      opacity: 1,
      duration: 1.5,
      ease: "linear",
      delay: 0.9,
      scrollTrigger: {
        trigger: "#exp_ovr_subpoint4",
        markers: false,
      },
    });
  }, []);

  return (
    <>
      <div className="ovrview_sec mob_pd_LR snap_sec tab_pd_LR" id="">
        <div className="cstm_container">
          <div className="row ">
            <div
              className="col-lg-7 col-md-7 col-12 ovrview_col exp_col1 p_opacity"
              ref={exp_ovr_para}
              id="exp_ovr_para"
            >
              <p className="section_name">WE ARE HORIZON</p>

              <div>
                <p className="sub_para ovrview_subpara">
                  Horizon Industrial Parks offer one of India's most significant
                  Grade A portfolios of high-quality, modern industrial and
                  logistics parks. These 37 industrial and logistics parks in 10
                  key markets, spread across 1800 acres, come with a 44 million
                  square feet development potential.
                </p>

                <p className="para ovrview_para">
                  Our parks are built to the global standards of institutional
                  players with world-class infrastructure, standardized
                  specifications, and facilities designed to make the work
                  environment highly productive.
                </p>

                <p className="para ovrview_para">
                  The portfolio is anchored by customers in fast-growing sectors
                  such as Third-party logistics, e-Commerce, Automotive & Auto
                  Ancillaries, Aerospace, Engineering, FMCG, and Retail. We are
                  continuously expanding our footprint in India to meet our
                  customers' business requirements proactively.
                </p>

                <p className="para ovrview_para moretext_exp">
                  Our access to Blackstone's global intellectual capital and
                  scale, combined with local partnership prospects, provides us
                  the right opportunity to accelerate growth and deliver
                  exceptional quality to our customers while contributing to our
                  communities. We are committed to supporting India's economic
                  aspirations by providing a world-class logistics
                  infrastructure and driving job creation.{" "}
                </p>

                <a className="moreless_button_exp moreless_ttl exp_ov_btn">
                  Read more
                </a>
              </div>
            </div>

            <div className="col-lg-5 col-md-5 col-12">
              <div className="ovrview_div">
                {/* <div className='ovr_lnd_area_spc'> 
                                        <p className='ovrview_subpoints p_opacity' ref={exp_ovr_subpoint} id='exp_ovr_subpoint'>Value of Assets</p>
                                        <div className='    '>
                                            <p className='ovrview_subpoints_sub_heading' ref={exp_sub_hd1}  id='exp_sub_hd1'>$700 million +</p>
                                        </div>
                                        
                                    </div> */}
                <div className="ovr_lnd_area_spc">
                  <p
                    className="ovrview_subpoints p_opacity"
                    ref={exp_ovr_subpoint1}
                    id="exp_ovr_subpoint1"
                  >
                    Fully Managed
                  </p>
                  <div className="exp_sub_hd_animate">
                    <p
                      className="ovrview_subpoints_sub_heading"
                      ref={exp_sub_hd2}
                      id="exp_sub_hd2"
                    >
                      37 Parks
                    </p>
                  </div>
                </div>
                <div className="ovr_lnd_area_spc">
                  <p
                    className="ovrview_subpoints p_opacity"
                    ref={exp_ovr_subpoint2}
                    id="exp_ovr_subpoint2"
                  >
                    Development potential
                  </p>
                  <div className="exp_sub_hd_animate">
                    <p
                      className="ovrview_subpoints_sub_heading"
                      ref={exp_sub_hd3}
                      id="exp_sub_hd3"
                    >
                      44 million sq ft
                    </p>
                  </div>
                </div>
                <div className="ovr_lnd_area_spc">
                  <p
                    className="ovrview_subpoints p_opacity"
                    ref={exp_ovr_subpoint3}
                    id="exp_ovr_subpoint3"
                  >
                    Total Portfolio
                  </p>
                  <div className="exp_sub_hd_animate">
                    <p
                      className="ovrview_subpoints_sub_heading"
                      ref={exp_sub_hd4}
                      id="exp_sub_hd4"
                    >
                      1800 Acres
                    </p>
                  </div>
                </div>
                <div className="ovr_lnd_area_spc">
                  <p
                    className="ovrview_subpoints p_opacity"
                    ref={exp_ovr_subpoint4}
                    id="exp_ovr_subpoint4"
                  >
                    Presence
                  </p>
                  <div className="exp_sub_hd_animate">
                    <p
                      className="ovrview_subpoints_sub_heading"
                      ref={exp_sub_hd5}
                      id="exp_sub_hd5"
                    >
                      10 Markets
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
