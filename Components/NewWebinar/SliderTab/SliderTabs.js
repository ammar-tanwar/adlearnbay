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
              setOil(false);
            }}
            className={oneYear ? styles.ActiveSpan : styles.span}
          >
            About this Mastercalss
            {mobile ? (
              oneYear ? (
                <BiUpArrowAlt className={styles.iconArrow} />
              ) : (
                <BiDownArrowAlt className={styles.iconArrow} />
              )
            ) : (
              ""
            )}
          </span>
          {oneYear ? (
            <div className={styles.gridPanel}>
              <div className={styles.left}>
                <p className={styles.para}>
                  The perfect job opening can pop up when you least expect it,
                  so it’s important to have an up-to-date professional resume
                  ready at a moment’s notice.
                </p>

                <p className={styles.para}>
                  Our Resume Building Webinar covers the key tips and techniques
                  to help you create a winning resume to help you get a step
                  closer to landing the job you always dreamt of.
                </p>

                <p className={styles.para}>
                  Whether you are an experienced professional or a beginner, we
                  will teach you how to build a resume that will present your
                  best self to potential employers.
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
              setOil(false);
            }}
            className={nonTech ? styles.ActiveSpan : styles.span}
          >
            Topics covered
            {mobile ? (
              nonTech ? (
                <BiUpArrowAlt className={styles.iconArrow} />
              ) : (
                <BiDownArrowAlt className={styles.iconArrow} />
              )
            ) : (
              ""
            )}
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
                    Key Sections of a Resume
                  </p>
                  <p className={styles.pdivCheck}>
                    <FaCheck className={styles.faIcon} />
                    Writing Impactful and Effective Resume Content
                  </p>
                  <p className={styles.pdivCheck}>
                    <FaCheck className={styles.faIcon} />
                    Design and Layout
                  </p>

                  <p className={styles.pdivCheck}>
                    <FaCheck className={styles.faIcon} />
                    The Power of Keywords and SEO in Resumes
                  </p>
                  <p className={styles.pdivCheck}>
                    <FaCheck className={styles.faIcon} />
                    Resume Review and Editing
                  </p>
                  <p className={styles.pdivCheck}>
                    <FaCheck className={styles.faIcon} />
                    Essential Resources and Tools for Resume Building
                  </p>
                  <p className={styles.pdivCheck}>
                    <FaCheck className={styles.faIcon} />
                    Final Review and Tweaks
                  </p>
                  <p className={styles.pdivCheck}>
                    <FaCheck className={styles.faIcon} />
                    Supplementing Your Resume Cover Letter and Portfolios
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
              setOil(false);
            }}
            className={Stack ? styles.ActiveSpan : styles.span}
          >
            Speaker
            {mobile ? (
              Stack ? (
                <BiUpArrowAlt className={styles.iconArrow} />
              ) : (
                <BiDownArrowAlt className={styles.iconArrow} />
              )
            ) : (
              ""
            )}
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
                      Renowned influencer | Career Guru
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
              setOil(false);

              console.log(Retail);
            }}
            className={Retail ? styles.ActiveSpan : styles.span}
          >
            This workshop is for
            {mobile ? (
              Retail ? (
                <BiUpArrowAlt className={styles.iconArrow} />
              ) : (
                <BiDownArrowAlt className={styles.iconArrow} />
              )
            ) : (
              ""
            )}
          </span>
          {Retail ? (
            <div className={styles.gridPanel}>
              <div className={styles.left}>
                <div className={styles.icondiv}>
                  <p className={styles.pdivCheck}>
                    <FaUserAlt className={styles.faIcon} />
                    Anyone on the job market
                  </p>
                  <p className={styles.pdivCheck}>
                    <FaUserAlt className={styles.faIcon} />
                    Anyone looking to create a compelling resume
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
              setStack(false);
              setOil(true);
            }}
            className={Oil ? styles.ActiveSpan : styles.span}
          >
            What you will get
            {mobile ? (
              Retail ? (
                <BiUpArrowAlt className={styles.iconArrow} />
              ) : (
                <BiDownArrowAlt className={styles.iconArrow} />
              )
            ) : (
              ""
            )}
          </span>
          {/* {Oil ? (
            <section className={styles.container}>
              <div className={styles.divInner}>100% LIVE CLASS</div>
              <div className={styles.divInner}>Q & A SESSION</div>
              <div className={styles.divInner}>PROFESSIONAL RESUME TEMPLATEAS</div>
            </section>
          ) : (
            ""
          )} */}
        </div>
        <div className={styles.middlePanel}>
          {oneYear ? (
            <div className={styles.gridPanel}>
              <div className={styles.left}>
              <p className={styles.para}>
                  The perfect job opening can pop up when you least expect it,
                  so it’s important to have an up-to-date professional resume
                  ready at a moment’s notice.
                </p>

                <p className={styles.para}>
                  Our Resume Building Webinar covers the key tips and techniques
                  to help you create a winning resume to help you get a step
                  closer to landing the job you always dreamt of.
                </p>

                <p className={styles.para}>
                  Whether you are an experienced professional or a beginner, we
                  will teach you how to build a resume that will present your
                  best self to potential employers.
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
                    Key Sections of a Resume
                  </p>
                  <p className={styles.pdivCheck}>
                    <FaCheck className={styles.faIcon} />
                    Writing Impactful and Effective Resume Content
                  </p>
                  <p className={styles.pdivCheck}>
                    <FaCheck className={styles.faIcon} />
                    Design and Layout
                  </p>

                  <p className={styles.pdivCheck}>
                    <FaCheck className={styles.faIcon} />
                    The Power of Keywords and SEO in Resumes
                  </p>
                  <p className={styles.pdivCheck}>
                    <FaCheck className={styles.faIcon} />
                    Resume Review and Editing
                  </p>
                  <p className={styles.pdivCheck}>
                    <FaCheck className={styles.faIcon} />
                    Essential Resources and Tools for Resume Building
                  </p>
                  <p className={styles.pdivCheck}>
                    <FaCheck className={styles.faIcon} />
                    Final Review and Tweaks
                  </p>
                  <p className={styles.pdivCheck}>
                    <FaCheck className={styles.faIcon} />
                    Supplementing Your Resume Cover Letter and Portfolios
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
                    Renowned influencer | Career Guru
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
                    Anyone on the job market
                  </p>
                  <p className={styles.pdivCheck}>
                    <FaUserAlt className={styles.faIcon} />
                    Anyone looking to create a compelling resume
                  </p>
                </div>
              </div>
            </div>
          ) : (
            ""
          )}
          {Oil ? (
            <section className={styles.containerBottom}>
              <div className={styles.divInner}>100% LIVE CLASS</div>
              <div className={styles.divInner}>Q & A SESSION</div>
              <div className={styles.divInner}>PROFESSIONAL RESUME TEMPLATEAS</div>
            </section>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default SliderTabs;
