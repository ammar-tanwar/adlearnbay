import styles from "../Footer/Footer.module.css";
import { IoMailSharp } from "react-icons/io5";
import { BsFillTelephoneFill } from "react-icons/bs";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import { FaCheck } from "react-icons/fa";

const Footer = () => {
  return (
    <section className={styles.FooterSection}>
      <div className={styles.FooterDiv}>
        <div className={styles.FooterDivInner}>
          <a href="https://www.learnbay.co/data-science-course/">
            <Image
              src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/course.learnbay.co/publicimages/logo-light.png"
              alt="Learnbay"
              quality={100}
              objectFit="contain"
              width="230px"
              height="60px"
            />
          </a>
          <p className={styles.FooterInnerli}>
            The Full-Stack Developer Program is a demanding course that offers
            you everything you need to know about becoming a skillful developer.
            Prepare for top product based MNCs interviews by brushing up on your
            technical skills. Enroll now for a smooth transition.
          </p>
          <span style={{ display: "flex", marginTop: "20px" }}>
            <IoMailSharp className="bIcons" />
            <Link href="mailto:contacts@learnbay.co">contacts@learnbay.co</Link>
          </span>
          <span style={{ display: "flex", marginTop: "10px" }}>
            <BsFillTelephoneFill className="bIcons" />
            <Link href="tel:+918123327570">(+91) 81233 27570</Link>
          </span>
        </div>
        <div className={styles.FooterDivInner}>
          <p className={styles.FooterInnerP}>Popular Courses</p>
          <a href="https://learnbay.co/data-science-course/data-science-certification-courses/">
            <p className={styles.FooterInnerli} style={{ display: "flex" }}>
              <FaCheck className="bIcons" />
              Data Science & AI Certification
            </p>
          </a>
          <a href="https://www.learnbay.co/data-science-course/advance-data-science-certification-courses/">
            <p className={styles.FooterInnerli} style={{ display: "flex" }}>
              <FaCheck className="bIcons" />
              Advance Data Science & AI Certification
            </p>
          </a>
          {/* <a href="/full-stack-web-development-program"><p className={styles.FooterInnerli} style={{display:"flex"}}><FaCheck className="bIcons"  />  Web Development Program</p></a> */}
          <a href="/full-stack-software-development-program">
            <p className={styles.FooterInnerli} style={{ display: "flex" }}>
              <FaCheck className="bIcons" />
              Full-Stack Software Development Program
            </p>
          </a>
          <a href="/dsa-system-design">
            <p className={styles.FooterInnerli} style={{ display: "flex" }}>
              <FaCheck className="bIcons" />
              DSA & System Design
            </p>
          </a>
          <a href="https://learnbay.co/data-science-course/artificial-intelligence-certification-course/">
            <p className={styles.FooterInnerli} style={{ display: "flex" }}>
              <FaCheck className="bIcons" />
              Advance AI & ML Certification
            </p>
          </a>
          <a href="https://learnbay.co/data-science-course/data-science-ai-for-managers/">
            <p className={styles.FooterInnerli} style={{ display: "flex" }}>
              <FaCheck className="bIcons" />
              Data Science & AI Cert. For Managers & Leaders
            </p>
          </a>
          <a href="https://www.learnbay.co/data-science-ai-masters-program">
            <p className={styles.FooterInnerli} style={{ display: "flex" }}>
              <FaCheck className="bIcons" />
              Data Science and AI Master Program
            </p>
          </a>
          <a href="https://learnbay.co/data-science-course/data-analytics-business-analytics-programs-for-professionals/">
            <p className={styles.FooterInnerli} style={{ display: "flex" }}>
              <FaCheck className="bIcons" />
              Data Analytics & Business Analytics Program | Fast Track Course
            </p>
          </a>
        </div>
        <div className={styles.FooterDivInner}>
          <p className={styles.FooterInnerP}>Find Us Here</p>
          <p className={styles.FooterInnerli}>
            #1090 , 1st floor, 18th cross road HSR layout sector 3, Bangalore -
            560102 (Above Sangam Sweets)
          </p>
        </div>
      </div>
      <div className={styles.FooterBottom}>
        <div className={styles.FooterBottomInner}>
          <p className={styles.FooterInnerB}>
            Copyright © 2022 Learnbay by Learnvista Pvt. Ltd. All Rights
            Reserved.
          </p>
        </div>
      </div>
    </section>
  );
};

export default React.memo(Footer);
