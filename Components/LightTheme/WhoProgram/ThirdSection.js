import Image from "next/image";
import { useState } from "react";
import { FaDownload } from "react-icons/fa";
import Form from "../../Form/Form";
import FormOtp from "../../FormOtp/FormOtp";
import Button from "../../Global/Button/Button";
import Popup from "../../Popup/Popup";
import styles from "./ThirdSection.module.css";

const ThirdSection = ({
  leftImage,
  ThirdSectionData,
  dataScience,
  s2dataScience,
  formotp,
}) => {
  const [popups, setPopups] = useState(false);
  const [titleCourse, setTitleCourse] = useState();
  const [brochureLinks, setBrochureLinks] = useState()

  const popupShow = () => {
    setPopups(true);
  };
  return (
    <div className={`${styles.program} wrapper`} id="eligibility">
      <Popup
        trigger={popups}
        setTrigger={setPopups}
        className="popupModal"
        popup={true}
        // radio={radio}
        dataScience={dataScience}
        s2dataScience={s2dataScience}
        downloadBrochure
      >
        <div className="leftPopup">
          <div
            className="whiteP"
            style={{ width: "340px", height: "400px" }}
          ></div>
        </div>
        <div className="RightPopup">
          <h5>Apply For Counselling</h5>
          {formotp ? (
            <FormOtp
            upSkillingHide={true}
              popup={true}
              s2dataScience={s2dataScience}
            />
          ) : (
            <Form setTrigger={setPopups} upSkillingHide={true} />
          )}
        </div>
      </Popup>{" "}
     
      <h4>Choose Your Domain Elective</h4>
      <div className={styles.programWrap}>
        <div className={styles.left}>
          <Image src={leftImage} width={500} height={514} alt="who" />
        </div>
        <div>
        <div className={styles.boxWrap}>
            {ThirdSectionData.map((data, index) => {
              const { icon, heading, para, brochureLink } = data;
              return (
                <div className={styles.leftSide} key={index}>
                  <div className={styles.boxIcon}>
                    <div className={styles.icons}>
                      {icon}
                    </div>
                  </div>
                  <h5 className={styles.heading}>{heading}</h5>
                  <p>{para}</p>

                  <div className={styles.buttonDiv}>
                    <a
                      onClick={() => {
                        setTitleCourse(heading);
                        setBrochureLinks(brochureLink);
                        popupShow();
                      }}
                    >
                      <Button
                        text="Brochure"
                        passIcon={<FaDownload className="bIconS" />}
                      />
                    </a>

          
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThirdSection;
