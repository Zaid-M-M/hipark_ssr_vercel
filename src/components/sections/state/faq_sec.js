import React from 'react';
import '../../../assets/css/faq_sec.css';
import '../../../assets/css/governance.css';
import $ from "jquery";
import { useEffect } from "react";
import useFetch from "react-fetch-hook";
import { useParams } from "react-router-dom";

export default function Faq_sec() {
  let { slug } = useParams(); 
  const { isLoading, data, error } = useFetch(
    `https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-json/wp/v2/states/?slug=${slug}`
  );

  useEffect(() => {
    $(window).on('load', function() {
          
      setTimeout(function () {
        console.log('Number of .col_faq_1 elements found:', $('.faq_sec .col_faq_1').length);
            if ($('.faq_sec .col_faq_1').length <= 0) {
                $('.faq_sec').hide();
            }else {
                $('.faq_sec').show();
            }
        }, 3000);
  
      });

  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error || !data || data.length === 0) {
    return null; // or display an error message as per your requirement
  }

 console.log(data,'------------');

  return (
    <>

      <div className='faq_sec snap_sec mob_pd_LR tab_pd_LR state_info_sec'>
        <div className='cstm_container'>
          <div className='row'>
            <div className='col-12'>
              <h2 className='section_sub_heading'>Frequent questions</h2>
            </div>
          </div>
          {data && data.map(({ id, title, acf }) => (
            <div className='row' key={id}>
              {acf.faq_list && acf.faq_list.length > 0 && (
                <div className='col-lg-6 col-md-12 col-12 col_faq_1'>
                  <div id="accordion_faq1" className='accord_faq'>
                    {acf.faq_list.map(faq_list1 => (
                      <div className="card intg_card" key={faq_list1.faq_no}>
                        <div className="card-header intg_card_header">
                          <a className="btn intg_btn collapsed" data-bs-toggle="collapse" href={`#collapse${faq_list1.faq_no}`} id='assts_dev'>
                            <span className='plus_icon accord_icon'>+</span><span className='minus_icon accord_icon'>-</span>
                            {faq_list1.faq_title}
                          </a>
                        </div>
                        <div id={`collapse${faq_list1.faq_no}`} className="collapse" data-bs-parent="#accordion_faq1">
                          <div className="card-body intg_card_body_desc gvr_card">
                            <p className='accord_para gvr_accord' dangerouslySetInnerHTML={{ __html: faq_list1.faq_description }}></p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              {acf.faq_list_2 && acf.faq_list_2.length > 0 && (
                <div className='col-lg-6 col-md-12 col-12 col_faq_2'>
                  <div id="accordion_faq2" className='accord_faq'>
                    {acf.faq_list_2.map(faq_list2 => (
                      <div className="card intg_card" key={faq_list2.faq_no_2}>
                        <div className="card-header intg_card_header">
                          <a className="btn intg_btn collapsed" data-bs-toggle="collapse" href={`#collapse${faq_list2.faq_no_2}`} id='assts_dev'>
                            <span className='plus_icon accord_icon'>+</span><span className='minus_icon accord_icon'>-</span>
                            {faq_list2.faq_title_2}
                          </a>
                        </div>
                        <div id={`collapse${faq_list2.faq_no_2}`} className="collapse" data-bs-parent="#accordion_faq2">
                          <div className="card-body intg_card_body_desc gvr_card">
                            <p className='accord_para gvr_accord' dangerouslySetInnerHTML={{ __html: faq_list2.faq_description_2 }}></p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
   
    </>
  );
}
