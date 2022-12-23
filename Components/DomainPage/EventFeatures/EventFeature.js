import React, { useState, useEffect } from "react";
import styles from "./EventFeature.module.css";
import Image from "next/image";
import Reviews from "../../DomainPage/CareerImpactHome/CareerImpact";
import Popup from "../../Popup/Popup";
import { FaArrowRight, FaCheck, FaChevronUp } from "react-icons/fa";
import FormOtp from "../FormOtp/FormOtp";
import Link from "next/link";

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
          {/* <p>Fill the below details to get started</p> */}
          <FormOtp
            event={true}
            formotp={true}
            jobDescription={true}
            workExperience={true}
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
        </div>
        <div className={styles.iconList}>
          <div className={styles.iconDiv}>
            <FaCheck className={styles.icon} />
            <p className={styles.iconPs}>{props.paragraph5}</p>
          </div>
          <div className={styles.iconDiv}>
            <FaCheck className={styles.icon} />
            <p className={styles.iconPs}>{props.paragraph6}</p>
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
            <div>
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
                Company:{" "}
                <span className={styles.spanT}>{props.paragraph9_1}</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.master}>
        <p className={styles.paragramTitle}>{props.para6}</p>
        <Image
          src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/tutorial/domain/Line+48.png"
          layout="intrinsic"
          width="90%"
          height="5px"
          loading="lazy"
          alt="backImg"
        />
        <div className={styles.iconP}>
          <Image
            src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/tutorial/domain/user-avatar+1.png"
            layout="intrinsic"
            width="30px"
            height="30px"
            loading="lazy"
            alt="backImg"
          />
          <p>{props.paragraph6_2}</p>
        </div>
        <div className={styles.iconP}>
          <Image
            src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/tutorial/domain/programmer+1.png"
            layout="intrinsic"
            width="30px"
            height="30px"
            loading="lazy"
            alt="backImg"
          />
          <p>{props.paragraph7_2}</p>
        </div>
        <div className={styles.iconP}>
          <Image
            src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/tutorial/domain/experience+1.png"
            layout="intrinsic"
            width="30px"
            height="30px"
            loading="lazy"
            alt="backImg"
          />
          <p>{props.paragraph8_3}</p>
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
            <div className={styles.imgBack}>
              <Image
                src={img1}
                layout="intrinsic"
                objectFit="cover"
                width="70px"
                height="70px"
                loading="lazy"
                alt="backImg"
              />
            </div>
            <h6>{h1}</h6>
            {/* <p>{p1}</p> */}
          </div>
          <div className={styles.eMiddle}>
            <div className={styles.imgBack}>
              <Image
                src={img2}
                layout="intrinsic"
                objectFit="cover"
                width="70px"
                height="70px"
                loading="lazy"
                alt="backImg"
              />
            </div>
            <h6>{h2}</h6>
            {/* <p>{p2}</p> */}
          </div>
          <div className={styles.eRight}>
            <div className={styles.imgBack}>
              <Image
                src={img3}
                layout="intrinsic"
                objectFit="cover"
                width="70px"
                height="70px"
                loading="lazy"
                alt="backImg"
              />
            </div>
            <h6>{h3}</h6>
            {/* <p>{p3}</p> */}
          </div>
          <div className={styles.eRight}>
            <div className={styles.imgBack}>
              <Image
                src={img5}
                layout="intrinsic"
                objectFit="cover"
                width="70px"
                height="70px"
                loading="lazy"
                alt="backImg"
              />
            </div>
            <h6>{h4}</h6>
            {/* <p>{p3}</p> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventFeature;

// <li>{props.paragraph5_1}</li>

// <li>{props.paragraph8_1}</li>
// <div>
//         <p className={styles.paragramTitle}>{props.para5}</p>
//         <div className={styles.PreRequisites}>
//           <div><p><b>{props.paragraph12}</b></p></div>
//           <div><p><b>{props.paragraph13}</b></p></div>
//         </div>
//       </div>

// <li>{props.paragraph6_1}</li>
//           <li>{props.paragraph7_1}</li>
//           <li>{props.paragraph8_1}</li>
//           <li>{props.paragraph8_2}</li>

// <p>{props.paragraph2}</p>
// <li>{props.paragraph5_1}</li>

// <Link href={props.linkdinsrc}>
// <a target="_blank" rel="noopener noreferrer" className='link-item'>
// <b style={{color:"#085294"}}>{props.paragraph10_1}</b>
// </a>
// </Link>

// <p>{props.paragraph2_0}<b>{props.paragraph2_1}</b>{props.paragraph2_2}<b>{props.paragraph2_3}</b>{props.paragraph3}</p>

// <div>
//         <p className={styles.paragramTitle}>{props.para3}</p>
//         <ul className={styles.listMargin} >
//           <li>{props.paragraph6}</li>
//           <li>{props.paragraph7}</li>
//           <li>{props.paragraph8}</li>

//         </ul>

//       </div>
