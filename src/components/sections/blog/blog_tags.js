import React from 'react'
import useFetch from "react-fetch-hook";

export default function Blog_tags() {

    const { isLoading, data, error } = useFetch(
        "https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-json/wp/v2/tags"
    );

  return (

    <>
        <div className='categ_dv_2'>
            <h2 className='section_sub_heading blog_col_hd'>search with tags</h2>

            {data && data.map(({ id,  name }) => (
                <a key={id}  href= {"/blog/tags/" + name} className='tags_btn'>{name}</a>
            ))}
            {/* <a href="#" className='tags_btn'>lifestyle</a>
            <a href="#" className='tags_btn'>fashion</a>
            <a href="#" className='tags_btn'>technology</a>
            <a href="#" className='tags_btn'>business</a>
            <a href="#" className='tags_btn'>design</a>
            <a href="#" className='tags_btn'>health</a>
            <a href="#" className='tags_btn'>food</a>
            <a href="#" className='tags_btn'>art</a> */}

        </div>
    </>
  )
}
