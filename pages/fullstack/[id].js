import React, { useEffect, useState } from "react";
import Head from "next/head";
import { EventHeader } from "../../Components/WebinarPage/EventHeaderFSD/EventHeader";
import styles from "../../styles/DataScienceEvent.module.css";
import SliderTabs from "../../Components/NewWebinar/SliderTab/SliderTabs";
import { getAllPostIds, getPostData } from "../../lib/fullstack";
import Navbar from "../../Components/Navbar/Navbar";
import FormOtp from "../../Components/Form/Form";
import { FaHeart, FaUserFriends } from "react-icons/fa";

export default function DataScienceEvent({ eventData, newDesign }) {
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
    <>
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
        <Navbar
          eventDateInfo={eventDateInfo}
          upSkillingHide={true}
          event={true}
        />
        <div>
          <EventHeader
            formotp={true}
            deskimg={eventData.data.headImg.deskimg}
            mobimg={eventData.data.headImg.mobimg}
          />
        </div>

        <div className={today >= eventDateInfo ? styles.Pages : styles.Page2}>
          <div></div>
          <div>
            {today >= eventDateInfo ? (
              ""
            ) : (
              <div className={styles.rightDomain}>
                <section className={styles.formDomain}>
                  <div className={styles.headerDomain}>
                    <h3>Register NOW!</h3>
                  </div>
                  <FormOtp event={true} upSkillingHide={true} />
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
        <SliderTabs whatHide={true} />
        {/* <Footer /> */}
      </div>
      <script
        dangerouslySetInnerHTML={{
          __html: `(function (botId) {
            var s = document.createElement("script");
            s.async = true;
            s.type = 'text/javascript';
            s.src = "https://app.chat360.io/widget/chatbox/common_scripts/script.js";
            s.onload = function () {
              window.loadChat360Bot(botId);
            };
            s.onerror = function (err) {
              console.error(err);
            };
            document.body.appendChild(s);
          })("4f4d2e98-0778-4fb7-a9c3-af6fd1bedad8");
      `,
        }}
      />
    </>
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
