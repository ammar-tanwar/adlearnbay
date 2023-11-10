import React, { useEffect, useState } from "react";
import styles from "./Testimonial.module.css";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/scrollbar";
import { AiOutlineRise } from "react-icons/ai";
import dynamic from "next/dynamic";
const ReviewPopup = dynamic(() => import("../ReviewPopup/ReviewPopup"));
import { Pagination, Navigation } from "swiper";
import "swiper/css/scrollbar";
import { Scrollbar } from "swiper";
function Testimonial({ redirectDS, para, heading, Testimonial }) {
  const [mobile, setMobile] = useState(false);
  const [img, setImg] = useState({
    cLogo: "",
    pLogo: "",
  });
  const [profile, setProfile] = useState({
    name: "",
    hike: "",
    position: "",
  });
  const [desc, setDesc] = useState("");
  const [popups, setPopups] = useState(false);
  const popupShow = () => {
    setPopups(true);
  };
  useEffect(() => {
    let width = window.innerWidth;
    if (width < 600) {
      setMobile(true);
    }
  }, []);
  return (
    <div className={styles.testimonial} id="alumni">
      <ReviewPopup
        trigger={popups}
        setTrigger={setPopups}
        title={profile}
        desc={desc}
        imgSrc={img}
      />
      <h4 className={styles.h1}>{heading}</h4>
      {para === undefined ? "" : <p className={styles.ptop}>{para}</p>}
        <div className={styles.Section1}>
          <div className={styles.Testimonial}>
            <div className={styles.swiperleft}>
              <Swiper
                loop={true}
                breakpoints={{
                  1281: { slidesPerView: 4.1, spaceBetween: 50 },
                  1024: { slidesPerView: 3, spaceBetween: 55 },
                  961: { slidesPerView: 3, spaceBetween: 20 },
                  801: { slidesPerView: 2.5, spaceBetween: 20 },
                  641: { slidesPerView: 2, spaceBetween: 20 },
                  481: { slidesPerView: 1.8, spaceBetween: 20 },
                  100: { slidesPerView: 1.2, spaceBetween: 20 },
                }}
                pagination={{
                  dynamicBullets: true,
                  clickable: true,
                }}
                grabCursor={true}
                style={{ width: "100%" }}
                modules={[Pagination, Navigation, Scrollbar]}
                className="mySwiper"
              >
                {Testimonial.map((data, index) => {
                  const {
                    id,
                    name,
                    working,
                    proImg,
                    sDesc,
                    lDesc,
                    complogo,
                    statLogo,
                  } = data;
                  return (
                    <SwiperSlide className={styles.slide} key={index}>
                      <div className={styles.proImgWrap}>
                        <div className="imgWrapper">
                          <Image
                            src={proImg}
                            loading="lazy"
                            width="358"
                            height="212"
                            alt="profile-Img"
                          />
                        </div>
                      </div>
                      <div className={styles.mainSlider}>
                        <div className={styles.imgP}>
                          <div className={styles.name}>
                            <h3>{name}</h3>
                            <p>{working}</p>
                          </div>
                          <div className={styles.nameHike}>
                            <p>
                              {statLogo}
                              <AiOutlineRise />
                            </p>
                          </div>
                        </div>
                        <div className={styles.paraDiv}>
                          <p className={styles.para}>
                            {sDesc}
                            {redirectDS ? (
                              <span
                                onClick={() => {
                                  popupShow();
                                  setProfile({
                                    hike: statLogo,
                                    name: name,
                                    position: working,
                                  });
                                  setDesc(lDesc);
                                  setImg({
                                    id: id,
                                    cLogo: complogo,
                                    pLogo: proImg,
                                  });
                                }}
                              >
                                Learn More
                              </span>
                            ) : (
                              ""
                            )}
                          </p>
                        </div>
                      </div>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>
          </div>
        </div>
    </div>
  );
}
export default Testimonial;
