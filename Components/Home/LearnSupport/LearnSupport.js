import React from "react";
import { RiWhatsappFill } from "react-icons/ri";
import { FaPhone } from "react-icons/fa";
import styles from "./LearnSupport.module.css";

function LearnSupport() {
  return (
    <section className={styles.LearnSupport}>
      <h4>24/7 Learner’s Support</h4>
      <div className={styles.learnInner}>
        <div className={styles.learnInner1}>
          <p className={styles.Top1}>Got more questions?</p>
          <p className={styles.Top2}>Talk to our team directly.</p>
          <p className={styles.Top3}>
            Reach us and a learning consultant will get in touch with you
            shortly
          </p>
        </div>
        <div className={styles.learnInner2}>
          {/* <a href="https://wa.me/+918123327570" target="_blank">
            <button className={styles.btn1}>
              Whatsapp
              <RiWhatsappFill className={styles.bIcon} />
            </button>
          </a> */}
          <a href="tel:+918123327570" target="_blank">
            <button className={styles.btn2}>
              +91 8123 327570
              <FaPhone className={styles.bIcon} />
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}

export default LearnSupport;
