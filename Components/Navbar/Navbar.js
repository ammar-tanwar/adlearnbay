import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import Form from "../Event/Form/Form";
import FormOtp from "../FormOtp/FormOtp";
import Popup from "../Popup/Popup";
import styles from "./Navbar.module.css";

import FormOtpDoamin from "../WebinarPage/FormOtp/FormOtp";

const Navbar = ({
  radio,
  event,
  dataScience,
  upSkillingHide,
  fullStack,
  eventDateInfo,
  formotp,
  domainOTPForm,
}) => {
  const router = useRouter();
  const [icon, setIcon] = useState(false);
  const [show, setShow] = useState(false);
  const [popups, setPopups] = useState(false);
  let today = new Date();
  const popupShow = () => {
    setPopups(true);
  };
  const showMenu = () => {
    setShow(!show);
  };

  const handleIcon = (data) => {
    setIcon(data);
  };

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

  return (
    <div>
      <Popup trigger={popups} setTrigger={setPopups} className="popupModal">
        <div className="leftPopup">
          <div className="whiteP" />
        </div>
        <div className="RightPopup">
          <h5> Register NOW!</h5>
          {domainOTPForm ? (
            <>
              <FormOtpDoamin domain={true} formotp={true} />
            </>
          ) : (
            <>
              {formotp ? (
                <FormOtp popup={true} event={true} setTrigger={setPopups} />
              ) : (
                <Form
                  popup={true}
                  setTrigger={setPopups}
                  event={true}
                  radio={radio}
                  fullStack={fullStack}
                  upSkillingHide={upSkillingHide}
                />
              )}
            </>
          )}
        </div>
      </Popup>
      <nav className={styles.nav}>
        <div className={styles.left}>
          <div className={styles.ham}>
            {today >= eventDateInfo ? (
              ""
            ) : (
              <button onClick={popupShow} className="outLineBtn">
                Register NOW!
                <FaArrowRight className={styles.icon} />
              </button>
            )}
          </div>
          <a>
            <Image
              src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/adlearnbay/learnbay-logo.png"
              alt="Learnbay"
              quality={100}
              objectFit="contain"
              width={mobile ? "180" : "230"}
              priority={true}
              loading="eager"
              height="60px"
            />
          </a>
        </div>
        <div className={styles.right}>
          {today >= eventDateInfo ? (
            ""
          ) : (
            <button onClick={popupShow} className="outLineBtn">
              Register NOW!
              <FaArrowRight className={styles.icon} />
            </button>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
