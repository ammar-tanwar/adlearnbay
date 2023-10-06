import React, { useState, useEffect } from "react";
import "swiper/css";
import "swiper/css/pagination";
import styles from "./SliderTab.module.css";
import Image from "next/image";
import { BiDownArrowAlt, BiUpArrowAlt } from "react-icons/bi";
import { FaCheck, FaLinkedin, FaUser, FaUserAlt } from "react-icons/fa";

const SliderTabs = ({whatHide}) => {
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
            About this Masterclass
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
                  Are you curious about how your favorite cab booking apps work
                  behind the scenes? Join our Masterclass and explore the inner
                  workings of these apps.
                </p>

                <p className={styles.para}>
                  This masterclass equips
                  you with valuable insights into the tech that powers your
                  everyday rides, making complex concepts simple for everyone to
                  grasp.
                </p>
                <p className={styles.para}>
                  To get more useful insights, be a part of our
                  Masterclass and learn to build robust systems.
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
                    How will the user interact with the architecture?
                  </p>
                  <p className={styles.pdivCheck}>
                    <FaCheck className={styles.faIcon} />
                    Build secure authentication and third-party logins.
                  </p>
                  <p className={styles.pdivCheck}>
                    <FaCheck className={styles.faIcon} />
                    Learn to create high prices on traffic surges.
                  </p>
                  <p className={styles.pdivCheck}>
                    <FaCheck className={styles.faIcon} />
                    Learn how the drivers are assigned.
                  </p>

                  <p className={styles.pdivCheck}>
                    <FaCheck className={styles.faIcon} />
                    Learn how driver details are shown on-screen.
                  </p>
                  <p className={styles.pdivCheck}>
                    <FaCheck className={styles.faIcon} />
                    Calculate and display real-time traffic estimation.
                  </p>
                  <p className={styles.pdivCheck}>
                    <FaCheck className={styles.faIcon} />
                    Decode the secrets of designing optimal cache schemas.
                  </p>
                  <p className={styles.pdivCheck}>
                    <FaCheck className={styles.faIcon} />
                    Master the principles of designing robust databases.
                  </p>
                  <p className={styles.pdivCheck}>
                    <FaCheck className={styles.faIcon} />
                    Use of RTDB management system and NoSQL.
                  </p>
                  <p className={styles.pdivCheck}>
                    <FaCheck className={styles.faIcon} />
                    Learn to scale a system from few to millions of users.
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
                      src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/Neetesh-Mittal.jpg"
                      width="196"
                      height="230"
                    />
                  </div>
                  <div>
                    <p className={styles.para}>Speaker</p>
                    <p className={styles.para}>
                      <b>Neetesh Mittal</b>
                    </p>
                    <p className={styles.para} style={{ color: "#0072BC" }}>
                      SDE III ( Ex - Microsoft, Ex - Myntra)
                    </p>
                    <p className={styles.para}>
                  11+ years of Exp. 
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
                    Anyone want to learn the system design of a Cab Booking App?

                  </p>
                  <p className={styles.pdivCheck}>
                    <FaUserAlt className={styles.faIcon} />
                    SDE’s want to transit from Service to Product Based Companies.
                  </p>
                </div>
              </div>
            </div>
          ) : (
            ""
          )}
          {whatHide ? ("") : (
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
          )}
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
                  Are you curious about how your favorite cab booking apps work
                  behind the scenes? Join our Masterclass and explore the inner
                  workings of these apps.
                </p>

                <p className={styles.para}>
                  This masterclass equips
                  you with valuable insights into the tech that powers your
                  everyday rides, making complex concepts simple for everyone to
                  grasp.
                </p>
                <p className={styles.para}>
                  To get more useful insights, be a part of our
                  Masterclass and learn to build robust systems.
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
                    How will the user interact with the architecture?
                  </p>
                  <p className={styles.pdivCheck}>
                    <FaCheck className={styles.faIcon} />
                    Build secure authentication and third-party logins.
                  </p>
                  <p className={styles.pdivCheck}>
                    <FaCheck className={styles.faIcon} />
                    Learn to create high prices on traffic surges.
                  </p>
                  <p className={styles.pdivCheck}>
                    <FaCheck className={styles.faIcon} />
                    Learn how the drivers are assigned.
                  </p>

                  <p className={styles.pdivCheck}>
                    <FaCheck className={styles.faIcon} />
                    Learn how driver details are shown on-screen.
                  </p>
                  <p className={styles.pdivCheck}>
                    <FaCheck className={styles.faIcon} />
                    Calculate and display real-time traffic estimation.
                  </p>
                  <p className={styles.pdivCheck}>
                    <FaCheck className={styles.faIcon} />
                    Decode the secrets of designing optimal cache schemas.
                  </p>
                  <p className={styles.pdivCheck}>
                    <FaCheck className={styles.faIcon} />
                    Master the principles of designing robust databases.
                  </p>
                  <p className={styles.pdivCheck}>
                    <FaCheck className={styles.faIcon} />
                    Use of RTDB management system and NoSQL.
                  </p>
                  <p className={styles.pdivCheck}>
                    <FaCheck className={styles.faIcon} />
                    Learn to scale a system from few to millions of users.
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
                    src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/Neetesh-Mittal.jpg"
                    width="196"
                    height="230"
                  />
                </div>
                <div>
                  <p className={styles.para}>Speaker</p>
                  <p className={styles.para}>
                    <b>Neetesh Mittal</b>
                  </p>
                  <p className={styles.para} style={{ color: "#0072BC" }}>
                    SDE III ( Ex - Microsoft, Ex - Myntra)
                  </p>
                  <p className={styles.para}>
                  11+ years of Exp. 
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
                    Anyone want to learn the system design of a Cab Booking App?

                  </p>
                  <p className={styles.pdivCheck}>
                    <FaUserAlt className={styles.faIcon} />
                    SDE’s want to transit from Service to Product Based Companies.
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
              <div className={styles.divInner}>
                PROFESSIONAL RESUME TEMPLATEAS
              </div>
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
