// pages/_document.js
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <title>River View Villas</title>
          <link rel="icon" type="image/png" sizes="32x32" href="/home3.png" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
          <link 
            href="https://fonts.googleapis.com/css2?family=Gentium+Basic:wght@400;700&display=swap" 
            rel="stylesheet" 
          />
          <link 
            href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" 
            rel="stylesheet" 
          />

          {/* Google Tag (gtag.js) */}
          <script async src="https://www.googletagmanager.com/gtag/js?id=AW-11405539991"></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'AW-11405539991');
              `,
            }}
          />
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
