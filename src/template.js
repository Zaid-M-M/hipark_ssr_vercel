const template = (appHtml) => `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>React SSR Example</title>
      <!-- Add any meta tags, stylesheets, or other head elements here -->
    </head>
    <body>
      <div id="app">${appHtml}</div>
      <!-- Add any script tags for client-side hydration here -->
      <script src="/bundle.js"></script>
    </body>
  </html>
`;

export default template;
