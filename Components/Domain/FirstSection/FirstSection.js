import React, { useState, useEffect } from "react";
import styles from "./FirstSection.module.css";
import { FaChevronDown, FaBell } from "react-icons/fa";
import Popup from "../../Popup/Popup";
import VideoPopup from "../VideoPopup/VideoPopup";
import Form from "../../Form/Form";
import Image from "next/image";

const FirstSection = ({
  dataScience,
  heading1,
  heading2,
  headingSpan1,
  headingSpan2,
  ptop,
  des,
  p1,
  p2,
  p3,
  h1,
  h2,
  h3,
  withOutRadioForm,
}) => {
  const [mobile, setMobile] = useState(false);
  const [show, setShow] = useState(false);
  const [popups, setPopups] = useState(false);

  const popupShow = () => {
    setPopups(true);
  };
  const showMenu = () => {
    setShow(!show);
  };

  const [video, setVideo] = useState(false);
  const videoSHow = () => {
    setVideo(true);
  };


  useEffect(() => {
    let width = window.innerWidth;
    if (width < 481) {
      setMobile(true);
    }
  });

  return (
    <section>
      {" "}
      <div className={styles.First}>
        <Popup trigger={popups} setTrigger={setPopups} className="popupModal">
          <div className="leftPopup">
            <div className="whiteP" />
          </div>
          <div className="RightPopup">
            <h5>Apply For Counselling</h5>
            {/* <p>Fill the below details to get started</p> */}
            {withOutRadioForm ? (
              <Form popup={true} setTrigger={setPopups} />
            ) : (
              <Form
                popup={true}
                setTrigger={setPopups}
                radio={true}
                dataScience={dataScience}
              />
            )}
          </div>
        </Popup>
      <VideoPopup triggers={video} setTriggers={setVideo} ids="9401Q9vFxOY" />
        <div className={styles.leftSide}>
          <p className={styles.pTop1}>{ptop}</p>
          <h1>
            {heading1} <span>{headingSpan1} </span>{heading2} <span>{headingSpan2}</span>
          </h1>
          <p className={styles.pTop}>{des}</p>

          <div className={styles.btnWrapper}>
            {/* <a href="#course">
              <button className={styles.outLineBtn}>
                Courses <FaChevronDown className="bIcons" />
              </button>
            </a> */}
            <button onClick={popupShow} className={styles.btn}>
              Enquire Now <FaBell className="bIcons" />
            </button>
          </div>
          <div className={styles.info}>
            <div className={styles.left}>
              <h5>{h1}</h5>
              <p>{p1}</p>
            </div>
            <div className={styles.middle}>
              <h5>{h2}</h5>
              <p>{p2}</p>
            </div>
            <div className={styles.right}>
              <h5>{h3}</h5>
              <p>{p3}</p>
            </div>
          </div>
        </div>
        <div className={styles.rightSide}>
        <Image
            src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/domainpage/rightside.png"
            layout="intrinsic"
            width="550"
            height="350"
            loading="lazy"
            alt="data science course in bangalore"
            className={styles.vIcon}
            onClick={videoSHow}
          />
          <div className={styles.playIcon}>
          
          </div>
        </div>
      </div>
    </section>
  );
};

export default FirstSection;
