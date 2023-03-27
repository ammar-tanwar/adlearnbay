import React, { useState, useEffect } from "react";
import styles from "./OfferPopup.module.css";
import { AiFillCloseCircle } from "react-icons/ai";
import Image from "next/image";

const OfferPopup = () => {
  const [open, setOpen] = useState(false);
  const handelOpen = () => {
    setOpen(false);
  };
  useEffect(() => {
    setTimeout(() => {
      setOpen(true);
    }, 10000);
    return;
  }, []);
  return (
      <div className={open ? styles.OfferPopup : styles.hide}>
        <AiFillCloseCircle className={styles.Icon} onClick={handelOpen} />
                <div className={styles.Offer}>
                  <Image src="/mortarboard.png" width="70px" height="70px" style={{marginTop:"-80px", marginLeft:"-70px"}} className={styles.img}/>
                  <h6>
                  Last Chance for <b>30%</b> Scholarship - End of Financial Year Sale!
                  </h6>
                  <p>We are excited to announce our financial year end scholarship of <b>30%</b> on all Courses.
</p>
                  <p><b>35%</b> Scholarship for professionals on career break & Up to <b>50%</b> Scholarship for those who lost their job recently in Recession*.</p>
                  <p>
                    <b>Note : </b>This Financial Year end offer is valid till <b>31st March</b>.
                  </p>
                  <p style={{ fontSize: "12px" }}>
                    *** Terms and conditions applied.
                  </p>
                  <a href="https://forms.gle/89kvteiX5bcNePp78" target="_blank">
                    <button onClick={handelOpen} style={{ width: "100%" }}>
                      Apply For Scholarship Now!
                    </button>
                  </a>
                </div>
      </div>
  );
};

export default OfferPopup;
