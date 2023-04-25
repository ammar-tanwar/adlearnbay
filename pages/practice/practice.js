import Navbar from "../../Components/NavbarHome/Navbar";
// import FirstSection from "../../Components/Home/FirstSection/FirstSection1";
import CourseSlide from "../../Components/Practice/CourseSlide";
import CourseSlide1 from "../../Components/Practice/CourseSlide1";

import Faq from "../../Components/Practice/Faq";
import { FiArrowDown } from "react-icons/fi";
import styles from './practice.module.css';
import { AiOutlineDownload } from "react-icons/ai";





export default function Practice() {

    return (
        <>
            <Navbar />
            
            <CourseSlide1/>
            <Faq />

            <button className={styles.downloadButton}>
              Download detailed syllabus <AiOutlineDownload style={{ fontSize: '30px' }} />
            </button>



        </>

    );

}
