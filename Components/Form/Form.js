import React, { useState, useEffect } from "react";
import styles from "./Form.module.css";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { useRouter } from "next/router";
import DatePicker from "react-datepicker";
import setHours from "date-fns/setHours";
import setMinutes from "date-fns/setMinutes";
import addDays from "date-fns/addDays";
import subDays from "date-fns/subDays";
import getDay from "date-fns/getDay";

const Form = ({ popup, setTrigger, downloadBrochure, radio }) => {
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
    workExperience: "",
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

  let endPoint = "https://getform.io/f/85e92281-63f9-4d2f-b946-31d1098532f4";
  if (
    router.pathname === "/fssd" ||
    router.pathname === "/fswd" ||
    router.pathname === "/data-science-certification-courses" ||
    router.pathname === "/" ||
    router.pathname === "/advance-ai-ml-certification" ||
    router.pathname === "/data-science-ai-cert-for-managers-leaders" ||
    router.pathname === "/job-guarantee-or-money-back-data-science-ai"
  ) {
    endPoint = "https://getform.io/f/85e92281-63f9-4d2f-b946-31d1098532f4";
  }
  if (
    router.pathname === "/data-science-certification-courses-s2" ||
    router.pathname === "/advance-ai-ml-certification-s2" ||
    router.pathname === "/data-science-ai-cert-for-managers-leaders-s2" ||
    router.pathname === "/job-guarantee-or-money-back-data-science-ai-s2" ||
    router.pathname === "/job-guarantee-or-money-back-data-science-ai-s9"
  ) {
    endPoint = "https://getform.io/f/c803e186-7053-4f33-9f49-909cc11e32bc";
  }
  if (
    router.pathname === "/data-science-certification-courses-s3" ||
    router.pathname === "/advance-ai-ml-certification-s3" ||
    router.pathname === "/data-science-ai-cert-for-managers-leaders-s3" ||
    router.pathname === "/job-guarantee-or-money-back-data-science-ai-s3"
  ) {
    endPoint = "https://getform.io/f/a876146f-2c5d-4a1f-b177-f993db3d7aaf";
  }
  if (
    router.pathname === "/data-science-certification-courses-s4" ||
    router.pathname === "/advance-ai-ml-certification-s4" ||
    router.pathname === "/data-science-ai-cert-for-managers-leaders-s4" ||
    router.pathname === "/apply-for-counselling-data-science" ||
    router.pathname === "/job-guarantee-or-money-back-data-science-ai-s4"
  ) {
    endPoint = "https://getform.io/f/1cfd5db8-ec05-4d26-b05f-6b73a81ebf89";
  }
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
    endPoint = "https://getform.io/f/773095f3-b69e-4071-9ffb-b2d6c6261891";
  }
  if (
    router.pathname === "/data-science-certification-courses-s5" ||
    router.pathname === "/advance-ai-ml-certification-s5" ||
    router.pathname === "/data-science-ai-cert-for-managers-leaders-s5" ||
    router.pathname === "/job-guarantee-or-money-back-data-science-ai-s5"
  ) {
    endPoint = "https://getform.io/f/9c5b2164-1f56-4150-ad53-7944d6fe4363";
  }
  if (
    router.pathname === "/data-science-certification-courses-s6" ||
    router.pathname === "/advance-ai-ml-certification-s6" ||
    router.pathname === "/data-science-ai-cert-for-managers-leaders-s6" ||
    router.pathname === "/job-guarantee-or-money-back-data-science-ai-s6"
  ) {
    endPoint = "https://getform.io/f/1c8cf486-31ef-4a7f-95b0-45c5f21e7b29";
  }
  if (
    router.pathname === "/data-science-certification-courses-s7" ||
    router.pathname === "/advance-ai-ml-certification-s7" ||
    router.pathname === "/data-science-ai-cert-for-managers-leaders-s7" ||
    router.pathname === "/job-guarantee-or-money-back-data-science-ai-s7"
  ) {
    endPoint = "https://getform.io/f/a0a0fb5b-0cba-4b29-9d35-03c35d0e0d28";
  }
  if (
    router.pathname === "/full-stack-software-development-program" ||
    router.pathname === "/full-stack-web-development-program" ||
    router.pathname === "/dsa-system-design"
  ) {
    endPoint = "https://getform.io/f/0b5b1a8f-bce0-445a-967f-f56103e73f3d";
  }
  if (
    router.pathname === "/fssd-s2" ||
    router.pathname === "/fssd-s4" ||
    router.pathname === "/fssd-s5" ||
    router.pathname === "/fswd-s4" ||
    router.pathname === "/fswd-s5" ||
    router.pathname === "/fswd-s2" ||
    router.pathname === "/dsa-s2" ||
    router.pathname === "/dsa-s4" ||
    router.pathname === "/dsa-s5" ||
    router.pathname === "/apply-for-counselling"
  ) {
    endPoint = "https://getform.io/f/785b3539-e7ce-497c-a975-0dc288c3286c";
  }
  if (router.pathname === "/job-guarantee-or-money-back-data-science-ai-s8") {
    endPoint = "https://getform.io/f/fd68bf82-a911-435e-9719-7c134a89a731";
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
      (router.pathname === "/advance-ai-ml-certification" &&
        downloadBrochure) ||
      (router.pathname === "/data-science-ai-cert-for-managers-leaders" &&
        downloadBrochure) ||
      (router.pathname === "/job-guarantee-or-money-back-data-science-ai" &&
        downloadBrochure) ||
      (router.pathname === "/fssd" && downloadBrochure) ||
      (router.pathname === "/fssd" && downloadBrochure) ||
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
      (router.pathname === "/data-science-certification-courses" &&
        downloadBrochure) ||
      (router.pathname === "/advance-ai-ml-certification" &&
        downloadBrochure) ||
      (router.pathname === "/data-science-ai-cert-for-managers-leaders" &&
        downloadBrochure) ||
      (router.pathname === "/job-guarantee-or-money-back-data-science-ai" &&
        downloadBrochure) ||
      (router.pathname === "fssd" && downloadBrochure) ||
      (router.pathname === "fswd" && downloadBrochure) ||
      (router.pathname === "/" && downloadBrochure) ||
      (router.pathname === "/apply-for-counselling-data-science" &&
        downloadBrochure)
    ) {
      router.push("/Thank-you-brochure");
      return;
    }

    if (
      router.pathname === "/data-science-certification-courses-sd" ||
      router.pathname === "/advance-ai-ml-certification-sd" ||
      router.pathname === "/data-science-ai-cert-for-managers-leaders-sd" ||
      router.pathname === "/job-guarantee-or-money-back-data-science-ai-sd" ||
      router.pathname === "/data-science-certification-courses" ||
      router.pathname === "/advance-ai-ml-certification" ||
      router.pathname === "/data-science-ai-cert-for-managers-leaders" ||
      router.pathname === "/job-guarantee-or-money-back-data-science-ai" ||
      router.pathname === "/fssd" ||
      router.pathname === "/fswd" ||
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
      router.pathname === "/data-science-certification-courses" ||
      router.pathname === "/advance-ai-ml-certification" ||
      router.pathname === "/data-science-ai-cert-for-managers-leaders" ||
      router.pathname === "/job-guarantee-or-money-back-data-science-ai" ||
      router.pathname === "fssd" ||
      router.pathname === "fswd" ||
      router.pathname === "/" ||
      router.pathname === "/job-guarantee-or-money-back-data-science-ai-s8" ||
      router.pathname === "/job-guarantee-or-money-back-data-science-ai-s9" ||
      router.pathname === "/apply-for-counselling-data-science"
    ) {
      router.push("/Thank-you");
      return;
    }

    if (
      (router.pathname === "/fssd-s2" && downloadBrochure) ||
      (router.pathname === "/fssd-s4" && downloadBrochure) ||
      (router.pathname === "/fssd-s5" && downloadBrochure) ||
      (router.pathname === "/fswd-s4" && downloadBrochure) ||
      (router.pathname === "/fswd-s5" && downloadBrochure) ||
      (router.pathname === "/dsa-s2" && downloadBrochure) ||
      (router.pathname === "/dsa-s4" && downloadBrochure) ||
      (router.pathname === "/dsa-s5" && downloadBrochure) ||
      (router.pathname === "/fswd-s2" && downloadBrochure)
    ) {
      router.push("/Thank-you-fs");
      return;
    }

    if (
      router.pathname === "/full-stack-software-development-program" ||
      router.pathname === "/full-stack-web-development-program" ||
      router.pathname === "/dsa-system-design"
    ) {
      router.push("/Thank-you-w");
      return;
    }

    if (
      router.pathname === "/apply-for-counselling" ||
      router.pathname === "/fssd-s2" ||
      router.pathname === "/fssd-s4" ||
      router.pathname === "/fswd-s4" ||
      router.pathname === "/fssd-s5" ||
      router.pathname === "/fswd-s5" ||
      router.pathname === "/dsa-s2" ||
      router.pathname === "/dsa-s4" ||
      router.pathname === "/dsa-s5" ||
      router.pathname === "/fswd-s2"
    ) {
      router.push("/Thank-you-w");
      return;
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

        {radio ? (
          <div className={popup ? styles.formWrappers : styles.formWrapper}>
            <input
              id="Data Science Program"
              value="Data Science Program"
              name="platform"
              required
              type="radio"
              onChange={handleParam()}
            />
            Data Science Program&nbsp;
            <input
              id="Full Stack Program"
              value="Full Stack Program"
              name="platform"
              required
              type="radio"
              onChange={handleParam()}
            />
            Full Stack Program
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
        {downloadBrochure ? (
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
      </form>
    </div>
  );
};

export default Form;
