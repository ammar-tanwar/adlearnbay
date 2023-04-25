import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Pagination,Autoplay } from "swiper";


import styles from "./CourseSlide1.module.css";
import Image from 'next/image'


export default function CourseSlide1() {

    const [mobile, setMobile] = useState(false);
    useEffect(() => {
      let width = window.innerWidth;
      if (width < 600) {
        setMobile(true);
      }
    });

    return (
        <>
        <div className={styles.Mdiv}>
        <div className={styles.FirstDiv}>

                <Image src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main-blog/practice/idea.png"
                  width="244"
                  height="248"
                  className={styles.mainImage}
                  />
                
            </div>

            <div className={styles.SecondDiv}>
            <div className={styles.swiperleft}>
          <Swiper
            slidesPerView={mobile ? 1.02 : 2.04}
            spaceBetween={mobile ? 10 : 10}
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
              
              <div className={styles.content}>
                <div className={styles.imgP}>
                  <Image
                    src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/preksha-home.png"
                    layout="intrinsic"
                    width="100"
                    height="100"
                    alt="preksha-home"
                  />
                </div>

                <div className={styles.contentRight}>
                  <div className={styles.name}>
                    <h5>Getting started with solidity</h5>
                  </div>
                  <div>
                    <p className={styles.para}>
                      I had a great learning experience at Learnbay. The
                      faculties here are top notch. Right from enrollment to
                      getting a good job, they keep putting enormous efforts for
                      each and every candidate. Thanks to all the trainers,
                      backend team, the HR team and to the directors for making
                      this journey smooth.
                      <br />
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className={styles.slide}>
              
              <div className={styles.content}>
                <div className={styles.imgP}>
                  <Image
                    src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/preksha-home.png"
                    layout="intrinsic"
                    width="100"
                    height="100"
                    alt="preksha-home"
                  />
                </div>

                <div className={styles.contentRight}>
                  <div className={styles.name}>
                    <h5>Getting started with solidity</h5>
                  </div>
                  <div>
                    <p className={styles.para}>
                      I had a great learning experience at Learnbay. The
                      faculties here are top notch. Right from enrollment to
                      getting a good job, they keep putting enormous efforts for
                      each and every candidate. Thanks to all the trainers,
                      backend team, the HR team and to the directors for making
                      this journey smooth.
                      <br />
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className={styles.slide}>
              
              <div className={styles.content}>
                <div className={styles.imgP}>
                  <Image
                    src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/preksha-home.png"
                    layout="intrinsic"
                    width="100"
                    height="100"
                    alt="preksha-home"
                  />
                </div>

                <div className={styles.contentRight}>
                  <div className={styles.name}>
                    <h5>Getting started with solidity</h5>
                  </div>
                  <div>
                    <p className={styles.para}>
                      I had a great learning experience at Learnbay. The
                      faculties here are top notch. Right from enrollment to
                      getting a good job, they keep putting enormous efforts for
                      each and every candidate. Thanks to all the trainers,
                      backend team, the HR team and to the directors for making
                      this journey smooth.
                      <br />
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
           


          </Swiper>
        </div>
            </div>


        </div>
        </>
        


    );

}