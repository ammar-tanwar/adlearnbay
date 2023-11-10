import React from "react";
import styles from "./MasterSecondSection.module.css";
import Image from "next/image";
import { useState, useEffect } from "react";

const MasterSecondSection = () => {


  return (
    <div>
      <div className={styles.mainBox}>
        <div className={styles.firstbox}>
          <div className={styles.box}>
            <p className={styles.BoldP}>60+</p>
            <p className={styles.NormalP}>Countries Recognition</p>
            <div className={styles.radial}></div>
          </div>
          <div className={styles.box}>
            <p className={styles.BoldP} style={{ color: "#ff8403" }}>
              90+
            </p>
            <p className={styles.NormalP}>Transferrable ECTS Credits</p>
            <div className={styles.radial}></div>
          </div>
          <div className={styles.box}>
            <p className={styles.BoldP}>35K+</p>
            <p className={styles.NormalP}>Trusted Learners</p>
            <div className={styles.radial}></div>
          </div>
        </div>
        <div className={styles.secondbox}>
          <div className={styles.imgBox}>
            <Image
              src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/review1.webp"
              width={280}
              height={130}
            />
          </div>

          <div className={`${styles.imgDesc}`}>
            <Image
              src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/review2.webp"
              width={380}
              height={130}
            />
          </div>
          <div className={`imgWrapper ${styles.imgMobile}` }>
            <Image
              src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/review-mobile.webp"
              width={380}
              height={200}
            />
          </div>


        </div>


      </div>
    </div>
  );
};

export default MasterSecondSection;
