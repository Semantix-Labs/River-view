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
      {/* Meta Pixel Code */}
      <Script
        id="meta-pixel"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '887039697576811');
            fbq('track', 'PageView');
          `,
        }}
      />

      {/* ✅ Your App */}
      <Component {...pageProps} />
    </>
  );
}
