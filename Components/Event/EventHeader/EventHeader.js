import React, { useEffect, useState } from "react";
import styles from "./EventHeader.module.css";
import Popup from "../../Popup/Popup";
import Form from "../../Form/Form";
import { FaArrowRight } from "react-icons/fa";
import Image from "next/image";
export const EventHeader = () => {

  const [mobile, setMobile] = useState(false);
  const [popups, setPopups] = useState(false);
  let today = new Date();
 
  const popupShow = () => {
    setPopups(true);
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
    { mobile ? (
      <img
      src="/Artboard11.jpg"
      alt="Learnbay"
      quality={100}
      
      width="100%"
      height="400px"
    />
    ):(
       <img
      src="/NewfileBanner.jpg"
      alt="Learnbay"
      quality={100}
     
      width="100%"
      height="500px"
    />
    )}
    </section>
  );
};

