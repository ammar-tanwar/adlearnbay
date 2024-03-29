import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsFillTelephoneFill } from "react-icons/bs";
import { IoMailSharp } from "react-icons/io5";
import styles from "../Footer/Footer.module.css";

const Footer = ({
  Href,
  Href1,
  Href2,
  Href3,
  Course,
  Course1,
  Course2,
  Course3,
}) => {
  return (
    <section className={styles.FooterSection}>
      <div className={styles.FooterDiv}>
        <div className={styles.FooterDivInner}>
          <a href="/datascience/data-science-ai-masters-program">
            <Image
              src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/adlearnbay/white-logo.webp"
              alt="Learnbay"
              quality={100}
              width="230"
              height="100"
            />
          </a>
          <p className={styles.FooterInnerli}>
            Enroll Now For Data Science Classroom (Bangalore) And Online
            Training With us And Master Data Analytics Skills Which Will help
            you to transform your career and start your career as data
            scientist.
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
          <a href={Href}>
            <p className={styles.FooterInnerli} style={{ display: "flex" }}>
              <FaCheck className="bIcons" />
              {Course}
            </p>
          </a>
          <a href={Href1}>
            <p className={styles.FooterInnerli} style={{ display: "flex" }}>
              <FaCheck className="bIcons" />
              {Course1}
            </p>
          </a>
          <a href={Href2}>
            <p className={styles.FooterInnerli} style={{ display: "flex" }}>
              <FaCheck className="bIcons" />
              {Course2}
            </p>
          </a>
          <a href={Href3}>
            <p className={styles.FooterInnerli} style={{ display: "flex" }}>
              <FaCheck className="bIcons" />
              {Course3}
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
            Copyright © 2020 Learnbay by www.course.learnbay.co. All Rights
            Reserved.
          </p>
        </div>
      </div>
    </section>
  );
};

export default React.memo(Footer);
