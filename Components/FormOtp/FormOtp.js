
import React, { useState, useEffect } from "react";
import styles from './FormOtp.module.css'
import { useRouter } from "next/router";

function FormOtp({ popup, radio }) {

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


  if (
    
    router.pathname === "/dsa"
  ) {
    // -====================  Organic - S END POINT ==========================--------
    endPoint = "https://getform.io/f/85e92281-63f9-4d2f-b946-31d1098532f4";
    // -====================  Organic - S END POINT ==========================--------
  }

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
          if (router.pathname === "/otpForm" ||
          router.pathname === "/dsa"
          
          ) {
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
      <section className={styles.App}>
        <form
          autoComplete="false"
          onSubmit={formSubmit}
          method="POST"
        >
          <div className={styles.formWrapper}>
            <input
              className={popup ? styles.NameInputs : styles.NameInput}
              type="text"
              name="name"
              value={form.name}
              onChange={handleForm}
              placeholder="Enter your Full Name*"
              style={{ borderBottom: "1px solid grey" }}
              tabIndex={-1}
              required
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
              tabIndex={-1}
              required
            />
          </div>
          <div className={styles.formWrapper}>
            <input
              className={popup ? styles.EmailInputs : styles.EmailInput}
                placeholder="Job Title or Qualification*"
                type="text"
              name="jobDescription"
              value={form.jobDescription}
              onChange={handleForm}
              tabIndex={-1}
              required
            />
          </div>
          <div className={popup ? styles.formWrappers : styles.formWrapper}>
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

          {radio ? (
          <div className={popup ? styles.formWrappers : styles.formWrapper}>
            <input
              id="Data Science Program"
              value="Data Science Courses"
              name="platform"
              required
              type="radio"
              onChange={handleParam()}
            />
            Data Science Courses&nbsp;

            <br /><input
              id="Full Stack Program"
              value="Full Stack Software Dev Courses"
              name="platform"
              required
              type="radio"
              onChange={handleParam()}
            />
            Full Stack Software Dev <br/>&nbsp;&nbsp;&nbsp;&nbsp;(DSA & System Design) Courses
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

          <div className={styles.formWrapper}>
            <input
            style={
              popup
                ? {
                  height: "50px",
                  borderRadius: "8px",
                  border: "1px solid grey",
                  padding: "10px",
                  width: "100%"
                }
                : {
                  border: "0",
                  height: "50px",
                  width: "100%",
                  borderRadius: "3px",
                  borderBottom: "1px solid grey",
                }
            }
              className={popup ? styles.Phones : styles.Phone}
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
            <div className={styles.formWrapper}>
              <input
              style={
                popup
                  ? {
                    height: "50px",
                    borderRadius: "8px",
                    border: "1px solid grey",
                    padding: "10px",
                    marginBottom: "30px",
                    width: "100%"
                  }
                  : {
                    border: "0",
                    height: "50px",
                    borderRadius: "3px",
                    width: "100%",
                    marginBottom: "30px",
                    borderBottom: "1px solid grey",
                  }
              }
                className={popup ? styles.Phones : styles.Phone}
                type="text"
                name="otp"
                value={form.otp}
                onChange={handleForm}
                tabIndex={-1}
                required
                placeholder="Enter OTP"
                maxLength={4}
                minLength={4}
              />
              <div
                className={styles.button}
              >
                <button
                  tabIndex={-1}
                  className={styles.button}
                  onMouseEnter={annoyingSubmitButton}
                >
                  Apply Now
                </button>
              </div>
            </div>
          ) : ("")}
          {sendOtpBtnHide ? ("") : (
            <div
              className={styles.button}
            >
              <button
                tabIndex={-1}
                className={styles.button}
                onMouseEnter={annoyingSubmitButton}
                onClick={sendOtp}
              >
                Send OTP
              </button>
            </div>
          )}
          <p className={styles.FormText} style={{ fontSize: "10px" }}>
          By submitting the form, you agree to our Terms and Conditions and our
          Privacy Policy.
        </p>
        <input type='hidden' id="zc_gad" name="zc_gad" value=""/>
        </form>
      </section>

    </>
  );
}

export default FormOtp;


