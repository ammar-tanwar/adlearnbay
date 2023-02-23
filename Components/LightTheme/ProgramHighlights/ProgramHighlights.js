import React, { useState, useEffect } from "react";
import Popup from "../../Popup/Popup";
import FormOtp from "../../FormOtp/FormOtp";
import Form from "../../Form/Form";
import styles from "./ProgramHighlights.module.css";
import { FaArrowRight } from "react-icons/fa";

function ProgramHighlights({fullStackCont, Ques, ans, Bot1, Bot2, Bot3, formCommon}) {
  const [popups, setPopups] = useState(false);

  const popupShow = () => {
    setPopups(true);
  };
  return (
    <section className={styles.section}>
      <Popup trigger={popups} setTrigger={setPopups} className="popupModal">
        <div className="leftPopup">
          <div className="whiteP" />
        </div>
        <div className="RightPopup">
          <h5>Download Brochure</h5>
          {formCommon ? (
          <Form popup={true} downloadBrochure setTrigger={setPopups} />
      ) : (
        <FormOtp popup={true} downloadBrochure setTrigger={setPopups} />
)}
        </div>
      </Popup>
      {fullStackCont ? (
        <>
          <div className={styles.left}>
            <h1>{Ques}</h1>
            <p>{ans}</p>
            <button onClick={popupShow} className={styles.button}>
              Download Brochure
              <FaArrowRight className={styles.icon} />
            </button>
          </div>
          <div className={styles.right}>
            <div className={styles.divRight}>
              <FaArrowRight className={styles.iconRight} />
              <div>
                <p className={styles.pBot}>{Bot1}</p>
              </div>
            </div>
            <div className={styles.divRight}>
              <FaArrowRight className={styles.iconRight} />
              <div>
                <p className={styles.pBot}>{Bot2}</p>
              </div>
            </div>
            <div className={styles.divRight}>
              <FaArrowRight className={styles.iconRight} />
              <div>
                <p className={styles.pBot}>{Bot3}</p>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className={styles.left}>
            <h1>Program Highlights</h1>
            <p>
              Successfully transition careers through our courses & real-time
              capstone projects. All while making your previous work experience
              count!
            </p>
            <button onClick={popupShow} className={styles.button}>
              Download Brochure
              <FaArrowRight className={styles.icon} />
            </button>
          </div>
          <div className={styles.right}>
            <div className={styles.divRight}>
              <FaArrowRight className={styles.iconRight} />
              <div>
                <p className={styles.HeadP}>Live Interactive Sessions</p>
                <p className={styles.pBot}>
                  Led by Industry experts with decades of exp.
                </p>
              </div>
            </div>
            <div className={styles.divRight}>
              <FaArrowRight className={styles.iconRight} />
              <div>
                <p className={styles.HeadP}>Live Interactive Sessions</p>
                <p className={styles.pBot}>
                  Led by Industry experts with decades of exp.
                </p>
              </div>
            </div>
            <div className={styles.divRight}>
              <FaArrowRight className={styles.iconRight} />
              <div>
                <p className={styles.HeadP}>Live Interactive Sessions</p>
                <p className={styles.pBot}>
                  Led by Industry experts with decades of exp.
                </p>
              </div>
            </div>
          </div>
        </>
      )}
    </section>
  );
}

export default ProgramHighlights;
