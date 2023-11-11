import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { FaPlayCircle } from "react-icons/fa";
import styles from "./ThankYouWebinar.module.css";

function ThankYouWebinar() {
  const router = useRouter();
  const [redirectSeconds, setRedirectSeconds] = useState(3);
  useEffect(() => {
    if (redirectSeconds == 0) {
      router.push("https://zoom.us/webinar/register/WN_74kd4GPySS2iW-fGp3caNA");
      return;
    }

    setTimeout(() => {
      setRedirectSeconds((redirectSeconds) => redirectSeconds - 1);
    }, 1000);
  }, [redirectSeconds]);
  return (
    <section className={styles.container}>
      <p className={styles.pTop}>
        Please wait while we auto-redirect you for Masterclass registration...
      </p>
      <div className={styles.author}>
        <div>
          <p className={styles.pBot}>
            <span style={{ color: "red" }}>•</span>{" "}
            <span style={{ color: "#00DD73" }}>Free</span> Live Masterclass
          </p>
          <h4>Design Architecture of Live Streaming Platform</h4>
          <div className={styles.Button}>
            <Link href="https://zoom.us/webinar/register/WN_74kd4GPySS2iW-fGp3caNA">
              <button>
                Zoom Link <FaPlayCircle className="bIcon" />{" "}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ThankYouWebinar;
