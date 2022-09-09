import React, { useState, useEffect } from "react";
import styles from "./EventFeature.module.css";
import Image from "next/image";
import Reviews from "../../CareerImpactHome/CareerImpact";
import Popup from "../../Popup/Popup";
import { FaArrowRight, FaChevronDown, FaChevronUp } from "react-icons/fa";
import Form from "../Form/Form";

const EventFeature = ({ title, h1, h2, h3, p1, p2, p3, img1, img2, img3 }) => {

  const [show, setShow] = useState(false);
  const [popups, setPopups] = useState(false);

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
          <Form popup={true} setTrigger={setPopups} />
        </div>
      </Popup>
      <div >
        <h1>How to build an E-Commerce Website with React?</h1>
        <div>
          <span>
            <span className={styles.fontweight}> STARTS ON :</span>
            <span> September 20, 2022 8:00 PM (IST)</span>
          </span>
          <br />
          <span>
            <span className={styles.fontweight}>ENDS ON : </span>
            <span> September 20, 2022 11:00 PM (IST)</span>
          </span>
          <br />
          <span>
            <span className={styles.fontweight}> VENUE : </span>
            <span> Online</span>
          </span>
          <br />
          <span>
            <span className={styles.fontweight}> DURATION : </span>
            <span> 3 hours</span>
          </span>
        </div>
        <br />
        <hr />
      </div>

      <div id="Feature">
        <p className={styles.paragramTitle}>About this Masterclass</p>
        <p>
        System Design process is vital for creating efficient and user-friendly systems. It involves defining system elements like modules, architecture, components and their interfaces, as well as data, based on specified requirements. In order to provide a high-quality product that satisfies user needs, systems design considerations take into account both the commercial and technological requirements of clients.
        </p>
        <p> Ready to deep dive into the field of <b>System Design?</b></p>
        <p><b>Supriya Sharma</b> is hosting a  <b>FREE Masterclass</b> on September <b>17th at 7 PM</b> to help bring clarity to architectural system design concepts. Register today to reserve your spot!</p>
      </div>
      
      <div>
        <p className={styles.paragramTitle}>Topics Covered In The Masterclass</p>
        <div className={styles.listMargin} >
          <li>Design/architect the system</li>
          <li>Identify databases/caching</li>
          <li>Design Application Programming Interfaced</li>
        </div>
      </div>

      <div>
        <p className={styles.paragramTitle}>What you will gain from this Masterclass</p>
        <div className={styles.listMargin} >
          <li>How notifications works- Pushing/polling</li>
          <li>Master their synchronization</li>
          <li>How caches are managed</li>
        </div>
      </div>

      <div >
        <p className={styles.paragramTitle}>Meet SUPRIYA SHARMA</p>
        <div className={styles.listMargin} >
          <li><span>Designation : </span><b>Senior Software Engineer</b></li>
          <li><span>Company : </span><b>Google</b></li>
          <li>Top-rated Full Stack instructor</li>
        </div>
      </div>

      <div>
        <p className={styles.paragramTitle}>Learn the Pre-requisites of this Masterclass for FREE</p>
        <div className={styles.PreRequisites}>
          <div><p><b>JavaScript</b></p></div>
          <div><p><b>CSS</b></p></div>
        </div>
      </div>

      <div>
        <p className={styles.paragramTitle}>This Masterclass is for</p>
      </div>
      <div style={{ margin: "15px 0px" }}>
        <div className={styles.bodyContent}>
          <div className={styles.eLeft}>
            <div className={styles.imgBack}>
              <Image
                src={img1}
                layout="fill"
                objectFit="cover"
                quality={100}
                loading="lazy"
                alt="backImg"
              />
            </div>
            <h6>{h1}</h6>
            <p>{p1}</p>
          </div>
          <div className={styles.eMiddle}>
            <div className={styles.imgBack}>
              <Image
                src={img2}
                layout="fill"
                objectFit="cover"
                quality={100}
                loading="lazy"
                alt="backImg"
              />
            </div>
            <h6>{h2}</h6>
            <p>{p2}</p>
          </div>
          <div className={styles.eRight}>
            <div className={styles.imgBack}>
              <Image
                src={img3}
                layout="fill"
                objectFit="cover"
                quality={100}
                loading="lazy"
                alt="backImg"
              />
            </div>
            <h6>{h3}</h6>
            <p>{p3}</p>
          </div>
        </div>
      </div>
      <div>
        <Image
          src="/full-stack-web.png"
          alt="price"
          layout="intrinsic"
          width="900px"
          height="500px"
        />
        <div className={styles.centerBtn}>
        <button onClick={popupShow} className="outLineBtn">
        Register NOW!
          <FaArrowRight className={styles.icon} />
        </button>
        </div>
      </div>

      <div id="About">
        <p className={styles.paragramTitle}>What our Learners have to say</p>
        <div className={styles.eReview}>
          <Reviews redirectFs={true} />
        </div>
      </div>

      <div >
        <p className={styles.paragramTitle}>About Learnbay Academy</p>
        <p>Many engineers (like us!) enter software engineering almost by mistake, are exposed to ‘old’ teaching methods and are taught to ‘cram’ content. This creates gaps in an engineer’s CS learning, makes them under confident and prevents them from accelerating in their career. </p>
        <p>Scaler Academy is tailor-made for engineers to master the foundations of CS (DSA & System Design) and to take their career to the next level, via: </p>
        <div className={styles.listMargin} >
          <li>A structured, guided and industry vetted curriculum</li>
          <li>Live classes by faculty who have been there, done that</li>
          <li>Regular 1:1 mentorship from industry veterans </li>
          <li>A structured, guided and industry vetted curriculum</li>
          <li>Live classes by faculty who have been there, done that</li>
          <li>Regular 1:1 mentorship from industry veterans </li><li>A structured, guided and industry vetted curriculum</li>
          <li>Live classes by faculty who have been there, done that</li>
          <li>Regular 1:1 mentorship from industry veterans </li>
        </div>
        <p>The curriculum is designed to make you a solid engineer. Find out more about us at scaler.com/academy!</p>


      </div>



    </div>
  );
};

export default EventFeature;
