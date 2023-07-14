import React, { useState, useEffect } from "react";
import styles from "./FormOtp.module.css";
import Router, { useRouter } from "next/router";
import PhoneInput from "react-phone-number-input";
import jsCookie from "js-cookie";

function FormOtp({
  popup,
  radio,
  domain,
  downloadBrochure,
  jobDescription,
  workExperience,
  brief,
  currentCompany,
  fsddesc,
  eventRadio,
  QuesMean,
  jobTitle,
  event,
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
    phone: "",
    jobDescription: "",
    workExperience: "",
    currentCompany: "",
    brief: "",
    otp: "",
    url: router.asPath,
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
    router.pathname === "/fswd" ||
    router.pathname === "/dsa"
  ) {
    // -====================  Organic - S END POINT ==========================--------
    endPoint = "https://getform.io/f/85e92281-63f9-4d2f-b946-31d1098532f4";
    // -====================  Organic - S END POINT ==========================--------
  }

  if (router.pathname === "/s3-data-science") {
    // -==================== Google - S2 END POINT ==========================--------
    endPoint = "https://getform.io/f/c803e186-7053-4f33-9f49-909cc11e32bc";
    // -==================== Google - S2 END POINT ==========================--------
  }

  // -==================== FSD - Ads  END POINT ==========================--------
  if (
    router.pathname === "/fssd-s2" ||
    router.pathname === "/fssd-s4" ||
    router.pathname === "/fssd-s5" ||
    router.pathname === "/w2a-s2" ||
    router.pathname === "/dsa-s4" ||
    router.pathname === "/system-design-s2" ||
    router.pathname === "/apply-for-counselling-fsd-s2" ||
    router.pathname === "/dsa-s5"
  ) {
    // -====================  FSD - Ads END POINT ==========================--------
    endPoint = "https://getform.io/f/785b3539-e7ce-497c-a975-0dc288c3286c";

    // -====================  FSD - Ads END POINT ==========================--------
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
  if (domain) {
    // -==================== Webinar =  END POINT ==========================--------
    endPoint = "https://getform.io/f/69076866-e1f7-4cf3-a7d2-12603819a5a4";
    // -==================== Webinar = END POINT ==========================--------
  }

  if (event) {
    // -==================== Webinar =  END POINT ==========================--------
    endPoint = "https://getform.io/f/df003555-86c7-4ae5-a7f8-98c21dd9ad92";
    // -==================== Webinar = END POINT ==========================--------
  }

  if (router.pathname === "/info-webinar") {
    endPoint = "https://getform.io/f/c803e186-7053-4f33-9f49-909cc11e32bc";
  }

  let btnTxt = "Apply for  Counseliing";
  if (domain) {
    btnTxt = "Register Now";
  }
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
            phone: "",
            workExperience: "",
            otp: "",
            url: "",
          })
        );

        setDisable(true);
        if (domain) {
          router.push("/Thank-you-ds-webinar");
        }
        if (event) {
          router.push("/Thank-you-fsd-webinar");
        }
        if (
          (router.pathname === "/fssd" && downloadBrochure) ||
          (router.pathname === "/fswd" && downloadBrochure) ||
          (router.pathname === "/dsa" && downloadBrochure) ||
          (router.pathname === "/fssd-s2" && downloadBrochure) ||
          (router.pathname === "/fssd-s4" && downloadBrochure) ||
          // (router.pathname === "/fswd-s4" && downloadBrochure) ||
          (router.pathname === "/fssd-s5" && downloadBrochure) ||
          // (router.pathname === "/fswd-s5" && downloadBrochure) ||
          (router.pathname === "/w2a-s2" && downloadBrochure) ||
          (router.pathname === "/dsa-s4" && downloadBrochure) ||
          (router.pathname === "/dsa-s5" && downloadBrochure) ||
          (router.pathname === "/full-stack-software-development-program" &&
            downloadBrochure) ||
          (router.pathname === "/apply-for-counselling" && downloadBrochure) ||
          (router.pathname === "/full-stack-web-development-program" &&
            downloadBrochure) ||
          (router.pathname === "/dsa-system-design" && downloadBrochure)
        ) {
          router.push("/Thank-you");

          return;
        }

        if (
          router.pathname === "/fssd" ||
          router.pathname === "/info-webinar" ||
          router.pathname === "/fswd" ||
          router.pathname === "/dsa" ||
          router.pathname === "/fssd-s2" ||
          router.pathname === "/fssd-s4" ||
          // router.pathname === "/fswd-s4" ||
          router.pathname === "/fssd-s5" ||
          // router.pathname === "/fswd-s5" ||
          router.pathname === "/w2a-s2" ||
          router.pathname === "/dsa-s4" ||
          router.pathname === "/dsa-s5" ||
          router.pathname === "/full-stack-software-development-program" ||
          router.pathname === "/full-stack-web-development-program" ||
          router.pathname === "/apply-for-counselling-fsd-s2" ||
          router.pathname === "/s3-data-science" ||
          router.pathname === "/system-design-s2" ||
          router.pathname === "/dsa-system-design"
        ) {
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
          if (domain) {
            router.push("/Thank-you-ds-webinar");
          }

          if (event) {
            router.push("/Thank-you-fsd-webinar");
          }

          // console.log("@@@@@@@CHECKCHCECE")
          if (
            (router.pathname === "/fssd" && downloadBrochure) ||
            (router.pathname === "/fswd" && downloadBrochure) ||
            (router.pathname === "/dsa" && downloadBrochure) ||
            (router.pathname === "/fssd-s2" && downloadBrochure) ||
            (router.pathname === "/fssd-s4" && downloadBrochure) ||
            // (router.pathname === "/fswd-s4" && downloadBrochure) ||
            (router.pathname === "/fssd-s5" && downloadBrochure) ||
            // (router.pathname === "/fswd-s5" && downloadBrochure) ||
            (router.pathname === "/w2a-s2" && downloadBrochure) ||
            (router.pathname === "/dsa-s4" && downloadBrochure) ||
            (router.pathname === "/dsa-s5" && downloadBrochure) ||
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
            router.pathname === "/fssd" ||
            router.pathname === "/info-webinar" ||
            router.pathname === "/fswd" ||
            router.pathname === "/dsa" ||
            router.pathname === "/fssd-s2" ||
            router.pathname === "/fssd-s4" ||
            // router.pathname === "/fswd-s4" ||
            router.pathname === "/fssd-s5" ||
            // router.pathname === "/fswd-s5" ||
            router.pathname === "/w2a-s2" ||
            router.pathname === "/dsa-s4" ||
            router.pathname === "/dsa-s5" ||
            router.pathname === "/full-stack-software-development-program" ||
            router.pathname === "/full-stack-web-development-program" ||
            router.pathname === "/apply-for-counselling-fsd-s2" ||
            router.pathname === "/s3-data-science" ||
            router.pathname === "/system-design-s2" ||
            router.pathname === "/dsa-system-design"
          ) {
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
              placeholder="Enter your Full Name*"
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
              placeholder="Enter Your Email*"
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
                required
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
                required
              />
              <datalist id="jobDescription">
                <option value="" selected="selected" disabled="disabled">
                  -- select one --
                </option>
                <option value="Banking, Financial, Services and Insurance">
                  Banking, Financial, Services and Insurance
                </option>
                <option value="Marketing and Sales">Marketing and Sales</option>
                <option value="Healthcare">Healthcare</option>
                <option value="Retail and E-Commerce">
                  Retail and E-Commerce
                </option>
                <option value="Media and Hospitality">
                  Media and Hospitality
                </option>
                <option value="Manufacturing">Manufacturing</option>
                <option value="Energy, Oil and Gas">Energy, Oil and Gas</option>
                <option value="HR">HR</option>
                <option value="IT">IT</option>
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
                required
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
                required
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
                required
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
                  required
                  type="radio"
                  onChange={handleForm}
                />
                15&nbsp;
                <br />
                <input
                  id="10"
                  value="10"
                  name="MeanValue"
                  required
                  type="radio"
                  onChange={handleForm}
                />
                10&nbsp;
                <br />
                <input
                  id="20"
                  value="20"
                  name="MeanValue"
                  required
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
              name="phone"
              rules={{ required: true }}
              defaultCountry="IN"
              placeholder="Enter Phone Number"
              className={popup ? styles.Phones : styles.Phone}
              style={{ padding: "2px 2px" }}
              value={value}
              onChange={setValue}
              limitMaxLength={true}
              required
            />
          </div>

          {btnHide ? (
            <div className={styles.formWrapper}>
              <input
                className={popup ? styles.EmailInputs : styles.EmailInput}
                type="text"
                name="otp"
                value={form.otp}
                onChange={handleForm}
                required
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
                  required
                  type="radio"
                  onChange={handleRadio}
                />
                4&nbsp;
                <br />
                <input
                  id="2"
                  value="2"
                  name="platform"
                  required
                  type="radio"
                  onChange={handleRadio}
                />
                2&nbsp;
                <br />
                <input
                  id="1"
                  value="1"
                  name="platform"
                  required
                  type="radio"
                  onChange={handleRadio}
                />
                1&nbsp; <br />
                <input
                  id="3"
                  value="3"
                  name="platform"
                  required
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
                Apply Now
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
                    Apply Now
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
