import React, { useEffect, useState } from "react";
import styles from "./FirstSection.module.css";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import { FaArrowRight, FaDownload } from "react-icons/fa";
import Popup from "/Components/Popup/Popup";
import Form from "/Components/Form/Form";


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
            <h2>Background Image</h2>
            <p>In this example, the background image is specified for the div element.</p>
            <p>But you can specify the background image for any HTML element.</p>
            <p>Try it for a paragraph, heading, and more.</p>
        </div>
        
    </section>
  );
};



export default FirstSection;
