import styles from "./HeroSection.module.css";
import React, { useState } from "react";
import { FaArrowRight, FaHandshake } from "react-icons/fa";
import { RiUserSearchLine } from "react-icons/ri";
import Image from "next/image";
import Popup from "../../Popup/Popup";
import Form from "../../Form/Form";

function HeroSection() {
  const [popups, setPopups] = useState(false);

  const popupShow = () => {
    setPopups(true);
  };
  return (
    <section>
      <Popup trigger={popups} setTrigger={setPopups} className="popupModal">
        <div className="leftPopup">
          <div className="whiteP" />
        </div>
        <div className="RightPopup">
          <h5>Apply For Counselling</h5>
          <Form popup={true} setTrigger={setPopups} />
        </div>
      </Popup>
      <div className={styles.section1}>
        <div className={styles.sectionDiv}>
          <h1>
            Data Science
            <span style={{ color: "#0072BC" }}>
              {" "}
              Domain Specialization
            </span>{" "}
            Course for Professionals
          </h1>
          <p>
            With new capstone projects, learn how to apply your previous domain
            expertise to make a successful transition.
          </p>
          <button className={styles.button} onClick={popupShow}>
            Apply for Counselling
            <FaArrowRight className={styles.icon} />
          </button>
          <div className={styles.twoBox}>
            <div className={styles.twoBoxDivWhite}>
              <RiUserSearchLine className={styles.IconBoxBlue} />
              <p className={styles.whitep}>
                <span>10k+</span>
                <br />
                Careers Reshaped
              </p>
            </div>
            <div className={styles.line}></div>
            <div className={styles.twoBoxDivWhite}>
              <FaHandshake className={styles.IconBoxBlue} />
              <p className={styles.whitep}>
                <span>250+</span>
                <br />
                Hiring Partners
              </p>
            </div>
          </div>
        </div>
        <div className={styles.sectionDiv}>
          <Image
            src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/ALight/DataScinceLight1.png"
            width="600"
            height="400"
            layout="intrinsic"
          />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
