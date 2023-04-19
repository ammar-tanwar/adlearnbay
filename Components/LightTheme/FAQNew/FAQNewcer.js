import React, { useState } from "react";
import styles from "./FAQNew.module.css";
import FAQ from "../FAQNew/FAQ";

function FAQNew({
  FaqDatas,
  DomainFaqDatas,
  SupportFaqDatas,
  jobFaqDatas,
  MentorshipFaqDatas,
  CapstoneFaqDatas,
  PaymentFaqDatas,
}) {
  const [viewAll, setViewAll] = useState(true);
  const [oneYear, setOneYear] = useState(false);
  const [nonTech, setNonTech] = useState(false);
  const [manager, setManager] = useState(false);
  const [Assistance, setJobAssistance] = useState(false);
  const [Mentorship, setMentorship] = useState(false);
  const [Support, setSupport] = useState(false);
  const [mobile, setMobile] = useState(false);
  return (
    <div className={styles.Course}>
      <h4 className={styles.h1}>FAQs</h4>
      <div className={styles.courseM}>
        <div className={styles.courses}>
          <div className={styles.listPanel}>
            <span
              onClick={() => {
                setViewAll(true);
                setOneYear(false);
                setNonTech(false);
                setManager(false);
                setJobAssistance(false);
                setMentorship(false);
                setSupport(false);
              }}
              style={
                viewAll
                  ? { background: "white", borderLeft: "5px solid #0072BC" }
                  : { background: "none" }
              }
            >
              COURSE RELATED
            </span>
            <span
              onClick={() => {
                setViewAll(false);
                setOneYear(true);
                setNonTech(false);
                setManager(false);
                setJobAssistance(false);
                setMentorship(false);
                setSupport(false);
              }}
              style={
                oneYear
                  ? { background: "white", borderLeft: "5px solid #0072BC" }
                  : { background: "none" }
              }
            >
              DOMAIN ELECTIVES
            </span>
            <span
              onClick={() => {
                setViewAll(false);
                setOneYear(false);
                setNonTech(true);
                setManager(false);
                setJobAssistance(false);
                setMentorship(false);
                setSupport(false);
              }}
              style={
                nonTech
                  ? { background: "white", borderLeft: "5px solid #0072BC" }
                  : { background: "none" }
              }
            >
              PAYMENTS AND SCHOLARSHIPS
            </span>
            <span
              onClick={() => {
                setViewAll(false);
                setOneYear(false);
                setNonTech(false);
                setManager(true);
                setJobAssistance(false);
                setMentorship(false);
                setSupport(false);
              }}
              style={
                manager
                  ? { background: "white", borderLeft: "5px solid #0072BC" }
                  : { background: "none" }
              }
            >
              CAPSTONE AND REAL-TIME PROJECTS
            </span>
            <span
              onClick={() => {
                setViewAll(false);
                setOneYear(false);
                setNonTech(false);
                setManager(false);
                setJobAssistance(true);
                setMentorship(false);
                setSupport(false);
              }}
              style={
                Assistance
                  ? { background: "white", borderLeft: "5px solid #0072BC" }
                  : { background: "none" }
              }
            >
              JOB ASSISTANCE
            </span>
            <span
              onClick={() => {
                setViewAll(false);
                setOneYear(false);
                setNonTech(false);
                setManager(false);
                setJobAssistance(false);
                setMentorship(true);
                setSupport(false);
              }}
              style={
                Mentorship
                  ? { background: "white", borderLeft: "5px solid #0072BC" }
                  : { background: "none" }
              }
            >
              MENTORSHIPS
            </span>
            <span
              onClick={() => {
                setViewAll(false);
                setOneYear(false);
                setNonTech(false);
                setManager(false);
                setJobAssistance(false);
                setMentorship(false);
                setSupport(true);
              }}
              style={
                Support
                  ? { background: "white", borderLeft: "5px solid #0072BC" }
                  : { background: "none" }
              }
            >
              SUPPORT
            </span>
          </div>
          {viewAll ? (
            <div className={styles.gridPanel}>
              <FAQ FaqData={FaqDatas} />
            </div>
          ) : (
            ""
          )}
          {oneYear ? (
            <div className={styles.gridPanel}>
              <FAQ FaqData={DomainFaqDatas} />
            </div>
          ) : (
            ""
          )}
          {nonTech ? (
            <div className={styles.gridPanel}>
              <FAQ FaqData={PaymentFaqDatas} />
            </div>
          ) : (
            ""
          )}
          {Assistance ? (
            <div className={styles.gridPanel}>
              <FAQ FaqData={jobFaqDatas} />
            </div>
          ) : (
            ""
          )}
          {manager ? (
            <div className={styles.gridPanel}>
              <FAQ FaqData={CapstoneFaqDatas} />
            </div>
          ) : (
            ""
          )}
          {Mentorship ? (
            <div className={styles.gridPanel}>
              <FAQ FaqData={MentorshipFaqDatas} />
            </div>
          ) : (
            ""
          )}
          {Support ? (
            <div className={styles.gridPanel}>
              <FAQ FaqData={SupportFaqDatas} />
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
      <div className={styles.courseD}>
        <div className={styles.courses}>
          <div className={styles.listPanel}>
            <span
              onClick={() => {
                setViewAll(true);
                setOneYear(false);
                setNonTech(false);
                setManager(false);
                setJobAssistance(false);
                setMentorship(false);
                setSupport(false);
              }}
              style={
                viewAll
                  ? { background: "white", borderLeft: "5px solid #0072BC" }
                  : { background: "none" }
              }
            >
              COURSE RELATED
            </span>
            {viewAll ? (
              <div className={styles.gridPanel}>
                <FAQ FaqData={FaqDatas} />
              </div>
            ) : (
              ""
            )}
            <span
              onClick={() => {
                setViewAll(false);
                setOneYear(true);
                setNonTech(false);
                setManager(false);
                setJobAssistance(false);
                setMentorship(false);
                setSupport(false);
              }}
              style={
                oneYear
                  ? { background: "white", borderLeft: "5px solid #0072BC" }
                  : { background: "none" }
              }
            >
              DOMAIN ELECTIVES
            </span>
            {oneYear ? (
              <div className={styles.gridPanel}>
                <FAQ FaqData={DomainFaqDatas} />
              </div>
            ) : (
              ""
            )}
            <span
              onClick={() => {
                setViewAll(false);
                setOneYear(false);
                setNonTech(true);
                setManager(false);
                setJobAssistance(false);
                setMentorship(false);
                setSupport(false);
              }}
              style={
                nonTech
                  ? { background: "white", borderLeft: "5px solid #0072BC" }
                  : { background: "none" }
              }
            >
              PAYMENTS AND SCHOLARSHIPS
            </span>
            {nonTech ? (
              <div className={styles.gridPanel}>
                <FAQ FaqData={PaymentFaqDatas} />
              </div>
            ) : (
              ""
            )}
            <span
              onClick={() => {
                setViewAll(false);
                setOneYear(false);
                setNonTech(false);
                setManager(true);
                setJobAssistance(false);
                setMentorship(false);
                setSupport(false);
              }}
              style={
                manager
                  ? { background: "white", borderLeft: "5px solid #0072BC" }
                  : { background: "none" }
              }
            >
              CAPSTONE AND REAL-TIME PROJECTS
            </span>
            {manager ? (
              <div className={styles.gridPanel}>
                <FAQ FaqData={CapstoneFaqDatas} />
              </div>
            ) : (
              ""
            )}
            <span
              onClick={() => {
                setViewAll(false);
                setOneYear(false);
                setNonTech(false);
                setManager(false);
                setJobAssistance(true);
                setMentorship(false);
                setSupport(false);
              }}
              style={
                Assistance
                  ? { background: "white", borderLeft: "5px solid #0072BC" }
                  : { background: "none" }
              }
            >
              JOB ASSISTANCE
            </span>
            {Assistance ? (
              <div className={styles.gridPanel}>
                <FAQ FaqData={jobFaqDatas} />
              </div>
            ) : (
              ""
            )}
            <span
              onClick={() => {
                setViewAll(false);
                setOneYear(false);
                setNonTech(false);
                setManager(false);
                setJobAssistance(false);
                setMentorship(true);
                setSupport(false);
              }}
              style={
                Mentorship
                  ? { background: "white", borderLeft: "5px solid #0072BC" }
                  : { background: "none" }
              }
            >
              MENTORSHIPS
            </span>
            {Mentorship ? (
              <div className={styles.gridPanel}>
                <FAQ FaqData={MentorshipFaqDatas} />
              </div>
            ) : (
              ""
            )}
            <span
              onClick={() => {
                setViewAll(false);
                setOneYear(false);
                setNonTech(false);
                setManager(false);
                setJobAssistance(false);
                setMentorship(false);
                setSupport(true);
              }}
              style={
                Support
                  ? { background: "white", borderLeft: "5px solid #0072BC" }
                  : { background: "none" }
              }
            >
              SUPPORT
            </span>
            {Support ? (
              <div className={styles.gridPanel}>
                <FAQ FaqData={SupportFaqDatas} />
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FAQNew;
