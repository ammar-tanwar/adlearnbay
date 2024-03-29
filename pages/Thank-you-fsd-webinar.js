import React from "react";
import styles from "../styles/ThankYou.module.css";
import Head from "next/head";
import Image from "next/image";
import { AiOutlineDownload } from "react-icons/ai";
import { BsArrowLeftShort } from "react-icons/bs";
import Navbar from "../Components/CoursePage/Navbar/NavbarThankYou";
import Footer from "../Components/Footerfsdsq/Footer";
import cookies from "next-cookies";

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
          {/* <script
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
        /> */}
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
        <section className={styles.mains}>
          <div className={styles.left}>
            <h4 className={styles.hptop}>
              <b>Thank you!</b>
              <br />
            </h4>
            <p className={styles.Ptop}>
              You are just one step away to complete your registration process
              to enter the masterclass
            </p>
            <div>
              <div className={styles.mainb}>
                <div>
                  <button className={styles.Button}>
                    <a href="https://zoom.us/webinar/register/WN_WLJ0YB4hQfuqkGPSwOwOTw">
                      Get Zoom Link
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.rightsfsd}>
            <div>
              <Image
                src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/course.learnbay.co/NImages/full-stack-web-development.png"
                alt="data-science-course"
                quality={100}
                layout="intrinsic"
                width="423"
                height="252"
              />
              <p className={styles.Ptopp}>
                Web <br />
                Development Program
              </p>
              <button className={styles.Button}>
                <AiOutlineDownload className="bIcons" />
                <a
                  href="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/learnbay/Full+Stack+Web+Development+Program+Learnbay.pdf"
                  target="_blank"
                >
                  Download Brochure
                </a>
              </button>
            </div>
            <div>
              <Image
                src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/course.learnbay.co/NImages/full-stack-developer-course.png"
                alt="data-science-course"
                quality={100}
                layout="intrinsic"
                width="423"
                height="252"
              />
              <p className={styles.Ptopp}>
                Full-Stack Software <br />
                Development Program
              </p>
              <button className={styles.Button}>
                <AiOutlineDownload className="bIcons" />
                <a
                  href="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/learnbay/Full+Stack+Software+Development+Program+Learnbay.pdf"
                  target="_blank"
                >
                  Download Brochure
                </a>
              </button>
            </div>
            <div>
              <Image
                src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/course.learnbay.co/NImages/dsa%26system.png"
                alt="data-science-course"
                quality={100}
                layout="intrinsic"
                width="423"
                height="252"
              />
              <p className={styles.Ptopp}>
                DSA & <br />
                System Design
              </p>
              <button className={styles.Button}>
                <AiOutlineDownload className="bIcons" />
                <a
                  href="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/learnbay/Data+Structure+Algorithm+%26+System+Design+Learnbay.pdf"
                  target="_blank"
                >
                  Download Brochure
                </a>
              </button>
            </div>

            <div>
              <Image
                src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/course.learnbay.co/NImages/Business-Analytics.png"
                alt="data-science-course"
                quality={100}
                layout="intrinsic"
                width="423"
                height="252"
              />
              <p className={styles.Ptopp}>
                Placement <br />
                Report
              </p>
              <button className={styles.Button}>
                <AiOutlineDownload className="bIcons" />
                <a
                  href="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/learnbay/Placement+Report+(1).pdf"
                  target="_blank"
                >
                  Download Brochure
                </a>
              </button>
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
