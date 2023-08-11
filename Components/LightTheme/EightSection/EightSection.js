import React, { useState, useEffect } from "react";
import styles from "./EightSection.module.css";
import Popup from "../../Popup/Popup";
import Form from "../../Form/Form";
import FormOtp from "../../FormOtp/FormOtp";
import { FaDownload } from "react-icons/fa";
import Button from "../../NewCoursePage/Button/Button";

function EightSection({
  DownloadSyllabus,
  formotp,
  s2dataScience,
  fullstackADS,
  marketing,
  grad,
  jobDescription,
  workExperience,
  jobPlacee,
  upSkilling,
}) {
  const [popups, setPopups] = useState(false);

  const popupShow = () => {
    setPopups(true);
  };

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onScroll = () => {
    let heightToHideFrom = 600;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    if (winScroll > heightToHideFrom) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  return (
    <section className={isVisible ? styles.EightSection : styles.hide}>
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
              setTrigger={setPopups}
              s2dataScience={s2dataScience}
              fullstackADS={fullstackADS}
              marketing={marketing}
              grad={grad}
              jobDescription={jobDescription}
              workExperience={workExperience}
            />
          ) : (
            <Form
              popup={true}
              downloadBrochure
              setTrigger={setPopups}
              jobPlacee={jobPlacee}
              workExperience={workExperience}
            />
          )}
        </div>
      </Popup>
      <div>
        <p>Learn industry-relevant skills and build a rewarding career</p>
      </div>
      <div onClick={popupShow} className={styles.btnInner}>
        {DownloadSyllabus ? (
          <Button
            className={styles.buttonDiv}
            text="Download Syllabus"
            passIcon={<FaDownload className={styles.icon} />}
            invert
          />
        ) : (
          <Button
            className={styles.buttonDiv}
            text="Download Brochure"
            passIcon={<FaDownload className={styles.icon} />}
            invert
          />
        )}
      </div>
    </section>
  );
}

export default EightSection;
