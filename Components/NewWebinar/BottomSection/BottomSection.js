import React from "react";
import styles from "./BottomSection.module.css"

function BottomSection() {
  return (
    <section className={styles.container}>
      <div className={styles.divInner}>100% LIVE CLASS</div>
      <div className={styles.divInner}>Q & A SESSION</div>
      <div className={styles.divInner}>PARTICIPATION CERTIFICATE</div>
    </section>
  );
}

export default BottomSection;
