import React, { useEffect, useState } from "react";
import { FaDownload } from "react-icons/fa";
import Form from "../../Form/FormDev";
import FormOtp from "../../FormOtp/FormOtpDev";
import Button from "../../NewCoursePage/Button/Button";
import Popup from "../../Popup/Popup";
import styles from "./EightSection.module.css";

function EightSection({
  DownloadSyllabus,
  formotp,
  s2dataScience,
  fullstackADS,
  marketing,
  grad,
  jobDescription,
  workExperience,

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
              upSkillingHide={true}
              setTrigger={setPopups}
              s2dataScience={s2dataScience}
              fullstackADS={fullstackADS}
              marketing={marketing}
              grad={grad}
            />
          ) : (
            <Form
              popup={true}
              downloadBrochure
              upSkillingHide={true}
              setTrigger={setPopups}
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
