import "../styles/globals.css";
import "../styles/form.css";
import Script from "next/script"
import { CookiesProvider } from "react-cookie";
function MyApp({ Component, pageProps }) {
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
            });
                `}
      </Script>
      <CookiesProvider>
      <Component {...pageProps} />
      </CookiesProvider>
    </>
  );
}

export default MyApp;
