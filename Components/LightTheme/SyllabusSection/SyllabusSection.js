import React, { useState } from "react";
import styles from "./SyllabusSection.module.css";
import {
  FaDownload,
  FaTools,
  FaCode,
  FaPython,
  FaArrowDown,
  FaArrowUp,
} from "react-icons/fa";
import { MdOutlineOndemandVideo, MdExtension } from "react-icons/md";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { RiProjector2Line } from "react-icons/ri";
import { BiBadgeCheck } from "react-icons/bi";
import { FiArrowRight } from "react-icons/fi";
import { ImStatsBars } from "react-icons/im";
import { GiArtificialIntelligence } from "react-icons/gi";
import Popup from "../../Popup/Popup";
import Form from "../../Form/Form";

function SyllabusSection() {
  const [popups, setPopups] = useState(false);

  const popupShow = () => {
    setPopups(true);
  };
  const [showMe, setShowMe] = useState(false);
  function toggle() {
    setShowMe(!showMe);
  }
  return (
    <section className={styles.Syllabus}>
      <Popup trigger={popups} setTrigger={setPopups} className="popupModal">
        <div className="leftPopup">
          <div className="whiteP" />
        </div>
        <div className="RightPopup">
          <h5>Download Brochure</h5>
          <Form popup={true} downloadBrochure setTrigger={setPopups} />
        </div>
      </Popup>
      <div className={styles.leftDiv}>
        <div className={styles.buttonHead}>
        <h1>Syllabus</h1>
        <button onClick={popupShow} className={styles.button}>
          Download Brochure
          <FaDownload className={styles.icon} />
        </button>
        </div>
        <p className={styles.desc}>
          Learnbay provides Live, Interactive Online Sessions guided by
          Professionals working in top MNCs. All Data Science Course sessions
          are covered practically with real-time industrial projects and case
          studies.
        </p>
        <div className={styles.twoBox}>
          <div className={styles.twoBoxDivWhite}>
            <MdOutlineOndemandVideo className={styles.IconBoxBlue} />
            <p className={styles.whitep}>
              <span>250+ Hours</span>
              <br />
              Live sessions
            </p>
          </div>
          <div className={styles.twoBoxDivWhite}>
            <BiBadgeCheck className={styles.IconBoxBlue} />
            <p className={styles.whitep}>
              <span>Lifetime</span>
              <br />
              accessibility
            </p>
          </div>
          <div className={styles.twoBoxDivWhite}>
            <AiOutlineFundProjectionScreen className={styles.IconBoxBlue} />
            <p className={styles.whitep}>
              <span>12+ projects</span>
              <br />
              Real Time
            </p>
          </div>
          <div className={styles.twoBoxDivWhite}>
            <RiProjector2Line className={styles.IconBoxBlue} />
            <p className={styles.whitep}>
              <span>Live project</span>
              <br />
              experience
            </p>
          </div>
        </div>
      </div>
      <div className={styles.rightDiv}>
        <div className={styles.rightDiv1}>
          <div className={styles.boxDiv}>
            <div className={styles.topHead}>
              <FaCode className={styles.iconBlue} />
            </div>
            <div>
              <p className={styles.Hp}>
                Module 0 :- Preparatory Classes (Programming + Maths)
              </p>
              <div className={styles.pFlex}>
                <p className={styles.p}>
                  <FiArrowRight className={styles.iconCheck} />
                  Cohort Orientation
                </p>
                <p className={styles.p}>
                  <FiArrowRight className={styles.iconCheck} />
                  Fundamentals of Programming
                </p>
                <p className={styles.p}>
                  <FiArrowRight className={styles.iconCheck} />
                  Fundamentals of Statistics
                </p>
              </div>
            </div>
          </div>
          <div className={styles.boxDiv}>
            <div className={styles.topHead}>
              <FaPython className={styles.iconBlue} />
            </div>
            <div>
              <p className={styles.Hp}>Term 1 :- Python for Data Science</p>
              <div className={styles.pFlex}>
                <p className={styles.p}>
                  <FiArrowRight className={styles.iconCheck} />
                  Python Programming
                </p>
              </div>
            </div>
          </div>
          <div className={styles.boxDiv}>
            <div className={styles.topHead}>
              <ImStatsBars className={styles.iconBlue} />
            </div>
            <div>
              <p className={styles.Hp}>
                Term 2 :- Statistics and Machine Learning
              </p>
              <div className={styles.pFlex}>
                <p className={styles.p}>
                  <FiArrowRight className={styles.iconCheck} />
                  Statistics
                </p>
                <p className={styles.p}>
                  <FiArrowRight className={styles.iconCheck} />
                  Machine Learning
                </p>
              </div>
            </div>
          </div>
          <div
            style={{
              display: showMe ? "block" : "none",
            }}
          >
            <div className={styles.boxDiv}>
              <div className={styles.topHead}>
                <FaTools className={styles.iconBlue} />
              </div>
              <div>
                <p className={styles.Hp}>Term 3 :- Data Science Course Tools</p>
                <div className={styles.pFlex}>
                  <p className={styles.p}>
                    <FiArrowRight className={styles.iconCheck} />
                    SQL
                  </p>
                  <p className={styles.p}>
                    <FiArrowRight className={styles.iconCheck} />
                    MongoDB
                  </p>
                  <p className={styles.p}>
                    <FiArrowRight className={styles.iconCheck} />
                    Tableau
                  </p>
                  <p className={styles.p}>
                    <FiArrowRight className={styles.iconCheck} />
                    PowerBI
                  </p>
                  <p className={styles.p}>
                    <FiArrowRight className={styles.iconCheck} />
                    Big Data & Spark Analytics
                  </p>
                  <p className={styles.p}>
                    <FiArrowRight className={styles.iconCheck} />
                    Time Series
                  </p>
                </div>
              </div>
            </div>
            <div className={styles.boxDiv}>
              <div className={styles.topHead}>
                <MdExtension className={styles.iconBlue} />
              </div>
              <div>
                <p className={styles.Hp}>
                  Term 4 :- Artificial Intelligence Tools
                </p>
                <div className={styles.pFlex}>
                  <p className={styles.p}>
                    <FiArrowRight className={styles.iconCheck} />
                    Deep Learning Using Tensorflow
                  </p>
                  <p className={styles.p}>
                    <FiArrowRight className={styles.iconCheck} />
                    Natural Language Processing (NLP)
                  </p>
                  <p className={styles.p}>
                    <FiArrowRight className={styles.iconCheck} />
                    Model Training & Deployment Using (AWS GCP)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <a className={styles.btnout} style={{ marginTop: "20px" }} onClick={toggle}>
                        {showMe ? (

                          <span>Show less
                            <FaArrowUp className={styles.icon}/>
                          </span>
                        ) : (
                          <span>Show more
                            <FaArrowDown className={styles.icon}/>
                          </span>
                        )
                        }

                      </a>
        <div className={styles.rightDiv2}></div>
      </div>
    </section>
  );
}

export default SyllabusSection;
