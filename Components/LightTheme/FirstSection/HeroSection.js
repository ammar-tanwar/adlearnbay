import styles from "./HeroSection.module.css";
import React, { useState } from "react";
import { FaArrowRight, FaHandshake } from "react-icons/fa";
import { RiUserSearchLine } from "react-icons/ri";
import Image from "next/image";
import Popup from "../../Popup/Popup";
import Form from "../../Form/Form";

function HeroSection({ h1, hSpan, para, sideImg, deskTopPara }) {
  const [popups, setPopups] = useState(false);
  const [partyTime, setPartyTime] = useState(false);
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const popupShow = () => {
    setPopups(true);
  };
  const target = new Date("1/12/2023 12:04:59");

  const interval = setInterval(() => {
    const now = new Date();
    const difference = target.getTime() - now.getTime();

    const d = Math.floor(difference / (1000 * 60 * 60 * 24));
    setDays(d);

    const h = Math.floor(
      (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    setHours(h);

    const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    setMinutes(m);

    const s = Math.floor((difference % (1000 * 60)) / 1000);
    setSeconds(s);

    if (d <= 0 && h <= 0 && m <= 0 && s <= 0) {
      setPartyTime(true);
    }
  }, 1000);

  return (
    <section>
      <Popup trigger={popups} setTrigger={setPopups} className="popupModal">
        <div className="leftPopup">
          <div className="whiteP" />
        </div>
        <div className="RightPopup">
          <h5>Apply For Counselling</h5>
          <Form popup={true} setTrigger={setPopups} />
        </div>
      </Popup>
      <div className={styles.section1}>
        <div className={styles.sectionDiv}>
          <p className={styles.pTop}>{deskTopPara}</p>
          <h1>
            {h1}
            <span style={{ color: "#0072BC" }}> {hSpan}</span>{" "}
          </h1>
          <p>{para}</p>
          <button className={styles.button} onClick={popupShow}>
            Apply for Counselling
            <FaArrowRight className={styles.icon} />
          </button>
          <div className={styles.twoBox}>
            <div className={styles.timerWrapper}>
              <p className={styles.pTimer}>Application Closed in:</p>
              <div className={styles.timerInner}>
                <div className={styles.timerSegment}>
                  <span className={styles.time}>{days}</span>
                  <span className={styles.label}>Days</span>
                </div>
                <span className={styles.divider}>:</span>
                <div className={styles.timerSegment}>
                  <span className={styles.time}>{hours}</span>
                  <span className={styles.label}>Hours</span>
                </div>
                <span className={styles.divider}>:</span>
                <div className={styles.timerSegment}>
                  <span className={styles.time}>{minutes}</span>
                  <span className={styles.label}>Minutes</span>
                </div>
                <span className={styles.divider}>:</span>
                <div className={styles.timerSegment}>
                  <span className={styles.time}>{seconds}</span>
                  <span className={styles.label}>Seconds</span>
                </div>
              </div>
            </div>
            {/* <div className={styles.loaderWrapper}>
              <div className={styles.seatLoader}>
                <p className={styles.loaderPercentage}>91%</p>
              </div>
              <p className={styles.label}>Seats filled</p>
            </div> */}
          </div>
        </div>
        <div className={styles.sectionDiv}>
          <Image src={sideImg} width="600" height="400" layout="intrinsic" />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;

{
  /* <div className={styles.twoBoxDivWhite}>
              <RiUserSearchLine className={styles.IconBoxBlue} />
              <p className={styles.whitep}>
                <span>10k+</span>
                <br />
                Careers Reshaped
              </p>
            </div>
            <div className={styles.line}></div>
            <div className={styles.twoBoxDivWhite}>
              <FaHandshake className={styles.IconBoxBlue} />
              <p className={styles.whitep}>
                <span>250+</span>
                <br />
                Hiring Partners
              </p>
            </div> */
}
