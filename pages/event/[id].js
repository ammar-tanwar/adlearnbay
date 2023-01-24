import React, { useEffect, useState } from "react";
import Head from "next/head";
import { EventHeader } from "../../Components/WebinarPage/EventHeaderFSD/EventHeader";
import styles from "../../styles/DataScienceEvent.module.css";
import EventFeature from "../../Components/WebinarPage/EventFeatures/EventFeature";
import { getAllPostIds, getPostData } from "../../lib/event";
import Navbar from "../../Components/Navbar/Navbar";
import FormOtp from "../../Components/WebinarPage/FormOtp/FormOtp";
import Footer from "../../Components/Event/EventFooter/Footer";
import { FaHeart, FaUserFriends } from "react-icons/fa";

export default function DataScienceEvent({ eventData, formotp }) {
  const [mobile, setMobile] = useState(false);

  let today = new Date();
  let eventDateInfo = new Date(eventData.data.mainData.eventDate);

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
    <div className={styles.container}>
      <Head>
        <title>{eventData.data.metaInfo.title}</title>
        <meta name="description" content={eventData.data.metaInfo.desc} />
        <link
          rel="icon"
          href="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/Learnbay-Favicon-L.png"
        />
        <link rel="canonical" href="https://www.learnbay.co/event" />
      </Head>
      <Navbar event={true} eventDateInfo={eventDateInfo} formotp={true} />
      <div>
        <EventHeader
          formotp={true}
          deskimg={eventData.data.headImg.deskimg}
          mobimg={eventData.data.headImg.mobimg}
        />
      </div>

      <div className={today >= eventDateInfo ? styles.Pages : styles.Page2}>
        <div>
          <div className={styles.left}>
            <div className={styles.prgrmFeature}>
              <EventFeature
                domainDataD={true}
                reviewsDataD={true}
                event={true}
                formotp={true} 
                data={eventData.data.eventFeatureData}
                eventDateInfo={eventDateInfo}
              />
            </div>
          </div>
        </div>
        <div>
          {today >= eventDateInfo ? (
            ""
          ) : (
            <div className={styles.rightDomain}>
              <section className={styles.formDomain}>
                <div className={styles.headerDomain}>
                  <h3>Register NOW!</h3>
                </div>
                <FormOtp
                  event={true}
                  formotp={true} 
                  jobDescription={true}
                  workExperience={true}
                />
                <div className={styles.iconsRegister}>
                  <p className={styles.iconsRegisterp}>
                    <FaUserFriends
                      className={styles.IconDomain}
                      style={{ color: "#EDBB52" }}
                    />
                    {eventData.data.mainData.register}
                  </p>
                  <p className={styles.iconsRegisterp}>
                    <FaHeart
                      className={styles.IconDomain}
                      style={{ color: "red" }}
                    />
                    {eventData.data.mainData.likes}
                  </p>
                </div>
              </section>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const eventData = getPostData(params.id);
  // console.log(eventData.data.headImg.deskimg)
  return {
    props: {
      eventData,
    },
  };
}
