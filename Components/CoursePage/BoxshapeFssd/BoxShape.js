import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import styles from "./BoxShape.module.css";
import Image from "next/image";
import { MdLiveTv } from "react-icons/md";
import { FiUser } from "react-icons/fi";
import { AiOutlineDownload } from "react-icons/ai";
import { BsGraphUp } from "react-icons/bs";
import Form from "../../Form/Form";
import Popup from "../../Popup/Popup";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Autoplay, Pagination } from "swiper";

const BoxShape = ({
  title,
  Box1h5,
  box1desc,
  Box2h5,
  box2desc,
  Box3h5,
  box3desc,
  Box4h5,
  box4desc,
}) => {
  const [popups, setPopups] = useState(false);

  const popupShow = () => {
    setPopups(true);
  };
  const [hover, setHover] = useState(false);
  const [mobile, setMobile] = useState(false);
  useEffect(() => {
    let width = window.innerWidth;
    if (width < 600) {
      setMobile(true);
    }
  });

  return (
    <div className={styles.boxWrapper}>
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
          <h5>Download Brochure</h5>
          <Form setTrigger={setPopups} downloadBrochure />
        </div>
      </Popup>
      <h2>{title}</h2>
      <div className={styles.BoxDiv}>
        <div className={styles.left}>
          <div>
            <Image
              src="/ds.png"
              alt="data-science-course"
              quality={100}
              layout="intrinsic"
              width="306"
              height="150"
            />
            <p className={styles.Ptopp}>
            Full-Stack Web
            <br />Development Program 
            </p>
            <button className={styles.Button} onClick={popupShow}>
              <AiOutlineDownload className="bIcons" />
              Download Brochure
            </button>
          </div>
          <div>
            <Image
              src="/advanceds.png"
              alt="data-science-course"
              quality={100}
              layout="intrinsic"
              width="306"
              height="150"
            />
            <p className={styles.Ptopp}>
            Full-Stack Software
             <br />Development Program
            </p>
            <button className={styles.Button} onClick={popupShow}>
              <AiOutlineDownload className="bIcons" />
              Download Brochure
            </button>
          </div>
          <div>
            <Image
              src="/ds.png"
              alt="data-science-course"
              quality={100}
              layout="intrinsic"
              width="306"
              height="150"
            />
            <p className={styles.Ptopp}>
            Data Structures Algorithms
             <br />And System Design
            </p>
            <button className={styles.Button} onClick={popupShow}>
              <AiOutlineDownload className="bIcons" />
              Download Brochure
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};

export default BoxShape;
