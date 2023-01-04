import React, { useState } from "react";
import styles from "./SyllabusSection.module.css";
import { FaDownload } from "react-icons/fa";
import { MdOutlineOndemandVideo } from "react-icons/md";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { RiProjector2Line } from "react-icons/ri";
import { BiBadgeCheck } from "react-icons/bi";
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
            Download Syllabus
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
          <div className={styles.pSpanDiv}>
            <p className={styles.pH}>Module 0</p>
            <div className={styles.roundLine}>
              <div className={styles.round}></div>
              <div className={styles.line}></div>
            </div>
            <p className={styles.p}>
              Preparatory Classes (Programming + Maths)
            </p>
          </div>
          <div className={styles.pSpanDiv}>
            <p className={styles.pH}>Module 1</p>
            <div className={styles.roundLine}>
              <div className={styles.round}></div>
              <div className={styles.line}></div>
            </div>
            <p className={styles.p}>Python for Data Science</p>
          </div>
          <div className={styles.pSpanDiv}>
            <p className={styles.pH}>Module 2</p>
            <div className={styles.roundLine}>
              <div className={styles.round}></div>
              <div className={styles.line}></div>
            </div>
            <p className={styles.p}>Statistics and Machine Learning</p>
          </div>
          <div className={styles.pSpanDiv}>
            <p className={styles.pH}>Module 3</p>
            <div className={styles.roundLine}>
              <div className={styles.round}></div>
              <div className={styles.line}></div>
            </div>
            <p className={styles.p}>Data Science Course Tools</p>
          </div>
          <div className={styles.pSpanDiv}>
            <p className={styles.pH}>Module 4</p>
            <div className={styles.roundLine}>
              <div className={styles.round}></div>
              <div className={styles.lineL}></div>
            </div>
            <p className={styles.p}>Artificial Intelligence Tools</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SyllabusSection;
