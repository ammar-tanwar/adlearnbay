import React, { useState, useEffect } from "react";
import styles from "./FormInline.module.css";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { useRouter } from "next/router";

const FormInline = ({
  popup,
  setTrigger,
  upSkillingHide,
  radio,
  dataScience,
  dataScienceCounselling,
  dataScienceGeneric,
}) => {
  const router = useRouter();

  //offset to maintain time zone difference
  const [value, setValue] = useState();
  const [error, setError] = useState();
  const [query, setQuery] = useState({
    name: "",
    email: "",
    phone: "",
        upskillPlanning: "",
    upskillingObjective: "",
    url: "",
  });
  useEffect(() => {
    setQuery({ ...query, phone: value, });
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

  const redirection = async () => {
    console.log("redirect");
    const myTimeout = setTimeout(() => {
      router.push("https://course.learnbay.co/Thank-you");
    }, 500);
  };

  let endPoint = "https://getform.io/f/85e92281-63f9-4d2f-b946-31d1098532f4";

  if (router.pathname === "/resume-builder") {
    endPoint = "https://getform.io/f/fd9da107-864c-4617-a52a-7e112297efa6";
  }

  if (
    router.pathname === "/datascience/data-science-certification-courses" ||
    router.pathname === "/" ||
    router.pathname === "/datascience/advance-ai-ml-certification" ||
    router.pathname === "/datascience/data-analytics-certification-course" ||
    router.pathname ===
      "/datascience/business-analytics-certification-course" ||
    router.pathname ===
      "/datascience/data-science-ai-cert-for-managers-leaders" ||
    router.pathname === "/datascience/data-science-ai-masters-program" ||
    router.pathname === "/fullstack/dsa" ||
    router.pathname === "/fullstack/fssd"
  ) {
    // -====================  MARKETING - S END POINT ==========================--------
    endPoint = "https://getform.io/f/fd9da107-864c-4617-a52a-7e112297efa6";
    // -====================  MARKETING - S END POINT ==========================--------
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
            upskillPlanning: "",
    upskillingObjective: "",
        url: "",
      })
    );
    if (popup) {
      const off = () => {
        setTrigger(false);
      };
      off();
    }
    if (dataScience) {
      router.push("/Thank-you");
    }
    if (dataScienceCounselling) {
      router.push("/Thank-you");
    }
    if (dataScienceGeneric) {
      redirection();
    }
  }
  };

  const formSubmitDownload = (e) => {
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
            upskillPlanning: "",
    upskillingObjective: "",
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
    if (dataScience) {
      router.push("/Thank-you");
    }
    if (dataScienceCounselling) {
      router.push("/Thank-you");
    }
    if (dataScienceGeneric) {
      redirection();
    }
  };

  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    let width = window.innerWidth;

    if (width < 481) {
      setMobile(true);
    }
    if (width > 481) {
      setMobile(false);
    }
  }, [mobile]);

  return (
    <div className={styles.App}>
      <form onSubmit={upSkillingHide ? formSubmitDownload : formSubmit}>
        <div className={styles.formGrid}>
          <div className={styles.formWrapper}>
            <input
              type="text"
              name="name"
              className={popup ? styles.NameInputs : styles.NameInput}
              required
              placeholder="Enter your Full Name"
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
              placeholder="Enter your Email"
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
                      padding: "10px",
                      borderRadius: "8px",
                      border: "1px solid grey",
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
          {upSkillingHide ? (
          ""
        ) : (
          <div className={popup ? styles.formWrapper : styles.formWrapper}>
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
          <div className={popup ? styles.formWrapper : styles.formWrapper}>
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
           {radio ? (
          <div className={popup ? styles.formWrapper : styles.formWrapper}>
            {mobile ? (
              <div>
                <input
                  id="Data Science & AI Courses"
                  value="Data Science & AI Courses"
                  name="platform"
                  required
                  type="radio"
                  onChange={handleParam()}
                />
                Data Science & AI Courses&nbsp;
                {mobile ? <br /> : ""}
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
              <>
                <div className={styles.dsCourseInp}>
                  <input
                    id="Data Science & AI Courses"
                    value="Data Science & AI Courses"
                    name="platform"
                    required
                    type="radio"
                    onChange={handleParam()}
                  />
                  Data Science & AI Courses&nbsp;
                </div>
                <div className={styles.fsdCourseInp}>
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
              </>
            )}
          </div>
        ) : (
          ""
        )}
        </div>
        <input type="hidden" id="zc_gad" name="zc_gad" value="" />
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
        <button type="submit" className={styles.button}>
          Request A Callback
        </button>
        <input type="hidden" id="zc_gad" name="zc_gad" value="" />
      </form>
    </div>
  );
};

export default FormInline;
