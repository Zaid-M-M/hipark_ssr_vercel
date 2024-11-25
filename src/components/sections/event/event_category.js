import React from 'react'
import useFetch from "react-fetch-hook";
import { useEffect, useRef } from "react";
import $ from "jquery";

export default function Event_category() {

    const { isLoading, data, error } = useFetch(
        "https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-json/wp/v2/event_categories"
    );

    
    
    useEffect(() => {

        $('#category-filter').change(function() {
            var $select = $(this);
            if ($select.val() == 'all') {
              // No filter selected.  Show all categories
              $('.js-filterable').show();
              $('.js-current-category').text('All');
            } else {
              $('.js-filterable').each(function() {
                if ($(this).data('category') == $select.val()) {
                  $(this).show();
                } else {
                  $(this).hide();
                }
              });
            }
    
          });
        

    }, []);

  return (
    <>  
        <label>Select Category:</label>
        <select  name="" id="category-filter" className="filter category_fltr">
            <option value="all">All</option>
            {data && data.map(({ id , name }) => ( 
                
                    <option rel={id} value={id}>{name}</option>
                
            ))} 
        </select>
    </>
  )
}
