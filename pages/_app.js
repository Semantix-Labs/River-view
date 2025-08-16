// pages/_app.js
import Script from "next/script";
import "../styles/globals.css"; // keep your styles import

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* ✅ Google Ads Global Site Tag */}
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=AW-11405539991"
      />
      <Script id="google-ads" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-11405539991');
        `}
      </Script>

      {/* ✅ Your App */}
      <Component {...pageProps} />
    </>
  );
}
