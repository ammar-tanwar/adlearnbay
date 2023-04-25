import { useState } from 'react';
import styles from './faq.module.css';
import { FaChevronDown} from "react-icons/fa";
import {GoPrimitiveDot} from 'react-icons/go'



function Faq() {
  const [activeQuestion, setActiveQuestion] = useState(null);

  function toggleQuestion(index) {
    if (index === activeQuestion) {
      setActiveQuestion(null);
    } else {
      setActiveQuestion(index);
    }
  }

  return (
    <div className={styles.container}>
        <p className={styles.subtitle}>CURRICULUM</p>
      <p className={styles.title}>Explore our syllabus</p>
      <div className={styles.faq}>
        <div className={`${styles.question} ${activeQuestion === 0 ? styles.open : ''}`} onClick={() => toggleQuestion(0)}>
        <GoPrimitiveDot className={styles.Cicon}/> <p className={styles.Tbheading}>Module 0 : Preparatory Classes (Programming + Maths)</p> <FaChevronDown className={styles.Dicon} />
          <div className={styles.answer}>
          <p className={styles.th1}>Topic 1 :  Python Programming </p>
          <ul className={styles.listItem}>
            <li>Programming Basics & Environment Setup</li>
            <li>Programming Basics & Environment Setup</li>
            <li>Programming Basics & Environment Setup</li>
            <li>Programming Basics & Environment Setup</li>
            <li>Programming Basics & Environment Setup</li>
            <li>Programming Basics & Environment Setup</li>
            </ul> 

          
        </div>
         
        </div>
       



        <div className={`${styles.question} ${activeQuestion === 1 ? styles.open : ''}`} onClick={() => toggleQuestion(1)}>
        <GoPrimitiveDot className={styles.Cicon}/> <p className={styles.Tbheading}>Module 1 : Preparatory Classes (Programming + Maths)</p> <FaChevronDown className={styles.Dicon}/>
          <div className={styles.answer}>
          <p className={styles.th1}>Topic 1 :  Python Programming </p>
          <ul className={styles.listItem}>
            <li>Programming Basics & Environment Setup</li>
            <li>Programming Basics & Environment Setup</li>
            <li>Programming Basics & Environment Setup</li>
            <li>Programming Basics & Environment Setup</li>
            <li>Programming Basics & Environment Setup</li>
            <li>Programming Basics & Environment Setup</li>
            </ul> 
          </div>
        </div>
        <div className={`${styles.question} ${activeQuestion === 2 ? styles.open : ''}`} onClick={() => toggleQuestion(2)}>
        <GoPrimitiveDot className={styles.Cicon}/> <p className={styles.Tbheading}>Topic 1 :  Python Programming</p> <FaChevronDown className={styles.Dicon}/>
          <div className={styles.answer}>
          <ul className={styles.listItem}>
            <li>Programming Basics & Environment Setup</li>
            <li>Programming Basics & Environment Setup</li>
            <li>Programming Basics & Environment Setup</li>
            <li>Programming Basics & Environment Setup</li>
            <li>Programming Basics & Environment Setup</li>
            <li>Programming Basics & Environment Setup</li>
            </ul>  
          </div>
        </div>

        <div className={`${styles.question} ${activeQuestion === 3 ? styles.open : ''}`} onClick={() => toggleQuestion(3)}>
        <GoPrimitiveDot className={styles.Cicon}/> <p className={styles.Tbheading}>Topic 1 :  Python Programming</p> <FaChevronDown className={styles.Dicon}/>    
          <div className={styles.answer}>
          <ul className={styles.listItem}>
            <li>Programming Basics & Environment Setup</li>
            <li>Programming Basics & Environment Setup</li>
            <li>Programming Basics & Environment Setup</li>
            <li>Programming Basics & Environment Setup</li>
            <li>Programming Basics & Environment Setup</li>
            <li>Programming Basics & Environment Setup</li>
            </ul>  
          </div>
        </div>
        

        
      </div>
    </div>
  );
}

export default Faq;
