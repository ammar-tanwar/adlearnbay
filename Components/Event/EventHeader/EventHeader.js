import React, { useEffect, useState } from "react";
import styles from "./EventHeader.module.css";

export const EventHeader = ({
  title,
  titleSpan,
  desc,
  instructor,
  alt,
  width,
  height,
  eventDate,
  eventTime,
  imgSrc,
  href1,
}) => {
  const [mobile, setMobile] = useState(false);
  const [popups, setPopups] = useState(false);
  let today = new Date();
  let eventDateInfo = new Date(eventDate);
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
      src="/Artboard1.jpg"
      alt="Learnbay"
      quality={100}
      objectFit="contain"
      width="100%"
      height="400px"
    />
    ):(
       <img
      src="/Artboard.jpg"
      alt="Learnbay"
      quality={100}
      objectFit="contain"
      width="100%"
      height="500px"
    />
    )}
    </section>
  );
};

