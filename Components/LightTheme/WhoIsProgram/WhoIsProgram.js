import { FaUserGraduate } from "react-icons/fa";
import { GiStairsGoal } from "react-icons/gi";
import {
  MdOutlineCastForEducation,
  MdOutlineWorkOutline,
} from "react-icons/md";
import Styles from "./WhoIsProgram.module.css";

function WhoIsProgram({first, second, third, forth}) {
  return (
    
    <section className={Styles.container}>
      <h4>Who is this program for</h4>
      <div className={Styles.BoxDiv}>
        <div className={Styles.InnerBox}>
          <div className={Styles.imgBox}>
            <MdOutlineCastForEducation className={Styles.icon} />
            <p className={Styles.BgCont1}>Education</p>
          </div>
          <p className={Styles.BoxCont}>
            {first}
          </p>
        </div>
        <div className={Styles.InnerBox}>
          <div className={Styles.imgBox}>
            <MdOutlineWorkOutline className={Styles.icon} />
            <p className={Styles.BgCont2}>Work Exp.</p>
          </div>
          <p className={Styles.BoxCont}>{second}</p>
        </div>
        <div className={Styles.InnerBox}>
          <div className={Styles.imgBox}>
            <FaUserGraduate className={Styles.icon} />
            <p className={Styles.BgCont1}>Career Stage</p>
          </div>
          <p className={Styles.BoxCont}>
          {third}
          </p>
        </div>
        <div className={Styles.InnerBox}>
          <div className={Styles.imgBox}>
            <GiStairsGoal className={Styles.icon} />
            <p className={Styles.BgCont2}>Aspirations</p>
          </div>
          <p className={Styles.BoxCont}>
          {forth}
          </p>
        </div>
      </div>
    </section>
  );
}

export default WhoIsProgram;
