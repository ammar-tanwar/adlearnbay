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
          <span> {spanTitleText}</span>
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
                <Image src="/slider/1.png" alt="Learnbay Alumni" width="80" height="118" />
                </SwiperSlide>
                <SwiperSlide>
                <Image src="/slider/2.png" alt="Learnbay Alumni" width="80" height="118" />
                </SwiperSlide>
                <SwiperSlide>
                <Image src="/slider/4.png" alt="Learnbay Alumni" width="80" height="118" />
                </SwiperSlide>
                <SwiperSlide>
                <Image src="/slider/5.png" alt="Learnbay Alumni" width="80" height="118" />
                </SwiperSlide>
                <SwiperSlide>
                  <Image src="/slider/6.png" alt="Learnbay Alumni" width="80" height="118" />
                </SwiperSlide>
                <SwiperSlide>
                  <Image src="/slider/7.png" alt="Learnbay Alumni" width="80" height="118" />
                </SwiperSlide>
                <SwiperSlide>
                  <Image src="/slider/9.png" alt="Learnbay Alumni" width="80" height="118" />
                </SwiperSlide>
                <SwiperSlide>
                  <Image src="/slider/10.png" alt="Learnbay Alumni" width="80" height="118" />
                </SwiperSlide>
                <SwiperSlide>
                  <Image src="/slider/11.png" alt="Learnbay Alumni" width="80" height="118" />
                </SwiperSlide>
                <SwiperSlide>
                  <Image src="/slider/12.png" alt="Learnbay Alumni" width="80" height="118" />
                </SwiperSlide>
                <SwiperSlide>
                  <Image src="/slider/13.png" alt="Learnbay Alumni" width="80" height="118" />
                </SwiperSlide>
                <SwiperSlide>
                  <Image src="/slider/14.png" alt="Learnbay Alumni" width="80" height="118" />
                </SwiperSlide>
                <SwiperSlide>
                  <Image src="/slider/15.png" alt="Learnbay Alumni" width="80" height="118" />
                </SwiperSlide>
                <SwiperSlide>
                  <Image src="/slider/16.png" alt="Learnbay Alumni" width="80" height="118" />
                </SwiperSlide>
                <SwiperSlide>
                  <Image src="/slider/17.png" alt="Learnbay Alumni" width="80" height="118" />
                </SwiperSlide>
                <SwiperSlide>
                  <Image src="/slider/18.png" alt="Learnbay Alumni" width="80" height="118" />
                </SwiperSlide>
                <SwiperSlide>
                  <Image src="/slider/19.png" alt="Learnbay Alumni" width="80" height="118" />
                </SwiperSlide>
                <SwiperSlide>
                  <Image src="/slider/20.png" alt="Learnbay Alumni" width="80" height="118" />
                </SwiperSlide>
                <SwiperSlide>
                  <Image src="/slider/21.png" alt="Learnbay Alumni" width="80" height="118" />
                </SwiperSlide>
                <SwiperSlide>
                  <Image src="/slider/22.png" alt="Learnbay Alumni" width="80" height="118" />
                </SwiperSlide>
                <SwiperSlide>
                  <Image src="/slider/23.png" alt="Learnbay Alumni" width="80" height="118" />
                </SwiperSlide>
                <SwiperSlide>
                  <Image src="/slider/24.png" alt="Learnbay Alumni" width="80" height="118" />
                </SwiperSlide>
                <SwiperSlide>
                  <Image src="/slider/25.png" alt="Learnbay Alumni" width="80" height="118" />
                </SwiperSlide>
                <SwiperSlide>
                  <Image src="/slider/26.png" alt="Learnbay Alumni" width="80" height="118" />
                </SwiperSlide>
                <SwiperSlide>
                  <Image src="/slider/27.png" alt="Learnbay Alumni" width="80" height="118" />
                </SwiperSlide>
                <SwiperSlide>
                  <Image src="/slider/28.png" alt="Learnbay Alumni" width="80" height="118" />
                </SwiperSlide>
                <SwiperSlide>
                  <Image src="/slider/29.png" alt="Learnbay Alumni" width="80" height="118" />
                </SwiperSlide>
              </>
            ) : (
              <>
                {" "}
                <SwiperSlide>
                <Image src="/slider/1.png" alt="Learnbay Alumni" width="80" height="118" />
                </SwiperSlide>
                <SwiperSlide>
                <Image src="/slider/2.png" alt="Learnbay Alumni" width="80" height="118" />
                </SwiperSlide>
                <SwiperSlide>
                <Image src="/slider/4.png" alt="Learnbay Alumni" width="80" height="118" />
                </SwiperSlide>
                <SwiperSlide>
                <Image src="/slider/5.png" alt="Learnbay Alumni" width="80" height="118" />
                </SwiperSlide>
                <SwiperSlide>
                  <Image src="/slider/6.png" alt="Learnbay Alumni" width="80" height="118" />
                </SwiperSlide>
                <SwiperSlide>
                  <Image src="/slider/7.png" alt="Learnbay Alumni" width="80" height="118" />
                </SwiperSlide>
                <SwiperSlide>
                  <Image src="/slider/9.png" alt="Learnbay Alumni" width="80" height="118" />
                </SwiperSlide>
                <SwiperSlide>
                  <Image src="/slider/10.png" alt="Learnbay Alumni" width="80" height="118" />
                </SwiperSlide>
                <SwiperSlide>
                  <Image src="/slider/11.png" alt="Learnbay Alumni" width="80" height="118" />
                </SwiperSlide>
                <SwiperSlide>
                  <Image src="/slider/12.png" alt="Learnbay Alumni" width="80" height="118" />
                </SwiperSlide>
                <SwiperSlide>
                  <Image src="/slider/13.png" alt="Learnbay Alumni" width="80" height="118" />
                </SwiperSlide>
                <SwiperSlide>
                  <Image src="/slider/14.png" alt="Learnbay Alumni" width="80" height="118" />
                </SwiperSlide>
                <SwiperSlide>
                  <Image src="/slider/15.png" alt="Learnbay Alumni" width="80" height="118" />
                </SwiperSlide>
                <SwiperSlide>
                  <Image src="/slider/16.png" alt="Learnbay Alumni" width="80" height="118" />
                </SwiperSlide>
                <SwiperSlide>
                  <Image src="/slider/17.png" alt="Learnbay Alumni" width="80" height="118" />
                </SwiperSlide>
                <SwiperSlide>
                  <Image src="/slider/18.png" alt="Learnbay Alumni" width="80" height="118" />
                </SwiperSlide>
                <SwiperSlide>
                  <Image src="/slider/19.png" alt="Learnbay Alumni" width="80" height="118" />
                </SwiperSlide>
                <SwiperSlide>
                  <Image src="/slider/20.png" alt="Learnbay Alumni" width="80" height="118" />
                </SwiperSlide>
                <SwiperSlide>
                  <Image src="/slider/21.png" alt="Learnbay Alumni" width="80" height="118" />
                </SwiperSlide>
                <SwiperSlide>
                  <Image src="/slider/22.png" alt="Learnbay Alumni" width="80" height="118" />
                </SwiperSlide>
                <SwiperSlide>
                  <Image src="/slider/23.png" alt="Learnbay Alumni" width="80" height="118" />
                </SwiperSlide>
                <SwiperSlide>
                  <Image src="/slider/24.png" alt="Learnbay Alumni" width="80" height="118" />
                </SwiperSlide>
                <SwiperSlide>
                  <Image src="/slider/25.png" alt="Learnbay Alumni" width="80" height="118" />
                </SwiperSlide>
                <SwiperSlide>
                  <Image src="/slider/26.png" alt="Learnbay Alumni" width="80" height="118" />
                </SwiperSlide>
                <SwiperSlide>
                  <Image src="/slider/27.png" alt="Learnbay Alumni" width="80" height="118" />
                </SwiperSlide>
                <SwiperSlide>
                  <Image src="/slider/28.png" alt="Learnbay Alumni" width="80" height="118" />
                </SwiperSlide>
                <SwiperSlide>
                  <Image src="/slider/29.png" alt="Learnbay Alumni" width="80" height="118" />
                </SwiperSlide>
              </>
            )}
          </Swiper>
        </div>
      </div>
      <div className={styles.right}>
        <Image
          src="/Home-top.png"
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
