import React, { useState, useEffect } from "react";
import styles from "./Course.module.css";
import { FiDownload } from "react-icons/fi";
import { BiTimeFive } from "react-icons/bi";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { BsCheckCircle } from "react-icons/bs";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Popup from "../../Popup/Popup";
import Form from "../../Event/Form/Form";

import {
  viewAllD,
  ForProgrammersD,
  ForNonProgrammerD,
  JobGuaranteeD,
  StackD,
} from "./courseDetails";

const Course = () => {
  const [viewAll, setViewAll] = useState(true);
  const [oneYear, setOneYear] = useState(false);
  const [nonTech, setNonTech] = useState(false);
  const [Guarantee, setGuarantee] = useState(false);
  const [Stack, setStack] = useState(false);
  const [mobile, setMobile] = useState(false);
  const [tab, setTab] = useState(false);
  const [popups, setPopups] = useState(false);

  const popupShow = () => {
    setPopups(true);
  };

  const filtteredViewAllD = viewAllD.filter(
    (post) => post.tag === "Data science"
  );
  const filtteredViewAllF = viewAllD.filter(
    (post) => post.tag === "Full stack"
  );

  useEffect(() => {
    let width = window.innerWidth;
    if (width < 600) {
      setMobile(true);
    }
  });

  useEffect(() => {
    let width = window.innerWidth;
    if (width < 960) {
      setTab(true);
    }
  });

  return (
    <div className={styles.Course} id="course">
      <Popup trigger={popups} setTrigger={setPopups} className="popupModal" formIMG={true}>
        <div className="leftPopup">
          <div
            className="whiteP"
            style={{ width: "350px", height: "400px" }}
          ></div>
        </div>
        <div className="RightPopup">
          <h5>Download Brochure</h5>
          <p>Please enter the following details to initiate your download</p>
          <Form setTrigger={setPopups} downloadBrochure radio={true} stepupJobExp={true}/>
        </div>
      </Popup>
      <div className={styles.courses}>
        {viewAll ? (
          <div className={styles.mPanel}>
            <h5>Data Science Programs</h5>
            <div className={styles.gridPanel}>
              <Swiper
                slidesPerView={mobile ? 1.1 : 3.2}
                spaceBetween={mobile ? 10 : 20}
                pagination={{
                  clickable: true,
                }}
                grabCursor={true}
                modules={[Pagination]}
                className="mySwiper"
              >
                {filtteredViewAllD.map((viewAllData) => {
                  const { id, title, title1, img, para, link1 } = viewAllData;
                  return (
                    <SwiperSlide className={styles.leftSide} key={id}>
                      <div key={id}>
                        <a href={link1}>
                          <img
                            src={img}
                            layout="intrinsic"
                            width="423px"
                            height="252px"
                            alt="data science course in bangalore"
                            className={styles.courseImg}
                          />
                        </a>
                        <div className={styles.contentBox}>
                          <h6>{title}</h6>
                          <h6>{title1}</h6>
                          <p>
                            <BiTimeFive className={styles.checkCircle} />
                            {para[0]}
                          </p>
                          <p>
                            <AiOutlineFundProjectionScreen
                              className={styles.checkCircle}
                              style={{ color: "#edb552" }}
                            />
                            {para[1]}
                          </p>
                          {/* <p>
                            <BsCheckCircle className={styles.checkCircle} />
                            {para[2]}
                          </p> */}
                          <div className={styles.btnWrapper}>
                            <a onClick={popupShow}>
                              <button
                                className="outLineBtn"
                                style={{ padding: "8px 15px" }}
                              >
                                Brochure
                                <FiDownload
                                  className="bIcon"
                                  style={{ color: "#2979AD" }}
                                />
                              </button>
                            </a>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>
            {/* <h5>Domain Elective</h5>
            <div className={styles.gridPanelDomain}>
              <Swiper
                slidesPerView={mobile ? 1.1 : 3.2}
                spaceBetween={mobile ? 10 : 20}
                pagination={{
                  clickable: true,
                }}
                grabCursor={true}
                modules={[Pagination]}
                className="mySwiper"
              >
                {filtteredViewAllF.map((viewAllData) => {
                  const { id, title, title1, img, para, link1 } = viewAllData;
                  return (
                    <SwiperSlide className={styles.leftSide} key={id}>
                      <a href={link1}>
                        <img
                          src={img}
                          layout="intrinsic"
                          width="423px"
                          height="252px"
                          alt="data science course in bangalore"
                          className={styles.courseImg}
                        />
                      </a>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div> */}
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Course;
