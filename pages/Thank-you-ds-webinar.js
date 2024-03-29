import React from "react";
import styles from "../styles/ThankYou.module.css";
import Head from "next/head";
import Navbar from "../Components/CoursePage/Navbar/NavbarThankYou";
import Footer from "../Components/Footerfsdsq/Footer";
import cookies from "next-cookies";
import ThankYouWebinar from "../Components/NewWebinar/ThankYouWebinar/ThankYouWebinar";

const ThankYouFsd = ({ initialName }) => {
  const email = JSON.stringify(initialName);

  return (
    <>
      <div className={styles.main}>
        <Head>
          <title>Thank you!</title>
          <meta name="description" content="Learnbay" />
          <link
            rel="icon"
            href="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/Learnbay-Favicon-L.png"
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      'event': 'form_complete',
      'enhanced_conversion_data': {
        "email": ${email}
      }
    });
`,
            }}
          />
        </Head>
        <Navbar radio={true} formotp={true} />
        <ThankYouWebinar />
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
};

export default ThankYouFsd;

ThankYouFsd.getInitialProps = async (ctx) => {
  return {
    initialName: cookies(ctx).CARD || "",
  };
};
