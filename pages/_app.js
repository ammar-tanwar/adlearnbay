import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";

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
