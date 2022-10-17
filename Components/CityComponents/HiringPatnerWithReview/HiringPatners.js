import React, { useEffect, useState } from 'react'
import styles from "./HiringPatners.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import Image from "next/image";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Autoplay, Pagination } from "swiper";


function HiringPatners({topHead,}) {

  const [hover, setHover] = useState(false);
  const [mobile, setMobile] = useState(false);
  useEffect(() => {
    let width = window.innerWidth;
    if (width < 600) {
      setMobile(true);
    }
  });

  return (
    <section className={styles.Features}>

      <h6 className={styles.topHead}>{topHead}</h6>
      <div className={styles.FeatureWrap}>
        <div className={styles.LeftWrap}></div>
        <div className={styles.right}>
          <div className={styles.imgBack}>
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
                    Learnbay taught me data science. Thanks to Learnbay's
                    domain specialization course, I landed a job in my prior
                    sector and was regarded as an experienced applicant by my
                    firm. I consistently increased my data science knowledge and
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
                    Recommended to anyone who is trying to learn Data Science. Teachers go through every detail and in between they tells you what questions is mostly likely to ask in the interview! Which is important! Also gives you assignments for weekends! Overall really good experience! Worth it!
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
                    Learnbay has helped me a lot to learn data science applications in the e-commerce industry. The live class concept was really helpful in receiving proper DS training. Thanks to all my mentors and the placement team.
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
    </section>
  )
}

export default HiringPatners