import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaCheck } from "react-icons/fa";
import { IoMailSharp } from "react-icons/io5";
import styles from "../Footer/Footer.module.css";

const Footer = () => {
  return (
    <section className={styles.FooterSection}>
      <div className={styles.FooterDiv}>
        <div className={styles.FooterDivInner}>
          <Image
            src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/adlearnbay/white-logo.webp"
            alt="Learnbay"
            quality={100}
            width="230"
            height="100"
          />
          <p className={styles.FooterInnerli}>
            Enroll Now For Data Science Classroom (Bangalore) And Online
            Training With us And Master Data Analytics Skills Which Will help
            you to transform your career and start your career as data
            scientist.
          </p>
          <span style={{ display: "flex", marginTop: "20px" }}>
            <IoMailSharp className="bIcons" />
            <Link href="mailto:contacts@learnbay.co">contacts@learnbay.co</Link>
          </span>
          <span style={{ display: "flex", marginTop: "10px" }}>
            <BsFillTelephoneFill className="bIcons" />
            <Link href="tel:+918123327570">(+91) 81233 27570</Link>
          </span>
          {/* <div className={styles.FooterSocial}>
                <FaTwitter className="bIcons"  />
                <FaFacebookF className="bIcons"  />
                <FaLinkedinIn className="bIcons"  />
                <FaYoutube className="bIcons"  />
                <FaInstagram className="bIcons"  />
              </div> */}
        </div>
        <div className={styles.FooterDivInner}>
          <p className={styles.FooterInnerP}>Popular Courses</p>
          <p className={styles.FooterInnerli} style={{ display: "flex" }}>
            <FaCheck className="bIcons" />
            Advance Data Science & AI Certification
          </p>
          <p className={styles.FooterInnerli} style={{ display: "flex" }}>
            <FaCheck className="bIcons" />
            Advance AI & ML Certification
          </p>
          <p className={styles.FooterInnerli} style={{ display: "flex" }}>
            <FaCheck className="bIcons" />
            Data Science & AI Cert. For Managers & Leaders
          </p>
          <p className={styles.FooterInnerli} style={{ display: "flex" }}>
            <FaCheck className="bIcons" />
            Data Science and AI Master Program
          </p>
        </div>
        <div className={styles.FooterDivInner}>
          <p className={styles.FooterInnerP}>Find Us Here</p>
          <p className={styles.FooterInnerli}>
            #1090 , 1st floor, 18th cross road HSR layout sector 3, Bangalore -
            560102 (Above Sangam Sweets)
          </p>
          {/* <Grid item xs={12} md={12} sx={{ height: "200px", width: "100px" }}>
                <GoogleMapReact
                  bootstrapURLKeys={{ key: "AIzaSyB5eZjplt5xQnMe2e95aIB9NkTnpyZ-cB0" }}
                  defaultCenter={{
                    lat: 12.924735788872667,
                    lng: 77.631741
                  }}
                  defaultZoom={10}
                  
                >
                  <RoomIcon
                    lat={12.944812455402625}
                    lng={77.63998074606795}
                    style={{ color: "red", fontSize: "35px" }}
                  />
                </GoogleMapReact>
              </Grid> */}
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

export default React.memo(Footer);
