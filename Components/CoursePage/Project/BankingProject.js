import styles from "./project.module.scss";
import React, { useState } from "react";
import Popup from "../../Popup/Popup";
import Form from "../../Form/Form";
import FormOtp from "../../FormOtp/FormOtp";
import Image from "next/image";
import { BsCheck2 } from "react-icons/bs";
import { FaDownload } from "react-icons/fa";
import { GoDeviceDesktop } from "react-icons/go";
import { AiOutlineBank } from "react-icons/ai";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import "swiper/css";

import "swiper/css/pagination";

const Project = ({ popupHead, project, domain, projectTitle, formotp, formotpForS3DS, domainName, domainParagraph, projectName, props }) => {
  const [popups, setPopups] = useState(false);

  const [device, setDevice] = useState();

  const [img, setImg] = useState("");
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [mobile, setMobile] = useState(false);

  const popupShow = () => {
    setPopups(true);
  };

  return (
    <div className={styles.projectHeader}>
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
          <h5>{popupHead}</h5>
          <p>Please enter the following details to initiate your download</p>

          {formotpForS3DS ? (
            <FormOtp popup={true} brief={true} currentCompany={true} />
          ) : (

            <>
              {formotp ? (
                <FormOtp popup={true} />
              ) : (
                <Form setTrigger={setPopups} downloadBrochure />
              )}
            </>
          )}


        </div>
      </Popup>

      <div className={styles.headWrapper}>
        <div className={styles.left}>
          <h3>{projectTitle}</h3>

          <div className={styles.iconWrapper}>
            <div className={styles.middle}>
              <BsCheck2 className={styles.icon} />
              <p>Practice with Latest Tools</p>
            </div>
            <div className={styles.middle}>
              <BsCheck2 className={styles.icon} />
              <p>Designed by Industry Experts</p>
            </div>
            <div className={styles.middle}>
              <BsCheck2 className={styles.icon} />
              <p>Get Real-world Experience</p>
            </div>
          </div>
          <div className={styles.projectNumb}>
            <div className={styles.leftProjectNumb}>
              <GoDeviceDesktop className={styles.lIcon} />
              <div>
                <h5>{project}</h5>
                <p>Available</p>
              </div>
            </div>
            <div className={styles.rightProjectNumb}>
              <AiOutlineBank className={styles.rIcon} />
              <div>
                <h5>7+ Cities</h5>
                <p>with Hybrid Model</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.container}>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          grabCursor={true}
          breakpoints={{
            768: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide className={styles.project}>
            <div className={styles.header}>
              <div className={styles.left}>
                <h5>{props.projectName1}</h5>
                <p>{props.domainName1}</p>
              </div>

            </div>
            <div className={styles.body}>
              <p>{props.domainParagraph1} </p>
              <span
                onClick={() => {
                  popupShow();
                  setTitle("HR Domain");
                  setDesc(
                    "IBM intends to boost its HR department by identifying employees' masked inconsistency. They need models to identify the graphical variations in their 14000+ employees' performances. Help them build models with your regressions and other ML abilities."
                  );
                  setImg("https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/Hr-domain-img.png");
                }}
              >
                Learn More
              </span>
            </div>
          </SwiperSlide>

          <SwiperSlide className={styles.project}>
            <div className={styles.header}>
              <div className={styles.left}>
                <h5>{props.projectName2 }</h5>
                <p>{props.domainName2}</p>
              </div>

            </div>
            <div className={styles.body}>
              <p>{props.domainParagraph2} </p>
              <span
                onClick={() => {
                  popupShow();
                  setTitle("Marketing Domain");
                  setDesc(
                    "Swiggy seeks a broad marketing campaign. But they need automated keyword generation tools. They also require proper message preparation and delivery of the same to the right audience at the right time. You can help them with text analytics and NLP-based keyword research solutions"
                  );
                  setImg("https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/Marketing-domain-img.png");
                }}
              >
                Learn More
              </span>
            </div>
          </SwiperSlide>

          <SwiperSlide className={styles.project}>
            <div className={styles.header}>
              <div className={styles.left}>
                <h5>{props.projectName3 }</h5>
                <p>{props.domainName3}</p>
              </div>

            </div>
            <div className={styles.body}>
              <p>{props.domainParagraph3} </p>
              <span
                onClick={() => {
                  popupShow();
                  setTitle("Supply chain Domain");
                  setDesc(
                    "An automated inventory management system will keep track of stock levels and upcoming orders. In addition, you can contribute to DataCo's intelligent supply chain software generation project by using ML algorithms and R programming skills."
                  );
                  setImg("https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/supplyChain.png");
                }}
              >
                Learn More
              </span>
            </div>
          </SwiperSlide>

          <SwiperSlide className={styles.project}>
            <div className={styles.header}>
              <div className={styles.left}>
                <h5>{props.projectName4 }</h5>
                <p>{props.domainName4}</p>
              </div>

            </div>
            <div className={styles.body}>
              <p>{props.domainParagraph4} </p>
              <span
                onClick={() => {
                  popupShow();
                  setTitle("Sales Domain");
                  setDesc(
                    "BMW allows existing customers to sell used cars  but many competitors are now offering better resale values. A data science-powered statistical app from BMW will provide the best market value for used cars based on parameters like Km driven, daily pricing up and down, manufacturing dates, and so on. Develop your analytical skills through such projects."
                  );
                  setImg("https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/Sales-domain.png");
                }}
              >
                Learn More
              </span>
            </div>
          </SwiperSlide>

          <SwiperSlide className={styles.project}>
            <div className={styles.header}>
              <div className={styles.left}>
                <h5>{props.projectName5 }</h5>
                <p>{props.domainName5}</p>
              </div>

            </div>
            <div className={styles.body}>
              <p>{props.domainParagraph5} </p>
              <span
                onClick={() => {
                  popupShow();
                  setTitle("Retail Domain");
                  setDesc(
                    "Take an active part in the Walmart sales forecasting project. From the huge data set available, you have to perform a sales forecast for 45 Walmart stores. You have to include holiday markdown sales too."
                  );
                  setImg("https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/supplyChain.png");
                }}
              >
                Learn More
              </span>
            </div>
          </SwiperSlide>

          <SwiperSlide className={styles.project}>
            <div className={styles.header}>
              <div className={styles.left}>
                <h5>{props.projectName6 }</h5>
                <p>{props.domainName6}</p>
              </div>

            </div>
            <div className={styles.body}>
              <p>{props.domainParagraph6} </p>
              <span
                onClick={() => {
                  popupShow();
                  setTitle("Healthcare Domain");
                  setDesc(
                    "Samsung will launch a new healthcare app soon. The key goal of this app is accurate human activity tracking and providing relevant health-related recommendations. Continuous analysis of a massive amount of mobile data is required for such an app."
                  );
                  setImg("https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/supplyChain.png");
                }}
              >
                Learn More
              </span>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      <div>
        <div className={styles.btnWrapper}>
          <button onClick={popupShow} style={{ margin: "auto" }}>
            <FaDownload className="bIcons" />
            Project Brochure
          </button>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Project);
