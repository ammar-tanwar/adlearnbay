import Navbar from "../components/module/Navbar/Navbar";
import Footer from "../components/module/Footer/Footer";

import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      {/* <Header /> */}
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
