import React, { useState, useEffect, useRef } from "react";
import styles from "./FirstSection.module.css";
import { FaDownload, FaPlayCircle } from "react-icons/fa";
import Form from "../../Form/Form";
import Image from "next/image";
import Typed from "typed.js";
import dynamic from "next/dynamic";
const Button = dynamic(() => import("../Button/Button"));
const Popup = dynamic(() => import("../../Popup/Popup"));

function FirstSection({
  dataScience,
  softwareBtnHide,
  idss,
  firstToparaImg,
  firstHeading,
  FirstRightImg,
  firstTopPara,
  titleCourse,
  brochureLink,
  dataScienceCounselling,
  FirstTyped,
  SecondTyped,
  ThirdTyped,
  workExperience,
}) {
  const [popups, setPopups] = useState(false);

  const [video, setVideo] = useState(false);
  const videoSHow = () => {
    setVideo(true);
  };
  const el = useRef(null);
  const popupShow = () => {
    setPopups(true);
  };
  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [FirstTyped, SecondTyped, ThirdTyped], // Strings to display
      // Speed settings, try diffrent values untill you get good results
      startDelay: 100,
      typeSpeed: 80,
      backSpeed: 50,
      backDelay: 200,
      smartBackspace: true,
      loop: true,
      showCursor: false,
    });

    // Destropying
    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <div className={styles.First}>
      <Popup
        trigger={popups}
        setTrigger={setPopups}
        className="popupModal"
        downloadBrochure
      >
        <div className="leftPopup">
          <div
            className="whiteP"
            style={{ width: "340px", height: "400px" }}
          ></div>
        </div>
        <div className="RightPopup">
          <h5>Download Brochure</h5>
          <Form
            dataScienceCounselling={dataScienceCounselling}
            downloadBrochure
            upSkillingHide={true}
            titleCourse={titleCourse}
            brochureLink={brochureLink}
          />
        </div>
      </Popup>

      {/* For Mobile View */}

      <div className={styles.FirstLeft}>
        <p className={styles.ptopC}>{firstTopPara}</p>
        <h1 className={styles.h1}>
          {firstHeading} <span className={styles.h1Span}>{firstToparaImg}</span>
        </h1>
        <div className={styles.IBMlogoPlay}>
          <Image
            src={FirstRightImg}
            width="508"
            height="327"
            alt="data science course"
          />
        </div>
        <p className={styles.ptop} style={{ color: "#000" }}>
          In Collaboration With
        </p>
        <div className={styles.ImageBlock}>
          <div className="imgWrapper">
            <Image
              src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/FirstSection.png"
              width="283"
              height="51"
              loading="lazy"
              alt="data science course"
            />
          </div>
        </div>
        <div className={styles.animationTextWrap}>
          <span ref={el} className={styles.animationText}></span>
        </div>

        {/* Button */}

        <div className={styles.btnImage}>
          <div onClick={popupShow}>
            <Button
              text="Brochure"
              passIcon={<FaDownload style={{ marginLeft: "10px" }} />}
            />
          </div>
        </div>
      </div>

      {/* For desktop View */}

      <div className={styles.secondLeft}>
        <div className="imgWrapper">
          <Image
            src={FirstRightImg}
            width="580"
            height="450"
            alt="data science course"
          />
        </div>
      </div>
    </div>
  );
}

export default FirstSection;
