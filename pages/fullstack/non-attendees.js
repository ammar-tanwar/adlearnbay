import React from "react";
import styles from "../../styles/InfoWebinar.module.css";
import Head from "next/head";
import Navbar from "../../Components/CoursePage/Navbar/NavbarThankYou";
import Footer from "../../Components/CoursePage/Footer/Footer";
import Form from "../../Components/WebinarPage/Form/Form";
import cookies from "next-cookies";

const ThankYouFsd = ({ initialName }) => {
  const email = JSON.stringify(initialName);

  return (
    <>
      <div className={styles.main}>
        <Head>
          <title>Info Webinar - Learnbay</title>
          <meta name="description" content="Info Webinar - Learnbay" />
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
        <section className={styles.mains}>
          <div className={styles.Back}>
            <h4 className={styles.thankh4}>
              Oops!
              <br />
              <span className={styles.thankspan}>
              Registration for the Masterclass is now closed, but you can still access the RECORDING and STUDY MATERIAL from the webinar.
              </span>
            </h4>
            <div>
              <section className={styles.formDomain}>
                <div className={styles.headerDomain}>
                  <h3>Get Your Recording</h3>
                </div>
                <Form phoneHide={true} downloadBrochure/>
              </section>
            </div>
          </div>
        </section>
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
