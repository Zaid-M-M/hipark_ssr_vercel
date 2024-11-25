import React from "react";
import "../../assets/css/vlu_assets.css";
import { useEffect, useRef } from "react";
import { gsap } from "../../helper/common";

export default function Assets() {
  // gloabl line GSAP

  // Heading text animation variable
  const txt_animate_2 = useRef(null);

  // Heading text animation variable
  const vlu_animate_1 = useRef(null);
  const vlu_animate_2 = useRef(null);
  const vlu_animate_3 = useRef(null);
  const vlu_animate_4 = useRef(null);

  // Para animation variable
  const p_vlu_ani_1 = useRef(null);
  const p_vlu_ani_2 = useRef(null);
  const p_vlu_ani_3 = useRef(null);
  const p_vlu_ani_4 = useRef(null);

  const vlue_hd_fade = useRef(null);

  // border animation variable
  const vluBorder_aniamtion = useRef(null);

  useEffect(() => {
    // Heading text animation code
    gsap.to("#txt_animate_2", {
      y: 0,
      duration: 1.5,
      ease: "power4.out",
      delay: 0.3,
      scrollTrigger: {
        trigger: "#txt_animate_2",
        markers: false,
      },
    });

    // Heading text animation code
    gsap.to("#vlu_animate_1", {
      y: 0,
      duration: 1.5,
      ease: "power4.out",
      delay: 0.3,
      scrollTrigger: {
        trigger: "#vlu_animate_1",
        markers: false,
      },
    });
    // Heading text animation code
    gsap.to("#vlu_animate_2", {
      y: 0,
      duration: 1.5,
      ease: "power4.out",
      delay: 0.3,
      scrollTrigger: {
        trigger: "#vlu_animate_2",
        markers: false,
      },
    });
    // Heading text animation code
    gsap.to("#vlu_animate_3", {
      y: 0,
      duration: 1.5,
      ease: "power4.out",
      delay: 0.3,
      scrollTrigger: {
        trigger: "#vlu_animate_3",
        markers: false,
      },
    });
    // Heading text animation code
    gsap.to("#vlu_animate_4", {
      y: 0,
      duration: 1.5,
      ease: "power4.out",
      delay: 0.3,
      scrollTrigger: {
        trigger: "#vlu_animate_4",
        markers: false,
      },
    });

    // Para animation code
    gsap.to("#p_vlu_ani_1", {
      opacity: 1,
      duration: 1.5,
      ease: "linear",
      delay: 0.9,
      scrollTrigger: {
        trigger: "#p_vlu_ani_1",
        markers: false,
      },
    });

    // Para animation code
    gsap.to("#p_vlu_ani_2", {
      opacity: 1,
      duration: 1.5,
      ease: "linear",
      delay: 0.9,
      scrollTrigger: {
        trigger: "#p_vlu_ani_2",
        markers: false,
      },
    });

    // Para animation code
    gsap.to("#p_vlu_ani_3", {
      opacity: 1,
      duration: 1.5,
      ease: "linear",
      delay: 0.9,
      scrollTrigger: {
        trigger: "#p_vlu_ani_3",
        markers: false,
      },
    });

    // Para animation code
    gsap.to("#p_vlu_ani_4", {
      opacity: 1,
      duration: 1.5,
      ease: "linear",
      delay: 0.9,
      scrollTrigger: {
        trigger: "#p_vlu_ani_4",
        markers: false,
      },
    });

    // Para animation code
    gsap.to("#vlue_hd_fade", {
      opacity: 1,
      duration: 1.5,
      ease: "linear",
      delay: 0.9,
      scrollTrigger: {
        trigger: "#vlue_hd_fade",
        markers: false,
      },
    });

    // border animation code
    gsap.to("#vluBorder_aniamtion", {
      opacity: 1,
      duration: 1,
      ease: "linear",
      delay: 0.5,
      width: "100%",
      scrollTrigger: {
        trigger: "#vluBorder_aniamtion",
        markers: false,
      },
    });
  }, []);

  return (
    <>
      <div className="assets_sec snap_sec mob_pd_LR tab_pd_LR">
        <div className="cstm_container">
          <div className="row assts_hd_row">
            <div className="col-12">
              <p
                className="section_sub_heading value_assets_sub_hd p_opacity"
                ref={vlue_hd_fade}
                id="vlue_hd_fade"
              >
                Total portfolio
              </p>
              <hr
                className="add_border p_opacity"
                ref={vluBorder_aniamtion}
                id="vluBorder_aniamtion"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="animate_big_txt ">
                <h2
                  className="big_heading milion_hd"
                  id="txt_animate_2"
                  ref={txt_animate_2}
                >
                  1800 Acres{" "}
                </h2>
              </div>
              {/* <h2 className='big_heading milion_hd'>$700 Million +</h2> */}
            </div>
          </div>

          <div className="row assts_cnt_row">
            <div className="col-lg-4 col-md-4 col-12 asst_col1">
              <div className="vlu_assets_inner_box1">
                <p
                  className="assets_subpoints p_opacity"
                  ref={p_vlu_ani_1}
                  id="p_vlu_ani_1"
                >
                  development potential
                </p>
                <hr
                  className="add_border p_opacity"
                  ref={vluBorder_aniamtion}
                  id="vluBorder_aniamtion"
                />
                {/* <p className='assets_subpoints_sub_heading'>42+ Million sft</p>  */}
                <div className="vlu_sub_hd_animate ">
                  <p
                    className="assets_subpoints_sub_heading "
                    ref={vlu_animate_1}
                    id="vlu_animate_1"
                  >
                    44 Million sq ft
                  </p>
                </div>
              </div>
              <div className="vlu_assets_inner_box2">
                <p
                  className="assets_subpoints p_opacity"
                  ref={p_vlu_ani_2}
                  id="p_vlu_ani_2"
                >
                  Presence
                </p>
                <hr
                  className="add_border p_opacity"
                  ref={vluBorder_aniamtion}
                  id="vluBorder_aniamtion"
                />
                <div className="vlu_sub_hd_animate ">
                  <p
                    className="assets_subpoints_sub_heading"
                    ref={vlu_animate_2}
                    id="vlu_animate_2"
                  >
                    10 Markets
                  </p>
                </div>
              </div>

              <div className="vlu_assets_inner_box2">
                <p
                  className="assets_subpoints p_opacity"
                  ref={p_vlu_ani_2}
                  id="p_vlu_ani_2"
                >
                  Fully Managed
                </p>
                <hr
                  className="add_border p_opacity"
                  ref={vluBorder_aniamtion}
                  id="vluBorder_aniamtion"
                />
                <div className="vlu_sub_hd_animate ">
                  <p
                    className="assets_subpoints_sub_heading"
                    ref={vlu_animate_2}
                    id="vlu_animate_2"
                  >
                    37 parks
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-8 col-md-8 col-12 asst_col2">
              <img
                className="ast_img p_opacity"
                src={require("../../assets/img/value-asset.webp")}
                ref={vlue_hd_fade}
                id="vlue_hd_fade"
              ></img>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
