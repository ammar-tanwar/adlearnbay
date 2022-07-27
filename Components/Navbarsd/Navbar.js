import React, { useState } from "react";
import Image from "next/image";
import { FiArrowRight } from "react-icons/fi";
import styles from "./Navbar.module.css";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaChevronDown } from "react-icons/fa";
import Popup from "../Popup/Popup";
import Form from "../Form/Form";

const Navbar = ({ radio }) => {
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
          <p>Fill the below Details to get started</p>
          <Form popup={true} setTrigger={setPopups} radio={true} />
        </div>
      </Popup>
      <nav className={styles.nav}>
        <div className={styles.left}>
          <GiHamburgerMenu className={styles.ham} onClick={showMenu} />
          <div className={show ? styles.mobileWrapper : styles.hide}>
            <div className={styles.mobileMenu}>
              <span onClick={showMenu}>
                <Link href="/data-science-certification-courses-sd">
                  Data Science & AI Certification
                </Link>
              </span>

              <span onClick={showMenu}>
                <Link href="/advance-ai-ml-certification-sd">
                  Advance AI & ML Certification
                </Link>
              </span>

              <span onClick={showMenu}>
                <Link href="/data-science-ai-cert-for-managers-leaders-sd">
                  Data Science & AI Cert. For Managers & Leaders
                </Link>
              </span>

              <span onClick={showMenu}>
                <Link href="job-guarantee-or-money-back-data-science-ai-sd">
                  Job Guarantee or Money Back – Data Science & AI
                </Link>
              </span>
            </div>
          </div>
          <a href="/job-guarantee-or-money-back-data-science-ai-sd">
            <Image
              src="/Learnbay-Logo.png"
              alt="Learnbay"
              quality={100}
              objectFit="contain"
              width="230px"
              height="60px"
            />
          </a>
        </div>
        <div className={styles.right}>
          <div className={styles.dropdown}>
            <button className={styles.dropbtn}>
              All Courses <FaChevronDown style={{ marginLeft: "5px" }} />
            </button>
            <div className={styles.dropdownContent}>
              <a href="/data-science-certification-courses-sd">
                Advance Data Science & AI Certification
              </a>
              <a href="/advance-ai-ml-certification-sd">
                Advance AI & ML Certification
              </a>
              <a href="/data-science-ai-cert-for-managers-leaders-sd">
                Data Science & AI Cert. For Managers & Leaders
              </a>
              <a href="job-guarantee-or-money-back-data-science-ai-sd">
                Job Guarantee or Money Back – Data Science & AI
              </a>
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
