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
  radio
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
                   {/* <p>Fill the below Details to get started</p> */}

          <Form popup={true} setTrigger={setPopups} radio={radio} />
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
              <Image src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/course.learnbay.co/publicimages/1.webp" alt="Learnbay Alumni" width="80" height="118" />
              </SwiperSlide>
              <SwiperSlide>
              <Image src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/course.learnbay.co/publicimages/2.webp" alt="Learnbay Alumni" width="80" height="118" />
              </SwiperSlide>
              <SwiperSlide>
              <Image src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/course.learnbay.co/publicimages/4.webp" alt="Learnbay Alumni" width="80" height="118" />
              </SwiperSlide>
              <SwiperSlide>
              <Image src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/course.learnbay.co/publicimages/5.webp" alt="Learnbay Alumni" width="80" height="118" />
              </SwiperSlide>
              <SwiperSlide>
                <Image src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/course.learnbay.co/publicimages/6.webp" alt="Learnbay Alumni" width="80" height="118" />
              </SwiperSlide>
              <SwiperSlide>
                <Image src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/course.learnbay.co/publicimages/7.webp" alt="Learnbay Alumni" width="80" height="118" />
              </SwiperSlide>
              <SwiperSlide>
                <Image src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/course.learnbay.co/publicimages/9.webp" alt="Learnbay Alumni" width="80" height="118" />
              </SwiperSlide>
              <SwiperSlide>
                <Image src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/course.learnbay.co/publicimages/10.webp" alt="Learnbay Alumni" width="80" height="118" />
              </SwiperSlide>
              <SwiperSlide>
                <Image src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/course.learnbay.co/publicimages/11.webp" alt="Learnbay Alumni" width="80" height="118" />
              </SwiperSlide>
              <SwiperSlide>
                <Image src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/course.learnbay.co/publicimages/12.webp" alt="Learnbay Alumni" width="80" height="118" />
              </SwiperSlide>
              <SwiperSlide>
                <Image src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/course.learnbay.co/publicimages/13.webp" alt="Learnbay Alumni" width="80" height="118" />
              </SwiperSlide>
              <SwiperSlide>
                <Image src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/course.learnbay.co/publicimages/14.webp" alt="Learnbay Alumni" width="80" height="118" />
              </SwiperSlide>
              <SwiperSlide>
                <Image src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/course.learnbay.co/publicimages/15.webp" alt="Learnbay Alumni" width="80" height="118" />
              </SwiperSlide>
              <SwiperSlide>
                <Image src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/course.learnbay.co/publicimages/16.webp" alt="Learnbay Alumni" width="80" height="118" />
              </SwiperSlide>
              <SwiperSlide>
                <Image src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/course.learnbay.co/publicimages/17.webp" alt="Learnbay Alumni" width="80" height="118" />
              </SwiperSlide>
              <SwiperSlide>
                <Image src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/course.learnbay.co/publicimages/18.webp" alt="Learnbay Alumni" width="80" height="118" />
              </SwiperSlide>
              <SwiperSlide>
                <Image src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/course.learnbay.co/publicimages/19.webp" alt="Learnbay Alumni" width="80" height="118" />
              </SwiperSlide>
              <SwiperSlide>
                <Image src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/course.learnbay.co/publicimages/20.webp" alt="Learnbay Alumni" width="80" height="118" />
              </SwiperSlide>
              <SwiperSlide>
                <Image src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/course.learnbay.co/publicimages/21.webp" alt="Learnbay Alumni" width="80" height="118" />
              </SwiperSlide>
              <SwiperSlide>
                <Image src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/course.learnbay.co/publicimages/22.webp" alt="Learnbay Alumni" width="80" height="118" />
              </SwiperSlide>
              <SwiperSlide>
                <Image src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/course.learnbay.co/publicimages/23.webp" alt="Learnbay Alumni" width="80" height="118" />
              </SwiperSlide>
              <SwiperSlide>
                <Image src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/course.learnbay.co/publicimages/24.webp" alt="Learnbay Alumni" width="80" height="118" />
              </SwiperSlide>
              <SwiperSlide>
                <Image src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/course.learnbay.co/publicimages/25.webp" alt="Learnbay Alumni" width="80" height="118" />
              </SwiperSlide>
              <SwiperSlide>
                <Image src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/course.learnbay.co/publicimages/26.webp" alt="Learnbay Alumni" width="80" height="118" />
              </SwiperSlide>
              <SwiperSlide>
                <Image src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/course.learnbay.co/publicimages/27.webp" alt="Learnbay Alumni" width="80" height="118" />
              </SwiperSlide>
              <SwiperSlide>
                <Image src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/course.learnbay.co/publicimages/28.webp" alt="Learnbay Alumni" width="80" height="118" />
              </SwiperSlide>
              <SwiperSlide>
                <Image src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/course.learnbay.co/publicimages/29.webp" alt="Learnbay Alumni" width="80" height="118" />
              </SwiperSlide>
            </>
          ) : (
            <>
              {" "}
              <SwiperSlide>
              <Image src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/course.learnbay.co/publicimages/1.webp" alt="Learnbay Alumni" width="80" height="118" />
              </SwiperSlide>
              <SwiperSlide>
              <Image src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/course.learnbay.co/publicimages/2.webp" alt="Learnbay Alumni" width="80" height="118" />
              </SwiperSlide>
              <SwiperSlide>
              <Image src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/course.learnbay.co/publicimages/4.webp" alt="Learnbay Alumni" width="80" height="118" />
              </SwiperSlide>
              <SwiperSlide>
              <Image src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/course.learnbay.co/publicimages/5.webp" alt="Learnbay Alumni" width="80" height="118" />
              </SwiperSlide>
              <SwiperSlide>
                <Image src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/course.learnbay.co/publicimages/6.webp" alt="Learnbay Alumni" width="80" height="118" />
              </SwiperSlide>
              <SwiperSlide>
                <Image src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/course.learnbay.co/publicimages/7.webp" alt="Learnbay Alumni" width="80" height="118" />
              </SwiperSlide>
              <SwiperSlide>
                <Image src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/course.learnbay.co/publicimages/9.webp" alt="Learnbay Alumni" width="80" height="118" />
              </SwiperSlide>
              <SwiperSlide>
                <Image src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/course.learnbay.co/publicimages/10.webp" alt="Learnbay Alumni" width="80" height="118" />
              </SwiperSlide>
              <SwiperSlide>
                <Image src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/course.learnbay.co/publicimages/11.webp" alt="Learnbay Alumni" width="80" height="118" />
              </SwiperSlide>
              <SwiperSlide>
                <Image src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/course.learnbay.co/publicimages/12.webp" alt="Learnbay Alumni" width="80" height="118" />
              </SwiperSlide>
              <SwiperSlide>
                <Image src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/course.learnbay.co/publicimages/13.webp" alt="Learnbay Alumni" width="80" height="118" />
              </SwiperSlide>
              <SwiperSlide>
                <Image src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/course.learnbay.co/publicimages/14.webp" alt="Learnbay Alumni" width="80" height="118" />
              </SwiperSlide>
              <SwiperSlide>
                <Image src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/course.learnbay.co/publicimages/15.webp" alt="Learnbay Alumni" width="80" height="118" />
              </SwiperSlide>
              <SwiperSlide>
                <Image src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/course.learnbay.co/publicimages/16.webp" alt="Learnbay Alumni" width="80" height="118" />
              </SwiperSlide>
              <SwiperSlide>
                <Image src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/course.learnbay.co/publicimages/17.webp" alt="Learnbay Alumni" width="80" height="118" />
              </SwiperSlide>
              <SwiperSlide>
                <Image src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/course.learnbay.co/publicimages/18.webp" alt="Learnbay Alumni" width="80" height="118" />
              </SwiperSlide>
              <SwiperSlide>
                <Image src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/course.learnbay.co/publicimages/19.webp" alt="Learnbay Alumni" width="80" height="118" />
              </SwiperSlide>
              <SwiperSlide>
                <Image src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/course.learnbay.co/publicimages/20.webp" alt="Learnbay Alumni" width="80" height="118" />
              </SwiperSlide>
              <SwiperSlide>
                <Image src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/course.learnbay.co/publicimages/21.webp" alt="Learnbay Alumni" width="80" height="118" />
              </SwiperSlide>
              <SwiperSlide>
                <Image src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/course.learnbay.co/publicimages/22.webp" alt="Learnbay Alumni" width="80" height="118" />
              </SwiperSlide>
              <SwiperSlide>
                <Image src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/course.learnbay.co/publicimages/23.webp" alt="Learnbay Alumni" width="80" height="118" />
              </SwiperSlide>
              <SwiperSlide>
                <Image src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/course.learnbay.co/publicimages/24.webp" alt="Learnbay Alumni" width="80" height="118" />
              </SwiperSlide>
              <SwiperSlide>
                <Image src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/course.learnbay.co/publicimages/25.webp" alt="Learnbay Alumni" width="80" height="118" />
              </SwiperSlide>
              <SwiperSlide>
                <Image src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/course.learnbay.co/publicimages/26.webp" alt="Learnbay Alumni" width="80" height="118" />
              </SwiperSlide>
              <SwiperSlide>
                <Image src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/course.learnbay.co/publicimages/27.webp" alt="Learnbay Alumni" width="80" height="118" />
              </SwiperSlide>
              <SwiperSlide>
                <Image src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/course.learnbay.co/publicimages/28.webp" alt="Learnbay Alumni" width="80" height="118" />
              </SwiperSlide>
              <SwiperSlide>
                <Image src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/course.learnbay.co/publicimages/29.webp" alt="Learnbay Alumni" width="80" height="118" />
              </SwiperSlide>
            </>
          )}
          </Swiper>
        </div>
      </div>
      <div className={styles.right}>
        <Image
          src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/course.learnbay.co/publicimages/Advance.webp"
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
