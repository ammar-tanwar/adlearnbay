import React, { useState, useEffect } from "react";
import styles from "./Popup.module.scss";
import { AiFillCloseCircle } from "react-icons/ai";

const Popup = (props) => {
  let color = "transparent";

  // console.log(props.formIMG)
  if (props.price) color = "white";
  useEffect(() => {
    if (props.trigger) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [props.trigger]);
  return props.trigger ? (
    <div className={styles.popup}>
    

    {props.formIMG ? (

      <div
      className={
        props.downloadBrochure ? styles.popupInners : styles.popupInnersotp
      }
    >
      {props.downloadBrochure ? (
        <AiFillCloseCircle
          className={styles.closeBtn}
          onClick={() => {
            props.setTrigger(false);
          }}
        />
      ) : (
        <AiFillCloseCircle
          className={styles.closeBtn}
          onClick={() => {
            props.setTrigger(false);
          }}
        />
      )}

      {props.children}
    </div>
    ):(
      <div
      className={
        props.downloadBrochure ? styles.popupInners : styles.popupInner
      }
    >
      {props.downloadBrochure ? (
        <AiFillCloseCircle
          className={styles.closeBtn}
          onClick={() => {
            props.setTrigger(false);
          }}
        />
      ) : (
        <AiFillCloseCircle
          className={styles.closeBtn}
          onClick={() => {
            props.setTrigger(false);
          }}
        />
      )}

      {props.children}
    </div>
    )}
    
     
    </div>
  ) : (
    ""
  );
};

export default Popup;
