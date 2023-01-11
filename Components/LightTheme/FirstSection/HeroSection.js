import styles from "./HeroSection.module.css";
import React, { useState } from "react";
import { FaArrowRight, } from "react-icons/fa";
import Image from "next/image";
import Popup from "../../Popup/Popup";
import Form from "../../Form/Form";
import {
  CircularProgressbar,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function HeroSection({ h1, hSpan, para, sideImg, deskTopPara }) {
  const [popups, setPopups] = useState(false);
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [circleValue, setCircleValue] = useState(75)

  const popupShow = () => {
    setPopups(true);
  };

  function getTimeRemaining(endtime) {
    // console.log("getTimeRemaining",endtime)
    var t = Date.parse(endtime) - Date.parse(new Date());
    var seconds = Math.floor((t / 1000) % 60);
    var minutes = Math.floor((t / 1000 / 60) % 60);
    var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    var days = Math.floor(t / (1000 * 60 * 60 * 24));

    return {
      'total': t,
      'days': days,
      'hours': hours,
      'minutes': minutes,
      'seconds': seconds
    };
  }

  function getNextSaturday() {
    var now = new Date();
    var nextSaturday = new Date();
    nextSaturday.setDate(now.getDate() + (6 - 1 - now.getDay() + 7) % 7 + 1);
    nextSaturday.setHours(11, 0, 0, 0);
    return nextSaturday;
  }

  function convertToEST(date) {
    const estOffset = -5.0
    const utc = date.getTime() + (date.getTimezoneOffset() * 60000);
    return new Date(utc + (3600000 * estOffset));
  }

  var deadline = getNextSaturday();

  const interval = setInterval(() => {
    var t = getTimeRemaining(deadline);
    setDays(t.days)
    setHours(t.hours)
    setMinutes(t.minutes)
    setSeconds(t.seconds)

    if (t.total <= 0) {
      clearInterval(interval);
    }
    if (t.days == 7) {
      setCircleValue(73)
    } else if (t.days == 6) {
      setCircleValue(75)
    } else if (t.days == 5) {
      setCircleValue(79)
    } else if (t.days == 4) {
      setCircleValue(81)
    } else if (t.days == 3) {
      setCircleValue(85)
    } else if (t.days == 2) {
      setCircleValue(89)
    } else if (t.days == 1) {
      setCircleValue(93)
    } else if (t.days == 0) {
      setCircleValue(97)
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
            <div>
              <Example label="Default">
                <CircularProgressbar value={circleValue} text={`${circleValue}%`} />
              </Example>
            </div>

          </div>
        </div>
        <div className={styles.sectionDiv}>
          <Image src={sideImg} width="600" height="400" layout="intrinsic" />
        </div>
      </div>
    </section>
  );
}

function Example(props) {
  return (
    <div style={{ marginBottom: 80 }}>
      <div style={{ marginTop: 30, display: "flex" }}>
        <div style={{ width: "30%", paddingRight: 30 }}>{props.children}</div>
      </div>
    </div>
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



// <div className={styles.loaderWrapper}>
//               <div className={styles.seatLoader}>
//                 <p className={styles.loaderPercentage}>91%</p>
//               </div>
//               <p className={styles.label}>Seats filled</p>
//             </div>
