import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";
import { GiHamburgerMenu } from "react-icons/gi";
import Form from "../../Form/Form";
import FormOtp from "../../FormOtp/FormOtp";
import Popup from "../../Popup/Popup";
import styles from "./Navbar.module.css";

const Navbar = ({
  Href,
  Href1,
  Href2,
  Href3,
  Course,
  Course1,
  Course2,
  Course3,
  formotp,
  radio,
}) => {
  const [show, setShow] = useState(false);
  const [popups, setPopups] = useState(false);

  const popupShow = () => {
    setPopups(true);
  };
  const showMenu = () => {
    setShow(!show);
  };

  return (
    <div>
      <Popup trigger={popups} setTrigger={setPopups} className="popupModal">
        <div className="leftPopup">
          <div className="whiteP" />
        </div>
        <div className="RightPopup">
          <h5>Apply For Counselling</h5>
          {/* <p>Fill the below Details to get started</p> */}
          {formotp ? (
            <FormOtp popup={true} radio={radio} />
          ) : (
            <Form popup={true} setTrigger={setPopups} />
          )}
        </div>
      </Popup>
      <nav className={styles.nav}>
        <div className={styles.left}>
          <GiHamburgerMenu className={styles.ham} onClick={showMenu} />
          <div className={show ? styles.mobileWrapper : styles.hide}>
            <div className={styles.mobileMenu}>
              <span onClick={showMenu}>
                <Link href={Href}>{Course}</Link>
              </span>

              <span onClick={showMenu}>
                <Link href={Href1}>{Course1}</Link>
              </span>

              <span onClick={showMenu}>
                <Link href={Href2}>{Course2}</Link>
              </span>

              <span onClick={showMenu}>
                <Link href={Href3}>{Course3}</Link>
              </span>
            </div>
          </div>

          <Image
            src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/adlearnbay/learnbay-logo.png"
            alt="Learnbay"
            quality={100}
            objectFit="contain"
            width="230px"
            height="60px"
          />
        </div>

        <div className={styles.right}>
          <div className={styles.dropdown}>
            <button className={styles.dropbtn}>
              All Courses <FaChevronDown style={{ marginLeft: "5px" }} />
            </button>
            <div className={styles.dropdownContent}>
              <a href={Href}>{Course}</a>
              <a href={Href1}>{Course1}</a>
              <a href={Href2}>{Course2}</a>
              <a href={Href3}>{Course3}</a>
            </div>
          </div>

          <button onClick={popupShow}>
            Apply For Counselling <FiArrowRight style={{ marginLeft: "5px" }} />
          </button>
          <Popup></Popup>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
