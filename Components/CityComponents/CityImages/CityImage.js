import React, { useEffect, useState } from "react";
import styles from "./CityImages.module.css";
import Popup from '../../Popup/Popup';
import Form from '../../Form/Form';
import Image from "next/image";

function cityImage() {

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
                    <Form popup={true} setTrigger={setPopups} />
                </div>
            </Popup>
           
            {mobile ? (
                <Image src="/CenterCityMob.jpg" alt="Snow" height="300"  quality={100} width="400" />
              ) : (
                <Image src="/CenterCityWeb.jpg" alt="Snow" quality={100}  height="300" width="1520" />
              )}
                <div className={styles.container}>
                    <p className={styles.ContactNowHead}>Apply For Counselling in <span className={styles.banglurufontsize}>ಬೆಂಗಳೂರು</span></p>
                    <button className={styles.btnlight} onClick={popupShow} >Apply Now</button>
                </div>
            </section>


      
    )
}

export default cityImage