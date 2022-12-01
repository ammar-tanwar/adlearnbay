
import React, { useState, useEffect } from "react";
import styles from './FormOtp.module.css'
import { useRouter } from "next/router";

function FormOtp({ popup }) {

  const router = useRouter();
  const [btnHide, setBtnHide] = useState(false)
  const [sendOtpBtnHide, setSendOtpBtnHide] = useState(false)
  const [toggleClass, setToggleClass] = useState(false);

  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    jobDescription: '',
    workExperience: '',
    otp: '',
    url: router.asPath,
  });

  useEffect(() => {
    setForm({ ...form });
  }, []);

  const handleForm = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setForm((formProps) => (
      {
        ...formProps,
        [name]: value,
      }
    ));
  };

  const annoyingSubmitButton = () => {
    if (form.phone.length < 10) {
      setToggleClass((prevState) => !prevState);
    }
  };

  let endPoint = "https://getform.io/f/85e92281-63f9-4d2f-b946-31d1098532f4";


  const sendOtp = (e) => {
    e.preventDefault();
    const mobileNumber = form.phone
    const data = fetch(`${"/api/Authentication/sendOtp"}`,
      {
        method: "POST",
        body: JSON.stringify({ mobileNumber: mobileNumber }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then(response => response.json())
      .then(response => {
        console.log("Response", response)
        alert("message Send")

        if (response.msg == 'OTP Sent Successfully') {
          setSendOtpBtnHide(true)
          setBtnHide(true)
        } else if (response.msg == 'OTP Sending Failed Through API') {
          setSendOtpBtnHide(false)
          setBtnHide(false)
        } else if (response.msg == "Mobile Number is Not Match from DataBase") {
          setSendOtpBtnHide(false)
          setBtnHide(false)
        } else if (response.msg == "Invalid Phone Number") {
          setSendOtpBtnHide(false)
          setBtnHide(false)
        } else {
          console.log("API IS NOT WORKING")
        }

      })
      .catch(err => {
        console.log("API IS NOT WORKING")
        console.log(err);
      });
  }

  const formSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    Object.entries(form).forEach(([key, value]) => {
      formData.append(key, value);
      console.log("key-", key, "-----", "value-", value)
    });
    const mobileNumber = form.phone
    const otp = form.otp
    const data = fetch(`${"/api/Authentication/matchOtp"}`,
      {
        method: "POST",
        body: JSON.stringify({ mobileNumber: mobileNumber, otp: otp }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then(response => response.json())
      .then(response => {
        console.log("Response", response)
        alert("otp match ")

        if (response.msg == 'OTP Validated Successfully') {
          setSendOtpBtnHide(true)
          setBtnHide(true)
          fetch(`${endPoint}`, {
            method: "POST",
            body: formData,
          })
          .then(() =>
            setForm({
              name: "",
              email: "",
              jobDescription: "",
              phone: "",
              workExperience: "",
              otp:'',
              url: ""
            })
          );
          if (router.pathname === "/otpForm") {
            router.push("/Thank-you");
          }

        } else if (response.msg == 'OTP Not Validate') {
          setSendOtpBtnHide(false)
          setBtnHide(false)
        } else if (response.msg == "OTP Expired") {
          setSendOtpBtnHide(false)
          setBtnHide(false)
        } else if (response.msg == "Invalid Phone Number") {
          setSendOtpBtnHide(false)
          setBtnHide(false)
        } else {
          console.log("API IS NOT WORKING")
        }
      })
      .catch(err => {
        console.log("API IS NOT WORKING")
        console.log(err);
      });
  };



  return (
    <>
      <section className={styles.formSection}>
        <h1 className={styles.heading}>Annoying Submit Button</h1>
        <form
          autoComplete="false"
          onSubmit={formSubmit}
          method="POST"
        >
          <div className={styles.inputBlock}>
            <label className={styles.label}>
              Name <span className={styles.requiredLabel}>*</span>
            </label>
            <input
              className={`${styles.input} ${form.name.length < 3 ? styles.wrongInput : styles.correctInput}`}
              type="text"
              name="name"
              value={form.name}
              onChange={handleForm}
              placeholder="zain.sadaqet@gmail.com"
              tabIndex={-1}
              required
            />
          </div>
          <div className={styles.inputBlock}>
            <label className={styles.label}>
              Email <span className={styles.requiredLabel}>*</span>
            </label>
            <input
              className={`${styles.input} ${form.email.length < 6 ? styles.wrongInput : styles.correctInput}`}
              type="email"
              name="email"
              value={form.email}
              onChange={handleForm}
              placeholder="zain.sadaqet@gmail.com"
              tabIndex={-1}
              required
            />
          </div>
          <div className={styles.inputBlock}>
            <label className={styles.label}>
              Job Description <span className={styles.requiredLabel}>*</span>
            </label>
            <input
              className={`${styles.input} ${form.jobDescription.length < 6 ? styles.wrongInput : styles.correctInput}`}
              type="text"
              name="jobDescription"
              value={form.jobDescription}
              onChange={handleForm}
              tabIndex={-1}
              required
            />
          </div>
          <div className={styles.inputBlock}>
            <label className={styles.label}>
              Work Experience <span className={styles.requiredLabel}>*</span>
            </label>
            <select
              name="workExperience"
              required
              value={form.workExperience}
              onChange={handleForm}
            >
              <option value="Work Experience">Work Experience</option>
              <option value="1 to 3 year">Fresher or 0 year</option>
              <option value="1 to 3 year">1 to 3 year</option>
              <option value="3 to 7 year">3 to 7 year</option>
              <option value="7 to 12 year">7 to 12 year</option>
              <option value="12+ year">12+ year</option>
            </select>

          </div>
          <div className={styles.inputBlock}>
            <label className={styles.label}>
              Phone Number <span className={styles.requiredLabel}>*</span>
            </label>
            <input
              className={`${styles.input} ${form.phone.length === 10 ? styles.correctInput : styles.wrongInput}`}
              type="number"
              name="phone"
              value={form.phone}
              onChange={handleForm}
              tabIndex={-1}
              placeholder="Enter Phone Number"
              required
            />
          </div>
          <div>
            {form.phone.length === 10 ? (
              ''
            ) : (
              <p className={styles.warningMessage}>
                Mobile Number length should be 10
              </p>
            )}
          </div>
          {btnHide ? (
            <div className={styles.inputBlock}>
              <label className={styles.label}>
                Enter OTP <span className={styles.requiredLabel}>*</span>
              </label>
              <input
                className={`${styles.input} ${form.otp.length === 4 ? styles.correctInput : styles.wrongInput}`}
                type="text"
                name="otp"
                value={form.otp}
                onChange={handleForm}
                tabIndex={-1}
                required
                maxLength={4}
                minLength={4}
              />
              <div
                className={`${styles.submitButtonWrapper} ${toggleClass ? styles.float : ''}`}
              >
                <button
                  tabIndex={-1}
                  className={`${styles.submitButton} ${form.phone.length === 10 ? styles.buttonSuccess : ''}`}
                  onMouseEnter={annoyingSubmitButton}
                >
                  Apply Now
                </button>
              </div>
            </div>
          ) : ("")}
          {sendOtpBtnHide ? ("") : (
            <div
              className={`${styles.submitButtonWrapper} ${toggleClass ? styles.float : ''}`}
            >
              <button
                tabIndex={-1}
                className={`${styles.submitButton} ${form.phone.length === 10 ? styles.buttonSuccess : ''}`}
                onMouseEnter={annoyingSubmitButton}
                onClick={sendOtp}
              >
                Send OTP
              </button>
            </div>
          )}
        </form>
      </section>

    </>
  );
}

export default FormOtp;


