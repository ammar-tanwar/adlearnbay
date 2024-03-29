import React from "react";
import styles from "../styles/ThankYou.module.css";
import Head from "next/head";
import Image from "next/image";
import { AiOutlineDownload } from "react-icons/ai";
import { BsArrowLeftShort } from "react-icons/bs";
import Navbar from "../Components/CoursePage/Navbar/NavbarThankYou";
import Footer from "../Components/CoursePage/Footer/Footer";
import cookies from "next-cookies";

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
            You are just one step away to complete your registration process to
            enter the masterclass
          </p>
          <div>
            <div className={styles.mainb}>
              <div>
                <button className={styles.Button}>
                  <a href="https://zoom.us/webinar/register/WN_Qt7diBP9RHGPjsLuiUOmBQ">
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
              src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/course.learnbay.co/NImages/advance-data-science-ai-program.png"
              alt="data-science-course"
              quality={100}
              layout="intrinsic"
              width="306"
              height="200"
            />
            <p className={styles.Ptopp}>
              Advance AI & ML Certification | Become AI Expert In Product based
              MNCs
            </p>
            <button className={styles.Button}>
              <AiOutlineDownload className="bIcons" />
              <a
                href="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/learnbay/Advance+AI+%26+ML+Certification+Program+Learnbay.pdf"
                target="_blank"
              >
                Download Brochure
              </a>
            </button>
          </div>
          <div>
            <Image
              src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/course.learnbay.co/NImages/data-science-ai-for-managers.png"
              alt="data-science-course"
              quality={100}
              layout="intrinsic"
              width="306"
              height="200"
            />
            <p className={styles.Ptopp}>
              Data Science & AI Certification Program For Managers and Leaders
            </p>
            <button className={styles.Button}>
              <AiOutlineDownload className="bIcons" />
              <a
                href="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/learnbay/Data+Science+%26+AI+Certification+Program+For+Managers+%26+Leaders+Learnbay.pdf"
                target="_blank"
              >
                Download Brochure
              </a>
            </button>
          </div>

          <div>
            <Image
              src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/course.learnbay.co/NImages/advance-ai-ml-for-tech-professionals.png"
              alt="data-science-course"
              quality={100}
              layout="intrinsic"
              width="306"
              height="200"
            />
            <p className={styles.Ptopp}>Data Science & AI Master Program</p>
            <button className={styles.Button}>
              <AiOutlineDownload className="bIcons" />
              <a
                href="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/learnbay/Data+Science+and+AI+Master's+Program+%5BWith+Unlimited+Interview+Calls%5D.pdf"
                target="_blank"
              >
                Download Brochure
              </a>
            </button>
          </div>
          <div>
            <Image
              src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/course.learnbay.co/NImages/data-analytics.png"
              alt="data-science-course"
              quality={100}
              layout="intrinsic"
              width="306"
              height="200"
            />
            <p className={styles.Ptopp}>
              Data
              <br /> Analytics Program
            </p>
            <button className={styles.Button}>
              <AiOutlineDownload className="bIcons" />
              <a
                href="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/learnbay/Data+Analytics+Certification+Program+Learnbay.pdf"
                target="_blank"
              >
                Download Brochure
              </a>
            </button>
          </div>
        </div>

        <div className={styles.rightsfsd}>
          <div>
            <Image
              src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/course.learnbay.co/NImages/dsa%26system.png"
              alt="data-science-course"
              quality={100}
              layout="intrinsic"
              width="306"
              height="200"
            />
            <p className={styles.Ptopp}>Business Analytics Program</p>
            <button className={styles.Button}>
              <AiOutlineDownload className="bIcons" />
              <a
                href="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/learnbay/Business+Analytics+Certification+Program+Learnbay.pdf"
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
              height="200"
            />
            <p className={styles.Ptopp}>Data Science Placement Report</p>
            <button className={styles.Button}>
              <AiOutlineDownload className="bIcons" />
              <a
                href="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/learnbay/Placement+Report.pdf"
                target="_blank"
              >
                Download Brochure
              </a>
            </button>
          </div>

          <div>
            <Image
              src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/course.learnbay.co/NImages/advance-data-science-ai-program.png"
              alt="data-science-course"
              quality={100}
              layout="intrinsic"
              width="306"
              height="200"
            />
            <p className={styles.Ptopp}>Data Science Project Brochure</p>
            <button className={styles.Button}>
              <AiOutlineDownload className="bIcons" />
              <a
                href="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/learnbay/Data+Science+and+AI+Projects.pdf"
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
              height="200"
            />
            <p className={styles.Ptopp}>Banking Domain Brochure</p>
            <button className={styles.Button}>
              <AiOutlineDownload className="bIcons" />
              <a
                href="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/domain/Banking%2C+Finance+and+Insurance+Domain.pdf"
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

export default ThankYouFsd;

ThankYouFsd.getInitialProps = async (ctx) => {
  return {
    initialName: cookies(ctx).CARD || "",
  };
};
