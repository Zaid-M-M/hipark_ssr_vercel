import React from 'react'
import useFetch from "react-fetch-hook";
import { useEffect } from 'react';
import $ from "jquery";

export default function Blog_categories() {

    const { isLoading, data, error } = useFetch(
        "https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-json/wp/v2/categories?parent=22"
    );

    useEffect(() => {
        $('.category_drpdown_btn').on("click", function (e) {
            $('.categ_dv_1').toggle();
        });
    })


    return (
        <>
            <div className='category_drpdwn'>
                <a className='category_drpdown_btn'>Select Categories</a>
            </div>
            <div className='categ_dv_1'>
                <h2 className='section_sub_heading blog_col_hd'>Categories</h2>
                <div className="blog_lndng_sidebar">
                    <ul className='category_list'>

                        {data && data.map(({ id, slug, name, count }) => (
                            // <li key={id} ><a href='#'>{name} <span>{count}</span></a></li>
                            <li key={id} ><a href= {"/blog/category/" + slug } > <spand dangerouslySetInnerHTML={{ __html: name }}></spand> <span>{count-1}</span></a></li>
                        ))}
                        {/* <li>Travel <span>05</span></li>
                    <li>Food <span>09</span></li>
                    <li>Healthcare <span>10</span></li>
                    <li>Technology <span>03</span></li> */}
                    </ul>
                </div>
            </div>

            
        </>
    )
}
