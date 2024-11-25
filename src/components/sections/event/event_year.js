import React from 'react'
import useFetch from "react-fetch-hook";
import { useEffect, useRef } from "react";
import $ from "jquery";

export default function Event_year() {

    const { isLoading, data, error } = useFetch(
        "https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-json/wp/v2/event_year"
    );

    
    
    useEffect(() => {

        $('#year-filter').change(function() {
          $('#category-filter').val('');
            var $select = $(this);
            if ($select.val() == 'all') {
              // No filter selected.  Show all categories
              $('.js-filterable').show();
              $('.js-filterable').addClass('ADD');
              $('.js-current-category').text('All');
              $(`.category_fltr option`).show();
            } else {
                  var dataString = '';
                  $('.js-filterable').each(function(index) {
                

                    if ($(this).data('year') == $select.val()) {
                      
                      
                        $(this).show();
                        $(this).addClass('ADD');
                        //----------------- year_dropdown link code START
    
                        var event_bx_categ=$(this).data('category');
                        
                        // Append category to the dataString
                        if (index === 0) {
                           dataString += 'data' + event_bx_categ;
                        } else {
                          dataString += ',' + event_bx_categ;
                        }


                        console.log(dataString + " "+ "dataString");
           
             
                        $('#category-filter option').each(function() {
                          var optionValue = $(this).val();
                      
                          if (dataString.includes(optionValue)) {
                            $(this).show();
                          } else {
                            $(this).hide();
                          }
                        });
              
                        
                        //----------------- year_dropdown link code END

                    
                    } else {
                      $(this).hide();
                      $(this).removeClass('ADD');
                    }


                  });

            }
    
          });
        

    }, []);

  return (
    <>  
        <label>Select Year:</label>
        <select  name="" id="year-filter" className="filter year_fltr">
            <option value="all">All</option>
            {data && data.map(({ id , name }) => ( 
                
                    <option value={id}>{name}</option>
                
            ))} 
        </select>

    </>
  )
}
