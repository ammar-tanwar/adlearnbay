import React, { useEffect, useState } from "react";
import styles from "./FirstSection.module.css";
import "swiper/css";
import "swiper/css/navigation";
import { FaArrowRight, FaDownload } from "react-icons/fa";
import Popup from "../../Popup/Popup";
import Form from "../../Form/Form";
import ProgramInfo from "../../CoursePage/ProgramInfo/ProgramInfo";
import { ProgramData } from "../../../Data/DataScienceCourse";
import Image from "next/image";
export const FirstSection = ({DeskImg, MobImg, ProgramData, courseName, cityName,ptag}) => {

  const [mobile, setMobile] = useState(false);

  const [show, setShow] = useState(false);
  const [popups, setPopups] = useState(false);

  const popupShow = () => {
    setPopups(true);
  };
  const showMenu = () => {
    setShow(!show);
  };

  useEffect(() => {
    let width = window.innerWidth;

    if (width < 481) {
      setMobile(true);
    }
    if (width > 481) {
      setMobile(false);
    }
  }, [mobile]);

  return (
    <section className={styles.container321}>
      {mobile ? (
        <Image src={MobImg} alt="mob" height="450"  quality={100} layout="intrinsic" width="400" />
      ) : (
        <Image src={DeskImg} alt="web" height="500" quality={100} layout="intrinsic" width="1620" />
      )}
      <Popup trigger={popups} setTrigger={setPopups} className="popupModal">
        <div className="leftPopup">
          <div className="whiteP" />
        </div>
        <div className="RightPopup">
          <h5>Apply For Counselling</h5>
          <Form popup={true} setTrigger={setPopups} />
        </div>
      </Popup>

      <div className={styles.container} >
        <h1>{courseName} <span className={styles.spantag}>{cityName}</span></h1>
        <p className={styles.parag} style={{ width: "50%" }}>{ptag}</p>

        <div className={styles.hiringpartners}>
          <div className={styles.verticalLine} >
            <h1>3000+</h1>
            <p>Learn Of Data Science</p>
          </div>
          <div className={styles.verticalLine1}>
            <h1>250+</h1>
            <p>Hiring Partners</p>
          </div>
        </div>
        <div className={styles.counsilBtn}>
          <button onClick={popupShow}>
            Apply for Counselling
            <FaArrowRight style={{ marginLeft: "10px" }} />
          </button>

        </div>
        <div className={styles.program}>
          <ProgramInfo
            p1={ProgramData[0].ProgramInfo.p1}
            p11={ProgramData[0].ProgramInfo.p11}
            p2={ProgramData[0].ProgramInfo.p2}
            p22={ProgramData[0].ProgramInfo.p22}
            p3={ProgramData[0].ProgramInfo.p3}
            p33={ProgramData[0].ProgramInfo.p33}
            p4={ProgramData[0].ProgramInfo.p4}
            p44={ProgramData[0].ProgramInfo.p44}
          />
        </div>

      </div>

      <div className={styles.program1}>
        <ProgramInfo
          p1={ProgramData[0].ProgramInfo.p1}
          p11={ProgramData[0].ProgramInfo.p11}
          p2={ProgramData[0].ProgramInfo.p2}
          p22={ProgramData[0].ProgramInfo.p22}
          p3={ProgramData[0].ProgramInfo.p3}
          p33={ProgramData[0].ProgramInfo.p33}
          p4={ProgramData[0].ProgramInfo.p4}
          p44={ProgramData[0].ProgramInfo.p44}
        />
      </div>


    </section>
  );
};



export default FirstSection;


// <img src="/BengaluruWeb.jpg" alt="Snow" style={{width:"100%"}}></img>