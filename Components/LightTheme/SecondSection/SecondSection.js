import Image from "next/image";
import React from "react";
import { FaBook, FaRegIdBadge, FaStar, FaUserGraduate } from "react-icons/fa";
import styles from "./SecondSection.module.css";

function SecondSection({
  p1,
  p2,
  p3,
  p4,
  p11,
  p22,
  p33,
  p44,
  fullStackCont,
  MastersPage,
}) {
  return (
    <div>
      {MastersPage ? (
        <div className={styles.section2}>
          <h1>Earn Your Online Professional Certification from</h1>
          <div className={styles.DivImg}>
            <Image
              src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/woolf-learnbay.webp"
              width="634"
              height="95"
              layout="intrinsic"
              loading="lazy"
            />
          </div>
          <p className={styles.tagline}>Learn Here, Lead Anywhere</p>
          <div className={styles.BoxIconDiv}>
            <div className={styles.BoxIcon}>
              <FaUserGraduate className={styles.IconBoxBlue} />
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
              <FaBook className={styles.IconBoxBlue} />
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
      ) : (
        <>
          {" "}
          {fullStackCont ? (
            <>
              <div className={styles.FirstSec}>
                <h1>Earn Your Online Professional Certification from</h1>
                <div className={styles.DivImg}>
                  <Image
                    src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/Microsoft+Logo.png"
                    width="220"
                    height="60"
                    layout="intrinsic"
                    loading="lazy"
                  />
                  <div className={styles.line}></div>
                  <Image
                    src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/ALight/IBM.png"
                    width="150"
                    height="60"
                    layout="intrinsic"
                    loading="lazy"
                  />
                </div>
                <h1>Get Assured Interview Call from Top Recruiters</h1>
                <div className={styles.DivImgD}>
                  <Image
                    src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/ALight/fssd-strip.jpeg"
                    width="1200"
                    height="100"
                    layout="intrinsic"
                    loading="lazy"
                  />
                </div>
                <div className={styles.DivImgM}>
                  <Image
                    src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/ALight/fssd-strip-mobile.jpeg"
                    width="350"
                    height="150"
                    layout="intrinsic"
                    loading="lazy"
                  />
                </div>
              </div>
              <div className={styles.section2Fisrst}>
                <p className={styles.tagline}>Learn Here, Lead Anywhere</p>
                <div className={styles.BoxIconDiv}>
                  <div className={styles.BoxIcon}>
                    <FaUserGraduate className={styles.IconBoxBlue} />
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
                    <FaBook className={styles.IconBoxBlue} />
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
            </>
          ) : (
            <>
              <div className={styles.section2}>
                <h1>Earn Your Online Professional Certification from</h1>
                <div className={styles.DivImg}>
                  <Image
                    src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/adlearnbay/learnbay-logo.png"
                    width="230"
                    height="60"
                    layout="intrinsic"
                    loading="lazy"
                  />
                  <div className={styles.line}></div>
                  <Image
                    src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/ALight/IBM.png"
                    width="150"
                    height="60"
                    layout="intrinsic"
                    loading="lazy"
                  />
                </div>
                <p className={styles.tagline}>Learn Here, Lead Anywhere</p>
                <div className={styles.BoxIconDiv}>
                  <div className={styles.BoxIcon}>
                    <FaUserGraduate className={styles.IconBoxBlue} />
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
                    <FaBook className={styles.IconBoxBlue} />
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
            </>
          )}
        </>
      )}
    </div>
  );
}

export default SecondSection;
