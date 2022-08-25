import React, { useState } from "react";
import styles from "./Batch.module.css";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { BsFillCircleFill } from "react-icons/bs";

import { BiCheck } from "react-icons/bi";
import { MdDateRange } from "react-icons/md";
import { AiOutlineBars } from "react-icons/ai";
import { BiTimeFive } from "react-icons/bi";
import Popup from "/Components/Popup/Popup";
import Form from "/Components/Form/Form";

function Batch({
  syllabus,
  CourseFeeHead,
  CourseFeePara,
  CourseFeelist1,
  CourseFeelist2,
  CourseFeelist3,
  CourseFeelist4,
  CourseFeelist5,
}) {

  const [popups, setPopups] = useState(false);


  const [state, setState] = useState(syllabus);

  const popupShow = () => {
    setPopups(true);
  };

  const handleChange = (index) => {
    setState(
      state.map((faq, i) => {
        if (i === index) {
          faq.Module0.open = !faq.Module0.open;
        } else {
          faq.Module0.open = false;
        }
        return faq;
      })
    );
  };

  return (
    <section className={styles.Syllabus}>

      <Popup trigger={popups} setTrigger={setPopups} className="popupModal">
        <div className="leftPopup">
          <div className="whiteP" />
        </div>
        <div className="RightPopup">
          <h5>Apply For Counselling</h5>
          <Form popup={true} setTrigger={setPopups} />
        </div>
      </Popup>
      <h4 style={{ marginBottom: "30px" }}>{CourseFeeHead}</h4>

      <div className={styles.mobileView}>
        <div className={styles.syllabusLeft}>
          {state.map((syllabusData, i) => {
            const { Module0 } = syllabusData;
            return (
              <div key={Module0.title}>
                <div className={styles.QOuter}>
                  <div className={styles.QInner}>
                    <div className={styles.line}>
                      <BsFillCircleFill className={styles.bIcons} />
                    </div>
                    <div
                      className={styles.FaqWrapper}
                      onClick={() => {
                        let id = i;
                        handleChange(id);
                      }}
                      key={Module0.title}
                    >
                      {Module0.open ? (
                        <div className={styles.quesO}>
                          <h2>{Module0.title}</h2>

                          <span>
                            {Module0.open ? (
                              <AiOutlineMinus className="icon" />
                            ) : (
                              <AiOutlinePlus className="icon" />
                            )}
                          </span>
                        </div>
                      ) : (
                        <div className={styles.ques}>
                          <h2>{Module0.title}</h2>
                          <span>
                            {Module0.open ? (
                              <AiOutlineMinus className="icon" />
                            ) : (
                              <AiOutlinePlus className="icon" />
                            )}
                          </span>
                        </div>
                      )}

                      {Module0.open ? (
                        <div className={styles.ans}>
                          <p>{Module0.desc}</p>
                          {Module0.content.map((content, i) => {
                            return (
                              <div key={content.chap.title}>
                                <h5>{content.chap.title}</h5>
                                {content.chap.desc.map((desc, i) => {
                                  return (
                                    <div key={i}>
                                      {desc === "" ? (
                                        ""
                                      ) : (
                                        <li key={desc}>{desc}</li>
                                      )}
                                    </div>
                                  );
                                })}
                              </div>
                            );
                          })}
                        </div>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
          <div className={styles.white} />
        </div>
      </div>


      <div className={styles.desktopView}>
        <div className={styles.CourseFee}>
          <div className={styles.heading}>
            <p className={styles.phead}>{CourseFeePara}</p>
          </div>
          <div className={styles.listcheck}>
            <p className={styles.list}><BiCheck className={styles.icon} />{CourseFeelist1}</p>
            <p className={styles.list}><BiCheck className={styles.icon} />{CourseFeelist2}</p>
            <p className={styles.list}><BiCheck className={styles.icon} />{CourseFeelist3}</p>
            <p className={styles.list}><BiCheck className={styles.icon} />{CourseFeelist4}</p>
          </div>
          <div className={styles.batch}>
            <div className={styles.BatchDetailsTop}>
              <div>
                <div className={styles.BatchDetails}>
                  <p className={styles.list}><AiOutlineBars className={styles.icon} /><b>Batch Type</b></p>
                  <p className={styles.list}>Weekend Batch (Sat-Sun)</p>
                  <p className={styles.list}>Weekday Batch (Mon-Fri)</p>
                  <p className={styles.list}>Weekday Batch (Mon-Fri)</p>
                </div>
              </div>
              <div>
                <div className={styles.BatchDetails}>
                  <p className={styles.list}><MdDateRange className={styles.icon} /><b>Date</b></p>
                  <p className={styles.list}>21st August 2022</p>
                  <p className={styles.list}>25th August 2022</p>
                  <p className={styles.list}>26th August 2022</p>
                </div>
              </div>
              <div>
                <div className={styles.BatchDetails}>
                  <p className={styles.list}><BiTimeFive className={styles.icon} /><b>Time</b></p>
                  <p className={styles.list}>08.30 a.m. to 12.00 p.m.</p>
                  <p className={styles.list}>08:00 a.m. to 10:00 a.m.</p>
                  <p className={styles.list}>08:00 p.m. to 10:00 p.m.</p>
                </div>
              </div>
              <div className={styles.btnWrapper}>
                <button onClick={popupShow}>Enroll Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}


export default Batch