import React from "react";
import styles from "../styles/ThankYou.module.css";
import Head from "next/head";
import Image from "next/image";
import { AiOutlineDownload } from "react-icons/ai";
import { BsArrowLeftShort } from "react-icons/bs";
import Navbar from "../Components/Navbarfsds/Navbar";
import Footer from "../Components/Footerfsdsw/Footer";

const ThankYou = () => {
  return (
    <div className={styles.main}>
      <Head>
        <title>Thank you!</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <Navbar />
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
                  <a href="/">Go To Home</a>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.right}>
          <div>
          <Image
            src="/ds.png"
            alt="data-science-course"
            quality={100}
            layout="intrinsic"
            width="306"
            height="150"
          />
          <p className={styles.Ptopp}>
          Data Science & AI Certification | Domain Specialisation For Professionals
          </p>
          <button className={styles.Button}>
                  <AiOutlineDownload className="bIcons" />
                  <a href="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/Data+Science+%26+AI+Certification.pdf" target="_blank" >
                    Download Brochure
                  </a>
                </button>
          </div>
          <div>
          <Image
            src="/advanceds.png"
            alt="data-science-course"
            quality={100}
            layout="intrinsic"
            width="306"
            height="150"
          />
          <p className={styles.Ptopp}>
          Advance AI & ML Certification | Become AI Expert In Product based MNCs
          </p>
          <button className={styles.Button}>
                  <AiOutlineDownload className="bIcons" /> 
                  <a href="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/Advance+AI+%26+ML+Certification+.pdf" target="_blank" >
                    Download Brochure
                  </a>
                </button>
          </div>
          <div>
          <Image
            src="/managers.png"
            alt="data-science-course"
            quality={100}
            layout="intrinsic"
            width="306"
            height="150"
          />
          <p className={styles.Ptopp}>
          Data Science & AI Certification Program For Managers and Leaders
          </p>
          <button className={styles.Button}>
                  <AiOutlineDownload className="bIcons" />
                  <a href="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/Data+Science+%26+AI+Certification+Program+For+Managers+and+Leaders.pdf" target="_blank" >
                    Download Brochure
                  </a>
                </button>
          </div>
          <div>
          <Image
            src="/guarantee.png"
            alt="data-science-course"
            quality={100}
            layout="intrinsic"
            width="306"
            height="150"
          />
          <p className={styles.Ptopp}>
          Job Guarantee or Money Back | Data Science & AI Certification Program
          </p>
          <button className={styles.Button}>
                  <AiOutlineDownload className="bIcons" />
                  <a href="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/Job+Guarantee+or+100%25+Money+Back+(1).pdf" target="_blank" >
                    Download Brochure
                  </a>
                </button>
          </div>
        </div>
      </section>
      <div className={styles.rights}>
          <div>
          <Image
            src="/full-stack-web.png"
            alt="data-science-course"
            quality={100}
            layout="intrinsic"
            width="306"
            height="150"
          />
          <p className={styles.Ptopp}>
          Full Stack Web  <br />Development Program
          </p>
          <button className={styles.Button}>
                  <AiOutlineDownload className="bIcons" />
                  <a href="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/newcoursebrochure/Full+Stack+Web+Development+Program.pdf" target="_blank" >
                    Download Brochure
                  </a>
                </button>
          </div>
          <div>
          <Image
            src="/full-stack-Software.png"
            alt="data-science-course"
            quality={100}
            layout="intrinsic"
            width="306"
            height="150"
          />
          <p className={styles.Ptopp}>
          Full-Stack Software <br />Development Program
          </p>
          <button className={styles.Button}>
                  <AiOutlineDownload className="bIcons" /> 
                  <a href="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/newcoursebrochure/Full+Stack+software+development+.pdf" target="_blank" >
                    Download Brochure
                  </a>
                </button>
          </div>
        </div>
      <Footer />
    </div>
  );
};

export default ThankYou;
