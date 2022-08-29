import styles from "../Footer/Footer.module.css";
import { IoMailSharp } from "react-icons/io5";
import { BsFillTelephoneFill } from "react-icons/bs";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import { useState } from "react";
import { FaArrowRight, FaDownload } from "react-icons/fa";
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
        <div className={styles.FooterDivInner}>
          <p className={styles.FooterInnerP}>Courses</p>
          <p className={styles.FooterInnerli}>Full Stack Web Development Course</p>
          <p className={styles.FooterInnerli}>Full Stack Software Development Course</p>
          <p className={styles.FooterInnerli}>Full Stack Data Structures & Algorithms Course</p>
         
        </div>
        <div className={styles.FooterDivInner}>
          <p className={styles.FooterInnerP}>Get Our Apps On</p>
          <button
            className={styles.btnout}>
            <FaAndroid className="bIcons" style={{ fontSize: "30px" }} />Get Our Android App
          </button>
          <p className={styles.FooterInnerP}>Find Us Here</p>
            <p className={styles.FooterInnerli}>#1090 , 1st floor, 18th cross road HSR layout sector 3, Bangalore - 560102
              (Above Sangam Sweets)</p>

              <button className={styles.btnout} style={{ marginTop: "20px"}} onClick={toggle}>
              View More
                <FaArrowRight style={{ marginLeft: "10px" }} />
              </button>
        </div>
      </div>


      <div style={{
        display: showMe?"block":"none"
      }}>

      <div className={styles.FooterDiv} style={{
        borderTop: "1px solid", borderBottom: "1px solid",
        borderColor: "#ffffff50"
      }}>



        <div className={styles.FooterDivInner}>
          <p className={styles.FooterInnerP}>Pune</p>
        
          <p className={styles.FooterInnerli}>Full Stack Web Development Course</p>
          <p className={styles.FooterInnerli}>Full Stack Software Development Course</p>
          <p className={styles.FooterInnerli}>Full Stack Data Structures & Algorithms Course</p>

        </div>
        <div className={styles.FooterDivInner}>
          <p className={styles.FooterInnerP}>Mumbai</p>
          <p className={styles.FooterInnerli}>Full Stack Web Development Course</p>
          <p className={styles.FooterInnerli}>Full Stack Software Development Course</p>
          <p className={styles.FooterInnerli}>Full Stack Data Structures & Algorithms Course</p>

        </div>
        <div className={styles.FooterDivInner}>
          <p className={styles.FooterInnerP}>Chennai</p>
          <p className={styles.FooterInnerli}>Full Stack Web Development Course</p>
          <p className={styles.FooterInnerli}>Full Stack Software Development Course</p>
          <p className={styles.FooterInnerli}>Full Stack Data Structures & Algorithms Course</p>
        </div>
        <div className={styles.FooterDivInner}>
          <p className={styles.FooterInnerP}>Canada</p>
          <p className={styles.FooterInnerli}>Full Stack Web Development Course</p>
          <p className={styles.FooterInnerli}>Full Stack Software Development Course</p>
          <p className={styles.FooterInnerli}>Full Stack Data Structures & Algorithms Course</p>
        </div>
      </div>
      

      <div className={styles.FooterDiv}>
        <div className={styles.FooterDivInner}>
          <p className={styles.FooterInnerP}>Bangalore</p>
          <p className={styles.FooterInnerli}>Full Stack Web Development Course</p>
          <p className={styles.FooterInnerli}>Full Stack Software Development Course</p>
          <p className={styles.FooterInnerli}>Full Stack Data Structures & Algorithms Course</p>
        </div>
        <div className={styles.FooterDivInner}>
          <p className={styles.FooterInnerP}>Hyderabad</p>
          <p className={styles.FooterInnerli}>Full Stack Web Development Course</p>
          <p className={styles.FooterInnerli}>Full Stack Software Development Course</p>
          <p className={styles.FooterInnerli}>Full Stack Data Structures & Algorithms Course</p>

        </div>
        <div className={styles.FooterDivInner}>
          <p className={styles.FooterInnerP}>Dubai</p>
          <p className={styles.FooterInnerli}>Full Stack Web Development Course</p>
          <p className={styles.FooterInnerli}>Full Stack Software Development Course</p>
          <p className={styles.FooterInnerli}>Full Stack Data Structures & Algorithms Course</p>
        </div>
        <div className={styles.FooterDivInner}>
          <p className={styles.FooterInnerP}>Delhi</p>
          <p className={styles.FooterInnerli}>Full Stack Web Development Course</p>
          <p className={styles.FooterInnerli}>Full Stack Software Development Course</p>
          <p className={styles.FooterInnerli}>Full Stack Data Structures & Algorithms Course</p>
        </div>
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