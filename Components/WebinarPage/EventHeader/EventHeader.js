import React, { useEffect, useState } from "react";
import { FaCalendarAlt, FaPlay, FaClock } from "react-icons/fa";
import styles from "./EventHeader.module.css";
import Image from "next/image";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export const EventHeader = ({ deskimg, mobimg }) => {
  const [mobile, setMobile] = useState(false);
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [circleValue, setCircleValue] = useState(75);

  useEffect(() => {
    let width = window.innerWidth;

    if (width < 481) {
      setMobile(true);
    }
    if (width > 481) {
      setMobile(false);
    }
  }, [mobile]);

  function getTimeRemaining(endtime) {
    // console.log("getTimeRemaining",endtime)
    var t = Date.parse(endtime) - Date.parse(new Date());
    var seconds = Math.floor((t / 1000) % 60);
    var minutes = Math.floor((t / 1000 / 60) % 60);
    var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    var days = Math.floor(t / (1000 * 60 * 60 * 24));

    return {
      total: t,
      days: days,
      hours: hours,
      minutes: minutes,
      seconds: seconds,
    };
  }

  function getNextSaturday() {
    var now = new Date();
    var nextSaturday = new Date();
    nextSaturday.setDate(now.getDate() + ((6 - 2 - now.getDay() + 6) % 7) + 1);
    nextSaturday.setHours(19, 30, 0, 0);
    // console.log("Sat",nextSaturday)
    return nextSaturday;
  }

  function convertToEST(date) {
    const estOffset = -5.0;
    const utc = date.getTime() + date.getTimezoneOffset() * 60000;
    return new Date(utc + 3600000 * estOffset);
  }

  var deadline = getNextSaturday();

  const interval = setInterval(() => {
    var t = getTimeRemaining(deadline);
    setDays(t.days);
    setHours(t.hours);
    setMinutes(t.minutes);
    setSeconds(t.seconds);

    if (t.total <= 0) {
      clearInterval(interval);
    }
    if (t.days == 6) {
      setCircleValue(75);
    } else if (t.days == 5) {
      setCircleValue(80);
    } else if (t.days == 4) {
      setCircleValue(83);
    } else if (t.days == 3) {
      setCircleValue(86);
    } else if (t.days == 2) {
      setCircleValue(89);
    } else if (t.days == 1) {
      setCircleValue(92);
    } else if (t.days == 0) {
      setCircleValue(95);
    }
  }, 1000);

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
            <div className={styles.topBox} id={styles.topBoxD}>
              <span>Free</span>
              <FaPlay className={styles.icon} />
              <span>Webinar</span>
            </div>
            <div className={styles.DivStyle}>
              <p className={styles.h1}>Customer Analytics</p>
              <p className={styles.p}>
                in{" "}
                <span className={styles.spanP}>
                  BFSI sector : Understand Your Customers{" "}
                </span>{" "}
              </p>
            </div>
            <div className={styles.imgBox}>
              <div className={styles.imgText}>
                <FaCalendarAlt className={styles.iconOrange} />
                <div className={styles.Text}>
                  <p className={styles.firstText}>26th Jan</p>
                  <p className={styles.secondText}>Thursday</p>
                </div>
              </div>
              <div className={styles.imgText}>
                <FaClock className={styles.iconOrange} />
                <div className={styles.Text}>
                  <p className={styles.firstText}>7 - 10 PM</p>
                  <p className={styles.secondText}>3 Hr Session</p>
                </div>
              </div>
            </div>
            <div className={styles.topBox} id={styles.topBoxM}>
              <span>Free</span>
              <FaPlay className={styles.icon} />
              <span>Webinar</span>
            </div>
            <div className={styles.twoBox}>
              <div className={styles.timerWrapper}>
                <p className={styles.pTimer}>Registration Closes in:</p>
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
                  <CircularProgressbar
                    value={circleValue}
                    text={`${circleValue}%`}
                    styles={buildStyles({
                      textColor: "black",
                      pathColor: "#0072BC",
                      trailColor: "white",
                      textSize: "26px",
                    })}
                  />
                </Example>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

function Example(props) {
  return (
    <div>
      <div>
        <div className={styles.circleWidth}>{props.children}</div>
      </div>
    </div>
  );
}
