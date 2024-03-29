import React from "react";
import styles from "./FourthSection.module.css";
import Image from "next/image";
import { FaRegIdBadge, FaRegCalendarCheck, FaLaptopCode } from "react-icons/fa";
import { BiSelectMultiple } from "react-icons/bi";

function FourthSection({ h1, img1, img2, img3, img4, fullStackCont }) {
  return (
    <div className={styles.section4}>
      <h1>{h1}</h1>
      <div className={styles.section4Box}>
        <div className={styles.boxSection4Orange}>
          <Image
            src={img2}
            width="393"
            height="264"
            layout="intrinsic"
            loading="lazy"
          />
          <div className={styles.iconText4Borange}>
            <FaRegCalendarCheck className={styles.IconBoxBlue} />
            <p className={styles.section4P}>Weekend & Weekday Batches</p>
          </div>
        </div>
        <div className={styles.boxSection4Blue}>
          <Image
            src={img1}
            width="393"
            height="264"
            layout="intrinsic"
            loading="lazy"
          />
          <div className={styles.iconText4Bblue}>
            <FaLaptopCode className={styles.IconBoxOrange} />
            {fullStackCont ? (
              <p className={styles.section4P}>Live Interactive Classes</p>
            ) : (
              <p className={styles.section4P}>Online Interactive Classes</p>
            )}
          </div>
        </div>
        <div className={styles.boxSection4Orange}>
          <Image
            src={img4}
            width="393"
            height="264"
            layout="intrinsic"
            loading="lazy"
          />
          <div className={styles.iconText4Borange}>
            <BiSelectMultiple className={styles.IconBoxBlue} />
            {fullStackCont ? (
              <p className={styles.section4P}>100% Placement Support</p>
            ) : (
              <p className={styles.section4P}>Multiple Domain Selection</p>
            )}
          </div>

        </div>
        <div className={styles.boxSection4Blue}>
            <Image
              src={img3}
              width="393"
              height="264"
              layout="intrinsic"
              loading="lazy"
            />
            <div className={styles.iconText4Bblue}>
              <FaRegIdBadge className={styles.IconBoxOrange} />
              <p className={styles.section4P}>1:1 Doubt Clearing Sessions</p>
            </div>
          </div>
      </div>
    </div>
  );
}

export default FourthSection;
