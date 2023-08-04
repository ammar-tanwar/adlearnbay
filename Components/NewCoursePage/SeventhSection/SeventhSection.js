import React, { useState, useEffect } from "react";
import styles from "./SeventhSection.module.css";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { MdCall } from "react-icons/md";
import Image from "next/image";
import Button from "../Button/Button";

function SeventhSection({ fullStackCont }) {
  const [mobile, setMobile] = useState(false);
  useEffect(() => {
    let width = window.innerWidth;
    if (width < 481) {
      setMobile(true);
    }
  }, []);
  return (
    <div className={styles.Section2}>
      <p className={styles.infop}>24X7 Learner’s Support</p>

      <div className={styles.LearnSupport}>
        <div className="bgWrap">
          {mobile ? (
            <Image
              src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/learner's-support.png"
              layout='fill'
              className={styles.deskImage}
              alt="Learners support"
            />
          ) : (
            <Image
              src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/learners-support-bg.png"
              layout='fill'
              alt="Learners support"
            />
          )}
        </div>
        <div className={styles.learnInner}>
          <p className={styles.pTop}>Have any questions in mind?</p>
          <h5>Talk to our team directly</h5>
          <p className={styles.pBot}>
            Reach out to us and your career guide will get in touch with you
            shortly
          </p>
          {fullStackCont ? (
              <div className={styles.btnWrap}>
                {/* <a
                  href="https://api.whatsapp.com/send?phone=919731135221&text=Hello,"
                  target="_blank"
                >
                  <button className={styles.btn1}>
                    <AiOutlineWhatsApp /> Enquire Now
                  </button>
                </a> */}
                <a href="tel: +919731135221">
                <Button
                  text="+91 97311 35221"
                  passIcon={<MdCall />}
                  invert
                />
              </a>
              </div>
            ) : (
              <div className={styles.btnWrap}>
                {/* <a
                  href="https://api.whatsapp.com/send?phone=918123327570&text=Hello,"
                  target="_blank"
                >
                  <button className={styles.btn1}>
                    <AiOutlineWhatsApp /> Enquire Now
                  </button>
                </a> */}
                <a href="tel: +918123327570">
                <Button
                  text="+91 8123 327570"
                  passIcon={<MdCall />}
                  invert
                />
              </a>
              </div>
            )}
        </div>
        <div className={styles.rightPart}>
          <div className="imgWrapper">
            <Image
              src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/learners-support-guy.png"
              width={681}
              height={515}
              alt="data science course"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SeventhSection;
