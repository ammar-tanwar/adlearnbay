import React from "react";
import styles from "./CertificateTab.module.css";
import Image from 'next/image'
import { BsCheck2 } from "react-icons/bs";
import {
  Certificate3,
  Certificate4,
} from "./CertificateDetail";

function CertificateTab({ H4 }) {

  return (
    <section className={styles.CertificateTab}>
      <h4>{H4}</h4>
      <div className={styles.certificate}>


        <div className={styles.gridPanel}>
          {Certificate3.map((Certificate4ata) => {
            const { id, title, img, para } = Certificate4ata;
            return (

              <div className={styles.leftSide} key={id}>

                <div className={styles.leftSideP} key={id}>
                  <Image
                    src={img}
                    alt="Certificate"
                    quality={100}
                    layout="intrinsic"
                    width="1150px"
                    height="800px"
                  />
                  <div className={styles.contentDiv}>
                    <h6>{title}</h6>
                    <Image src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/horizintal-blue-line.svg" width="90" height="4" layout="intrinsic" />
                    <p>
                      <BsCheck2 className={styles.checkCircle} />
                      {para[0]}
                    </p>
                    <p>
                      <BsCheck2 className={styles.checkCircle} />
                      {para[1]}
                    </p>
                    <p>
                      <BsCheck2 className={styles.checkCircle} />
                      {para[2]}
                    </p>
                  </div>

                </div>

              </div>
            );
          })}
        </div>


        <div className={styles.gridPanel}>
          {Certificate4.map((Certificate4ata) => {
            const { id, title, img, para } = Certificate4ata;
            return (
              <div className={styles.leftSide} key={id}>
                <div className={styles.leftSideP} key={id}>
                  <Image
                    src={img}
                    alt="Certificate"
                    quality={100}
                    layout="intrinsic"
                    width="1150px"
                    height="800px"
                  />
                  <div className={styles.contentDiv}>
                    <h6>{title}</h6>
                    <Image src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/horizintal-blue-line.svg" width="90" height="4" layout="intrinsic" />
                    <p>
                      <BsCheck2 className={styles.checkCircle} />
                      {para[0]}
                    </p>
                    <p>
                      <BsCheck2 className={styles.checkCircle} />
                      {para[1]}
                    </p>
                    <p>
                      <BsCheck2 className={styles.checkCircle} />
                      {para[2]}
                    </p>
                  </div>

                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  )
}

export default CertificateTab;