import React, { useState } from "react";
import { BsFillCreditCard2FrontFill, BsLaptopFill } from "react-icons/bs";
import { GiWallet } from "react-icons/gi";
import styles from "./ProgramFee.module.css";
import Image from "next/image";
import Popup from "../../Popup/Popup";
import Form from "../../Form/Form";
import FormOtp from "../../FormOtp/FormOtp";

export const ProgramFee = ({
  Fee,
  Emi,
  CourseFeeAndFinancing,
  para,
  fsdlink,
  formotp,
  s2dataScience,
  fullstackADS,
}) => {
  const [popups, setPopups] = useState(false);

  const popupShow = () => {
    setPopups(true);
  };
  return (
    <>
      <Popup trigger={popups} setTrigger={setPopups} className="popupModal">
        <div className="leftPopup">
          <div className="whiteP" />
        </div>
        <div className="RightPopup">
          <h5>Apply For Counselling</h5>
          {formotp ? (
            <FormOtp
              popup={true}
              s2dataScience={s2dataScience}
              fullstackADS={fullstackADS}
              upSkillingHide={true}
            />
          ) : (
            <Form popup={true} setTrigger={setPopups} upSkillingHide={true} />
          )}
        </div>
      </Popup>
      <div className={styles.header}>
        <h5>{CourseFeeAndFinancing}</h5>
        <p>{para}</p>
      </div>
      <div className={styles.wrap}>
        <div className={styles.feeWrapper}>
          <div className={styles.left}>
            <h6>The EMI option</h6>
            <p>Powered By</p>
            <Image
              src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/ALight/FeeIcon.png"
              width="370"
              height="47"
              layout="intrinsic"
            />
            <div className={styles.bottom}>
              <div className={styles.bottomp}>
                <p>0% interest rates&nbsp;|</p>
                <p>&nbsp; No hidden costs</p>
              </div>
              <h5>{Fee}</h5>

              {fsdlink ? (
                <a href="https://calendly.com/learnbay-apply-for-counselling/one_on_one_session">
                  {" "}
                  <button>Enroll Now</button>
                </a>
              ) : (
                <button onClick={popupShow}>Enroll Now</button>
              )}
            </div>
          </div>
          <div className={styles.right}>
            <h6>Financing as low as</h6>
            <p>Pay By</p>
            <div className={styles.bottom}>
              <div className={styles.lefts}>
                <BsFillCreditCard2FrontFill className={styles.icon} />
                <p>Credit Card</p>
              </div>
              <div className={styles.center}>
                <BsLaptopFill className={styles.icon} />
                <p>Internet Banking</p>
              </div>
              <div className={styles.rights}>
                <GiWallet className={styles.icon} />
                <p>No Cost EMI</p>
              </div>
            </div>
            <div className={styles.bottomS}>
              <p>Get professional training affordably</p>
              <h5>{Emi}</h5>

              {fsdlink ? (
                <a href="https://calendly.com/learnbay-apply-for-counselling/one_on_one_session">
                  {" "}
                  <button style={{ margin: "auto" }}>Enroll Now</button>
                </a>
              ) : (
                <button style={{ margin: "auto" }} onClick={popupShow}>
                  Enroll Now
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
