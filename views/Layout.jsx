const React = require('react');

module.exports = function Layout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta
          httpEquiv="Content-Type"
          content="text/html"
          charSet="utf-8"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        />
        <script
          src="https://api-maps.yandex.ru/2.1/?apikey=a62479e1-a26e-482b-ab73-e983bbd89896&lang=ru_RU"
          type="text/javascript"
        />
        <title>VeloVolk</title>
        <link
          rel="stylesheet"
          href="/css/bootstrap.min.css"
        />
        <link
          rel="stylesheet"
          href="/css/style.css"
        />
        <script
          defer
          src="/js/application.js"
        />
        <script
          defer
          src="/js/bootstrap.bundle.min.js"
        />
      </head>
      <body>{children}</body>
    </html>
  );
};
