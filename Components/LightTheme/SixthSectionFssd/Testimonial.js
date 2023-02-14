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

function Testimonial({formotp}) {
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
                    <FormOtp popup={true} downloadBrochure/>
                  ) : (
                    <Form setTrigger={setPopups} downloadBrochure/>
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
                    Excellent training and awesome
                      environment! I took data structures
                      and algorithm training in LearnBay .
                      They teach concepts clearly and solved
                      as many programs as possible.
                      I was getting interview calls even
                      before course completion.
                    </p>
                  </div>
                  <div className={styles.line}></div>
                  <div className={styles.imgP}>
                    <Image
                      src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/rahul.jpg"
                      layout="intrinsic"
                      loading="lazy"
                      width="80"
                      height="80"
                      alt="preksha-home"
                    />
                  </div>
                  <div className={styles.name}>
                    <h3>Rahul Anand</h3>
                    {/* <p> Working at HCL</p> */}
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
                    This Course Helped me in getting 6
                      month SDE INTERNSHIP at
                      AMAZON,India.
                      The advance DSA topics are taught and
                      explained in such a simplified manner
                      that even a newbie can catch up very
                      easily.
                      <br />
                    </p>
                  </div>
                  <div className={styles.line}></div>
                  <div className={styles.imgP}>
                    <Image
                      src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/kamlesh.jpg"
                      layout="intrinsic"
                      loading="lazy"
                      width="80"
                      height="80"
                      alt="preksha-home"
                    />
                  </div>
                  <div className={styles.name}>
                    <h3>Kamlesh Sahu</h3>
                    {/* <p> Working at TCS</p> */}
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
                    I have done the DS & Algo course from
                      Learnbay. I learned from the basics
                      time complexity, arrays, linked
                      list, stack to advance data structures –
                      trees, graphs etc. Getting into product
                      based MNC was always my dream and
                      this course helped me achieve it .
                      <br />
                    </p>
                  </div>
                  <div className={styles.line}></div>
                  <div className={styles.imgP}>
                    <Image
                      src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/Ashutosh.jpg"
                      layout="intrinsic"
                      loading="lazy"
                      width="80"
                      height="80"
                      alt="aravind-home"
                    />
                  </div>
                  <div className={styles.name}>
                    <h3>Ashutosh Chamoli</h3>
                    {/* <p>Senior Associate - Data Scientist</p> */}
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
                    Before joining the DSA course I wasn’t
                      confident on any of the topics. I can see
                      the change in my coding abilities after
                      the completion of the course! I even got
                      interview calls from several product
                      based companies.
                      <br />
                    </p>
                  </div>
                  <div className={styles.line}></div>
                  <div className={styles.imgP}>
                    <Image
                      src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/Vishrut.jpg"
                      layout="intrinsic"
                      loading="lazy"
                      width="80"
                      height="80"
                      alt="ritesh-home"
                    />
                  </div>
                  <div className={styles.name}>
                    <h3>Vishrut Vats</h3>
                    {/* <p>Working at Capgemini</p> */}
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
                    I attended ds algo course under
                      Learnbay. They discussed multiple
                      approaches to solve any problem
                      starting from brute force to one with
                      less complexity. Assignments, mock
                      interviews and job referrals really
                      helped me in my career.
                      <br />
                    </p>
                  </div>
                  <div className={styles.line}></div>
                  <div className={styles.imgP}>
                    <Image
                      src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/Manav.jpg"
                      layout="intrinsic"
                      loading="lazy"
                      width="80"
                      height="80"
                      alt="saurabh-home"
                    />
                  </div>
                  <div className={styles.name}>
                    <h3>Manav Jain</h3>
                    {/* <p>Working at HCL</p> */}
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
                        I took DS course under Learnbay.
                      Irrespective of implementation
                      languages, one can join this. Their
                      excellent training methodology helps to
                      learn quickly. Their mock interviews with
                      referrals to product based companies
                      gave a good boost to my career
                          <br />
                        </p>
                      </div>
                      <div className={styles.line}></div>
                      <div className={styles.imgP}>
                        <Image
                          src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/Manish.jpg"
                          layout="intrinsic"
                          loading="lazy"
                          width="80"
                          height="80"
                          alt="vishal-home"
                        />
                      </div>
                      <div className={styles.name}>
                        <h3>Manish Jha</h3>
                        {/* <p> Working at Bridge i2i</p> */}
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
