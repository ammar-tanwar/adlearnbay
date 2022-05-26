import React, { useEffect, useState } from "react";
import styles from "./HeroSection.module.css";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import Popup from "../Popup/Popup";
import Form from "../Form/Form";

const HeroSection = ({
  deskTopPara,
  title,
  spanTitleText,
  desc,
  mTopPara,
}) => {
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
  });

  return (
    <section className={styles.wrapper}>
      <Popup trigger={popups} setTrigger={setPopups} className="popupModal">
        <div className="leftPopup">
          <div className="whiteP" />
        </div>
        <div className="RightPopup">
          <h5>Apply For Counselling</h5>
          <p>Fill the below Details to get started</p>
          <Form popup={true} setTrigger={setPopups} />
        </div>
      </Popup>
      <div className={styles.left}>
        {mobile ? (
          <p className="pTop">{mTopPara}</p>
        ) : (
          <p className="pTop">{deskTopPara}</p>
        )}

        <h1>
          {title}
          <p> {spanTitleText}</p>
        </h1>
        <p className="pBot">{desc}</p>
        <div className={styles.btnWrapper}>
          <button onClick={popupShow}>Apply for Counselling</button>
        </div>
        <p className={styles.hPara}>Our Proud Alumni</p>
        <div className={styles.bottom}>
          <Swiper
            spaceBetween={mobile ? 30 : -150}
            centeredSlides={true}
            slidesPerView={mobile ? 3 : 4}
            slidesPerGroup={1}
            loop={true}
            loopFillGroupWithBlank={true}
            autoplay={{
              delay: 1000,
              disableOnInteraction: false,
            }}
            grabCursor={true}
            modules={[Autoplay]}
            className="mySwiper"
          >
            {mobile ? (
              <>
                {" "}
                <SwiperSlide>
                <Image src="/1.png" alt="Learnbay Alumni" width="80" height="118" />
                </SwiperSlide>
                <SwiperSlide>
                <Image src="/2.png" alt="Learnbay Alumni" width="80" height="118" />
                </SwiperSlide>
                <SwiperSlide>
                <Image src="/4.png" alt="Learnbay Alumni" width="80" height="118" />
                </SwiperSlide>
                <SwiperSlide>
                <Image src="/5.png" alt="Learnbay Alumni" width="80" height="118" />
                </SwiperSlide>
                <SwiperSlide>
                  <Image src="/6.png" alt="Learnbay Alumni" width="80" height="118" />
                </SwiperSlide>
                <SwiperSlide>
                  <Image src="/7.png" alt="Learnbay Alumni" width="80" height="118" />
                </SwiperSlide>
                <SwiperSlide>
                  <Image src="/9.png" alt="Learnbay Alumni" width="80" height="118" />
                </SwiperSlide>
                <SwiperSlide>
                  <Image src="/10.png" alt="Learnbay Alumni" width="80" height="118" />
                </SwiperSlide>
                <SwiperSlide>
                  <Image src="/11.png" alt="Learnbay Alumni" width="80" height="118" />
                </SwiperSlide>
                <SwiperSlide>
                  <Image src="/12.png" alt="Learnbay Alumni" width="80" height="118" />
                </SwiperSlide>
                <SwiperSlide>
                  <Image src="/13.png" alt="Learnbay Alumni" width="80" height="118" />
                </SwiperSlide>
                <SwiperSlide>
                  <Image src="/14.png" alt="Learnbay Alumni" width="80" height="118" />
                </SwiperSlide>
                <SwiperSlide>
                  <Image src="/15.png" alt="Learnbay Alumni" width="80" height="118" />
                </SwiperSlide>
                <SwiperSlide>
                  <Image src="/16.png" alt="Learnbay Alumni" width="80" height="118" />
                </SwiperSlide>
                <SwiperSlide>
                  <Image src="/17.png" alt="Learnbay Alumni" width="80" height="118" />
                </SwiperSlide>
                <SwiperSlide>
                  <Image src="/18.png" alt="Learnbay Alumni" width="80" height="118" />
                </SwiperSlide>
                <SwiperSlide>
                  <Image src="/19.png" alt="Learnbay Alumni" width="80" height="118" />
                </SwiperSlide>
                <SwiperSlide>
                  <Image src="/20.png" alt="Learnbay Alumni" width="80" height="118" />
                </SwiperSlide>
                <SwiperSlide>
                  <Image src="/21.png" alt="Learnbay Alumni" width="80" height="118" />
                </SwiperSlide>
                <SwiperSlide>
                  <Image src="/22.png" alt="Learnbay Alumni" width="80" height="118" />
                </SwiperSlide>
                <SwiperSlide>
                  <Image src="/23.png" alt="Learnbay Alumni" width="80" height="118" />
                </SwiperSlide>
                <SwiperSlide>
                  <Image src="/24.png" alt="Learnbay Alumni" width="80" height="118" />
                </SwiperSlide>
                <SwiperSlide>
                  <Image src="/25.png" alt="Learnbay Alumni" width="80" height="118" />
                </SwiperSlide>
                <SwiperSlide>
                  <Image src="/26.png" alt="Learnbay Alumni" width="80" height="118" />
                </SwiperSlide>
                <SwiperSlide>
                  <Image src="/27.png" alt="Learnbay Alumni" width="80" height="118" />
                </SwiperSlide>
                <SwiperSlide>
                  <Image src="/28.png" alt="Learnbay Alumni" width="80" height="118" />
                </SwiperSlide>
                <SwiperSlide>
                  <Image src="/29.png" alt="Learnbay Alumni" width="80" height="118" />
                </SwiperSlide>
              </>
            ) : (
              <>
                {" "}
                <SwiperSlide>
                <Image src="/1.png" alt="Learnbay Alumni" width="80" height="118" />
                </SwiperSlide>
                <SwiperSlide>
                <Image src="/2.png" alt="Learnbay Alumni" width="80" height="118" />
                </SwiperSlide>
                <SwiperSlide>
                <Image src="/4.png" alt="Learnbay Alumni" width="80" height="118" />
                </SwiperSlide>
                <SwiperSlide>
                <Image src="/5.png" alt="Learnbay Alumni" width="80" height="118" />
                </SwiperSlide>
                <SwiperSlide>
                  <Image src="/6.png" alt="Learnbay Alumni" width="80" height="118" />
                </SwiperSlide>
                <SwiperSlide>
                  <Image src="/7.png" alt="Learnbay Alumni" width="80" height="118" />
                </SwiperSlide>
                <SwiperSlide>
                  <Image src="/9.png" alt="Learnbay Alumni" width="80" height="118" />
                </SwiperSlide>
                <SwiperSlide>
                  <Image src="/10.png" alt="Learnbay Alumni" width="80" height="118" />
                </SwiperSlide>
                <SwiperSlide>
                  <Image src="/11.png" alt="Learnbay Alumni" width="80" height="118" />
                </SwiperSlide>
                <SwiperSlide>
                  <Image src="/12.png" alt="Learnbay Alumni" width="80" height="118" />
                </SwiperSlide>
                <SwiperSlide>
                  <Image src="/13.png" alt="Learnbay Alumni" width="80" height="118" />
                </SwiperSlide>
                <SwiperSlide>
                  <Image src="/14.png" alt="Learnbay Alumni" width="80" height="118" />
                </SwiperSlide>
                <SwiperSlide>
                  <Image src="/15.png" alt="Learnbay Alumni" width="80" height="118" />
                </SwiperSlide>
                <SwiperSlide>
                  <Image src="/16.png" alt="Learnbay Alumni" width="80" height="118" />
                </SwiperSlide>
                <SwiperSlide>
                  <Image src="/17.png" alt="Learnbay Alumni" width="80" height="118" />
                </SwiperSlide>
                <SwiperSlide>
                  <Image src="/18.png" alt="Learnbay Alumni" width="80" height="118" />
                </SwiperSlide>
                <SwiperSlide>
                  <Image src="/19.png" alt="Learnbay Alumni" width="80" height="118" />
                </SwiperSlide>
                <SwiperSlide>
                  <Image src="/20.png" alt="Learnbay Alumni" width="80" height="118" />
                </SwiperSlide>
                <SwiperSlide>
                  <Image src="/21.png" alt="Learnbay Alumni" width="80" height="118" />
                </SwiperSlide>
                <SwiperSlide>
                  <Image src="/22.png" alt="Learnbay Alumni" width="80" height="118" />
                </SwiperSlide>
                <SwiperSlide>
                  <Image src="/23.png" alt="Learnbay Alumni" width="80" height="118" />
                </SwiperSlide>
                <SwiperSlide>
                  <Image src="/24.png" alt="Learnbay Alumni" width="80" height="118" />
                </SwiperSlide>
                <SwiperSlide>
                  <Image src="/25.png" alt="Learnbay Alumni" width="80" height="118" />
                </SwiperSlide>
                <SwiperSlide>
                  <Image src="/26.png" alt="Learnbay Alumni" width="80" height="118" />
                </SwiperSlide>
                <SwiperSlide>
                  <Image src="/27.png" alt="Learnbay Alumni" width="80" height="118" />
                </SwiperSlide>
                <SwiperSlide>
                  <Image src="/28.png" alt="Learnbay Alumni" width="80" height="118" />
                </SwiperSlide>
                <SwiperSlide>
                  <Image src="/29.png" alt="Learnbay Alumni" width="80" height="118" />
                </SwiperSlide>
              </>
            )}
          </Swiper>
        </div>
      </div>
      <div className={styles.right}>
        <Image
          src="/AiMl.png"
          alt="data-science-course"
          quality={100}
          layout="intrinsic"
          width="500"
          height="550"
        />
      </div>
    </section>
  );
};

export default HeroSection;
