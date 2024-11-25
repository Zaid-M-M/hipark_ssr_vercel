// import React, { useEffect } from 'react';

// const SchemaScript = () => {
//   useEffect(() => {
//     const script = document.createElement('script');
//     script.type = 'application/ld+json';
//     script.innerHTML = JSON.stringify({
//       "@context": "http://schema.org/",
//       "@type": "Organization",
//       "name": "Horizon Industrial Parks Pvt Ltd",
//       "logo": "https://phpstack-725513-4659896.cloudwaysapps.com/assets/horizon_logo.9eebd95c8ccc564170fc.svg",
//       "url": "https://phpstack-725513-4659896.cloudwaysapps.com/",
//       "address": {
//         "@type": "PostalAddress",
//         "streetAddress": "Floor 15, One World Center, TOWER-1, Horizon Industrial Parks Pvt Ltd, Lower Parel",
//         "addressLocality": "Mumbai",
//         "addressRegion": "Maharashtra",
//         "postalCode": "400013",
//         "addressCountry": "India"
//       },
//       "sameAs": []
//     });
//     document.head.appendChild(script);
    
//     return () => {
//       document.head.removeChild(script);
//     };
//   }, []);

//   return null;
// };

// export default SchemaScript;
