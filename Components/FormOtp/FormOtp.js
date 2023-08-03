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
  jobDescription,
  workExperience,
  brief,
  currentCompany,
  fsddesc,
  eventRadio,
  QuesMean,
  jobTitle,
  scholarship,
  s2dataScience,
  fullstackADS,
  GraduationYear,
  grad,
  ProgrammingSkills,
}) {
  const router = useRouter();
  const [btnHide, setBtnHide] = useState(false);
  const [radioBtn, setRadioBtn] = useState(0);
  const [sendOtpBtnHide, setSendOtpBtnHide] = useState(false);
  const [value, setValue] = useState();
  const [updateMobileNumber, setupdateMobileNumber] = useState();
  const [alertMSG, setAlertMSG] = useState("");
  const [toggle, setToggle] = useState(true);
  const [disable, setDisable] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    jobDescription: "",
    workExperience: "",
    currentCompany: "",
    brief: "",
    otp: "",
    scholarship: "",
    url: router.asPath,
    phone: "",
    jobTitle: "",
    GraduationYear: "",
    ProgrammingSkills: "",
  });

  useEffect(() => {
    setForm({ ...form, phone: value });
    jsCookie.set("CARD", form.email, { expires: 14, secure: true });
  }, [value]);

  // console.log("radioBtn-",radioBtn)

  const handleRadio = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    // console.log("name-",name)
    // console.log("value-",value)
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
    router.pathname === "/dsa-system-design"
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

  const sendOtp = (e) => {
    e.preventDefault();

    const formData = new FormData();
    Object.entries(form).forEach(([key, value]) => {
      formData.append(key, value);
      // console.log("key-", key, "-----", "value-", value)
    });

    const mobileNumber = form.phone;
    const name = form.name;
    const email = form.email;
    // console.log(mobileNumber)

    if (radioBtn == 4 || radioBtn == 2 || radioBtn == 3) {
      setToggle(false);
      setAlertMSG("Sorry! You are not eligible");
      return false;
    }

    if (mobileNumber !== undefined && name !== "" && email !== "") {
      const regex = /(\+91)/g;
      const str = mobileNumber.toString();
      const subst = `\$1-`;
      const result = str.replace(regex, subst);
      // console.log(result)
      const num = result.split("-")[0];
      const mobileNumber1 = result.split("-")[1];
      // console.log(mobileNumber1)

      if (num === "+91") {
        setupdateMobileNumber(mobileNumber1);
        const data = fetch(`${"/api/Authentication/sendOtp"}`, {
          method: "POST",
          body: JSON.stringify({ mobileNumber: mobileNumber1 }),
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((response) => response.json())
          .then((response) => {
            // console.log("Response", response)
            if (response.msg == "OTP Sent Successfully") {
              setToggle(false);
              setAlertMSG("OTP Sent Successfully");
              setSendOtpBtnHide(true);
              setBtnHide(true);
            } else if (response.msg == "OTP Sending Failed Through API") {
              setSendOtpBtnHide(false);
              setBtnHide(false);
            } else if (
              response.msg == "Mobile Number is Not Match from DataBase"
            ) {
              setSendOtpBtnHide(false);
              setBtnHide(false);
            } else if (response.msg == "Invalid Phone Number") {
              setToggle(false);
              setAlertMSG("Invalid Phone Number");
              setSendOtpBtnHide(false);
              setBtnHide(false);
            } else {
              console.log("API IS NOT WORKING");
            }
          })
          .catch((err) => {
            console.log("API IS NOT WORKING");
            console.log(err);
          });
      } else {
        fetch(`${endPoint}`, {
          method: "POST",
          body: formData,
        }).then(() =>
          setForm({
            name: "",
            email: "",
            jobDescription: "",
            workExperience: "",
            otp: "",
            scholarship: "",
            url: "",
            phone: "",
            jobTitle: "",
            GraduationYear: "",
            ProgrammingSkills: "",
          })
        );

        setDisable(true);
        if (event) {
          router.push("/Thank-you-fsd-webinar");
        }
        if (
          (router.pathname === "/fssd" && downloadBrochure) ||
          (router.pathname === "/fullstack/fssd" && downloadBrochure) ||
          (router.pathname === "/fswd" && downloadBrochure) ||
          (router.pathname === "/fullstack/fswd" && downloadBrochure) ||
          (router.pathname === "/dsa" && downloadBrochure) ||
          (router.pathname === "/fullstack/dsa" && downloadBrochure) ||
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
          // (router.pathname === "/fswd-s4" && downloadBrochure) ||
          (router.pathname === "/fssd-s5" && downloadBrochure) ||
          // (router.pathname === "/fswd-s5" && downloadBrochure) ||
          (router.pathname === "/w2a-s2" && downloadBrochure) ||
          (router.pathname === "/dsa-s4" && downloadBrochure) ||
          (router.pathname === "/dsa-s5" && downloadBrochure) ||
          (router.pathname === "/generic" && downloadBrochure) ||
          (router.pathname === "/fullstack/fswd-s2" && downloadBrochure) ||
          (router.pathname === "/fullstack/system-design-s2" &&
            downloadBrochure) ||
          (router.pathname === "/full-stack-software-development-program" &&
            downloadBrochure) ||
          (router.pathname === "/apply-for-counselling" && downloadBrochure) ||
          (router.pathname === "/full-stack-web-development-program" &&
            downloadBrochure) ||
          (router.pathname === "/dsa-system-design" && downloadBrochure) ||
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
          (router.pathname === "/job-guarantee-or-money-back-data-science-ai" &&
            downloadBrochure) ||
          (router.pathname === "/data-science-ai-masters-program" &&
            downloadBrochure) ||
          (router.pathname === "/datascience/data-science-ai-masters-program" &&
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
          (router.pathname === "/s6-data-science-generic" &&
            downloadBrochure) ||
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

        if (
          router.pathname === "/fssd" ||
          router.pathname === "/fullstack/fssd" ||
          router.pathname === "/fswd" ||
          router.pathname === "/fullstack/fswd" ||
          router.pathname === "/dsa" ||
          router.pathname === "/fullstack/dsa" ||
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
          router.pathname === "/fssd-s4" ||
          // router.pathname === "/fswd-s4" ||
          router.pathname === "/fssd-s5" ||
          // router.pathname === "/fswd-s5" ||
          router.pathname === "/w2a-s2" ||
          router.pathname === "/dsa-s4" ||
          router.pathname === "/dsa-s5" ||
          router.pathname === "/generic" ||
          router.pathname === "/s6" ||
          router.pathname === "/fullstack/fswd-s2" ||
          router.pathname === "/fullstack/system-design-s2" ||
          router.pathname === "/full-stack-software-development-program" ||
          router.pathname === "/full-stack-web-development-program" ||
          router.pathname === "/apply-for-counselling-fsd-s2" ||
          router.pathname === "/fullstack/apply-for-counselling-fsd-s2" ||
          router.pathname === "/s3-data-science" ||
          router.pathname ===
            "/fullstack/data-structure-course-java-python-s2" ||
          router.pathname ===
            "/fullstack/data-structures-algorithms-syllabus-s2" ||
          router.pathname ===
            "/fullstack/data-structures-and-algorithms-course-s2" ||
          router.pathname === "/fullstack/data-structure-algorithm-s2" ||
          router.pathname === "/system-design-s2" ||
          router.pathname === "/dsa-system-design" ||
          router.pathname ===
            "/job-guarantee-or-money-back-data-science-ai-s2" ||
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
          router.pathname === "/bangalore/s2-data-analytics-training-generic" ||
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
          router.pathname ===
            "/hyderabad/s2-artificial-intelligence-training" ||
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
        if (s2dataScience) {
          router.push("/Thank-you");

          return;
        }

        if (fullstackADS) {
          router.push("/Thank-you");

          return;
        }
      }
    } else {
      setToggle(false);
      setAlertMSG("Please Enter Empty Fields");
      // console.log("please enter number")
    }
  };

  const formSubmit = (e) => {
    e.preventDefault();
    setSendOtpBtnHide(true);
    setBtnHide(true);
    const formData = new FormData();

    Object.entries(form).forEach(([key, value]) => {
      formData.append(key, value);
      // console.log("key-", key, "-----", "value-", value)
    });

    const mobileNumber = updateMobileNumber;
    const otp = form.otp;

    if (radioBtn == 5 || radioBtn == 3) {
      setToggle(false);
      setAlertMSG("Sorry! You are not eligible");
      return false;
    }
    const data = fetch(`${"/api/Authentication/matchOtp"}`, {
      method: "POST",
      body: JSON.stringify({ mobileNumber: mobileNumber, otp: otp }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((response) => {
        // console.log("Response", response)

        if (response.msg == "OTP Validated Successfully") {
          setToggle(false);
          setAlertMSG("OTP Validated Successfully");
          setSendOtpBtnHide(false);
          setBtnHide(false);

          fetch(`${endPoint}`, {
            method: "POST",
            body: formData,
          });
          setDisable(true);
          // console.log("@@@@@@@CHECKCHCECE",event)
          if (event) {
            router.push("/Thank-you-fsd-webinar");
          }

          // console.log("@@@@@@@CHECKCHCECE")
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
            // (router.pathname === "/fswd-s4" && downloadBrochure) ||
            (router.pathname === "/fssd-s5" && downloadBrochure) ||
            // (router.pathname === "/fswd-s5" && downloadBrochure) ||
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
            (router.pathname === "/dsa-system-design" && downloadBrochure)
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
            // router.pathname === "/fswd-s4" ||
            router.pathname === "/fssd-s5" ||
            // router.pathname === "/fswd-s5" ||
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
            router.pathname === "/dsa-system-design"
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

          setSendOtpBtnHide(true);
          setBtnHide(true);
        } else if (response.msg == "OTP Not Validate") {
          setToggle(false);
          setAlertMSG("OTP Not Validate");
          setSendOtpBtnHide(true);
          setBtnHide(true);
        } else if (response.msg == "OTP Expired") {
          setSendOtpBtnHide(false);
          setBtnHide(false);
        } else if (response.msg == "Invalid Phone Number") {
          setToggle(false);
          setAlertMSG("Invalid Phone Number");
          setSendOtpBtnHide(false);
          setBtnHide(false);
        } else {
          console.log("API IS NOT WORKING");
        }
      })
      .catch((err) => {
        console.log("API IS NOT WORKING");
        console.log(err);
      });
  };

  return (
    <>
      <section className={styles.App}>
        <form autoComplete="false" onSubmit={formSubmit} method="POST">
          <div className={styles.formWrapper}>
            <input
              className={popup ? styles.NameInputs : styles.NameInput}
              type="text"
              name="name"
              value={form.name}
              onChange={handleForm}
              placeholder="Enter your full name*"
              style={{ borderBottom: "1px solid grey" }}
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

          {jobDescription ? (
            ""
          ) : (
            <div className={styles.formWrapper}>
              <input
                className={popup ? styles.EmailInputs : styles.EmailInput}
                placeholder={
                  fsddesc ? "Job Title or Domain*" : "Job Description*"
                }
                type="text"
                name="jobDescription"
                value={form.jobDescription}
                onChange={handleForm}
                required={true}
              />
            </div>
          )}

          {jobTitle ? (
            <div className={popup ? styles.formWrappers : styles.formWrapper}>
              <input
                className={popup ? styles.EmailInputs : styles.EmailInput}
                placeholder={
                  fsddesc ? "Job Title or Domain*" : "Job Description*"
                }
                type="text"
                list="jobDescription"
                name="jobDescription"
                value={form.jobDescription}
                onChange={handleForm}
                required={true}
              />
              <datalist id="jobDescription">
                <option value="" selected="selected" disabled="disabled">
                  -- select one --
                </option>
                <option value="Banking and Finance (BFSI)">
                  Banking and Finance (BFSI)
                </option>
                <option value="Marketing and Sales">Marketing and Sales</option>
                <option value="Healthcare">Healthcare</option>
                <option value="Retail and E-Commerce">
                  Retail and E-Commerce
                </option>
                <option value="Manufacturing">Manufacturing</option>
                <option value="Energy, Oil and Gas">Energy, Oil and Gas</option>
                <option value="Human Resources">Human Resources</option>
                <option value="IT/Software Development">
                  IT/Software Development
                </option>
                <option value="Other">Other</option>
              </datalist>
            </div>
          ) : (
            ""
          )}

          {workExperience ? (
            ""
          ) : (
            <div className={popup ? styles.formWrappers : styles.formWrapper}>
              <select
                name="workExperience"
                required={true}
                value={form.workExperience}
                onChange={handleForm}
              >
                <option value="Work Experience">Work Experience</option>
                <option value="Fresher or 0 year">Fresher or 0 year</option>
                <option value="1 to 3 year">1 to 3 year</option>
                <option value="3 to 7 year">3 to 7 year</option>
                <option value="7 to 12 year">7 to 12 year</option>
                <option value="12+ year">12+ year</option>
              </select>
            </div>
          )}

          {currentCompany ? (
            <div className={styles.formWrapper}>
              <input
                className={popup ? styles.EmailInputs : styles.EmailInput}
                placeholder="Current Company*"
                type="text"
                name="currentCompany"
                value={form.currentCompany}
                onChange={handleForm}
                required={true}
              />
            </div>
          ) : (
            ""
          )}

          {brief ? (
            <div className={styles.formWrapper}>
              <input
                className={popup ? styles.EmailInputs : styles.EmailInput}
                placeholder="Brief*"
                type="text"
                name="brief"
                value={form.brief}
                onChange={handleForm}
                required={true}
              />
            </div>
          ) : (
            ""
          )}

          {QuesMean ? (
            <div className={popup ? styles.formWrappers : styles.formWrapper}>
              <label>
                Find the average value of :- <b>20, 30, 10, 20</b>
              </label>
              <br />
              <div style={{ display: "flex" }}>
                <input
                  id="15"
                  value="15"
                  name="MeanValue"
                  required={true}
                  type="radio"
                  onChange={handleForm}
                />
                15&nbsp;
                <br />
                <input
                  id="10"
                  value="10"
                  name="MeanValue"
                  required={true}
                  type="radio"
                  onChange={handleForm}
                />
                10&nbsp;
                <br />
                <input
                  id="20"
                  value="20"
                  name="MeanValue"
                  required={true}
                  type="radio"
                  onChange={handleForm}
                />
                20
              </div>
            </div>
          ) : (
            ""
          )}

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
                      border: "0",
                      height: "50px",
                      borderRadius: "3px",
                      borderBottom: "1px solid grey",
                    }
              }
              name="phone"
              rules={{ required: true }}
              defaultCountry="IN"
              placeholder="Enter phone number*"
              className={popup ? styles.Phones : styles.Phone}
              value={value}
              onChange={setValue}
              limitMaxLength={true}
              required={true}
            />
          </div>

          {grad ? (
            <div className={popup ? styles.formWrappers : styles.formWrapper}>
              <input
                className={popup ? styles.NameInputs : styles.NameInput}
                type="text"
                name="jobDescription"
                placeholder="Job Description*"
                onChange={handleForm}
                value={query.jobDescription}
                required={true}
                style={{ borderBottom: "1px solid grey" }}
              />
            </div>
          ) : (
            ""
          )}
          {grad ? (
            <div className={popup ? styles.formWrappers : styles.formWrapper}>
              <label>Graduation year*</label>
              <input
                type="number"
                name="GraduationYear"
                placeholder="Enter year"
                onChange={handleForm}
                minLength={4}
                maxLength={4}
                required={true}
                className={popup ? styles.NameInputs : styles.NameInput}
              />
            </div>
          ) : (
            ""
          )}

          {grad ? (
            <div className={popup ? styles.formWrappers : styles.formWrapper}>
              <label>Rate your programming skills*</label>
              <input
                type="number"
                name="ProgrammingSkills"
                onChange={handleForm}
                placeholder="Rate between 1 to 10"
                required={true}
                maxLength="2"
                className={popup ? styles.NameInputs : styles.NameInput}
              />
            </div>
          ) : (
            ""
          )}

          {btnHide ? (
            <div className={styles.formWrapper}>
              <input
                style={
                  popup
                    ? {
                        height: "50px",
                        borderRadius: "8px",
                        border: "1px solid grey",
                        padding: "10px",
                        marginBottom: "0px",
                        width: "100%",
                      }
                    : {
                        border: "0",
                        height: "50px",
                        borderRadius: "3px",
                        width: "100%",
                        marginBottom: "0px",
                        borderBottom: "1px solid grey",
                      }
                }
                className={popup ? styles.Phones : styles.Phone}
                type="text"
                name="otp"
                value={form.otp}
                onChange={handleForm}
                required={true}
                placeholder="Enter OTP"
                maxLength={4}
                minLength={4}
              />
            </div>
          ) : (
            ""
          )}

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

          {scholarship ? (
            <div className={popup ? styles.formWrappers : styles.formWrapper}>
              <input
                id="Scholarship"
                value="Scholarship"
                name="Scholarship"
                type="checkbox"
                required={true}
                onChange={handleForm}
              />
              Apply for Scholarship
            </div>
          ) : (
            ""
          )}

          {eventRadio ? (
            <div className={popup ? styles.formWrappers : styles.formWrapper}>
              <label>
                What is the output of <b>10 % 3 ?</b>
              </label>
              <br />
              <div style={{ display: "flex" }}>
                <input
                  id="4"
                  value="4"
                  name="platform"
                  required={true}
                  type="radio"
                  onChange={handleRadio}
                />
                4&nbsp;
                <br />
                <input
                  id="2"
                  value="2"
                  name="platform"
                  required={true}
                  type="radio"
                  onChange={handleRadio}
                />
                2&nbsp;
                <br />
                <input
                  id="1"
                  value="1"
                  name="platform"
                  required={true}
                  type="radio"
                  onChange={handleRadio}
                />
                1&nbsp; <br />
                <input
                  id="3"
                  value="3"
                  name="platform"
                  required={true}
                  type="radio"
                  onChange={handleRadio}
                />
                3&nbsp; <br />
              </div>
            </div>
          ) : (
            ""
          )}

          <div>{toggle ? "" : <p className={styles.alert}>{alertMSG}</p>}</div>

          <p className={styles.FormText} style={{ fontSize: "10px" }}>
            By submitting the form, you agree to our Terms and Conditions and
            our Privacy Policy.
          </p>

          {sendOtpBtnHide ? (
            ""
          ) : (
            <div className={styles.button}>
              <button className={styles.button} onClick={sendOtp}>
                {downloadBrochure ? "Download Now" : "Apply Now"}
              </button>
            </div>
          )}

          {btnHide ? (
            <>
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
            </>
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

          <input type="hidden" id="zc_gad" name="zc_gad" value="" />
        </form>
      </section>
    </>
  );
}

export default FormOtp;
