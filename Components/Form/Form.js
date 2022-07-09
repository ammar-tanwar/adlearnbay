import React, { useState, useEffect } from "react";
import styles from "./Form.module.css";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { useRouter } from "next/router";

const Form = ({ popup, setTrigger, downloadBrochure }) => {
  const router = useRouter();
  let today = new Date();
  let time =
    today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

  //offset to maintain time zone difference

  const [value, setValue] = useState();
  const [query, setQuery] = useState({
    name: "",
    email: "",
    phone: "",
    workExperience: "",
    Brief: "",
    scheduleTime: "",
    url: router.asPath,
  });
  useEffect(() => {
    setQuery({ ...query, phone: value });
  }, [value]);

  // Update inputs value
  const handleParam = () => (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setQuery((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }; 

  let endPoint = "https://getform.io/f/85e92281-63f9-4d2f-b946-31d1098532f4";
  if (router.pathname === "/data-science-certification-courses") {
    endPoint = "https://getform.io/f/85e92281-63f9-4d2f-b946-31d1098532f4";
  }
  if (router.pathname === "/advance-ai-ml-certification") {
    endPoint = "https://getform.io/f/85e92281-63f9-4d2f-b946-31d1098532f4";
  }
  if (router.pathname === "/data-science-ai-cert-for-managers-leaders") {
    endPoint = "https://getform.io/f/85e92281-63f9-4d2f-b946-31d1098532f4";
  }
  if (router.pathname === "/data-science-certification-courses-sd") {
    endPoint = "https://getform.io/f/773095f3-b69e-4071-9ffb-b2d6c6261891";
  }
  if (router.pathname === "/advance-ai-ml-certification-sd") {
    endPoint = "https://getform.io/f/773095f3-b69e-4071-9ffb-b2d6c6261891";
  }
  if (router.pathname === "/data-science-ai-cert-for-managers-leaders-sd") {
    endPoint = "https://getform.io/f/773095f3-b69e-4071-9ffb-b2d6c6261891";
  }
  if (router.pathname === "/job-guarantee-or-money-back-data-science-ai-sd") {
    endPoint = "https://getform.io/f/773095f3-b69e-4071-9ffb-b2d6c6261891";
  }
  if (router.pathname === "/data-science-certification-courses-s2") {
    endPoint = "https://getform.io/f/c803e186-7053-4f33-9f49-909cc11e32bc";
  }
  if (router.pathname === "/advance-ai-ml-certification-s2") {
    endPoint = "https://getform.io/f/c803e186-7053-4f33-9f49-909cc11e32bc";
  }
  if (router.pathname === "/data-science-ai-cert-for-managers-leaders-s2") {
    endPoint = "https://getform.io/f/c803e186-7053-4f33-9f49-909cc11e32bc";
  }
  if (router.pathname === "/job-guarantee-or-money-back-data-science-ai-s2") {
    endPoint = "https://getform.io/f/c803e186-7053-4f33-9f49-909cc11e32bc";
  }
  if (router.pathname === "/data-science-certification-courses-s2d") {
    endPoint = "https://getform.io/f/773095f3-b69e-4071-9ffb-b2d6c6261891";
  }
  if (router.pathname === "/advance-ai-ml-certification-s2d") {
    endPoint = "https://getform.io/f/773095f3-b69e-4071-9ffb-b2d6c6261891";
  }
  if (router.pathname === "/data-science-ai-cert-for-managers-leaders-s2d") {
    endPoint = "https://getform.io/f/773095f3-b69e-4071-9ffb-b2d6c6261891";
  }
  if (router.pathname === "/job-guarantee-or-money-back-data-science-ai-s2d") {
    endPoint = "https://getform.io/f/773095f3-b69e-4071-9ffb-b2d6c6261891";
  }
  if (router.pathname === "/data-science-certification-courses-s3") {
    endPoint = "https://getform.io/f/a876146f-2c5d-4a1f-b177-f993db3d7aaf";
  }
  if (router.pathname === "/advance-ai-ml-certification-s3") {
    endPoint = "https://getform.io/f/a876146f-2c5d-4a1f-b177-f993db3d7aaf";
  }
  if (router.pathname === "/data-science-ai-cert-for-managers-leaders-s3") {
    endPoint = "https://getform.io/f/a876146f-2c5d-4a1f-b177-f993db3d7aaf";
  }
  if (router.pathname === "/job-guarantee-or-money-back-data-science-ai-s3") {
    endPoint = "https://getform.io/f/a876146f-2c5d-4a1f-b177-f993db3d7aaf";
  }
  if (router.pathname === "/data-science-certification-courses-s3d") {
    endPoint = "https://getform.io/f/773095f3-b69e-4071-9ffb-b2d6c6261891";
  }
  if (router.pathname === "/advance-ai-ml-certification-s3d") {
    endPoint = "https://getform.io/f/773095f3-b69e-4071-9ffb-b2d6c6261891";
  }
  if (router.pathname === "/data-science-ai-cert-for-managers-leaders-s3d") {
    endPoint = "https://getform.io/f/773095f3-b69e-4071-9ffb-b2d6c6261891";
  }
  if (router.pathname === "/job-guarantee-or-money-back-data-science-ai-s3d") {
    endPoint = "https://getform.io/f/773095f3-b69e-4071-9ffb-b2d6c6261891";
  }
  if (router.pathname === "/data-science-certification-courses-s4") {
    endPoint = "https://getform.io/f/1cfd5db8-ec05-4d26-b05f-6b73a81ebf89";
  }
  if (router.pathname === "/advance-ai-ml-certification-s4") {
    endPoint = "https://getform.io/f/1cfd5db8-ec05-4d26-b05f-6b73a81ebf89";
  }
  if (router.pathname === "/data-science-ai-cert-for-managers-leaders-s4") {
    endPoint = "https://getform.io/f/1cfd5db8-ec05-4d26-b05f-6b73a81ebf89";
  }
  if (router.pathname === "/job-guarantee-or-money-back-data-science-ai-s4") {
    endPoint = "https://getform.io/f/1cfd5db8-ec05-4d26-b05f-6b73a81ebf89";
  }
  if (router.pathname === "/data-science-certification-courses-s4d") {
    endPoint = "https://getform.io/f/773095f3-b69e-4071-9ffb-b2d6c6261891";
  }
  if (router.pathname === "/advance-ai-ml-certification-s4d") {
    endPoint = "https://getform.io/f/773095f3-b69e-4071-9ffb-b2d6c6261891";
  }
  if (router.pathname === "/data-science-ai-cert-for-managers-leaders-s4d") {
    endPoint = "https://getform.io/f/773095f3-b69e-4071-9ffb-b2d6c6261891";
  }
  if (router.pathname === "/job-guarantee-or-money-back-data-science-ai-s4d") {
    endPoint = "https://getform.io/f/773095f3-b69e-4071-9ffb-b2d6c6261891";
  }
  if (router.pathname === "/data-science-certification-courses-s5") {
    endPoint = "https://getform.io/f/9c5b2164-1f56-4150-ad53-7944d6fe4363";
  }
  if (router.pathname === "/advance-ai-ml-certification-s5") {
    endPoint = "https://getform.io/f/9c5b2164-1f56-4150-ad53-7944d6fe4363";
  }
  if (router.pathname === "/data-science-ai-cert-for-managers-leaders-s5") {
    endPoint = "https://getform.io/f/9c5b2164-1f56-4150-ad53-7944d6fe4363";
  }
  if (router.pathname === "/job-guarantee-or-money-back-data-science-ai-s5") {
    endPoint = "https://getform.io/f/9c5b2164-1f56-4150-ad53-7944d6fe4363";
  }
  if (router.pathname === "/data-science-certification-courses-s6") {
    endPoint = "https://getform.io/f/1c8cf486-31ef-4a7f-95b0-45c5f21e7b29";
  }
  if (router.pathname === "/advance-ai-ml-certification-s6") {
    endPoint = "https://getform.io/f/1c8cf486-31ef-4a7f-95b0-45c5f21e7b29";
  }
  if (router.pathname === "/data-science-ai-cert-for-managers-leaders-s6") {
    endPoint = "https://getform.io/f/1c8cf486-31ef-4a7f-95b0-45c5f21e7b29";
  }
  if (router.pathname === "/job-guarantee-or-money-back-data-science-ai-s6") {
    endPoint = "https://getform.io/f/1c8cf486-31ef-4a7f-95b0-45c5f21e7b29";
  }
  if (router.pathname === "/data-science-certification-courses-s7") {
    endPoint = "https://getform.io/f/a0a0fb5b-0cba-4b29-9d35-03c35d0e0d28";
  }
  if (router.pathname === "/advance-ai-ml-certification-s7") {
    endPoint = "https://getform.io/f/a0a0fb5b-0cba-4b29-9d35-03c35d0e0d28";
  }
  if (router.pathname === "/data-science-ai-cert-for-managers-leaders-s7") {
    endPoint = "https://getform.io/f/a0a0fb5b-0cba-4b29-9d35-03c35d0e0d28";
  }
  if (router.pathname === "/job-guarantee-or-money-back-data-science-ai-s7") {
    endPoint = "https://getform.io/f/a0a0fb5b-0cba-4b29-9d35-03c35d0e0d28";
  }
  if (router.pathname === "/full-stack-software-development-program") {
    endPoint = "https://getform.io/f/fd9da107-864c-4617-a52a-7e112297efa6";
  }
  if (router.pathname === "/full-stack-web-development-program") {
    endPoint = "https://getform.io/f/fd9da107-864c-4617-a52a-7e112297efa6";
  }
  if (router.pathname === "/fssd-s1") {
    endPoint = "https://getform.io/f/ed085811-855e-40b4-9288-680e32dbba13";
  }
  if (router.pathname === "/fswd-s1") {
    endPoint = "https://getform.io/f/ed085811-855e-40b4-9288-680e32dbba13";
  }
  if (router.pathname === "/apply-for-counselling") {
    endPoint = "https://getform.io/f/94c74039-f505-4ebf-922e-b4728bd793e3";
  }
  if (router.pathname === "/apply-for-counselling-data-science") {
    endPoint = "https://getform.io/f/1cfd5db8-ec05-4d26-b05f-6b73a81ebf89";
  }


  // Form Submit function
  const formSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    Object.entries(query).forEach(([key, value]) => {
      formData.append(key, value);
    });
    fetch(`${endPoint}`, {
      method: "POST",
      body: formData,
    }).then(() =>
      setQuery({
        name: "",
        email: "",
        phone: "",
        workExperience: "",
        scheduleTime: "",
        url: "",
      })
    );
    if (popup) {
      const off = () => {
        setTrigger(false);
      };
      off();
    }

    if (router.pathname === "/data-science-certification-courses") {
      router.push("/Thank-you");
      return;
    }
    if(router.pathname === "/data-science-certification-courses" && downloadBrochure){
      router.push("/Thank-you-brochure");
      return;
    }
    if (router.pathname === "/advance-ai-ml-certification") {
      router.push("/Thank-you");
      return;
    }
    if(router.pathname === "/advance-ai-ml-certification" && downloadBrochure){
      router.push("/Thank-you-brochure");
      return;
    }
    if (router.pathname === "/data-science-ai-cert-for-managers-leaders") {
      router.push("/Thank-you");
      return;
    }
    if (router.pathname === "/data-science-ai-cert-for-managers-leaders" && downloadBrochure) {
      router.push("/Thank-you-brochure");
      return;
    }
    if (router.pathname === "/") {
      router.push("/Thank-you");
    }
    if (router.pathname === "/" && downloadBrochure) {
      router.push("/Thank-you-brochure");
      return;
    }
    if (router.pathname === "/data-science-certification-courses-sd") {
      router.push("/Thank-you");
      return;
    }
    if(router.pathname === "/data-science-certification-courses-sd" && downloadBrochure){
      router.push("/Thank-you-brochure");
      return;
    }
    if (router.pathname === "/advance-ai-ml-certification-sd") {
      router.push("/Thank-you");
      return;
    }
    if(router.pathname === "/advance-ai-ml-certification-sd" && downloadBrochure){
      router.push("/Thank-you-brochure");
      return;
    }
    if (router.pathname === "/data-science-ai-cert-for-managers-leaders-sd") {
      router.push("/Thank-you");
      return;
    }
    if (router.pathname === "/data-science-ai-cert-for-managers-leaders-sd" && downloadBrochure) {
      router.push("/Thank-you-brochure");
      return;
    }
    if (router.pathname === "/job-guarantee-or-money-back-data-science-ai-sd") {
      router.push("/Thank-you");
    }
    if (router.pathname === "/job-guarantee-or-money-back-data-science-ai-sd" && downloadBrochure) {
      router.push("/Thank-you-brochure");
      return;
    }
    if (router.pathname === "/data-science-certification-courses-s2") {
      router.push("/Thank-you");
      return;
    }
    if(router.pathname === "/data-science-certification-courses-s2" && downloadBrochure){
      router.push("/Thank-you-brochure");
      return;
    }
    if (router.pathname === "/advance-ai-ml-certification-s2") {
      router.push("/Thank-you");
      return;
    }
    if(router.pathname === "/advance-ai-ml-certification-s2" && downloadBrochure){
      router.push("/Thank-you-brochure");
      return;
    }
    if (router.pathname === "/data-science-ai-cert-for-managers-leaders-s2") {
      router.push("/Thank-you");
      return;
    }
    if (router.pathname === "/data-science-ai-cert-for-managers-leaders-s2" && downloadBrochure) {
      router.push("/Thank-you-brochure");
      return;
    }
    if (router.pathname === "/job-guarantee-or-money-back-data-science-ai-s2") {
      router.push("/Thank-you");
    }
    if (router.pathname === "/job-guarantee-or-money-back-data-science-ai-s2" && downloadBrochure) {
      router.push("/Thank-you-brochure");
      return;
    }
    if (router.pathname === "/data-science-certification-courses-s2d") {
      router.push("/Thank-you");
      return;
    }
    if(router.pathname === "/data-science-certification-courses-s2d" && downloadBrochure){
      router.push("/Thank-you-brochure");
      return;
    }
    if (router.pathname === "/advance-ai-ml-certification-s2d") {
      router.push("/Thank-you");
      return;
    }
    if(router.pathname === "/advance-ai-ml-certification-s2d" && downloadBrochure){
      router.push("/Thank-you-brochure");
      return;
    }
    if (router.pathname === "/data-science-ai-cert-for-managers-leaders-s2d") {
      router.push("/Thank-you");
      return;
    }
    if (router.pathname === "/data-science-ai-cert-for-managers-leaders-s2d" && downloadBrochure) {
      router.push("/Thank-you-brochure");
      return;
    }
    if (router.pathname === "/job-guarantee-or-money-back-data-science-ai-s2d") {
      router.push("/Thank-you");
    }
    if (router.pathname === "/job-guarantee-or-money-back-data-science-ai-s2d" && downloadBrochure) {
      router.push("/Thank-you-brochure");
      return;
    }
    if (router.pathname === "/data-science-certification-courses-s3") {
      router.push("/Thank-you");
      return;
    }
    if(router.pathname === "/data-science-certification-courses-s3" && downloadBrochure){
      router.push("/Thank-you-brochure");
      return;
    }
    if (router.pathname === "/advance-ai-ml-certification-s3") {
      router.push("/Thank-you");
      return;
    }
    if(router.pathname === "/advance-ai-ml-certification-s3" && downloadBrochure){
      router.push("/Thank-you-brochure");
      return;
    }
    if (router.pathname === "/data-science-ai-cert-for-managers-leaders-s3") {
      router.push("/Thank-you");
      return;
    }
    if (router.pathname === "/data-science-ai-cert-for-managers-leaders-s3" && downloadBrochure) {
      router.push("/Thank-you-brochure");
      return;
    }
    if (router.pathname === "/job-guarantee-or-money-back-data-science-ai-s3") {
      router.push("/Thank-you");
    }
    if (router.pathname === "/job-guarantee-or-money-back-data-science-ai-s3" && downloadBrochure) {
      router.push("/Thank-you-brochure");
      return;
    }
    if (router.pathname === "/data-science-certification-courses-s3d") {
      router.push("/Thank-you");
      return;
    }
    if(router.pathname === "/data-science-certification-courses-s3d" && downloadBrochure){
      router.push("/Thank-you-brochure");
      return;
    }
    if (router.pathname === "/advance-ai-ml-certification-s3d") {
      router.push("/Thank-you");
      return;
    }
    if(router.pathname === "/advance-ai-ml-certification-s3d" && downloadBrochure){
      router.push("/Thank-you-brochure");
      return;
    }
    if (router.pathname === "/data-science-ai-cert-for-managers-leaders-s3d") {
      router.push("/Thank-you");
      return;
    }
    if (router.pathname === "/data-science-ai-cert-for-managers-leaders-s3d" && downloadBrochure) {
      router.push("/Thank-you-brochure");
      return;
    }
    if (router.pathname === "/job-guarantee-or-money-back-data-science-ai-s3d") {
      router.push("/Thank-you");
    }
    if (router.pathname === "/job-guarantee-or-money-back-data-science-ai-s3d" && downloadBrochure) {
      router.push("/Thank-you-brochure");
      return;
    }
    if (router.pathname === "/data-science-certification-courses-s4") {
      router.push("/Thank-you");
      return;
    }
    if(router.pathname === "/data-science-certification-courses-s4" && downloadBrochure){
      router.push("/Thank-you-brochure");
      return;
    }
    if (router.pathname === "/advance-ai-ml-certification-s4") {
      router.push("/Thank-you");
      return;
    }
    if(router.pathname === "/advance-ai-ml-certification-s4" && downloadBrochure){
      router.push("/Thank-you-brochure");
      return;
    }
    if (router.pathname === "/data-science-ai-cert-for-managers-leaders-s4") {
      router.push("/Thank-you");
      return;
    }
    if (router.pathname === "/data-science-ai-cert-for-managers-leaders-s4" && downloadBrochure) {
      router.push("/Thank-you-brochure");
      return;
    }
    if (router.pathname === "/job-guarantee-or-money-back-data-science-ai-s4") {
      router.push("/Thank-you");
    }
    if (router.pathname === "/job-guarantee-or-money-back-data-science-ai-s4" && downloadBrochure) {
      router.push("/Thank-you-brochure");
      return;
    }
    if (router.pathname === "/data-science-certification-courses-s4d") {
      router.push("/Thank-you");
      return;
    }
    if(router.pathname === "/data-science-certification-courses-s4d" && downloadBrochure){
      router.push("/Thank-you-brochure");
      return;
    }
    if (router.pathname === "/advance-ai-ml-certification-s4d") {
      router.push("/Thank-you");
      return;
    }
    if(router.pathname === "/advance-ai-ml-certification-s4d" && downloadBrochure){
      router.push("/Thank-you-brochure");
      return;
    }
    if (router.pathname === "/data-science-ai-cert-for-managers-leaders-s4d") {
      router.push("/Thank-you");
      return;
    }
    if (router.pathname === "/data-science-ai-cert-for-managers-leaders-s4d" && downloadBrochure) {
      router.push("/Thank-you-brochure");
      return;
    }
    if (router.pathname === "/job-guarantee-or-money-back-data-science-ai-s4d") {
      router.push("/Thank-you");
    }
    if (router.pathname === "/job-guarantee-or-money-back-data-science-ai-s4d" && downloadBrochure) {
      router.push("/Thank-you-brochure");
      return;
    }
    if (router.pathname === "/data-science-certification-courses-s5") {
      router.push("/Thank-you");
      return;
    }
    if(router.pathname === "/data-science-certification-courses-s5" && downloadBrochure){
      router.push("/Thank-you-brochure");
      return;
    }
    if (router.pathname === "/advance-ai-ml-certification-s5") {
      router.push("/Thank-you");
      return;
    }
    if(router.pathname === "/advance-ai-ml-certification-s5" && downloadBrochure){
      router.push("/Thank-you-brochure");
      return;
    }
    if (router.pathname === "/data-science-ai-cert-for-managers-leaders-s5") {
      router.push("/Thank-you");
      return;
    }
    if (router.pathname === "/data-science-ai-cert-for-managers-leaders-s5" && downloadBrochure) {
      router.push("/Thank-you-brochure");
      return;
    }
    if (router.pathname === "/job-guarantee-or-money-back-data-science-ai-s5") {
      router.push("/Thank-you");
    }
    if (router.pathname === "/job-guarantee-or-money-back-data-science-ai-s5" && downloadBrochure) {
      router.push("/Thank-you-brochure");
      return;
    }
    if (router.pathname === "/data-science-certification-courses-s6") {
      router.push("/Thank-you");
      return;
    }
    if(router.pathname === "/data-science-certification-courses-s6" && downloadBrochure){
      router.push("/Thank-you-brochure");
      return;
    }
    if (router.pathname === "/advance-ai-ml-certification-s6") {
      router.push("/Thank-you");
      return;
    }
    if(router.pathname === "/advance-ai-ml-certification-s6" && downloadBrochure){
      router.push("/Thank-you-brochure");
      return;
    }
    if (router.pathname === "/data-science-ai-cert-for-managers-leaders-s6") {
      router.push("/Thank-you");
      return;
    }
    if (router.pathname === "/data-science-ai-cert-for-managers-leaders-s6" && downloadBrochure) {
      router.push("/Thank-you-brochure");
      return;
    }
    if (router.pathname === "/job-guarantee-or-money-back-data-science-ai-s6") {
      router.push("/Thank-you");
    }
    if (router.pathname === "/job-guarantee-or-money-back-data-science-ai-s6" && downloadBrochure) {
      router.push("/Thank-you-brochure");
      return;
    }
    if (router.pathname === "/data-science-certification-courses-s7") {
      router.push("/Thank-you");
      return;
    }
    if(router.pathname === "/data-science-certification-courses-s7" && downloadBrochure){
      router.push("/Thank-you-brochure");
      return;
    }
    if (router.pathname === "/advance-ai-ml-certification-s7") {
      router.push("/Thank-you");
      return;
    }
    if(router.pathname === "/advance-ai-ml-certification-s7" && downloadBrochure){
      router.push("/Thank-you-brochure");
      return;
    }
    if (router.pathname === "/data-science-ai-cert-for-managers-leaders-s7") {
      router.push("/Thank-you");
      return;
    }
    if (router.pathname === "/data-science-ai-cert-for-managers-leaders-s7" && downloadBrochure) {
      router.push("/Thank-you-brochure");
      return;
    }
    if (router.pathname === "/job-guarantee-or-money-back-data-science-ai-s7") {
      router.push("/Thank-you");
    }
    if (router.pathname === "/job-guarantee-or-money-back-data-science-ai-s7" && downloadBrochure) {
      router.push("/Thank-you-brochure");
      return;
    }
    if (router.pathname === "/full-stack-software-development-program") {
      router.push("/Thank-you-w");
    }
    if (router.pathname === "/full-stack-software-development-program" && downloadBrochure) {
      router.push("/Thank-you-brochure-w");
      return;
    }
    if (router.pathname === "/full-stack-web-development-program") {
      router.push("/Thank-you-w");
    }
    if (router.pathname === "/full-stack-web-development-program" && downloadBrochure) {
      router.push("/Thank-you-brochure-w");
      return;
    }
    if (router.pathname === "/fssd-s1") {
      router.push("/Thank-you");
    }
    if (router.pathname === "/fssd-s1" && downloadBrochure) {
      router.push("/Thank-you-brochure");
      return;
    }
    if (router.pathname === "/fswd-s1") {
      router.push("/Thank-you");
    }
    if (router.pathname === "/fswd-s1" && downloadBrochure) {
      router.push("/Thank-you-brochure");
      return;
    }
    if (router.pathname === "/apply-for-counselling") {
      router.push("/Thank-you-fs");
    }
    if (router.pathname === "/apply-for-counselling" && downloadBrochure) {
      router.push("/Thank-you-fs");
      return;
    }
    if (router.pathname === "/apply-for-counselling-data-science") {
      router.push("/Thank-you");
    }
    if (router.pathname === "/apply-for-counselling-data-science" && downloadBrochure) {
      router.push("/Thank-you-brochure");
      return;
    }
  };
  const pastDates = () => {
    let today, dd, mm, yyyy;
    today = new Date();
    dd = (today.getDate() < 10 ? "0" : "") + today.getDate();
    mm = (today.getMonth() + 1).toString().padStart(2, "0");
    yyyy = today.getFullYear();
    return yyyy + "-" + mm + "-" + dd;
  };

  const maxDates = () => {
    let today, dd, mm, yyyy;
    today = new Date();
    dd = (today.getDate() < 10 ? "0" : "") + (today.getDate() + 4);
    mm = (today.getMonth() + 1).toString().padStart(2, "0");
    yyyy = today.getFullYear();
    return yyyy + "-" + mm + "-" + dd;
  };

  return (
    <div className={styles.App}>
      <form onSubmit={formSubmit}>
        <div className={styles.formWrapper}>
          <input
            type="text"
            name="name"
            className={popup ? styles.NameInputs : styles.NameInput}
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
            className={popup ? styles.EmailInputs : styles.EmailInput}
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
                    border: "0",
                    height: "50px",
                    borderRadius: "3px",
                    borderBottom: "1px solid grey",
                  }
            }
            name="phone"
            rules={{ required: true }}
            defaultCountry="IN"
            placeholder="Enter Phone Number"
            className={popup ? styles.Phones : styles.Phone}
            value={value}
            onChange={setValue}
            required
          />
        </div>
        <div className={popup ? styles.formWrappers : styles.formWrapper}>
          <select
            name="workExperience"
            required
            value={query.workExperience}
            onChange={handleParam()}
          >
            <option value="Work Experience">Work Experience</option>
            <option value="1 to 3 year">1 to 3 year</option>
            <option value="3 to 7 year">3 to 7 year</option>
            <option value="7 to 12 year">7 to 12 year</option>
            <option value="12+ year">12+ year</option>
          </select>
        </div>
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
<div className={popup ? styles.formWrappers : styles.formWrapper}>
        <input
            type="textarea"
            name="Brief"
            className={popup ? styles.NameInputs : styles.NameInput}
            placeholder="Job Description"
            value={query.Brief}
            style={{ borderBottom: "1px solid grey" }}
            onChange={handleParam()}
          />
        </div>
        <p className={styles.FormText} style={{ fontSize: "10px" }}>
          By submitting the form, you agree to our Terms and Conditions and our
          Privacy Policy.
        </p>
        <button type="submit" className={styles.button}>
          {downloadBrochure ? "Download Now" : "Apply Now"}
        </button>
      </form>
    </div>
  );
};

export default Form;
 