import React, { useState } from "react";
import { FaDownload, FaStar } from "react-icons/fa";
import Form from "../../Form/Form";
import FormOtp from "../../FormOtp/FormOtp";
import Popup from "../../Popup/Popup";
import styles from "./ThirdSection.module.css";

function ThirdSection({
  DownloadSyllabus,
  fullStackCont,
  formotp,
  s2dataScience,
  fullstackADS,
  marketing,
  grad,
  jobDescription,
  workExperience,
}) {
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
            <FormOtp
              popup={true}
              downloadBrochure
              upSkillingHide={true}
              s2dataScience={s2dataScience}
              fullstackADS={fullstackADS}
              marketing={marketing}
              grad={grad}
            />
          ) : (
            <Form
              setTrigger={setPopups}
              downloadBrochure
              upSkillingHide={true}
            />
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
                Software Development
                <br />
                Course
              </p>
              <p>
                <FaStar className={styles.IconBoxBlue} />
                Software Development
                <br />
                Course in Blockchain
              </p>
              <p>
                <FaStar className={styles.IconBoxBlue} />
                Software Development course
                <br />
                in Cloud Computing & DevOps
              </p>
              <p>
                <FaStar className={styles.IconBoxBlue} />
                DSA and
                <br />
                System Design Course
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
