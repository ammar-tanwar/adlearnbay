import React, { useState, useEffect } from "react";
import styles from "./FormOtp.module.css";
import { useRouter } from "next/router";
import PhoneInput from "react-phone-number-input";
import jsCookie from "js-cookie";

function FormOtp({
  popup,
  radio,
  event,
  downloadBrochure,
  s2dataScience,
  fullstackADS,
  upSkillingHide,
}) {
  const router = useRouter();
  const [radioBtn, setRadioBtn] = useState(0);
  const [value, setValue] = useState();
  const [alertMSG, setAlertMSG] = useState("");
  const [toggle, setToggle] = useState(true);
  const [error, setError] = useState();
  const [disable, setDisable] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    upskillPlanning: "",
    upskillingObjective: "",
    url: router.asPath,
    phone: "",
  });

  useEffect(() => {
    setForm({ ...form, phone: value });
    jsCookie.set("CARD", form.email, { expires: 14, secure: true });
  }, [value]);


  const handleRadio = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    if (name === "platform") {
      setRadioBtn(value);
    }
  };

  const handleForm = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setForm((formProps) => ({
      ...formProps,
      [name]: value,
    }));
  };

  // -====================  Organic - S END POINT ==========================--------
  let endPoint = "https://getform.io/f/85e92281-63f9-4d2f-b946-31d1098532f4";
  // -====================  Organic - S END POINT ==========================--------

  if (
    router.pathname === "/fssd" ||
    router.pathname === "/fullstack/fssd" ||
    router.pathname === "/fswd" ||
    router.pathname === "/fullstack/fswd" ||
    router.pathname === "/dsa" ||
    router.pathname === "/fullstack/dsa"
  ) {
    // -====================  Organic - S END POINT ==========================--------
    endPoint = "https://getform.io/f/85e92281-63f9-4d2f-b946-31d1098532f4";
    // -====================  Organic - S END POINT ==========================--------
  }

  if (s2dataScience) {
    // -==================== Google - S2 END POINT ==========================--------
    endPoint = "https://getform.io/f/c803e186-7053-4f33-9f49-909cc11e32bc";
    // -==================== Google - S2 END POINT ==========================--------
  }

  if (fullstackADS) {
    // -==================== Fullstack - FSD - ADS END POINT ==========================--------
    endPoint = "https://getform.io/f/c803e186-7053-4f33-9f49-909cc11e32bc";
    // -==================== Fullstack - FSD - ADS END POINT ==========================--------
  }

  if (router.pathname === "/s3-data-science") {
    // -==================== Google - S2 END POINT ==========================--------
    endPoint = "https://getform.io/f/c803e186-7053-4f33-9f49-909cc11e32bc";
    // -==================== Google - S2 END POINT ==========================--------
  }

  // -==================== Google - S2 END POINT ==========================--------
  if (
    router.pathname === "/job-guarantee-or-money-back-data-science-ai-s2" ||
    router.pathname === "/s2-business-analytics" ||
    router.pathname === "/s2-business-analytics-advance" ||
    router.pathname === "/s2-business-analytics-master" ||
    router.pathname === "/s2-business-analytics-placement" ||
    router.pathname === "/s2-business-analytics-training" ||
    router.pathname === "/s2-business-analytics-certification-generic" ||
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
    router.pathname === "/s2-data-analytics-certification-generic" ||
    router.pathname === "/s2-data-analytics-institute" ||
    router.pathname === "/s2-data-analytics-placement" ||
    router.pathname === "/s2-artificial-intelligence-advance" ||
    router.pathname === "/s2-artificial-intelligence-master" ||
    router.pathname === "/s2-artificial-intelligence-training" ||
    router.pathname === "/s2-artificial-intelligence-placement" ||
    router.pathname === "/s2-artificial-intelligence-certification" ||
    router.pathname === "/s2-data-science" ||
    router.pathname === "/s2-data-science-generic" ||
    router.pathname === "/s2-data-science-certification-generic" ||
    router.pathname === "/s2-data-science-program-generic" ||
    router.pathname === "/s2-ai-ml-course-generic" ||
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
    router.pathname === "/pune/s2-data-analytics"
  ) {
    // -==================== Google - S2 END POINT ==========================--------
    endPoint = "https://getform.io/f/c803e186-7053-4f33-9f49-909cc11e32bc";
    // -==================== Google - S2 END POINT ==========================--------
  }

  // -====================  Website Learnbay END POINT ==========================--------

  if (
    router.pathname === "/full-stack-software-development-program" ||
    router.pathname === "/full-stack-web-development-program" ||
    router.pathname === "/fullstack/dsa"
  ) {
    // -====================  Website Learnbay END POINT ==========================--------
    endPoint = "https://getform.io/f/85e92281-63f9-4d2f-b946-31d1098532f4";
    // -====================  Website Learnbay END POINT ==========================--------
  }

  // -==================== Webinar = END POINT ==========================--------
  if (event) {
    // -==================== Webinar =  END POINT ==========================--------
    endPoint = "https://getform.io/f/df003555-86c7-4ae5-a7f8-98c21dd9ad92";
    // -==================== Webinar = END POINT ==========================--------
  }

  // -==================== Webinar = END POINT ==========================--------
  if (router.pathname === "/s6") {
    // -==================== S6 =  END POINT ==========================--------
    endPoint = "https://getform.io/f/1c8cf486-31ef-4a7f-95b0-45c5f21e7b29";
    // -==================== S6 = END POINT ==========================--------
  }

  let btnTxt = "Apply for  Counseliing";
  if (event) {
    btnTxt = "Register Now";
  }

  const formSubmit = (e) => {
    e.preventDefault();
    if (
      form.upskillingObjective === "Tell us about your upskilling objective?"
    ) {
      setError(true);
    } else if (
      form.upskillPlanning === "How soon are you planning to upskill?"
    ) {
      setError(true);
    } else if (form.upskillPlanning === "Select an option") {
      setError(true);
    } else if (form.upskillingObjective === "Select an option") {
      setError(true);
    } else if (form.upskillPlanning === "") {
      setError(true);
    } else if (form.upskillingObjective === "") {
      setError(true);
    } else {
      setError(false);
      const formData = new FormData();

      Object.entries(form).forEach(([key, value]) => {
        formData.append(key, value);
      });

      if (radioBtn == 5 || radioBtn == 3) {
        setToggle(false);
        setAlertMSG("Sorry! You are not eligible");
        return false;
      }

      fetch(`${endPoint}`, {
        method: "POST",
        body: formData,
      });
      setDisable(true);
      if (event) {
        router.push("fullstack/Thank-you-webinar");
      }

      if (
        (router.pathname === "/fssd" && downloadBrochure) ||
        (router.pathname === "/fullstack/fssd" && downloadBrochure) ||
        (router.pathname === "/fswd" && downloadBrochure) ||
        (router.pathname === "/fullstack/fswd" && downloadBrochure) ||
        (router.pathname === "/dsa" && downloadBrochure) ||
        (router.pathname === "/fullstack/dsa" && downloadBrochure) ||
        (router.pathname === "/generic" && downloadBrochure) ||
        (router.pathname === "/s6" && downloadBrochure) ||
        (router.pathname === "/fssd-s2" && downloadBrochure) ||
        (router.pathname === "/fullstack/sd-cloud-computing-devops-s2" &&
          downloadBrochure) ||
        (router.pathname === "/fullstack/sd-blockchain-s2" &&
          downloadBrochure) ||
        (router.pathname === "/fullstack/fssd-s2-generic" &&
          downloadBrochure) ||
        (router.pathname === "/fullstack/fssd-training-s2-generic" &&
          downloadBrochure) ||
        (router.pathname ===
          "/fullstack/software-programming-course-s2-generic" &&
          downloadBrochure) ||
        (router.pathname === "/fullstack/fssd-institute-program-s2-generic" &&
          downloadBrochure) ||
        (router.pathname === "/fullstack/fssd-s2" && downloadBrochure) ||
        (router.pathname === "/fullstack/fssd-institute-program-s2" &&
          downloadBrochure) ||
        (router.pathname === "/fullstack/fssd-training-s2" &&
          downloadBrochure) ||
        (router.pathname === "/fullstack/software-development-course-s2" &&
          downloadBrochure) ||
        (router.pathname ===
          "/fullstack/software-development-course-s2-generic" &&
          downloadBrochure) ||
        (router.pathname === "/fullstack/software-programming-course-s2" &&
          downloadBrochure) ||
        (router.pathname ===
          "/fullstack/data-structure-course-java-python-s2" &&
          downloadBrochure) ||
        (router.pathname ===
          "/fullstack/data-structures-algorithms-syllabus-s2" &&
          downloadBrochure) ||
        (router.pathname ===
          "/fullstack/data-structures-and-algorithms-course-s2" &&
          downloadBrochure) ||
        (router.pathname === "/fullstack/data-structure-algorithm-s2" &&
          downloadBrochure) ||
        (router.pathname === "/fssd-s4" && downloadBrochure) ||
        (router.pathname === "/fssd-s5" && downloadBrochure) ||
        (router.pathname === "/w2a-s2" && downloadBrochure) ||
        (router.pathname === "/dsa-s4" && downloadBrochure) ||
        (router.pathname === "/dsa-s5" && downloadBrochure) ||
        (router.pathname === "/fullstack/fswd-s2" && downloadBrochure) ||
        (router.pathname === "/fullstack/system-design-s2" &&
          downloadBrochure) ||
        (router.pathname === "/full-stack-software-development-program" &&
          downloadBrochure) ||
        (router.pathname === "/apply-for-counselling" && downloadBrochure) ||
        (router.pathname === "/full-stack-web-development-program" &&
          downloadBrochure) ||
        (router.pathname === "/fullstack/dsa" && downloadBrochure)
      ) {
        router.push("/Thank-you");

        return;
      }

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
        (router.pathname ===
          "/datascience/data-science-certification-courses" &&
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
        (router.pathname === "/s2-data-science" && downloadBrochure) ||
        (router.pathname === "/s2-data-science-generic" && downloadBrochure) ||
        (router.pathname === "/datascience/s3-data-science-generic" &&
          downloadBrochure) ||
        (router.pathname === "/s2-data-science-program-generic" &&
          downloadBrochure) ||
        (router.pathname === "/s2-ai-ml-course-generic" && downloadBrochure) ||
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
        (router.pathname === "/s6" && downloadBrochure) ||
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

      if (
        router.pathname === "/job-guarantee-or-money-back-data-science-ai-s2" ||
        router.pathname === "/s2-business-analytics" ||
        router.pathname === "/s2-business-analytics-advance" ||
        router.pathname === "/s2-business-analytics-master" ||
        router.pathname === "/s2-business-analytics-placement" ||
        router.pathname === "/s2-business-analytics-training" ||
        router.pathname === "/s2-business-analytics-certification-generic" ||
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
        router.pathname === "/s2-data-analytics-certification-generic" ||
        router.pathname === "/s2-data-analytics-institute" ||
        router.pathname === "/s2-data-analytics-placement" ||
        router.pathname === "/s2-artificial-intelligence-advance" ||
        router.pathname === "/s2-artificial-intelligence-master" ||
        router.pathname === "/s2-artificial-intelligence-training" ||
        router.pathname === "/s2-artificial-intelligence-placement" ||
        router.pathname === "/s2-artificial-intelligence-certification" ||
        router.pathname === "/s2-data-science" ||
        router.pathname === "/s2-data-science-generic" ||
        router.pathname === "/datascience/s3-data-science-generic" ||
        router.pathname === "/s2-data-science-certification-generic" ||
        router.pathname === "/s2-data-science-program-generic" ||
        router.pathname === "/s2-ai-ml-course-generic" ||
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
        router.pathname ===
          "/datascience/s2-apply-for-counselling-data-science" ||
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
        router.pathname ===
          "/pune/s2-artificial-intelligence-training-generic" ||
        router.pathname === "/pune/s2-business-analytics-training-generic" ||
        router.pathname === "/pune/s2-data-analytics-institute-generic" ||
        router.pathname === "/pune/s2-data-analytics-training-generic" ||
        router.pathname === "/pune/s2-data-science-training-generic" ||
        router.pathname === "/pune/s2-data-science-institute-generic" ||
        router.pathname === "/pune/s2-machine-learning-training-generic" ||
        router.pathname === "/pune/s2-data-analytics"
      ) {
        router.push("/Thank-you");

        return;
      }

      if (
        router.pathname === "/fssd" ||
        router.pathname === "/fullstack/fssd" ||
        router.pathname === "/fswd" ||
        router.pathname === "/fullstack/fswd" ||
        router.pathname === "/dsa" ||
        router.pathname === "/fullstack/dsa" ||
        router.pathname === "/generic" ||
        router.pathname === "/s6" ||
        router.pathname === "/fssd-s2" ||
        router.pathname === "/fullstack/fssd-s2-generic" ||
        router.pathname === "/fullstack/fssd-training-s2-generic" ||
        router.pathname ===
          "/fullstack/software-programming-course-s2-generic" ||
        router.pathname === "/fullstack/fssd-institute-program-s2-generic" ||
        router.pathname === "/fullstack/fssd-s2" ||
        router.pathname === "/fullstack/sd-blockchain-s2" ||
        router.pathname === "/fullstack/sd-cloud-computing-devops-s2" ||
        router.pathname === "/fullstack/fssd-institute-program-s2" ||
        router.pathname === "/fullstack/fssd-training-s2" ||
        router.pathname === "/fullstack/software-development-course-s2" ||
        router.pathname ===
          "/fullstack/software-development-course-s2-generic" ||
        router.pathname === "/fullstack/software-programming-course-s2" ||
        router.pathname === "/fullstack/data-structure-course-java-python-s2" ||
        router.pathname ===
          "/fullstack/data-structures-algorithms-syllabus-s2" ||
        router.pathname ===
          "/fullstack/data-structures-and-algorithms-course-s2" ||
        router.pathname === "/fullstack/data-structure-algorithm-s2" ||
        router.pathname === "/fssd-s4" ||
        router.pathname === "/fssd-s5" ||
        router.pathname === "/w2a-s2" ||
        router.pathname === "/dsa-s4" ||
        router.pathname === "/dsa-s5" ||
        router.pathname === "/fullstack/fswd-s2" ||
        router.pathname === "/fullstack/system-design-s2" ||
        router.pathname === "/full-stack-software-development-program" ||
        router.pathname === "/full-stack-web-development-program" ||
        router.pathname === "/apply-for-counselling-fsd-s2" ||
        router.pathname === "/fullstack/apply-for-counselling-fsd-s2" ||
        router.pathname === "/s3-data-science" ||
        router.pathname === "/system-design-s2" ||
        router.pathname === "/fullstack/dsa"
      ) {
        router.push("/Thank-you");

        return;
      }

      if (s2dataScience) {
        router.push("/Thank-you");
        return;
      }

      if (fullstackADS) {
        router.push("/Thank-you");
        return;
      }
    }
  };

  const formSubmitDownload = (e) => {
    e.preventDefault();
    const formData = new FormData();

    Object.entries(form).forEach(([key, value]) => {
      formData.append(key, value);
    });

    if (radioBtn == 5 || radioBtn == 3) {
      setToggle(false);
      setAlertMSG("Sorry! You are not eligible");
      return false;
    }

    fetch(`${endPoint}`, {
      method: "POST",
      body: formData,
    });
    setDisable(true);
    if (event) {
      router.push("fullstack/Thank-you-webinar");
    }

    if (
      (router.pathname === "/fssd" && downloadBrochure) ||
      (router.pathname === "/fullstack/fssd" && downloadBrochure) ||
      (router.pathname === "/fswd" && downloadBrochure) ||
      (router.pathname === "/fullstack/fswd" && downloadBrochure) ||
      (router.pathname === "/dsa" && downloadBrochure) ||
      (router.pathname === "/fullstack/dsa" && downloadBrochure) ||
      (router.pathname === "/generic" && downloadBrochure) ||
      (router.pathname === "/s6" && downloadBrochure) ||
      (router.pathname === "/fssd-s2" && downloadBrochure) ||
      (router.pathname === "/fullstack/sd-cloud-computing-devops-s2" &&
        downloadBrochure) ||
      (router.pathname === "/fullstack/sd-blockchain-s2" &&
        downloadBrochure) ||
      (router.pathname === "/fullstack/fssd-s2-generic" &&
        downloadBrochure) ||
      (router.pathname === "/fullstack/fssd-training-s2-generic" &&
        downloadBrochure) ||
      (router.pathname ===
        "/fullstack/software-programming-course-s2-generic" &&
        downloadBrochure) ||
      (router.pathname ===
        "/fullstack/fssd-institute-program-s2-generic" &&
        downloadBrochure) ||
      (router.pathname === "/fullstack/fssd-s2" && downloadBrochure) ||
      (router.pathname === "/fullstack/fssd-institute-program-s2" &&
        downloadBrochure) ||
      (router.pathname === "/fullstack/fssd-training-s2" &&
        downloadBrochure) ||
      (router.pathname === "/fullstack/software-development-course-s2" &&
        downloadBrochure) ||
      (router.pathname ===
        "/fullstack/software-development-course-s2-generic" &&
        downloadBrochure) ||
      (router.pathname === "/fullstack/software-programming-course-s2" &&
        downloadBrochure) ||
      (router.pathname ===
        "/fullstack/data-structure-course-java-python-s2" &&
        downloadBrochure) ||
      (router.pathname ===
        "/fullstack/data-structures-algorithms-syllabus-s2" &&
        downloadBrochure) ||
      (router.pathname ===
        "/fullstack/data-structures-and-algorithms-course-s2" &&
        downloadBrochure) ||
      (router.pathname === "/fullstack/data-structure-algorithm-s2" &&
        downloadBrochure) ||
      (router.pathname === "/fssd-s4" && downloadBrochure) ||
      (router.pathname === "/fssd-s5" && downloadBrochure) ||
      (router.pathname === "/w2a-s2" && downloadBrochure) ||
      (router.pathname === "/dsa-s4" && downloadBrochure) ||
      (router.pathname === "/dsa-s5" && downloadBrochure) ||
      (router.pathname === "/fullstack/fswd-s2" && downloadBrochure) ||
      (router.pathname === "/fullstack/system-design-s2" &&
        downloadBrochure) ||
      (router.pathname === "/full-stack-software-development-program" &&
        downloadBrochure) ||
      (router.pathname === "/apply-for-counselling" &&
        downloadBrochure) ||
      (router.pathname === "/full-stack-web-development-program" &&
        downloadBrochure) ||
      (router.pathname === "/fullstack/dsa" && downloadBrochure)
    ) {
      router.push("/Thank-you");

      return;
    }

    if (
      (router.pathname === "/data-science-certification-courses-sd" &&
        downloadBrochure) ||
      (router.pathname === "/advance-ai-ml-certification-sd" &&
        downloadBrochure) ||
      (router.pathname ===
        "/data-science-ai-cert-for-managers-leaders-sd" &&
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
      (router.pathname ===
        "/job-guarantee-or-money-back-data-science-ai" &&
        downloadBrochure) ||
      (router.pathname === "/data-science-ai-masters-program" &&
        downloadBrochure) ||
      (router.pathname ===
        "/datascience/data-science-ai-masters-program" &&
        downloadBrochure) ||
      (router.pathname === "/data-science-certification-courses-s2" &&
        downloadBrochure) ||
      (router.pathname === "/advance-ai-ml-certification-s2" &&
        downloadBrochure) ||
      (router.pathname ===
        "/data-science-ai-cert-for-managers-leaders-s2" &&
        downloadBrochure) ||
      (router.pathname ===
        "/job-guarantee-or-money-back-data-science-ai-s2" &&
        downloadBrochure) ||
      (router.pathname === "/data-science-certification-courses-s2d" &&
        downloadBrochure) ||
      (router.pathname === "/advance-ai-ml-certification-s2d" &&
        downloadBrochure) ||
      (router.pathname ===
        "/data-science-ai-cert-for-managers-leaders-s2d" &&
        downloadBrochure) ||
      (router.pathname ===
        "/job-guarantee-or-money-back-data-science-ai-s2d" &&
        downloadBrochure) ||
      (router.pathname === "/data-science-certification-courses-s3" &&
        downloadBrochure) ||
      (router.pathname === "/advance-ai-ml-certification-s3" &&
        downloadBrochure) ||
      (router.pathname ===
        "/data-science-ai-cert-for-managers-leaders-s3" &&
        downloadBrochure) ||
      (router.pathname ===
        "/job-guarantee-or-money-back-data-science-ai-s3" &&
        downloadBrochure) ||
      (router.pathname === "/data-science-certification-courses-s3d" &&
        downloadBrochure) ||
      (router.pathname === "/advance-ai-ml-certification-s3d" &&
        downloadBrochure) ||
      (router.pathname ===
        "/data-science-ai-cert-for-managers-leaders-s3d" &&
        downloadBrochure) ||
      (router.pathname ===
        "/job-guarantee-or-money-back-data-science-ai-s3d" &&
        downloadBrochure) ||
      (router.pathname === "/data-science-certification-courses-s4" &&
        downloadBrochure) ||
      (router.pathname === "/advance-ai-ml-certification-s4" &&
        downloadBrochure) ||
      (router.pathname ===
        "/data-science-ai-cert-for-managers-leaders-s4" &&
        downloadBrochure) ||
      (router.pathname ===
        "/job-guarantee-or-money-back-data-science-ai-s4" &&
        downloadBrochure) ||
      (router.pathname === "/data-science-certification-courses-s4d" &&
        downloadBrochure) ||
      (router.pathname === "/advance-ai-ml-certification-s4d" &&
        downloadBrochure) ||
      (router.pathname ===
        "/data-science-ai-cert-for-managers-leaders-s4d" &&
        downloadBrochure) ||
      (router.pathname ===
        "/job-guarantee-or-money-back-data-science-ai-s4d" &&
        downloadBrochure) ||
      (router.pathname === "/data-science-certification-courses-s5" &&
        downloadBrochure) ||
      router.pathname === "/advance-ai-ml-certification-s5" ||
      (router.pathname ===
        "/data-science-ai-cert-for-managers-leaders-s5" &&
        downloadBrochure) ||
      (router.pathname ===
        "/job-guarantee-or-money-back-data-science-ai-s5" &&
        downloadBrochure) ||
      (router.pathname === "/data-science-certification-courses-s6" &&
        downloadBrochure) ||
      router.pathname === "/advance-ai-ml-certification-s6" ||
      (router.pathname ===
        "/data-science-ai-cert-for-managers-leaders-s6" &&
        downloadBrochure) ||
      (router.pathname ===
        "/job-guarantee-or-money-back-data-science-ai-s6" &&
        downloadBrochure) ||
      (router.pathname === "/data-science-certification-courses-s7" &&
        downloadBrochure) ||
      (router.pathname === "/advance-ai-ml-certification-s7" &&
        downloadBrochure) ||
      (router.pathname ===
        "/data-science-ai-cert-for-managers-leaders-s7" &&
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
      (router.pathname ===
        "/datascience/data-science-certification-courses" &&
        downloadBrochure) ||
      (router.pathname === "/data-science-ai-cert-for-managers-leaders" &&
        downloadBrochure) ||
      (router.pathname ===
        "/datascience/data-science-ai-cert-for-managers-leaders" &&
        downloadBrochure) ||
      (router.pathname ===
        "/job-guarantee-or-money-back-data-science-ai" &&
        downloadBrochure) ||
      (router.pathname === "/data-science-ai-masters-program" &&
        downloadBrochure) ||
      (router.pathname ===
        "/datascience/data-science-ai-masters-program" &&
        downloadBrochure) ||
      (router.pathname === "/" && downloadBrochure) ||
      (router.pathname === "/s2-data-science" && downloadBrochure) ||
      (router.pathname === "/s2-data-science-generic" &&
        downloadBrochure) ||
      (router.pathname === "/datascience/s3-data-science-generic" &&
        downloadBrochure) ||
      (router.pathname === "/s2-data-science-program-generic" &&
        downloadBrochure) ||
      (router.pathname === "/s2-ai-ml-course-generic" &&
        downloadBrochure) ||
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
      (router.pathname ===
        "/s2-artificial-intelligence-syllabus-generic" &&
        downloadBrochure) ||
      (router.pathname ===
        "/s2-artificial-intelligence-training-generic" &&
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
      (router.pathname === "/s6-data-science-generic" &&
        downloadBrochure) ||
      (router.pathname === "/s6" && downloadBrochure) ||
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

    if (
      router.pathname ===
        "/job-guarantee-or-money-back-data-science-ai-s2" ||
      router.pathname === "/s2-business-analytics" ||
      router.pathname === "/s2-business-analytics-advance" ||
      router.pathname === "/s2-business-analytics-master" ||
      router.pathname === "/s2-business-analytics-placement" ||
      router.pathname === "/s2-business-analytics-training" ||
      router.pathname ===
        "/s2-business-analytics-certification-generic" ||
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
      router.pathname === "/s2-data-analytics-certification-generic" ||
      router.pathname === "/s2-data-analytics-institute" ||
      router.pathname === "/s2-data-analytics-placement" ||
      router.pathname === "/s2-artificial-intelligence-advance" ||
      router.pathname === "/s2-artificial-intelligence-master" ||
      router.pathname === "/s2-artificial-intelligence-training" ||
      router.pathname === "/s2-artificial-intelligence-placement" ||
      router.pathname === "/s2-artificial-intelligence-certification" ||
      router.pathname === "/s2-data-science" ||
      router.pathname === "/s2-data-science-generic" ||
      router.pathname === "/datascience/s3-data-science-generic" ||
      router.pathname === "/s2-data-science-certification-generic" ||
      router.pathname === "/s2-data-science-program-generic" ||
      router.pathname === "/s2-ai-ml-course-generic" ||
      router.pathname === "/s2-data-science-advance-generic" ||
      router.pathname === "/s2-master-program" ||
      router.pathname === "/s2-managers-leaders-program" ||
      router.pathname === "/s2-data-science-institute-generic" ||
      router.pathname === "/s2-data-science-training-generic" ||
      router.pathname === "/s2-data-science-syllabus-generic" ||
      router.pathname === "/s2-artificial-intelligence-generic" ||
      router.pathname ===
        "/s2-artificial-intelligence-syllabus-generic" ||
      router.pathname ===
        "/s2-artificial-intelligence-training-generic" ||
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
      router.pathname ===
        "/datascience/apply-for-counselling-data-science" ||
      router.pathname ===
        "/datascience/s2-apply-for-counselling-data-science" ||
      router.pathname === "/apply-for-counselling" ||
      router.pathname === "/s2-data-science-mis" ||
      router.pathname === "/software-development-s2" ||
      //  BANGALORE

      router.pathname === "/bangalore/s2-data-science" ||
      router.pathname === "/bangalore/s2-data-science-generic" ||
      router.pathname ===
        "/bangalore/s2-artificial-intelligence-generic" ||
      router.pathname === "/bangalore/s2-machine-learning-generic" ||
      router.pathname === "/bangalore/s2-business-analytics-generic" ||
      router.pathname === "/bangalore/s2-data-analytics-generic" ||
      router.pathname === "/bangalore/s2-machine-learning" ||
      router.pathname === "/bangalore/s2-artificial-intelligence" ||
      router.pathname === "/bangalore/s2-data-analytics" ||
      router.pathname === "/bangalore/s2-business-analytics" ||
      router.pathname === "/bangalore/s2-job-guarantee" ||
      router.pathname === "/bangalore/s2-masters-program" ||
      router.pathname ===
        "/bangalore/s2-artificial-intelligence-institute" ||
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
      router.pathname ===
        "/bangalore/s2-data-analytics-training-generic" ||
      router.pathname === "/bangalore/s2-data-science-training-generic" ||
      router.pathname ===
        "/bangalore/s2-machine-learning-training-generic" ||
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
      router.pathname ===
        "/chennai/s2-business-analytics-training-generic" ||
      router.pathname === "/chennai/s2-data-analytics-training-generic" ||
      router.pathname ===
        "/chennai/s2-machine-learning-training-generic" ||
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
      router.pathname ===
        "/hyderabad/s2-artificial-intelligence-training" ||
      router.pathname === "/hyderabad/s2-business-analytics-training" ||
      router.pathname === "/hyderabad/s2-data-science-training" ||
      router.pathname === "/hyderabad/s2-machine-learning-training" ||
      router.pathname === "/hyderabad/s2-data-science-generic" ||
      router.pathname ===
        "/hyderabad/s2-artificial-intelligence-generic" ||
      router.pathname === "/hyderabad/s2-machine-learning-generic" ||
      router.pathname === "/hyderabad/s2-business-analytics-generic" ||
      router.pathname === "/hyderabad/s2-data-analytics-generic" ||
      router.pathname ===
        "/hyderabad/s2-artificial-intelligence-training-generic" ||
      router.pathname ===
        "/hyderabad/s2-business-analytics-training-generic" ||
      router.pathname === "/hyderabad/s2-data-science-training-generic" ||
      router.pathname ===
        "/hyderabad/s2-machine-learning-training-generic" ||
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
      router.pathname ===
        "/pune/s2-artificial-intelligence-training-generic" ||
      router.pathname ===
        "/pune/s2-business-analytics-training-generic" ||
      router.pathname === "/pune/s2-data-analytics-institute-generic" ||
      router.pathname === "/pune/s2-data-analytics-training-generic" ||
      router.pathname === "/pune/s2-data-science-training-generic" ||
      router.pathname === "/pune/s2-data-science-institute-generic" ||
      router.pathname === "/pune/s2-machine-learning-training-generic" ||
      router.pathname === "/pune/s2-data-analytics"
    ) {
      router.push("/Thank-you");

      return;
    }

    if (
      router.pathname === "/fssd" ||
      router.pathname === "/fullstack/fssd" ||
      router.pathname === "/fswd" ||
      router.pathname === "/fullstack/fswd" ||
      router.pathname === "/dsa" ||
      router.pathname === "/fullstack/dsa" ||
      router.pathname === "/generic" ||
      router.pathname === "/s6" ||
      router.pathname === "/fssd-s2" ||
      router.pathname === "/fullstack/fssd-s2-generic" ||
      router.pathname === "/fullstack/fssd-training-s2-generic" ||
      router.pathname ===
        "/fullstack/software-programming-course-s2-generic" ||
      router.pathname ===
        "/fullstack/fssd-institute-program-s2-generic" ||
      router.pathname === "/fullstack/fssd-s2" ||
      router.pathname === "/fullstack/sd-blockchain-s2" ||
      router.pathname === "/fullstack/sd-cloud-computing-devops-s2" ||
      router.pathname === "/fullstack/fssd-institute-program-s2" ||
      router.pathname === "/fullstack/fssd-training-s2" ||
      router.pathname === "/fullstack/software-development-course-s2" ||
      router.pathname ===
        "/fullstack/software-development-course-s2-generic" ||
      router.pathname === "/fullstack/software-programming-course-s2" ||
      router.pathname ===
        "/fullstack/data-structure-course-java-python-s2" ||
      router.pathname ===
        "/fullstack/data-structures-algorithms-syllabus-s2" ||
      router.pathname ===
        "/fullstack/data-structures-and-algorithms-course-s2" ||
      router.pathname === "/fullstack/data-structure-algorithm-s2" ||
      router.pathname === "/fssd-s4" ||
      router.pathname === "/fssd-s5" ||
      router.pathname === "/w2a-s2" ||
      router.pathname === "/dsa-s4" ||
      router.pathname === "/dsa-s5" ||
      router.pathname === "/fullstack/fswd-s2" ||
      router.pathname === "/fullstack/system-design-s2" ||
      router.pathname === "/full-stack-software-development-program" ||
      router.pathname === "/full-stack-web-development-program" ||
      router.pathname === "/apply-for-counselling-fsd-s2" ||
      router.pathname === "/fullstack/apply-for-counselling-fsd-s2" ||
      router.pathname === "/s3-data-science" ||
      router.pathname === "/system-design-s2" ||
      router.pathname === "/fullstack/dsa"
    ) {
      router.push("/Thank-you");

      return;
    }

    if (s2dataScience) {
      router.push("/Thank-you");
      return;
    }

    if (fullstackADS) {
      router.push("/Thank-you");
      return;
    }
  };

  return (
    <>
      <section className={styles.App}>
        <form
          autoComplete="false"
          onSubmit={upSkillingHide ? formSubmitDownload : formSubmit}
          method="POST"
        >
          <div className={styles.formWrapper}>
            <input
              className={popup ? styles.NameInputs : styles.NameInput}
              type="text"
              name="name"
              value={form.name}
              onChange={handleForm}
              placeholder="Enter your full name*"
              required={true}
            />
          </div>
          <div className={styles.formWrapper}>
            <input
              className={popup ? styles.EmailInputs : styles.EmailInput}
              type="email"
              name="email"
              value={form.email}
              onChange={handleForm}
              placeholder="Enter your email*"
              required={true}
            />
          </div>

          {upSkillingHide ? (
            ""
          ) : (
            <div className={styles.formWrapper}>
              <select
                name="upskillingObjective"
                required
                value={form.upskillingObjective}
                onChange={handleForm}
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

          {upSkillingHide ? (
            ""
          ) : (
            <div className={styles.formWrapper}>
              <select
                name="upskillPlanning"
                required
                value={form.upskillPlanning}
                onChange={handleForm}
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

          <div className={styles.formWrapper}>
            <PhoneInput
              name="phone"
              rules={{ required: true }}
              defaultCountry="IN"
              placeholder="Enter phone number*"
              className={popup ? styles.NameInputs : styles.NameInput}
              value={value}
              onChange={setValue}
              limitMaxLength={true}
              required={true}
            />
          </div>

          {radio ? (
            <div className={popup ? styles.formWrappers : styles.formWrapper}>
              <input
                id="Data Science Program"
                value="Data Science & AI Courses"
                name="platform"
                required={true}
                type="radio"
                onChange={handleForm}
              />
              Data Science & AI Courses&nbsp;
              <br />
              <input
                id="Software (DSA & System Design)"
                value="Software (DSA & System Design)"
                name="platform"
                required={true}
                type="radio"
                onChange={handleForm}
              />
              Software (DSA & System Design)
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
          <div>{toggle ? "" : <p className={styles.alert}>{alertMSG}</p>}</div>
          <p className={styles.FormText} style={{ fontSize: "10px" }}>
            By submitting the form, you agree to our Terms and Conditions and
            our Privacy Policy.
          </p>

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
                <div className={styles.button}>
                  <button disabled={disable} className={styles.button}>
                    {downloadBrochure ? "Download Now" : "Apply Now"}
                  </button>
                </div>
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

          <input type="hidden" id="zc_gad" name="zc_gad" value="" />
        </form>
      </section>
    </>
  );
}

export default FormOtp;
