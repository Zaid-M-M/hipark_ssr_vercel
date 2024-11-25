import React from "react";
import "../../assets/css/park_inside_spotlight.css";
import "../../assets/css/blog_inside_spotlight.css";
import { useEffect, useState } from "react";
import useFetch from "react-fetch-hook";
import { useParams } from "react-router-dom";
import Helmet from "react-helmet";
import $ from "jquery";

export default function Blog_inside_spotlight({ initialData }) {
  const data = initialData || [];
  const { slug } = useParams();

  useEffect(() => {
    var post_url = window.location.pathname;
    // var post_url1 = '/blog/'+ slug;
    // console.log("URL0 "+ post_url);
    // console.log("URL1 "+ post_url1);

    $(document).ready(function () {
      $.ajax({
        url: `https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-json/wp/v2/posts/?slug=${slug}`,
        type: "GET",
        dataType: "json",
        success: function (data) {
          // Process the response and extract slug values
          var slugs = data.map(function (item) {
            return item.slug;
          });

          // Log the slug values to the console (you can do whatever you want with them)
          console.log(slugs);
          if (post_url === "/blog/" + slugs) {
          } else {
            window.location.href = "/page-not-found";
          }
        },
        error: function (error) {
          console.log("Error:", error);
        },
      });
    });
  });

  return (
    <>
      {data &&
        data.map(({ id, acf, title, category, slug }, index) => (
          <Helmet key={index}>
            <title>{acf.meta_title}</title>
            <meta
              name="description"
              content={acf.meta_description}
            />
            <meta
              name="keyword"
              content={acf.meta_keyword}
            />

            <meta property="og:title" content={acf.meta_title} />
            <meta property="og:description" content={acf.meta_description} />
            <meta property="og:image" content={acf.blog_image} />
           
          </Helmet>
        ))}
    </>
  );
}
