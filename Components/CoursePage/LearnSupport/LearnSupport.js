import React, { useEffect, useState } from "react";
import { MdCall } from "react-icons/md";
import { AiOutlineWhatsApp } from "react-icons/ai";
import styles from "./LearnSupport.module.css";
import Image from "next/image";
function LearnSupport({ headForCity, cityName, organicNum, fullStackCont }) {
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
      {headForCity ? <h4>{cityName}</h4> : <h4>24/7 Learner’s Support</h4>}

      <div className={styles.LearnSupport}>
        {mobile ? (
          <div className={styles.learnInnerR}>
            <Image
              src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/course.learnbay.co/NImages/24x7+v2-min.png"
              width={334}
              height={241}
              alt="LearnsupportImg"
              className={styles.img}
            />
          </div>
        ) : (
          <div className={styles.learnInnerR}>
            <Image
              src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/course.learnbay.co/NImages/24x7+v2-min.png"
              width={585}
              height={405}
              alt="LearnsupportImg"
              className={styles.img}
            />
          </div>
        )}

        <div className={styles.learnInner}>
          <p className={styles.pTop}>Got more questions?</p>
          <h5>Talk to our team directly</h5>
          <p className={styles.pBot}>
            Reach us and a learning consultant will get in touch with you
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
                <button className={styles.btn2}>
                  <MdCall /> +91 97311 35221
                </button>
              </a>
            </div>
          ) : (
            <>
              {organicNum ? (
                <div className={styles.btnWrap}>
                  {/* <a
                    href="https://api.whatsapp.com/send?phone=917349222263&text=Hello,"
                    target="_blank"
                  >
                    <button className={styles.btn1}>
                      <AiOutlineWhatsApp /> Enquire Now
                    </button>
                  </a> */}

                  <a href="tel: +917795687988">
                    <button className={styles.btn2}>
                      <MdCall /> +91 77956 87988
                    </button>
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
                    <button className={styles.btn2}>
                      <MdCall /> +91 8123 327570
                    </button>
                  </a>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default LearnSupport;
