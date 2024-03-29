import React, { useState } from "react";
import styles from "./SyllabusNew.module.css";
import { MdOutlineLiveTv, MdOutlineLaptopMac } from "react-icons/md";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { FaDownload, FaArrowRight } from "react-icons/fa";
import {
  AiOutlineFundProjectionScreen,
  AiOutlineFieldTime,
} from "react-icons/ai";
import Form from "../../Form/Form";
import { BsFillCircleFill } from "react-icons/bs";
import Popup from "../../Popup/Popup";
import FormOtp from "../../FormOtp/FormOtp";

function SyllabusNew({
  syllabus,
  syllabusDesc,
  popupHead,
  dataScience,
  redirectDs,
  redirectFs,
  redirectDe,
  redirectBa,
  redirectBl,
  project,
  hours,
  CSyllabus,
  CourseHighlights,
  fsdlink,
  formotp,
  syllabusFormotp,
  formotpForS3DS,
  s2dataScience,
  fullstackADS,
  marketing,
}) {
  const [popups, setPopups] = useState(false);

  const popupShow = () => {
    setPopups(true);
  };

  const [state, setState] = useState(syllabus);

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
    <section className={styles.Syllabus} id="syllabus">
      <Popup
        trigger={popups}
        setTrigger={setPopups}
        className="popupModal"
        downloadBrochure
      >
        <div className="leftPopup">
          <div
            className="whiteP"
            style={{ width: "350px", height: "400px" }}
          ></div>
        </div>
        <div className="RightPopup">
          <h5>{popupHead}</h5>

          {formotpForS3DS ? (
            <FormOtp popup={true} />
          ) : (
            <>
              {formotp ? (
                <FormOtp
                  popup={true}
                  s2dataScience={s2dataScience}
                  fullstackADS={fullstackADS}
                  marketing={marketing}
                />
              ) : (
                <Form
                  setTrigger={setPopups}
                  downloadBrochure
                  upSkillingHide={true}
                />
              )}
            </>
          )}
        </div>
      </Popup>

      <div className={styles.syllabusLeft}>
        <div className={styles.Syllabusbutton}>
          <div>
            <h4>{CSyllabus}</h4>
          </div>

          <div className={styles.btnWrapper}>
            {fsdlink ? (
              <a href="https://calendly.com/learnbay-apply-for-counselling/one_on_one_session">
                <button style={{ margin: "auto" }}>
                  <FaDownload className="bIcons" />
                  Syllabus Brochure
                </button>
              </a>
            ) : (
              <button
                onClick={popupShow}
                style={{ margin: "auto" }}
                className={styles.btn}
              >
                <FaDownload className="bIcons" />
                Syllabus Brochure
              </button>
            )}
          </div>
        </div>
        <p>{syllabusDesc}</p>
        <div className={styles.PProgram}>
          <p>
            <span> {CourseHighlights}</span>
          </p>
        </div>
        <div className={styles.PProgrammain}>
          <div className={styles.PProgramInner}>
            <div>
              <MdOutlineLiveTv className={styles.PIcons} />
              <p className={styles.cContent}>
                {hours}
                <br />
                <span>Live sessions</span>
              </p>
            </div>
            <div>
              <AiOutlineFundProjectionScreen className={styles.PIcons} />
              <p className={styles.cContent}>
                {project}
                <br />
                <span>Industrial Projects</span>
              </p>
            </div>
            <div>
              <AiOutlineFieldTime className={styles.PIcons} />
              <p className={styles.cContent}>
                Lifetime <br />
                <span>accessibility</span>
              </p>
            </div>
            <div>
              <MdOutlineLaptopMac className={styles.PIcons} />
              <p className={styles.cContent}>
                Live project <br />
                <span>experience</span>
              </p>
            </div>
          </div>
        </div>
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

      <div>
        <div className={styles.syllabusRight}>
          <div className={styles.PProgrammains} style={{ marginTop: "20px" }}>
            <div className={styles.PPrograms}>
              <h5>
                Requ<span>est More Inform</span>ation
              </h5>
            </div>
            <div className={styles.PProgramInners}>
              {syllabusFormotp ? (
                <>
                  {formotpForS3DS ? (
                    <FormOtp popup={true} />
                  ) : (
                    <>
                      <FormOtp
                        s2dataScience={s2dataScience}
                        fullstackADS={fullstackADS}
                        marketing={marketing}
                      />
                    </>
                  )}
                </>
              ) : (
                <>
                  {fsdlink ? (
                    <a href="https://calendly.com/learnbay-apply-for-counselling/one_on_one_session">
                      <button style={{ marginLeft: "40px" }}>
                        Apply for Counselling
                        <FaArrowRight style={{ marginLeft: "10px" }} />
                      </button>
                    </a>
                  ) : (
                    <>
                      {formotp ? (
                        <FormOtp
                          popup={true}
                          s2dataScience={s2dataScience}
                          fullstackADS={fullstackADS}
                          marketing={marketing}
                        />
                      ) : (
                        <Form
                          redirectDs={redirectDs}
                          redirectFs={redirectFs}
                          redirectBa={redirectBa}
                          redirectBl={redirectBl}
                          redirectDe={redirectDe}
                        />
                      )}
                    </>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SyllabusNew;
