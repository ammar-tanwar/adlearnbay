import React, { useState, useEffect } from "react";
import styles from "./OfferPopup.module.css";
import { AiFillCloseCircle } from "react-icons/ai";
import Popup from "../../Popup/Popup";
import Form from "../../Form/Form";

const OfferPopup = () => {
  
  const [popups, setPopups] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setPopups(true);
    }, 1000);
    return;
  }, []);

  return (
      <Popup trigger={popups} setTrigger={setPopups} className="popupModal">
      <div className="leftPopup">
          <div className="whiteP" />
      </div>
      <div className="RightPopup">
          <h5>Apply For Counselling</h5>
          <Form popup={true} setTrigger={setPopups} />
      </div>
    </Popup>
  );
};

export default OfferPopup;
