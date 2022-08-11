import React, { useState } from "react";
import Image from "next/image";
import Popup from "../Popup/Popup";
import styles from "./BoxShape.module.css";
import { AiOutlineDownload } from "react-icons/ai";

import Form from "../Form/Form";

const BoxShape = ({
  title,
  Box1h5,
  box1desc,
  Box2h5,
  box2desc,
  Box3h5,
  box3desc,
  Box4h5,
  box4desc,
}) => {
  const [popups, setPopups] = useState(false);

  const popupShow = () => {
    setPopups(true);
  };

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
          <p>Please enter the following details to initiate your download</p>
          <Form setTrigger={setPopups} downloadBrochure />
        </div>
      </Popup>
      <h2>Explore Our Programs</h2>
      <div className={styles.BoxDiv}>
        <div className={styles.left}>
          <div>
          <Image
            src="/ds.png"
            alt="data-science-course"
            quality={100}
            layout="intrinsic"
            width="306"
            height="150"
          />
          <p className={styles.Ptopp}>
          Data Science & AI Certification <br/> Domain Specialisation For Professionals
          </p>
          <button className={styles.Button} onClick={popupShow}>
                  <AiOutlineDownload className="bIcons" />
                    Download Brochure
                </button>
          </div>
          <div>
          <Image
            src="/advanceds.png"
            alt="data-science-course"
            quality={100}
            layout="intrinsic"
            width="306"
            height="150"
          />
          <p className={styles.Ptopp}>
          Advance AI & ML Certification <br/> Become AI Expert In Product based MNCs
          </p>
          <button className={styles.Button} onClick={popupShow}>
                  <AiOutlineDownload className="bIcons" />
                    Download Brochure
                </button>
          </div>
          <div>
          <Image
            src="/ds.png"
            alt="data-science-course"
            quality={100}
            layout="intrinsic"
            width="306"
            height="150"
          />
          <p className={styles.Ptopp}>
          Data Science & AI Certification Program <br/>For Managers and Leaders
          </p>
          <button className={styles.Button} onClick={popupShow}>
                  <AiOutlineDownload className="bIcons" />
                    Download Brochure
                </button>
          </div>
          <div>
          <Image
            src="/advanceds.png"
            alt="data-science-course"
            quality={100}
            layout="intrinsic"
            width="306"
            height="150"
          />
          <p className={styles.Ptopp}>
          Job Guarantee or Money Back <br/> Data Science & AI Certification Program
          </p>
          <button className={styles.Button} onClick={popupShow}>
                  <AiOutlineDownload className="bIcons" />
                    Download Brochure
                </button>
          </div>
          
        </div>
        <div className={styles.right}>
          <div className={styles.imgBack}>
            <div className={styles.formWrapper}>
              <h5>
                Talk to our counsellors Now <br />
                <span>Apply For free Profile Review</span>
              </h5>
              <Form />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoxShape;
