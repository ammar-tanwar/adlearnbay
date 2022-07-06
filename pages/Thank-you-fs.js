import React from "react";
import styles from "../styles/ThankYou.module.css";
import Head from "next/head";
import Image from "next/image";
import { AiOutlineDownload } from "react-icons/ai";
import { BsArrowLeftShort } from "react-icons/bs";
import Navbar from "../Components/Navbarfsds1/Navbar";
import Footer from "../Components/Footerfsdsq/Footer";

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
                  <a href="/fswd-s1">Go To Home</a>
                </button>
              </div>
            </div>
          </div>
        </div>
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
      </section>
      <Footer />
    </div>
  );
};

export default ThankYou;
