import React, { useEffect, useState } from "react";
import { FaCheck, FaPlay } from "react-icons/fa";
import styles from "./EventHeader.module.css";
import Image from "next/image";

export const EventHeader = ({ deskimg, mobimg }) => {
  // console.log(deskimg)
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    let width = window.innerWidth;

    if (width < 481) {
      setMobile(true);
    }
    if (width > 481) {
      setMobile(false);
    }
  }, [mobile]);
  return (
    <div>
      <section className={styles.wrapper}>
        <div>
          {mobile ? (
            <Image
              src={mobimg}
              alt="Learnbay"
              quality={100}
              width="500px"
              height="470px"
            />
          ) : (
            <Image
              src={deskimg}
              alt="Learnbay"
              quality={100}
              width="1700px"
              height="550px"
            />
          )}
        </div>
        <div className={styles.relative}>
          <div className={styles.relativeDiv}>
          <div className={styles.DivStyle}>
          <p className={styles.p}>Predicting Possible <span style={{color:"#edbb52"}}>Loan Default</span> Using</p>
            <h1 className={styles.h1}>Machine Learning</h1>
            {/* <p className={styles.p}>Fundamentals</p> */}
          </div>
          <div className={styles.imgBox}>
            <div className={styles.imgText}>
              <Image
                src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/domainpage/Group+32.png"
                layout="intrinsic"
                objectFit="cover"
                width="70px"
                height="70px"
                loading="lazy"
                alt="backImg"
              />
              <div className={styles.Text}>
                <p className={styles.firstText}>8th</p>
                <p className={styles.secondText}>January</p>
              </div>
            </div>
            <div className={styles.imgText}>
              <Image
                src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/domainpage/Group+33.png"
                layout="intrinsic"
                objectFit="cover"
                width="70px"
                height="70px"
                loading="lazy"
                alt="backImg"
              />
              <div className={styles.Text}>
                <p className={styles.firstText}>12:30 - 3:30 PM</p>
                <p className={styles.secondText}>3 Hr Session</p>
              </div>
            </div>
          </div>
          <div className={styles.topBox}>
            <span>Free</span>
            <FaPlay className={styles.icon} />
            <span>Webinar</span>
          </div>
          {/* <div>
            <p className={styles.mentor}>
              Akshay Gagrani{" "}
              <span className={styles.mentorSpan}>Software Engineer</span>
            </p>
          </div> */}
          </div>
          <div className={styles.none}><Image
                src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/course.learnbay.co/Kumar+Sundram.png"
                layout="intrinsic"
                objectFit="cover"
                width="281px"
                height="408px"
                loading="lazy"
                alt="backImg"
              /></div>
        </div>
      </section>
    </div>
  );
};
