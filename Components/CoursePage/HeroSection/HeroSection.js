import Image from "next/image";
import React, { useEffect, useState } from "react";
import { FaArrowRight, FaDownload } from "react-icons/fa";
import "swiper/css";
import "swiper/css/navigation";
import styles from "./HeroSection.module.css";
import Form from "/Components/Form/Form";
import FormOtp from "/Components/FormOtp/FormOtp";
import Popup from "/Components/Popup/Popup";

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
  fsdlink,
  formotp,
  formotpForS3DS,
  eventQRadio,
  eventDownload,
  jobDescription,
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
          {eventDownload ? (
            <h5>Download DSA Syllabus</h5>
          ) : (
            <h5>Apply For Counselling</h5>
          )}
          {eventQRadio ? (
            <>
              <FormOtp popup={true} upSkillingHide={true}/>
            </>
          ) : (
            <>
              {formotpForS3DS ? (
                <FormOtp upSkillingHide={true} />
              ) : (
                <>
                  {formotp ? (
                    <FormOtp popup={true} upSkillingHide={true}/>
                  ) : (
                    <Form setTrigger={setPopups} upSkillingHide={true}/>
                  )}
                </>
              )}
            </>
          )}
        </div>
      </Popup>
      <div className={styles.left}>
        {mobile ? (
          <p className="pTop">
            <b className="pTopp">{mTopPara}</b> <br />
            <b className="pTopp">{mTopPara1}</b>
          </p>
        ) : (
          <p className={styles.pTop}>
            {deskTopPara}
            {deskTopPara1}
          </p>
        )}
        {mobile ? (
          <h1>
            {mTitle} <span> {spanMTitleText}</span>
          </h1>
        ) : (
          <h1>
            {title}
            <span> {spanTitleText}</span>
          </h1>
        )}

        <p className={styles.pBot}>{desc}</p>
        <div className={styles.ButtonDiv}>
          {eventDownload ? (
            <div className={styles.btnWrapper}>
              <button onClick={popupShow}>
                DSA Syllabus
                <FaDownload style={{ marginLeft: "10px" }} />
              </button>
            </div>
          ) : (
            <div className={styles.btnWrapper}>
              {fsdlink ? (
                <a href="https://calendly.com/learnbay-apply-for-counselling/one_on_one_session">
                  <button>
                    Apply for Counselling
                    <FaArrowRight style={{ marginLeft: "10px" }} />
                  </button>
                </a>
              ) : (
                <button onClick={popupShow}>
                  Apply for Counselling
                  <FaArrowRight style={{ marginLeft: "10px" }} />
                </button>
              )}
            </div>
          )}
        </div>
        <div className={styles.bottom}>
          <div className={styles.leftBottom}>
            {/* <Image
              src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/review-course-round.jpg"
              width={mobile ? 180 : 261}
              height={mobile ? 46.2 : 67}
              layout="intrinsic"
            /> */}
            <h5>250+ </h5>
            <p>Hiring Partner</p>
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
