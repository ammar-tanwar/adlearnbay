import React, { useState, useEffect } from "react";
import Popup from "../../Popup/Popup";
import Form from "../../Form/Form";
import styles from "./ProgramHighlights.module.css";
import { FaDownload } from "react-icons/fa";

function ProgramHighlights({fullStackCont}) {
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
          <Form popup={true} downloadBrochure setTrigger={setPopups} />
        </div>
      </Popup>
      {fullStackCont ? (
        <>
          <div className={styles.left}>
            <h1>How will our System Design Course help you as an SDE?</h1>
            <p>
            Our course will help developers in transitioning to a product-based company and upgrading their system design skillset.
            </p>
            <button onClick={popupShow} className={styles.button}>
              Download Brochure
              <FaDownload className={styles.icon} />
            </button>
          </div>
          <div className={styles.right}>
            <div className={styles.divRight}>
              <FaDownload className={styles.iconRight} />
              <div>
                <p className={styles.HeadP}>We focus on your strengths</p>
                <p className={styles.pBot}>
                Learn to build technically-based systems
                </p>
              </div>
            </div>
            <div className={styles.divRight}>
              <FaDownload className={styles.iconRight} />
              <div>
                <p className={styles.HeadP}>Overcome difficulties with system design</p>
                <p className={styles.pBot}>
                This will help you build scalable systems
                </p>
              </div>
            </div>
            <div className={styles.divRight}>
              <FaDownload className={styles.iconRight} />
              <div>
                <p className={styles.HeadP}>Transition to top MNCs</p>
                <p className={styles.pBot}>
                Get placed at the product companies with 100% interview help
                </p>
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
              <FaDownload className={styles.icon} />
            </button>
          </div>
          <div className={styles.right}>
            <div className={styles.divRight}>
              <FaDownload className={styles.iconRight} />
              <div>
                <p className={styles.HeadP}>Live Interactive Sessions</p>
                <p className={styles.pBot}>
                  Led by Industry experts with decades of exp.
                </p>
              </div>
            </div>
            <div className={styles.divRight}>
              <FaDownload className={styles.iconRight} />
              <div>
                <p className={styles.HeadP}>Live Interactive Sessions</p>
                <p className={styles.pBot}>
                  Led by Industry experts with decades of exp.
                </p>
              </div>
            </div>
            <div className={styles.divRight}>
              <FaDownload className={styles.iconRight} />
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
