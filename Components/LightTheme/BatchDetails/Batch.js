import React, { useState } from "react";
import styles from "./Batch.module.css";
import { MdDateRange } from "react-icons/md";
import { BiTimeFive } from "react-icons/bi";

function Batch({ CourseFeeHead, WebDev, DataScience }) {
  return (
    <section className={styles.Syllabus}>
      <h4 style={{ marginBottom: "30px" }}>{CourseFeeHead}</h4>
      <div className={styles.mobileView}>
        {DataScience ? (
          <div className={styles.NewBatch}>
            <div className={styles.NewOrange}>
              <div>
                <p className={styles.listDay}>Weekday Morning (Mon-Fri)</p>
              </div>
              <div className={styles.listMobile}>
                <p className={styles.list}>
                  <MdDateRange className={styles.iconOrange} />
                  23rd June 2023
                </p>
                <p className={styles.list}>
                  <BiTimeFive className={styles.iconBlue} />
                  8 AM to 10 AM
                </p>
              </div>
            </div>
            <div className={styles.NewBlue}>
              <div>
                <p className={styles.listDay}>Weekend Morning (Sat-Sun)</p>
              </div>
              <div className={styles.listMobile}>
                <p className={styles.list}>
                  <MdDateRange className={styles.iconOrange} />
                  25th June 2023
                </p>
                <p className={styles.list}>
                  <BiTimeFive className={styles.iconBlue} />8:30 AM to 12 PM
                </p>
              </div>
            </div>
            
          </div>
        ) : (
          <>
            {WebDev ? (
              <div className={styles.NewBatch}>
                <div className={styles.NewBlue}>
                  <div>
                    <p className={styles.listDay}>Weekday Evening (Mon-Fri)</p>
                  </div>
                  <div>
                    <p className={styles.list}>
                      <MdDateRange className={styles.iconOrange} />
                      29th May 2023
                    </p>
                    <p className={styles.list}>
                      <BiTimeFive className={styles.iconBlue} />8 PM to 10 PM
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              <div className={styles.NewBatch}>
                <div className={styles.NewOrange}>
                  <div>
                    <p className={styles.listDay}>
                      Weekday Evening (Mon-Fri)
                    </p>
                  </div>
                  <div>
                    <p className={styles.list}>
                      <MdDateRange className={styles.iconOrange} />
                      16th June 2023
                    </p>
                    <p className={styles.list}>
                      <BiTimeFive className={styles.iconBlue} />8 PM to 10 PM
                    </p>
                  </div>
                </div>
                <div className={styles.NewBlue}>
                  <div>
                    <p className={styles.listDay}>Weekend Morning (Sat-Sun)</p>
                  </div>
                  <div>
                    <p className={styles.list}>
                      <MdDateRange className={styles.iconOrange} />
                      18th June 2023
                    </p>
                    <p className={styles.list}>
                      <BiTimeFive className={styles.iconBlue} />
                      8:30 AM to 12 PM
                    </p>
                  </div>
                </div>
              </div>
            )}
          </>
        )}
      </div>

      <div className={styles.desktopView}>
        <div className={styles.heading}></div>
        {DataScience ? (
          <div className={styles.NewBatch}>
            <div className={styles.NewOrange}>
              <div>
                <p className={styles.listDay}>Weekday Morning (Mon-Fri)</p>
              </div>
              <div>
                <p className={styles.list}>
                  <MdDateRange className={styles.iconOrange} />
                  23rd June 2023
                </p>
              </div>
              <div>
                <p className={styles.list}>
                  <BiTimeFive className={styles.iconBlue} />
                  8 AM to 10 AM
                </p>
              </div>
            </div>
            <div className={styles.NewBlue}>
              <div>
                <p className={styles.listDay}>Weekend Morning (Sat-Sun)</p>
              </div>
              <div>
                <p className={styles.list}>
                  <MdDateRange className={styles.iconOrange} />
                  25th June 2023
                </p>
              </div>
              <div>
                <p className={styles.list}>
                  <BiTimeFive className={styles.iconBlue} />8:30 AM to 12 PM
                </p>
              </div>
            </div>
          </div>
        ) : (
          <>
            {WebDev ? (
              <div className={styles.NewBatch}>
                <div className={styles.NewBlue}>
                  <div>
                    <p className={styles.listDay}>Weekday Evening (Mon-Fri)</p>
                  </div>
                  <div>
                    <p className={styles.list}>
                      <MdDateRange className={styles.iconOrange} />
                      29th May 2023
                    </p>
                  </div>
                  <div>
                    <p className={styles.list}>
                      <BiTimeFive className={styles.iconBlue} />8 PM to 10 PM
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              <div className={styles.NewBatch}>
                <div className={styles.NewOrange}>
                  <div>
                    <p className={styles.listDay}>
                      Weekday Evening (Mon-Fri)
                    </p>
                  </div>
                  <div>
                    <p className={styles.list}>
                      <MdDateRange className={styles.iconOrange} />
                      16th June 2023
                    </p>
                  </div>
                  <div>
                    <p className={styles.list}>
                      <BiTimeFive className={styles.iconBlue} />8 PM to 10 PM
                    </p>
                  </div>
                </div>
                <div className={styles.NewBlue}>
                  <div>
                    <p className={styles.listDay}>Weekend Morning (Sat-Sun)</p>
                  </div>
                  <div>
                    <p className={styles.list}>
                      <MdDateRange className={styles.iconOrange} />
                      18th June 2023
                    </p>
                  </div>
                  <div>
                    <p className={styles.list}>
                      <BiTimeFive className={styles.iconBlue} />
                      8:30 AM to 12 PM
                    </p>
                  </div>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
}

export default Batch;
