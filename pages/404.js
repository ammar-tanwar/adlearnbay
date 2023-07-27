import Head from "next/head";
import Navbar from "../Components/NavbarHome/Navbar";
import Footer from "../Components/FooterHome/Footer";
import BottomBar from "../Components/BottomBar/BottomBar";
import NotFound from "../Components/NotFound/NotFound";
export default function Home() {
    return (
      <div>
        <Head>
          <title>404 - Page Not Found</title>
          <link
            rel="icon"
            href="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/Learnbay-Favicon-L.png"
          />
        </Head>
        <main>
        <Navbar popup={true} dataScienceCounselling={true} radio={true}/>
        <NotFound />
        <BottomBar />
        <Footer />
      </main>
    </div>
  );
}