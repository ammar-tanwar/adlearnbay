import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import styles from "./BoxShape.module.css";
import Image from "next/image";
import { AiOutlineDownload } from "react-icons/ai";
import Form from "../../Form/Form";
import FormOtp from "../../FormOtp/FormOtp";
import Popup from "../../Popup/Popup";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Autoplay, Pagination } from "swiper";

const BoxShape = ({
  title,
  Box1h5,
  box1desc,
  Box2h5,
  box2desc,
  Box3h5,
  box3desc,
  Box4h5,
  box4desc,
  headh5,
  formotp,
  formotpForS3DS,
}) => {
  const [popups, setPopups] = useState(false);

  const popupShow = () => {
    setPopups(true);
  };
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
          <h5>Download Brochure</h5>
          <p>Please enter the following details to initiate your download</p>

          {formotpForS3DS ? (
            <FormOtp />
          ) : (
            <>
              {formotp ? (
                <FormOtp popup={true} />
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
      <h2>{title}</h2>
      <div className={styles.BoxDiv}>
        <div className={styles.left}>
          <div>
            <Image
              src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/course.learnbay.co/NImages/advance-data-science-ai-program.png"
              alt="data-science-course"
              quality={100}
              layout="intrinsic"
              width="306"
              height="150"
            />
            <p className={styles.Ptopp}>
              Data Science & AI Certification <br /> Domain Specialisation For
              Professionals
            </p>
            <button className={styles.Button} onClick={popupShow}>
              <AiOutlineDownload className="bIcons" />
              Download Brochure
            </button>
          </div>
          <div>
            <Image
              src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/course.learnbay.co/NImages/advance-ai-ml-for-tech-professionals.png"
              alt="data-science-course"
              quality={100}
              layout="intrinsic"
              width="306"
              height="150"
            />
            <p className={styles.Ptopp}>
              Advance AI & ML Certification <br /> Become AI Expert In Product
              based MNCs
            </p>
            <button className={styles.Button} onClick={popupShow}>
              <AiOutlineDownload className="bIcons" />
              Download Brochure
            </button>
          </div>
          <div>
            <Image
              src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/course.learnbay.co/NImages/data-science-ai-for-managers.png"
              alt="data-science-course"
              quality={100}
              layout="intrinsic"
              width="306"
              height="150"
            />
            <p className={styles.Ptopp}>
              Data Science & AI Certification Program <br />
              For Managers and Leaders
            </p>
            <button className={styles.Button} onClick={popupShow}>
              <AiOutlineDownload className="bIcons" />
              Download Brochure
            </button>
          </div>
          <div>
            <Image
              src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/course.learnbay.co/NImages/data-science-ai-master-program.png"
              alt="data-science-course"
              quality={100}
              layout="intrinsic"
              width="306"
              height="150"
            />
            <p className={styles.Ptopp}>
              100% Placement Assistance <br /> Data Science & AI Certification
              Program
            </p>
            <button className={styles.Button} onClick={popupShow}>
              <AiOutlineDownload className="bIcons" />
              Download Brochure
            </button>
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.imgBack}>
            <h5>{headh5}</h5>
            <div className={styles.reviewWrap}>
              <Swiper
                slidesPerView={mobile ? 1 : 1}
                spaceBetween={mobile ? 10 : 20}
                grabCursor={true}
                autoplay={{
                  delay: 2500,
                }}
                modules={[Pagination, Autoplay]}
                autoPlay={true}
                pagination={true}
                className="mySwiper"
              >
                <SwiperSlide className={styles.swiperSlideer}>
                  <p>
                    Learnbay taught me data science. Thanks to Learnbay's domain
                    specialization course, I landed a job in my prior sector and
                    was regarded as an experienced applicant by my firm. I
                    consistently increased my data science knowledge and
                    experience, which led to a 250% hike.
                  </p>
                  <div className={styles.profile}>
                    <Image
                      src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/Chandni.jpeg"
                      width="80"
                      height="80"
                      layout="intrinsic"
                    />
                    <div className={styles.name}>
                      <h5>Chandni Priya</h5>
                      <p>Associate Data scientist at The Math Company</p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className={styles.swiperSlideer}>
                  <p>
                    Recommended to anyone who is trying to learn Data Science.
                    Teachers go through every detail and in between they tells
                    you what questions is mostly likely to ask in the interview!
                    Which is important! Also gives you assignments for weekends!
                    Overall really good experience! Worth it!
                  </p>
                  <div className={styles.profile}>
                    <Image
                      src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/Shravanthi.jpeg"
                      width="80"
                      height="80"
                      layout="intrinsic"
                    />
                    <div className={styles.name}>
                      <h5>Shravanthi A</h5>
                      <p>Data Scientist</p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className={styles.swiperSlideer}>
                  <p>
                    Learnbay has helped me a lot to learn data science
                    applications in the e-commerce industry. The live class
                    concept was really helpful in receiving proper DS training.
                    Thanks to all my mentors and the placement team.
                  </p>
                  <div className={styles.profile}>
                    <Image
                      src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/asrar-home.png"
                      width="80"
                      height="80"
                      layout="intrinsic"
                    />
                    <div className={styles.name}>
                      <h5>Mohammad Israr</h5>
                      <p>Data scientist (TCS)</p>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
              <div className={styles.shadow}></div>
              <div className={styles.content}>
                <div className={styles.leftContent}>
                  <h5>+250%</h5>
                  <p>Highest Salary Hike</p>
                </div>
                <div className={styles.rightContent}>
                  <h5>18 LPA</h5>
                  <p>Average Salary Package</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoxShape;
