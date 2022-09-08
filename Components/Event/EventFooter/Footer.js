import styles from "./Footer.module.css";
import { IoMailSharp } from "react-icons/io5";
import { BsFillTelephoneFill } from "react-icons/bs";
import Image from "next/image";
import React from "react";
import { useState } from "react";
import { FaTwitter, FaFacebookF, FaLinkedinIn, FaYoutube, FaInstagram, FaApple, FaAndroid } from "react-icons/fa";

const Footerfsd = () => {

  const [showMe, setShowMe] = useState(false);
  function toggle(){
    setShowMe(!showMe);
  }
  return (
    <section className={styles.FooterSection}>
      <div className={styles.FooterDiv1}>
        <div className={styles.FooterDivInner}>
            <Image src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/logo-light.png" alt="Learnbay" quality={100}
              objectFit="contain" width="230px" height="60px" />
          <p className={styles.FooterInnerli}>Enroll now for Data Science Classroom (Bangalore) or online training with us
            and Master Data Analytics Skills which will help you to transform your career and start your career as a Data
            Scientist.</p>
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
            (+91) 96069 50936
          </span>
        </div>
      </div>
      <div className={styles.FooterBottom}>
        <div className={styles.FooterBottomInner}>
          <p className={styles.FooterInnerB}>Copyright © 2020 Learnbay by www.learnbay.co. All Rights
            Reserved.</p>
        </div>
      </div>
    </section>
  );
};

export default React.memo(Footerfsd);