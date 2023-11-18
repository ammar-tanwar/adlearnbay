import Image from "next/image";
import React from "react";
import FormOtp from "../FormOtp/FormOtp";
import Styles from "./scholarship.module.css";

function scholarship() {
  return (
    <div className={Styles.container}>
      <div className={Styles.image}>
        <Image
          src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/popup-left.webp"
          alt="Scholarship"
          width={530}
          height={600}
          loading="lazy"
        />
      </div>
      <div className={Styles.FormDiv}>
        <h4>Apply for Scholarship</h4>
        <FormOtp upSkillingHide={true} CTC={true} s2dataScience={true} HideInterest={true}/>
      </div>
    </div>
  );
}

export default scholarship;
