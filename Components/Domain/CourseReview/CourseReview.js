import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Pagination } from "swiper";
import Image from "next/image";
import styles from "./CourseReview.module.css";
import { MdDownload } from "react-icons/md";
import Popup from "../../Popup/Popup";
import Form from "../../Form/Form";
import FormOtp from "../../FormOtp/FormOtp";
import { FaDownload } from "react-icons/fa";

const CourseReview = ({
  p1,
  p2,
  p3,
  formotp,
  formotpForS3DS,
  h1,
  h2,
  h2p,
  hSRC,
  rewHead,
  fullStackContent,
  s2dataScience,
  fullstackADS,
  marketing,
}) => {
  const [popups, setPopups] = useState(false);

  const popupShow = () => {
    setPopups(true);
  };
  const [mobile, setMobile] = useState(false);
  useEffect(() => {
    let width = window.innerWidth;
    if (width < 600) {
      setMobile(true);
    }
  });
  return (
    <>
      {" "}
      <div className={styles.reviewWrap}>
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
            <h5>Download Placement Brochure</h5>

            {formotpForS3DS ? (
              <FormOtp popup={true} />
            ) : (
              <>
                {formotp ? (
                  <FormOtp
                    popup={true}
                    setTrigger={setPopups}
                    s2dataScience={s2dataScience}
                    fullstackADS={fullstackADS}
                    marketing={marketing}
                  />
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

        <div className={styles.bottomReview}>
          <h5>
            {h1}
            <br />
            {h2}{" "}
          </h5>
          <p>{h2p}</p>
          <div className={styles.imgHire}>
            <Image src={hSRC} width="1603" height="82" layout="intrinsic" />
          </div>

          <button onClick={popupShow} className={styles.btn}>
            Download Placement Report <FaDownload className="bIcons" />
          </button>
        </div>
        <div className={styles.swiperleft}>
          <h5>{rewHead}</h5>
          {fullStackContent ? (
            <Swiper
              slidesPerView={mobile ? 1.02 : 1}
              spaceBetween={mobile ? 10 : 10}
              navigation={true}
              pagination={{ clickable: true }}
              grabCursor={true}
              modules={[Pagination, Navigation]}
              className="mySwiper"
            >
              <SwiperSlide className={styles.slide}>
                <div className={styles.bottom}>
                  <div className={styles.leftBottom}>
                    <Image
                      src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/hike.svg"
                      width="55"
                      height="55"
                      layout="intrinsic"
                      className={styles.hikeImg}
                    />
                    <div className={styles.leftBottomC}>
                      <h5>140%</h5>
                      <p>Salary Hike</p>
                    </div>
                  </div>
                </div>
                <div className={styles.content}>
                  <div className={styles.imgP}>
                    <Image
                      src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/neha.jpeg"
                      layout="intrinsic"
                      width="100"
                      height="100"
                      alt="preksha-home"
                    />
                  </div>

                  <div className={styles.contentRight}>
                    <div className={styles.name}>
                      <p>Silicon Design Engineer 2</p>
                      <h5>Neha Gour</h5>
                    </div>
                    <div>
                      <p className={styles.para}>
                        Have taken S/W Development course at this institute.
                        Irrespective of implementation languages, one can join
                        this. Cleared many tough concepts in an easy way. I was
                        trying to switch to product based MNC and this course
                        just made it possible.
                        <br />
                      </p>
                    </div>
                  </div>
                  {/* <div className={styles.cIcon}>
                  <Image
                    src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/HCL.png"
                    width="230"
                    height="40"
                    layout="intrinsic"
                  />
                </div> */}
                </div>
              </SwiperSlide>
              <SwiperSlide className={styles.slide}>
                <div className={styles.bottom}>
                  <div className={styles.leftBottom}>
                    <Image
                      src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/hike.svg"
                      width="55"
                      height="55"
                      layout="intrinsic"
                      className={styles.hikeImg}
                    />
                    <div className={styles.leftBottomC}>
                      <h5>132%</h5>
                      <p>Salary Hike</p>
                    </div>
                  </div>
                </div>
                <div className={styles.content}>
                  <div className={styles.imgP}>
                    <Image
                      src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/kamlesh.jpg"
                      layout="intrinsic"
                      width="100"
                      height="100"
                      alt="aravind-home"
                    />
                  </div>

                  <div className={styles.contentRight}>
                    <div className={styles.name}>
                      <p>SDE I at Amazon</p>
                      <h5>Kamlesh Sahu</h5>
                    </div>
                    <p className={styles.para}>
                      This Course Helped me in getting 6 month SDE INTERNSHIP at
                      AMAZON,India. The advance DSA topics are taught and
                      explained in such a simplified manner that even a newbie
                      can catch up very easily.
                      <br />
                    </p>
                  </div>
                  <div className={styles.cIcon}>
                    <Image
                      src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/amazon-review.png"
                      width="99"
                      height="30"
                      layout="intrinsic"
                    />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className={styles.slide}>
                <div className={styles.bottom}>
                  <div className={styles.leftBottom}>
                    <Image
                      src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/hike.svg"
                      width="55"
                      height="55"
                      layout="intrinsic"
                      className={styles.hikeImg}
                    />
                    <div className={styles.leftBottomC}>
                      <h5>127%</h5>
                      <p>Salary Hike</p>
                    </div>
                  </div>
                </div>
                <div className={styles.content}>
                  <div className={styles.imgP}>
                    <Image
                      src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/nikhil-g.jpeg"
                      layout="intrinsic"
                      width="100"
                      height="100"
                      alt="vishal-home"
                    />
                  </div>

                  <div className={styles.contentRight}>
                    <div className={styles.name}>
                      <p> SDE-2 at Amazon</p>
                      <h5>Nikhil Goyal </h5>
                    </div>
                    <div>
                      <p className={styles.para}>
                        I enrolled for Data Structures and Algorithms course at
                        Learnbay. teaching methodology has been really engaging.
                        Trainers entertains all the approaches in the class
                        which helped us to see the problems from multiple
                        angles.
                        <br />
                      </p>
                    </div>
                  </div>
                  <div className={styles.cIcon}>
                    <Image
                      src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/amazon-review.png"
                      width="99"
                      height="30"
                      layout="intrinsic"
                    />
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          ) : (
            <Swiper
              slidesPerView={mobile ? 1.02 : 1}
              spaceBetween={mobile ? 10 : 10}
              navigation={true}
              pagination={{ clickable: true }}
              grabCursor={true}
              modules={[Pagination, Navigation]}
              className="mySwiper"
            >
              <SwiperSlide className={styles.slide}>
                <div className={styles.bottom}>
                  <div className={styles.leftBottom}>
                    <Image
                      src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/hike.svg"
                      width="55"
                      height="55"
                      layout="intrinsic"
                      className={styles.hikeImg}
                    />
                    <div className={styles.leftBottomC}>
                      <h5>140%</h5>
                      <p>Salary Hike</p>
                    </div>
                  </div>
                  {/* <div className={styles.rightBottom}>
                  <div className={styles.leftBottomC}>
                    <p>Watch More On</p>
                  </div>
                  <a
                    href="https://www.youtube.com/watch?v=vSjfKdIzUjY"
                    target="_blank"
                  >
                    <Image
                      src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/reviewYtIcon.png"
                      width="107"
                      height="60"
                      layout="intrinsic"
                    />
                  </a>
                </div> */}
                </div>
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
                      <p>{p1}</p>
                      <h5>Preksha Mishra</h5>
                    </div>
                    <div>
                      <p className={styles.para}>
                        I had a great learning experience at Learnbay. The
                        faculties here are top notch. Right from enrollment to
                        getting a good job, they keep putting enormous efforts
                        for each and every candidate. Thanks to all the
                        trainers, backend team, the HR team and to the directors
                        for making this journey smooth.
                        <br />
                      </p>
                    </div>
                  </div>
                  <div className={styles.cIcon}>
                    <Image
                      src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/HCL.png"
                      width="230"
                      height="40"
                      layout="intrinsic"
                    />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className={styles.slide}>
                <div className={styles.bottom}>
                  <div className={styles.leftBottom}>
                    <Image
                      src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/hike.svg"
                      width="55"
                      height="55"
                      layout="intrinsic"
                      className={styles.hikeImg}
                    />
                    <div className={styles.leftBottomC}>
                      <h5>210%</h5>
                      <p>Salary Hike</p>
                    </div>
                  </div>
                  {/* <div className={styles.rightBottom}>
                  <div className={styles.leftBottomC}>
                    <p>Watch More On</p>
                  </div>
                  <a
                    href="https://www.youtube.com/watch?v=x_EmBJ-h7DE"
                    target="_blank"
                  >
                    <Image
                      src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/reviewYtIcon.png"
                      width="107"
                      height="60"
                      layout="intrinsic"
                    />
                  </a>
                </div> */}
                </div>
                <div className={styles.content}>
                  <div className={styles.imgP}>
                    <Image
                      src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/asrar-home.png"
                      layout="intrinsic"
                      width="100"
                      height="100"
                      alt="preksha-home"
                    />
                  </div>

                  <div className={styles.contentRight}>
                    <div className={styles.name}>
                      <p>{p2}</p>
                      <h5>Mohammad Israr</h5>
                    </div>
                    <div>
                      <p className={styles.para}>
                        Thanks to the Learnbay data science course and
                        outstanding assistance, I could ace the TCS interview
                        and secure a job with a 400% pay hike. My understanding
                        of the course was greatly improved by the real-time
                        projects and respective IBM project experience
                        certification.
                        <br />
                      </p>
                    </div>
                  </div>
                  <div className={styles.cIcon}>
                    <Image
                      src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/TCS.png"
                      width="99"
                      height="30"
                      layout="intrinsic"
                    />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className={styles.slide}>
                <div className={styles.bottom}>
                  <div className={styles.leftBottom}>
                    <Image
                      src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/hike.svg"
                      width="55"
                      height="55"
                      layout="intrinsic"
                      className={styles.hikeImg}
                    />
                    <div className={styles.leftBottomC}>
                      <h5>142%</h5>
                      <p>Salary Hike</p>
                    </div>
                  </div>
                  {/* <div className={styles.rightBottom}>
                  <div className={styles.leftBottomC}>
                    <p>Watch More On</p>
                  </div>
                  <a href="https://youtu.be/hewBtR_WoDM" target="_blank">
                    <Image
                      src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/reviewYtIcon.png"
                      width="107"
                      height="60"
                      layout="intrinsic"
                    />
                  </a>
                </div> */}
                </div>
                <div className={styles.content}>
                  <div className={styles.imgP}>
                    <Image
                      src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/aravind-home.png"
                      layout="intrinsic"
                      width="100"
                      height="100"
                      alt="aravind-home"
                    />
                  </div>

                  <div className={styles.contentRight}>
                    <div className={styles.name}>
                      <p>Senior Associate - Data Scientist</p>
                      <h5>Aravind Kumar</h5>
                    </div>
                    <p className={styles.para}>
                      Choosing Learnbay was my best decision ever. The
                      instructors were encouraging and glad to answer questions.
                      The best feature is that their flexible modules & small
                      size batches. I was able to manage my time and learn while
                      working. Thanks to Learnbay for my lucrative placement.
                      <br />
                    </p>
                  </div>
                  <div className={styles.cIcon}>
                    <Image
                      src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/amazon-review.png"
                      width="99"
                      height="30"
                      layout="intrinsic"
                    />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className={styles.slide}>
                <div className={styles.bottom}>
                  <div className={styles.leftBottom}>
                    <Image
                      src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/hike.svg"
                      width="55"
                      height="55"
                      layout="intrinsic"
                      className={styles.hikeImg}
                    />
                    <div className={styles.leftBottomC}>
                      <h5>150%</h5>
                      <p>Salary Hike</p>
                    </div>
                  </div>
                </div>
                <div className={styles.content}>
                  <div className={styles.imgP}>
                    <Image
                      src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/ritesh-home.png"
                      layout="intrinsic"
                      width="100"
                      height="100"
                      alt="ritesh-home"
                    />
                  </div>

                  <div className={styles.contentRight}>
                    <div className={styles.name}>
                      <p>{p3}</p>
                      <h5>Ritish Kumar</h5>
                    </div>
                    <div>
                      <p className={styles.para}>
                        I always had a dilemma about how to switch to the IT
                        field until I stumbled upon the foundation data science
                        course offered by Learnbay. The perfect combination of
                        flexibility, affordability, and supportiveness. They
                        helped me get placed at Capgemini, and I’m delighted
                        with my current career. All Thanks to Learnbay!
                        <br />
                      </p>
                    </div>
                  </div>
                  <div className={styles.cIcon}>
                    <Image
                      src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/Capgemini.png"
                      width="99"
                      height="30"
                      layout="intrinsic"
                    />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className={styles.slide}>
                <div className={styles.bottom}>
                  <div className={styles.leftBottom}>
                    <Image
                      src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/hike.svg"
                      width="55"
                      height="55"
                      layout="intrinsic"
                      className={styles.hikeImg}
                    />
                    <div className={styles.leftBottomC}>
                      <h5>100%</h5>
                      <p>Salary Hike</p>
                    </div>
                  </div>
                </div>
                <div className={styles.content}>
                  <div className={styles.imgP}>
                    <Image
                      src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/saurabh-home.png"
                      layout="intrinsic"
                      width="100"
                      height="100"
                      alt="saurabh-home"
                    />
                  </div>

                  <div className={styles.contentRight}>
                    <div className={styles.name}>
                      <p>Working at HCL</p>
                      <h5>Sourabh Mourya</h5>
                    </div>
                    <div>
                      <p className={styles.para}>
                        Flexible classes have helped me to manage my job
                        schedule. Learning Data Science directly from MNC
                        experts provided the chance to learn industry-specific
                        tricks and tips. I am grateful to the Learnbay team for
                        providing an excellent platform that enhanced my
                        professional growth. Thank you very much! Learnbay.
                        <br />
                      </p>
                    </div>
                  </div>
                  <div className={styles.cIcon}>
                    <Image
                      src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/HCL.png"
                      width="230"
                      height="40"
                      layout="intrinsic"
                    />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className={styles.slide}>
                <div className={styles.bottom}>
                  <div className={styles.leftBottom}>
                    <Image
                      src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/hike.svg"
                      width="55"
                      height="55"
                      layout="intrinsic"
                      className={styles.hikeImg}
                    />
                    <div className={styles.leftBottomC}>
                      <h5>132%</h5>
                      <p>Salary Hike</p>
                    </div>
                  </div>
                </div>
                <div className={styles.content}>
                  <div className={styles.imgP}>
                    <Image
                      src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/abhishek-home.png"
                      layout="intrinsic"
                      width="100"
                      height="100"
                      alt="aravind-home"
                    />
                  </div>

                  <div className={styles.contentRight}>
                    <div className={styles.name}>
                      <p>Working at AGS</p>
                      <h5>Abhishek Singh </h5>
                    </div>
                    <p className={styles.para}>
                      I got placed at AGS within 9 months of joining Learnbay
                      institute. Live interaction sessions are the best part
                      here since we could clear all queries. The projects are
                      excellent. Overall I had a great experience and I urge
                      everyone to enroll in this institute.
                      <br />
                    </p>
                  </div>
                  <div className={styles.cIcon}>
                    <Image
                      src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/amazon-review.png"
                      width="99"
                      height="30"
                      layout="intrinsic"
                    />
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide className={styles.slide}>
                <div className={styles.bottom}>
                  <div className={styles.leftBottom}>
                    <Image
                      src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/hike.svg"
                      width="55"
                      height="55"
                      layout="intrinsic"
                      className={styles.hikeImg}
                    />
                    <div className={styles.leftBottomC}>
                      <h5>127%</h5>
                      <p>Salary Hike</p>
                    </div>
                  </div>
                </div>
                <div className={styles.content}>
                  <div className={styles.imgP}>
                    <Image
                      src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/vishal-home.png"
                      layout="intrinsic"
                      width="100"
                      height="100"
                      alt="vishal-home"
                    />
                  </div>

                  <div className={styles.contentRight}>
                    <div className={styles.name}>
                      <p> Working at Bridge i2i</p>
                      <h5>Vishal </h5>
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
                  <div className={styles.cIcon}>
                    <Image
                      src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/i2i.webp"
                      width="99"
                      height="30"
                      layout="intrinsic"
                    />
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          )}
        </div>
      </div>
    </>
  );
};

export default CourseReview;
