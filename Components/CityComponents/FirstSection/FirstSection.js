import React, { useEffect, useState } from "react";
import styles from "./FirstSection.module.css";
import "swiper/css";
import "swiper/css/navigation";
import { FaArrowRight, FaDownload } from "react-icons/fa";


export const FirstSection = () => {

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
    <section className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.leftDiv}>
          <h1>Data Scinece Course In Bangalore</h1>
          <p>Data science is an interdisciplinary field that uses scientific methods, processes, algorithms and systems to extract or extrapolate knowledge and insights from noisy, structured and unstructured data, and apply knowledge from data across a broad range of application domains.</p>
          <div className={styles.hiringpartners}>

            <div className={styles.verticalLine} >
              <h1>3000+</h1>
              <p>Learn Of Data Science</p>
            </div>

            <div className={styles.verticalLine1}>
              <h1>250+</h1>
              <p>Hiring Partners</p>
            </div>
          </div>

          <div className={styles.counsilBtn}>
          <button >
            Apply for Counselling
            <FaArrowRight style={{ marginLeft: "10px" }} />
          </button>
          </div>
        </div>

        <div className={styles.rightDiv}></div>
      </div>
    </section>
  );
};



export default FirstSection;