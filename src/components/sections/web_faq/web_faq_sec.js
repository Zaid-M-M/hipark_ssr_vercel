import React from 'react'
import '../../../assets/css/faq_sec.css';
import '../../../assets/css/web_faq_sec.css';
import useFetch from "react-fetch-hook";


export default function Web_faq_sec() {

    const { isLoading, data, error } = useFetch(
        `https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-json/wp/v2/website_faq`
    );

  return (
    <>
        <div className='web_faq_sec snap_sec mob_pd_LR tab_pd_LR '>
            <div className='cstm_container'>
                <div className='row'>
                    <div className='col-12'>
                    <h2 className='section_sub_heading'>Frequently Asked questions</h2>
                    </div>
                </div>

                {data && data.map(({ id, title, acf }) => (
                    <div className='row' key={id}>
                        {acf.faq_data && acf.faq_data.length > 0 && (
                            <div className='col-lg-12 col-md-12 col-12 col_faq_1'>
                                <div id="accordion_faq1" className='accord_faq'>
                                    {acf.faq_data.map(faq_data1 => (
                                    <div className="card intg_card" key={faq_data1.web_faq_no}>
                                        <div className="card-header intg_card_header">
                                        <a className="btn intg_btn collapsed" data-bs-toggle="collapse" href={`#collapse${faq_data1.web_faq_no}`} id='assts_dev'>
                                            <span className='plus_icon accord_icon'>+</span><span className='minus_icon accord_icon'>-</span>
                                            {faq_data1.web_faq_title}
                                        </a>
                                        </div>
                                        <div id={`collapse${faq_data1.web_faq_no}`} className="collapse" data-bs-parent="#accordion_faq1">
                                        <div className="card-body intg_card_body_desc gvr_card">
                                            <p className='accord_para gvr_accord' dangerouslySetInnerHTML={{ __html: faq_data1.web_faq_description }}></p>
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
  )
}
