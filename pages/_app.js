import "../styles/globals.css";
import "../styles/form.css";
import Script from "next/script"
import { CookiesProvider } from "react-cookie"
import { useEffect } from 'react';
import TagManager from 'react-gtm-module';


function MyApp({ Component, pageProps }) {

  useEffect(() => {
    TagManager.initialize({ gtmId: 'GTM-NN8XWH8' })
  }, [0]);


  return (
    <>
      <Script
      strategy="lazyOnload"
      onError={(err) => {
        console.error('Error', err)
      }}
      onLoad={() => {
        // Function to perform after loading the script
        window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'GTM-NN8XWH8', {
              page_path: window.location.pathname,
            },);
      }}
    />
      <CookiesProvider>
        <Component {...pageProps} />
      </CookiesProvider>
    </>
  );
}

export default MyApp;





// <Script
//         strategy="lazyOnload"
//         src={`https://www.googletagmanager.com/gtag/js?id=GTM-NN8XWH8`}
//       ></Script>



// <Script strategy="lazyOnload">
//   {`
//       window.dataLayer = window.dataLayer || [];
//       function gtag(){dataLayer.push(arguments);}
//       gtag('js', new Date());
//       gtag('config', 'GTM-NN8XWH8', {
//         page_path: window.location.pathname,
//       },);
//           `}
// </Script>
