import React from 'react'
import Slider from 'react-slick';
import { useEffect, useRef , useState } from "react";
import $ from "jquery";
import mutedIcon from "../../assets/img/svg/mute_icon.svg";
import unmutedIcon from "../../assets/img/svg/unmute_icon.svg";
import '../../assets/css/home_spotlight_slider.css'
import "../../helper/common";

export default function Home_spotlight_slider() {
  const [isMuted, setIsMuted] = useState(true);
    const [currentSlide, setCurrentSlide] = useState(0);
    const sliderRef = React.createRef();
    const videoRefs = [
        useRef(null), 
        useRef(null), 
    ];

    const home_slider = {
        dots: false,
        loop: true,
        autoplay: false, // Disable autoplay here
        pauseOnHover: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        beforeChange: (oldIndex, newIndex) => {

            if (videoRefs[oldIndex].current) {
                videoRefs[oldIndex].current.pause();
            }

            setCurrentSlide(newIndex);
        },
    };

    const slideAutoplayTimes = [7000, 52000];


    // gloabl line GSAP
     

    // Heading text animation variable
    const spot_sld_txt = useRef(null);

    const videoEl_spotlight= useRef(null);

    const attemptPlay_spotlight = () => {
      videoEl_spotlight &&
        videoEl_spotlight.current &&
        videoEl_spotlight.current.play().catch((error) => {
          console.error("Error attempting to play", error);
        });
    };

    const handleToggleMute = () => {
      if (videoEl_spotlight.current) {
        videoEl_spotlight.current.muted = !isMuted;
        setIsMuted(!isMuted);
      }
    };


    useEffect(() => {

        
        $(window).on("scroll", function(){
            if ($(this).scrollTop() >= 800) {        
                $('.home_spotlight_slider_sec').fadeOut();  
            }               
            else {
                $('.home_spotlight_slider_sec').fadeIn();
            }
        });

        $(window).on("scroll", function(){
            if ($(this).scrollTop() >= 30) {        
                $('.home_spotlight_slider_sec').css("z-index","-1")   
            }               
            else {
                $('.home_spotlight_slider_sec').css("z-index","0")   
            }
        });


      const slider = sliderRef.current;
      if (slider) {
        const currentAutoplayTime = slideAutoplayTimes[currentSlide];
  
        if (currentAutoplayTime > 0) {
          const intervalId = setInterval(() => {
            if (slider.innerSlider.state.currentSlide === currentSlide) {
              slider.slickNext();
            }
          }, currentAutoplayTime);
  
          return () => {
            clearInterval(intervalId);
          };
        }
      }

      attemptPlay_spotlight();

    }, [currentSlide]);

    // useEffect(() => {
    //     // Play the video in the current slide
    //     if (videoRefs[currentSlide].current) {
    //       videoRefs[currentSlide].current.play().catch((error) => {
    //         console.error("Error attempting to play", error);
    //       });
    //     }
    //   }, [currentSlide]);

  return (
    <>
        <div className='home_spotlight_slider_sec'>
                <Slider {...home_slider} className='home_slider' ref={sliderRef}>
                    <div className='hm_sld hs_0' id='hm_sld'>
                        <div className='cstm_container tab_pd_LR'>
                            <div className='hs_content'>
                                <div className='inner_cnt'>
                                    <h1 className='big_heading sp_sld1_txt'>Grade A </h1>
                                    <p className='section_sub_heading spot_hd'>Industrial & Logistics Parks </p>
                                </div>
                            </div>
                            {/* <img className='sld_arrow' src={require('../../assets/img/home_sldr_arrow.png')}></img> */}
                        </div>  
                        <div className="ovrly_box"></div>  

                        <img className='sld_arrow sticky_arrow chrome_spot_img' src={require('../../assets/img/home_sldr_arrow.png')} alt=""></img>
                        <img className='sld_arrow sticky_arrow safari_spot_img' src={require('../../assets/img/home_sldr_arrow_safari.png')} alt=""></img> 

                    </div>


                    <div className='hm_sld hs_1' id='hm_sld'>
                        <div className='cstm_container tab_pd_LR'>
                            <div className='hs_content'>
                                <div className='inner_cnt'>
                                    {/* <p className='section_sub_heading sp_sld1_txt'>Take your business to </p> */}

                                    <div className='spot_rvl_animation'>
                                        {/* <h1 className='big_heading spot_hd sp_sld1_hd' >NEW HEIGHTS</h1> */}
                                    </div>

                                    
  
                                    
                                </div>
                            </div>
                            {/* <img className='sld_arrow' src={require('../../assets/img/home_sldr_arrow.png')}></img> */}
                        </div> 
                        {/* <div className="ovrly_box"></div> */}
                        {/* <video className='spot_video' playsInline loop muted src={require('../../assets/video/hipark_spotlight_video.mp4')} ref={videoEl_spotlight} /> */}
                        <video id='spotlight_video' className='spot_video' playsInline autoPlay loop muted={isMuted} src={require('../../assets/video/hip_spotlight.mp4')} type="video/mp4" ref={videoEl_spotlight} />
                        
                        <button className='sound_btn' onClick={handleToggleMute}>
                          <img
                            src={isMuted ? unmutedIcon : mutedIcon}
                            alt={isMuted ? "Unmute" : "Mute"}
                          />
                        </button>

                    </div>

                    
            
                </Slider>
                
                {/* <img className='sld_arrow sticky_arrow chrome_spot_img' src={require('../../assets/img/home_sldr_arrow.png')}></img>
                <img className='sld_arrow sticky_arrow safari_spot_img' src={require('../../assets/img/home_sldr_arrow_safari.png')}></img> */}

                
 

        </div>
        <img className='hip_tag_img' src={require('../../assets/img/hip_tag.png')} alt='HiPark Tag'></img>
        <div className='home_spotlight_space'></div>
       
    </>
  )
}
