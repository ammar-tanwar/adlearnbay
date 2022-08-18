import React, { useEffect, useState } from "react";
import styles from "./HeroSection.module.css";
import "swiper/css";
import "swiper/css/navigation";
import { FaArrowRight, FaDownload } from "react-icons/fa";
import Image from "next/image";
import Popup from "/components/Popup/Popup";
import Form from "/components/Form/Form";

const HeroSection = ({
  deskTopPara,
  title,
  mTitle,
  spanTitleText,
  spanMTitleText,
  desc,
  mTopPara,
  width,
  height,
  src,
  alt,
  srcD,
  deskTopPara1,
  mTopPara1,
  popupHead,
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
  });

  return (
    <section className={styles.wrapper}>
      <Popup trigger={popups} setTrigger={setPopups} className="popupModal">
        <div className="leftPopup">
          <div className="whiteP" />
        </div>
        <div className="RightPopup">
          <h5>Apply For Counselling</h5>
          <p>Fill the below details to get started</p>
          <Form popup={true} setTrigger={setPopups} />
        </div>
      </Popup>
      <Popup
        trigger={popups}
        setTrigger={setPopups}
        className="popupModal"
        downloadBrochure
      >
        <div className="leftPopup">
          <div
            className="whiteP"
            style={{ width: "350px", height: "400px" }}
          ></div>
        </div>
        <div className="RightPopup">
          <h5>{popupHead}</h5>
          <p>Please enter the following details to initiate your download</p>
          <Form setTrigger={setPopups} downloadBrochure />
        </div>
      </Popup><Popup
        trigger={popups}
        setTrigger={setPopups}
        className="popupModal"
        downloadBrochure
      >
        <div className="leftPopup">
          <div
            className="whiteP"
            style={{ width: "350px", height: "400px" }}
          ></div>
        </div>
        <div className="RightPopup">
          <h5>{popupHead}</h5>
          <p>Please enter the following details to initiate your download</p>
          <Form setTrigger={setPopups} downloadBrochure />
        </div>
      </Popup>
      <div className={styles.left}>
        {mobile ? (
          <p className="pTop">
            <b className="pTopp">{mTopPara}</b> <br />
            <br /> <b className="pTopp">{mTopPara1}</b>
          </p>
        ) : (
          <p className={styles.pTop}>
            {deskTopPara}
            {deskTopPara1}
          </p>
        )}
        {mobile ? (
          <h1>
            {mTitle}<br /> <span> {spanMTitleText}</span>
          </h1>
        ) : (
          <h1>
            {title}<br /> <span> {spanTitleText}</span>
          </h1>
        )}

        <p className={styles.pBot}>{desc}</p>
        <div className={styles.ButtonDiv}>
          <div className={styles.btnWrapper}>
            <button onClick={popupShow}>
              Apply for Counselling
              <FaArrowRight style={{ marginLeft: "10px" }} />
            </button>
          </div>
          <div className={styles.btnWrapper}>
          <button onClick={popupShow}>
            Download Brochure
            <FaDownload style={{ marginLeft: "10px" }} />
          </button>
        </div>

        </div>
        <div className={styles.bottom}>
          <div className={styles.leftBottom}>
            <Image
              src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/review-course-round.jpg"
              width={mobile ? 180 : 261}
              height={mobile ? 46.2 : 67}
              layout="intrinsic"
            />
          </div>
          <div className={styles.rightBottom}>
            <h5>10k Successful</h5>
            <p>Career Transition</p>
          </div>
        </div>
      </div>
      <div className={styles.right}>
        <Image
          src={src}
          alt={alt}
          layout="intrinsic"
          width={width}
          height={height}
        />
      </div>
    </section>
  );
};

export default HeroSection;
