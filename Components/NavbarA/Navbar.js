import React, { useState } from "react";
import Image from "next/image";
import { FiArrowRight } from "react-icons/fi";
import styles from "./Navbar.module.css";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaChevronDown } from "react-icons/fa";
import Popup from "../Popup/Popup";
import Form from "../Form/Form";

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
      <nav className={styles.nav}>
        <div className={styles.left}>
          <a href="#">
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
      </nav>
    </div>
  );
};

export default Navbar;
