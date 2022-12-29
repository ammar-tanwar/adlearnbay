import React from 'react'
import styles from "./FourthSection.module.css";
import Image from "next/image";
import { FaRegIdBadge } from "react-icons/fa";

function FourthSection() {
  return (
    <div className={styles.section4}>
    <h1>Program Highlights</h1>
    <div className={styles.section4Box}>
      <div className={styles.boxSection4}>
        <Image
          src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/ALight/DataScinceLight1.png"
          width="220"
          height="220"
          layout="intrinsic"
        />
        <div className={styles.iconText4Bblue}>
          <FaRegIdBadge className={styles.IconBoxOrange} />
          <p className={styles.section4P}>250+ Hrs Live classes</p>
        </div>
      </div>
      <div className={styles.boxSection4}>
        <Image
          src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/ALight/DataScinceLight1.png"
          width="220"
          height="220"
          layout="intrinsic"
        />
        <div className={styles.iconText4Borange}>
          <FaRegIdBadge className={styles.IconBoxBlue} />
          <p className={styles.section4P}>250+ Hrs Live classes</p>
        </div>
      </div>
      <div className={styles.boxSection4}>
        <Image
          src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/ALight/DataScinceLight1.png"
          width="220"
          height="220"
          layout="intrinsic"
        />
        <div className={styles.iconText4Bblue}>
          <FaRegIdBadge className={styles.IconBoxOrange} />
          <p className={styles.section4P}>250+ Hrs Live classes</p>
        </div>
      </div>
      <div className={styles.boxSection4}>
        <Image
          src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/ALight/DataScinceLight1.png"
          width="220"
          height="220"
          layout="intrinsic"
        />
        <div className={styles.iconText4Borange}>
          <FaRegIdBadge className={styles.IconBoxBlue} />
          <p className={styles.section4P}>250+ Hrs Live classes</p>
        </div>
      </div>
    </div>
  </div>
  )
}

export default FourthSection