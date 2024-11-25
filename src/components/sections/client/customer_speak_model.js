import React from 'react'

const Customer_speak_model = ({ data1, closeModal }) => {
    return (
        <>
            <div className="customer_speak_popup open">
            
                <img className="btn cs-pp-close" onClick={closeModal} src={require('../../../assets/img/cs_pp_cancel_icon.png')}></img>
                <div className="cs_video_dv">
                    <iframe id='' className="vm-vid" src={data1.acf.customer_video_url} allow="autoplay" allowfullscreen="allowfullscreen" mozallowfullscreen="mozallowfullscreen" msallowfullscreen="msallowfullscreen" oallowfullscreen="oallowfullscreen" webkitallowfullscreen="webkitallowfullscreen"></iframe>
                </div>
                <div className='cs_pp_content_dv'>
                    <h3 className="cs_pp_ttl sub_para" dangerouslySetInnerHTML={{ __html: data1.title.rendered }}></h3>
                    <p className="cs_pp_desc para" dangerouslySetInnerHTML={{ __html: data1.content.rendered }}></p>
                </div>

            </div>
        </>
    );
};

export default Customer_speak_model;
