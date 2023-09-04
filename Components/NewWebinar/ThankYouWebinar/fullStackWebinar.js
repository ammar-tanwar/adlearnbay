import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import styles from "./ThankYouWebinar.module.css";
import Image from "next/image";
import { FaPlayCircle } from "react-icons/fa";
import Link from "next/link";

function ThankYouWebinar() {
  const router = useRouter();
  const [redirectSeconds, setRedirectSeconds] = useState(3);
  useEffect(() => {
    if (redirectSeconds == 0) {
      router.push("https://zoom.us/webinar/register/WN_AaQdQNWXRsucObzsoFBxUg");
      return;
    }

    setTimeout(() => {
      setRedirectSeconds((redirectSeconds) => redirectSeconds - 1);
    }, 1000);
  }, [redirectSeconds]);
  return (
    <section className={styles.container}>
      <p className={styles.pTop}>
        Please wait while we auto-redirect you for Webinar registration...
      </p>
      <div className={styles.author}>
        <div>
          <p className={styles.pBot}>
            <span style={{ color: "red" }}>•</span>{" "}
            <span style={{ color: "#00DD73" }}>Free</span> Live Webinar
          </p>
          <h4>Decoding the Microsoft Interview Process</h4>
          <div className={styles.Button}>
            <Link href="https://zoom.us/webinar/register/WN_AaQdQNWXRsucObzsoFBxUg">
            <button>Zoom Link <FaPlayCircle className="bIcon" /> </button></Link>
        </div>
        </div>
      </div>
    </section>
  );
}

export default ThankYouWebinar;
