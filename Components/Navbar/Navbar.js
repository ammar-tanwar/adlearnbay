import React, { useState, useEffect } from "react";
import Image from "next/image";
import { FaArrowRight, FaChevronDown, FaChevronUp } from "react-icons/fa";
import styles from "./Navbar.module.css";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import Popup from "../Popup/Popup";
// import Form from "../Form/Form";
import Form from "../Event/Form/Form";
import { useRouter } from "next/router";

const Navbar = ({ radio, event, dataScience, fullStack }) => {
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
          <h5> Register NOW! </h5>
          {/* <p>Fill the below details to get started</p> */}
          <Form popup={true} setTrigger={setPopups} radio={radio} fullStack={fullStack} dataScience={dataScience} />
        </div>
      </Popup>

      <nav className={styles.nav}>
        <div className={styles.left}>
          <GiHamburgerMenu
            className={styles.ham}
            onClick={() => {
              showMenu();
              setIcon(false);
            }}
          />


          <a href="#">
            <Image
              src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/Learnbay-Logo.webp"
              alt="Learnbay"
              quality={100}
              objectFit="contain"
              width={mobile ? "180" : "230"}
              height="60px"
            />
          </a>
        </div>
        <div className={styles.right}>

          <button onClick={popupShow} className="outLineBtn">
          Register NOW!
            <FaArrowRight className={styles.icon} />
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;



// <div className={styles.right}>
// <span>
//     <Link href="#Feature">Program Features</Link>
//   </span>

//   <span>
//     <Link href="#trainer">Trainer Details</Link>
//   </span>
//   <span>
//     <Link href="#About">Learn About</Link>
//   </span>
// <button onClick={popupShow} className="outLineBtn">
// Apply For Counselling
// <FaArrowRight className={styles.icon} />
// </button>
// </div>



// <div className={show ? styles.mobileWrapper : styles.hide}>
//             <div className={styles.mobileMenu}>
//             <span>
//                 <Link href="#Feature">Program Features</Link>
//               </span>

//               <span>
//                 <Link href="#trainer">Trainer Details</Link>
//               </span>
//               <span>
//                 <Link href="#About">Learn About</Link>
//               </span>
//             </div>
//           </div>