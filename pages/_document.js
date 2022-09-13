import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";
export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <meta
          name="facebook-domain-verification"
          content="dborjxjhu9kiklk06c38hf5v5raay4"
        />
        <meta name="robots" content="noindex, nofollow" />
        <meta
          name="facebook-domain-verification"
          content="xzlsit1skwzpjhylrt0y96nn3nbksu"
        />
        <script src="https://www.googleoptimize.com/optimize.js?id=OPT-NQHBZ7H"></script>


        <script 
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: `
          (function(w,d,s,l,i){
            w[l]=w[l]||[];
            w[l].push({‘gtm.start’:new Date().getTime(),event:‘gtm.js’});
            var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),
            dl=l!=‘dataLayer’?‘&l=‘+l:‘’;
            j.async=true;
            j.src=’https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })
          (window,document,‘script’,‘dataLayer’,‘GTM-MQV7XJC’);

      ` }} />
         

        {/* <script 
         dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-NN8XWH8');`,
          }}
        /> */}
      </Head>
      <body>  
        <noscript>
          <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MQV7XJC" height="0" width="0" style={{display:"none",visibility:"hidden"}}>
          </iframe>
        </noscript>

        {/* <noscript
          dangerouslySetInnerHTML={{
            __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NN8XWH8"
            height="0" width="0" style="display:none;visibility:hidden">`,
          }}
        ></noscript> */}
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
