import Head from "next/head";
import Navbar from "../Components/NavbarHome/Navbar";
import Footer from "../Components/FooterHome/Footer";
import NotFound from "../Components/NotFound/NotFound";
export default function Home() {
  return (
    <>
      <div>
        <Head>
          <title>404 - Page Not Found</title>
          <link
            rel="icon"
            href="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/Learnbay-Favicon-L.png"
          />
        </Head>
        <main>
          <Navbar popup={true} dataScienceCounselling={true} radio={true} />
          <NotFound />
          <Footer />
        </main>
      </div>
      <script
        dangerouslySetInnerHTML={{
          __html: `(function (botId) {
            var s = document.createElement("script");
            s.async = true;
            s.type = 'text/javascript';
            s.src = "https://app.chat360.io/widget/chatbox/common_scripts/script.js";
            s.onload = function () {
              window.loadChat360Bot(botId);
            };
            s.onerror = function (err) {
              console.error(err);
            };
            document.body.appendChild(s);
          })("4f4d2e98-0778-4fb7-a9c3-af6fd1bedad8");
      `,
        }}
      />
    </>
  );
}
