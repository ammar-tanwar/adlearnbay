import React, { useState, useEffect } from "react";
import styles from "./GetHired.module.css";
import Popup from "../Popup/Popup";
import Form from "../Form/Form";
import FormOtp from "../FormOtp/FormOtp";

const GetHired = ({ dsa, radio, formotp }) => {
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
                   {formotp ?(
            <FormOtp popup={true} />
          ):(
          <Form popup={true} setTrigger={setPopups} radio={radio} />
          )}
        </div>
      </Popup>
      <div className={styles.CInner}>
        <h4>Program Highlights</h4>
        {/* <p className="pBot">Work on live projects to get hired at:</p> */}
      </div>
      <div className={dsa ? styles.imageBoxS : styles.imageBox}>
        <div className={styles.left}>
          <div className={styles.top}>
            <p>
              {dsa
                ? "12+ Live Projects"
                : "12+ live projects "}
            </p>
            
          </div>
          <div className={styles.middle}>
            <p>
              {dsa
                ? "Expert hosted hackathon"
                : "1000+ trending practical assignments"}
            </p>
          </div>
          <div className={styles.bottom}>
            <p>
              {dsa
                ? "Get trained from MAANG experts"
                : "Project experience Certificate by IBM"}
            </p>
          </div>
        </div>
        <div className={styles.left}>
          <div className={styles.top}>
            <p>
              {dsa
                ? "1000+ practice assignments"
                : "Exclusive MNC expert hosted hackathons"}
            </p>
          </div>
          <div className={styles.middle}>
            <p>
              {dsa
                ? "Hybrid model across multiple cities"
                : "Hybrid learning option across multiple cities"}
            </p>
          </div>
          <div className={styles.bottom}>
            <p>
              {dsa
                ? "Assured Interview Calls"
                : "Assured interview calls powered by 250+ hiring partners"}
            </p>
          </div>
        </div>
        <div className={styles.right}>
          <div>
            <p>Course Fee</p>
            <h4 className={styles.righth}>
              {dsa ? "₹70,000 + GST" : "₹75,000"}
            </h4>
            <p>With 100% Interview Guarantee</p>
            <button
              onClick={popupShow}
              style={{ margin: "auto", marginBottom: "20px" }}
            >
              Enroll Now
            </button>
          </div>
        </div>
        {dsa ? (
          ""
        ) : (
          <div className={styles.right}>
            <div>
              <p>Course Fee</p>
              <h4 className={styles.righth}>₹1,20,000</h4>
              <p>With 100% Placement Assistance</p>
              <button
                onClick={popupShow}
                style={{ margin: "auto", marginBottom: "20px" }}
              >
                Enroll Now
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default GetHired;
// and 2 capstone project