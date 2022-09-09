import React from "react";
import styles from "./EventFeature.module.css";
import Image from "next/image";
import Reviews from "../../CareerImpactHome/CareerImpact";

const EventFeature = ({ title, h1, h2, h3, p1, p2, p3, img1, img2, img3 }) => {
  return (
    
    <div className={styles.eFeature}>
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
          React represents one of the most extensive Javascript libraries. It contains countless reusable Components that help in building the desired user interface. Find out why developers are keen to explore everything about React: the working of a react library, the process of breaking down complex problems, and more.
        </p>
        <p>Ready to deep dive into the world of React?</p>
        <p>Attend Siddharth Taneja in a FREE Masterclass on 20th September, Tuesday at 8 PM to acquire conceptual clarity on how cross-platform apps are built through React. Register now!</p>
      </div>

      <div  id="trainer" >
        <p className={styles.paragramTitle}>What you will gain from this Masterclass</p>
        <div className={styles.listMargin} >
          <li>Build cross-platform apps using React from scratch</li>
          <li>The basic working of React library explained</li>
          <li>Learn how to break down complex problem statements</li>
        </div>
      </div>

      <div >
        <p className={styles.paragramTitle}>Meet Rohit Raj</p>
        <div className={styles.listMargin} >
          <li>Previously worked at http://Media.net</li>
          <li>Frontend Team Lead at Scaler Academy</li>
          <li>Top-rated Full Stack instructor</li>
        </div>
      </div>

      <div>
        <p className={styles.paragramTitle}>Learn the Pre-requisites of this Masterclass for FREE</p>
        <div className={styles.PreRequisites}>
          <div><p>JavaScript</p></div>
          <div><p>CSS</p></div>
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
      </div>

      <div id="About">
        <p className={styles.paragramTitle}>What our Learners have to say</p>
        <div className={styles.eReview} id="review">
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
