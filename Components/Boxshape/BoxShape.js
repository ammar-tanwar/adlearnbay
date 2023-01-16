import React from "react";
import styles from "./BoxShape.module.css";
import Form from "../Form/Form";
import FormOtp from "../FormOtp/FormOtp";
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
  p,
}) => {
  return (
    <div className={styles.boxWrapper}>
      <p className="pTop">{p}</p>
      <h2>{title}</h2>
      <div className={styles.BoxDiv}>
        <div className={styles.left}>
          <div className={styles.box}>
            <div className={styles.ImgB}>
              <Image
                src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/course.learnbay.co/publicimages/custome-fit-learning-module.webp"
                alt="custome-fit-learning-module"
                className={styles.icon}
                width="40"
                height="40"
                loading="lazy" 
              />
            </div>

            <h5>{Box1h5}</h5>
            <p>{box1desc}</p>
          </div>
          <div className={styles.box}>
            <div className={styles.ImgC}>
              <Image
                src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/course.learnbay.co/publicimages/data-science.webp"
                alt="data-science"
                className={styles.icon}
                width="40"
                height="40"
                loading="lazy"
              />
            </div>
            <h5>{Box2h5}</h5>
            <p>{box2desc}</p>
          </div>
          <div className={styles.box}>
            <div className={styles.ImgC}>
              <Image
                src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/course.learnbay.co/publicimages/job-gauranttee.webp"
                alt="Job Guarantee"
                className={styles.icon}
                width="40"
                height="40"
                loading="lazy"
              />
            </div>
            <h5>{Box3h5}</h5>
            <p>{box3desc}</p>
          </div>
          <div className={styles.box}>
            <div className={styles.ImgC}>
              <Image
                src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/course.learnbay.co/publicimages/expertise.webp"
                alt="Eligibility Criteria"
                className={styles.icon}
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
                Talk to our counsellors Now <br />
                <span>Apply For free Profile Review</span>
              </h5>

              {formotpForS3DS ?(
                <FormOtp popup={true} brief={true} currentCompany={true}/>
              ):(
             <>
             {formotp ?(
              <FormOtp popup={true} />
            ):(
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
