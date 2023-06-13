import React, { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/free-mode";
import styles from "./BoxShape.module.css";
import Image from "next/image";
import { AiOutlineDownload } from "react-icons/ai";
import Form from "../../Form/Form";
import FormOtp from "../../FormOtp/FormOtp";
import Popup from "../../Popup/Popup";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { FaDownload } from "react-icons/fa";

const BoxShape = ({
  title,
  Box1h5,
  box1desc,
  Box2h5,
  box2desc,
  Box3h5,
  box3desc,
  Box4h5,
  eventDownload,
  eventQRadio,
  formotp,
  fsdlink,
}) => {
  const [popups, setPopups] = useState(false);

  const popupShow = () => {
    setPopups(true);
  };
  const [hover, setHover] = useState(false);
  const [mobile, setMobile] = useState(false);
  useEffect(() => {
    let width = window.innerWidth;
    if (width < 600) {
      setMobile(true);
    }
  });

  return (
    <div className={styles.boxWrapper}>
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
          <h5>Download Brochure</h5>
          {eventQRadio ? (
            <>
              <FormOtp popup={true} eventRadio={true} />
            </>
          ) : (
            <>
              {formotp ? (
                <FormOtp popup={true} />
              ) : (
                <Form setTrigger={setPopups} downloadBrochure />
              )}
            </>
          )}
        </div>
      </Popup>
      <h2>{title}</h2>
      <div className={styles.BoxDiv}>
        <div className={styles.left}>
          <div>
            <Image
              src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/course.learnbay.co/NImages/full-stack-developer-course.png"
              alt="data-science-course"
              quality={100}
              layout="intrinsic"
              width="423"
              height="252"
            />
            <p className={styles.Ptopp}>
            Software Development
              <br />
              Master Course
            </p>
            {eventDownload ? (
              <>
                <button onClick={popupShow}>
                Download Syllabus
                  <FaDownload style={{ marginLeft: "10px" }} />
                </button>
                </>
          ) : (
            <>
            {fsdlink ? (
              <a href="https://calendly.com/learnbay-apply-for-counselling/one_on_one_session">
                <button className={styles.Button}>
                  <AiOutlineDownload className="bIcons" />
                  Download Brochure
                </button>
              </a>
            ) : (
              <button className={styles.Button} onClick={popupShow}>
                <AiOutlineDownload className="bIcons" />
                Download Brochure
              </button>
            )}
            </>
                      )}
          </div>
          <div>
            <Image
              src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/course.learnbay.co/NImages/dsa%26system.png"
              alt="data-science-course"
              quality={100}
              layout="intrinsic"
              width="423"
              height="252"
            />
            <p className={styles.Ptopp}>
              Data Structures Algorithms
              <br />
              And System Design Course
            </p>
            {eventDownload ? (
              <>
                <button onClick={popupShow}>
                Download Syllabus
                  <FaDownload style={{ marginLeft: "10px" }} />
                </button>
                </>
          ) : (
            <>
            {fsdlink ? (
              <a href="https://calendly.com/learnbay-apply-for-counselling/one_on_one_session">
                <button className={styles.Button}>
                  <AiOutlineDownload className="bIcons" />
                  Download Brochure
                </button>
              </a>
            ) : (
              <button className={styles.Button} onClick={popupShow}>
                <AiOutlineDownload className="bIcons" />
                Download Brochure
              </button>
            )}
            </>
                      )}
          </div>
          <div>
            <Image
              src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/course.learnbay.co/NImages/full-stack-web-development.png"
              alt="full-stack-web"
              quality={100}
              layout="intrinsic"
              width="423"
              height="252"
            />
            <p className={styles.Ptopp}>
              Full Stack Web
              <br />
              Development Course
            </p>
            {eventDownload ? (
              <>
                <button onClick={popupShow}>
                Download Syllabus
                  <FaDownload style={{ marginLeft: "10px" }} />
                </button>
                </>
          ) : (
            <>
            {fsdlink ? (
              <a href="https://calendly.com/learnbay-apply-for-counselling/one_on_one_session">
                <button className={styles.Button}>
                  <AiOutlineDownload className="bIcons" />
                  Download Brochure
                </button>
              </a>
            ) : (
              <button className={styles.Button} onClick={popupShow}>
                <AiOutlineDownload className="bIcons" />
                Download Brochure
              </button>
            )}
            </>
                      )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoxShape;
