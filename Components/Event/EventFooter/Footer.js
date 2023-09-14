import styles from "./Footer.module.css";
import { IoMailSharp } from "react-icons/io5";
import { BsFillTelephoneFill } from "react-icons/bs";
import Image from "next/image";
import React from "react";
import { useState } from "react";
import {
  FaTwitter,
  FaFacebookF,
  FaLinkedinIn,
  FaYoutube,
  FaInstagram,
  FaApple,
  FaAndroid,
} from "react-icons/fa";

const Footerfsd = () => {
  const [showMe, setShowMe] = useState(false);
  function toggle() {
    setShowMe(!showMe);
  }
  return (
    <section className={styles.FooterSection}>
      <div className={styles.FooterDiv1}>
        <div className={styles.FooterDivInner}>
          <Image
            src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/logo-light.png"
            alt="Learnbay"
            quality={100}
            objectFit="contain"
            width="230px"
            height="60px"
          />
          <p className={styles.FooterInnerli}>
            Enroll now on DSA and System Design Webinars led by top Industry
            leaders from MNCs companies that will give you a complete
            understanding on the subject.
          </p>
          <div className={styles.FooterSocial}>
            <FaTwitter className="bIcons" />
            <FaFacebookF className="bIcons" />
            <FaLinkedinIn className="bIcons" />
            <FaYoutube className="bIcons" />
            <FaInstagram className="bIcons" />
          </div>
          <span style={{ display: "flex", marginTop: "20px" }}>
            <IoMailSharp className="bIcons" />
            contacts@learnbay.co
          </span>
          <span style={{ display: "flex", marginTop: "10px" }}>
            <BsFillTelephoneFill className="bIcons" />
            (+91) 97311 35221
          </span>
        </div>
      </div>
      <div className={styles.FooterBottom}>
        <div className={styles.FooterBottomInner}>
          <p className={styles.FooterInnerB}>
            Copyright © 2022 Learnbay by Learnvista Pvt. Ltd. All Rights
            Reserved.
          </p>
        </div>
      </div>
    </section>
  );
};

export default React.memo(Footerfsd);
