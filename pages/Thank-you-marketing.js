import React from "react";
import styles from "../styles/ThankYou.module.css";
import Head from "next/head";
import Image from "next/image";
import NavbarThankYou from "../Components/CoursePage/Navbar/NavbarThankYou";
import FooterThankYou from "../Components/Footerfsdsw/FooterThankYou";
import CourseThankYou from "../Components/Home/Course/ThankYouNew";
import cookies from "next-cookies";

const ThankYou = ({ initialName }) => {
  const email = JSON.stringify(initialName);
  return (
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
            __html: `var url = 'https://wati-integration-service.clare.ai/ShopifyWidget/shopifyWidget.js?77928';
            var s = document.createElement('script');
            s.type = 'text/javascript';
            s.async = true;
            s.src = url;
            var options = {
          "enabled":true,
          "chatButtonSetting":{
              "backgroundColor":"#4dc247",
              "ctaText":"",
              "borderRadius":"10",
              "marginLeft":"0",
              "marginBottom":"30",
              "marginRight":"30",
              "position":"right"
          },
          "brandSetting":{
              "brandName":"Learnbay",
              "brandSubTitle":"The Learner's Path",
              "brandImg":"https://course.learnbay.co/Learnbay-Favicon-L.png",
              "welcomeText":"Hi there! How can I help you?",
 "messageText":"I am looking for course, and free career counselling session.",
              "backgroundColor":"#0a5f54",
              "ctaText":"Start Chat",
              "borderRadius":"25",
              "autoShow":false,
              "phoneNumber":"+919986049187"
          }
        };
            s.onload = function() {
                CreateWhatsappChatWidget(options);
            };
            var x = document.getElementsByTagName('script')[0];
            x.parentNode.insertBefore(s, x);`,
          }}
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
        <div className={styles.WDBack}>
          <h4 className={styles.WDthankh4}>
            Thank you!
            <br />
            <span className={styles.WDthankspan}>
              Your request has been received. We will get in touch with you
              soon.
            </span>
          </h4>
          <div>
            <Image
              src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/course.learnbay.co/WDThankGirl.png"
              width="412"
              height="487"
              layout="intrinsic"
            />
          </div>
        </div>
        <CourseThankYou />
      </section>
      <FooterThankYou />
    </div>
  );
};

export default ThankYou;

ThankYou.getInitialProps = async (ctx) => {
  return {
    initialName: cookies(ctx).CARD || "",
  };
};
