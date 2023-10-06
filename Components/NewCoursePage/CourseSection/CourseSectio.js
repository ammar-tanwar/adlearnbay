import React, { useEffect, useState } from "react";
import styles from "./CourseSection.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaDownload } from "react-icons/fa";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";
import Popup from "../../Popup/Popup";
import Form from "../../Form/Form";

function courseSection({ courseSectionData }) {
  const [mobile, setMobile] = useState(false);
  useEffect(() => {
    let width = window.innerWidth;
    if (width < 600) {
      setMobile(true);
    }
  });
  const popupShow = () => {
    setPopups(true);
  };
  const [popups, setPopups] = useState(false);

  return (
    <section className={styles.container}>
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
      <h4>Choose from our Popular Courses</h4>
      <div className={styles.courseDiv}>
        <Swiper
          slidesPerView={mobile ? 1 : 3.1}
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
          {courseSectionData.map((data, index) => {
            const { heading, desc, fee, heading2 } = data;
            return (
              <SwiperSlide className={styles.slide} key={index}>
                <div className={styles.box}>
                  <p className={styles.head}>{heading}<br />{heading2}</p>
                  <p className={styles.orange}>{desc}</p>
                  <p className={styles.fee}>{fee}</p>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
        <button onClick={popupShow} className={styles.button}>
          Download Brochure
          <FaDownload className={styles.icon} />
        </button>
      </div>
    </section>
  );
}

export default courseSection;
