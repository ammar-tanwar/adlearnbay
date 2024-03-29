import React, { useState } from "react";
import styles from "./Certificate.module.css";
import { BiDownload } from "react-icons/bi";
import Image from "next/image";
import Popup from "../Popup/Popup";
import Form from "../Form/Form";
import FormOtp from "../FormOtp/FormOtp";

const Certificate = ({
  popupHead,
  title,
  desc,
  desc2,
  desc3,
  radio,
  formotp,
}) => {
  const [popups, setPopups] = useState(false);

  const popupShow = () => {
    setPopups(true);
  };
  return (
    <section className={styles.Certifcate}>
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
          {formotp ? (
            <FormOtp popup={true} radio={radio} />
          ) : (
            <Form
              setTrigger={setPopups}
              downloadBrochure
              upSkillingHide={true}
              radio={radio}
            />
          )}
        </div>
      </Popup>
      <div className={styles.left}>
        <p className="pTop"> Certificate from IBM</p>
        <h4 style={{ marginBottom: "20px" }}>{title}</h4>

        <p className={styles.pBotC}>{desc}</p>
        <p className={styles.pBotC}>{desc2}</p>
        <p className={styles.pBotC}>{desc3}</p>

        <div className={styles.btnWrapper}>
          <button onClick={popupShow}>
            <BiDownload className="bIcons" />
            Download Brochure
          </button>
        </div>
      </div>
      <div className={styles.right}>
        <Image
          className="shadow"
          src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/course.learnbay.co/publicimages/certificate.webp"
          alt="Certificate"
          quality={100}
          layout="intrinsic"
          width="600px"
          height="350"
        />
      </div>
    </section>
  );
};

export default Certificate;
