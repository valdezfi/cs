import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* Preload font */}
          <link
            rel="preload"
            href="/fonts/your-font.woff2"
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
