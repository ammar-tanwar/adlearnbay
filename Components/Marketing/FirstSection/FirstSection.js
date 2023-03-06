import React, { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./FirstSection.module.css";
import Popup from "../../Popup/Popup";
import Form from "../../Form/Form";

function FirstSection({ radio }) {
  const [show, setShow] = useState(false);
  const [popups, setPopups] = useState(false);
  const popupShow = () => {
    setPopups(true);
  };
  const showMenu = () => {
    setShow(!show);
  };
  return (
    <section className={styles.FirstSection}>
      <Popup
        trigger={popups}
        setTrigger={setPopups}
        downloadbrochure
        className="popupInnersotp"
        formIMG={true}
      >
        <div className="leftPopup">
          <div className="whiteP" />
        </div>
        <div className="RightPopup">
          <h5>Apply For Scholarship</h5>
          <Form popup={true} setTrigger={setPopups} radio={true} />
        </div>
      </Popup>
      <div className={styles.content}>
        <h1>
          Get 100% <br />
          SCHOLARSHIP
        </h1>
        <div className={styles.divContent}>
          <p>on our</p>
          <p>
            <b>Data Science & Full Stack courses</b>
          </p>
        </div>
      </div>
      <div className={styles.Mnone}></div>
      <div>
        <div className={styles.btnWrapper}>
          <button onClick={popupShow}>Apply for Scholarship</button>
        </div>
      </div>
    </section>
  );
}

export default FirstSection;
