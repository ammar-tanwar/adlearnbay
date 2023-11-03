import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { FaArrowRight, FaDownload } from "react-icons/fa";
import Form from "../../Form/Form";
import FormOtp from "../../FormOtp/FormOtp";
import Popup from "../../Popup/Popup";
import styles from "./Navbar.module.css";

const Navbar = ({
  radio,
  fsdlink,
  formotp,
  formotpForS3DS,
  eventQRadio,
  brochureButton,
  DownloadSyllabus,
  s2dataScience,
  fullstackADS,
  marketing,
  grad,
  upSkillingHide,
  upSkilling,
}) => {
  const router = useRouter();
  const [icon, setIcon] = useState(false);
  const [show, setShow] = useState(false);
  const [popups, setPopups] = useState(false);

  const popupShow = () => {
    setPopups(true);
  };
  const showMenu = () => {
    setShow(!show);
  };

  const handleIcon = (data) => {
    setIcon(data);
  };

  const [mobile, setMobile] = useState(false);
  useEffect(() => {
    let width = window.innerWidth;
    if (width < 481) {
      setMobile(true);
    }
    if (width > 481) {
      setMobile(false);
    }
  });

  return (
    <div>
      <Popup trigger={popups} setTrigger={setPopups} className="popupModal">
        <div className="leftPopup">
          <div className="whiteP" />
        </div>
        <div className="RightPopup">
          {DownloadSyllabus ? (
            <h5>Download Syllabus</h5>
          ) : (
            <>
              {brochureButton ? (
                <h5>Download Brochure</h5>
              ) : (
                <h5>Apply For Counselling</h5>
              )}
            </>
          )}

          {brochureButton ? (
            <>
              {formotp ? (
                <FormOtp
                  popup={true}
                  downloadBrochure
                  upSkillingHide={true}
                  s2dataScience={s2dataScience}
                  fullstackADS={fullstackADS}
                  marketing={marketing}
                  grad={grad}
                />
              ) : (
                <Form
                  setTrigger={setPopups}
                  downloadBrochure
                  upSkillingHide={true}
                  upSkilling={upSkilling}
                />
              )}
            </>
          ) : (
            <>
              {eventQRadio ? (
                <>
                  <FormOtp popup={true} upSkillingHide={true} />
                </>
              ) : (
                <>
                  {formotpForS3DS ? (
                    <FormOtp upSkillingHide={true} />
                  ) : (
                    <>
                      {formotp ? (
                        <FormOtp
                          upSkillingHide={true}
                          popup={true}
                          radio={radio}
                          s2dataScience={s2dataScience}
                          fullstackADS={fullstackADS}
                          marketing={marketing}
                        />
                      ) : (
                        <Form
                          popup={true}
                          upSkillingHide={true}
                          setTrigger={setPopups}
                          radio={radio}
                          upSkilling={upSkilling}
                        />
                      )}
                    </>
                  )}
                </>
              )}
            </>
          )}
        </div>
      </Popup>
      <nav className={styles.nav}>
        <div className={styles.left}>
          <Image
            src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/ALight/learnbay-logo.png"
            alt="Learnbay"
            quality={100}
            objectFit="contain"
            width={mobile ? "180" : "230"}
            priority={true}
            loading="eager"
            height="60px"
          />
        </div>
        <div className={styles.right}>
          {DownloadSyllabus ? (
            <button onClick={popupShow} className="outLineBtn">
              Download Syllabus
              <FaDownload className={styles.icon} />
            </button>
          ) : (
            <>
              {brochureButton ? (
                <button onClick={popupShow} className="outLineBtn">
                  Download Brochure
                  <FaDownload className={styles.icon} />
                </button>
              ) : (
                <>
                  {fsdlink ? (
                    <a href="https://calendly.com/learnbay-apply-for-counselling/one_on_one_session">
                      <button className="outLineBtn">
                        Apply For Counselling
                        <FaArrowRight className={styles.icon} />
                      </button>
                    </a>
                  ) : (
                    <button onClick={popupShow} className="outLineBtn">
                      Apply For Counselling
                      <FaArrowRight className={styles.icon} />
                    </button>
                  )}
                </>
              )}
            </>
          )}

          <Popup></Popup>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

// {formotpForS3DS ? (
//   <FormOtp
//     popup={true}
//
//
//
//
//   />
// ) : (
//   <>
//     {formotp ? (
//       <FormOtp popup={true} radio={radio} />

//     ) : (
//       <Form popup={true} setTrigger={setPopups} radio={radio} />
//     )}
//   </>
// )}
