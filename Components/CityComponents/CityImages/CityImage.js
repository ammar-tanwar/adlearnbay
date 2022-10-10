import React, { useState, } from "react";
import styles from "./CityImages.module.css";
import Popup from '../../Popup/Popup';
import Form from '../../Form/Form';


function cityImage() {

    const [show, setShow] = useState(false);
    const [popups, setPopups] = useState(false);

    const popupShow = () => {
        setPopups(true);
    };
    const showMenu = () => {
        setShow(!show);
    };
    return (
        <div>
            <Popup trigger={popups} setTrigger={setPopups} className="popupModal">
                <div className="leftPopup">
                    <div className="whiteP" />
                </div>
                <div className="RightPopup">
                    <h5>Apply For Counselling</h5>
                    <Form popup={true} setTrigger={setPopups} />
                </div>
            </Popup>

            <section className={styles.ContactNow}>
                <div className={styles.container}>
                    <p className={styles.ContactNowHead}>Apply For Counselling</p>
                    <button className={styles.btnlight} onClick={popupShow} >Request A CallBack</button>
                </div>
            </section>


        </div>
    )
}

export default cityImage