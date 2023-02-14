import React, { useState } from "react";
import Image from "next/image";
import { FiArrowRight } from "react-icons/fi";
import styles from "./Navbar.module.css";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaChevronDown } from "react-icons/fa";
import Popup from "../Popup/Popup";
import Form from "../Form/Form";
import FormOtp from "../FormOtp/FormOtp";

const Navbar = ({ formotp }) => {
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
            <FormOtp popup={true} />
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
                <Link href="https://learnbay.co/data-science-course/data-science-certification-courses/">
                  Data Science & AI Certification
                </Link>
              </span>
              <span onClick={showMenu}>
                <Link href="https://www.learnbay.co/data-science-course/advance-data-science-certification-courses/">
                  Advance Data Science & AI Certification
                </Link>
              </span>
              {/* <span onClick={showMenu}>
                <Link href="/full-stack-web-development-program">Full Stack Web Development Program</Link>
              </span> */}

              <span onClick={showMenu}>
                <Link href="/full-stack-software-development-program">
                  Full-Stack Software Development Program
                </Link>
              </span>
              <span onClick={showMenu}>
                <Link href="/dsa-system-design">DSA & System Design</Link>
              </span>
              <span onClick={showMenu}>
                <Link href="https://learnbay.co/data-science-course/artificial-intelligence-certification-course/">
                  Advance AI & ML Certification
                </Link>
              </span>
              <span onClick={showMenu}>
                <Link href="https://learnbay.co/data-science-course/data-science-ai-for-managers/">
                  Data Science & AI Cert. For Managers & Leaders
                </Link>
              </span>
              <span onClick={showMenu}>
                <Link href="https://www.learnbay.co/data-science-ai-masters-program">
                  Data Science and AI Master Program
                </Link>
              </span>
              <span onClick={showMenu}>
                <Link href="https://learnbay.co/data-science-course/data-analytics-business-analytics-programs-for-professionals/">
                  Data Analytics & Business Analytics Program | Fast Track
                  Course
                </Link>
              </span>
            </div>
          </div>
          <a href="https://www.learnbay.co/data-science-course/">
            <Image
              src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/course.learnbay.co/publicimages/Learnbay-Logo.png"
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
              <a href="https://learnbay.co/data-science-course/data-science-certification-courses/">
                Data Science & AI Certification
              </a>
              <a href="https://www.learnbay.co/data-science-course/advance-data-science-certification-courses/">
                Advance Data Science & AI Certification
              </a>
              {/* <a href="/full-stack-web-development-program">Full Stack Web Development Program</a> */}
              <a href="/full-stack-software-development-program">
                Full-Stack Software Development Program
              </a>
              <a href="/dsa-system-design">DSA & System Design</a>
              <a href="https://learnbay.co/data-science-course/artificial-intelligence-certification-course/">
                Advance AI & ML Certification
              </a>
              <a href="https://learnbay.co/data-science-course/data-science-ai-for-managers/">
                Data Science & AI Cert. For Managers & Leaders
              </a>
              <a href="https://www.learnbay.co/data-science-ai-masters-program">
                Data Science and AI Master Program
              </a>
              <a href="https://learnbay.co/data-science-course/data-analytics-business-analytics-programs-for-professionals/">
                Data Analytics & Business Analytics Program | Fast Track Course
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
