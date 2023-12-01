import Image from "next/image";
import React, { useState } from "react";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { IoMailSharp } from "react-icons/io5";
import styles from "./Footer.module.css";

import { FaFacebookF, FaSquareXTwitter } from "react-icons/fa6";

import Link from "next/link";

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
            src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/adlearnbay/white-logo.webp"
            alt="Learnbay"
            quality={100}
            width="230"
            height="100"
          />
          <p className={styles.FooterInnerli}>
            Register for our webinar to get a complete understanding of Data
            Science in Banking Domain, led by industry leaders. Upgrade your
            career today!
          </p>
          <div className={styles.FooterSocial}>
            <FaSquareXTwitter className="bIcons" />
            <FaFacebookF className="bIcons" />
            <FaLinkedinIn className="bIcons" />
            <FaYoutube className="bIcons" />
            <FaInstagram className="bIcons" />
          </div>
          <span style={{ display: "flex", marginTop: "20px" }}>
            <IoMailSharp className="bIcons" />
            contacts@learnbay.co
          </span>
          <Link href="tel:+918123327570">
            <span style={{ display: "flex", marginTop: "10px" }}>
              <BsFillTelephoneFill className="bIcons" />
              (+91) 81233 27570
            </span>
          </Link>
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
