import styles from "../styles/ThankYou.module.css";
import Head from "next/head";
import Image from "next/image";
import { AiOutlineDownload } from "react-icons/ai";
import { BsArrowLeftShort } from "react-icons/bs";
import Navbar from "../Components/CoursePage/Navbar/Navbar";
import Footer from "../Components/Footerfsdsq/Footer";

const ThankYou = () => {
  return (
    <div className={styles.main}>
      <Head>
        <title>Thank you!</title>
        <meta name="description" content="Generated by create next app" />
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

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `

        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
          ‘event’: ‘form_complete’,
          ‘enhanced_conversion_data’: {
            “email”: ""
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
            We Received your request and look forward to getting in touch soon.
          </p>
          <div>
            <div className={styles.mainb}>
              <div>
                <button className={styles.Button}>
                  <BsArrowLeftShort className="bIcons" />
                  <a href="/fssd-s1">Go To Home</a>
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
              width="306"
              height="150"
            />
            <p className={styles.Ptopp}>
              Full Stack Web <br />
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
              width="306"
              height="150"
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
              width="306"
              height="150"
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
              width="306"
              height="150"
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
  );
};

export default ThankYou;

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
