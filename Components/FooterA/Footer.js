import styles from "../Footer/Footer.module.css";
import { IoMailSharp } from "react-icons/io5";
import { BsFillTelephoneFill } from "react-icons/bs";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import {  FaCheck } from "react-icons/fa";

const Footer = () => {
  return (
    <section className={styles.FooterSection}>
      <div className={styles.FooterDiv}>
        <div className={styles.FooterDivInner}>

          <Image
            src="/logo-light.png"
            alt="Learnbay"
            quality={100}
            objectFit="contain"
            width="230px"
            height="60px"
          />

          <p className={styles.FooterInnerli}>Enroll Now For Data Science Classroom (Bangalore) Or Online Training With Us And Master Data Analytics Skills Which Will Help You To Transform Your Career And Start Your Career As A Data Scientist.</p>
          <span style={{ display: "flex", marginTop: "20px" }}><IoMailSharp className="bIcons" />contacts@learnbay.co</span>
          <span style={{ display: "flex", marginTop: "10px" }}><BsFillTelephoneFill className="bIcons" />(+91) 96069 50936</span>
        </div>
        <div className={styles.FooterDivInner}>
          <p className={styles.FooterInnerP}>Popular Courses</p>
          <p className={styles.FooterInnerli} style={{ display: "flex" }}><FaCheck className="bIcons" />Advance Data Science & AI Certification</p>
          <p className={styles.FooterInnerli} style={{ display: "flex" }}><FaCheck className="bIcons" />Full Stack Web Development Program</p>
          <p className={styles.FooterInnerli} style={{ display: "flex" }}><FaCheck className="bIcons" />Full-Stack Software Development Program</p>
          <p className={styles.FooterInnerli} style={{ display: "flex" }}><FaCheck className="bIcons" />DSA & System Design</p>
          <p className={styles.FooterInnerli} style={{ display: "flex" }}><FaCheck className="bIcons" />Advance AI & ML Certification</p>
          <p className={styles.FooterInnerli} style={{ display: "flex" }}><FaCheck className="bIcons" />Data Science & AI Cert. For Managers & Leaders</p>
          <p className={styles.FooterInnerli} style={{ display: "flex" }}><FaCheck className="bIcons" />100% Placement Assistance - Data Science & AI</p>
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
