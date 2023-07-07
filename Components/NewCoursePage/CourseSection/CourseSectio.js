import React, { useEffect, useState } from "react";
import styles from "./CourseSection.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";

function courseSection({ courseSectionData }) {
  const [mobile, setMobile] = useState(false);
  useEffect(() => {
    let width = window.innerWidth;
    if (width < 600) {
      setMobile(true);
    }
  });
  return (
    <section className={styles.container}>
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
      </div>
    </section>
  );
}

export default courseSection;
