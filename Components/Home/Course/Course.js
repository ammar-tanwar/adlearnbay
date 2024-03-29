import React, { useState } from "react";
import styles from "./Course.module.css";
import { GoCheck } from "react-icons/go";
import Popup from "../../Popup/Popup";
import Form from "../../Form/Form";
import { BsCheckCircle } from "react-icons/bs";
import { FaUserGraduate, FaFilePdf } from "react-icons/fa";
import {
  viewAllD,
  ForProgrammersD,
  ForNonProgrammerD,
  JobGuaranteeD,
  StackD,
} from "./courseDetails";

const Course = ({ popupHead, radio }) => {
  const [viewAll, setViewAll] = useState(false);
  const [oneYear, setOneYear] = useState(true);
  const [nonTech, setNonTech] = useState(false);
  const [Guarantee, setGuarantee] = useState(false);
  const [Stack, setStack] = useState(false);
  const [mobile, setMobile] = useState(false);
  const [popups, setPopups] = useState(false);

  const popupShow = () => {
    setPopups(true);
  };
  return (
    <div className={styles.Course} id="course">
      <Popup
        trigger={popups}
        setTrigger={setPopups}
        className="popupModal"
        downloadBrochure
      >
        <div className="leftPopup">
          <div
            className="whiteP"
            style={{ width: "350px", height: "400px" }}
          ></div>
        </div>
        <div className="RightPopup">
          <h5>{popupHead}</h5>
          <p>Please enter the following details to initiate your download</p>
          <Form
            setTrigger={setPopups}
            downloadBrochure
            upSkillingHide={true}
            radio={radio}
          />
        </div>
      </Popup>
      <h2>Industry Certified Program for Working Professionals</h2>
      <div className={styles.feature}>
        <p>
          <GoCheck className={styles.tick} />
          100% Live Interactive Sessions
        </p>
        <p>
          <GoCheck className={styles.tick} />
          1:1 Doubt Clearing
        </p>
        <p>
          <GoCheck className={styles.tick} />
          IBM’s Multi Certification
        </p>
        <p>
          <GoCheck className={styles.tick} />
          Exclusive Alumni Portal Access
        </p>
      </div>
      <div className={styles.courses}>
        <div className={styles.listPanel}>
          <span
            onClick={() => {
              setViewAll(false);
              setOneYear(true);
              setNonTech(false);
              setStack(false);
              setGuarantee(false);
            }}
            style={
              oneYear
                ? { background: "white", color: "#0072bc" }
                : { background: "#E5F3FA" }
            }
          >
            Popular Courses
          </span>
          <span
            onClick={() => {
              setViewAll(false);
              setOneYear(false);
              setNonTech(true);
              setStack(false);
              setGuarantee(false);
            }}
            style={
              nonTech
                ? { background: "white", color: "#0072bc" }
                : { background: "#E5F3FA" }
            }
          >
            Data Science & AI
          </span>
          <span
            onClick={() => {
              setViewAll(false);
              setOneYear(false);
              setNonTech(false);
              setStack(true);
              setGuarantee(false);
            }}
            style={
              Stack
                ? { background: "white", color: "#0072bc" }
                : { background: "#E5F3FA" }
            }
          >
            Development
          </span>
          <span
            onClick={() => {
              setViewAll(false);
              setOneYear(false);
              setNonTech(false);
              setStack(false);
              setGuarantee(true);
            }}
            style={
              Guarantee
                ? { background: "white", color: "#0072bc" }
                : { background: "#E5F3FA" }
            }
          >
            100% Placement Assistance
          </span>
          <span
            onClick={() => {
              setViewAll(true);
              setOneYear(false);
              setNonTech(false);
              setGuarantee(false);
              setStack(false);
            }}
            style={
              viewAll
                ? { background: "white", color: "#0072bc" }
                : { background: "#E5F3FA" }
            }
          >
            View All
          </span>
        </div>
        {viewAll ? (
          <div className={styles.gridPanel}>
            {viewAllD.map((viewAllData) => {
              const { id, title, title1, img, para, link1 } = viewAllData;
              return (
                <div className={styles.leftSide} key={id}>
                  <a href={link1}>
                    <img
                      src={img}
                      layout="intrinsic"
                      className={styles.courseImg}
                    />
                  </a>
                  <h6>{title}</h6>
                  <h6>{title1}</h6>
                  <p>
                    <BsCheckCircle className={styles.checkCircle} />
                    {para[0]}
                  </p>
                  <p>
                    <BsCheckCircle className={styles.checkCircle} />
                    {para[1]}
                  </p>
                  <p>
                    <BsCheckCircle className={styles.checkCircle} />
                    {para[2]}
                  </p>
                  <div className={styles.btnWrapper}>
                    <a href={link1}>
                      <button>
                        View Details
                        <FaUserGraduate className="bIcons" />
                      </button>
                    </a>
                    <a onClick={popupShow}>
                      <button className="outLineBtn">
                        Brochure
                        <FaFilePdf
                          className="bIcon"
                          style={{ color: "#0072bc" }}
                        />
                      </button>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          ""
        )}
        {oneYear ? (
          <div className={styles.gridPanel}>
            {ForProgrammersD.map((viewAllData) => {
              const { id, title, title1, img, para, link1 } = viewAllData;
              return (
                <div className={styles.leftSide} key={id}>
                  <a href={link1}>
                    <img
                      src={img}
                      layout="intrinsic"
                      className={styles.courseImg}
                    />
                  </a>
                  <h6>{title}</h6>
                  <h6>{title1}</h6>
                  <p>
                    <BsCheckCircle className={styles.checkCircle} />
                    {para[0]}
                  </p>
                  <p>
                    <BsCheckCircle className={styles.checkCircle} />
                    {para[1]}
                  </p>
                  <p>
                    <BsCheckCircle className={styles.checkCircle} />
                    {para[2]}
                  </p>
                  <div className={styles.btnWrapper}>
                    <a href={link1}>
                      <button>
                        View Details
                        <FaUserGraduate className="bIcons" />
                      </button>
                    </a>
                    <a onClick={popupShow}>
                      <button className="outLineBtn">
                        Brochure
                        <FaFilePdf
                          className="bIcon"
                          style={{ color: "#0072bc" }}
                        />
                      </button>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          ""
        )}
        {nonTech ? (
          <div className={styles.gridPanel}>
            {ForNonProgrammerD.map((viewAllData) => {
              const { id, title, title1, img, para, link1 } = viewAllData;
              return (
                <div className={styles.leftSide} key={id}>
                  <a href={link1}>
                    <img
                      src={img}
                      layout="intrinsic"
                      className={styles.courseImg}
                    />
                  </a>
                  <h6>{title}</h6>
                  <h6>{title1}</h6>
                  <p>
                    <BsCheckCircle className={styles.checkCircle} />
                    {para[0]}
                  </p>
                  <p>
                    <BsCheckCircle className={styles.checkCircle} />
                    {para[1]}
                  </p>
                  <p>
                    <BsCheckCircle className={styles.checkCircle} />
                    {para[2]}
                  </p>
                  <div className={styles.btnWrapper}>
                    <a href={link1}>
                      <button>
                        View Details
                        <FaUserGraduate className="bIcons" />
                      </button>
                    </a>
                    <a onClick={popupShow}>
                      <button className="outLineBtn">
                        Brochure
                        <FaFilePdf
                          className="bIcon"
                          style={{ color: "#0072bc" }}
                        />
                      </button>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          ""
        )}
        {Guarantee ? (
          <div className={styles.gridPanel}>
            {JobGuaranteeD.map((viewAllData) => {
              const { id, title, title1, img, para, link1 } = viewAllData;
              return (
                <div className={styles.leftSide} key={id}>
                  <a href={link1}>
                    <img
                      src={img}
                      layout="intrinsic"
                      className={styles.courseImg}
                    />
                  </a>
                  <h6>{title}</h6>
                  <h6>{title1}</h6>
                  <p>
                    <BsCheckCircle className={styles.checkCircle} />
                    {para[0]}
                  </p>
                  <p>
                    <BsCheckCircle className={styles.checkCircle} />
                    {para[1]}
                  </p>
                  <p>
                    <BsCheckCircle className={styles.checkCircle} />
                    {para[2]}
                  </p>
                  <div className={styles.btnWrapper}>
                    <a href={link1}>
                      <button>
                        View Details
                        <FaUserGraduate className="bIcons" />
                      </button>
                    </a>
                    <a onClick={popupShow}>
                      <button className="outLineBtn">
                        Brochure
                        <FaFilePdf
                          className="bIcon"
                          style={{ color: "#0072bc" }}
                        />
                      </button>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          ""
        )}
        {Stack ? (
          <div className={styles.gridPanel}>
            {StackD.map((viewAllData) => {
              const { id, title, title1, img, para, link1 } = viewAllData;
              return (
                <div className={styles.leftSide} key={id}>
                  <a href={link1}>
                    <img
                      src={img}
                      layout="intrinsic"
                      className={styles.courseImg}
                    />
                  </a>
                  <h6>{title}</h6>
                  <h6>{title1}</h6>
                  <p>
                    <BsCheckCircle className={styles.checkCircle} />
                    {para[0]}
                  </p>
                  <p>
                    <BsCheckCircle className={styles.checkCircle} />
                    {para[1]}
                  </p>
                  <p>
                    <BsCheckCircle className={styles.checkCircle} />
                    {para[2]}
                  </p>
                  <div className={styles.btnWrapper}>
                    <a href={link1}>
                      <button>
                        View Details
                        <FaUserGraduate className="bIcons" />
                      </button>
                    </a>
                    <a onClick={popupShow}>
                      <button className="outLineBtn">
                        Brochure
                        <FaFilePdf
                          className="bIcon"
                          style={{ color: "#0072bc" }}
                        />
                      </button>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Course;
