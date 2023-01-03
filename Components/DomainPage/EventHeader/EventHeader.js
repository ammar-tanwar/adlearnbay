import React, { useEffect, useState } from "react";
import { FaCalendarAlt, FaPlay, FaClock } from "react-icons/fa";
import styles from "./EventHeader.module.css";
import Image from "next/image";

export const EventHeader = ({ deskimg, mobimg }) => {

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
          </div>
          <div className={styles.imgBox}>
            <div className={styles.imgText}>
              <FaCalendarAlt className={styles.iconOrange} />
              <div className={styles.Text}>
                <p className={styles.firstText}>8th Jan</p>
                <p className={styles.secondText}>Sunday</p>
              </div>
            </div>
            <div className={styles.imgText}>
              <FaClock className={styles.iconOrange} />
              <div className={styles.Text}>
                <p className={styles.firstText}>5 - 8 PM</p>
                <p className={styles.secondText}>3 Hr Session</p>
              </div>
            </div>
          </div>
          <div className={styles.topBox}>
            <span>Free</span>
            <FaPlay className={styles.icon} />
            <span>Webinar</span>
          </div>
          </div>
        </div>
      </section>
    </div>
  );
};
