import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import styles from "./ProgramWithHighLight.module.css";
import { MdLiveTv, MdOutlineMissedVideoCall, MdDomain, MdOutlineLiveTv } from "react-icons/md";
import { FiUser } from "react-icons/fi";
import { AiOutlineSafetyCertificate } from "react-icons/ai";
import { BsGraphUp } from "react-icons/bs";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Autoplay, Navigation } from "swiper";
import {
  AiOutlineFundProjectionScreen,
  AiOutlineFieldTime,
} from "react-icons/ai";


const ProgramWithHighLight = ({
  title,
  Box1h5,
  box1desc,
  Box2h5,
  box2desc,
  Box3h5,
  box3desc,
  Box4h5,
  box4desc,
  HHeading,
  Duration,
  InterviewCalls,
  Projects,
  CourseFee,
  Domain,
  headh5
}) => {
  const [hover, setHover] = useState(false);
  const [mobile, setMobile] = useState(false);
  useEffect(() => {
    let width = window.innerWidth;
    if (width < 600) {
      setMobile(true);
    }
  });

  return (
    <div className={styles.boxWrapper}>

      <h2>{title}</h2>
      <div className={styles.BoxDiv}>

        <div className={styles.enrollprogramDesk}>
          <div className={styles.left}>
            <div
              className={styles.box}
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
            >
              <MdLiveTv className={styles.boxIcon} />

              <h5>{Box1h5}</h5>
              <p>{box1desc}</p>
            </div>
            <div className={hover ? styles.box : styles.boxActive}>
              {hover ? (
                <img src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/Live-classes-home-alt.svg" loading="lazy" />
              ) : (
                <img
                  src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/capstone-live-home.svg"
                  alt="data-science"
                  className={styles.icon}
                  loading="lazy"
                />
              )}

              <h5>{Box2h5}</h5>
              <p>{box2desc}</p>
            </div>
            <div
              className={styles.box}
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
            >
              <FiUser className={styles.boxIcon} />
              <h5>{Box3h5}</h5>
              <p>{box3desc}</p>
            </div>
            <div
              className={styles.box}
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
            >
              <BsGraphUp className={styles.boxIcon} />

              <h5>{Box4h5}</h5>
              <p>{box4desc}</p>
            </div>
          </div>
        </div>

        <div className={styles.enrollprogramResp}>
          <div>
            <div>
              <Swiper
                slidesPerView={mobile ? 1 : 1}
                spaceBetween={mobile ? 10 : 20}
                grabCursor={true}
                autoplay={{
                  delay: 1000,
                }}
                modules={[Navigation, Autoplay]}
                autoPlay={true}
                navigation={true}
                className="mySwiper"
              >

                <SwiperSlide className={styles.slide}>
                  <div
                    className={styles.box}
                    onMouseEnter={() => setHover(true)}
                    onMouseLeave={() => setHover(false)}
                  >
                    <MdLiveTv className={styles.boxIcon} />

                    <h5>{Box1h5}</h5>
                    <p>{box1desc}</p>
                  </div>
                </SwiperSlide>

                <SwiperSlide className={styles.slide}>
                  <div className={hover ? styles.box : styles.boxActive}>
                    {hover ? (
                      <img src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/Live-classes-home-alt.svg" loading="lazy" />
                    ) : (
                      <img
                        src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/capstone-live-home.svg"
                        alt="data-science"
                        className={styles.icon}
                        loading="lazy"
                      />
                    )}

                    <h5>{Box2h5}</h5>
                    <p>{box2desc}</p>
                  </div>


                </SwiperSlide>

                <SwiperSlide className={styles.slide}>
                  <div
                    className={styles.box}
                    onMouseEnter={() => setHover(true)}
                    onMouseLeave={() => setHover(false)}
                  >
                    <FiUser className={styles.boxIcon} />
                    <h5>{Box3h5}</h5>
                    <p>{box3desc}</p>
                  </div>
                </SwiperSlide>

                <SwiperSlide className={styles.slide}>
                  <div
                    className={styles.box}
                    onMouseEnter={() => setHover(true)}
                    onMouseLeave={() => setHover(false)}
                  >
                    <BsGraphUp className={styles.boxIcon} />

                    <h5>{Box4h5}</h5>
                    <p>{box4desc}</p>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>

        <div className={styles.right}>
          <div className={styles.imgBack}>
            <div className={styles.reviewWrap}>
              <div className={styles.PProgrammain}>
                <div className={styles.PProgram}>
                  <p>
                    <span>{HHeading}</span>
                  </p>
                </div>
                <div className={styles.PProgramInner}>
                  <div>
                    <MdOutlineLiveTv className={styles.PIcons} />
                    <p className={styles.cContent}>
                      {Duration}
                      <br />
                      <span>Duration</span>
                    </p>
                  </div>
                  <div>
                    <AiOutlineSafetyCertificate className={styles.PIcons} />
                    <p className={styles.cContent}>
                      IBM
                      <br />
                      <span>Certification</span>
                    </p>
                  </div>
                  <div>
                    <AiOutlineFieldTime className={styles.PIcons} />
                    <p className={styles.cContent}>
                      2+ Years <br />
                      <span>Subscription</span>
                    </p>
                  </div>
                  <div>
                    <MdOutlineMissedVideoCall className={styles.PIcons} />
                    <p className={styles.cContent}>
                     {InterviewCalls}<br />
                      <span>Interview Calls</span>
                    </p>
                  </div>
                  <div>
                    <AiOutlineFundProjectionScreen className={styles.PIcons} />
                    <p className={styles.cContent}>
                      {Projects}
                      <br />
                      <span>Projects</span>
                    </p>
                  </div>
                  <div>
                    <MdDomain className={styles.PIcons} />
                    <p className={styles.cContent}>
                      {Domain}
                      <br />
                      <span>Domain Electives</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className={styles.shadow}></div>
              <div className={styles.content}>
                <div className={styles.leftContent}>
                  <h5>Course Fee</h5>

                </div>
                <div className={styles.rightContent}>
                  <h5>{CourseFee}</h5>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgramWithHighLight;
