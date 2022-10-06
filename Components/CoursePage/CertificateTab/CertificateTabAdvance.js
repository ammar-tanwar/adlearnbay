import { React, useState, useEffect } from 'react'
import styles from "./CertificateTab.module.css";
import Image from 'next/image'
import { BsCheck2 } from "react-icons/bs";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";
import { MdWatchLater, MdLocationPin } from "react-icons/md";
import {
  CertificateAdvance1,
  CertificateAdvance2,
} from "./CertificateDetail";

function CertificateTab({ H4 }) {

  const [mobile, setMobile] = useState(false);
  useEffect(() => {
    let width = window.innerWidth;

    if (width < 481) {
      setMobile(true);
    }
    if (width > 481) {
      setMobile(false);
    }
  }, [mobile]);
  const [showMe, setShowMe] = useState(false);
  function toggle() {
    setShowMe(!showMe);
  }
  return (
    <section className={styles.CertificateTab}>
      <h4>{H4}</h4>

      {mobile ? (
        <div className={styles.certificate}>
          <div className={styles.gridPanel}>
            {CertificateAdvance1.map((CertificateAdvance2ata) => {
              const { id, title, img, para } = CertificateAdvance2ata;
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
                      <div style={{
                        display: showMe ? "block" : "none"
                      }}>
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

                      <a className={styles.btnout} style={{ marginTop: "20px" }} onClick={toggle}>
                        {showMe ? (
                          
                          <span style={{ color: "rgb(243 140 0)", float: "right" }}>Show less
                            <FaArrowUp style={{ marginLeft: "10px" }} />
                          </span>
                        ) : (
                          <span style={{ color: "rgb(243 140 0)", float: "right" }}>Show more
                            <FaArrowDown style={{ marginLeft: "10px" }} />
                          </span>
                        )
                        }

                      </a>
                     
                    </div>

                  </div>

                </div>
              );
            })}
          </div>


          <div className={styles.gridPanel}>
            {CertificateAdvance2.map((CertificateAdvance2ata) => {
              const { id, title, img, para } = CertificateAdvance2ata;
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

                      <div style={{
                        display: showMe ? "block" : "none"
                      }}>
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

                      <a className={styles.btnout} style={{ marginTop: "20px" }} onClick={toggle}>


                        {showMe ? (
                          <span style={{ color: "rgb(243 140 0)", float: "right" }}>Show less
                            <FaArrowUp style={{ marginLeft: "10px" }} />
                          </span>
                        ) : (
                          <span style={{ color: "rgb(243 140 0)", float: "right" }}>Show more
                            <FaArrowDown style={{ marginLeft: "10px" }} />
                          </span>
                        )
                        }
                      </a>
                    </div>
                  </div>

                </div>
              );
            })}
          </div>

        </div>
      ) : (

        <div className={styles.certificate}>
          <div className={styles.gridPanel}>
            {CertificateAdvance1.map((CertificateAdvance2ata) => {
              const { id, title, img, para } = CertificateAdvance2ata;
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
            {CertificateAdvance2.map((CertificateAdvance2ata) => {
              const { id, title, img, para } = CertificateAdvance2ata;
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
      )}
    </section>
  )
}

export default CertificateTab;