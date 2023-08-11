import React, { useEffect, useState } from "react";
import styles from "./Testimonial.module.css";
import { FaQuoteLeft, FaDownload } from "react-icons/fa";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";
import Popup from "../../Popup/Popup";
import Form from "../../Form/Form";
import FormOtp from "../../FormOtp/FormOtp";

function Testimonial({
  formotp,
  s2dataScience,
  fullstackADS,
  marketing,
  grad,
  jobDescription,
  workExperience,
  jobPlacee,
}) {
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
    <section>
      <button onClick={popupShow} className={styles.button}>
        Download Brochure
        <FaDownload className={styles.icon} />
      </button>
      <div className={styles.Section1}>
        <Popup trigger={popups} setTrigger={setPopups} className="popupModal">
          <div className="leftPopup">
            <div className="whiteP" />
          </div>
          <div className="RightPopup">
            <h5>Download Brochure</h5>
            {formotp ? (
              <FormOtp
                popup={true}
                s2dataScience={s2dataScience}
                fullstackADS={fullstackADS}
                marketing={marketing}
                grad={grad}
                jobDescription={jobDescription}
                workExperience={workExperience}
              />
            ) : (
              <Form
                popup={true}
                downloadBrochure
                setTrigger={setPopups}
                jobPlacee={jobPlacee}
                workExperience={workExperience}
              />
            )}
          </div>
        </Popup>
        <h1>Student Testimonials</h1>
        <div className={styles.Testimonial}>
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
                    <FaQuoteLeft />
                  </div>
                  <div>
                    <p className={styles.para}>
                      I had a great learning experience at Learnbay. The
                      faculties here are top notch. Right from enrollment to
                      getting a good job, they keep putting enormous efforts for
                      each and every candidate. Thanks to all the trainers,
                      backend team, the HR team and to the directors for making
                      this journey smooth.
                    </p>
                  </div>
                  <div className={styles.line}></div>
                  <div className={styles.imgP}>
                    <Image
                      src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/preksha-home.png"
                      layout="intrinsic"
                      loading="lazy"
                      width="80"
                      height="80"
                      alt="preksha-home"
                    />
                  </div>
                  <div className={styles.name}>
                    <h3>Preksha Mishra</h3>
                    <p> Working at HCL</p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className={styles.slide}>
                <div className={styles.mainSlider}>
                  <div className={styles.QuoteOrange}>
                    <FaQuoteLeft />
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
                  <div className={styles.line}></div>
                  <div className={styles.imgP}>
                    <Image
                      src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/asrar-home.png"
                      layout="intrinsic"
                      loading="lazy"
                      width="80"
                      height="80"
                      alt="preksha-home"
                    />
                  </div>
                  <div className={styles.name}>
                    <h3>Mohammad Israr</h3>
                    <p> Working at TCS</p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className={styles.slide}>
                <div className={styles.mainSlider}>
                  <div className={styles.QuoteBlue}>
                    <FaQuoteLeft />
                  </div>
                  <div>
                    <p className={styles.para}>
                      Choosing Learnbay was my best decision ever. The
                      instructors were encouraging and glad to answer questions.
                      The best feature is that their flexible modules & small
                      size batches. I was able to manage my time and learn while
                      working. Thanks to Learnbay for my lucrative placement.
                      <br />
                    </p>
                  </div>
                  <div className={styles.line}></div>
                  <div className={styles.imgP}>
                    <Image
                      src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/aravind-home.png"
                      layout="intrinsic"
                      loading="lazy"
                      width="80"
                      height="80"
                      alt="aravind-home"
                    />
                  </div>
                  <div className={styles.name}>
                    <h3>Aravind Kumar</h3>
                    <p>Senior Associate - Data Scientist</p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className={styles.slide}>
                <div className={styles.mainSlider}>
                  <div className={styles.QuoteOrange}>
                    <FaQuoteLeft />
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
                  <div className={styles.line}></div>
                  <div className={styles.imgP}>
                    <Image
                      src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/ritesh-home.png"
                      layout="intrinsic"
                      loading="lazy"
                      width="80"
                      height="80"
                      alt="ritesh-home"
                    />
                  </div>
                  <div className={styles.name}>
                    <h3>Ritish Kumar</h3>
                    <p>Working at Capgemini</p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className={styles.slide}>
                <div className={styles.mainSlider}>
                  <div className={styles.QuoteBlue}>
                    <FaQuoteLeft />
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
                  <div className={styles.line}></div>
                  <div className={styles.imgP}>
                    <Image
                      src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/saurabh-home.png"
                      layout="intrinsic"
                      loading="lazy"
                      width="80"
                      height="80"
                      alt="saurabh-home"
                    />
                  </div>
                  <div className={styles.name}>
                    <h3>Sourabh Mourya</h3>
                    <p>Working at HCL</p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className={styles.slide}>
                <div className={styles.mainSlider}>
                  <div className={styles.QuoteOrange}>
                    <FaQuoteLeft />
                  </div>
                  <div className={styles.content}>
                    <div className={styles.contentRight}>
                      <p className={styles.para}>
                        I got placed at AGS within 9 months of joining Learnbay
                        institute. Live interaction sessions are the best part
                        here since we could clear all queries. The projects are
                        excellent. Overall I had a great experience and I urge
                        everyone to enroll in this institute.
                        <br />
                      </p>
                    </div>
                    <div className={styles.line}></div>
                    <div>
                      <Image
                        src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/abhishek-home.png"
                        layout="intrinsic"
                        loading="lazy"
                        width="80"
                        height="80"
                        alt="aravind-home"
                      />
                    </div>
                    <div className={styles.name}>
                      <h3>Abhishek Singh </h3>
                      <p>Working at AGS</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className={styles.slide}>
                <div className={styles.mainSlider}>
                  <div className={styles.QuoteBlue}>
                    <FaQuoteLeft />
                  </div>
                  <div className={styles.content}>
                    <div className={styles.contentRight}>
                      <div>
                        <p className={styles.para}>
                          One on One counseling from experts has guided me to
                          make the right decision. The Learnbay team was amazing
                          in assisting me with live projects and preparing for
                          the placements. Thank you! Learnbay for your
                          tremendous support in excelling in my Data Science
                          Career.
                          <br />
                        </p>
                      </div>
                      <div className={styles.line}></div>
                      <div className={styles.imgP}>
                        <Image
                          src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/vishal-home.png"
                          layout="intrinsic"
                          loading="lazy"
                          width="80"
                          height="80"
                          alt="vishal-home"
                        />
                      </div>
                      <div className={styles.name}>
                        <h3>Vishal </h3>
                        <p> Working at Bridge i2i</p>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonial;
