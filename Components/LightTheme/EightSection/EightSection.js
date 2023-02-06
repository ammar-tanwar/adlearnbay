import React, { useState, useEffect } from "react";
import styles from "./EightSection.module.css";
import Popup from "../../Popup/Popup";
import Form from "../../Form/Form";
import { FaDownload } from "react-icons/fa";

function EightSection({DownloadSyllabus}) {
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
          <Form popup={true} downloadBrochure setTrigger={setPopups} />
        </div>
      </Popup>
      <div>
        <p>Learn industry-relevant skills and build a rewarding career</p>
      </div>
      <div>
      {DownloadSyllabus ? (
            <button onClick={popupShow}>
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
    </section>
  );
}

export default EightSection;
