import React from "react";
import styles from "../../styles/ThankYou.module.css";
import Head from "next/head";
import Image from "next/image";
import NavbarThankYou from "../../Components/CoursePage/Navbar/NavbarThankYou";
import FooterThankYou from "../../Components/Footerfsdsw/FooterThankYou";
import cookies from "next-cookies";

const ThankYou = ({ initialName }) => {
  const email = JSON.stringify(initialName);
  return (
    <>
      <div className={styles.main}>
        <Head>
          <title>Thank you!</title>
          <meta name="description" content="Thank you!" />
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
        <NavbarThankYou />

        <section className={styles.mains}>
          <div className={styles.Back}>
            <div>
            <h4 className={styles.thankh4}>
              Thank you!
              <br />
              <span className={styles.thankspan}>
                Get your study material and webinar recording.
              </span>
              <br />
            </h4>
            <div className={styles.twoButtonWebinar}>
              <a href="https://drive.google.com/drive/folders/1A-RH59eo5Q0Dq3tPKn0k6XjMbzSS8qyt" target="_blank" >
            <button>Study Material</button></a>
            <a href="https://zoom.us/rec/share/VlCMXs_8HYo9AekBHc9k2tzXOiPCvLogFtI7kBLKZ0j5o9bPIM7EE5sDaForhE9V.p_uQyD030Xhw4HYE" target="_blank" >
              <button>Webinar Recording</button></a>
              </div>
            </div>
            <div>
              <Image
                src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/thank-header.png"
                width="522"
                height="380"
                layout="intrinsic"
              />
            </div>
          </div>
        </section>
        <FooterThankYou />
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

export default ThankYou;

ThankYou.getInitialProps = async (ctx) => {
  return {
    initialName: cookies(ctx).CARD || "",
  };
};
