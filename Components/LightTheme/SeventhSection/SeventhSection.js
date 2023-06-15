import React from "react";
import styles from "./SeventhSection.module.css";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { MdCall } from "react-icons/md";
import Image from "next/image";

function SeventhSection({ fullStackCont, WBbtn }) {
  return (
    <div className={styles.Section2}>
      <div>
        <div className={styles.LearnSupport}>
          <div className={styles.learnInner}>
            <p className={styles.pTop}>Got more questions?</p>
            <h5>Talk to our team directly</h5>
            <p className={styles.pBot}>
              Reach us and a learning consultant will get in touch with you
              shortly
            </p>
            {fullStackCont ? (
              <div className={styles.btnWrap}>
                {WBbtn ? (
                  ""
                ) : (
                  <>
                    {" "}
                    {/* <a
                      href="https://api.whatsapp.com/send?phone=919731135221&text=Hello,"
                      target="_blank"
                    >
                      <button className={styles.btn1}>
                        <AiOutlineWhatsApp /> Enquire Now
                      </button>
                    </a> */}
                  </>
                )}
                <a href="tel: +919731135221">
                  <button className={styles.btn2}>
                    <MdCall /> +91 97311 35221
                  </button>
                </a>
              </div>
            ) : (
              <div className={styles.btnWrap}>
                {WBbtn ? (
                  <>
                    {/* <a
                    href="https://api.whatsapp.com/send?phone=919986049187&text=Hello,"
                    target="_blank"
                  >
                    <button className={styles.btn1}>
                      <AiOutlineWhatsApp /> Enquire Now
                    </button>
                  </a> */}
                  </>
                ) : (
                  ""
                )}

                <a href="tel: +918123327570">
                  <button className={styles.btn2}>
                    <MdCall /> +91 8123 327570
                  </button>
                </a>
              </div>
            )}
          </div>
          <div className={styles.learnInnerR}>
            <Image
              src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/ALight/rightSideGirl.png"
              width={432}
              height={395}
              alt="LearnsupportImg"
              layout="intrinsic"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SeventhSection;
