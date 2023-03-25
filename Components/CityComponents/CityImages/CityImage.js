import React, { useEffect, useState } from "react";
import styles from "./CityImages.module.css";
import Popup from '../../Popup/Popup';
import Form from '../../Form/Form';
import Image from "next/image";
import FormOtp from "../../FormOtp/FormOtp";

function cityImage({DeskImg, MobImg, cityName, formotp}) {

    const [show, setShow] = useState(false);
    const [popups, setPopups] = useState(false);
    const [mobile, setMobile] = useState(false);
    const popupShow = () => {
        setPopups(true);
    };
    const showMenu = () => {
        setShow(!show);
    };

    useEffect(() => {
        let width = window.innerWidth;
    
        if (width < 481) {
          setMobile(true);
        }
        if (width > 481) {
          setMobile(false);
        }
      }, [mobile]);



    return (
       
            

            <section className={styles.ContactNow}>
            <Popup trigger={popups} setTrigger={setPopups} className="popupModal">
                <div className="leftPopup">
                    <div className="whiteP" />
                </div>
                <div className="RightPopup">
                    <h5>Apply For Counselling</h5>
                    {formotp ? (
                        <FormOtp popup={true} />
                      ) : (
                    <Form popup={true} setTrigger={setPopups} />
                    )}                </div>
            </Popup>
           
            {mobile ? (
                <Image src={MobImg} alt="Snow" height="300"  layout="intrinsic" quality={100} width="480" />
              ) : (
                <Image src={DeskImg} alt="Snow1" quality={100} layout="intrinsic" height="300" width="1620" />
              )}
                <div className={styles.container}>
                    <p className={styles.ContactNowHead}>Apply For Counselling in <span className={styles.banglurufontsize}>{cityName}</span></p>
                    <button className={styles.btnlight} onClick={popupShow} >Apply Now</button>
                </div>
            </section>


      
    )
}

export default cityImage