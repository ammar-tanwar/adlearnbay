import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Form from "../../Form/Form";
import Popup from "../../Popup/Popup";
import styles from "./Navbar.module.css";

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
          <Form popup={true} setTrigger={setPopups} radio={radio} />
        </div>
      </Popup>
      <nav className={styles.nav}>
        <div className={styles.left}>
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
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
