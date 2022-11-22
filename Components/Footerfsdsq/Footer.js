import styles from "./Footer.module.css";
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
          <a href="/fswd-s1">
            <Image
              src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/course.learnbay.co/publicimages/logo-light.png"
              alt="Learnbay"
              quality={100}
              objectFit="contain"
              width="230px"
              height="60px"
            />
          </a>
          <p className={styles.FooterInnerli}>The Full-Stack Developer Program is a demanding course that offers you everything you need to know about becoming a skillful developer. Prepare for MAANG interviews by brushing up on your technical skills. Enroll now for a smooth transition.</p>
          <span style={{ display: "flex", marginTop: "20px" }}><IoMailSharp className="bIcons" /><Link href="mailto:contacts@learnbay.co">contacts@learnbay.co</Link></span>
          <span style={{ display: "flex", marginTop: "10px" }}><BsFillTelephoneFill className="bIcons" /><Link href="tel:+919606950936">(+91) 96069 50936</Link></span>
        </div>
        <div className={styles.FooterDivInner}>
          <p className={styles.FooterInnerP}>Popular Courses</p>
          {/* <a href="/fswd-s2"><p className={styles.FooterInnerli} style={{display:"flex"}}><FaCheck className="bIcons"  />Full Stack Web Development Program</p></a> */}
          <a href="/fssd-s2"><p className={styles.FooterInnerli} style={{ display: "flex" }}><FaCheck className="bIcons" />Full-Stack Software Development Program</p></a>
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
