import "../styles/globals.css";
import "../styles/form.css";
import Script from "next/script"
import { CookiesProvider } from "react-cookie"
import { useEffect } from 'react';
import TagManager from 'react-gtm-module';
import { useRouter } from "next/router";


function MyApp({ Component, pageProps }) {
  // const router = useRouter();
  
  useEffect(() => {
    TagManager.initialize({gtmId:'GTM-NN8XWH8'})
  }, [0]);

  // useEffect(() => {
  //   import('react-facebook-pixel')
  //     .then((x) => x.default)
  //     .then((ReactPixel) => {
  //       ReactPixel.init('443494164298902')
  //       ReactPixel.pageView()

  //       router.events.on('routeChangeComplete', () => {
  //         ReactPixel.pageView()
  //       })
  //     })
  // }, [router.events]);
  
  return (
    <>
    

      <Script
      strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=GTM-NN8XWH8`}
      />

      <Script strategy="lazyOnload">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'GTM-NN8XWH8', {
              page_path: window.location.pathname,
            },);
                `}
      </Script>
      
      <CookiesProvider>
      <Component {...pageProps} />
      </CookiesProvider>
    </>
  );
}

export default MyApp;
