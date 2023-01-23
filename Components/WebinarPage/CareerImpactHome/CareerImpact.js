import Image from "next/image";
import styles from "./CareerImpact.module.css";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/css/autoplay";


const CareerImpact = () => {
  const [mobile, setMobile] = useState(false);
  useEffect(() => {
    let width = window.innerWidth;
    if (width < 600) {
      setMobile(true);
    }
  });
  return (
    <div className={styles.reviewWrap}>

      <div className={styles.swiperleft}>
        <Swiper
          slidesPerView={mobile ? 1.02 : 1.5}
          spaceBetween={mobile ? 10 : 10}
          pagination={{ clickable: true }}
          grabCursor={true}
          modules={[Pagination, Autoplay]}
          className="mySwiper"
          autoplay={{
            delay: 2500,
          }}
          autoPlay={true}
        >

          <SwiperSlide className={styles.slide}>
            <div className={styles.content}>
              <div className={styles.imgP}>
                <Image
                  src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/preksha-home.png"
                  layout="intrinsic"
                  width="100"
                  height="100"
                  alt="akanksha-home"
                />
              </div>

              <div className={styles.contentRight}>
                <div className={styles.name}>
                  <h5>Preksha Mishra</h5>
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
                  src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/asrar-home.png"
                  layout="intrinsic"
                  width="100"
                  height="100"
                  alt="akanksha-home"
                />
              </div>

              <div className={styles.contentRight}>
                <div className={styles.name}>
                  <h5>Mohammad Israr</h5>
                </div>
                <div>
                  <p className={styles.para}>
                  Thanks to the Learnbay data science course and outstanding
                      assistance, I could ace the TCS interview and secure a job
                      with a 400% pay hike. My understanding of the course was
                      greatly improved by the real-time projects and respective
                      IBM project experience certification.

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
                  src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/aravind-home.png"
                  layout="intrinsic"
                  width="100"
                  height="100"
                  alt="akanksha-home"
                />
              </div>

              <div className={styles.contentRight}>
                <div className={styles.name}>
                  <h5>Aravind Kumar</h5>
                </div>
                <div>
                  <p className={styles.para}>
                  Choosing Learnbay was my best decision ever. The instructors
                    were encouraging and glad to answer questions. The best
                    feature is that their flexible modules & small size batches.
                    I was able to manage my time and learn while working. Thanks
                    to Learnbay for my lucrative placement.
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
                  src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/ritesh-home.png"
                  layout="intrinsic"
                  width="100"
                  height="100"
                  alt="akanksha-home"
                />
              </div>

              <div className={styles.contentRight}>
                <div className={styles.name}>
                  <h5>Ritish Kumar</h5>
                </div>
                <div>
                  <p className={styles.para}>
                  I always had a dilemma about how to switch to the IT field
                      until I stumbled upon the foundation data science course
                      offered by Learnbay. The perfect combination of
                      flexibility, affordability, and supportiveness. They
                      helped me get placed at Capgemini, and I’m delighted with
                      my current career. All Thanks to Learnbay!
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
                  src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/saurabh-home.png"
                  layout="intrinsic"
                  width="100"
                  height="100"
                  alt="akanksha-home"
                />
              </div>

              <div className={styles.contentRight}>
                <div className={styles.name}>
                  <h5>Sourabh Mourya</h5>
                </div>
                <div>
                  <p className={styles.para}>
                  Flexible classes have helped me to manage my job schedule.
                      Learning Data Science directly from MNC experts provided
                      the chance to learn industry-specific tricks and tips. I
                      am grateful to the Learnbay team for providing an
                      excellent platform that enhanced my professional growth.
                      Thank you very much! Learnbay.




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
                  src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/abhishek-home.png"
                  layout="intrinsic"
                  width="100"
                  height="100"
                  alt="akanksha-home"
                />
              </div>

              <div className={styles.contentRight}>
                <div className={styles.name}>
                  <h5>Abhishek Singh</h5>
                </div>
                <div>
                  <p className={styles.para}>
                  I got placed at AGS within 9 months of joining Learnbay
                    institute. Live interaction sessions are the best part here
                    since we could clear all queries. The projects are
                    excellent. Overall I had a great experience and I urge
                    everyone to enroll in this institute.

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
                  src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/vishal-home.png"
                  layout="intrinsic"
                  width="100"
                  height="100"
                  alt="akanksha-home"
                />
              </div>

              <div className={styles.contentRight}>
                <div className={styles.name}>
                  <h5>Vishal</h5>
                </div>
                <div>
                  <p className={styles.para}>
                  One on One counseling from experts has guided me to make
                      the right decision. The Learnbay team was amazing in
                      assisting me with live projects and preparing for the
                      placements. Thank you! Learnbay for your tremendous
                      support in excelling in my Data Science Career.

                    <br />
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

    </div>

  );
};

export default CareerImpact;
