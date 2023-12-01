import Image from "next/image";
import React, { useState } from "react";
import { FiArrowRight } from "react-icons/fi";
import { GiHamburgerMenu } from "react-icons/gi";
import Form from "../Form/Form";
import Popup from "../Popup/Popup";
import styles from "./Navbar.module.css";

const Navbar = () => {
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
          {/* <div className={show ? styles.mobileWrapper : styles.hide}>
            <div className={styles.mobileMenu}>
              <span onClick={showMenu}>
                <Link href="/datascience/data-science-certification-courses-s7">Data Science & AI Certification</Link>
              </span>

              <span onClick={showMenu}>
                <Link href="/datascience/advance-ai-ml-certification-s7">Advance AI & ML Certification</Link>
              </span>

              <span onClick={showMenu}>
                <Link href="/datascience/data-science-ai-cert-for-managers-leaders-s7">Data Science & AI Cert. For Managers & Leaders</Link>
              </span>

              <span onClick={showMenu}>
                <Link href="job-guarantee-or-money-back-data-science-ai-s7">Data Science and AI Master Program</Link>
              </span>
            </div>
          </div> */}
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
          {/* <div className={styles.dropdown}>
  <button className={styles.dropbtn}>All Courses <FaChevronDown style={{marginLeft:"5px"}} /></button>
  <div className={styles.dropdownContent}>
    <a href="/datascience/data-science-certification-courses-s7">Advance Data Science & AI Certification</a>
    <a href="/datascience/advance-ai-ml-certification-s7">Advance AI & ML Certification</a>
<a href="/datascience/data-science-ai-cert-for-managers-leaders-s7">Data Science & AI Cert. For Managers & Leaders</a>
<a href="/job-guarantee-or-money-back-data-science-ai-s7">Data Science and AI Master Program</a>
  </div>
</div> */}

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
