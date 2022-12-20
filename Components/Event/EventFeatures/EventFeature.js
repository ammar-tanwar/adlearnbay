import React, { useState, useEffect } from "react";
import styles from "./EventFeature.module.css";
import Image from "next/image";
import Reviews from "../../CareerImpactHome/CareerImpact";
import Popup from "../../Popup/Popup";
import { FaArrowRight, FaChevronDown, FaChevronUp } from "react-icons/fa";
import FormOtp from "../../FormOtp/FormOtp";
import Link from "next/link";

const EventFeature = ({ title, h1, h2, h3, p1, p2, p3, img1, img2, img3, props, event ,eventDateInfo}) => {

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
          <FormOtp event={true} formotp= {true} jobDescription={true} workExperience={true}/>
        </div>
      </Popup>


      <div className={styles.topicHead}>
        <h1>{props.Heading}</h1>
        <div>
          <span>
            <span className={styles.fontweight}>{props.StartON}</span>
            <span>{props.StartONT}</span>
          </span>
          <br />
          <span>
            <span className={styles.fontweight}>{props.EndON}</span>
            <span>{props.EndONT} </span>
          </span>
          <br />
          <span>
            <span className={styles.fontweight}>{props.Venue} </span>
            <span>{props.VenueO} </span>
          </span>
          <br />
          <span>
            <span className={styles.fontweight}>{props.Duration}</span>
            <span>{props.DurationT}</span>
          </span>
        </div>
        <br />
        <hr />
      </div>

      <div id="Feature">
        <p className={styles.paragramTitle}>{props.para1}</p>
        <p>{props.paragraph1}</p>
        <p>{props.paragraph1_1}</p>
        
      </div>

      <div className={styles.topicCover}>
        <p className={styles.paragramTitle}>{props.para2}</p>
        <ul className={styles.listMargin} >
          <li>{props.paragraph24}</li>
          <li>{props.paragraph4}</li>
          <li>{props.paragraph5}</li>
          <li>{props.paragraph6}</li>
        </ul>
      </div>


      <div >
        <p className={styles.paragramTitle}>{props.para4}</p>
        <ul className={styles.listMargin} >
          <li><span>{props.paragraph9}</span><b>{props.paragraph9_1}</b></li>
          <li><span>{props.paragraph10}</span>
        
              <b style={{color:"#085294"}}>{props.paragraph10_1}</b>
           
          </li>
        </ul>
      </div>

      <div>
        <p className={styles.paragramTitle}>{props.para6}</p>
        <ul className={styles.listMargin} >
          <li>{props.paragraph6_2}</li>
          <li>{props.paragraph7_2}</li>
          <li>{props.paragraph8_3}</li>
        </ul>

      </div>

      <div>
        <div className={styles.centerBtn}>
        {today >= eventDateInfo ? (
          ""
        ) : (
          <button onClick={popupShow} className="outLineBtn">
            Register NOW!
            <FaArrowRight className={styles.icon} />
          </button>
        )}

        </div>
      </div>

      <div id="About">
        <p className={styles.paragramTitle}>{props.para7}</p>
        <div className={styles.eReview}>
          <Reviews redirectFs={true} />
        </div>
      </div>

      <div >
        <p className={styles.paragramTitle}>{props.para8}</p>
        <p>{props.paragraph14}</p>
        <p>{props.paragraph15}</p>
        <p><strong>{props.paragraph16}</strong></p>

        <ul className={styles.listMargin} >
          <li>{props.paragraph17}</li>
          <li>{props.paragraph18}</li>
          <li>{props.paragraph19}</li>
          <li>{props.paragraph20}</li>
          <li>{props.paragraph21}</li>
        </ul>

        <p>{props.paragraph22}</p>
        <p>{props.paragraph23}</p>
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