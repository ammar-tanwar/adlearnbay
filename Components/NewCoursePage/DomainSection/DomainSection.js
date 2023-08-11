import React, { useEffect, useState } from "react";
import styles from "./DomainSection.module.css";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/scrollbar";
import { Autoplay, Scrollbar } from "swiper";
import { FaDownload } from "react-icons/fa";
import Form from "../../Form/Form";
import Popup from "../../Popup/Popup";
import dynamic from "next/dynamic";
const Button = dynamic(() => import("../Button/Button"));

function DomainSection({
  dataScience,
  DomainSectionData,
  domainSectionData,
  workExperience,
  jobPlacee,
}) {
  const [domainDataArray, setDomainDataArray] = useState(domainSectionData);

  const [mobile, setMobile] = useState(false);
  const [popups, setPopups] = useState(false);
  const popupShow = () => {
    setPopups(true);
  };
  const [titleCourse, setTitleCourse] = useState();
  const [brochureLink, setBrochureLink] = useState();
  useEffect(() => {
    let width = window.innerWidth;
    if (width < 600) {
      setMobile(true);
    }
  }, []);

  return (
    <div className={styles.sliderBox}>
      <Popup trigger={popups} setTrigger={setPopups} className="popupModal">
        <div className="leftPopup">
          <div
            className="whiteP"
            style={{ width: "350px", height: "400px" }}
          ></div>
        </div>
        <div className="RightPopup">
          <h5>Download Brochure</h5>
          <Form
            dataScience={dataScience}
            downloadBrochure
            titleCourse={titleCourse}
            brochureLink={brochureLink}
            jobPlacee={jobPlacee}
            workExperience={workExperience}
          />
        </div>
      </Popup>
      <>
        <div className={styles.bulb}>
          <div className={styles.img}>
            <div className="imgWrapper">
              <Image
                src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/Domain-Electives-Left-Guy.png"
                loading="lazy"
                width="671"
                height="704"
                alt="Bulb"
              />
            </div>
          </div>
          <p className={styles.bgP}>Become a domain expert</p>
        </div>
        <div>
          <section>
            <div className={styles.Section1}>
              <h4 className={styles.h1}>
                <span className={styles.h1Span}>Domain Electives</span>
              </h4>

              <div className={styles.Testimonial}>
                <div className={styles.swiperleft}>
                  <Swiper
                    slidesPerView={mobile ? 1.1 : 2}
                    spaceBetween={mobile ? 10 : 15}
                    breakpoints={{
                      481: {
                        slidesPerView: 1.5,
                        spaceBetween: 20,
                      },
                      641: {
                        slidesPerView: 1.6,
                        spaceBetween: 20,
                      },
                      801: {
                        slidesPerView: 1,
                        spaceBetween: 15,
                      },
                      961: {
                        slidesPerView: 1.4,
                        spaceBetween: 15,
                      },
                      1024: {
                        slidesPerView: 1.5,
                        spaceBetween: 15,
                      },
                      1280: {
                        slidesPerView: 2.1,
                        spaceBetween: 30,
                      },
                    }}
                    scrollbar={{ draggable: true }}
                    autoplay={{
                      delay: 2500,
                    }}
                    grabCursor={true}
                    modules={[Autoplay, Scrollbar]}
                    autoPlay={true}
                    className="mySwiper"
                  >
                    {domainDataArray.map((data, index) => {
                      const {
                        id,
                        p1,
                        p2,
                        desc,
                        btn,
                        BrochureLink,
                        TitleCourse,
                      } = data;

                      return (
                        <SwiperSlide className={styles.slide} key={index}>
                          <div className={styles.mainSliderYellow}>
                            <div className={styles.number}>
                              <p>{p1}</p>
                              <hr className={styles.hr} />
                            </div>
                            <div className={styles.imgP}>
                              <p>{p2}</p>
                            </div>
                            <div key={index}>
                              <ul
                                style={{
                                  padding: "0px 0px 0px 20px",
                                }}
                                className={styles.para}
                                key={titleCourse}
                              >
                                {desc.map((data) => {
                                  return <li key={data}>{data}</li>;
                                })}
                              </ul>
                            </div>
                            <div
                              onClick={() => {
                                setBrochureLink(BrochureLink);
                                setTitleCourse(TitleCourse);
                                popupShow();
                              }}
                              style={{ marginTop: "20px" }}
                            >
                              <Button
                                className={styles.fillBtn}
                                text={btn}
                                passIcon={<FaDownload className="bIconS" />}
                              />
                            </div>
                          </div>
                        </SwiperSlide>
                      );
                    })}
                  </Swiper>
                </div>
              </div>
            </div>
          </section>
        </div>
      </>
    </div>
  );
}

export default DomainSection;
