import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* Preload font */}
          <link
  rel="preload"
  href="https://fonts.gstatic.com/s/intertight/v15/Q1cAV8F4kkalhpfvN-4obFy0gnoY5a_4Mw2rx2xuCMw.woff2"
  as="font"
  type="font/woff2"
  crossOrigin="anonymous"
/>

          {/* You can also preload additional fonts or resources here */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
