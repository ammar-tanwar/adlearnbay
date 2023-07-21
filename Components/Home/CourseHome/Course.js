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
import Form from "../../Form/Form";
import FormOtp from "../../FormOtp/FormOtp";

import {
  viewAllD,
  ForProgrammersD,
  ForNonProgrammerD,
  JobGuaranteeD,
  StackD,
} from "./courseDetails";

const Course = ({ common, formotp }) => {
  const [viewAll, setViewAll] = useState(false);
  const [oneYear, setOneYear] = useState(true);
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
  const filtteredViewAllF = viewAllD.filter((post) => post.tag === " ");
  const filtteredForProgrammersD = ForProgrammersD.filter(
    (post) => post.tag === "Data science"
  );
  const filtteredForProgrammersF = ForProgrammersD.filter(
    (post) => post.tag === " "
  );
  const filtteredNonProgrammerD = ForNonProgrammerD.filter(
    (post) => post.tag === "Data science"
  );
  const filtteredJobGuaranteeD = JobGuaranteeD.filter(
    (post) => post.tag === "Data science"
  );
  const filtteredJobGuaranteeF = JobGuaranteeD.filter(
    (post) => post.tag === " "
  );
  const filtteredStackF = StackD.filter((post) => post.tag === " ");

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
          <h5 style={{ fontSize: "22px" }}>Download Brochure</h5>
          <p>Please enter the following details to initiate your download</p>
          {formotp ? (
            <FormOtp popup={true} downloadBrochure radio={true} />
          ) : (
            <Form setTrigger={setPopups} downloadBrochure radio={true} />
          )}
        </div>
      </Popup>

      <h2>Industry Accredited Certification For Professionals</h2>

      <div className={styles.courses}>
        <div className={styles.listPanel}>
          <span
            onClick={() => {
              setViewAll(false);
              setOneYear(true);
              setNonTech(false);
              setStack(false);
              setGuarantee(false);
            }}
            style={
              oneYear
                ? { background: "white", color: "#0072bc" }
                : { background: "#E5F3FA" }
            }
          >
            Popular Courses
          </span>
          <span
            onClick={() => {
              setViewAll(false);
              setOneYear(false);
              setNonTech(true);
              setStack(false);
              setGuarantee(false);
            }}
            style={
              nonTech
                ? { background: "white", color: "#0072bc" }
                : { background: "#E5F3FA" }
            }
          >
            Data Science & AI
          </span>
          <span
            onClick={() => {
              setViewAll(false);
              setOneYear(false);
              setNonTech(false);
              setStack(true);
              setGuarantee(false);
            }}
            style={
              Stack
                ? { background: "white", color: "#0072bc" }
                : { background: "#E5F3FA" }
            }
          >
            Software Development
          </span>
          <span
            onClick={() => {
              setViewAll(false);
              setOneYear(false);
              setNonTech(false);
              setStack(false);
              setGuarantee(true);
            }}
            style={
              Guarantee
                ? { background: "white", color: "#0072bc" }
                : { background: "#E5F3FA" }
            }
          >
            100% Placement Assistance
          </span>
          <span
            onClick={() => {
              setViewAll(true);
              setOneYear(false);
              setNonTech(false);
              setGuarantee(false);
              setStack(false);
            }}
            style={
              viewAll
                ? { background: "white", color: "#0072bc" }
                : { background: "#E5F3FA" }
            }
          >
            View All
          </span>
        </div>
        {oneYear ? (
          <div className={styles.mPanel}>
            <h5>Data Science (4) </h5>
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
                {filtteredForProgrammersD.map((viewAllData) => {
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
                            className={styles.courseImg}
                            alt="data science course in bangalore"
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
                              style={{ color: "#f99600" }}
                            />
                            {para[1]}
                          </p>
                          <p>
                            <BsCheckCircle className={styles.checkCircle} />
                            {para[2]}
                          </p>
                          <div className={styles.btnWrapper}>
                            {common ? (
                              <a onClick={popupShow}>
                                <button>View Details</button>
                              </a>
                            ) : (
                              <a href={link1}>
                                <button>View Details</button>
                              </a>
                            )}
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
            <h5>Software Development (2) </h5>
            <div className={styles.gridPanel}>
              <Swiper
                slidesPerView={mobile ? 1.1 : 3}
                spaceBetween={mobile ? 10 : 20}
                pagination={{
                  clickable: true,
                }}
                grabCursor={true}
                modules={[Pagination]}
                className="mySwiper"
              >
                {filtteredStackF.map((viewAllData) => {
                  const { id, title, title1, img, para, link1 } = viewAllData;
                  return (
                    <SwiperSlide className={styles.leftSide} key={id}>
                      <div className={styles.gridImg}>
                        <a href={link1}>
                          <img
                            src={img}
                            layout="intrinsic"
                            width="423px"
                            height="252px"
                            className={styles.courseImg}
                            alt="data science course in bangalore"
                          />
                        </a>
                      </div>
                      <div
                        className={styles.contentBox}
                        style={{ marginTop: "452px" }}
                      >
                        <h6>{title}</h6>
                        <h6>{title1}</h6>
                        <p>
                          <BiTimeFive className={styles.checkCircle} />
                          {para[0]}
                        </p>
                        <p>
                          <AiOutlineFundProjectionScreen
                            className={styles.checkCircle}
                            style={{ color: "#f99600" }}
                          />
                          {para[1]}
                        </p>
                        <p>
                          <BsCheckCircle className={styles.checkCircle} />
                          {para[2]}
                        </p>
                        <div className={styles.btnWrapper}>
                          {common ? (
                            <a onClick={popupShow}>
                              <button>View Details</button>
                            </a>
                          ) : (
                            <a href={link1}>
                              <button>View Details</button>
                            </a>
                          )}
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
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>
          </div>
        ) : (
          ""
        )}

        {nonTech ? (
          <div className={styles.mPanel}>
            <h5>Data Science (6) </h5>
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
                {filtteredNonProgrammerD.map((viewAllData) => {
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
                              style={{ color: "#f99600" }}
                            />
                            {para[1]}
                          </p>
                          <p>
                            <BsCheckCircle className={styles.checkCircle} />
                            {para[2]}
                          </p>
                          <div className={styles.btnWrapper}>
                            {common ? (
                              <a onClick={popupShow}>
                                <button>View Details</button>
                              </a>
                            ) : (
                              <a href={link1}>
                                <button>View Details</button>
                              </a>
                            )}
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
          </div>
        ) : (
          ""
        )}

        {Stack ? (
          <div className={styles.mPanel}>
            <h5>Software Development (2) </h5>
            <div className={styles.gridPanel}>
              <Swiper
                slidesPerView={mobile ? 1.1 : 3}
                spaceBetween={mobile ? 10 : 20}
                pagination={{
                  clickable: true,
                }}
                grabCursor={true}
                modules={[Pagination]}
                className="mySwiper"
              >
                {filtteredForProgrammersF.map((viewAllData) => {
                  const { id, title, title1, img, para, link1 } = viewAllData;
                  return (
                    <SwiperSlide className={styles.leftSide} key={id}>
                      <div className={styles.gridImg}>
                        <a href={link1}>
                          <img
                            src={img}
                            layout="intrinsic"
                            width="423px"
                            height="252px"
                            alt="data science course"
                            className={styles.courseImg}
                          />
                        </a>
                      </div>
                      <div
                        className={styles.contentBox}
                        style={{ marginTop: "452px" }}
                      >
                        <h6>{title}</h6>
                        <h6>{title1}</h6>
                        <p>
                          <BiTimeFive className={styles.checkCircle} />
                          {para[0]}
                        </p>
                        <p>
                          <AiOutlineFundProjectionScreen
                            className={styles.checkCircle}
                            style={{ color: "#f99600" }}
                          />
                          {para[1]}
                        </p>
                        <p>
                          <BsCheckCircle className={styles.checkCircle} />
                          {para[2]}
                        </p>
                        <div className={styles.btnWrapper}>
                          {common ? (
                            <a onClick={popupShow}>
                              <button>View Details</button>
                            </a>
                          ) : (
                            <a href={link1}>
                              <button>View Details</button>
                            </a>
                          )}
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
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>
          </div>
        ) : (
          ""
        )}

        {Guarantee ? (
          <div className={styles.mPanel}>
            <h5>Data Science (1) </h5>
            <div className={styles.gridPanel}>
              <Swiper
                slidesPerView={mobile ? 1 : 3.2}
                spaceBetween={mobile ? 10 : 20}
                pagination={{
                  clickable: true,
                }}
                grabCursor={true}
                modules={[Pagination]}
                className="mySwiper"
              >
                {filtteredJobGuaranteeD.map((viewAllData) => {
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
                            alt="data science course"
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
                              style={{ color: "#f99600" }}
                            />
                            {para[1]}
                          </p>
                          <p>
                            <BsCheckCircle className={styles.checkCircle} />
                            {para[2]}
                          </p>
                          <div className={styles.btnWrapper}>
                            {common ? (
                              <a onClick={popupShow}>
                                <button>View Details</button>
                              </a>
                            ) : (
                              <a href={link1}>
                                <button>View Details</button>
                              </a>
                            )}
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
            {/* <h5>Software Development (1) </h5>
            <div className={styles.gridPanel}>
              <Swiper
                slidesPerView={mobile ? 1 : 3}
                spaceBetween={mobile ? 10 : 20}
                pagination={{
                  clickable: true,
                }}
                grabCursor={true}
                modules={[Pagination]}
                className="mySwiper"
              >
                {filtteredJobGuaranteeF.map((viewAllData) => {
                  const { id, title, title1, img, para, link1 } = viewAllData;
                  return (
                    <SwiperSlide className={styles.leftSide} key={id}>
                      <div className={styles.gridImg}>
                        <a href={link1}>
                          <img
                            src={img}
                            layout="intrinsic"
                            width="423px"
                            height="252px"
                            alt="data science course"
                            className={styles.courseImg}
                          />
                        </a>
                      </div>
                      <div
                        className={styles.contentBox}
                        style={{ marginTop: "452px" }}
                      >
                        <h6>{title}</h6>
                        <h6>{title1}</h6>
                        <p>
                          <BiTimeFive className={styles.checkCircle} />
                          {para[0]}
                        </p>
                        <p>
                          <AiOutlineFundProjectionScreen
                            className={styles.checkCircle}
                            style={{ color: "#f99600" }}
                          />
                          {para[1]}
                        </p>
                        <p>
                          <BsCheckCircle className={styles.checkCircle} />
                          {para[2]}
                        </p>
                        <div className={styles.btnWrapper}>
                          { common ? (<a onClick={popupShow}>
                              <button>View Details</button>
                            </a>) : (
                            <a href={link1}>
                              <button>View Details</button>
                            </a>
                            )}
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
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div> */}
          </div>
        ) : (
          ""
        )}

        {viewAll ? (
          <div className={styles.mPanel}>
            <h5>Data Science (6) </h5>
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
                              style={{ color: "#f99600" }}
                            />
                            {para[1]}
                          </p>
                          <p>
                            <BsCheckCircle className={styles.checkCircle} />
                            {para[2]}
                          </p>
                          <div className={styles.btnWrapper}>
                            {common ? (
                              <a onClick={popupShow}>
                                <button>View Details</button>
                              </a>
                            ) : (
                              <a href={link1}>
                                <button>View Details</button>
                              </a>
                            )}
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
            <h5>Software Development (2) </h5>
            <div className={styles.gridPanel}>
              <Swiper
                slidesPerView={mobile ? 1.1 : 3}
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
                      <div
                        className={styles.contentBox}
                        style={{ marginTop: "452px" }}
                      >
                        <h6>{title}</h6>
                        <h6>{title1}</h6>
                        <p>
                          <BiTimeFive className={styles.checkCircle} />
                          {para[0]}
                        </p>
                        <p>
                          <AiOutlineFundProjectionScreen
                            className={styles.checkCircle}
                            style={{ color: "#f99600" }}
                          />
                          {para[1]}
                        </p>
                        <p>
                          <BsCheckCircle className={styles.checkCircle} />
                          {para[2]}
                        </p>
                        <div className={styles.btnWrapper}>
                          {common ? (
                            <a onClick={popupShow}>
                              <button>View Details</button>
                            </a>
                          ) : (
                            <a href={link1}>
                              <button>View Details</button>
                            </a>
                          )}
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
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Course;
