import React, { useEffect, useState } from 'react';
import { useParams , useLocation } from 'react-router-dom';
import useFetch from 'react-fetch-hook';
import '../../../assets/css/state_micblog_link_sec.css';
import $ from "jquery";

export default function State_micblog_link_sec() {
  const { slug } = useParams();
  const [apiUrl, setApiUrl] = useState('');

  const [shouldFetch, setShouldFetch] = useState(false);
  const [refreshKey, setRefreshKey] = useState(0); // Key to trigger fresh fetch

  

  useEffect(() => {

    const urlMap = {
      goa: 'https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-json/wp/v2/goa_micro_blog',
      delhi: 'https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-json/wp/v2/delhi_micro_blog',
      gujarat: 'https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-json/wp/v2/gujarat_micro_blog',
      'tamil-nadu': 'https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-json/wp/v2/tamil_nadu_micro_blo',
      telangana: 'https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-json/wp/v2/telangana_micro_blog',
      maharashtra: 'https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-json/wp/v2/maharasht_micro_blog',
      karnataka: 'https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-json/wp/v2/karnataka_micro_blog',
      haryana: 'https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-json/wp/v2/haryana_micro_blog',
    };

    const selectedUrl = urlMap[slug] || '';
    setApiUrl(selectedUrl);
    setShouldFetch(!!selectedUrl); // Only fetch if URL is valid
    setRefreshKey((prevKey) => prevKey + 1);
    // setApiUrl(urlMap[slug] || '');
  }, [slug]);

  useEffect(() => {
    
    $(".rld_ttl_dv").on("click", function (e) {
      $('.rltd_link_arrow').toggleClass('img_rotate');
      $("#rlted_dp_submenu").slideToggle(500);
    });

  }, []);

  const { isLoading, data, error } = useFetch(apiUrl, {
    depends: [shouldFetch, refreshKey], // Avoid fetching before URL is set
  });

  // if (isLoading) return <div>Loading...</div>;
  // if (error) return <div>Error: {error.message}</div>;
  const location = useLocation();
  const currentPath = location.pathname;

  return (
 
    <div className='state_micblog_link_sec snap_sec mob_pd_LR tab_pd_LR'>
      <div className='cstm_container'>
        <div className='row'>
          <div className='col-12'>

              <div className="rlted_lnks_dv">
                <div className='rld_ttl_dv'>
                  <h2 className='section_sub_heading ovrview_sub_hd' id="rlted_dp">Related Links</h2>
                  <img className='rltd_link_arrow' src={require('../../../assets/img/svg/down_blk_arrow.svg')}></img>
                </div>
                
                <div id="rlted_dp_submenu">
                  {data && Array.isArray(data) && data.length > 0 ? (
                    data.map((item, index) => (
                      <div key={index}>
                        <a href={`${currentPath}/${item.slug}`}>
                          <p  dangerouslySetInnerHTML={{ __html: item.title.rendered }}></p>
                        </a>
                      </div>
                    ))
                  ) : (
                    <p>No links available</p>
                  )}
                </div>
              </div>
            
          </div>
        </div>
      </div>
    </div>

  );
}
