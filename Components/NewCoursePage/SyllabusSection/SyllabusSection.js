import React, { useState } from "react";
import styles from "./SyllabusSection.module.css";
import { FaDownload } from "react-icons/fa";
import { MdOutlineOndemandVideo } from "react-icons/md";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { RiProjector2Line } from "react-icons/ri";
import { BiBadgeCheck } from "react-icons/bi";
import Popup from "../../Popup/Popup";
import Form from "../../Form/Form";
import FormOtp from "../../FormOtp/FormOtp";
function SyllabusSection({
  desc,
  Hours,
  Projects,
  Module0,
  Module1,
  Module2,
  Module3,
  Module4,
  formotp,
  fullStackCont,
  s2dataScience,
  fullstackADS,
  marketing,
  grad,
  jobDescription,
  workExperience,
  jobPlacee,
  upSkilling,
}) {
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
      <Popup
        trigger={popups}
        setTrigger={setPopups}
        className="popupModal"
        downloadBrochure
      >
        <div className="leftPopup">
          <div className="whiteP" />
        </div>
        <div className="RightPopup">
          <h5>Download Brochure</h5>
          {formotp ? (
            <FormOtp
              popup={true}
              downloadBrochure
              s2dataScience={s2dataScience}
              fullstackADS={fullstackADS}
              marketing={marketing}
              grad={grad}
              jobDescription={jobDescription}
              workExperience={workExperience}
            />
          ) : (
            <Form setTrigger={setPopups} downloadBrochure jobPlacee={jobPlacee} workExperience={workExperience}/>
          )}
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
        <p className={styles.desc}>{desc}</p>
        <div className={styles.twoBox}>
          <div className={styles.twoBoxDivWhite}>
            <MdOutlineOndemandVideo className={styles.IconBoxBlue} />
            <p className={styles.whitep}>
              <span>{Hours}</span>
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
              <span>{Projects}</span>
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
        {fullStackCont ? (
          <div className={styles.rightDiv1}>
            <div className={styles.pSpanDiv}>
              <p className={styles.pH}>Term 0</p>
              <div className={styles.roundLine}>
                <div className={styles.round}></div>
                <div className={styles.line}></div>
              </div>
              <p className={styles.p}>{Module0}</p>
            </div>
            <div className={styles.pSpanDiv}>
              <p className={styles.pH}>Term 1</p>
              <div className={styles.roundLine}>
                <div className={styles.round}></div>
                <div className={styles.line}></div>
              </div>
              <p className={styles.p}>{Module1}</p>
            </div>
            <div className={styles.pSpanDiv}>
              <p className={styles.pH}>Term 2</p>
              <div className={styles.roundLine}>
                <div className={styles.round}></div>
                <div className={styles.line}></div>
              </div>
              <p className={styles.p}>{Module2}</p>
            </div>
            <div className={styles.pSpanDiv}>
              <p className={styles.pH}>Term 3</p>
              <div className={styles.roundLine}>
                <div className={styles.round}></div>
                <div className={styles.lineL}></div>
              </div>
              <p className={styles.p}>{Module3}</p>
            </div>
          </div>
        ) : (
          <div className={styles.rightDiv1}>
            <div className={styles.pSpanDiv}>
              <p className={styles.pH}>Module 0</p>
              <div className={styles.roundLine}>
                <div className={styles.round}></div>
                <div className={styles.line}></div>
              </div>
              <p className={styles.p}>{Module0}</p>
            </div>
            <div className={styles.pSpanDiv}>
              <p className={styles.pH}>Module 1</p>
              <div className={styles.roundLine}>
                <div className={styles.round}></div>
                <div className={styles.line}></div>
              </div>
              <p className={styles.p}>{Module1}</p>
            </div>
            <div className={styles.pSpanDiv}>
              <p className={styles.pH}>Module 2</p>
              <div className={styles.roundLine}>
                <div className={styles.round}></div>
                <div className={styles.line}></div>
              </div>
              <p className={styles.p}>{Module2}</p>
            </div>
            <div className={styles.pSpanDiv}>
              <p className={styles.pH}>Module 3</p>
              <div className={styles.roundLine}>
                <div className={styles.round}></div>
                <div className={styles.line}></div>
              </div>
              <p className={styles.p}>{Module3}</p>
            </div>
            <div className={styles.pSpanDiv}>
              <p className={styles.pH}>Module 4</p>
              <div className={styles.roundLine}>
                <div className={styles.round}></div>
                <div className={styles.lineL}></div>
              </div>
              <p className={styles.p}>{Module4}</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
export default SyllabusSection;
