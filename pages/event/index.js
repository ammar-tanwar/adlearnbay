import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/DataScienceEvent.module.css";
import EventTab from "../../Components/Event/EventTab/EventTab";
import { getSortedPostsData } from "../../lib/event";
import { sortByDateEvent } from "../../utils";

export default function index({ eventData }) {
  return (
    <>
      <div>
        <Head>
          <title>
            Register for Free webinars, workshop, Masterclass -learnbay
          </title>
          <meta
            name="description"
            content="Enroll in   and and data science masterclass for free and learn from industry experts."
          />
          <link
            rel="icon"
            href="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/Learnbay-Favicon-L.png"
          />
          <link rel="canonical" href="https://www.learnbay.co/event" />
        </Head>
        <Navbar event={true} formotp={true} />
        <div className={styles.Back}>
          <h4 style={{ textAlign: "left" }}>
            <b>Events on learnbay</b>
          </h4>
          <div>
            <Image
              src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/about-us.png"
              width="522"
              height="380"
              layout="intrinsic"
            />
          </div>
        </div>
        <div className={styles.event}>
          <div className={styles.eventTab}>
            <EventTab data={eventData} />
          </div>
        </div>
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
          })("d22aede5-fcaf-423d-ab4c-2e49782f9cc2");
      `,
        }}
      />
    </>
  );
}

export async function getStaticProps() {
  const eventData = getSortedPostsData();
  return {
    props: {
      eventData: eventData.sort(sortByDateEvent),
    },
  };
}
