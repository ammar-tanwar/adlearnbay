import React, { useState, useEffect } from "react";
import styles from "./Domain.module.css";
import Image from "next/image";
import Popup from "../Popup/Popup";
import Form from "../Form/Form";


const Domain = () => {
  const [mobile, setMobile] = useState(false);
  useEffect(() => {
    let width = window.innerWidth;
    if (width < 481) {
      setMobile(true);
    }
    if (width > 481) {
      setMobile(false);
    }
  });
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
    <section className={styles.Domain}>
      <Popup trigger={popups} setTrigger={setPopups} className="popupModal">
        <div className="leftPopup">
          <div className="whiteP" />
        </div>
        <div className="RightPopup">
          <h5>Apply For Counselling</h5>
          <p>Fill the below Details to get started</p>
          <Form popup={true} setTrigger={setPopups} />
        </div>
      </Popup>
      <div className={styles.CInner}>
        <h4>Domain Specialization</h4>
        {/* <p className="pBot">Work on live projects to get hired at:</p> */}
      </div>
      <div className={styles.imageBox}>
        <div className={styles.left}>
        <div className={styles.top}>
         <p>Full Stack Domain</p>
          </div>
          <div className={styles.middle}>
            <p>Product Engineer/Manager Domain</p>
          </div>
          <div className={styles.middle1}>
            <p>Data Science and AI Domain</p>
          </div>
        </div>
        <div className={styles.left}>
        <div className={styles.top}>
         <p> Web 3.0 Developer Domain</p>
          </div>
          <div className={styles.middle}>
            <p>Devops & Clouds Domain</p>
          </div>
        </div>
        <div className={styles.right}>
        <Image
          src="/domain-new.png"
          alt="data-science-course"
          quality={100}
          layout="intrinsic"
          width="500"
          height="250"
        />
        </div>
      </div>
    </section>
  );
};

export default Domain;
