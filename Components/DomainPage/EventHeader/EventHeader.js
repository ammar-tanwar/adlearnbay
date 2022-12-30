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
              height="570px"
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
          <p className={styles.p}>Advance your Career in <span className={styles.spanP}>Banking Domain</span> as a</p>
            <p className={styles.h1}>Data Scientist</p>
            {/* <p className={styles.p}>Fundamentals</p> */}
          </div>
          <div className={styles.imgBox}>
            <div className={styles.imgText}>
              <Image
                src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/domainpage/Group+32.png"
                layout="intrinsic"
                objectFit="cover"
                width="60px"
                height="60px"
                loading="lazy"
                alt="backImg"
              />
              <div className={styles.Text}>
                <p className={styles.firstText}>8th Jan</p>
                <p className={styles.secondText}>Sunday</p>
              </div>
            </div>
            <div className={styles.imgText}>
              <Image
                src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/domainpage/Group+33.png"
                layout="intrinsic"
                objectFit="cover"
                width="60px"
                height="60px"
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
          {/* <div className={styles.none}><Image
                src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/course.learnbay.co/DeskUtkarh.png"
                layout="intrinsic"
                objectFit="cover"
                width="441px"
                height="476px"
                loading="lazy"
                alt="backImg"
              /></div> */}
        </div>
      </section>
    </div>
  );
};
