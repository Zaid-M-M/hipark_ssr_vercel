import React from "react";
import ReactDOMServer from "react-dom/server";
import express from "express";
import App from "../src/App";
import { Helmet } from "react-helmet";
import { StaticRouter } from "react-router-dom/server";
import { HelmetProvider } from "react-helmet-async";
import path from 'path';

const app = express();
const port = 7175;

// Serve static files from the build directory
app.use('/assets', express.static(path.join(__dirname, './assets')));
app.use('/scripts', express.static(path.join(__dirname, './scripts')));
app.use('/dist', express.static(path.join(__dirname, './dist')));

// API endpoints


app.get("/posts", async (req, res) => {
  const response = await fetch(
    `https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-json/wp/v2/posts?per_page=50`
  );
  const store = await response.json();
  if (store) {
    res.status(200).json(store);
  } else {
    res.status(404).json({ error: "Not found" });
  }
});

app.get("/api/cs_video", async (req, res) => {
  const response = await fetch(
    `https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-json/wp/v2/customers_speak`
  );
  const store = await response.json();
  if (store) {
    res.status(200).json(store);
  } else {
    res.status(404).json({ error: "Not found" });
  }
});

app.get("/api/events", async (req, res) => {
  const response = await fetch(
    `https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-json/wp/v2/events?per_page=50`
  );
  const store = await response.json();
  if (store) {
    res.status(200).json(store);
  } else {
    res.status(404).json({ error: "Not found" });
  }
});

app.get("/api/events/:slug", async (req, res) => {
  const slug = req.params.slug;

  const response = await fetch(
    `https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-json/wp/v2/events?slug=${slug}`
  );
  const store = await response.json();
  if (store) {
    res.status(200).json(store);
  } else {
    res.status(404).json({ error: "Not found" });
  }
});
app.get("/api/media", async (req, res) => {
  const response = await fetch(
    `https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-json/wp/v2/news?per_page=50`
  );
  const store = await response.json();
  if (store) {
    res.status(200).json(store);
  } else {
    res.status(404).json({ error: "Not found" });
  }
});

app.get("/api/case-studies/:slug", async (req, res) => {
  const slug = req.params.slug;
  const response = await fetch(
    `https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-json/wp/v2/client_stories/?slug=${slug}`
  );
  const store = await response.json();
  if (store) {
    res.status(200).json(store);
  } else {
    res.status(404).json({ error: "Not found" });
  }
});

app.get("/api/maharashtra/:slug", async (req, res) => {
  const slug = req.params.slug;
  const response = await fetch(
    `https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-json/wp/v2/maharasht_micro_blog/?slug=${slug}`
  );
  const store = await response.json();
  if (store) {
    res.status(200).json(store);
  } else {
    res.status(404).json({ error: "Not found" });
  }
});

app.get("/api/gujarat/:slug", async (req, res) => {
  const slug = req.params.slug;
  const response = await fetch(
    `https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-json/wp/v2/gujarat_micro_blog/?slug=${slug}`
  );
  const store = await response.json();
  if (store) {
    res.status(200).json(store);
  } else {
    res.status(404).json({ error: "Not found" });
  }
});

app.get("/api/delhi/:slug", async (req, res) => {
  const slug = req.params.slug;
  const response = await fetch(
    `https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-json/wp/v2/delhi_micro_blog/?slug=${slug}`
  );
  const store = await response.json();
  if (store) {
    res.status(200).json(store);
  } else {
    res.status(404).json({ error: "Not found" });
  }
});

app.get("/api/goa/:slug", async (req, res) => {
  const slug = req.params.slug;
  const response = await fetch(
    `https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-json/wp/v2/goa_micro_blog/?slug=${slug}`
  );
  const store = await response.json();
  if (store) {
    res.status(200).json(store);
  } else {
    res.status(404).json({ error: "Not found" });
  }
});

app.get("/api/haryana/:slug", async (req, res) => {
  const slug = req.params.slug;
  const response = await fetch(
    `https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-json/wp/v2/haryana_micro_blog/?slug=${slug}`
  );
  const store = await response.json();
  if (store) {
    res.status(200).json(store);
  } else {
    res.status(404).json({ error: "Not found" });
  }
});

app.get("/api/karnataka/:slug", async (req, res) => {
  const slug = req.params.slug;
  const response = await fetch(
    `https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-json/wp/v2/karnataka_micro_blog/?slug=${slug}`
  );
  const store = await response.json();
  if (store) {
    res.status(200).json(store);
  } else {
    res.status(404).json({ error: "Not found" });
  }
});

app.get("/api/tamil-nadu/:slug", async (req, res) => {
  const slug = req.params.slug;
  const response = await fetch(
    `https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-json/wp/v2/tamil_nadu_micro_blo/?slug=${slug}`
  );
  const store = await response.json();
  if (store) {
    res.status(200).json(store);
  } else {
    res.status(404).json({ error: "Not found" });
  }
});

app.get("/api/telangana/:slug", async (req, res) => {
  const slug = req.params.slug;
  const response = await fetch(
    `https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-json/wp/v2/telangana_micro_blog/?slug=${slug}`
  );
  const store = await response.json();
  if (store) {
    res.status(200).json(store);
  } else {
    res.status(404).json({ error: "Not found" });
  }
});

app.get("/api/blog/:slug", async (req, res) => {
  const slug = req.params.slug;
  const response = await fetch(
    `https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-json/wp/v2/posts/?slug=${slug}`
  );
  const store = await response.json();
  if (store) {
    res.status(200).json(store);
  } else {
    res.status(404).json({ error: "Not found" });
  }
});

app.get("/api/blog/category/:id", async (req, res) => {
  const id = req.params.id;
  const response = await fetch(
    `https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-json/wp/v2/posts/?category=${id}`
  );
  const store = await response.json();
  if (store) {
    res.status(200).json(store);
  } else {
    res.status(404).json({ error: "Not found" });
  }
});

app.get("/api/press_releases_landing", async (req, res) => {
  const response = await fetch(
    `https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-json/wp/v2/press_release?per_page=50`
  );
  const store = await response.json();
  if (store) {
    res.status(200).json(store);
  } else {
    res.status(404).json({ error: "Not found" });
  }
});

app.get("/api/press_releases/:slug", async (req, res) => {
  const slug = req.params.slug;
  const response = await fetch(
    `https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-json/wp/v2/press_release/?slug=${slug}`
  );
  const store = await response.json();
  if (store) {
    res.status(200).json(store);
  } else {
    res.status(404).json({ error: "Not found" });
  }
});


app.get("/*", async (req, res) => {
  let data = [];
  let dataPress = [];
  let slug = req.url;
  let slug1 = req.url;
  let slug2 = req.url;
  let slug3 = req.url;
  let slug4 = req.url;
  let slug5 = req.url;
  let slug6 = req.url;
  let slug7 = req.url;
  let slug8 = req.url;
  let slug9 = req.url;
  let slug10 = req.url;
  const isPark = req.originalUrl.includes("park");
  const isClientStory = req.originalUrl.includes("case-studies");
  const isBlog = req.originalUrl.includes("blog");
  const isBlogCategory = req.originalUrl.includes("blog/category");
  const isBlogTag = req.originalUrl.includes("blog/tag");
  const isPressRelease = req.originalUrl.includes("press_releases");
  const isEventPage = req.originalUrl.includes("events");
  const isMedia = req.originalUrl.includes("media");
  const isMaharashtra = req.originalUrl.includes("maharashtra");
  const isGujarat = req.originalUrl.includes("gujarat");
  const isDelhi = req.originalUrl.includes("delhi");
  const isGoa = req.originalUrl.includes("goa");
  const isHaryana = req.originalUrl.includes("haryana");
  const isKarnataka = req.originalUrl.includes("karnataka");
  const isTelangana = req.originalUrl.includes("telangana");
  const isTamilnadu = req.originalUrl.includes("tamil-nadu");

  
  const isState = [
    "/karnataka",
    "/maharashtra",
    "/telangana",
    "/tamil-nadu",
    "/haryana",
    "/goa",
    "/gujarat",
    "/delhi",
  ].includes(slug);

  const isDelhi_I = req.originalUrl.includes("warehousing-park-delhi-i");
  const isDelhi_II = req.originalUrl.includes("warehousing-park-delhi-ii");

  if (isClientStory) {
    slug = slug.replace("/case-studies", "");
    const response = await fetch(
      `https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-json/wp/v2/client_stories/?slug=${slug}`
    );
    data = await response.json();
    console.log(data)
  } else {
    const response = await fetch(
      `https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-json/wp/v2/customers_speak`
    );
    data = await response.json();
  }

  
  if (isBlogCategory) {
    let id = slug.replace("/blog/category/", "");
    const response = await fetch(
      `https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-json/wp/v2/posts?categories=${id}`
    );
    
    data = await response.json();
  }
  else if (isBlogTag) {

  } 
  else if (isBlog) {
    slug = slug.replace("/blog", "");
    if (slug) {
      const response = await fetch(
        `https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-json/wp/v2/posts/?slug=${slug}`
      );
      data = await response.json();
    } else {
      const response = await fetch(
        `https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-json/wp/v2/posts?per_page=50`
      );
      data = await response.json();
      // console.log(data)
    }
  } 
  else if (isEventPage) {
    slug = slug.replace("/events", "");
    if(slug) {
      const response = await fetch(
        `https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-json/wp/v2/events/?slug=${slug}`
      );
      data = await response.json();
    } else {
      const response = await fetch(
        `https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-json/wp/v2/events?per_page=50`
      );
      data = await response.json();
    }
  }
  else if (isMedia) {
    const response = await fetch(
      `https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-json/wp/v2/news?per_page=50`
    );
    data = await response.json();
    const responsePress = await fetch(
      `https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-json/wp/v2/press_release?per_page=50`
    );
    dataPress = await responsePress.json();
  }
  else if (isPressRelease) {
    slug = slug.replace("/press_releases", "");
    if(slug) {
      const response = await fetch(
        `https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-json/wp/v2/press_release/?slug=${slug}`
      );
      data = await response.json();
    } else {
      const response = await fetch(
        `https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-json/wp/v2/press_release?per_page=50`
      );
      data = await response.json();
    }
  } 
  else if (isMaharashtra) {
    const response = await fetch(
      `https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-json/wp/v2/states/?slug=${slug}`
    );
    data = await response.json();

    slug1 = slug.replace("/maharashtra", "");
    if(slug1){
      const response1 = await fetch(
        `https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-json/wp/v2/maharasht_micro_blog/?slug=${slug1}`
      );
      data = await response1.json();
    }
  } 
  else if (isGujarat) {
    const response = await fetch(
      `https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-json/wp/v2/states/?slug=${slug}`
    );
    data = await response.json();

    slug2 = slug.replace("/gujarat", "");
    if(slug2){
      const response2 = await fetch(
        `https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-json/wp/v2/gujarat_micro_blog/?slug=${slug2}`
      );
      data = await response2.json();
    }
  } 
  else if (isDelhi) {
    const response = await fetch(
      `https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-json/wp/v2/states/?slug=${slug}`
    );
    data = await response.json();

    slug3 = slug.replace("/delhi", "");
    if(slug3){
      const response3 = await fetch(
        `https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-json/wp/v2/delhi_micro_blog/?slug=${slug3}`
      );
      data = await response3.json();
    }
  } 
  else if (isGoa) {
    const response = await fetch(
      `https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-json/wp/v2/states/?slug=${slug}`
    );
    data = await response.json();

    slug4 = slug.replace("/goa", "");
    if(slug4){
      const response4 = await fetch(
        `https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-json/wp/v2/goa_micro_blog/?slug=${slug4}`
      );
      data = await response4.json();
    }
  } 
  else if (isHaryana) {
    const response = await fetch(
      `https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-json/wp/v2/states/?slug=${slug}`
    );
    data = await response.json();

    slug5 = slug.replace("/haryana", "");
    if(slug5){
      const response5 = await fetch(
        `https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-json/wp/v2/haryana_micro_blog/?slug=${slug5}`
      );
      data = await response5.json();
    }
  } 
  else if (isKarnataka) {
    const response = await fetch(
      `https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-json/wp/v2/states/?slug=${slug}`
    );
    data = await response.json();

    slug6 = slug.replace("/karnataka", "");
    if(slug6){
      const response6 = await fetch(
        `https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-json/wp/v2/karnataka_micro_blog/?slug=${slug6}`
      );
      data = await response6.json();
    }
  } 
  else if (isTamilnadu) {

    const response = await fetch(
      `https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-json/wp/v2/states/?slug=${slug}`
    );
    data = await response.json();

    slug7 = slug.replace("/tamil-nadu", "");
    if(slug7){
      const response7 = await fetch(
        `https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-json/wp/v2/tamil_nadu_micro_blo/?slug=${slug7}`
      );
      data = await response7.json();
    }
  } 
  else if (isTelangana) {
    const response = await fetch(
      `https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-json/wp/v2/states/?slug=${slug}`
    );
    data = await response.json();

    slug8 = slug.replace("/telangana", "");
    if(slug8){
      const response8 = await fetch(
        `https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-json/wp/v2/telangana_micro_blog/?slug=${slug8}`
      );
      data = await response8.json();
    }
  } 
  else if (isPark) {
    const response = await fetch(
      `https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-json/wp/v2/parks/?slug=${slug}`
    );
    data = await response.json();
  } 
   if(isDelhi_I) {
    const response = await fetch(
      `https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-json/wp/v2/parks/?slug=${slug}`
    );
    data = await response.json();
  } 
   if (isDelhi_II) {
    const response = await fetch(
      `https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-json/wp/v2/parks/?slug=${slug}`
    );
    data = await response.json();
  } 
  
  // if (isState) {
  //   const response = await fetch(
  //     `https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-json/wp/v2/states/?slug=${slug}`
  //   );
  //   data = await response.json();
  // }
  

  
  

  renderApp(req, res, data, dataPress);
});

function renderApp(req, res, data = [], dataPress = []) {
  const { 
    meta_title = "Horizon Industrial Parks", 
    meta_description = "Horizon Industrial Parks" 
  } = (data && data[0] && data[0].acf) || {};

  // Create a Helmet context to capture meta tags
  const helmetContext = {};
  const clientBundleScript = `<script src="/scripts/bundle.js"></script>`;
  const clientBundleStyle = `<link rel="stylesheet" href="/dist/main.css">`;

  // Render the app to a string
  const jsx = ReactDOMServer.renderToString(
    <StaticRouter location={req.url}>
      <HelmetProvider context={helmetContext}>
        <Helmet>
          <title>{meta_title}</title>
          <link rel="apple-touch-icon" href="%PUBLIC_URL%/favicon.ico" />
          <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
          <meta name="description" content={meta_description} />
          <link rel="stylesheet" href="/dist/main.css"></link>
        </Helmet>
        <App initialData={data} press={dataPress} />
      </HelmetProvider>
    </StaticRouter>
  );

  // Get meta tags from Helmet context
  const helmetData = Helmet.renderStatic(helmetContext);

  // Render the HTML response with meta tags
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="apple-touch-icon" href="https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-content/uploads/2024/09/favicon.ico" />
        <link rel="icon" href="https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-content/uploads/2024/09/favicon.ico" />
        ${helmetData.title.toString()}
        ${helmetData.meta.toString()}
        ${helmetData.link.toString()}
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" crossorigin="anonymous">
        <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-W5TDXMD');</script>

          <script type="application/ld+json">
            {
              "@context": "http://schema.org/",
              "@type": "Organization",
              "name": "Horizon Industrial Parks Pvt Ltd",
              "logo": "https://phpstack-725513-4659896.cloudwaysapps.com/assets/horizon_logo.9eebd95c8ccc564170fc.svg",
              "url": "https://phpstack-725513-4659896.cloudwaysapps.com/",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Floor 15, One World Center, TOWER-1, Horizon Industrial Parks Pvt Ltd, Lower Parel",
                "addressLocality": "Mumbai",
                "addressRegion": "Maharashtra",
                "postalCode": "400013",
                "addressCountry": "India"
              },
              "sameAs": []
            }
            </script>

      </head>
      <body>
        <div id='root'>${jsx}</div>
        ${clientBundleStyle}
        ${clientBundleScript}
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous" defer async></script>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js" defer async></script>
        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-W5TDXMD"
          height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
        <script src="https://www.hiparks.com/" integrity="sha384-Q3gPR+vy/ghJn/UKit+95NsbfEIa7f9QAOzcC3zaoHa577ETTRNZw0sSzghaYbuX" crossorigin="anonymous"></script>
      </body>
    </html>
  `);
}

app.listen(port, () => {
  console.log(`App listening on http://localhost:${port}`);
});
