import styles from "../Footerfsdsw/Footer.module.css";
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
          <a href="/">
            <Image
              src="/logo-light.png"
              alt="Learnbay"
              quality={100}
              objectFit="contain"
              width="230px"
              height="60px"
            />
          </a>
          <p className={styles.FooterInnerli}>Enroll Now For Data Science Classroom (Bangalore) Or Online Training With Us And Master Data Analytics Skills Which Will Help You To Transform Your Career And Start Your Career As A Data Scientist.</p>
          <span style={{ display: "flex", marginTop: "20px" }}><IoMailSharp className="bIcons" /><Link href="mailto:contacts@learnbay.co">contacts@learnbay.co</Link></span>
          <span style={{ display: "flex", marginTop: "10px" }}><BsFillTelephoneFill className="bIcons" /><Link href="tel:+919606950936">(+91) 97311 35221</Link></span>
        </div>
        <div className={styles.FooterDivInner}>
          <p className={styles.FooterInnerP}>Popular Courses</p>
          <a href="/data-science-certification-courses"><p className={styles.FooterInnerli} style={{ display: "flex" }}><FaCheck className="bIcons" />Advance Data Science & AI Certification</p></a>
          <a href="/dsa"><p className={styles.FooterInnerli} style={{ display: "flex" }}><FaCheck className="bIcons" />Data Structures & Algorithms and System Design</p></a>
          <a href="/fssd"><p className={styles.FooterInnerli} style={{ display: "flex" }}><FaCheck className="bIcons" />Full-Stack Software Development Program</p></a>
          <a href="/advance-ai-ml-certification"><p className={styles.FooterInnerli} style={{ display: "flex" }}><FaCheck className="bIcons" />Advance AI & ML Certification</p></a>
          <a href="/data-science-ai-cert-for-managers-leaders"><p className={styles.FooterInnerli} style={{ display: "flex" }}><FaCheck className="bIcons" />Data Science & AI Cert. For Managers & Leaders</p></a>
          <a href="/job-guarantee-or-money-back-data-science-ai"><p className={styles.FooterInnerli} style={{ display: "flex" }}><FaCheck className="bIcons" />100% Placement Assistance - Data Science & AI</p></a>
        </div>
        <div className={styles.FooterDivInner}>
          <p className={styles.FooterInnerP}>Find Us Here</p>
          <p className={styles.FooterInnerli}>#1090 , 1st floor, 18th cross road
            HSR layout sector 3, Bangalore - 560102
            (Above Sangam Sweets)</p>
        </div>
      </div>
      <div className={styles.FooterBottom}>
        <div className={styles.FooterBottomInner}>
          <p className={styles.FooterInnerB}>Copyright © 2020 Learnbay by www.learnbay.co. All Rights Reserved.</p>
        </div>
      </div>
    </section>
  );
};

export default React.memo(Footer);
