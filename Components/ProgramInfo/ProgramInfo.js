import styles from "./ProgramInfo.module.css";
import React from "react";

const ProgramInfo = ({
  BatchDate,
  BatchDuration,
  Placement,
  EMI,
  eligibility,
  certification,
  placement,
  noCost,
}) => {
  return (
    <div className={styles.feature}>
      <div className={styles.container}>
        <div className={styles.left}>
          <p>{eligibility === undefined ? "Eligibility" : eligibility}</p>
          <h5>{BatchDate}</h5>
        </div>
        <div className={styles.middle}>
          <p>{certification === undefined ? "Certification" : certification}</p>
          <h5>{BatchDuration}</h5>
        </div>
        <div className={styles.right}>
          <p> {placement === undefined ? "Projects" : placement}</p>
          <h5>{Placement}</h5>
        </div>
        <div className={styles.rightr}>
          <p>{noCost === undefined ? "No Cost EMI" : noCost}</p>
          <h5>{EMI}</h5>
        </div>
      </div>
    </div>
  );
};

export default ProgramInfo;
