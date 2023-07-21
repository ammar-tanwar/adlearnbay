import React, { useState } from "react";
import styles from "./Course.module.css";
import Popup from "../../Popup/Popup";
import Form from "../../Form/Form";
import { FaDownload } from "react-icons/fa";
import { ForNonProgrammerD, StackD } from "./courseDetails";
import Image from "next/image";

const Course = ({ popupHead, radio }) => {
  const [nonTech, setNonTech] = useState(true);
  const [Stack, setStack] = useState(false);
  const [popups, setPopups] = useState(false);

  const popupShow = () => {
    setPopups(true);
  };
  return (
    <div className={styles.Course} id="course">
      <Popup
        trigger={popups}
        className="popupInnersotp"
        formIMG={true}
        setTrigger={setPopups}
      >
        <div className="leftPopup">
          <div className="whiteP" />
        </div>
        <div className="RightPopup">
          <h5>Download Brochure</h5>
          <p>Please enter the following details to initiate your download</p>
          <Form
            setTrigger={setPopups}
            downloadBrochure
            radio={true}
            referral={true}
          />
        </div>
      </Popup>
      <div className={styles.courses}>
        <div className={styles.listPanel}>
          <span
            onClick={() => {
              setNonTech(true);
              setStack(false);
            }}
            style={
              nonTech
                ? { background: "white", color: "#0072bc" }
                : { background: "#E5F3FA" }
            }
          >
            Data Science & AI
          </span>
          <span
            onClick={() => {
              setNonTech(false);
              setStack(true);
            }}
            style={
              Stack
                ? { background: "white", color: "#0072bc" }
                : { background: "#E5F3FA" }
            }
          >
            Development
          </span>
        </div>
        {nonTech ? (
          <div className={styles.gridPanel}>
            {ForNonProgrammerD.map((viewAllData) => {
              const { id, title, title1, img, para, link1 } = viewAllData;
              return (
                <div className={styles.leftSide} key={id}>
                  <a href={link1}></a>
                  <h6>{title}</h6>
                  <h6>{title1}</h6>
                  <p>{para[0]}</p>
                </div>
              );
            })}
          </div>
        ) : (
          ""
        )}
        {Stack ? (
          <div className={styles.gridPanel}>
            {StackD.map((viewAllData) => {
              const { id, title, title1, img, para, link1 } = viewAllData;
              return (
                <div className={styles.leftSide} key={id}>
                  <a href={link1}>
                    <h6>{title}</h6>
                    <h6>{title1}</h6>
                    <p>{para[0]}</p>
                  </a>
                </div>
              );
            })}
          </div>
        ) : (
          ""
        )}
        <button className={styles.btnWrapper} onClick={popupShow}>
          Download Brochure
          <FaDownload style={{ marginLeft: "10px" }} />
        </button>
      </div>
      <div className={styles.img}>
        <Image
          src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/course.learnbay.co/WD-right-side.png"
          width="350"
          height="400"
          layout="intrinsic"
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default Course;
