import React, { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./ToolsCovered.module.css";

function ToolsCovered() {
  const [mobile, setMobile] = useState(false);
  useEffect(() => {
    let width = window.innerWidth;
    if (width < 481) {
      setMobile(true);
    }
  });
  return (
    <section className={styles.ToolsCovered}>
      <h4>Tools Covered</h4>
      <div>
        {mobile ? (
          <Image
            src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/course.learnbay.co/publicimages/tools-fs.png"
            alt="Learnbay"
            quality={100}
            objectFit="contain"
            width="480"
            height="250px"
          />
        ) : (
          <Image
            src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/course.learnbay.co/publicimages/tools-fs.png"
            alt="Learnbay"
            quality={100}
            objectFit="contain"
            width="1400"
            height="500px"
          />
        )}
      </div>
    </section>
  );
}

export default ToolsCovered;
