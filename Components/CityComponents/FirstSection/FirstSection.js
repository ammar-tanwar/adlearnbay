import React, { useEffect, useState } from "react";
import styles from "./FirstSection.module.css";
import { FaArrowRight } from "react-icons/fa";
import Popup from "../../Popup/Popup";
import Form from "../../Form/Form";
import FormOtp from "../../FormOtp/FormOtp";
import Image from "next/image";
import CityBackGroundImage from "./CityBackGroundImage";

export const FirstSection = ({
  DeskImg,
  MobImg,
  courseName,
  cityName,
  ptag,
  formotp,
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

  useEffect(() => {
    let width = window.innerWidth;

    if (width < 481) {
      setMobile(true);
    }
    if (width > 481) {
      setMobile(false);
    }
  }, [mobile]);

  return (
    <section className={styles.container321}>
      <div>
        <CityBackGroundImage DeskImg={DeskImg} MobImg={MobImg} />
      </div>

      <Popup trigger={popups} setTrigger={setPopups} className="popupModal">
        <div className="leftPopup">
          <div className="whiteP" />
        </div>
        <div className="RightPopup">
          <h5>Apply For Counselling</h5>
          {formotp ? (
            <FormOtp popup={true} />
          ) : (
            <Form popup={true} setTrigger={setPopups} />
          )}
        </div>
      </Popup>

      <div className={styles.container}>
        <h1>
          {courseName} <span className={styles.spantag}>{cityName}</span>
        </h1>
        <p className={styles.parag} style={{ width: "50%" }}>
          {ptag}
        </p>
      </div>

      <div className={styles.hiringpartners}>
        <div className={styles.verticalLine}>
          <h1>3000+</h1>
          <p>Learner’s Of Data Science</p>
        </div>
        <div className={styles.verticalLine1}>
          <h1>250+</h1>
          <p>Hiring Partners</p>
        </div>
      </div>

      <div className={styles.counsilBtn}>
        <button onClick={popupShow}>
          Apply for Counselling
          <FaArrowRight style={{ marginLeft: "10px" }} />
        </button>
      </div>
    </section>
  );
};

export default FirstSection;

// <img src="/BengaluruWeb.jpg" alt="Snow" style={{width:"100%"}}></img>
