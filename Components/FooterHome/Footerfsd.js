import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaCheck } from "react-icons/fa";
import { IoMailSharp } from "react-icons/io5";
import styles from "../Footerfsdsw/Footer.module.css";

const Footer = () => {
  return (
    <section className={styles.FooterSection}>
      <div className={styles.FooterDiv}>
        <div className={styles.FooterDivInner}>
          <a href="/">
            <Image
              src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/adlearnbay/white-logo.webp"
              alt="Learnbay"
              quality={100}
              width="230"
              height="100"
            />
          </a>
          <p className={styles.FooterInnerli}>
            Enroll Now For Data Science Classroom (Bangalore) Or Online Training
            With Us And Master Data Analytics Skills Which Will Help You To
            Transform Your Career And Start Your Career As A Data Scientist.
          </p>
          <span style={{ display: "flex", marginTop: "20px" }}>
            <IoMailSharp className="bIcons" />
            <Link href="mailto:contacts@learnbay.co">contacts@learnbay.co</Link>
          </span>
          <span style={{ display: "flex", marginTop: "10px" }}>
            <BsFillTelephoneFill className="bIcons" />
            <Link href="tel:+917795687988">(+91) 77956 87988</Link>
          </span>
        </div>
        <div className={styles.FooterDivInner}>
          <p className={styles.FooterInnerP}>Popular Courses</p>
          <a href="/datascience/data-science-certification-courses">
            <p className={styles.FooterInnerli} style={{ display: "flex" }}>
              <FaCheck className="bIcons" />
              Advance Data Science & AI Certification
            </p>
          </a>
          <a href="/fullstack/dsa">
            <p className={styles.FooterInnerli} style={{ display: "flex" }}>
              <FaCheck className="bIcons" />
              Data Structures & Algorithms and System Design
            </p>
          </a>
          <a href="/fullstack/fssd">
            <p className={styles.FooterInnerli} style={{ display: "flex" }}>
              <FaCheck className="bIcons" />
              Software Development Master Program
            </p>
          </a>
          {/* <a href="/fswd">
            <p className={styles.FooterInnerli} style={{ display: "flex" }}>
              <FaCheck className="bIcons" />
                Web Development Program
            </p>
          </a> */}
          <a href="/datascience/advance-ai-ml-certification">
            <p className={styles.FooterInnerli} style={{ display: "flex" }}>
              <FaCheck className="bIcons" />
              Advance AI & ML Certification
            </p>
          </a>
          <a href="/datascience/data-science-ai-cert-for-managers-leaders">
            <p className={styles.FooterInnerli} style={{ display: "flex" }}>
              <FaCheck className="bIcons" />
              Data Science & AI Cert. For Managers & Leaders
            </p>
          </a>
          <a href="/datascience/data-science-ai-masters-program">
            <p className={styles.FooterInnerli} style={{ display: "flex" }}>
              <FaCheck className="bIcons" />
              Data Science and AI Master Program
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
