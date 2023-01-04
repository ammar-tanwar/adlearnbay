import React from 'react'
import styles from "./FourthSection.module.css";
import Image from "next/image";
import { FaRegIdBadge, FaRegCalendarCheck, FaLaptopCode } from "react-icons/fa";
import { BiSelectMultiple } from "react-icons/bi"

function FourthSection() {
  return (
    <div className={styles.section4}>
    <h1>Program Highlights</h1>
    <div className={styles.section4Box}>
      <div className={styles.boxSection4Blue}>
        <Image
          src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/ALight/DataScinceLight1.png"
          width="220"
          height="220"
          layout="intrinsic"
        />
        <div className={styles.iconText4Bblue}>
          <FaLaptopCode className={styles.IconBoxOrange} />
          <p className={styles.section4P}>Online Interactive Classes</p>
        </div>
      </div>
      <div className={styles.boxSection4Orange}>
        <Image
          src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/ALight/DataScinceLight1.png"
          width="220"
          height="220"
          layout="intrinsic"
        />
        <div className={styles.iconText4Borange}>
          <FaRegCalendarCheck className={styles.IconBoxBlue} />
          <p className={styles.section4P}>Weekend and Weekday Batches</p>
        </div>
      </div>
      <div className={styles.boxSection4Blue}>
        <Image
          src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/ALight/DataScinceLight1.png"
          width="220"
          height="220"
          layout="intrinsic"
        />
        <div className={styles.iconText4Bblue}>
          <FaRegIdBadge className={styles.IconBoxOrange} />
          <p className={styles.section4P}>Extra Doubt Clearance Sessions</p>
        </div>
      </div>
      <div className={styles.boxSection4Orange}>
        <Image
          src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/ALight/DataScinceLight1.png"
          width="220"
          height="220"
          layout="intrinsic"
        />
        <div className={styles.iconText4Borange}>
          <BiSelectMultiple className={styles.IconBoxBlue} />
          <p className={styles.section4P}>Multiple Domain Selection Options</p>
        </div>
      </div>
    </div>
  </div>
  )
}

export default FourthSection