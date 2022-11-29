import React, { useState, useEffect } from "react";
import styles from "./Form.module.css";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { useRouter } from "next/router";
import getDay from "date-fns/getDay";
import jsCookie from "js-cookie";


const Form = ({ popup, setTrigger, downloadBrochure, radio, event, jobDesc, jobPlace }) => {
  const router = useRouter();
  let today = new Date();
  let time =
    today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

  //offset to maintain time zone difference
  const [startDate, setStartDate] = useState();
  const [disable, setDisable] = useState(false);
  const [value, setValue] = useState();
  const [hide, sethide] = useState(false)
  

  const [query, setQuery] = useState({
    name: "",
    email: "",
    phone: "",
    workExperience: "",
    dateTime: "",
    url: router.asPath,
  });
  
  useEffect(() => {
    setQuery({ ...query, phone: value, dateTime: startDate });


    jsCookie.set("CARD", query.email, { expires: 14, secure: true });
    
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

  
  const sendotp = () =>{
    console.log("sened OTP")
    sethide(true)
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
      // console.log(res),
      setQuery({
        name: "",
        email: "",
        jobDescription: "",
        phone: "",
        workExperience: "",
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
            limitMaxLength={true}

            required
          />
          <button type="button" onClick={sendotp} className={styles.button}>
        Send OTP

        </button>

          {hide ? (
            <input
            type="number"
            name="otp"
            required
            placeholder="Enter Your otp*"
            className={popup ? styles.EmailInputs : styles.EmailInput}
            value=""
            onClick={sendotp}
          
          />
          ):("")}
        
        </div>

        {jobPlace ? (
          <>
        {jobDesc ? (
          <>
            <div className={styles.formWrapper}>
              <input
                type="text"
                name="jobDescription"
                placeholder="Job Title or Qualification*"
                className={popup ? styles.EmailInputs : styles.EmailInput}
                value={query.jobDescription}
                onChange={handleParam()}

              />

            </div>
          </>
        ) : (
          <>
            {" "}
            <div className={styles.formWrapper}>
              <input
                type="text"
                name="jobDescription"
                placeholder="Job Description*"
                className={popup ? styles.EmailInputs : styles.EmailInput}
                value={query.jobDescription}
                onChange={handleParam()}
                required
              />
            </div>
          </>
        )}
</>
        ) : (
          <>
            {" "}
        {jobDesc ? (
          <>
            <div className={styles.formWrapper}>
              <input
                type="text"
                name="jobDescription"
                placeholder="Job Description*"
                className={popup ? styles.EmailInputs : styles.EmailInput}
                value={query.jobDescription}
                onChange={handleParam()}

              />

            </div>
          </>
        ) : (
          <>
            {" "}
            <div className={styles.formWrapper}>
              <input
                type="text"
                name="jobDescription"
                placeholder="Job Description*"
                className={popup ? styles.EmailInputs : styles.EmailInput}
                value={query.jobDescription}
                onChange={handleParam()}
                required
              />
            </div>
          </>
        )}
 </>
        )}



        <div className={popup ? styles.formWrappers : styles.formWrapper}>
          <select
            name="workExperience"
            required
            value={query.workExperience}
            onChange={handleParam()}
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
        {/* {downloadBrochure ? (
          ""
        ) : (
          <div className={popup ? styles.formWrappers : styles.formWrapper}>
            <div className={styles.inner}>
              <DatePicker
                selected={startDate}
                name="dateTime"
                id="dateTime"
                onChange={(date) => setStartDate(date)}
                showTimeSelect
                timeIntervals={15}
                includeDateIntervals={[
                  {
                    start: subDays(new Date(), 1),
                    end: addDays(new Date(), 5),
                  },
                ]}
                filterDate={isWeekday}
                filterTime={filterPassedTime}
                wrapperClassName={styles.date}
                className={styles.datePicker}
                placeholderText="Select Date and Time"
                dateFormat="MMMM d, yyyy h:mm aa"
                required
                minTime={setHours(setMinutes(new Date(), 0), 10)}
                maxTime={setHours(setMinutes(new Date(), 0), 20)}
              />
            </div>
          </div>
        )} */}
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
        <input type='hidden' id="zc_gad" name="zc_gad" value=""/>
      </form>
    </div>
  );
};

export default Form;




