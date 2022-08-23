import React, { useState, useEffect } from "react";
import Image from "next/image";
import { FaArrowRight, FaChevronDown, FaChevronUp } from "react-icons/fa";
import styles from "./Navbar.module.css";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import Popup from "../../Popup/Popup";
import Form from "../../Form/Form";
import { useRouter } from "next/router";
import Tabs from "../Tabs/Tabs";

const Navbar = ({ radio }) => {
  const router = useRouter();
  const [icon, setIcon] = useState(false);
  const [show, setShow] = useState(false);
  const [popups, setPopups] = useState(false);

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
          <h5>Apply For Counselling</h5>
          <p>Fill the below details to get started</p>
          <Form popup={true} setTrigger={setPopups} radio={radio} />
        </div>
      </Popup>
      <nav className={styles.nav}>
        <div className={styles.left}>
       
            <Image
              src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/Learnbay-Logo.webp"
              alt="Learnbay"
              quality={100}
              objectFit="contain"
              width={mobile ? "180" : "230"}
              height="60px"
            />
          
        </div>
        <div className={styles.right}>
          <button onClick={popupShow} className="outLineBtn">
            Apply For Counselling
            <FaArrowRight className={styles.icon} />
          </button>

          <Popup></Popup>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;