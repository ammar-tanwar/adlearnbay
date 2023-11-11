import { FaUserGraduate, FaStar, FaBook, FaRegIdBadge } from "react-icons/fa";
import styles from "../Components/NewCoursePage/SecondSection/SecondSection.module.css";
import {MdOutlinePrecisionManufacturing} from 'react-icons/md'
import {FaClinicMedical} from 'react-icons/fa'
import {AiOutlineFundProjectionScreen} from 'react-icons/ai'
import {BsBank} from 'react-icons/bs'

export const DataScienceCourseData = [
  {
    secondSection: [
      {
        id: 1,
        img: <FaUserGraduate className={styles.IconBoxBlue} />,
        height: "40",
        width: "43",
        heading: "IBM Certified",
        para: "Capstone Projects",
      },
      {
        id: 1,
        img: <FaStar className={styles.IconBoxOrange} />,
        height: "42",
        width: "42",
        heading: "5-star",
        para: "Industry-standard Training",
      },
      {
        id: 1,
        img: <FaBook className={styles.IconBoxBlue} />,
        height: "50",
        width: "53",
        heading: "3-year",
        para: "Subscription Model",
      },
      {
        id: 1,
        img: <FaRegIdBadge className={styles.IconBoxOrange} />,
        height: "40",
        width: "40",
        heading: "1:1 Support",
        para: "Dedicated Program",
      },
    ],
    thirdSection: [
      {
        id: 1,
        icon: <BsBank/>,
        heading: "BFSI",
        para: "Designed for executive-level BFSI professionals, accountant.",
        brochureLink:
          "https://brochureslearnbay.s3.ap-south-1.amazonaws.com/domain/Banking%2C+Finance+and+Insurance+Domain.pdf",
      },
      {
        id: 1,
        icon: < FaClinicMedical/>,
        heading: "Healthcare",
        para: "For pharmacists, therapists, health administrators, etc.",
        brochureLink:
          "https://brochureslearnbay.s3.ap-south-1.amazonaws.com/domain/Healthcare%2C+Pharma+and+Clinical+Research+Domain.pdf",
      },
      {
        id: 1,
        icon: < AiOutlineFundProjectionScreen/>,
        heading: "HR & Marketing",
        para: "For recruiter, talent acquisition specialist and marketing pros.",
        brochureLink:
          "https://brochureslearnbay.s3.ap-south-1.amazonaws.com/domain/Sales%2C+Marketing+and+HR+Domain.pdf",
      },
      {
        id: 1,
        icon: <MdOutlinePrecisionManufacturing/>,
        heading: "Manufacturing",
        para: "For production manager, quality control inspector and engineers.",
        brochureLink:
          "https://brochureslearnbay.s3.ap-south-1.amazonaws.com/domain/Manufacturing%2C+Mechanical+and+Telecom+Domain.pdf",
      },
    ],
    testimonial: [
      {
        id: 1,
        name: "Preksha Mishra",
        working: "Working at HCL",
        proImg:
          "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/preksha-home.png",
        sDesc:
          "I had a great learning experience at Learnbay. The faculties here are top notch. Right from enrollment to getting a good job ...",
        lDesc:
          "I had a great learning experience at Learnbay. The faculties here are top notch. Right from enrollment to getting a good job, they keep putting enormous efforts for each and every candidate. Thanks to all the trainers, backend team, the HR team and to the directors for making this journey smooth.",
        complogo:
          "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/HCL-logo.png",
        statLogo: "140% Hike",
      },
      {
        id: "tcs",
        name: "Mohammad Israr",
        working: "Working at TCS",
        proImg:
          "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/asrar-home.png",
        sDesc:
          "Thanks to the Learnbay data science course and outstanding assistance, I could ace the TCS interview and secure a job...",
        lDesc:
          "Thanks to the Learnbay data science course and outstanding assistance, I could ace the TCS interview and secure a job with a 400% pay hike. My understanding of the course was greatly improved by the real-time projects and respective IBM project experience certification.",
        complogo:
          "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/TCS.png",
        statLogo: "  210% Hike",
      },
      {
        id: 4,
        name: "Ritish Kumar",
        working: "Working at Capgemini",
        proImg:
          "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/ritesh-home.png",
        sDesc:
          "I always had a dilemma about how to switch to the IT field until I stumbled upon the foundation data science course offered by Learnbay...",
        lDesc:
          "I always had a dilemma about how to switch to  IT field until I stumbled upon the foundation data science course offered by Learnbay. The perfect combination of flexibility, affordability, and supportiveness. They helped me get placed at Capgemini, and I’m delighted with my current career. All Thanks to Learnbay!",
        complogo:
          "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/Capgemni-logo.png",
        statLogo: " 150% Hike",
      },
      {
        id: 5,
        name: "Sourabh Mourya",
        working: "Working at HCL",
        proImg:
          "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/saurabh-home.png",
        sDesc:
          "Flexible classes have helped me to manage my job  schedule. Learning Data Science directly from MNC experts provided the chance ...",
        lDesc:
          "Flexible classes have helped me to manage my job schedule. Learning Data Science directly from  experts provided the chance to learn industry-specific tricks and tips. I am grateful to the Learnbay team for providing an excellent  platform that enhanced my professional growth. Thank you very much! Learnbay.",
        complogo:
          "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/HCL-logo.png",
        statLogo: " 150% Hike",
      },
      {
        id: 6,
        name: "Abhishek Singh",
        working: "Working at AGS",
        proImg:
          "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/abhishek-home.png",
        sDesc:
          "I got placed at AGS within 9 months of joining Learnbay institute. Live interaction sessions are the best part here since ...",
        lDesc:
          "I got placed at AGS within 9 months of joining Learnbay institute. Live interaction sessions are  the best part here since we could clear all queries. The projects are excellent. Overall I had a great  experience and I urge everyone to enroll in this institute.",
        complogo:
          "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/AGS-logo.png",
        statLogo: "  132% Hike",
      },
      {
        id: 7,
        name: "Vishal",
        working: "Working at Bridge i2i",
        proImg:
          "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/vishal-home.png",
        sDesc:
          "One on One counseling from experts has guided me to  make the right decision. The Learnbay team was amazing in assisting me with ...",
        lDesc:
          "One on One counseling from experts has guided me to make the right decision. The Learnbay team was amazing in assisting me with live projects and preparing for the placements. Thank you! Learnbay for your tremendous support in excelling in my Data Science Career.",
        complogo:
          "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/Bridgei2i-logo.png",
        statLogo: "  127% Hike",
      },
      {
        id: "math",
        name: "Aravind Kumar",
        working: "SA - Data Scientist",
        proImg:
          "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/aravind-home.png",
        sDesc:
          "Choosing Learnbay was my best decision ever. The instructors were encouraging and glad to answer questions. The best feature is that ...",
        lDesc:
          "Choosing Learnbay was my best decision ever. The instructors were encouraging and glad to answer questions. The best feature is that their flexible modules & small size batches. I was able to manage  my time and learn while working. Thanks to Learnbay for my lucrative placement.",
        complogo:
          "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/themathcompany-logo.png",
        statLogo: "142% Hike",
      },
    ],
    domainSection: [
      {
        id: 1,
        p1: "#1",
        p2: "BFSI",
        btn: "Download Brochure",
        desc: [
          "Work on 20+ real time case studies and assignments",
          "Designed for executive-level BFSI professionals, accountant, etc.",
          "Learn finance analysis tools, generate data insights, integrate data-driven methods to future-proof business operations",
        ],
        BrochureLink:
          "https://brochureslearnbay.s3.ap-south-1.amazonaws.com/domain/Banking%2C+Finance+and+Insurance+Domain.pdf",
        TitleCourse: "BFSI (Banking, Finance, Services and Insurance) Domain",
      },
      {
        id: 2,
        p1: "#2",
        p2: "Manufacturing",
        desc: [
          "Work on 20+ real time case studies and assignments",
          "For production manager, quality control inspector, manufacturing engineer etc.",
          "Discover cutting-edge tech like AI and data science, and develop strategic skills as a business or data analyst",
        ],
        btn: "Download Brochure",
        BrochureLink:
          "https://brochureslearnbay.s3.ap-south-1.amazonaws.com/domain/Manufacturing%2C+Mechanical+and+Telecom+Domain.pdf",
        TitleCourse: "Manufacturing, Mechanical and Telecom Domain",
      },

      {
        id: 3,
        p1: "#3",
        p2: "Energy, Oil and Gas",
        desc: [
          "Work on 20+ real time case studies and assignments",
          "For petroleum engineers, environmental specialists, operation managers etc.",
          "Master your data analysis skills and create a dynamic dashboard to describe your insights",
        ],
        btn: "Download Brochure",
        BrochureLink:
          "https://brochureslearnbay.s3.ap-south-1.amazonaws.com/domain/Energy%2C+Oil+and+Gas+Domain.pdf",
        TitleCourse: "Energy, Oil and Gas Domain",
      },

      {
        id: 4,
        p1: "#4",
        p2: "Healthcare",
        desc: [
          "Work on 20+ real time case studies and assignments",
          "For pharmacists, therapists, health administrators, etc.",
          "Achieve success in a competitive market by utilizing advanced tools and methodology to leverage technology and gain a competitive edge",
        ],
        btn: "Download Brochure",
        BrochureLink:
          "https://brochureslearnbay.s3.ap-south-1.amazonaws.com/domain/Healthcare%2C+Pharma+and+Clinical+Research+Domain.pdf",
        TitleCourse: "Healthcare, Pharma and Clinical Research Domain",
      },

      {
        id: 5,
        p1: "#5",
        p2: "Supply Chain, E-Commerce & Retail",
        desc: [
          "Work on 20+ real time case studies and assignments",
          "Learn Supply Chain, E-Commerce & Retail analysis tools, generate data insights, integrate data-driven methods to future-proof business operations",
        ],
        btn: "Download Brochure",
        BrochureLink:
          "https://brochureslearnbay.s3.ap-south-1.amazonaws.com/domain/Retail%2C+Ecommerce+and+Supply+chain+Domain.pdf",
        TitleCourse: "Retail, Ecommerce and Supply Chain Domain",
      },
    ],

    courseSectionData: [
      {
        id:1,
        heading: "Data Science",
        heading2:"Foundation Program",
        desc: "For Non-Tech professionals",
        fee: "200+ hours content | 5-7 months",
      },
      {
        id:2,
        heading: "Advanced Data",
        heading2:"Science & AI Program",
        desc: "For working professionals",
        fee: "250+ hours content | 7-9 months",
      },
      {
        id:3,
        heading: "Advance AI & ML Program",
        heading2:" for Tech Professionals",
        desc: "For tech pros. with 1 year exp.",
        fee: "350+ hours content | 9-11 months",
      },
      {
        id:4,
        heading: "Data Science",
        heading2:"& AI For Managers",
        desc: "For sr. managers/team lead",
        fee: "400+ hours content | 11-13 months",
      },
      {
        id:5,
        heading: "Data Science",
        heading2:"& AI Master Program",
        desc: "For working professionals",
        fee: "500+ hours content | 13-15 months",
      },
      {
        id:5,
        heading: "Business Analytics",
        heading2:"Master Program",
        desc: "For working professionals",
        fee: "250+ hours content | 7-9 months",
      },
      {
        id:5,
        heading: "Data Analytics",
        heading2:"Program",
        desc: "For Non-Tech professionals",
        fee: "180+ hours content | 5-6.5 months",
      },
      {
        id:5,
        heading: "Data Science and AI",
        heading2:"Program for BFSI Professionals",
        desc: "For BFSI professionals",
        fee: "250+ hours content | 7-9 months",
      },
      {
        id:5,
        heading: "HR Analytics",
        heading2:"Program",
        desc: "For HR professionals",
        fee: "200+ hours content | 5-7 months",
      },
      {
        id:5,
        heading: "Marketing Analytics",
        heading2:"Program",
        desc: "For Marketing professionals",
        fee: "200+ hours content | 5-7 months",
      },
    ]
  },
];
