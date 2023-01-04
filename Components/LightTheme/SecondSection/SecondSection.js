import React from 'react'
import styles from "./SecondSection.module.css";
import {
  FaBook,
  FaPlay,
  FaRegIdBadge,
  FaStar,
} from "react-icons/fa";
import Image from "next/image";

function SecondSection() {
  return (
    <div className={styles.section2}>
    <h1>Earn Your Online Professional Certification from</h1>
    <div className={styles.DivImg}>
      <Image
        src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/ALight/Learnbay-logo-PNG+1.png"
        width="220"
        height="70"
        layout="intrinsic"
      />
      <div className={styles.line}></div>
      <Image
        src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/ALight/IBM.png"
        width="150"
        height="70"
        layout="intrinsic"
      />
    </div>
    <p className={styles.tagline}>Learn Here, Lead Anywhere</p>
    <div className={styles.BoxIconDiv}>
      <div className={styles.BoxIcon}>
        <FaPlay className={styles.IconBoxBlue} />
        <p className={styles.HeadP}>Global Recognition</p>
        <p className={styles.HeadPP}>From IBM</p>
      </div>
      <div className={styles.lineWhite}></div>
      <div className={styles.BoxIcon}>
        <FaStar className={styles.IconBoxOrange} />
        <p className={styles.HeadP}>Industry Standard</p>
        <p className={styles.HeadPP}>Training</p>
      </div>
      <div className={styles.lineWhite}></div>
      <div className={styles.BoxIcon}>
        <FaBook className={styles.IconBoxBlue} />
        <p className={styles.HeadP}>Career Assistance</p>
        <p className={styles.HeadPP}>For Professionals</p>
      </div>
      <div className={styles.lineWhite}></div>
      <div className={styles.BoxIcon}>
        <FaRegIdBadge className={styles.IconBoxOrange} />
        <p className={styles.HeadP}>Financing as low as</p>
        <p className={styles.HeadPP}>₹ 9,342/month</p>
      </div>
    </div>
  </div>
  )
}

export default SecondSection