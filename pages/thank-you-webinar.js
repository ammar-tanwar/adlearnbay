import React from "react";
import styles from "../styles/ThankYou.module.css";
import Head from "next/head";
import Image from "next/image";
import { AiOutlineDownload } from "react-icons/ai";
import { BsArrowLeftShort } from "react-icons/bs";
import Navbar from "../Components/CoursePage/Navbar/NavbarThankYou";
import Footer from "../Components/Footerfsdsq/Footer";
import cookies from "next-cookies";
import ThankYouWebinar from "../Components/NewWebinar/ThankYouWebinar/ThankYouWebinar";

const ThankYouFsd = ({ initialName }) => {
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
          "phoneNumber":"+919731135221"
      }
    };
        s.onload = function() {
            CreateWhatsappChatWidget(options);
        };
        var x = document.getElementsByTagName('script')[0];
        x.parentNode.insertBefore(s, x);`,
          }}
        />
        {/* <script
          src="//code.tidio.co/mgl99n6cbvvabah9x8jj98no83kdozym.js"
          async
        ></script> */}

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
  );
};

export default ThankYouFsd;

ThankYouFsd.getInitialProps = async (ctx) => {
  return {
    initialName: cookies(ctx).CARD || "",
  };
};

// <script
//         type="application/ld+json"
//         dangerouslySetInnerHTML={{
//           __html:`
//           window.dataLayer = window.dataLayer || [];
//           window.dataLayer.push({
//             ‘event’: ‘form_complete’,
//             ‘enhanced_conversion_data’: {
//               “email”: ${user}
//             }
//           `}}>

//         </script>

// <script
// type="application/ld+json"
// dangerouslySetInnerHTML={{
//   __html:
//     ` {

//      } `
// }}
// />
