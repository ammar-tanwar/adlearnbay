import React, { useEffect, useState } from "react";
import styles from "./CityBackGroundImage.module.css";
import Image from "next/image";


export const CityBackGroundImage = ({ DeskImg, MobImg }) => {

  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    let width = window.innerWidth;

    if (width < 481) {
      setMobile(true);
    }
    if (width > 600) {
      setMobile(false);
    }
  }, [mobile]);


  return (

    <div>

    {mobile ? (
      <div className={styles.bgWrapMob}>
        <Image
          alt="Mobile background image"
          src={MobImg}
          layout="fill"
          objectFit="cover"
          quality={100}
          priority={true}
        />
      </div>
    ):(
      <div className={styles.bgWrapDesk}>
        <Image
          alt="DeskTop background image"
          src={DeskImg}
          layout="fill"
          objectFit="cover"
          quality={100}
          priority={true}
        />
      </div>
    )}

    </div>


  );
};



export default CityBackGroundImage;


// <img src="/BengaluruWeb.jpg" alt="Snow" style={{width:"100%"}}></img>

