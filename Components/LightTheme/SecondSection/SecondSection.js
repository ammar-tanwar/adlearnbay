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
        <p>Awarded 5 stars in the Young Universities category</p>
      </div>
      <div className={styles.lineWhite}></div>
      <div className={styles.BoxIcon}>
        <FaStar className={styles.IconBoxOrange} />
        <p>Awarded 5 stars in the Young Universities category</p>
      </div>
      <div className={styles.lineWhite}></div>
      <div className={styles.BoxIcon}>
        <FaBook className={styles.IconBoxBlue} />
        <p>Awarded 5 stars in the Young Universities category</p>
      </div>
      <div className={styles.lineWhite}></div>
      <div className={styles.BoxIcon}>
        <FaRegIdBadge className={styles.IconBoxOrange} />
        <p>Awarded 5 stars in the Young Universities category</p>
      </div>
    </div>
  </div>
  )
}

export default SecondSection