import React, { useState, useEffect } from "react";
import styles from "./Form.module.css";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { useRouter } from "next/router";
import getDay from "date-fns/getDay";

const Form = ({
  popup,
  setTrigger,
  downloadBrochure,
  radio,
  event,
  stepupJobExp,
}) => {
  const router = useRouter();

  let today = new Date();
  let time =
    today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

  //offset to maintain time zone difference
  const [startDate, setStartDate] = useState();
  const [disable, setDisable] = useState(false);
  const [value, setValue] = useState();

  const [query, setQuery] = useState({
    name: "",
    email: "",
    phone: "",
    dateTime: "",
    url: router.asPath,
  });

  useEffect(() => {
    setQuery({ ...query, phone: value, dateTime: startDate });
  }, [value, startDate]);

  // Update inputs value
  const handleParam = () => (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setQuery((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  let endPoint = "https://getform.io/f/df003555-86c7-4ae5-a7f8-98c21dd9ad92";

  if (event) {
    endPoint = "https://getform.io/f/df003555-86c7-4ae5-a7f8-98c21dd9ad92";
  }

  // -==================== Marketing ==========================--------
  if (router.pathname === "/step-up-with-learnbay") {
    // -==================== Marketing ==========================--------
    endPoint = "https://getform.io/f/fd9da107-864c-4617-a52a-7e112297efa6";
    // -==================== Marketing ==========================--------
  }

  let btnTxt = "Apply for  Counseliing";
  if (event) {
    btnTxt = "Register Now";
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
        jobDescription: "",
        dateTime: "",
        url: "",
      })
    );
    if (popup) {
      const off = () => {
        setTrigger(false);
      };
      off();
    }

    setDisable(true);
    if (event) {
      router.push("/Thank-you-fsd-webinar");
      return;
    }

    if (router.pathname === "/step-up-with-learnbay") {
      router.push("/Thank-you-marketing");
    }
  };

  const isWeekday = (date) => {
    const day = getDay(date);
    return day !== 0;
  };
  const filterPassedTime = (time) => {
    const currentDate = new Date();
    const selectedDate = new Date(time);

    return currentDate.getTime() < selectedDate.getTime();
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
            limitMaxLength
            required
          />
        </div>

        {stepupJobExp ? (
          <>
            <div className={styles.formWrapper}>
              <input
                type="text"
                name="jobDescription"
                placeholder="Job Profile"
                className={popup ? styles.EmailInputs : styles.EmailInput}
                value={query.jobDescription}
                onChange={handleParam()}
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
                <option value="Fresher or 0 year">Fresher or 0 year</option>
                <option value="1 to 3 year">1 to 3 year</option>
                <option value="3 to 7 year">3 to 7 year</option>
                <option value="7 to 12 year">7 to 12 year</option>
                <option value="12+ year">12+ year</option>
              </select>
            </div>
          </>
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
        <p className={styles.FormText} style={{ fontSize: "10px" }}>
          By submitting the form, you agree to our Terms and Conditions and our
          Privacy Policy.
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
