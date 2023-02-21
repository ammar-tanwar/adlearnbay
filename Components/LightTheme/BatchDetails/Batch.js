import React, { useState } from "react";
import styles from "./Batch.module.css";
import { MdDateRange } from "react-icons/md";
import { BiTimeFive } from "react-icons/bi";

function Batch({
  CourseFeeHead,
  WebDev,
}) {

  return (
    <section className={styles.Syllabus}>
      <h4 style={{ marginBottom: "30px" }}>{CourseFeeHead}</h4>
      <div className={styles.mobileView}>
        {WebDev ? (
          <div className={styles.NewBatch}>
            <div className={styles.NewBlue}>
              <div>
                <p className={styles.listDay}>Weekday Morning (Mon-Fri)</p>
              </div>
              <div>
                <p className={styles.list}>
                  <MdDateRange className={styles.iconOrange} />
                  13th February 2023
                </p>
                <p className={styles.list}>
                  <BiTimeFive className={styles.iconBlue} />7 AM to 9 AM
                </p>
              </div>
            </div>
          </div>
        ) : (
          <div className={styles.NewBatch}>
            <div className={styles.NewOrange}>
              <div>
                <p className={styles.listDay}>Weekend Morning (Sat-Sun)</p>
              </div>
              <div>
                <p className={styles.list}>
                  <MdDateRange className={styles.iconOrange} />
                  25th February 2023
                </p>
                <p className={styles.list}>
                  <BiTimeFive className={styles.iconBlue} />8 AM to 11 AM
                </p>
              </div>
            </div>
            <div className={styles.NewBlue}>
              <div>
                <p className={styles.listDay}>Weekday Morning (Mon-Wed-Fri)</p>
              </div>
              <div>
                <p className={styles.list}>
                  <MdDateRange className={styles.iconOrange} />
                  27th February 2023
                </p>
                <p className={styles.list}>
                  <BiTimeFive className={styles.iconBlue} />
                  07:30 AM to 09:30 AM
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className={styles.desktopView}>
        <div className={styles.heading}></div>
        {WebDev ? (
          <div className={styles.NewBatch}>
            <div className={styles.NewBlue}>
              <div>
                <p className={styles.listDay}>Weekday Morning (Mon-Fri)</p>
              </div>
              <div>
                <p className={styles.list}>
                  <MdDateRange className={styles.iconOrange} />
                  13th February 2023
                </p>
              </div>
              <div>
                <p className={styles.list}>
                  <BiTimeFive className={styles.iconBlue} />7 AM to 9 AM
                </p>
              </div>
            </div>
          </div>
        ) : (
          <div className={styles.NewBatch}>
            <div className={styles.NewOrange}>
              <div>
                <p className={styles.listDay}>Weekend Morning (Sat-Sun)</p>
              </div>
              <div>
                <p className={styles.list}>
                  <MdDateRange className={styles.iconOrange} />
                  25th February 2023
                </p>
               
              </div>
              <div>
              <p className={styles.list}>
                  <BiTimeFive className={styles.iconBlue} />8 AM to 11 AM
                </p>
              </div>
            </div>
            <div className={styles.NewBlue}>
              <div>
                <p className={styles.listDay}>Weekday Morning (Mon-Wed-Fri)</p>
              </div>
              <div>
                <p className={styles.list}>
                  <MdDateRange className={styles.iconOrange} />
                  27th February 2023
                </p>
              </div>
              <div>
              <p className={styles.list}>
                  <BiTimeFive className={styles.iconBlue} />
                  07:30 AM to 09:30 AM
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Batch;
