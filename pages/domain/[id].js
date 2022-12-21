import React, { useEffect, useState } from "react";
import Head from "next/head";
import { EventHeader } from "../../Components/DomainPage/EventHeader/EventHeader";
import styles from "../../styles/DataScienceEvent.module.css";
import Form from "../../Components/DomainPage/Form/Form";
import { FiUserCheck } from "react-icons/fi";
import EventFeature from "../../Components/DomainPage/EventFeatures/EventFeature";
import { getAllPostIds, getPostData } from "../../lib/domain";
import Navbar from "../../Components/Navbar/Navbar";
import FormOtp from "../../Components/FormOtp/FormOtp";
import Footer from "../../Components/DomainPage/EventFooter/Footer";


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
        <link rel="icon" href="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/Learnbay-Favicon-L.png" />
        <link rel="canonical" href="https://www.learnbay.co/event" />
      </Head>
      <Navbar event={true} eventDateInfo={eventDateInfo} formotp= {true}/>
      <div>
        <EventHeader formotp= {true}
        deskimg={eventData.data.headImg.deskimg}
        mobimg={eventData.data.headImg.mobimg}
        />
      </div>
 

      <div className={today >= eventDateInfo ? styles.Pages : styles.Page2}>

        <div>
          <div className={styles.left}>
            <div className={styles.prgrmFeature} >
              <EventFeature event={true}
                props={eventData.data.eventDeatureData}
                title={eventData.data.feature.title}
                h1={eventData.data.feature.h1}
                h2={eventData.data.feature.h2}
                h3={eventData.data.feature.h3}
                p1={eventData.data.feature.p1}
                p2={eventData.data.feature.p2}
                p3={eventData.data.feature.p3}
                img1={eventData.data.feature.img1}
                img2={eventData.data.feature.img2}
                img3={eventData.data.feature.img3}
                img4={eventData.data.eventDeatureData.img4}
                eventDateInfo={eventDateInfo}
              />
            </div>
          </div>
        </div>
        <div>
          {today >= eventDateInfo ? (
            ""
          ) : (
            <div className={styles.right}>
              <section className={styles.form}>
                <div className={styles.header}>
                  <h3>Register NOW!</h3>
                  <p>
                    <FiUserCheck className={styles.Icon} />
                    {eventData.data.header.register}
                  </p>
                </div>
                <FormOtp event={true} formotp= {true} jobDescription={true} workExperience={true}/>
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
