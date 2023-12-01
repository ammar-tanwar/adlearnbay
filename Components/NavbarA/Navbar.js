import Image from "next/image";
import React, { useState } from "react";
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
      <nav className={styles.nav}>
        <div className={styles.left}>
          <Image
            src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/adlearnbay/learnbay-logo.png"
            alt="Learnbay"
            quality={100}
            objectFit="contain"
            width="230px"
            height="60px"
          />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
