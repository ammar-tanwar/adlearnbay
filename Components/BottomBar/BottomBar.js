import React, { useState } from "react";
import {
  FaArrowRight } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import Link from "next/dist/client/link";
import Popup from "../Popup/Popup";
import Form from "../Form/Form";

const BottomBar = ({ changeBottom }) => {
  const [popups, setPopups] = useState(false);

  const popupShow = () => {
    setPopups(true);
  };
  return (
    <div className="divWrapper">
      <Popup trigger={popups} setTrigger={setPopups} className="popupModal">
        <div className="leftPopup">
          <div className="whiteP" />
        </div>
        <div className="RightPopup">
          <h5>Apply For Counselling</h5>
          {/* <p>Fill the below details to get started</p> */}
          <Form popup={true} setTrigger={setPopups} />
        </div>
      </Popup>
      <div className="FlDiv">
        <div className="flDivLeft" onClick={popupShow}>
          Apply For Couselling
          <FaArrowRight className="bIcon" />
        </div>
        <div className="flDivRight">
        <script
          src="//code.tidio.co/mgl99n6cbvvabah9x8jj98no83kdozym.js"
          async
        ></script>
        </div>
      </div>
    </div>
  );
};

export default BottomBar;
