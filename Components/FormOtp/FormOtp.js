
import React from 'react';
import styles from './FormOtp.module.css'
import { useRouter } from "next/router";
import PhoneInput from "react-phone-number-input";

function FormOtp({ popup }) {

  const router = useRouter();
  const [value, setValue] = React.useState();

  const [mobileNum, setMobileNum] = React.useState(true)
  const [form, setForm] = React.useState({
    name: '',
    email: '',
    phone: '',
    jobDescription: '',
    workExperience: '',
    password: '',
    url: router.asPath,
  });

  // React.useEffect(() => {
  //   setForm({ ...form, phone: value });

  // }, [value]);

  const [toggleClass, setToggleClass] = React.useState(false);

  const handleForm = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setForm((formProps) => (
      {
        ...formProps,
        [name]: value,
      }
    ));

    if (form.phone.length < 9 || form.phone.length >= 10) {
      setMobileNum(true)
    } else {
      setMobileNum(false)
    }
  };




  const annoyingSubmitButton = () => {
    if (form.password.length < 6) {
      setToggleClass((prevState) => !prevState);
    }
  };

  return (
    <>
      <section className={styles.formSection}>
        <h1 className={styles.heading}>Annoying Submit Button 😡</h1>
        <form
          autoComplete="false"
          action="https://formspree.io/f/meqvlgqr"
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
              className={`${styles.input} ${mobileNum ? styles.wrongInput : styles.correctInput}`}
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
            {mobileNum ? (
              <p className={styles.warningMessage}>
                Mobile Number length should be 10
              </p>
            ) : (
              ''
            )}
          </div>
          <div
            className={`${styles.submitButtonWrapper} ${toggleClass ? styles.float : ''}`}
          >
            <button
              tabIndex={-1}
              className={`${styles.submitButton} ${form.password.length > 6 ? styles.buttonSuccess : ''}`}

              onMouseEnter={annoyingSubmitButton}
            >
              Submit
            </button>
          </div>
        </form>
      </section>

    </>
  );
}

export default FormOtp;


