
import styles from "../../styles/Timer.module.css";
const DateTimeDisplay = ({ value, type, isDanger }) => {
    return (
      <div className={isDanger ? styles.countdownDanger : styles.countdown}>
        <p>{value}</p>
        <span>{type}</span>
      </div>
    );
  };
  
export default DateTimeDisplay;
