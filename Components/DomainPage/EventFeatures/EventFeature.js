import React, { useState, useEffect } from "react";
import styles from "./EventFeature.module.css";
import Image from "next/image";
import Reviews from "../../DomainPage/CareerImpactHome/CareerImpact";
import Popup from "../../Popup/Popup";
import { FaArrowRight, FaCheck, FaUserGraduate, FaUserTie, FaLaptopCode } from "react-icons/fa";
import { GiReceiveMoney, GiRank3 } from "react-icons/gi"
import { HiIdentification, HiOutlineBadgeCheck } from "react-icons/hi"
import { MdAltRoute, MdAnalytics, MdLiveTv } from "react-icons/md"
import FormOtp from "../../DomainPage/FormOtp/FormOtp";


const EventFeature = ({
  title,
  h1,
  h2,
  h3,
  h4,
  p1,
  p2,
  p3,
  img1,
  img2,
  img3,
  img5,
  img4,
  trainer,
  props,
  eventDateInfo,
}) => {
  const [show, setShow] = useState(false);
  const [popups, setPopups] = useState(false);
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
            event={true}
            formotp={true}
            jobDescription={true}
            workExperience={true}
            domain={true}
          />
        </div>
      </Popup>
      <div id="Feature">
        <p className={styles.paragramTitle}>{props.para1}</p>
        <Image
          src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/tutorial/domain/Line+48.png"
          layout="intrinsic"
          width="90%"
          height="5px"
          loading="lazy"
          alt="backImg"
        />
        <p>{props.paragraph1}</p>
        <p>{props.paragraph1_1}</p>
        <p>{props.paragraph1_2}</p>
        <p>{props.paragraph1_3}</p>
      </div>
      <div className={styles.topicCover}>
        <p className={styles.paragramTitle}>{props.para2}</p>
        <Image
          src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/tutorial/domain/Line+48.png"
          layout="intrinsic"
          width="90%"
          height="5px"
          loading="lazy"
          alt="backImg"
        />
        <div className={styles.iconList}>
          <div className={styles.iconDiv}>
            <FaCheck className={styles.icon} />{" "}
            <p className={styles.iconPs}>{props.paragraph24}</p>
          </div>
          <div className={styles.iconDiv}>
            <FaCheck className={styles.icon} />
            <p className={styles.iconPs}>{props.paragraph4}</p>
          </div>
          <div className={styles.iconDiv}>
            <FaCheck className={styles.icon} />
            <p className={styles.iconPs}>{props.paragraph5}</p>
          </div>
          <div className={styles.iconDiv}>
            <FaCheck className={styles.icon} />
            <p className={styles.iconPs}>{props.paragraph5_1}</p>
          </div>
          <div className={styles.iconDiv}>
            <FaCheck className={styles.icon} />
            <p className={styles.iconPs}>{props.paragraph5_2}</p>
          </div>
          <div className={styles.iconDiv}>
            <FaCheck className={styles.icon} />
            <p className={styles.iconPs}>{props.paragraph5_3}</p>
          </div>
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
            <div className={styles.spanTrainerImg}>
              <Image
                src={img4}
                layout="intrinsic"
                objectFit="cover"
                quality={100}
                width="100px"
                height="100px"
                loading="lazy"
                alt="backImg"
              />
            </div>
            <div>
              <p className={styles.trainerHead}>{props.para4}</p>
              <p>{props.paragraph9}</p>
              <p>
                Company :{" "}
                <span className={styles.spanT}>{props.paragraph9_1}</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.master}>
        <p className={styles.paragramTitle}>{props.para6}</p>
        <div className={styles.TopMargin}>
          <div className={styles.iconP}>
            <FaUserTie className={styles.iconG} />
            <p>{props.paragraph6_2}</p>
          </div>
          <div className={styles.iconP}>
            <GiReceiveMoney className={styles.iconG} />
            <p>{props.paragraph7_2}</p>
          </div>
          <div className={styles.iconP}>
            <HiIdentification className={styles.iconG} />
            <p>{props.paragraph8_3}</p>
          </div>
          <div className={styles.iconP}>
            <MdAltRoute className={styles.iconG} />
            <p>{props.paragraph8_4}</p>
          </div>
          <div className={styles.iconP}>
            <MdAnalytics className={styles.iconG} />
            <p>{props.paragraph8_5}</p>
          </div>
        </div>
      </div>
      <div id="About">
        <p className={styles.paragramTitleReview}>{props.para7}</p>
        <div className={styles.eReview}>
          <Reviews redirectFs={true} />
        </div>
      </div>
      <div>
        <p className={styles.paragramTitle}>{props.para8}</p>
        <Image
          src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/tutorial/domain/Line+48.png"
          layout="intrinsic"
          width="90%"
          height="5px"
          loading="lazy"
          alt="backImg"
        />
        <p>{props.paragraph14}</p>
        <p>{props.paragraph15}</p>
        <p className={styles.paragramTitlestrong}>
          <strong>{props.paragraph16}</strong>
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
          <li>{props.paragraph17}</li>
          <li>{props.paragraph18}</li>
          <li>{props.paragraph19}</li>
          <li>{props.paragraph20}</li>
          <li>{props.paragraph21}</li>
        </ul>
        <p>{props.paragraph22}</p>
        <p>{props.paragraph23}</p>
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
            <h6>{h1}</h6>
          </div>
          <div className={styles.eMiddle}>
            <FaLaptopCode className={styles.iconOrange} />
            <h6>{h2}</h6>
          </div>
          <div className={styles.eRight}>
            <FaUserGraduate className={styles.iconBlue} />
            <h6>{h3}</h6>
          </div>
          <div className={styles.eRight}>
            <HiOutlineBadgeCheck className={styles.iconOrange} />
            <h6>{h4}</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventFeature;
