import React from "react";
import Image from "next/image";
import styles from "./SecondSection.module.css";

function SecondSection({ SecondSectionData }) {
  return (
    <div className={`${styles.second} wrapper`}>
      <h1 className={styles.h1}>Earn Your Online Professional Certification from</h1>
          <div className={styles.DivImg}>
            <Image
              src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/ALight/learnbay-logo.png"
              width="230"
              height="60"
              layout="intrinsic"
              loading="lazy"
            />
            <div className={styles.line}></div>
            <Image
              src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/FirstSection.png"
              width="283"
              height="51"
              layout="intrinsic"
              loading="lazy"
            />
          </div>
          <p className={styles.tagline}>Learn Here, Lead Anywhere</p>
      <div>
      </div>
      <div className={styles.secondBox}>
        {SecondSectionData.map((data, index) => {
          const { heading, para, img, width, height } = data;
          return (
            <div className={styles.blue} key={index}>
              <div> 
                <h5 className={styles.heading}>{heading}</h5>
                <p className={styles.textBox}>{para}</p>
              </div>
              <div className={styles.imgWrap}>
{img}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default SecondSection;
