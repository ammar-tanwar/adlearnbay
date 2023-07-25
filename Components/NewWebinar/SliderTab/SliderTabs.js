import React, { useState, useEffect } from "react";
import "swiper/css";
import "swiper/css/pagination";
import styles from "./SliderTab.module.css";
import Image from "next/image";
import { BiDownArrowAlt, BiUpArrowAlt } from "react-icons/bi";
import { FaCheck, FaLinkedin, FaUser, FaUserAlt } from "react-icons/fa";

const SliderTabs = () => {
  const [viewAll, setViewAll] = useState(false);
  const [oneYear, setOneYear] = useState();
  const [nonTech, setNonTech] = useState(false);
  const [Guarantee, setGuarantee] = useState(false);
  const [Retail, setRetail] = useState(false);
  const [Oil, setOil] = useState(false);
  const [Stack, setStack] = useState(false);
  const [mobile, setMobile] = useState(false);
  const [tab, setTab] = useState(false);

  useEffect(() => {
    let width = window.innerWidth;
    if (width < 600) {
      setMobile(true);
    }
  });

  useEffect(() => {
    let width = window.innerWidth;
    if (width < 960) {
      setTab(true);
    }
  });

  useEffect(() => {
    let width = window.innerWidth;
    if (width > 960) {
      setOneYear(true);
    }
  }, [0]);

  return (
    <div className={styles.Course} id="course">
      <div className={styles.courses}>
        <div className={styles.listPanel}>
          <span
            onClick={() => {
              setRetail(false);
              setOneYear(true);
              setNonTech(false);
              setStack(false);
            }}
            className={oneYear ? styles.ActiveSpan : styles.span}
          >
            About this Mastercalss
            {mobile ? oneYear ? <BiUpArrowAlt /> : <BiDownArrowAlt /> : ""}
          </span>
          {oneYear ? (
            <div className={styles.gridPanel}>
              <div className={styles.left}>
                <p className={styles.para}>
                  Bookmyshow, one of the most popular movie ticket booking apps,
                  has built its platform using a well-designed Low Level Design
                  architecture. LLD has helped them create a user-friendly
                  interface that efficiently handles high volumes of traffic,
                  transactions, and user requests.
                </p>

                <p className={styles.para}>
                  Our masterclass will teach you to design a Movie-Ticket
                  Booking App similar to Bookmyshow, by understanding their LLD
                  principles, identifying key features, and ensuring optimal
                  performance, scalability, and security.
                </p>

                <p className={styles.para}>
                  Whether you are an experienced developer or a beginner, we
                  will help you build a successful platform that stands out in
                  today's competitive market.
                </p>
              </div>
            </div>
          ) : (
            ""
          )}
          <span
            onClick={() => {
              setRetail(false);
              setOneYear(false);
              setNonTech(true);
              setStack(false);
            }}
            className={nonTech ? styles.ActiveSpan : styles.span}
          >
            Topics covered
            {mobile ? nonTech ? <BiUpArrowAlt /> : <BiDownArrowAlt /> : ""}
          </span>
          {nonTech ? (
            <div className={styles.gridPanel}>
              <div className={styles.left}>
                <div className={styles.icondiv}>
                  <p className={styles.pdivCheck}>
                    <FaCheck className={styles.faIcon} />
                    Building the Foundation of Your Resume
                  </p>
                  <p className={styles.pdivCheck}>
                    <FaCheck className={styles.faIcon} />
                    Building the Foundation of Your Resume
                  </p>
                  <p className={styles.pdivCheck}>
                    <FaCheck className={styles.faIcon} />
                    Building the Foundation of Your Resume
                  </p>
                  <p className={styles.pdivCheck}>
                    <FaCheck className={styles.faIcon} />
                    Building the Foundation of Your Resume
                  </p>
                  <p className={styles.pdivCheck}>
                    <FaCheck className={styles.faIcon} />
                    Building the Foundation of Your Resume
                  </p>
                  <p className={styles.pdivCheck}>
                    <FaCheck className={styles.faIcon} />
                    Building the Foundation of Your Resume
                  </p>
                </div>
              </div>
            </div>
          ) : (
            ""
          )}
          <span
            onClick={() => {
              setRetail(false);
              setOneYear(false);
              setNonTech(false);
              setStack(true);
            }}
            className={Stack ? styles.ActiveSpan : styles.span}
          >
            Speaker
            {mobile ? Stack ? <BiUpArrowAlt /> : <BiDownArrowAlt /> : ""}
          </span>
          {Stack ? (
            <div className={styles.gridPanel}>
              <div className={styles.left}>
              <div className={styles.author}>
                <div className={styles.right}>
                  <Image
                    src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/Trainer-Priya.webp"
                    width="196"
                    height="230"
                  />
                </div>
                <div>
                  <p className={styles.para}>Speaker</p>
                  <p className={styles.para}>
                    <b>Priya Vajpeyi</b>
                  </p>
                  <p className={styles.para} style={{ color: "#0072BC" }}>
                    Career coach<span className={styles.paraLinked}>
                      <FaLinkedin className={styles.iconLink} />2,00,000+
                    </span>{" "}
                  
                  </p>
                </div>
              </div>
              </div>
            </div>
          ) : (
            ""
          )}
          <span
            onClick={() => {
              setRetail(true);
              setOneYear(false);
              setNonTech(false);
              setStack(false);

              console.log(Retail);
            }}
            className={Retail ? styles.ActiveSpan : styles.span}
          >
            This webinar is for
            {mobile ? Retail ? <BiUpArrowAlt /> : <BiDownArrowAlt /> : ""}
          </span>
          {Retail ? (
            <div className={styles.gridPanel}>
              <div className={styles.left}>
              <div className={styles.icondiv}>
                  <p className={styles.pdivCheck}>
                    <FaUserAlt className={styles.faIcon} />
                    Building the Foundation of Your Resume
                  </p>
                  <p className={styles.pdivCheck}>
                    <FaUserAlt className={styles.faIcon} />
                    Building the Foundation of Your Resume
                  </p>
                  <p className={styles.pdivCheck}>
                    <FaUserAlt className={styles.faIcon} />
                    Building the Foundation of Your Resume
                  </p>
                  <p className={styles.pdivCheck}>
                    <FaUserAlt className={styles.faIcon} />
                    Building the Foundation of Your Resume
                  </p>
                  <p className={styles.pdivCheck}>
                    <FaUserAlt className={styles.faIcon} />
                    Building the Foundation of Your Resume
                  </p>
                  <p className={styles.pdivCheck}>
                    <FaUserAlt className={styles.faIcon} />
                    Building the Foundation of Your Resume
                  </p>
                </div>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
        <div className={styles.middlePanel}>
          {oneYear ? (
            <div className={styles.gridPanel}>
              <div className={styles.left}>
                <p className={styles.para}>
                  Bookmyshow, one of the most popular movie ticket booking apps,
                  has built its platform using a well-designed Low Level Design
                  architecture. LLD has helped them create a user-friendly
                  interface that efficiently handles high volumes of traffic,
                  transactions, and user requests.
                </p>

                <p className={styles.para}>
                  Our masterclass will teach you to design a Movie-Ticket
                  Booking App similar to Bookmyshow, by understanding their LLD
                  principles, identifying key features, and ensuring optimal
                  performance, scalability, and security.
                </p>

                <p className={styles.para}>
                  Whether you are an experienced developer or a beginner, we
                  will help you build a successful platform that stands out in
                  today's competitive market.
                </p>
              </div>
            </div>
          ) : (
            ""
          )}
          {nonTech ? (
            <div className={styles.gridPanel}>
              <div className={styles.left}>
                <div className={styles.icondiv}>
                  <p className={styles.pdivCheck}>
                    <FaCheck className={styles.faIcon} />
                    Building the Foundation of Your Resume
                  </p>
                  <p className={styles.pdivCheck}>
                    <FaCheck className={styles.faIcon} />
                    Building the Foundation of Your Resume
                  </p>
                  <p className={styles.pdivCheck}>
                    <FaCheck className={styles.faIcon} />
                    Building the Foundation of Your Resume
                  </p>
                  <p className={styles.pdivCheck}>
                    <FaCheck className={styles.faIcon} />
                    Building the Foundation of Your Resume
                  </p>
                  <p className={styles.pdivCheck}>
                    <FaCheck className={styles.faIcon} />
                    Building the Foundation of Your Resume
                  </p>
                  <p className={styles.pdivCheck}>
                    <FaCheck className={styles.faIcon} />
                    Building the Foundation of Your Resume
                  </p>
                </div>
              </div>
            </div>
          ) : (
            ""
          )}
          {Stack ? (
            <div className={styles.gridPanel}>
              <div className={styles.author}>
                <div className={styles.right}>
                  <Image
                    src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/Trainer-Priya.webp"
                    width="196"
                    height="230"
                  />
                </div>
                <div>
                  <p className={styles.para}>Speaker</p>
                  <p className={styles.para}>
                    <b>Priya Vajpeyi</b>
                  </p>
                  <p className={styles.para} style={{ color: "#0072BC" }}>
                    Career coach 
                    <span>
                      <FaLinkedin style={{ marginBottom: "-10px" }} />
                    </span>{" "}
                    2,00,000+
                  </p>
                </div>
              </div>
            </div>
          ) : (
            ""
          )}
          {Retail ? (
            <div className={styles.gridPanel}>
              <div className={styles.left}>
              <div className={styles.icondiv}>
                  <p className={styles.pdivCheck}>
                    <FaUserAlt className={styles.faIcon} />
                    Building the Foundation of Your Resume
                  </p>
                  <p className={styles.pdivCheck}>
                    <FaUserAlt className={styles.faIcon} />
                    Building the Foundation of Your Resume
                  </p>
                  <p className={styles.pdivCheck}>
                    <FaUserAlt className={styles.faIcon} />
                    Building the Foundation of Your Resume
                  </p>
                  <p className={styles.pdivCheck}>
                    <FaUserAlt className={styles.faIcon} />
                    Building the Foundation of Your Resume
                  </p>
                  <p className={styles.pdivCheck}>
                    <FaUserAlt className={styles.faIcon} />
                    Building the Foundation of Your Resume
                  </p>
                  <p className={styles.pdivCheck}>
                    <FaUserAlt className={styles.faIcon} />
                    Building the Foundation of Your Resume
                  </p>
                </div>
              </div>
            </div>
          ) : (
            ""
          )}
      </div>
    </div>
    </div>
    );
};

export default SliderTabs;
