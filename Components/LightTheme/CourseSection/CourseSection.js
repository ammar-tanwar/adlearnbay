import { FaDownload, FaGraduationCap } from "react-icons/fa";
import React, { useState, useEffect } from "react";
import styles from "./CourseSection.module.css";
import Popup from "../../Popup/Popup";
import Form from "../../Form/Form";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

function FourthSection() {
  const [mobile, setMobile] = useState(false);
  useEffect(() => {
    let width = window.innerWidth;
    if (width < 600) {
      setMobile(true);
    }
  });

  const [popups, setPopups] = useState(false);

  const popupShow = () => {
    setPopups(true);
  };
  return (
    <div className={styles.section4}>
      <Popup trigger={popups} setTrigger={setPopups} className="popupModal">
        <div className="leftPopup">
          <div className="whiteP" />
        </div>
        <div className="RightPopup">
          <h5>Download Brochure</h5>
          <Form
            popup={true}
            downloadBrochure
            upSkillingHide={true}
            setTrigger={setPopups}
          />
        </div>
      </Popup>
      <div className={styles.topText}>
        <h1>Data Science Courses</h1>
        <button onClick={popupShow} className={styles.button}>
          Download Brochure
          <FaDownload className={styles.icon} />
        </button>
      </div>
      <div>
        <div className={styles.swiperleft}>
          <Swiper
            slidesPerView={mobile ? 1 : 3.2}
            spaceBetween={mobile ? 10 : 15}
            pagination={{ clickable: true }}
            autoplay={{
              delay: 2500,
            }}
            grabCursor={true}
            modules={[Pagination, Autoplay]}
            autoPlay={true}
            className="mySwiper"
          >
            <SwiperSlide className={styles.slide}>
              <div className={styles.mainSlider}>
                <div className={styles.QuoteBlue}>
                  <FaGraduationCap />
                </div>
                <div className={styles.name}>
                  <h3>Advanced Data Science & AI Program</h3>
                  <p>250 hours | ₹95,000 + GST</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className={styles.slide}>
              <div className={styles.mainSlider}>
                <div className={styles.QuoteBlue}>
                  <FaGraduationCap />
                </div>
                <div className={styles.name}>
                  <h3>Advance AI & ML Program for Tech Professionals</h3>
                  <p>350 hours | ₹1,05,000 + GST</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className={styles.slide}>
              <div className={styles.mainSlider}>
                <div className={styles.QuoteBlue}>
                  <FaGraduationCap />
                </div>
                <div className={styles.name}>
                  <h3>Data Science & AI For Managers</h3>
                  <p>400 hours | ₹1,05,000 + GST</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className={styles.slide}>
              <div className={styles.mainSlider}>
                <div className={styles.QuoteBlue}>
                  <FaGraduationCap />
                </div>
                <div className={styles.name}>
                  <h3>Data Science & AI Master Program</h3>
                  <p>500 hours | ₹1,25,000 + GST</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className={styles.slide}>
              <div className={styles.mainSlider}>
                <div className={styles.QuoteBlue}>
                  <FaGraduationCap />
                </div>
                <div className={styles.name}>
                  <h3>Data Analytics Program for Working Professionals</h3>
                  <p>180 hours | ₹75,000 + GST</p>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className={styles.fullStackCont}>
          <div className={styles.topText}>
            <h1> Courses</h1>
          </div>
          <div className={styles.swiperleft}>
            <Swiper
              slidesPerView={mobile ? 1 : 3}
              spaceBetween={mobile ? 10 : 15}
              pagination={{ clickable: true }}
              autoplay={{
                delay: 2500,
              }}
              grabCursor={true}
              modules={[Pagination, Autoplay]}
              autoPlay={true}
              className="mySwiper"
            >
              <SwiperSlide className={styles.slide}>
                <div className={styles.mainSlider}>
                  <div className={styles.QuoteBlue}>
                    <FaGraduationCap />
                  </div>
                  <div className={styles.name}>
                    <h3>Full-Stack Software Development Program</h3>
                    <p>300 hours | ₹1,10,000 + GST</p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className={styles.slide}>
                <div className={styles.mainSlider}>
                  <div className={styles.QuoteBlue}>
                    <FaGraduationCap />
                  </div>
                  <div className={styles.name}>
                    <h3>Data Structure Algorithms & System Design</h3>
                    <p>200 hours | ₹70,000 + GST</p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className={styles.slide}>
                <div className={styles.mainSlider}>
                  <div className={styles.QuoteBlue}>
                    <FaGraduationCap />
                  </div>
                  <div className={styles.name}>
                    <h3>Full-Stack Web Development Program</h3>
                    <p>200 hours | ₹70,000 + GST</p>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
            <button onClick={popupShow} className={styles.buttonM}>
              Download Brochure
              <FaDownload className={styles.icon} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FourthSection;
