import Image from "next/image";
import Styles from "./JobAbroad.module.css";

const JobAbroad = () => {
  return (
    <div>
      <div className={Styles.JobAbroadMain}>
        <h2>
          Master’s Degree that gets you
          <span className={Styles.Ooo}>Job Abroad</span>{" "}
        </h2>

        <div className={Styles.JobAbroadHead}>
          <div className={Styles.JobAbroadleft}>
            <div className={Styles.leftpoints}>
              <div className={Styles.imgBox}>
                <Image
                  src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/job4.webp"
                  width={90}
                  height={90}
                />
              </div>
              <div>
                <h3>Earn a Degree Without Pausing Your Career</h3>
                <p>
                  Flexible online degrees from LearnBay's ExcelVarsity for
                  working pros.
                </p>
              </div>
            </div>

            <div className={Styles.leftpoints}>
              <div className={Styles.imgBox}>
                <Image
                  src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/job2.webp"
                  width={90}
                  height={90}
                />
              </div>
              <div>
                <h3>Skill Up for Swift Promotions</h3>
                <p>
                  Curriculum designed for rapid career advancement and
                  leadership roles.
                </p>
              </div>
            </div>

            <div className={Styles.leftpoints}>
              <div className={Styles.imgBox}>
                <Image
                  src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/job3.webp"
                  width={90}
                  height={90}
                />
              </div>
              <div>
                <h3>Step into High-Value Research Careers</h3>
                <p>
                  Degrees for prestigious research jobs and institutional
                  collaborations.
                </p>
              </div>
            </div>
            <p className={Styles.woolfText}>
              Learnbay Excelversity is a constituent college affiliated with{" "}
              <a href="https://woolf.university/academics/college-membership/bb43ed7d-edff-4e25-b530-2e950496519c">
                <span className={Styles.spanWoolf}>Woolf University, EU</span>
              </a>
            </p>
          </div>

          <div className={Styles.JobAbroadRight}>
            <Image
              src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/job1.webp"
              width={600}
              height={400}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobAbroad;
