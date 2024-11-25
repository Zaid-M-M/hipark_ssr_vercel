import React from "react";
import { useEffect, useRef , useState } from "react";
import Customer_speak_model from './customer_speak_model';
import "../../../assets/css/customer_speak_sec.css";
import useFetch from "react-fetch-hook";
import $ from "jquery";


export default function Customer_speak_sec({ initialData }) {

  const data = initialData || [];
  
  const videoCS = useRef(null);
  const videoCSattemptPlay = () => {
    videoCS &&
      videoCS.current &&
      videoCS.current.play().catch((error) => {
        console.error("Error attempting to play", error);
      });
  };

  useEffect(() => {
    videoCSattemptPlay();
  }, []);

  useEffect(() => {

    $('.cs_thumb_anchor').on("click", function() {
      
      $('.desktop_header2.fixed').css('z-index','0');
      $('.customer_speak_popup.open').css('z-index','2');
        // $('html, body').animate({
        //     scrollTop: $(".customer_speak_sec").offset().top
        //  }, 100);
    });

    $('.cs-pp-close').on("click", function() {
      $('.desktop_header2.fixed').css('z-index','14');
      // $('html, body').animate({
      //     scrollTop: $(".customer_speak_sec").offset().top
      //  }, 100);
    });

});

  // const { isLoading, data, error } = useFetch(
  //   "https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-json/wp/v2/customers_speak"
  // );

  const [data1, setData] = useState(null);
  const [visible, setVisible] = useState(false);

  const toggleItem = (cs_item = null) => {
    setData(cs_item);
    setVisible(cs_item !== null);
  };

  return (
    <>

       
      <div className="customer_speak_sec mob_pd_LR tab_pd_LR">
        <div className="cstm_container">
          <div className="row no_LR_margin">

            <div className="col-lg-12 col-md-12 col-12 no_padding">

              <h2 className="section_sub_heading " style={{color: "#313D47"}}>Promises Delivered</h2>

              
              <div className="row no_padding no_LR_margin cs_main_row">
              {data && data.map(({ id , acf , content , title , event_year , event_categories , slug}) => ( 
                <div className="col-lg-6 col-md-6 col-12 no_padding">
                  <div className="row cut_spk_row no_LR_margin">
                    <div className="col-lg-4 col-md-4 col-4 no_padding">
                      <div className="cut_spk_col1_dv">
                        <img src={acf.customer_thumbnail_image}></img>
                        <img className="sc_play_icon" src={require('../../../assets/img/cs_thumb_play_icon.png')}></img>
                      </div>
                    </div>
                    <div className="col-lg-8 col-md-8 col-8 no_padding cs_thumb_col2">
                      <div className="cut_spk_col2_dv">
                        <h3 className="sub_para custom_ttl" dangerouslySetInnerHTML={{ __html: title.rendered }}></h3>
                        <p className="cp_thumb_desc para" dangerouslySetInnerHTML={{ __html: content.rendered }}></p> 
                        <a className="cs_thumb_anchor"  onClick={() => toggleItem({ id , acf , content , title })} >Play Video {'>'}</a>
                      </div>
                    </div>
                  </div>
                </div>

                ))} 
 


              </div>

              

            </div>
            

          </div>
        </div>
        
      </div>

      {visible === true && data1 !== null && (
          <Customer_speak_model data1={data1} closeModal={() => toggleItem()} />
        )}
    
      {/* <div className="customer_speak_sec mob_pd_LR tab_pd_LR" id='testimonial'>
        <div className="cstm_container">
            <div className="row no_LR_margin">
            <div className="col-12 no_padding">
                <h2 className="section_heading">Customers speak</h2>
                <div className="row cut_spk_row no_LR_margin">
                    <div className="col-lg-8 col-md-12 col-12 no_padding">
                        <div className="cut_spk_col1_dv">
                            <iframe id='' className="vm-vid"src="https://player.vimeo.com/video/905851105"  allow="autoplay" allowfullscreen="allowfullscreen" mozallowfullscreen="mozallowfullscreen" msallowfullscreen="msallowfullscreen" oallowfullscreen="oallowfullscreen" webkitallowfullscreen="webkitallowfullscreen"></iframe> 
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-12 col-12 no_padding">
                        <div className="cut_spk_col2_dv">
                            <p className="sub_para">We are passionate about our customers’ success and take pride in their thriving growth stories.</p>
                            <p className="sub_para">Our quick response times, collaborative approach to creating the right-fit solutions and focus on operating sustainably are the qualities our customers and partners have consistently commended and recognised.</p>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
      </div> */}
    </>
  );
}
