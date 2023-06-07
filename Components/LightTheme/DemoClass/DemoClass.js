import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import FormOtp from "../../FormOtp/FormOtp";
import Popup from "../../Popup/Popup";
import Image from "next/image";
import Form from "../../Form/Form";
import styles from "./DemoClass.module.css";

function DemoClass({
  formotp,
  s2dataScience,
  marketing,
  grad,
  jobDescription,
  workExperience,
}) {
  const [popups, setPopups] = useState(false);

  const popupShow = () => {
    setPopups(true);
  };
  return (
    <>
      <Popup trigger={popups} setTrigger={setPopups} className="popupModal">
        <div className="leftPopup">
          <div className="whiteP" />
        </div>
        <div className="RightPopup">
          <h5>Apply Now</h5>
          {formotp ? (
            <FormOtp
              popup={true}
              s2dataScience={s2dataScience}
              marketing={marketing}
              grad={grad}
              jobDescription={jobDescription}
              workExperience={workExperience}
            />
          ) : (
            <Form setTrigger={setPopups} />
          )}
        </div>
      </Popup>
      <div className={styles.demoClass}>
        <div className={styles.firstDiv}>
          <h4>Apply For Free Demo Classes</h4>
          <p>
            Work on real-time projects using live data from companies like J.P
            Morgan, HDFC, etc for building recommendation systems.
          </p>
          <button className={styles.button} onClick={popupShow}>
            Apply Now
            <FaArrowRight className={styles.icon} />
          </button>
        </div>
        <div className={styles.secondDiv}>
          <Image
            src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/course.learnbay.co/demoRight-Image.png"
            alt="custome-fit-learning-module"
            className={styles.icon}
            width="300"
            height="225"
            loading="lazy"
          />
        </div>
      </div>
    </>
  );
}

export default DemoClass;
