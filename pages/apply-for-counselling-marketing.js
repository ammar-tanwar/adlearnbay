import Head from 'next/head'
import styles from '../styles/Home.module.css'
import React from 'react'
import Navbar from "../Components/NavbarA/Navbar";
import Footer from "../Components/FooterA/Footer";
import Form from "../Components/Form/Form";
import Image from 'next/image';
function Counselling() {
  return (
    <div className={styles.container1}>
      <Head>
        <title>Learnbay Courses</title>
        <meta name="description" content="Learnbay Courses" />
        <link rel="icon" href="/Learnbay-Favicon-L.png" />
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
              "messageText":"Hello, I have a question about {{page_link}}",
              "backgroundColor":"#0a5f54",
              "ctaText":"Start Chat",
              "borderRadius":"25",
              "autoShow":false,
              "phoneNumber":"+919606950936"
          }
        };
            s.onload = function() {
                CreateWhatsappChatWidget(options);
            };
            var x = document.getElementsByTagName('script')[0];
            x.parentNode.insertBefore(s, x);`,
          }}
        />
      </Head>
      <Navbar radio={true} />
      <div className={styles.formq1}>

      <div className={styles.formr}>
          <Form radio={true} />
        </div>
        <div className={styles.forml}>
          <Image
            src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/home-page-header.webp"
            width="870"
            height="666"
            layout="intrinsic"
            alt="data science course in bangalore"
          />
          <div className={styles.info}>
            <div className={styles.left}>
              <h5>1:1</h5>
              <p>Dedicated Mentorship</p>
            </div>
            <div className={styles.middle}>
              <h5>100%</h5>
              <p>Assured Interview</p>
            </div>
            <div className={styles.right}>
              <h5>7+</h5>
              <p>Domain Electives</p>
            </div>
          </div>

        </div>
        
      </div>
      <Footer />
    </div>
  )
}

export default Counselling
