import React, { useState, useEffect } from "react";
import styles from "./Form.module.css";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { useRouter } from "next/router";
import jsCookie from "js-cookie";

const Form = ({
  popup,
  setTrigger,
  downloadBrochure,
  radio,
  event,
  google,
  referral,
  upSkillingHide,
  dataScience,
}) => {
  const router = useRouter();
  const [disable, setDisable] = useState(false);
  const [alertMSG, setAlertMSG] = useState("");
  const [toggle, setToggle] = useState(true);
  const [value, setValue] = useState();
  const [error, setError] = useState();
  const [query, setQuery] = useState({
    name: "",
    email: "",
    phone: "",
    upskillPlanning: "",
    upskillingObjective: "",
    WAdropdown: "",
    referralCode: "",
    url: router.asPath,
  });

  useEffect(() => {
    setQuery({ ...query, phone: value });

    jsCookie.set("CARD", query.email, { expires: 14, secure: true });
  }, [value]);

  // Update inputs value
  const handleParam = () => (e) => {
    // setError(false);
    const name = e.target.name;
    const value = e.target.value;
    setQuery((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // -====================  Organic - S END POINT ==========================--------
  let endPoint = "https://getform.io/f/85e92281-63f9-4d2f-b946-31d1098532f4";
  // -====================  Organic - S END POINT ==========================--------

  if (
    router.pathname === "/fssd" ||
    router.pathname === "/fswd" ||
    router.pathname === "/dsa" ||
    router.pathname === "/data-science-certification-courses" ||
    router.pathname === "/datascience/data-science-certification-courses" ||
    router.pathname === "/common-generic" ||
    router.pathname === "/s2-masters-degree" ||
    router.pathname === "/" ||
    router.pathname === "/advance-ai-ml-certification" ||
    router.pathname === "/datascience/advance-ai-ml-certification" ||
    router.pathname === "/data-analytics-certification-course" ||
    router.pathname === "/datascience/data-analytics-certification-course" ||
    router.pathname === "/business-analytics-certification-course" ||
    router.pathname ===
      "/datascience/business-analytics-certification-course" ||
    router.pathname === "/data-science-ai-cert-for-managers-leaders" ||
    router.pathname ===
      "/datascience/data-science-ai-cert-for-managers-leaders" ||
    router.pathname === "/job-guarantee-or-money-back-data-science-ai" ||
    router.pathname === "/data-science-ai-masters-program" ||
    router.pathname === "/datascience/data-science-ai-masters-program"
  ) {
    // -====================  Organic - S END POINT ==========================--------
    endPoint = "https://getform.io/f/85e92281-63f9-4d2f-b946-31d1098532f4";
    // -====================  Organic - S END POINT ==========================--------
  }

  // -==================== Google - S2 END POINT ==========================--------
  if (
    router.pathname === "/job-guarantee-or-money-back-data-science-ai-s2" ||
    router.pathname === "/s2-business-analytics" ||
    router.pathname === "/s2-business-analytics-advance" ||
    router.pathname === "/s2-business-analytics-master" ||
    router.pathname === "/s2-business-analytics-placement" ||
    router.pathname === "/s2-business-analytics-training" ||
    router.pathname === "/s2-data-science-advance" ||
    router.pathname === "/s2-data-science-master" ||
    router.pathname === "/s2-data-science-training" ||
    router.pathname === "/s2-data-science-institute" ||
    router.pathname === "/s2-data-science-placement" ||
    router.pathname === "/s2-data-science-certification" ||
    router.pathname === "/s2-machine-learning-advance" ||
    router.pathname === "/s2-machine-learning-master" ||
    router.pathname === "/s2-machine-learning-placement" ||
    router.pathname === "/s2-machine-learning-certificate" ||
    router.pathname === "/s2-machine-learning-training" ||
    router.pathname === "/s2-data-analytics-advance" ||
    router.pathname === "/s2-data-analytics-master" ||
    router.pathname === "/s2-data-analytics-training" ||
    router.pathname === "/s2-data-analytics-institute" ||
    router.pathname === "/s2-data-analytics-placement" ||
    router.pathname === "/s2-artificial-intelligence-advance" ||
    router.pathname === "/s2-artificial-intelligence-master" ||
    router.pathname === "/s2-artificial-intelligence-training" ||
    router.pathname === "/s2-artificial-intelligence-placement" ||
    router.pathname === "/s2-artificial-intelligence-certification" ||
    router.pathname === "/s2-data-science" ||
    router.pathname === "/s2-data-science-generic" ||
    router.pathname === "/s2-data-science-advance-generic" ||
    router.pathname === "/s2-master-program" ||
    router.pathname === "/s2-managers-leaders-program" ||
    router.pathname === "/s2-data-science-institute-generic" ||
    router.pathname === "/s2-data-science-training-generic" ||
    router.pathname === "/s2-data-science-syllabus-generic" ||
    router.pathname === "/s2-artificial-intelligence-generic" ||
    router.pathname === "/s2-artificial-intelligence-syllabus-generic" ||
    router.pathname === "/s2-artificial-intelligence-training-generic" ||
    router.pathname === "/s2-business-analytics-generic" ||
    router.pathname === "/s2-business-analytics-syllabus-generic" ||
    router.pathname === "/s2-business-analytics-training-generic" ||
    router.pathname === "/s2-data-analytics-generic" ||
    router.pathname === "/s2-data-analytics-institute-generic" ||
    router.pathname === "/s2-data-analytics-syllabus-generic" ||
    router.pathname === "/s2-data-analytics-training-generic" ||
    router.pathname === "/s2-machine-learning-generic" ||
    router.pathname === "/s2-machine-learning-syllabus-generic" ||
    router.pathname === "/s2-machine-learning-training-generic" ||
    router.pathname === "/s3-data-science" ||
    router.pathname === "/s4-data-science" ||
    router.pathname === "/s2-data-science-banking" ||
    router.pathname === "/s2-data-science-hr" ||
    router.pathname === "/s2-data-science-sales" ||
    router.pathname === "/s2-data-science-marketing" ||
    router.pathname === "/s2-machine-learning" ||
    router.pathname === "/s2-artificial-intelligence" ||
    router.pathname === "/s2-data-analytics" ||
    router.pathname === "/s2-job-guarantee" ||
    router.pathname === "/s2-masters-program" ||
    router.pathname === "/apply-for-counselling-s2" ||
    router.pathname === "/apply-for-counselling-data-science" ||
    router.pathname === "/datascience/apply-for-counselling-data-science" ||
    router.pathname === "/datascience/s2-apply-for-counselling-data-science" ||
    router.pathname === "/apply-for-counselling" ||
    router.pathname === "/s2-data-science-mis" ||
    router.pathname === "/software-development-s2" ||
    //  BANGALORE

    router.pathname === "/bangalore/s2-data-science" ||
    router.pathname === "/bangalore/s2-data-science-generic" ||
    router.pathname === "/bangalore/s2-artificial-intelligence-generic" ||
    router.pathname === "/bangalore/s2-machine-learning-generic" ||
    router.pathname === "/bangalore/s2-business-analytics-generic" ||
    router.pathname === "/bangalore/s2-data-analytics-generic" ||
    router.pathname === "/bangalore/s2-machine-learning" ||
    router.pathname === "/bangalore/s2-artificial-intelligence" ||
    router.pathname === "/bangalore/s2-data-analytics" ||
    router.pathname === "/bangalore/s2-business-analytics" ||
    router.pathname === "/bangalore/s2-job-guarantee" ||
    router.pathname === "/bangalore/s2-masters-program" ||
    router.pathname === "/bangalore/s2-artificial-intelligence-institute" ||
    router.pathname === "/bangalore/s2-business-analytics-training" ||
    router.pathname === "/bangalore/s2-data-analytics-training" ||
    router.pathname === "/bangalore/s2-data-analytics-certification" ||
    router.pathname === "/bangalore/s2-data-science-training" ||
    router.pathname === "/bangalore/s2-machine-learning-training" ||
    router.pathname ===
      "/bangalore/s2-artificial-intelligence-institute-generic" ||
    router.pathname === "/bangalore/s2-business-analytics-training-generic" ||
    router.pathname === "/bangalore/s2-data-analytics-certification-generic" ||
    router.pathname === "/bangalore/s2-data-analytics-training-generic" ||
    router.pathname === "/bangalore/s2-data-science-training-generic" ||
    router.pathname === "/bangalore/s2-machine-learning-training-generic" ||
    //  chennai

    router.pathname === "/chennai/s2-data-science" ||
    router.pathname === "/chennai/s2-machine-learning" ||
    router.pathname === "/chennai/s2-artificial-intelligence" ||
    router.pathname === "/chennai/s2-data-analytics" ||
    router.pathname === "/chennai/s2-business-analytics" ||
    router.pathname === "/chennai/s2-job-guarantee" ||
    router.pathname === "/chennai/s2-masters-program" ||
    router.pathname === "/chennai/s2-business-analytics-training" ||
    router.pathname === "/chennai/s2-data-analytics-training" ||
    router.pathname === "/chennai/s2-machine-learning-training" ||
    router.pathname === "/chennai/s2-data-science-generic" ||
    router.pathname === "/chennai/s2-artificial-intelligence-generic" ||
    router.pathname === "/chennai/s2-machine-learning-generic" ||
    router.pathname === "/chennai/s2-business-analytics-generic" ||
    router.pathname === "/chennai/s2-data-analytics-generic" ||
    router.pathname === "/chennai/s2-business-analytics-training-generic" ||
    router.pathname === "/chennai/s2-data-analytics-training-generic" ||
    router.pathname === "/chennai/s2-machine-learning-training-generic" ||
    //  delhi

    router.pathname === "/delhi/s2-data-science" ||
    router.pathname === "/delhi/s2-machine-learning" ||
    router.pathname === "/delhi/s2-artificial-intelligence" ||
    router.pathname === "/delhi/s2-data-analytics" ||
    router.pathname === "/delhi/s2-business-analytics" ||
    router.pathname === "/delhi/s2-job-guarantee" ||
    router.pathname === "/delhi/s2-masters-program" ||
    router.pathname === "/delhi/s2-data-science-generic" ||
    router.pathname === "/delhi/s2-artificial-intelligence-generic" ||
    router.pathname === "/delhi/s2-machine-learning-generic" ||
    router.pathname === "/delhi/s2-business-analytics-generic" ||
    router.pathname === "/delhi/s2-data-analytics-generic" ||
    //  hyderabad

    router.pathname === "/hyderabad/s2-data-science" ||
    router.pathname === "/hyderabad/s2-machine-learning" ||
    router.pathname === "/hyderabad/s2-artificial-intelligence" ||
    router.pathname === "/hyderabad/s2-data-analytics" ||
    router.pathname === "/hyderabad/s2-business-analytics" ||
    router.pathname === "/hyderabad/s2-job-guarantee" ||
    router.pathname === "/hyderabad/s2-masters-program" ||
    router.pathname === "/hyderabad/s2-artificial-intelligence-training" ||
    router.pathname === "/hyderabad/s2-business-analytics-training" ||
    router.pathname === "/hyderabad/s2-data-science-training" ||
    router.pathname === "/hyderabad/s2-machine-learning-training" ||
    router.pathname === "/hyderabad/s2-data-science-generic" ||
    router.pathname === "/hyderabad/s2-artificial-intelligence-generic" ||
    router.pathname === "/hyderabad/s2-machine-learning-generic" ||
    router.pathname === "/hyderabad/s2-business-analytics-generic" ||
    router.pathname === "/hyderabad/s2-data-analytics-generic" ||
    router.pathname ===
      "/hyderabad/s2-artificial-intelligence-training-generic" ||
    router.pathname === "/hyderabad/s2-business-analytics-training-generic" ||
    router.pathname === "/hyderabad/s2-data-science-training-generic" ||
    router.pathname === "/hyderabad/s2-machine-learning-training-generic" ||
    //  mumbai

    router.pathname === "/mumbai/s2-data-science" ||
    router.pathname === "/mumbai/s2-machine-learning" ||
    router.pathname === "/mumbai/s2-artificial-intelligence" ||
    router.pathname === "/mumbai/s2-data-analytics" ||
    router.pathname === "/mumbai/s2-business-analytics" ||
    router.pathname === "/mumbai/s2-job-guarantee" ||
    router.pathname === "/mumbai/s2-masters-program" ||
    router.pathname === "/mumbai/s2-data-science-generic" ||
    router.pathname === "/mumbai/s2-artificial-intelligence-generic" ||
    router.pathname === "/mumbai/s2-machine-learning-generic" ||
    router.pathname === "/mumbai/s2-business-analytics-generic" ||
    router.pathname === "/mumbai/s2-data-analytics-generic" ||
    //  pune

    router.pathname === "/pune/s2-data-science-generic" ||
    router.pathname === "/pune/s2-artificial-intelligence-generic" ||
    router.pathname === "/pune/s2-machine-learning-generic" ||
    router.pathname === "/pune/s2-business-analytics-generic" ||
    router.pathname === "/pune/s2-data-analytics-generic" ||
    router.pathname === "/pune/s2-data-science" ||
    router.pathname === "/pune/s2-machine-learning" ||
    router.pathname === "/pune/s2-artificial-intelligence" ||
    router.pathname === "/pune/s2-job-guarantee" ||
    router.pathname === "/pune/s2-masters-program" ||
    router.pathname === "/pune/s2-business-analytics" ||
    router.pathname === "/pune/s2-artificial-intelligence-training" ||
    router.pathname === "/pune/s2-business-analytics-training" ||
    router.pathname === "/pune/s2-data-analytics-institute" ||
    router.pathname === "/pune/s2-data-analytics-training" ||
    router.pathname === "/pune/s2-data-science-institute" ||
    router.pathname === "/pune/s2-data-science-training" ||
    router.pathname === "/pune/s2-machine-learning-training" ||
    router.pathname === "/pune/s2-artificial-intelligence-training-generic" ||
    router.pathname === "/pune/s2-business-analytics-training-generic" ||
    router.pathname === "/pune/s2-data-analytics-institute-generic" ||
    router.pathname === "/pune/s2-data-analytics-training-generic" ||
    router.pathname === "/pune/s2-data-science-training-generic" ||
    router.pathname === "/pune/s2-data-science-institute-generic" ||
    router.pathname === "/pune/s2-machine-learning-training-generic" ||
    router.pathname === "/generic" ||
    router.pathname === "/datascience/s6-data-science-generic" ||
    router.pathname === "/s6-data-science-generic" ||
    router.pathname === "/pune/s2-data-analytics"
  ) {
    // -==================== Google - S2 END POINT ==========================--------
    endPoint = "https://getform.io/f/c803e186-7053-4f33-9f49-909cc11e32bc";
    // -==================== Google - S2 END POINT ==========================--------
  }

  // -==================== Facebook - S3 END POINT ==========================--------

  if (
    router.pathname === "/data-science-certification-courses-s3" ||
    router.pathname === "/advance-ai-ml-certification-s3" ||
    router.pathname === "/data-science-ai-cert-for-managers-leaders-s3" ||
    router.pathname === "/job-guarantee-or-money-back-data-science-ai-s3"
  ) {
    // -==================== Facebook - S3 END POINT ==========================--------
    endPoint = "https://getform.io/f/a876146f-2c5d-4a1f-b177-f993db3d7aaf";

    // -==================== Facebook - S3 END POINT ==========================--------
  }

  // -==================== Quora - S4 END POINT ==========================--------

  if (
    router.pathname === "/data-science-certification-courses-s4" ||
    router.pathname === "/advance-ai-ml-certification-s4" ||
    router.pathname === "/data-science-ai-cert-for-managers-leaders-s4" ||
    router.pathname === "/apply-for-counselling-s4" ||
    router.pathname === "/google" ||
    router.pathname === "/job-guarantee-or-money-back-data-science-ai-s4"
  ) {
    // -==================== Quora - S4 END POINT ==========================--------
    endPoint = "https://getform.io/f/1cfd5db8-ec05-4d26-b05f-6b73a81ebf89";
    // -==================== Quora - S4 END POINT ==========================--------
  }

  if (router.pathname === "/marketing") {
    // -==================== Quora - S4 END POINT ==========================--------
    endPoint = "https://getform.io/f/fd9da107-864c-4617-a52a-7e112297efa6";
    // -==================== Quora - S4 END POINT ==========================--------
  }

  // -==================== Data Science Display Ads  END POINT ==========================--------
  if (
    router.pathname === "/data-science-certification-courses-sd" ||
    router.pathname === "/advance-ai-ml-certification-sd" ||
    router.pathname === "/data-science-ai-cert-for-managers-leaders-sd" ||
    router.pathname === "/job-guarantee-or-money-back-data-science-ai-sd" ||
    router.pathname === "/data-science-certification-courses-s2d" ||
    router.pathname === "/advance-ai-ml-certification-s2d" ||
    router.pathname === "/data-science-ai-cert-for-managers-leaders-s2d" ||
    router.pathname === "/job-guarantee-or-money-back-data-science-ai-s2d" ||
    router.pathname === "/data-science-certification-courses-s3d" ||
    router.pathname === "/advance-ai-ml-certification-s3d" ||
    router.pathname === "/data-science-ai-cert-for-managers-leaders-s3d" ||
    router.pathname === "/job-guarantee-or-money-back-data-science-ai-s3d" ||
    router.pathname === "/data-science-certification-courses-s4d" ||
    router.pathname === "/advance-ai-ml-certification-s4d" ||
    router.pathname === "/data-science-ai-cert-for-managers-leaders-s4d" ||
    router.pathname === "/job-guarantee-or-money-back-data-science-ai-s4d"
  ) {
    // -==================== Data Science Display Ads  END POINT ==========================--------
    endPoint = "https://getform.io/f/773095f3-b69e-4071-9ffb-b2d6c6261891";
    // -==================== Data Science Display Ads  END POINT ==========================--------
  }

  // -==================== Transactional - S5  END POINT ==========================--------

  if (
    router.pathname === "/data-science-certification-courses-s5" ||
    router.pathname === "/advance-ai-ml-certification-s5" ||
    router.pathname === "/data-science-ai-cert-for-managers-leaders-s5" ||
    router.pathname === "/data-science-certification-courses-s10" ||
    router.pathname === "/job-guarantee-or-money-back-data-science-ai-s5"
  ) {
    // -==================== Transactional - S5 END POINT ==========================--------
    endPoint = "https://getform.io/f/9c5b2164-1f56-4150-ad53-7944d6fe4363";
    // -==================== Transactional - S5 END POINT ==========================--------
  }

  // -====================  Returning Audience - S6 END POINT ==========================--------

  if (
    router.pathname === "/data-science-certification-courses-s6" ||
    router.pathname === "/advance-ai-ml-certification-s6" ||
    router.pathname === "/data-science-ai-cert-for-managers-leaders-s6" ||
    router.pathname === "/job-guarantee-or-money-back-data-science-ai-s6"
  ) {
    // -====================  Returning Audience - S6 END POINT ==========================--------
    endPoint = "https://getform.io/f/1c8cf486-31ef-4a7f-95b0-45c5f21e7b29";
    // -====================  Returning Audience - S6 END POINT ==========================--------
  }

  // -====================  LinkedIn - S7 END POINT ==========================--------

  if (
    router.pathname === "/data-science-certification-courses-s7" ||
    router.pathname === "/advance-ai-ml-certification-s7" ||
    router.pathname === "/data-science-ai-cert-for-managers-leaders-s7" ||
    router.pathname === "/job-guarantee-or-money-back-data-science-ai-s7"
  ) {
    // -====================  LinkedIn - S7 END POINT ==========================--------
    endPoint = "https://getform.io/f/a0a0fb5b-0cba-4b29-9d35-03c35d0e0d28";
    // -====================  LinkedIn - S7 END POINT ==========================--------
  }

  // -====================  Website Learnbay END POINT ==========================--------

  if (
    router.pathname === "/full-stack-software-development-program" ||
    router.pathname === "/full-stack-web-development-program" ||
    router.pathname === "/fullstack/dsa" ||
    router.pathname === "/fullstack/fssd"
  ) {
    // -====================  Website Learnbay END POINT ==========================--------
    endPoint = "https://getform.io/f/85e92281-63f9-4d2f-b946-31d1098532f4";
    // -====================  Website Learnbay END POINT ==========================--------
  }

  // -==================== FSD - Ads  END POINT ==========================--------
  if (
    router.pathname === "/fssd-s2" ||
    router.pathname === "/fullstack/fssd-s2" ||
    router.pathname === "/fullstack/fssd-institute-program-s2" ||
    router.pathname === "/fullstack/fssd-training-s2" ||
    router.pathname === "/fullstack/software-development-course-s2" ||
    router.pathname === "/fullstack/software-programming-course-s2" ||
    router.pathname === "/fssd-s4" ||
    router.pathname === "/fssd-s5" ||
    router.pathname === "/dsa-s4" ||
    router.pathname === "/apply-for-counselling-fsd-s2" ||
    router.pathname === "/dsa-s5"
  ) {
    // -====================  FSD - Ads END POINT ==========================--------
    endPoint = "https://getform.io/f/785b3539-e7ce-497c-a975-0dc288c3286c";

    // -====================  FSD - Ads END POINT ==========================--------
  }

  // -==================== Offer Campaign END POINT ==========================--------
  if (
    router.pathname === "/job-guarantee-or-money-back-data-science-ai-s8" ||
    router.pathname === "/job-guarantee-or-money-back-data-science-ai-s9" ||
    router.pathname === "/apply-for-counselling-s3"
  ) {
    // -==================== Offer Campaign END POINT ==========================--------
    endPoint = "https://getform.io/f/fd68bf82-a911-435e-9719-7c134a89a731";
    // -==================== Offer Campaign END POINT ==========================--------
  }

  // -==================== Marketing ==========================--------
  if (
    router.pathname === "/apply-for-counselling-marketing" ||
    router.pathname === "/datascience/apply-for-counselling-marketing" ||
    router.pathname === "/her-career-her-rules" ||
    router.pathname === "apply-for-counselling-data-science-marketing" ||
    router.pathname ===
      "/datascience/apply-for-counselling-data-science-marketing" ||
    router.pathname === "/step-up-with-learnbay"
  ) {
    // -==================== Marketing ==========================--------
    endPoint = "https://getform.io/f/fd9da107-864c-4617-a52a-7e112297efa6";
    // -==================== Marketing ==========================--------
  }

  // -==================== Email Marketing ==========================--------
  if (router.pathname === "/apply-for-counselling-email-marketing") {
    // -==================== Marketing ==========================--------
    endPoint = "https://getform.io/f/94c74039-f505-4ebf-922e-b4728bd793e3";
    // -==================== Email Marketing ==========================--------
  }

  // -====================  Apply For Counselling Scholarship ==========================--------
  if (router.pathname === "/apply-for-counselling-scholarship") {
    // -====================  Returning Audience - S6 ==========================--------
    endPoint = "https://getform.io/f/69076866-e1f7-4cf3-a7d2-12603819a5a4";
    // -====================  Returning Audience - S6 ==========================--------
  }

  // -==================== Webinar = END POINT ==========================--------
  if (event) {
    // -==================== Webinar =  END POINT ==========================--------
    endPoint = "https://getform.io/f/df003555-86c7-4ae5-a7f8-98c21dd9ad92";
    // -==================== Webinar = END POINT ==========================--------
  }

  let btnTxt = "Apply for  Counseliing";
  if (event) {
    btnTxt = "Register Now";
  }

  // Form Submit function
  const formSubmit = (e) => {
    e.preventDefault();
    if (
      query.upskillingObjective === "Tell us about your upskilling objective?"
    ) {
      setError(true);
    } else if (
      query.upskillPlanning === "How soon are you planning to upskill?"
    ) {
      setError(true);
    } else if (query.upskillPlanning === "Select an option") {
      setError(true);
    } else if (query.upskillingObjective === "Select an option") {
      setError(true);
    } else if (query.upskillPlanning === "") {
      setError(true);
    } else if (query.upskillingObjective === "") {
      setError(true);
    } else {
      setError(false);
      console.log(query);
      const formData = new FormData();
      Object.entries(query).forEach(([key, value]) => {
        formData.append(key, value);
      });
      fetch(`${endPoint}`, {
        method: "POST",
        body: formData,
      }).then(
        () => setAlertMSG(""),
        setQuery({
          name: "",
          email: "",
          phone: "",
          upskillPlanning: "",
          upskillingObjective: "",
          WAdropdown: "",
          referralCode: "",
          url: router.asPath,
        })
      );
      if (popup) {
        const off = () => {
          setTrigger(false);
        };
        off();
      }

      setDisable(true);

      if (
        (router.pathname === "/data-science-certification-courses-sd" &&
          downloadBrochure) ||
        (router.pathname === "/advance-ai-ml-certification-sd" &&
          downloadBrochure) ||
        (router.pathname === "/data-science-ai-cert-for-managers-leaders-sd" &&
          downloadBrochure) ||
        (router.pathname ===
          "/job-guarantee-or-money-back-data-science-ai-sd" &&
          downloadBrochure) ||
        (router.pathname === "/data-science-certification-courses" &&
          downloadBrochure) ||
        (router.pathname ===
          "/datascience/data-science-certification-courses" &&
          downloadBrochure) ||
        (router.pathname === "/advance-ai-ml-certification" &&
          downloadBrochure) ||
        (router.pathname === "/datascience/advance-ai-ml-certification" &&
          downloadBrochure) ||
        (router.pathname === "/business-analytics-certification-course" &&
          downloadBrochure) ||
        (router.pathname ===
          "/datascience/business-analytics-certification-course" &&
          downloadBrochure) ||
        (router.pathname === "/data-analytics-certification-course" &&
          downloadBrochure) ||
        (router.pathname ===
          "/datascience/data-analytics-certification-course" &&
          downloadBrochure) ||
        (router.pathname === "/data-science-ai-cert-for-managers-leaders" &&
          downloadBrochure) ||
        (router.pathname ===
          "/datascience/data-science-ai-cert-for-managers-leaders" &&
          downloadBrochure) ||
        (router.pathname === "/job-guarantee-or-money-back-data-science-ai" &&
          downloadBrochure) ||
        (router.pathname === "/data-science-ai-masters-program" &&
          downloadBrochure) ||
        (router.pathname === "/datascience/data-science-ai-masters-program" &&
          downloadBrochure) ||
        (router.pathname === "/data-science-certification-courses-s2" &&
          downloadBrochure) ||
        (router.pathname === "/advance-ai-ml-certification-s2" &&
          downloadBrochure) ||
        (router.pathname === "/data-science-ai-cert-for-managers-leaders-s2" &&
          downloadBrochure) ||
        (router.pathname ===
          "/job-guarantee-or-money-back-data-science-ai-s2" &&
          downloadBrochure) ||
        (router.pathname === "/data-science-certification-courses-s2d" &&
          downloadBrochure) ||
        (router.pathname === "/advance-ai-ml-certification-s2d" &&
          downloadBrochure) ||
        (router.pathname === "/data-science-ai-cert-for-managers-leaders-s2d" &&
          downloadBrochure) ||
        (router.pathname ===
          "/job-guarantee-or-money-back-data-science-ai-s2d" &&
          downloadBrochure) ||
        (router.pathname === "/data-science-certification-courses-s3" &&
          downloadBrochure) ||
        (router.pathname === "/advance-ai-ml-certification-s3" &&
          downloadBrochure) ||
        (router.pathname === "/data-science-ai-cert-for-managers-leaders-s3" &&
          downloadBrochure) ||
        (router.pathname ===
          "/job-guarantee-or-money-back-data-science-ai-s3" &&
          downloadBrochure) ||
        (router.pathname === "/data-science-certification-courses-s3d" &&
          downloadBrochure) ||
        (router.pathname === "/advance-ai-ml-certification-s3d" &&
          downloadBrochure) ||
        (router.pathname === "/data-science-ai-cert-for-managers-leaders-s3d" &&
          downloadBrochure) ||
        (router.pathname ===
          "/job-guarantee-or-money-back-data-science-ai-s3d" &&
          downloadBrochure) ||
        (router.pathname === "/data-science-certification-courses-s4" &&
          downloadBrochure) ||
        (router.pathname === "/advance-ai-ml-certification-s4" &&
          downloadBrochure) ||
        (router.pathname === "/data-science-ai-cert-for-managers-leaders-s4" &&
          downloadBrochure) ||
        (router.pathname ===
          "/job-guarantee-or-money-back-data-science-ai-s4" &&
          downloadBrochure) ||
        (router.pathname === "/data-science-certification-courses-s4d" &&
          downloadBrochure) ||
        (router.pathname === "/advance-ai-ml-certification-s4d" &&
          downloadBrochure) ||
        (router.pathname === "/data-science-ai-cert-for-managers-leaders-s4d" &&
          downloadBrochure) ||
        (router.pathname ===
          "/job-guarantee-or-money-back-data-science-ai-s4d" &&
          downloadBrochure) ||
        (router.pathname === "/data-science-certification-courses-s5" &&
          downloadBrochure) ||
        router.pathname === "/advance-ai-ml-certification-s5" ||
        (router.pathname === "/data-science-ai-cert-for-managers-leaders-s5" &&
          downloadBrochure) ||
        (router.pathname ===
          "/job-guarantee-or-money-back-data-science-ai-s5" &&
          downloadBrochure) ||
        (router.pathname === "/data-science-certification-courses-s6" &&
          downloadBrochure) ||
        router.pathname === "/advance-ai-ml-certification-s6" ||
        (router.pathname === "/data-science-ai-cert-for-managers-leaders-s6" &&
          downloadBrochure) ||
        (router.pathname ===
          "/job-guarantee-or-money-back-data-science-ai-s6" &&
          downloadBrochure) ||
        (router.pathname === "/data-science-certification-courses-s7" &&
          downloadBrochure) ||
        (router.pathname === "/advance-ai-ml-certification-s7" &&
          downloadBrochure) ||
        (router.pathname === "/data-science-ai-cert-for-managers-leaders-s7" &&
          downloadBrochure) ||
        (router.pathname ===
          "/job-guarantee-or-money-back-data-science-ai-s7" &&
          downloadBrochure) ||
        (router.pathname ===
          "/job-guarantee-or-money-back-data-science-ai-s8" &&
          downloadBrochure) ||
        (router.pathname ===
          "/job-guarantee-or-money-back-data-science-ai-s9" &&
          downloadBrochure) ||
        (router.pathname === "/data-science-certification-courses-s10" &&
          downloadBrochure) ||
        (router.pathname === "/data-science-certification-courses" &&
          downloadBrochure) ||
        (router.pathname === "/data-science-ai-cert-for-managers-leaders" &&
          downloadBrochure) ||
        (router.pathname ===
          "/datascience/data-science-ai-cert-for-managers-leaders" &&
          downloadBrochure) ||
        (router.pathname === "/job-guarantee-or-money-back-data-science-ai" &&
          downloadBrochure) ||
        (router.pathname === "/data-science-ai-masters-program" &&
          downloadBrochure) ||
        (router.pathname === "/datascience/data-science-ai-masters-program" &&
          downloadBrochure) ||
        (router.pathname === "/" && downloadBrochure) ||
        (router.pathname === "/common-generic" && downloadBrochure) ||
        (router.pathname === "/s2-masters-degree" && downloadBrochure) ||
        (router.pathname === "/s2-data-science" && downloadBrochure) ||
        (router.pathname === "/s2-data-science-generic" && downloadBrochure) ||
        (router.pathname === "/s2-data-science-advance-generic" &&
          downloadBrochure) ||
        (router.pathname === "/s2-managers-leaders-program" &&
          downloadBrochure) ||
        (router.pathname === "/s2-master-program" && downloadBrochure) ||
        (router.pathname === "/s2-data-science-institute-generic" &&
          downloadBrochure) ||
        (router.pathname === "/s2-data-science-training-generic" &&
          downloadBrochure) ||
        (router.pathname === "/s2-data-science-syllabus-generic" &&
          downloadBrochure) ||
        (router.pathname === "/s2-artificial-intelligence-generic" &&
          downloadBrochure) ||
        (router.pathname === "/s2-artificial-intelligence-syllabus-generic" &&
          downloadBrochure) ||
        (router.pathname === "/s2-artificial-intelligence-training-generic" &&
          downloadBrochure) ||
        (router.pathname === "/s2-business-analytics-generic" &&
          downloadBrochure) ||
        (router.pathname === "/s2-business-analytics-syllabus-generic" &&
          downloadBrochure) ||
        (router.pathname === "/s2-business-analytics-training-generic" &&
          downloadBrochure) ||
        (router.pathname === "/s2-data-analytics-generic" &&
          downloadBrochure) ||
        (router.pathname === "/s2-data-analytics-institute-generic" &&
          downloadBrochure) ||
        (router.pathname === "/s2-data-analytics-syllabus-generic" &&
          downloadBrochure) ||
        (router.pathname === "/s2-data-analytics-training-generic" &&
          downloadBrochure) ||
        (router.pathname === "/s2-machine-learning-generic" &&
          downloadBrochure) ||
        (router.pathname === "/s2-machine-learning-syllabus-generic" &&
          downloadBrochure) ||
        (router.pathname === "/s2-machine-learning-training-generic" &&
          downloadBrochure) ||
        (router.pathname === "/s3-data-science" && downloadBrochure) ||
        (router.pathname === "/s6-data-science-generic" && downloadBrochure) ||
        (router.pathname === "/datascience/s6-data-science-generic" &&
          downloadBrochure) ||
        (router.pathname === "/s2-machine-learning" && downloadBrochure) ||
        (router.pathname === "/s2-job-guarantee" && downloadBrochure) ||
        (router.pathname === "/s2-data-analytics" && downloadBrochure) ||
        (router.pathname === "/s2-artificial-intelligence" &&
          downloadBrochure) ||
        (router.pathname === "/s2-data-science-mis" && downloadBrochure) ||
        (router.pathname === "/apply-for-counselling-data-science" &&
          downloadBrochure) ||
        (router.pathname ===
          "/datascience/s2-apply-for-counselling-data-science" &&
          downloadBrochure)
      ) {
        router.push("/Thank-you");

        return;
      }

      if (event) {
        router.push("/fullstack/Thank-you-webinar");
      }

      if (
        (router.pathname === "/her-career-her-rules" && downloadBrochure) ||
        router.pathname === "/her-career-her-rules" ||
        router.pathname === "/apply-for-counselling-marketing" ||
        router.pathname === "/datascience/apply-for-counselling-marketing"
      ) {
        router.push("/Thank-you-marketing");

        return;
      }

      if (
        (router.pathname === "/fssd" && downloadBrochure) ||
        (router.pathname === "/fswd" && downloadBrochure) ||
        (router.pathname === "/dsa" && downloadBrochure) ||
        (router.pathname === "/fssd-s2" && downloadBrochure) ||
        (router.pathname === "/generic" && downloadBrochure) ||
        (router.pathname === "/fullstack/fssd-s2" && downloadBrochure) ||
        (router.pathname === "/software-development-s2" && downloadBrochure) ||
        (router.pathname === "/fullstack/fssd-institute-program-s2" &&
          downloadBrochure) ||
        (router.pathname === "/fullstack/fssd-training-s2" &&
          downloadBrochure) ||
        (router.pathname === "/fullstack/software-development-course-s2" &&
          downloadBrochure) ||
        (router.pathname === "/fullstack/software-programming-course-s2" &&
          downloadBrochure) ||
        (router.pathname === "/fssd-s4" && downloadBrochure) ||
        (router.pathname === "/fssd-s5" && downloadBrochure) ||
        (router.pathname === "/dsa-s4" && downloadBrochure) ||
        (router.pathname === "/dsa-s5" && downloadBrochure) ||
        (router.pathname === "/full-stack-software-development-program" &&
          downloadBrochure) ||
        (router.pathname === "/apply-for-counselling" && downloadBrochure) ||
        (router.pathname === "/full-stack-web-development-program" &&
          downloadBrochure) ||
        (router.pathname === "/fullstack/fssd" && downloadBrochure) ||
        (router.pathname === "/fullstack/dsa" && downloadBrochure)
      ) {
        router.push("/Thank-you");

        return;
      }

      if (
        router.pathname === "/data-science-certification-courses-sd" ||
        router.pathname === "/advance-ai-ml-certification-sd" ||
        router.pathname === "/data-science-ai-cert-for-managers-leaders-sd" ||
        router.pathname === "/job-guarantee-or-money-back-data-science-ai-sd" ||
        router.pathname === "/data-science-certification-courses" ||
        router.pathname === "/datascience/data-science-certification-courses" ||
        router.pathname === "/advance-ai-ml-certification" ||
        router.pathname === "/datascience/advance-ai-ml-certification" ||
        router.pathname === "/business-analytics-certification-course" ||
        router.pathname ===
          "/datascience/business-analytics-certification-course" ||
        router.pathname === "/data-analytics-certification-course" ||
        router.pathname ===
          "/datascience/data-analytics-certification-course" ||
        router.pathname === "/data-science-ai-cert-for-managers-leaders" ||
        router.pathname ===
          "/datascience/data-science-ai-cert-for-managers-leaders" ||
        router.pathname === "/job-guarantee-or-money-back-data-science-ai" ||
        router.pathname === "/data-science-ai-masters-program" ||
        router.pathname === "/datascience/data-science-ai-masters-program" ||
        router.pathname === "/data-science-certification-courses-s2" ||
        router.pathname === "/advance-ai-ml-certification-s2" ||
        router.pathname === "/data-science-ai-cert-for-managers-leaders-s2" ||
        router.pathname === "/job-guarantee-or-money-back-data-science-ai-s2" ||
        router.pathname === "/data-science-certification-courses-s2d" ||
        router.pathname === "/advance-ai-ml-certification-s2d" ||
        router.pathname === "/data-science-ai-cert-for-managers-leaders-s2d" ||
        router.pathname ===
          "/job-guarantee-or-money-back-data-science-ai-s2d" ||
        router.pathname === "/data-science-certification-courses-s3" ||
        router.pathname === "/advance-ai-ml-certification-s3" ||
        router.pathname === "/data-science-ai-cert-for-managers-leaders-s3" ||
        router.pathname === "/job-guarantee-or-money-back-data-science-ai-s3" ||
        router.pathname === "/data-science-certification-courses-s3d" ||
        router.pathname === "/advance-ai-ml-certification-s3d" ||
        router.pathname === "/data-science-ai-cert-for-managers-leaders-s3d" ||
        router.pathname ===
          "/job-guarantee-or-money-back-data-science-ai-s3d" ||
        router.pathname === "/data-science-certification-courses-s4" ||
        router.pathname === "/advance-ai-ml-certification-s4" ||
        router.pathname === "/data-science-ai-cert-for-managers-leaders-s4" ||
        router.pathname === "/job-guarantee-or-money-back-data-science-ai-s4" ||
        router.pathname === "/data-science-certification-courses-s4d" ||
        router.pathname === "/advance-ai-ml-certification-s4d" ||
        router.pathname === "/data-science-ai-cert-for-managers-leaders-s4d" ||
        router.pathname ===
          "/job-guarantee-or-money-back-data-science-ai-s4d" ||
        router.pathname === "/data-science-certification-courses-s5" ||
        router.pathname === "/advance-ai-ml-certification-s5" ||
        router.pathname === "/data-science-ai-cert-for-managers-leaders-s5" ||
        router.pathname === "/job-guarantee-or-money-back-data-science-ai-s5" ||
        router.pathname === "/data-science-certification-courses-s6" ||
        router.pathname === "/advance-ai-ml-certification-s6" ||
        router.pathname === "/data-science-ai-cert-for-managers-leaders-s6" ||
        router.pathname === "/job-guarantee-or-money-back-data-science-ai-s6" ||
        router.pathname === "/data-science-certification-courses-s7" ||
        router.pathname === "/advance-ai-ml-certification-s7" ||
        router.pathname === "/data-science-ai-cert-for-managers-leaders-s7" ||
        router.pathname === "/job-guarantee-or-money-back-data-science-ai-s7" ||
        router.pathname === "/data-science-certification-courses-s10" ||
        router.pathname === "/data-science-certification-courses" ||
        router.pathname === "/data-science-ai-cert-for-managers-leaders" ||
        router.pathname ===
          "/datascience/data-science-ai-cert-for-managers-leaders" ||
        router.pathname === "/" ||
        router.pathname === "/common-generic" ||
        router.pathname === "/s2-masters-degree" ||
        router.pathname === "/job-guarantee-or-money-back-data-science-ai-s8" ||
        router.pathname === "/job-guarantee-or-money-back-data-science-ai-s9" ||
        router.pathname === "/s2-data-science" ||
        router.pathname === "/s2-data-science-generic" ||
        router.pathname === "/s2-data-science-advance-generic" ||
        router.pathname === "/s2-master-program" ||
        router.pathname === "/s2-managers-leaders-program" ||
        router.pathname === "/s2-data-science-institute-generic" ||
        router.pathname === "/s2-data-science-training-generic" ||
        router.pathname === "/s2-data-science-syllabus-generic" ||
        router.pathname === "/s2-artificial-intelligence-generic" ||
        router.pathname === "/s2-artificial-intelligence-syllabus-generic" ||
        router.pathname === "/s2-artificial-intelligence-training-generic" ||
        router.pathname === "/s2-business-analytics-generic" ||
        router.pathname === "/s2-business-analytics-syllabus-generic" ||
        router.pathname === "/s2-business-analytics-training-generic" ||
        router.pathname === "/s2-data-analytics-generic" ||
        router.pathname === "/s2-data-analytics-institute-generic" ||
        router.pathname === "/s2-data-analytics-syllabus-generic" ||
        router.pathname === "/s2-data-analytics-training-generic" ||
        router.pathname === "/s2-machine-learning-generic" ||
        router.pathname === "/s2-machine-learning-syllabus-generic" ||
        router.pathname === "/s2-machine-learning-training-generic" ||
        router.pathname === "/s3-data-science" ||
        router.pathname === "/s6-data-science-generic" ||
        router.pathname === "/datascience/s6-data-science-generic" ||
        router.pathname === "/s2-machine-learning" ||
        router.pathname === "/s2-job-guarantee" ||
        router.pathname === "/s2-data-analytics" ||
        router.pathname === "/apply-for-counselling" ||
        router.pathname === "/s2-artificial-intelligence" ||
        router.pathname === "/apply-for-counselling-s2" ||
        router.pathname === "/apply-for-counselling-s4" ||
        router.pathname === "/apply-for-counselling-data-science" ||
        router.pathname === "/datascience/apply-for-counselling-data-science" ||
        router.pathname ===
          "/datascience/s2-apply-for-counselling-data-science" ||
        router.pathname === "/apply-for-counselling-data-science-marketing" ||
        router.pathname ===
          "/datascience/apply-for-counselling-data-science-marketing" ||
        router.pathname === "/apply-for-counselling-s3" ||
        router.pathname === "/s2-data-science-mis" ||
        router.pathname === "/apply-for-counselling-email-marketing"
      ) {
        router.push("/Thank-you");

        return;
      }

      if (dataScience) {
        router.push("/Thank-you");
      }

      if (router.pathname === "/apply-for-counselling-scholarship") {
        router.push("/Thank-you-scholarship");
      }

      if (
        router.pathname === "/fssd" ||
        router.pathname === "/fswd" ||
        router.pathname === "/dsa" ||
        router.pathname === "/fssd-s2" ||
        router.pathname === "/generic" ||
        router.pathname === "/fullstack/fssd-s2" ||
        router.pathname === "/software-development-s2" ||
        router.pathname === "/fullstack/fssd-institute-program-s2" ||
        router.pathname === "/fullstack/fssd-training-s2" ||
        router.pathname === "/fullstack/software-development-course-s2" ||
        router.pathname === "/fullstack/software-programming-course-s2" ||
        router.pathname === "/fssd-s4" ||
        router.pathname === "/fssd-s5" ||
        router.pathname === "/dsa-s4" ||
        router.pathname === "/dsa-s5" ||
        router.pathname === "/full-stack-software-development-program" ||
        router.pathname === "/full-stack-web-development-program" ||
        router.pathname === "/apply-for-counselling-fsd-s2" ||
        router.pathname === "/fullstack/dsa" ||
        router.pathname === "/fullstack/fssd" ||
        router.pathname === "/s2-masters-program" ||
        router.pathname === "/s2-data-science-banking" ||
        router.pathname === "/s2-data-science-hr" ||
        router.pathname === "/s2-data-science-sales" ||
        router.pathname === "/s2-data-science-marketing" ||
        router.pathname === "/s2-business-analytics" ||
        router.pathname === "/s2-business-analytics-advance" ||
        router.pathname === "/s2-business-analytics-master" ||
        router.pathname === "/s2-business-analytics-placement" ||
        router.pathname === "/s2-business-analytics-training" ||
        router.pathname === "/s2-data-science-advance" ||
        router.pathname === "/s2-data-science-master" ||
        router.pathname === "/s2-data-science-training" ||
        router.pathname === "/s2-data-science-institute" ||
        router.pathname === "/s4-data-science" ||
        router.pathname === "/s6-data-science-generic" ||
        router.pathname === "/datascience/s6-data-science-generic" ||
        router.pathname === "/s2-data-science-placement" ||
        router.pathname === "/s2-data-science-certification" ||
        router.pathname === "/s2-machine-learning-advance" ||
        router.pathname === "/s2-machine-learning-master" ||
        router.pathname === "/s2-machine-learning-placement" ||
        router.pathname === "/s2-machine-learning-certificate" ||
        router.pathname === "/s2-machine-learning-training" ||
        router.pathname === "/s2-data-analytics-advance" ||
        router.pathname === "/s2-data-analytics-master" ||
        router.pathname === "/s2-data-analytics-training" ||
        router.pathname === "/s2-data-analytics-institute" ||
        router.pathname === "/s2-data-analytics-placement" ||
        router.pathname === "/s2-artificial-intelligence-advance" ||
        router.pathname === "/s2-artificial-intelligence-master" ||
        router.pathname === "/s2-artificial-intelligence-training" ||
        router.pathname === "/s2-artificial-intelligence-placement" ||
        router.pathname === "/s2-artificial-intelligence-certification" ||
        //  BANGALORE

        router.pathname === "/bangalore/s2-data-science" ||
        router.pathname === "/bangalore/s2-data-science-generic" ||
        router.pathname === "/bangalore/s2-artificial-intelligence-generic" ||
        router.pathname === "/bangalore/s2-machine-learning-generic" ||
        router.pathname === "/bangalore/s2-business-analytics-generic" ||
        router.pathname === "/bangalore/s2-data-analytics-generic" ||
        router.pathname === "/bangalore/s2-machine-learning" ||
        router.pathname === "/bangalore/s2-artificial-intelligence" ||
        router.pathname === "/bangalore/s2-data-analytics" ||
        router.pathname === "/bangalore/s2-business-analytics" ||
        router.pathname === "/bangalore/s2-job-guarantee" ||
        router.pathname === "/bangalore/s2-masters-program" ||
        router.pathname === "/bangalore/s2-artificial-intelligence-institute" ||
        router.pathname === "/bangalore/s2-business-analytics-training" ||
        router.pathname === "/bangalore/s2-data-analytics-training" ||
        router.pathname === "/bangalore/s2-data-analytics-certification" ||
        router.pathname === "/bangalore/s2-data-science-training" ||
        router.pathname === "/bangalore/s2-machine-learning-training" ||
        router.pathname ===
          "/bangalore/s2-artificial-intelligence-institute-generic" ||
        router.pathname ===
          "/bangalore/s2-business-analytics-training-generic" ||
        router.pathname ===
          "/bangalore/s2-data-analytics-certification-generic" ||
        router.pathname === "/bangalore/s2-data-analytics-training-generic" ||
        router.pathname === "/bangalore/s2-data-science-training-generic" ||
        router.pathname === "/bangalore/s2-machine-learning-training-generic" ||
        //  chennai

        router.pathname === "/chennai/s2-data-science" ||
        router.pathname === "/chennai/s2-machine-learning" ||
        router.pathname === "/chennai/s2-artificial-intelligence" ||
        router.pathname === "/chennai/s2-data-analytics" ||
        router.pathname === "/chennai/s2-business-analytics" ||
        router.pathname === "/chennai/s2-job-guarantee" ||
        router.pathname === "/chennai/s2-masters-program" ||
        router.pathname === "/chennai/s2-business-analytics-training" ||
        router.pathname === "/chennai/s2-data-analytics-training" ||
        router.pathname === "/chennai/s2-machine-learning-training" ||
        router.pathname === "/chennai/s2-data-science-generic" ||
        router.pathname === "/chennai/s2-artificial-intelligence-generic" ||
        router.pathname === "/chennai/s2-machine-learning-generic" ||
        router.pathname === "/chennai/s2-business-analytics-generic" ||
        router.pathname === "/chennai/s2-data-analytics-generic" ||
        router.pathname === "/chennai/s2-business-analytics-training-generic" ||
        router.pathname === "/chennai/s2-data-analytics-training-generic" ||
        router.pathname === "/chennai/s2-machine-learning-training-generic" ||
        //  delhi

        router.pathname === "/delhi/s2-data-science" ||
        router.pathname === "/delhi/s2-machine-learning" ||
        router.pathname === "/delhi/s2-artificial-intelligence" ||
        router.pathname === "/delhi/s2-data-analytics" ||
        router.pathname === "/delhi/s2-business-analytics" ||
        router.pathname === "/delhi/s2-job-guarantee" ||
        router.pathname === "/delhi/s2-masters-program" ||
        router.pathname === "/delhi/s2-data-science-generic" ||
        router.pathname === "/delhi/s2-artificial-intelligence-generic" ||
        router.pathname === "/delhi/s2-machine-learning-generic" ||
        router.pathname === "/delhi/s2-business-analytics-generic" ||
        router.pathname === "/delhi/s2-data-analytics-generic" ||
        //  hyderabad

        router.pathname === "/hyderabad/s2-data-science" ||
        router.pathname === "/hyderabad/s2-machine-learning" ||
        router.pathname === "/hyderabad/s2-artificial-intelligence" ||
        router.pathname === "/hyderabad/s2-data-analytics" ||
        router.pathname === "/hyderabad/s2-business-analytics" ||
        router.pathname === "/hyderabad/s2-job-guarantee" ||
        router.pathname === "/hyderabad/s2-masters-program" ||
        router.pathname === "/hyderabad/s2-artificial-intelligence-training" ||
        router.pathname === "/hyderabad/s2-business-analytics-training" ||
        router.pathname === "/hyderabad/s2-data-science-training" ||
        router.pathname === "/hyderabad/s2-machine-learning-training" ||
        router.pathname === "/hyderabad/s2-data-science-generic" ||
        router.pathname === "/hyderabad/s2-artificial-intelligence-generic" ||
        router.pathname === "/hyderabad/s2-machine-learning-generic" ||
        router.pathname === "/hyderabad/s2-business-analytics-generic" ||
        router.pathname === "/hyderabad/s2-data-analytics-generic" ||
        router.pathname ===
          "/hyderabad/s2-artificial-intelligence-training-generic" ||
        router.pathname ===
          "/hyderabad/s2-business-analytics-training-generic" ||
        router.pathname === "/hyderabad/s2-data-science-training-generic" ||
        router.pathname === "/hyderabad/s2-machine-learning-training-generic" ||
        //  mumbai

        router.pathname === "/mumbai/s2-data-science" ||
        router.pathname === "/mumbai/s2-machine-learning" ||
        router.pathname === "/mumbai/s2-artificial-intelligence" ||
        router.pathname === "/mumbai/s2-data-analytics" ||
        router.pathname === "/mumbai/s2-business-analytics" ||
        router.pathname === "/mumbai/s2-job-guarantee" ||
        router.pathname === "/mumbai/s2-masters-program" ||
        router.pathname === "/mumbai/s2-data-science-generic" ||
        router.pathname === "/mumbai/s2-artificial-intelligence-generic" ||
        router.pathname === "/mumbai/s2-machine-learning-generic" ||
        router.pathname === "/mumbai/s2-business-analytics-generic" ||
        router.pathname === "/mumbai/s2-data-analytics-generic" ||
        //  pune

        router.pathname === "/pune/s2-data-science" ||
        router.pathname === "/pune/s2-machine-learning" ||
        router.pathname === "/pune/s2-artificial-intelligence" ||
        router.pathname === "/pune/s2-job-guarantee" ||
        router.pathname === "/pune/s2-masters-program" ||
        router.pathname === "/pune/s2-business-analytics" ||
        router.pathname === "/pune/s2-artificial-intelligence-training" ||
        router.pathname === "/pune/s2-business-analytics-training" ||
        router.pathname === "/pune/s2-data-analytics-institute" ||
        router.pathname === "/pune/s2-data-analytics-training" ||
        router.pathname === "/pune/s2-data-science-institute" ||
        router.pathname === "/pune/s2-data-science-training" ||
        router.pathname === "/pune/s2-machine-learning-training" ||
        router.pathname === "/pune/s2-data-analytics" ||
        router.pathname === "/pune/s2-data-science-generic" ||
        router.pathname === "/pune/s2-artificial-intelligence-generic" ||
        router.pathname === "/pune/s2-machine-learning-generic" ||
        router.pathname === "/pune/s2-business-analytics-generic" ||
        router.pathname ===
          "/pune/s2-artificial-intelligence-training-generic" ||
        router.pathname === "/pune/s2-business-analytics-training-generic" ||
        router.pathname === "/pune/s2-data-analytics-institute-generic" ||
        router.pathname === "/pune/s2-data-analytics-training-generic" ||
        router.pathname === "/pune/s2-data-science-training-generic" ||
        router.pathname === "/pune/s2-data-science-institute-generic" ||
        router.pathname === "/pune/s2-machine-learning-training-generic" ||
        router.pathname === "/pune/s2-data-analytics-generic"
      ) {
        router.push("/Thank-you");

        return;
      }

      if (router.pathname === "/google" || router.pathname === "/marketing") {
        setToggle(false);
        setAlertMSG("Form Submitted successfully");
        setDisable(false);
        setValue("");
      }
    }
  };

  const formSubmitDownload = (e) => {
    e.preventDefault();
    console.log(query);
    const formData = new FormData();
    Object.entries(query).forEach(([key, value]) => {
      formData.append(key, value);
    });
    fetch(`${endPoint}`, {
      method: "POST",
      body: formData,
    }).then(
      () => setAlertMSG(""),
      setQuery({
        name: "",
        email: "",
        phone: "",
        upskillPlanning: "",
        upskillingObjective: "",
        WAdropdown: "",
        referralCode: "",
        url: router.asPath,
      })
    );
    if (popup) {
      const off = () => {
        setTrigger(false);
      };
      off();
    }

    setDisable(true);

    if (
      (router.pathname === "/data-science-certification-courses-sd" &&
        downloadBrochure) ||
      (router.pathname === "/advance-ai-ml-certification-sd" &&
        downloadBrochure) ||
      (router.pathname === "/data-science-ai-cert-for-managers-leaders-sd" &&
        downloadBrochure) ||
      (router.pathname === "/job-guarantee-or-money-back-data-science-ai-sd" &&
        downloadBrochure) ||
      (router.pathname === "/data-science-certification-courses" &&
        downloadBrochure) ||
      (router.pathname === "/datascience/data-science-certification-courses" &&
        downloadBrochure) ||
      (router.pathname === "/advance-ai-ml-certification" &&
        downloadBrochure) ||
      (router.pathname === "/datascience/advance-ai-ml-certification" &&
        downloadBrochure) ||
      (router.pathname === "/business-analytics-certification-course" &&
        downloadBrochure) ||
      (router.pathname ===
        "/datascience/business-analytics-certification-course" &&
        downloadBrochure) ||
      (router.pathname === "/data-analytics-certification-course" &&
        downloadBrochure) ||
      (router.pathname === "/datascience/data-analytics-certification-course" &&
        downloadBrochure) ||
      (router.pathname === "/data-science-ai-cert-for-managers-leaders" &&
        downloadBrochure) ||
      (router.pathname ===
        "/datascience/data-science-ai-cert-for-managers-leaders" &&
        downloadBrochure) ||
      (router.pathname === "/job-guarantee-or-money-back-data-science-ai" &&
        downloadBrochure) ||
      (router.pathname === "/data-science-ai-masters-program" &&
        downloadBrochure) ||
      (router.pathname === "/datascience/data-science-ai-masters-program" &&
        downloadBrochure) ||
      (router.pathname === "/data-science-certification-courses-s2" &&
        downloadBrochure) ||
      (router.pathname === "/advance-ai-ml-certification-s2" &&
        downloadBrochure) ||
      (router.pathname === "/data-science-ai-cert-for-managers-leaders-s2" &&
        downloadBrochure) ||
      (router.pathname === "/job-guarantee-or-money-back-data-science-ai-s2" &&
        downloadBrochure) ||
      (router.pathname === "/data-science-certification-courses-s2d" &&
        downloadBrochure) ||
      (router.pathname === "/advance-ai-ml-certification-s2d" &&
        downloadBrochure) ||
      (router.pathname === "/data-science-ai-cert-for-managers-leaders-s2d" &&
        downloadBrochure) ||
      (router.pathname === "/job-guarantee-or-money-back-data-science-ai-s2d" &&
        downloadBrochure) ||
      (router.pathname === "/data-science-certification-courses-s3" &&
        downloadBrochure) ||
      (router.pathname === "/advance-ai-ml-certification-s3" &&
        downloadBrochure) ||
      (router.pathname === "/data-science-ai-cert-for-managers-leaders-s3" &&
        downloadBrochure) ||
      (router.pathname === "/job-guarantee-or-money-back-data-science-ai-s3" &&
        downloadBrochure) ||
      (router.pathname === "/data-science-certification-courses-s3d" &&
        downloadBrochure) ||
      (router.pathname === "/advance-ai-ml-certification-s3d" &&
        downloadBrochure) ||
      (router.pathname === "/data-science-ai-cert-for-managers-leaders-s3d" &&
        downloadBrochure) ||
      (router.pathname === "/job-guarantee-or-money-back-data-science-ai-s3d" &&
        downloadBrochure) ||
      (router.pathname === "/data-science-certification-courses-s4" &&
        downloadBrochure) ||
      (router.pathname === "/advance-ai-ml-certification-s4" &&
        downloadBrochure) ||
      (router.pathname === "/data-science-ai-cert-for-managers-leaders-s4" &&
        downloadBrochure) ||
      (router.pathname === "/job-guarantee-or-money-back-data-science-ai-s4" &&
        downloadBrochure) ||
      (router.pathname === "/data-science-certification-courses-s4d" &&
        downloadBrochure) ||
      (router.pathname === "/advance-ai-ml-certification-s4d" &&
        downloadBrochure) ||
      (router.pathname === "/data-science-ai-cert-for-managers-leaders-s4d" &&
        downloadBrochure) ||
      (router.pathname === "/job-guarantee-or-money-back-data-science-ai-s4d" &&
        downloadBrochure) ||
      (router.pathname === "/data-science-certification-courses-s5" &&
        downloadBrochure) ||
      router.pathname === "/advance-ai-ml-certification-s5" ||
      (router.pathname === "/data-science-ai-cert-for-managers-leaders-s5" &&
        downloadBrochure) ||
      (router.pathname === "/job-guarantee-or-money-back-data-science-ai-s5" &&
        downloadBrochure) ||
      (router.pathname === "/data-science-certification-courses-s6" &&
        downloadBrochure) ||
      router.pathname === "/advance-ai-ml-certification-s6" ||
      (router.pathname === "/data-science-ai-cert-for-managers-leaders-s6" &&
        downloadBrochure) ||
      (router.pathname === "/job-guarantee-or-money-back-data-science-ai-s6" &&
        downloadBrochure) ||
      (router.pathname === "/data-science-certification-courses-s7" &&
        downloadBrochure) ||
      (router.pathname === "/advance-ai-ml-certification-s7" &&
        downloadBrochure) ||
      (router.pathname === "/data-science-ai-cert-for-managers-leaders-s7" &&
        downloadBrochure) ||
      (router.pathname === "/job-guarantee-or-money-back-data-science-ai-s7" &&
        downloadBrochure) ||
      (router.pathname === "/job-guarantee-or-money-back-data-science-ai-s8" &&
        downloadBrochure) ||
      (router.pathname === "/job-guarantee-or-money-back-data-science-ai-s9" &&
        downloadBrochure) ||
      (router.pathname === "/data-science-certification-courses-s10" &&
        downloadBrochure) ||
      (router.pathname === "/data-science-certification-courses" &&
        downloadBrochure) ||
      (router.pathname === "/data-science-ai-cert-for-managers-leaders" &&
        downloadBrochure) ||
      (router.pathname ===
        "/datascience/data-science-ai-cert-for-managers-leaders" &&
        downloadBrochure) ||
      (router.pathname === "/job-guarantee-or-money-back-data-science-ai" &&
        downloadBrochure) ||
      (router.pathname === "/data-science-ai-masters-program" &&
        downloadBrochure) ||
      (router.pathname === "/datascience/data-science-ai-masters-program" &&
        downloadBrochure) ||
      (router.pathname === "/" && downloadBrochure) ||
      (router.pathname === "/common-generic" && downloadBrochure) ||
      (router.pathname === "/s2-masters-degree" && downloadBrochure) ||
      (router.pathname === "/s2-data-science" && downloadBrochure) ||
      (router.pathname === "/s2-data-science-generic" && downloadBrochure) ||
      (router.pathname === "/s2-data-science-advance-generic" &&
        downloadBrochure) ||
      (router.pathname === "/s2-managers-leaders-program" &&
        downloadBrochure) ||
      (router.pathname === "/s2-master-program" && downloadBrochure) ||
      (router.pathname === "/s2-data-science-institute-generic" &&
        downloadBrochure) ||
      (router.pathname === "/s2-data-science-training-generic" &&
        downloadBrochure) ||
      (router.pathname === "/s2-data-science-syllabus-generic" &&
        downloadBrochure) ||
      (router.pathname === "/s2-artificial-intelligence-generic" &&
        downloadBrochure) ||
      (router.pathname === "/s2-artificial-intelligence-syllabus-generic" &&
        downloadBrochure) ||
      (router.pathname === "/s2-artificial-intelligence-training-generic" &&
        downloadBrochure) ||
      (router.pathname === "/s2-business-analytics-generic" &&
        downloadBrochure) ||
      (router.pathname === "/s2-business-analytics-syllabus-generic" &&
        downloadBrochure) ||
      (router.pathname === "/s2-business-analytics-training-generic" &&
        downloadBrochure) ||
      (router.pathname === "/s2-data-analytics-generic" && downloadBrochure) ||
      (router.pathname === "/s2-data-analytics-institute-generic" &&
        downloadBrochure) ||
      (router.pathname === "/s2-data-analytics-syllabus-generic" &&
        downloadBrochure) ||
      (router.pathname === "/s2-data-analytics-training-generic" &&
        downloadBrochure) ||
      (router.pathname === "/s2-machine-learning-generic" &&
        downloadBrochure) ||
      (router.pathname === "/s2-machine-learning-syllabus-generic" &&
        downloadBrochure) ||
      (router.pathname === "/s2-machine-learning-training-generic" &&
        downloadBrochure) ||
      (router.pathname === "/s3-data-science" && downloadBrochure) ||
      (router.pathname === "/s6-data-science-generic" && downloadBrochure) ||
      (router.pathname === "/datascience/s6-data-science-generic" &&
        downloadBrochure) ||
      (router.pathname === "/s2-machine-learning" && downloadBrochure) ||
      (router.pathname === "/s2-job-guarantee" && downloadBrochure) ||
      (router.pathname === "/s2-data-analytics" && downloadBrochure) ||
      (router.pathname === "/s2-artificial-intelligence" && downloadBrochure) ||
      (router.pathname === "/s2-data-science-mis" && downloadBrochure) ||
      (router.pathname === "/apply-for-counselling-data-science" &&
        downloadBrochure) ||
      (router.pathname ===
        "/datascience/s2-apply-for-counselling-data-science" &&
        downloadBrochure)
    ) {
      router.push("/Thank-you");

      return;
    }

    if (event) {
      router.push("/fullstack/Thank-you-webinar");
    }

    if (
      (router.pathname === "/her-career-her-rules" && downloadBrochure) ||
      router.pathname === "/her-career-her-rules" ||
      router.pathname === "/apply-for-counselling-marketing" ||
      router.pathname === "/datascience/apply-for-counselling-marketing"
    ) {
      router.push("/Thank-you-marketing");

      return;
    }

    if (
      (router.pathname === "/fssd" && downloadBrochure) ||
      (router.pathname === "/fswd" && downloadBrochure) ||
      (router.pathname === "/dsa" && downloadBrochure) ||
      (router.pathname === "/fssd-s2" && downloadBrochure) ||
      (router.pathname === "/generic" && downloadBrochure) ||
      (router.pathname === "/fullstack/fssd-s2" && downloadBrochure) ||
      (router.pathname === "/software-development-s2" && downloadBrochure) ||
      (router.pathname === "/fullstack/fssd-institute-program-s2" &&
        downloadBrochure) ||
      (router.pathname === "/fullstack/fssd-training-s2" && downloadBrochure) ||
      (router.pathname === "/fullstack/software-development-course-s2" &&
        downloadBrochure) ||
      (router.pathname === "/fullstack/software-programming-course-s2" &&
        downloadBrochure) ||
      (router.pathname === "/fssd-s4" && downloadBrochure) ||
      (router.pathname === "/fssd-s5" && downloadBrochure) ||
      (router.pathname === "/dsa-s4" && downloadBrochure) ||
      (router.pathname === "/dsa-s5" && downloadBrochure) ||
      (router.pathname === "/full-stack-software-development-program" &&
        downloadBrochure) ||
      (router.pathname === "/apply-for-counselling" && downloadBrochure) ||
      (router.pathname === "/full-stack-web-development-program" &&
        downloadBrochure) ||
      (router.pathname === "/fullstack/fssd" && downloadBrochure) ||
      (router.pathname === "/fullstack/dsa" && downloadBrochure)
    ) {
      router.push("/Thank-you");

      return;
    }

    if (
      router.pathname === "/data-science-certification-courses-sd" ||
      router.pathname === "/advance-ai-ml-certification-sd" ||
      router.pathname === "/data-science-ai-cert-for-managers-leaders-sd" ||
      router.pathname === "/job-guarantee-or-money-back-data-science-ai-sd" ||
      router.pathname === "/data-science-certification-courses" ||
      router.pathname === "/datascience/data-science-certification-courses" ||
      router.pathname === "/advance-ai-ml-certification" ||
      router.pathname === "/datascience/advance-ai-ml-certification" ||
      router.pathname === "/business-analytics-certification-course" ||
      router.pathname ===
        "/datascience/business-analytics-certification-course" ||
      router.pathname === "/data-analytics-certification-course" ||
      router.pathname === "/datascience/data-analytics-certification-course" ||
      router.pathname === "/data-science-ai-cert-for-managers-leaders" ||
      router.pathname ===
        "/datascience/data-science-ai-cert-for-managers-leaders" ||
      router.pathname === "/job-guarantee-or-money-back-data-science-ai" ||
      router.pathname === "/data-science-ai-masters-program" ||
      router.pathname === "/datascience/data-science-ai-masters-program" ||
      router.pathname === "/data-science-certification-courses-s2" ||
      router.pathname === "/advance-ai-ml-certification-s2" ||
      router.pathname === "/data-science-ai-cert-for-managers-leaders-s2" ||
      router.pathname === "/job-guarantee-or-money-back-data-science-ai-s2" ||
      router.pathname === "/data-science-certification-courses-s2d" ||
      router.pathname === "/advance-ai-ml-certification-s2d" ||
      router.pathname === "/data-science-ai-cert-for-managers-leaders-s2d" ||
      router.pathname === "/job-guarantee-or-money-back-data-science-ai-s2d" ||
      router.pathname === "/data-science-certification-courses-s3" ||
      router.pathname === "/advance-ai-ml-certification-s3" ||
      router.pathname === "/data-science-ai-cert-for-managers-leaders-s3" ||
      router.pathname === "/job-guarantee-or-money-back-data-science-ai-s3" ||
      router.pathname === "/data-science-certification-courses-s3d" ||
      router.pathname === "/advance-ai-ml-certification-s3d" ||
      router.pathname === "/data-science-ai-cert-for-managers-leaders-s3d" ||
      router.pathname === "/job-guarantee-or-money-back-data-science-ai-s3d" ||
      router.pathname === "/data-science-certification-courses-s4" ||
      router.pathname === "/advance-ai-ml-certification-s4" ||
      router.pathname === "/data-science-ai-cert-for-managers-leaders-s4" ||
      router.pathname === "/job-guarantee-or-money-back-data-science-ai-s4" ||
      router.pathname === "/data-science-certification-courses-s4d" ||
      router.pathname === "/advance-ai-ml-certification-s4d" ||
      router.pathname === "/data-science-ai-cert-for-managers-leaders-s4d" ||
      router.pathname === "/job-guarantee-or-money-back-data-science-ai-s4d" ||
      router.pathname === "/data-science-certification-courses-s5" ||
      router.pathname === "/advance-ai-ml-certification-s5" ||
      router.pathname === "/data-science-ai-cert-for-managers-leaders-s5" ||
      router.pathname === "/job-guarantee-or-money-back-data-science-ai-s5" ||
      router.pathname === "/data-science-certification-courses-s6" ||
      router.pathname === "/advance-ai-ml-certification-s6" ||
      router.pathname === "/data-science-ai-cert-for-managers-leaders-s6" ||
      router.pathname === "/job-guarantee-or-money-back-data-science-ai-s6" ||
      router.pathname === "/data-science-certification-courses-s7" ||
      router.pathname === "/advance-ai-ml-certification-s7" ||
      router.pathname === "/data-science-ai-cert-for-managers-leaders-s7" ||
      router.pathname === "/job-guarantee-or-money-back-data-science-ai-s7" ||
      router.pathname === "/data-science-certification-courses-s10" ||
      router.pathname === "/data-science-certification-courses" ||
      router.pathname === "/data-science-ai-cert-for-managers-leaders" ||
      router.pathname ===
        "/datascience/data-science-ai-cert-for-managers-leaders" ||
      router.pathname === "/" ||
      router.pathname === "/common-generic" ||
      router.pathname === "/s2-masters-degree" ||
      router.pathname === "/job-guarantee-or-money-back-data-science-ai-s8" ||
      router.pathname === "/job-guarantee-or-money-back-data-science-ai-s9" ||
      router.pathname === "/s2-data-science" ||
      router.pathname === "/s2-data-science-generic" ||
      router.pathname === "/s2-data-science-advance-generic" ||
      router.pathname === "/s2-master-program" ||
      router.pathname === "/s2-managers-leaders-program" ||
      router.pathname === "/s2-data-science-institute-generic" ||
      router.pathname === "/s2-data-science-training-generic" ||
      router.pathname === "/s2-data-science-syllabus-generic" ||
      router.pathname === "/s2-artificial-intelligence-generic" ||
      router.pathname === "/s2-artificial-intelligence-syllabus-generic" ||
      router.pathname === "/s2-artificial-intelligence-training-generic" ||
      router.pathname === "/s2-business-analytics-generic" ||
      router.pathname === "/s2-business-analytics-syllabus-generic" ||
      router.pathname === "/s2-business-analytics-training-generic" ||
      router.pathname === "/s2-data-analytics-generic" ||
      router.pathname === "/s2-data-analytics-institute-generic" ||
      router.pathname === "/s2-data-analytics-syllabus-generic" ||
      router.pathname === "/s2-data-analytics-training-generic" ||
      router.pathname === "/s2-machine-learning-generic" ||
      router.pathname === "/s2-machine-learning-syllabus-generic" ||
      router.pathname === "/s2-machine-learning-training-generic" ||
      router.pathname === "/s3-data-science" ||
      router.pathname === "/s6-data-science-generic" ||
      router.pathname === "/datascience/s6-data-science-generic" ||
      router.pathname === "/s2-machine-learning" ||
      router.pathname === "/s2-job-guarantee" ||
      router.pathname === "/s2-data-analytics" ||
      router.pathname === "/apply-for-counselling" ||
      router.pathname === "/s2-artificial-intelligence" ||
      router.pathname === "/apply-for-counselling-s2" ||
      router.pathname === "/apply-for-counselling-s4" ||
      router.pathname === "/apply-for-counselling-data-science" ||
      router.pathname === "/datascience/apply-for-counselling-data-science" ||
      router.pathname ===
        "/datascience/s2-apply-for-counselling-data-science" ||
      router.pathname === "/apply-for-counselling-data-science-marketing" ||
      router.pathname ===
        "/datascience/apply-for-counselling-data-science-marketing" ||
      router.pathname === "/apply-for-counselling-s3" ||
      router.pathname === "/s2-data-science-mis" ||
      router.pathname === "/apply-for-counselling-email-marketing"
    ) {
      router.push("/Thank-you");

      return;
    }

    if (dataScience) {
      router.push("/Thank-you");
    }

    if (router.pathname === "/apply-for-counselling-scholarship") {
      router.push("/Thank-you-scholarship");
    }

    if (
      router.pathname === "/fssd" ||
      router.pathname === "/fswd" ||
      router.pathname === "/dsa" ||
      router.pathname === "/fssd-s2" ||
      router.pathname === "/generic" ||
      router.pathname === "/fullstack/fssd-s2" ||
      router.pathname === "/software-development-s2" ||
      router.pathname === "/fullstack/fssd-institute-program-s2" ||
      router.pathname === "/fullstack/fssd-training-s2" ||
      router.pathname === "/fullstack/software-development-course-s2" ||
      router.pathname === "/fullstack/software-programming-course-s2" ||
      router.pathname === "/fssd-s4" ||
      router.pathname === "/fssd-s5" ||
      router.pathname === "/dsa-s4" ||
      router.pathname === "/dsa-s5" ||
      router.pathname === "/full-stack-software-development-program" ||
      router.pathname === "/full-stack-web-development-program" ||
      router.pathname === "/apply-for-counselling-fsd-s2" ||
      router.pathname === "/fullstack/dsa" ||
      router.pathname === "/fullstack/fssd" ||
      router.pathname === "/s2-masters-program" ||
      router.pathname === "/s2-data-science-banking" ||
      router.pathname === "/s2-data-science-hr" ||
      router.pathname === "/s2-data-science-sales" ||
      router.pathname === "/s2-data-science-marketing" ||
      router.pathname === "/s2-business-analytics" ||
      router.pathname === "/s2-business-analytics-advance" ||
      router.pathname === "/s2-business-analytics-master" ||
      router.pathname === "/s2-business-analytics-placement" ||
      router.pathname === "/s2-business-analytics-training" ||
      router.pathname === "/s2-data-science-advance" ||
      router.pathname === "/s2-data-science-master" ||
      router.pathname === "/s2-data-science-training" ||
      router.pathname === "/s2-data-science-institute" ||
      router.pathname === "/s4-data-science" ||
      router.pathname === "/s6-data-science-generic" ||
      router.pathname === "/datascience/s6-data-science-generic" ||
      router.pathname === "/s2-data-science-placement" ||
      router.pathname === "/s2-data-science-certification" ||
      router.pathname === "/s2-machine-learning-advance" ||
      router.pathname === "/s2-machine-learning-master" ||
      router.pathname === "/s2-machine-learning-placement" ||
      router.pathname === "/s2-machine-learning-certificate" ||
      router.pathname === "/s2-machine-learning-training" ||
      router.pathname === "/s2-data-analytics-advance" ||
      router.pathname === "/s2-data-analytics-master" ||
      router.pathname === "/s2-data-analytics-training" ||
      router.pathname === "/s2-data-analytics-institute" ||
      router.pathname === "/s2-data-analytics-placement" ||
      router.pathname === "/s2-artificial-intelligence-advance" ||
      router.pathname === "/s2-artificial-intelligence-master" ||
      router.pathname === "/s2-artificial-intelligence-training" ||
      router.pathname === "/s2-artificial-intelligence-placement" ||
      router.pathname === "/s2-artificial-intelligence-certification" ||
      //  BANGALORE

      router.pathname === "/bangalore/s2-data-science" ||
      router.pathname === "/bangalore/s2-data-science-generic" ||
      router.pathname === "/bangalore/s2-artificial-intelligence-generic" ||
      router.pathname === "/bangalore/s2-machine-learning-generic" ||
      router.pathname === "/bangalore/s2-business-analytics-generic" ||
      router.pathname === "/bangalore/s2-data-analytics-generic" ||
      router.pathname === "/bangalore/s2-machine-learning" ||
      router.pathname === "/bangalore/s2-artificial-intelligence" ||
      router.pathname === "/bangalore/s2-data-analytics" ||
      router.pathname === "/bangalore/s2-business-analytics" ||
      router.pathname === "/bangalore/s2-job-guarantee" ||
      router.pathname === "/bangalore/s2-masters-program" ||
      router.pathname === "/bangalore/s2-artificial-intelligence-institute" ||
      router.pathname === "/bangalore/s2-business-analytics-training" ||
      router.pathname === "/bangalore/s2-data-analytics-training" ||
      router.pathname === "/bangalore/s2-data-analytics-certification" ||
      router.pathname === "/bangalore/s2-data-science-training" ||
      router.pathname === "/bangalore/s2-machine-learning-training" ||
      router.pathname ===
        "/bangalore/s2-artificial-intelligence-institute-generic" ||
      router.pathname === "/bangalore/s2-business-analytics-training-generic" ||
      router.pathname ===
        "/bangalore/s2-data-analytics-certification-generic" ||
      router.pathname === "/bangalore/s2-data-analytics-training-generic" ||
      router.pathname === "/bangalore/s2-data-science-training-generic" ||
      router.pathname === "/bangalore/s2-machine-learning-training-generic" ||
      //  chennai

      router.pathname === "/chennai/s2-data-science" ||
      router.pathname === "/chennai/s2-machine-learning" ||
      router.pathname === "/chennai/s2-artificial-intelligence" ||
      router.pathname === "/chennai/s2-data-analytics" ||
      router.pathname === "/chennai/s2-business-analytics" ||
      router.pathname === "/chennai/s2-job-guarantee" ||
      router.pathname === "/chennai/s2-masters-program" ||
      router.pathname === "/chennai/s2-business-analytics-training" ||
      router.pathname === "/chennai/s2-data-analytics-training" ||
      router.pathname === "/chennai/s2-machine-learning-training" ||
      router.pathname === "/chennai/s2-data-science-generic" ||
      router.pathname === "/chennai/s2-artificial-intelligence-generic" ||
      router.pathname === "/chennai/s2-machine-learning-generic" ||
      router.pathname === "/chennai/s2-business-analytics-generic" ||
      router.pathname === "/chennai/s2-data-analytics-generic" ||
      router.pathname === "/chennai/s2-business-analytics-training-generic" ||
      router.pathname === "/chennai/s2-data-analytics-training-generic" ||
      router.pathname === "/chennai/s2-machine-learning-training-generic" ||
      //  delhi

      router.pathname === "/delhi/s2-data-science" ||
      router.pathname === "/delhi/s2-machine-learning" ||
      router.pathname === "/delhi/s2-artificial-intelligence" ||
      router.pathname === "/delhi/s2-data-analytics" ||
      router.pathname === "/delhi/s2-business-analytics" ||
      router.pathname === "/delhi/s2-job-guarantee" ||
      router.pathname === "/delhi/s2-masters-program" ||
      router.pathname === "/delhi/s2-data-science-generic" ||
      router.pathname === "/delhi/s2-artificial-intelligence-generic" ||
      router.pathname === "/delhi/s2-machine-learning-generic" ||
      router.pathname === "/delhi/s2-business-analytics-generic" ||
      router.pathname === "/delhi/s2-data-analytics-generic" ||
      //  hyderabad

      router.pathname === "/hyderabad/s2-data-science" ||
      router.pathname === "/hyderabad/s2-machine-learning" ||
      router.pathname === "/hyderabad/s2-artificial-intelligence" ||
      router.pathname === "/hyderabad/s2-data-analytics" ||
      router.pathname === "/hyderabad/s2-business-analytics" ||
      router.pathname === "/hyderabad/s2-job-guarantee" ||
      router.pathname === "/hyderabad/s2-masters-program" ||
      router.pathname === "/hyderabad/s2-artificial-intelligence-training" ||
      router.pathname === "/hyderabad/s2-business-analytics-training" ||
      router.pathname === "/hyderabad/s2-data-science-training" ||
      router.pathname === "/hyderabad/s2-machine-learning-training" ||
      router.pathname === "/hyderabad/s2-data-science-generic" ||
      router.pathname === "/hyderabad/s2-artificial-intelligence-generic" ||
      router.pathname === "/hyderabad/s2-machine-learning-generic" ||
      router.pathname === "/hyderabad/s2-business-analytics-generic" ||
      router.pathname === "/hyderabad/s2-data-analytics-generic" ||
      router.pathname ===
        "/hyderabad/s2-artificial-intelligence-training-generic" ||
      router.pathname === "/hyderabad/s2-business-analytics-training-generic" ||
      router.pathname === "/hyderabad/s2-data-science-training-generic" ||
      router.pathname === "/hyderabad/s2-machine-learning-training-generic" ||
      //  mumbai

      router.pathname === "/mumbai/s2-data-science" ||
      router.pathname === "/mumbai/s2-machine-learning" ||
      router.pathname === "/mumbai/s2-artificial-intelligence" ||
      router.pathname === "/mumbai/s2-data-analytics" ||
      router.pathname === "/mumbai/s2-business-analytics" ||
      router.pathname === "/mumbai/s2-job-guarantee" ||
      router.pathname === "/mumbai/s2-masters-program" ||
      router.pathname === "/mumbai/s2-data-science-generic" ||
      router.pathname === "/mumbai/s2-artificial-intelligence-generic" ||
      router.pathname === "/mumbai/s2-machine-learning-generic" ||
      router.pathname === "/mumbai/s2-business-analytics-generic" ||
      router.pathname === "/mumbai/s2-data-analytics-generic" ||
      //  pune

      router.pathname === "/pune/s2-data-science" ||
      router.pathname === "/pune/s2-machine-learning" ||
      router.pathname === "/pune/s2-artificial-intelligence" ||
      router.pathname === "/pune/s2-job-guarantee" ||
      router.pathname === "/pune/s2-masters-program" ||
      router.pathname === "/pune/s2-business-analytics" ||
      router.pathname === "/pune/s2-artificial-intelligence-training" ||
      router.pathname === "/pune/s2-business-analytics-training" ||
      router.pathname === "/pune/s2-data-analytics-institute" ||
      router.pathname === "/pune/s2-data-analytics-training" ||
      router.pathname === "/pune/s2-data-science-institute" ||
      router.pathname === "/pune/s2-data-science-training" ||
      router.pathname === "/pune/s2-machine-learning-training" ||
      router.pathname === "/pune/s2-data-analytics" ||
      router.pathname === "/pune/s2-data-science-generic" ||
      router.pathname === "/pune/s2-artificial-intelligence-generic" ||
      router.pathname === "/pune/s2-machine-learning-generic" ||
      router.pathname === "/pune/s2-business-analytics-generic" ||
      router.pathname === "/pune/s2-artificial-intelligence-training-generic" ||
      router.pathname === "/pune/s2-business-analytics-training-generic" ||
      router.pathname === "/pune/s2-data-analytics-institute-generic" ||
      router.pathname === "/pune/s2-data-analytics-training-generic" ||
      router.pathname === "/pune/s2-data-science-training-generic" ||
      router.pathname === "/pune/s2-data-science-institute-generic" ||
      router.pathname === "/pune/s2-machine-learning-training-generic" ||
      router.pathname === "/pune/s2-data-analytics-generic"
    ) {
      router.push("/Thank-you");

      return;
    }

    if (router.pathname === "/google" || router.pathname === "/marketing") {
      setToggle(false);
      setAlertMSG("Form Submitted successfully");
      setDisable(false);
      setValue("");
    }
  };

  return (
    <div className={styles.App}>
      <form onSubmit={upSkillingHide ? formSubmitDownload : formSubmit}>
        <div className={styles.formWrapper}>
          <input
            type="text"
            name="name"
            className={popup ? styles.NameInputs : styles.NameInputs}
            required
            placeholder="Enter your Full Name*"
            value={query.name}
            style={{ borderBottom: "1px solid grey" }}
            onChange={handleParam()}
          />
        </div>
        <div className={styles.formWrapper}>
          <input
            type="email"
            name="email"
            required
            placeholder="Enter Your Email*"
            className={popup ? styles.EmailInputs : styles.EmailInputs}
            value={query.email}
            onChange={handleParam()}
          />
        </div>
        <div className={styles.formWrapper}>
          <PhoneInput
            style={
              popup
                ? {
                    height: "50px",
                    borderRadius: "8px",
                    border: "1px solid grey",
                    padding: "10px",
                  }
                : {
                    height: "50px",
                    borderRadius: "8px",
                    border: "1px solid grey",
                    padding: "10px",
                  }
            }
            name="phone"
            rules={{ required: true }}
            defaultCountry="IN"
            placeholder="Enter Phone Number"
            className={popup ? styles.Phones : styles.Phone}
            value={value}
            onChange={setValue}
            limitMaxLength={true}
            required
          />
        </div>
        {upSkillingHide ? (
          ""
        ) : (
          <div className={popup ? styles.formWrappers : styles.formWrappers}>
            <select
              name="upskillPlanning"
              required
              value={query.upskillPlanning}
              onChange={handleParam()}
            >
              <option
                value="How soon are you planning to upskill?"
                selected
                hidden
              >
                How soon are you planning to upskill?
              </option>
              <option value="Select an option" disabled>
                Select an option
              </option>
              <option value="Immediately">Immediately</option>
              <option
                value="Within 1 to 2 weeks
"
              >
                Within 1 to 2 weeks
              </option>
              <option value="Within a Month ">Within a Month</option>
              <option value="Not yet decided">Not yet decided</option>
            </select>
          </div>
        )}

        {upSkillingHide ? (
          ""
        ) : (
          <div className={popup ? styles.formWrappers : styles.formWrappers}>
            <select
              name="upskillingObjective"
              required
              value={query.upskillingObjective}
              onChange={handleParam()}
            >
              <option
                value="Tell us about your upskilling objective?"
                selected
                hidden
              >
                Tell us about your upskilling objective?
              </option>
              <option value="Select an option" disabled>
                Select an option
              </option>
              <option value="Upskilling">Upskilling</option>
              <option value="Salary hike">Salary hike</option>
              <option value="Career switch">Career switch</option>
            </select>
          </div>
        )}

        {google ? (
          <div className={popup ? styles.formWrappers : styles.formWrapper}>
            <select
              name="WAdropdown"
              required
              value={query.WAdropdown}
              onChange={handleParam()}
            >
              <option value="Select One">Select One</option>
              <option value="Calls">Calls</option>
              <option value="WhatsApp">WhatsApp</option>
              <option value="Referral">Referral</option>
            </select>
          </div>
        ) : (
          ""
        )}

        {referral ? (
          <div className={styles.formWrappers}>
            <input
              type="text"
              name="referralCode"
              className={popup ? styles.NameInputs : styles.NameInputs}
              placeholder="Enter Referral Code"
              value={query.referralCode}
              style={{ borderBottom: "1px solid grey" }}
              onChange={handleParam()}
            />
          </div>
        ) : (
          ""
        )}

        {radio ? (
          <div className={popup ? styles.formWrappers : styles.formWrappers}>
            <input
              id="Data Science Program"
              value="Data Science & AI Courses"
              name="platform"
              required
              type="radio"
              onChange={handleParam()}
            />
            Data Science & AI Courses&nbsp;
            <br />
            <input
              id="Software (DSA & System Design)"
              value="Software (DSA & System Design)"
              name="platform"
              required
              type="radio"
              onChange={handleParam()}
            />
            Software (DSA & System Design)
          </div>
        ) : (
          ""
        )}

        {popup ? (
          <div className={popup ? styles.formWrappers : styles.formWrapper}>
            <input
              type="hidden"
              id="url"
              name="url"
              value={router.asPath}
            ></input>
          </div>
        ) : (
          ""
        )}
        {error ? (
          <p
            style={{
              margin: "0px 0px 5px 0px",
              color: "#0072bc",
              fontSize: "18px",
            }}
          >
            Please select a valid option
          </p>
        ) : (
          ""
        )}
        <p className={styles.FormText} style={{ fontSize: "10px" }}>
          By submitting the form, you agree to our Terms and Conditions and our
          Privacy Policy.
        </p>

        <div>{toggle ? "" : <p className={styles.alert}>{alertMSG}</p>}</div>

        {disable ? (
          <div className={styles.ring}>
            <div className={styles.ldsring}>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        ) : (
          <button type="submit" disabled={disable} className={styles.button}>
            {downloadBrochure ? "Download Now" : "Apply Now"}
          </button>
        )}
        <input type="hidden" id="zc_gad" name="zc_gad" value="" />
      </form>
    </div>
  );
};

export default Form;
