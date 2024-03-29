import React, { useState } from "react";
import styles from "./EventTab.module.css";
import Image from "next/image";
import Link from "next/link";
import { BiTime } from "react-icons/bi";
import { MdEvent } from "react-icons/md";
import { AiOutlineFieldTime } from "react-icons/ai";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";
const EventTab = ({ data }) => {
  const [viewAll, setViewAll] = useState(false);
  const [fullstack, setFullstack] = useState(true);
  const [mobile, setMobile] = useState(false);

  const FullStackDetails = data.filter((post) => post.tag === "Fullstack");

  return (
    <div className={styles.Course} id="course">
      <div className={styles.courses}>
        <div className={styles.listPanel}>
          <span
            onClick={() => {
              setViewAll(false);
              setDataScience(false);
              setFullstack(true);
            }}
            className={fullstack ? styles.ActiveSpan : styles.span}
          >
            ({FullStackDetails.length + 0})
          </span>
          {fullstack ? (
            <div className={styles.mPanel}>
              <Swiper
                slidesPerView={mobile ? 1 : 1.1}
                spaceBetween={mobile ? 10 : 20}
                pagination={{
                  clickable: true,
                }}
                grabCursor={true}
                modules={[Pagination]}
                className="mySwiper"
              >
                <div className={styles.gridPanel}>
                  {FullStackDetails.map((data) => {
                    const {
                      id,
                      title,
                      eventDate,
                      eventTime,
                      Duration,
                      register,
                      img,
                    } = data;
                    let today = new Date();
                    let eventDateInfo = new Date(eventDate);
                    const url = `/event-fsd/${id}`;
                    return (
                      <SwiperSlide className={styles.leftSide} key={id}>
                        <Link href={url} passHref>
                          <div className={styles.contentBox}>
                            <div className={styles.headImg}>
                              <Image
                                alt={title}
                                src={img}
                                layout="intrinsic"
                                width="641"
                                height="241"
                              />
                            </div>
                            <div className={styles.contentI}>
                              <h6>{title}</h6>
                              <p>
                                <BiTime className={styles.eIcon} />{" "}
                                <strong>Start time:</strong>
                                {eventTime}
                              </p>
                              <p>
                                <MdEvent className={styles.eIcon} />{" "}
                                <strong>Start date:</strong> {eventDate}
                              </p>
                              <p>
                                <AiOutlineFieldTime className={styles.eIcon} />
                                <strong>Duration:</strong> {Duration}
                              </p>
                              <div className={styles.line} />
                              <div className={styles.footer}>
                                <p>
                                  <strong>{register}</strong> people have
                                  registered
                                </p>

                                {today >= eventDateInfo ? (
                                  <span
                                    className={styles.expire}
                                    style={{ marginTop: "10px" }}
                                  >
                                    Event Ended
                                  </span>
                                ) : (
                                  <button>
                                    <Link href={url} passHref>
                                      Register Now
                                    </Link>
                                  </button>
                                )}
                              </div>
                            </div>
                          </div>
                        </Link>
                      </SwiperSlide>
                    );
                  })}
                </div>
              </Swiper>
            </div>
          ) : (
            ""
          )}
        </div>
        <div className={styles.middlePanel}>
          {viewAll ? (
            <>
              <div className={styles.gridPanel}>
                {data.map((data) => {
                  const {
                    id,
                    title,
                    eventDate,
                    eventTime,
                    Duration,
                    register,
                    img,
                  } = data;
                  let today = new Date();
                  let eventDateInfo = new Date(eventDate);
                  const url = `/event-fsd/${id}`;
                  return (
                    <div className={styles.leftSide} key={id}>
                      <Link href={url} passHref>
                        <div className={styles.contentBox}>
                          <div className={styles.headImg}>
                            <Image
                              alt={title}
                              src={img}
                              layout="intrinsic"
                              width="641"
                              height="241"
                            />
                          </div>
                          <div className={styles.contentI}>
                            <h6>{title}</h6>
                            <p>
                              {" "}
                              <BiTime className={styles.eIcon} />
                              <strong>Start time:</strong> {eventTime}
                            </p>
                            <p>
                              <MdEvent className={styles.eIcon} />
                              <strong>Start date:</strong> {eventDate}
                            </p>
                            <p>
                              <AiOutlineFieldTime className={styles.eIcon} />
                              <strong>Duration:</strong> {Duration}
                            </p>
                            <div className={styles.line} />
                            <div className={styles.footer}>
                              <p>
                                <strong>{register}</strong> people have
                                registered
                              </p>
                              {today >= eventDateInfo ? (
                                <span
                                  className={styles.expire}
                                  style={{ marginTop: "10px" }}
                                >
                                  Event Ended
                                </span>
                              ) : (
                                <a href={url}>
                                  <button>Register Now</button>
                                </a>
                              )}
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                  );
                })}
              </div>
            </>
          ) : (
            ""
          )}
          {fullstack ? (
            <>
              <div className={styles.gridPanel}>
                {FullStackDetails.map((data) => {
                  const {
                    id,
                    title,
                    eventDate,
                    eventTime,
                    Duration,
                    register,
                    img,
                  } = data;
                  let today = new Date();
                  let eventDateInfo = new Date(eventDate);
                  const url = `/event-fsd/${id}`;
                  return (
                    <div className={styles.leftSide} key={id}>
                      <Link href={url} passHref>
                        <div className={styles.contentBox}>
                          <div className={styles.headImg}>
                            <Image
                              alt={title}
                              src={img}
                              layout="intrinsic"
                              width="641"
                              height="241"
                            />
                          </div>
                          <div className={styles.contentI}>
                            <h6>{title}</h6>
                            <p>
                              {" "}
                              <BiTime className={styles.eIcon} />
                              <strong>Start time:</strong> {eventTime}
                            </p>
                            <p>
                              <MdEvent className={styles.eIcon} />
                              <strong>Start date:</strong> {eventDate}
                            </p>
                            <p>
                              <AiOutlineFieldTime className={styles.eIcon} />
                              <strong>Duration:</strong> {Duration}
                            </p>
                            <div className={styles.line} />
                            <div className={styles.footer}>
                              <p>
                                <strong>{register}</strong> people have
                                registered
                              </p>
                              {today >= eventDateInfo ? (
                                <span
                                  className={styles.expire}
                                  style={{ marginTop: "10px" }}
                                >
                                  Event Ended
                                </span>
                              ) : (
                                <button>
                                  <Link href={url} passHref>
                                    Register Now
                                  </Link>
                                </button>
                              )}
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                  );
                })}
              </div>
            </>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default EventTab;
