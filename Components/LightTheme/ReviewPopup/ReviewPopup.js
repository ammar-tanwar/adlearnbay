import Image from "next/image";
import { useEffect, useState } from "react";
import { AiOutlineRise } from "react-icons/ai";
import { IoClose } from "react-icons/io5";
import styles from "./ReviewPopup.module.scss";
// import { TestimonialDS, TestimonialFS } from "./TestimonialData";

const ReviewPopup = (props) => {
  let color = "transparent";
  const [mobile, setMobile] = useState(false);

  if (props.price) color = "white";
  useEffect(() => {
    let width = window.innerWidth;
    if (width < 600) {
      setMobile(true);
    }
    if (props.trigger) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [props.trigger]);

  return props.trigger ? (
    <div className={styles.popup}>
      <div
        className={
          props.downloadBrochure ? styles.popupInners : styles.popupInner
        }
      >
        {props.downloadBrochure ? (
          <IoClose
            className={styles.closeBtn}
            onClick={() => {
              props.setTrigger(false);
            }}
          />
        ) : (
          <IoClose
            className={styles.closeBtn}
            onClick={() => {
              props.setTrigger(false);
            }}
          />
        )}

        <div className={styles.InnerGrid}>
          <div className={styles.mainSlider}>
            <div className={styles.imgP}>
              <div className={styles.name}>
                <h3>{props.title.name}</h3>
                <p>{props.title.position}</p>
              </div>
              {/* <div className={styles.imgWrap}>
                <Image
                  src={props.imgSrc.pLogo}
                  style={{width:"100%"}}
                  loading="lazy"
                  width="100"
                  height="100"
                  alt="preksha-home"
                />
              </div> */}
            </div>
            <div className={styles.paraDiv}>
              <p className={styles.para}>{props.desc}</p>
            </div>

            <div className={styles.imgHike} id={props.imgSrc.id}>
              <div>
                <div className="imgWrapper">
                  <Image
                    src={props.imgSrc.cLogo}
                    loading="lazy"
                    width={mobile ? 130 : 140}
                    height={mobile ? 21 : 23}
                    alt="preksha-home"
                  />
                </div>
              </div>
              <div className={styles.nameHike}>
                <p>
                  <AiOutlineRise />
                  {props.title.hike}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    ""
  );
};

export default ReviewPopup;
