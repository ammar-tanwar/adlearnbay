import React from "react";
import styles from "./SecondSection.module.css";
import { FaBook, FaUserGraduate, FaRegIdBadge, FaStar } from "react-icons/fa";
import {RiGlobalLine} from "react-icons/ri";
import Image from "next/image";

function SecondSection({ p1, p2, p3, p4, p11, p22, p33, p44, fullStackCont, masterDegree  }) {

  // console.log("AAAA",masterDegree)
  return (
    <div>
    
      <div className={styles.section2}>
        <h1>Earn Your Online Professional Certification from</h1>
        <div className={styles.DivImg}>
          <Image
            src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/woolf-learnbay.webp"
            width="400"
            height="60"
            layout="intrinsic"
            loading="lazy"
          />

{/* <div className={styles.line}></div>
              <Image
                src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/woolflogo.webp"
                width="250"
                height="80"
                layout="intrinsic"
                loading="lazy"
              /> */}
       
        </div>
        <p className={styles.tagline}>Learn Here, Lead Anywhere</p>
        <div className={styles.BoxIconDiv}>
          <div className={styles.BoxIcon}>
            <RiGlobalLine className={styles.IconBoxBlue} />
            <p className={styles.HeadPP}>{p1}</p>
            <p className={styles.HeadP}>{p11}</p>
          </div>
          <div className={styles.lineWhite}></div>
          <div className={styles.BoxIcon}>
            <FaStar className={styles.IconBoxOrange} />
            <p className={styles.HeadPP}>{p2}</p>
            <p className={styles.HeadP}>{p22}</p>
          </div>
          <div className={styles.lineWhite}></div>
          <div className={styles.BoxIcon}>
            <FaUserGraduate className={styles.IconBoxBlue} />
            <p className={styles.HeadPP}>{p3}</p>
            <p className={styles.HeadP}>{p33}</p>
          </div>
          <div className={styles.lineWhite}></div>
          <div className={styles.BoxIcon}>
            <FaRegIdBadge className={styles.IconBoxOrange} />
            <p className={styles.HeadPP}>{p4}</p>
            <p className={styles.HeadP}>{p44}</p>
          </div>
        </div>
      </div>


  
    </div>
  );
}

export default SecondSection;
