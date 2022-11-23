import React, { useState } from "react";
import styles from "./MultiTabs.module.css";
import Image from "next/image";

const MultiTabs = () => {
  const [viewAll, setViewAll] = useState(false);
  const [oneYear, setOneYear] = useState(true);
  const [nonTech, setNonTech] = useState(false);
  const [Guarantee, setGuarantee] = useState(false);
  const [assistance, setAssistance] = useState(false);
  const [Stack, setStack] = useState(false);

  return (
    <div className={styles.Course} id="course">
      <h2>Be Certified and Work as In-Demand Professional</h2>
      <p className={styles.pTop}>Our Domain Specialisation and Industry Certified Capstone Projects helps you to make your past work experience relevant</p>

      <div className={styles.courses}>
        <div className={styles.listPanel}>
          <span
            onClick={() => {
              setViewAll(false);
              setOneYear(true);
              setNonTech(false);
              setStack(false);
              setGuarantee(false);
              setAssistance(false);
            }}
            style={
              oneYear
                ? {
                    background: "white",
                    color: "#edb552",
                    borderBottom: "3px solid #edb552",
                  }
                : { background: "white" }
            }
          >
            Live-Interactive Classes
          </span>
          <span
            onClick={() => {
              setViewAll(false);
              setOneYear(false);
              setNonTech(true);
              setStack(false);
              setGuarantee(false);
              setAssistance(false);
            }}
            style={
              nonTech
                ? {
                    background: "white",
                    color: "#edb552",
                    borderBottom: "3px solid #edb552",
                  }
                : { background: "white" }
            }
          >
            IBM Certified Program
          </span>
          <span
            onClick={() => {
              setViewAll(false);
              setOneYear(false);
              setNonTech(false);
              setStack(true);
              setGuarantee(false);
              setAssistance(false);
            }}
            style={
              Stack
                ? {
                    background: "white",
                    color: "#edb552",
                    borderBottom: "3px solid #edb552",
                  }
                : { background: "white" }
            }
          >
            Domain Elective
          </span>
          <span
            onClick={() => {
              setViewAll(false);
              setOneYear(false);
              setNonTech(false);
              setStack(false);
              setGuarantee(true);
              setAssistance(false);
            }}
            style={
              Guarantee
                ? {
                    background: "white",
                    color: "#edb552",
                    borderBottom: "3px solid #edb552",
                  }
                : { background: "white" }
            }
          >
            Capstone Project
          </span>
          <span
            onClick={() => {
              setViewAll(false);
              setOneYear(false);
              setNonTech(false);
              setStack(false);
              setGuarantee(false);
              setAssistance(true);
            }}
            style={
              assistance
                ? {
                    background: "white",
                    color: "#edb552",
                    borderBottom: "3px solid #edb552",
                  }
                : { background: "white" }
            }
          >
            100% Job Assistance
          </span>
        </div>

        {oneYear ? (
          <div className={styles.gridPanel}>
            <div className={styles.left}>
              <h5>Program is taught by Industrial Expert</h5>
              <img
                src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/short-line.svg"
                width="120px"
                height="15px"
                layout="intrinsic"
                className={styles.img}
                alt="data science course in bangalore"
              />
            </div>
            <div className={styles.right}>
              <Image
                src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/marketing/live+classes.png"
                width="391"
                height="377"
                alt="data science course in bangalore"
              />
            </div>
          </div>
        ) : (
          ""
        )}
        {nonTech ? (
          <div className={styles.gridPanel}>
          <div className={styles.left}>
            <h5>Become globally recognized professional</h5>
            <img
              src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/short-line.svg"
              width="120px"
              height="15px"
              layout="intrinsic"
              className={styles.img}
              alt="data science course in bangalore"
            />
          </div>
          <div className={styles.right}>
            <Image
              src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/marketing/Certified+Program.png"
              width="391"
              height="377"
              alt="data science course in bangalore"
            />
          </div>
        </div>
        ) : (
          ""
        )}
        {Guarantee ? (
          <div className={styles.gridPanel}>
          <div className={styles.left}>
            <h5>Hand-on industrial experience to standout in career portfolio</h5>
            <img
              src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/short-line.svg"
              width="120px"
              height="15px"
              layout="intrinsic"
              className={styles.img}
              alt="data science course in bangalore"
            />
          </div>
          <div className={styles.right}>
            <Image
              src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/IBM-certified-capstone.webp"
              width="804"
              height="611"
              alt="data science course in bangalore"
            />
          </div>
        </div>
        ) : (
          ""
        )}
        {Stack ? (
          <div className={styles.gridPanel}>
            <div className={styles.left}>
              <h5>Safe Career Transition with Domain of your choice</h5>
              <img
                src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/short-line.svg"
                width="120px"
                height="15px"
                layout="intrinsic"
                className={styles.img}
                alt="data science course in bangalore"
              />
            </div>
            <div className={styles.right}>
              <Image
                src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/transition.png"
                width="391"
                height="377"
                alt="data science course in bangalore"
              />
            </div>
          </div>
        ) : (
          ""
        )}
        {assistance ? (
          <div className={styles.gridPanel}>
            <div className={styles.left}>
              <h5>Guaranteed Job Referrals from Tech Giants</h5>
              <img
                src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/short-line.svg"
                width="120px"
                height="15px"
                layout="intrinsic"
                className={styles.img}
                alt="data science course in bangalore"
              />
            </div>
            <div className={styles.right}>
              <Image
                src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/Job+Assistance.png"
                width="391"
                height="377"
                alt="data science course in bangalore"
              />
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default MultiTabs;
