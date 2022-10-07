import React, { useState } from "react";
import Image from "next/image";
import { FiArrowRight } from "react-icons/fi";
import styles from "./Navbar.module.css";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaChevronDown } from "react-icons/fa";
import Popup from "../../Popup/Popup";
import Form from "../../Form/Form";


const Navbar = ({
  Href,
  Href1,
  Href2,
  Href3,
  Course,
  Course1,
  Course2,
  Course3,


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

          <Form popup={true} setTrigger={setPopups} />
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


            </div>
          </div>
          <Image
            src="/Learnbay-Logo.png"
            alt="Learnbay"
            quality={100}
            objectFit="contain"
            width="230px"
            height="60px"
          />

        </div>


        <div className={styles.right}>
          <div className={styles.dropdown}>
            <button className={styles.dropbtn}>All Courses <FaChevronDown style={{ marginLeft: "5px" }} /></button>
            <div className={styles.dropdownContent}>
              <a href={Href}>{Course}</a>
              <a href={Href1}>{Course1}</a>
              <a href={Href2}>{Course2}</a>

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
