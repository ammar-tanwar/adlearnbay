import Head from "next/head";
import styles from "../styles/Home.module.css";
import Popup from "../Components/Popup/Popup";
import Form from "../Components/Form/Form";
import Navbar from "../Components/CoursePage/Navbar/Navbar";
import Footer from "../Components/CoursePage/Footer/Footer";
import LearnSupport from "../Components/CoursePage/LearnSupport/LearnSupport";
import React, { useState } from "react";
import FirstSection from "../Components/CityComponents/FirstSection/FirstSection";

export default function Home() {
  const [popups, setPopups] = useState(false);

  const popupShow = () => {
    setPopups(true);
  };
  return (
    <div>
      <Head>
        <title>
          cityPages
        </title>
        <meta
          name="description"
          content="Advanced Data Science and AI Program with Domain Specialization"
        />
        <link rel="icon" href="/Learnbay-Favicon-L.png" />
       

      </Head>
      <main> 
       <Navbar popup={true} />
        <Popup trigger={popups} setTrigger={setPopups} className="popupModal">
          <div className="leftPopup">
            <div className="whiteP" />
          </div>
          <div className="RightPopup">
            <h5>Apply For Counselling</h5>
            {/* <p>Fill the below Details to get started</p> */}

            <Form popup={true} setTrigger={setPopups} />
          </div>
        </Popup>
        <FirstSection/>
      
        <LearnSupport />
        <Footer />
      </main>
    </div>
  );
}
