import React from "react";
import styles from "./FormSection.module.css";
import { MdCall } from "react-icons/md";
import FormInline from "./FormInline";

const FormSection = (dataScience) => {
  return (
    <div className={styles.fromWrap}>
      <div className={styles.leftForm}>
        <h5>Apply For Free Career Counselling</h5>
        
      </div>
      <div className={styles.rightForm}>
        <div className={styles.rightFormWrap}>
          <FormInline  radio={true} dataScience={dataScience} />
        </div>
      </div>
    </div>
  );
};

export default FormSection;
