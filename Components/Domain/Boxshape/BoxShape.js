import React from "react";
import styles from "./BoxShape.module.css";
import Form from "../../Form/Form";
import FormOtp from "../../FormOtp/FormOtp";
import Image from "next/image";
const BoxShape = ({
  title,
  Box1h5,
  box1desc,
  Box2h5,
  box2desc,
  Box3h5,
  box3desc,
  Box4h5,
  box4desc,
  radio,
  formotp,
  formotpForS3DS,
  s2dataScience,
  fullstackADS,
  marketing,
  p,
}) => {
  return (
    <div className={styles.boxWrapper}>
      <h2>{title}</h2>
      <div className={styles.BoxDiv}>
        <div className={styles.left}>
          <div className={styles.box}>
            <div className={styles.ImgB}></div>
            <b>
              <p className={styles.pTop}>{p}</p>
            </b>
          </div>
          <div className={styles.box}>
            <div className={styles.ImgB1}>
              <Image
                src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/domainpage/Salary+Hike.png"
                alt="custome-fit-learning-module"
                width="40"
                height="40"
                loading="lazy"
              />
            </div>
            <h5>{Box1h5}</h5>
            <p>{box1desc}</p>
          </div>
          <div className={styles.box}>
            <div className={styles.ImgB2}>
              <Image
                src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/domainpage/Data+analysis.png"
                alt="data-science"
                width="40"
                height="40"
                loading="lazy"
              />
            </div>
            <h5>{Box2h5}</h5>
            <p>{box2desc}</p>
          </div>
          <div className={styles.box}>
            <div className={styles.ImgB3}>
              <Image
                src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/domainpage/Succeed.png"
                alt="Job Guarantee"
                width="40"
                height="40"
                loading="lazy"
              />
            </div>
            <h5>{Box3h5}</h5>
            <p>{box3desc}</p>
          </div>
          <div className={styles.box}>
            <div className={styles.ImgB4}>
              <Image
                src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/domainpage/Leader.png"
                alt="Eligibility Criteria"
                width="40"
                height="40"
                loading="lazy"
              />
            </div>
            <h5>{Box4h5}</h5>
            <p>{box4desc}</p>
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.imgBack}>
            <div className={styles.formWrapper}>
              <h5>
                <span>Get a free Career Report Card</span>
                <br /> from our career advisors
              </h5>

              {formotpForS3DS ? (
                <FormOtp popup={true} brief={true} currentCompany={true} />
              ) : (
                <>
                  {formotp ? (
                    <FormOtp
                      popup={true}
                      s2dataScience={s2dataScience}
                      fullstackADS={fullstackADS}
                      marketing={marketing}
                    />
                  ) : (
                    <Form radio={radio} />
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoxShape;
