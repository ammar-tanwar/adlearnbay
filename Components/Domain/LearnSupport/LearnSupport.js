import React, { useEffect, useState } from "react";
import { MdCall } from "react-icons/md";
import { AiOutlineWhatsApp } from "react-icons/ai";
import styles from "./LearnSupport.module.css";
import Image from "next/image";
function LearnSupport({ headForCity, cityName, organicNum, organicNumber }) {
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
    <>

    <div className={styles.HeadLearn}>
      <h4>24/7 Learner’s Support</h4>

      <div className={styles.LearnSupport}>
      <div className={styles.learnInner}>
          <p className={styles.pTop}>Got more questions?</p>
          <h5>Talk to our team directly</h5>
          <p className={styles.pBot}>
            Reach us and a learning consultant will get in touch with you
            shortly
          </p>
          <div className={styles.btnWrap}>
            <a
              href="https://api.whatsapp.com/send?phone=919606950936&text=Hello,"
              target="_blank"
            >
              <button className={styles.btn1}>
                <AiOutlineWhatsApp /> Enquire Now
              </button>
            </a>

            <a href="tel: +919606950936">
              <button className={styles.btn2}>
                <MdCall /> +91 96069 50936
              </button>
            </a>
          </div>
        </div>
        <div className={styles.learnInnerR}>
          <Image
            src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/domainpage/247.png"
            width={544}
            height={435}
            alt="LearnsupportImg"
            layout="intrinsic"
          />
        </div>
      </div>
      </div>
    </>
  );
}

export default LearnSupport;