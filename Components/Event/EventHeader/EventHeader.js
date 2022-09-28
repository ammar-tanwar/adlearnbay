import React, { useEffect, useState } from "react";
import styles from "./EventHeader.module.css";
import Popup from "../../Popup/Popup";
import Form from "../../Form/Form";
import { FaArrowRight } from "react-icons/fa";
import Image from "next/image";

export const EventHeader = ({deskimg, mobimg}) => {
  // console.log(deskimg)
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
    <div>
      <section className={styles.wrapper}>
        {mobile ? (
          <img
            src={mobimg}
            alt="Learnbay"
            quality={100}

            width="100%"
            height="400px"
          />
        ) : (
          <img
            src={deskimg}
            alt="Learnbay"
            quality={100}
            width="100%"
            height="500px"
          />
        )}
      </section>
    </div>
  );
};

// /Mobile.jpg
// /Wesite.jpg