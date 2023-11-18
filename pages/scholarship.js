import Head from "next/head";
import { React } from "react";
import Navbar from "../Components/NavbarA/Navbar";
import Footer from "../Components/CoursePage/Footer/Footer";
import Scholarship from "../Components/Scholarship/scholarship";

function scholarship() {
  return (
    <>
      <div>
        <Head>
          <title>Learnbay Scholarship</title>
          <meta name="description" content="Learnbay Scholarship" />
          <link
            rel="icon"
            href="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/Learnbay-Favicon-L.png"
          />
        </Head>
        <Navbar radio={true} />
        <Scholarship />
        <Footer />
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

export default scholarship;
