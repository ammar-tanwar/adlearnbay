import React, { useEffect, useState } from "react";
import Form from "../Form/Form";
import Popup from "../Popup/Popup";
import styles from "./GetHired.module.css";

const GetHired = ({ radio }) => {
  const [mobile, setMobile] = useState(false);
  useEffect(() => {
    let width = window.innerWidth;
    if (width < 481) {
      setMobile(true);
    }
    if (width > 481) {
      setMobile(false);
    }
  });
  const [popups, setPopups] = useState(false);
  const popupShow = () => {
    setPopups(true);
  };
  const showMenu = () => {
    setShow(!show);
  };

  useEffect(() => {
    let width = window.innerWidth;
    if (width < 481) {
      setMobile(true);
    }
  });

  return (
    <section className={styles.GetHired}>
      <Popup trigger={popups} setTrigger={setPopups} className="popupModal">
        <div className="leftPopup">
          <div className="whiteP" />
        </div>
        <div className="RightPopup">
          <h5>Apply For Counselling</h5>
          {/* <p>Fill the below Details to get started</p> */}

          <Form popup={true} setTrigger={setPopups} radio={radio} />
        </div>
      </Popup>
      <div className={styles.CInner}>
        <h4>Program Highlights</h4>
      </div>
      <div className={styles.imageBox}>
        <div className={styles.left}>
          <div className={styles.top}>
            <p>250+ hiring partners & guarantee interviews</p>
          </div>
          <div className={styles.middle}>
            <p>Hybrid learning option across multiple cities</p>
          </div>
          <div className={styles.bottom}>
            <p>12+ live projects</p>
          </div>
        </div>
        <div className={styles.left}>
          <div className={styles.top}>
            <p>100% live and interactive classes</p>
          </div>
          <div className={styles.middle}>
            <p>1000+ trending practical assignments</p>
          </div>
          <div className={styles.bottom}>
            <p>Choose from 5 elite domain electives</p>
          </div>
        </div>
        <div className={styles.right}>
          <div>
            <p>Course Fee</p>
            <h4 className={styles.righth}>₹1,15,000</h4>
            <p>3 Years Subscription</p>
            <button
              onClick={popupShow}
              style={{ margin: "auto", marginBottom: "20px" }}
            >
              Enroll Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetHired;
// and 2 fresh capstone project
