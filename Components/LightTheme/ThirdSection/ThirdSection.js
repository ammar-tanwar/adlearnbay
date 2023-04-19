import React, { useState } from "react";
import styles from "./ThirdSection.module.css";
import { FaDownload, FaStar } from "react-icons/fa";
import Popup from "../../Popup/Popup";
import Form from "../../Form/Form";
import FormOtp from "../../FormOtp/FormOtp";

function ThirdSection({ DownloadSyllabus, fullStackCont, formotp, s2dataScience }) {
  const [popups, setPopups] = useState(false);

  const popupShow = () => {
    setPopups(true);
  };
  return (
    <div className={styles.section3}>
      <Popup trigger={popups} setTrigger={setPopups} className="popupModal">
        <div className="leftPopup">
          <div className="whiteP" />
        </div>
        <div className="RightPopup">
          {DownloadSyllabus ? (
            <h5>Download Syllabus</h5>
          ) : (
            <h5>Download Brochure</h5>
          )}
          {formotp ? (
            <FormOtp popup={true} downloadBrochure s2dataScience={s2dataScience}/>
          ) : (
            <Form setTrigger={setPopups} downloadBrochure />
          )}
        </div>
      </Popup>
      <div className={styles.leftSide}>
        <h1>Popular courses to choose from:</h1>
      </div>
      <div className={styles.rightSide}>
        {fullStackCont ? (
          <>
            <div className={styles.rightSideP}>
              <p>
                <FaStar className={styles.IconBoxOrange} />
                Full Stack Software
                <br />
                Development Course
              </p>
              <p>
                <FaStar className={styles.IconBoxBlue} />
                Data Structure
                <br />
                and Algorithms Course
              </p>
              <p>
                <FaStar className={styles.IconBoxBlue} />
                Full Stack Web
                <br />
                Development Course
              </p>
              <p>
                <FaStar className={styles.IconBoxBlue} />
                System Design
                <br />
                Course
              </p>
            </div>
          </>
        ) : (
          <>
            <div className={styles.rightSideP}>
              <p>
                <FaStar className={styles.IconBoxOrange} />
                Advance Data Science & AI Certification Program
              </p>
              <p>
                <FaStar className={styles.IconBoxBlue} />
                Advance AI & ML Certification Program
              </p>
              <p>
                <FaStar className={styles.IconBoxBlue} />
                Data Science & AI Certification Program For Managers
              </p>
              <p>
                <FaStar className={styles.IconBoxOrange} />
                Data Science & AI Master Program
              </p>
              <p>
                <FaStar className={styles.IconBoxOrange} />
                HR Analytics Program
              </p>
              <p>
                <FaStar className={styles.IconBoxOrange} />
                Marketing Analytics Program
              </p>
            </div>
          </>
        )}
        {DownloadSyllabus ? (
          <button onClick={popupShow} className="outLineBtn">
            Download Syllabus
            <FaDownload className={styles.icon} />
          </button>
        ) : (
          <button onClick={popupShow}>
            Download Brochure
            <FaDownload className={styles.icon} />
          </button>
        )}
      </div>
    </div>
  );
}

export default ThirdSection;
