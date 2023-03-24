import React, { useState, useEffect } from "react";
import styles from "./FirstSection1.module.css";
import { FaChevronDown, FaBell } from "react-icons/fa";
import Popup from "../../Popup/Popup";
import Form from "../../Form/Form";
import Image from "next/image";
import FormOtp from "../../FormOtp/FormOtp";

const FirstSection = ({dataScience,heading, headingSpan, ptop,des,p1,p2,p3,h1,h2,h3,withOutRadioForm,formotp}) => {
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
  });

  return (
    <div className={styles.First}>
      <Popup trigger={popups} setTrigger={setPopups} className="popupModal">
        <div className="leftPopup">
          <div className="whiteP" />
        </div>
        <div className="RightPopup">
          <h5>Apply For Counselling</h5>
          {/* <p>Fill the below details to get started</p> */}
          { formotp ? (
              <FormOtp popup={true} downloadBrochure radio={true}/>
          ) : (
            <>
         {withOutRadioForm ?(
          <Form popup={true} setTrigger={setPopups} />
          ):(
            <Form popup={true} setTrigger={setPopups} radio={true}  dataScience={dataScience} />
          )}
          </>
          )}
        </div>
      </Popup> 
      <div className={styles.leftSide}>
       <p className={styles.pTop1}>{ptop}</p>
        <h1>
          {heading}{" "}
          <span>{headingSpan}</span>
        </h1>
        <p className={styles.pTop}>
        {des}
          
        </p>

        <div className={styles.btnWrapper}>
          <a href="#course">
            <button className={styles.outLineBtn}>
              Courses <FaChevronDown className="bIconS" style={{marginLeft:"10px"}}/>
            </button>
          </a>
          <button onClick={popupShow} className={styles.btn}>
            Enquire Now <FaBell className="bIcons" />
          </button>
        </div>
        <div className={styles.info}>
          <div className={styles.left}>
            <h5>{h1}</h5>
            <p>{p1}</p>
          </div>
          <div className={styles.middle}>
            <h5>{h2}</h5>
            <p>{p2}</p>
          </div>
          <div className={styles.right}>
            <h5>{h3}</h5>
            <p>{p3}</p>
          </div>
        </div>
      </div>
      <div className={styles.rightSide}>
        <Image
          src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/head/Web+Development.png"
          width="870"
          height="666"
          layout="intrinsic"
           alt="data science course in bangalore"
        />
      </div>
    </div>
  );
};

export default FirstSection;
