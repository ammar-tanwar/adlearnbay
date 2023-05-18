import React, { useState, useEffect } from "react";
import styles from "./EventFeature.module.css";
import Image from "next/image";
import Reviews from "../../WebinarPage/CareerImpactHome/CareerImpact";
import ReviewsFSD from "../../WebinarPage/CareerImpactHomeFSD/CareerImpact";
import Popup from "../../Popup/Popup";
import {
  FaArrowRight,
  FaCheck,
  FaUserGraduate,
  FaUserTie,
  FaLaptopCode,
} from "react-icons/fa";
import { GiReceiveMoney } from "react-icons/gi";
import { HiIdentification, HiOutlineBadgeCheck } from "react-icons/hi";
import { MdAltRoute, MdAnalytics, MdLiveTv } from "react-icons/md";
import {BiCodeBlock} from "react-icons/bi";
import FormOtp from "../../WebinarPage/FormOtp/FormOtp";

const EventFeature = ({ data, eventDateInfo, eventDataD, domainDataD, reviewsDataD, event, domain, datascienceImg }) => {
  const [eventData, setEventData] = useState({
    aboutThisMasterclass: data.aboutThisMasterclass,
    topicsMasterclass: data.topicsMasterclass,
    topicsCoveredMasterclass: data.topicsCoveredMasterclass,
    aboutLearnbay: data.aboutLearnbay,
    standoutFeatures: data.standoutFeatures,
    standoutFeaturesLastHead: data.standoutFeaturesLastHead,
  });
  const [show, setShow] = useState(false);
  const [popups, setPopups] = useState(false);

  // console.log(eventData)

  let today = new Date();

  const popupShow = () => {
    setPopups(true);
  };
  const showMenu = () => {
    setShow(!show);
  };

  return (
    <div className={styles.eFeature}>
      <Popup trigger={popups} setTrigger={setPopups} className="popupModal">
        <div className="leftPopup">
          <div className="whiteP" />
        </div>
        <div className="RightPopup">
          <h5> Register NOW! </h5>
          <FormOtp
            event={event}
            formotp={true}
            jobDescription={true}
            workExperience={true}
            domain={domain}
          />
        </div>
      </Popup>

      <div id="Feature">
        <p className={styles.paragramTitle}>{data.heading1}</p>
        <Image
          src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/tutorial/domain/Line+48.png"
          layout="intrinsic"
          width="90%"
          height="5px"
          loading="lazy"
          alt="backImg"
        />

        {eventData.aboutThisMasterclass.map((value, i) => {
          return <p key={i}>{value}</p>;
        })}
      </div>
      <div className={styles.topicCover}>
        <p className={styles.paragramTitle}>{data.heading2}</p>
        <Image
          src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/tutorial/domain/Line+48.png"
          layout="intrinsic"
          width="90%"
          height="5px"
          loading="lazy"
          alt="backImg"
        />
        <div className={styles.iconList}>
          {eventData.topicsCoveredMasterclass.map((value, i) => {
            return (
              <div className={styles.iconDiv} key={i}>
                <FaCheck className={styles.icon} />{" "}
                <p className={styles.iconPs}>{value}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div>
        <div className={styles.centerBtn}>
          {today >= eventDateInfo ? (
            ""
          ) : (
            <button onClick={popupShow} className="outLineBtn">
              Register NOW!
              <FaArrowRight className={styles.iconB} />
            </button>
          )}
        </div>
      </div>

      <div className={styles.backTrainer}>
        <p>About the Speaker</p>
        <div>
          <div className={styles.innerDiv}>
            {datascienceImg ? (<></>) : (
            <div className={styles.spanTrainerImg}>
              <Image
                src={data.img4}
                layout="intrinsic"
                objectFit="cover"
                quality={100}
                width="100px"
                height="100px"
                loading="lazy"
                alt="backImg"
              />
            </div>
            )}
            <div>
              <p className={styles.trainerHead}>{data.speakerName}</p>
              <p>{data.speakerDesignation}</p>
              <p>
                Experience :{" "}
                <span className={styles.spanT}>{data.speakerComp}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      {domainDataD ? (
        ""
      ) : (
        <div className={styles.master}>
          <p className={styles.paragramTitle}>{data.heading3}</p>
          <div className={styles.TopMargin}>
            <div className={styles.iconP}>
              <FaUserTie className={styles.iconG} />
              <p>{data.masterclassForHeading1}</p>
            </div>
            <div className={styles.iconP}>
              <GiReceiveMoney className={styles.iconG} />
              <p>{data.masterclassForHeading2}</p>
            </div>
            <div className={styles.iconP}>
              <HiIdentification className={styles.iconG} />
              <p>{data.masterclassForHeading3}</p>
            </div>
            <div className={styles.iconP}>
              <MdAltRoute className={styles.iconG} />
              <p>{data.masterclassForHeading4}</p>
            </div>
            <div className={styles.iconP}>
              <MdAnalytics className={styles.iconG} />
              <p>{data.masterclassForHeading5}</p>
            </div>
          </div>
        </div>
      )}

      {eventDataD ? (
        ""
      ) : (
        <div className={styles.master}>
        <p className={styles.paragramTitle}>{data.heading3}</p>
        <div className={styles.TopMargin}>
        <div className={styles.iconList}>
          {eventData.topicsMasterclass.map((value, i) => {
            return (
              <div className={styles.iconDiv} key={i}>
                <FaArrowRight className={styles.icon} />{" "}
                <p className={styles.iconPs}>{value}</p>
              </div>
            );
          })}
        </div>
        </div>
        </div>
      )}

      <div id="About">
        <p className={styles.paragramTitleReview}>{data.heading4}</p>
        <div className={styles.eReview}>
        {reviewsDataD ? (
 <ReviewsFSD redirectFs={true} />
      ) : (
          <Reviews redirectFs={true} />
      )}
        </div>
      </div>
      <div>
        <p className={styles.paragramTitle}>{data.heading5}</p>

        <Image
          src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/tutorial/domain/Line+48.png"
          layout="intrinsic"
          width="90%"
          height="5px"
          loading="lazy"
          alt="backImg"
        />
        {eventData.aboutLearnbay.map((value, i) => {
          return <p key={i}>{value}</p>;
        })}

        <p className={styles.paragramTitlestrong}>
          <strong>{data.aboutLearnbayHeading}</strong>
        </p>
        <Image
          src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/tutorial/domain/Line+51.png"
          layout="intrinsic"
          width="90%"
          height="5px"
          loading="lazy"
          alt="backImg"
        />
        <ul className={styles.listMargin}>
          {eventData.standoutFeatures.map((value, i) => {
            return <li key={i}>{value}</li>;
          })}
        </ul>
        {eventData.standoutFeaturesLastHead.map((value, i) => {
          return <p key={i}>{value}</p>;
        })}
      </div>
      <div>
        <div className={styles.centerBtn}>
          {today >= eventDateInfo ? (
            ""
          ) : (
            <button onClick={popupShow} className="outLineBtn">
              Register NOW!
              <FaArrowRight className={styles.iconB} />
            </button>
          )}
        </div>
      </div>

      <div style={{ margin: "15px 0px" }}>
        <div className={styles.bodyContent}>
          <div className={styles.eLeft}>
            <MdLiveTv className={styles.iconBlue} />
            <h6>{data.h1}</h6>
          </div>
          <div className={styles.eMiddle}>
            <FaLaptopCode className={styles.iconOrange} />
            <h6>{data.h2}</h6>
          </div>
          <div className={styles.eRight}>
            <FaUserGraduate className={styles.iconBlue} />
            <h6>{data.h3}</h6>
          </div>
          <div className={styles.eRight}>
            <HiOutlineBadgeCheck className={styles.iconOrange} />
            <h6>{data.h4}</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventFeature;
