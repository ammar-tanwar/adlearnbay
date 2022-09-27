import {React, useState} from "react";
import styles from "./WhyLearnbay.module.css";
import { AiOutlineCheck } from "react-icons/ai";
import Image from "next/image";
import { IoCallOutline } from "react-icons/io5";
import Popup from "../../Popup/Popup";
import Form from "../../Form/Form";
import { FaArrowRight, FaDownload } from "react-icons/fa";
const WhyLearnbay = () => {


  const [popups, setPopups] = useState(false);

  const popupShow = () => {
    setPopups(true);
  };

  return (
    <section className={styles.WhyLearnbay}>

    <Popup trigger={popups} setTrigger={setPopups} className="popupModal">
        <div className="leftPopup">
          <div className="whiteP" />
        </div>
        <div className="RightPopup">
          <h5>Apply For Counselling</h5>
         
          <Form setTrigger={setPopups} radio={true} />
        </div>
      </Popup>
      <h4>Why Learnbay?</h4>
      <div className={styles.divList}>
        <p className={styles.list}>
          <AiOutlineCheck className={styles.tickIcon} />
          Designed for Working Professionals
        </p>
        <p className={styles.list}>
          <AiOutlineCheck className={styles.tickIcon} />
          Industry-targeted Syllabus
        </p>
      </div>
      <div className={styles.FirstDiv}>
        <div className={styles.FirstImg}></div>
        <div className={styles.FirstText}>
          <h3>Project Innovation Lab</h3>
          <p className={styles.list}>
            Work on Industry Certified Project in offline mode in multiple
            cities across India. Collaborate with Project Mentors and other
            learners to get hands-on experience.
          </p>
          <div className={styles.DivIcon}>
            <div className={styles.iconBox}>
              <Image
                src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/Live-classes-home-section.svg"
                width="50"
                height="50"
                layout="intrinsic"
                 alt="data science course in bangalore"
              />
              <p>
                Live 1:1 - Resolve any doubts about projects and assignments
              </p>
            </div>
            <div className={styles.iconBox}>
              <Image
                src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/why-learnbay-project.svg"
                width="50"
                height="50"
                layout="intrinsic"
                 alt="data science course in bangalore"
              />
              <p>Extensive hands-on expertise across several domains</p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.MiddleDiv}>
        <div className={styles.FirstText}>
          <h3>Domain Specialized Projects</h3>
          <p className={styles.list}>
            Work with real-time data sets gathered from renowned data sources
            provided by startups and MNCs in India.
          </p>
          <div className={styles.DivIcon}>
            <div className={styles.iconBox}>
              <img
                src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/Live-classes-home-alt.svg"
                width="40"
                height="40"
                loading="lazy"
                alt="data science course"
              />
              <p>Get certificate from IBM for your capstone project</p>
            </div>
            <div className={styles.iconBox}>
              <img
                src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/domain-in-why-learnbay.svg"
                width="40"
                height="40"
                loading="lazy"
                alt="data science course"
              />
              <p>
                Create visually appealing and industry-demanding project
                portfolio
              </p>
            </div>
            <div className={styles.ButtonDiv}>
            <div className={styles.btnWrapper}>
              <button onClick={popupShow}>
                Apply for Counselling
                <FaArrowRight style={{ marginLeft: "10px" }} />
              </button>
            </div>
            
  
          </div>
          </div>
        </div>
        <div className={styles.MiddleImg}>
          <Image
            src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/domain-specialized.png"
            width="656"
            height="457"
            layout="intrinsic"
             alt="data science course in bangalore"
          />
        </div>
      </div>
    </section>
  );
};

export default WhyLearnbay;
