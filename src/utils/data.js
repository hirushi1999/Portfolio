import { LiaFileCode } from "react-icons/lia";
import { FiSettings } from "react-icons/fi";
import { FaTools } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
export const SKILLS = [
  {
    title: "Frontend",
    icon: LiaFileCode,
    skills: [
      { skill: "HTML", percentage: "80%" },
      { skill: "CSS", percentage: "80%" },
      { skill: "JavaScript", percentage: "70%" },
      { skill: "React", percentage: "60%" },
      { skill: "Angular", percentage: "60%" },
    ],
  },
  {
    title: "Backend",
    icon: FiSettings,
    skills: [
      { skill: "Java", percentage: "80%" },
      { skill: "C#", percentage: "60%" },
      { skill: "PHP", percentage: "70%" },
      { skill: "Python", percentage: "50%" },
      { skill: "Node.js", percentage: "40%" },
    ],
  },
  {
    title: "Version Control/DevOps",
    icon: FaTools,
    skills: [
      { skill: "Git", percentage: "90%" },
      { skill: "Azure DevOps Server", percentage: "60%" },
      { skill: "AWS", percentage: "40%" },
      { skill: "Docker", percentage: "40%" },
    ],
  },
  {
    title: "Soft Skills",
    icon: FaUser,
    skills: [
      { skill: "Problem Solving", percentage: "90%" },
      { skill: "Time Management", percentage: "90%" },
      { skill: "Communication", percentage: "90%" },
      { skill: "Self Learning", percentage: "90%" },
    ],
  },
];

export const WORK_EXPERIENCE = [
  {
    title: "Software Engineer - Epic Lanka Pvt Ltd",
    date: "October 2024 - Present",
    responsibilities: [
      "Architecting secure, scalable features for Admin, Merchant, and Client portals using Angular and Microservices architecture.",
      "Optimizing Fintech transaction flows within the Internet Banking module to ensure high reliability.",
      "Developing high-performance PDF and Excel reporting engines for high-volume financial auditing and operations.",
      "Collaborating in an Agile environment to deliver enterprise-grade software solutions.",],
  },
  {
    title: "Associate Software Engineer - Epic Lanka Pvt Ltd",
    date: "August 2023 - Present",
    responsibilities: [
      "Developed core features for Admin and Merchant portals using React, JSP, and Spring Boot.",
      "Implemented complex single, bulk, and card-based transaction processing logic.",
      "Independently spearheaded the frontend development of the Checkout Client using JSP.",
      "Optimized document export functionalities using Java, improving data processing speed.",
    ],
  },
  {
    title: "Software Engineer Intern - Epic Lanka Pvt Ltd",
    date: "February 2023 - August 2023",
    responsibilities: [
      "Contributed to the development of Fintech portals using Angular and Spring MVC.",
      "Built dynamic web pages and automated reports for real-time merchant transaction tracking.",
      "Implemented logic for transaction approval/rejection workflows and voucher eligibility.",
      "Developed interactive dashboards featuring data visualization charts for transaction analysis.",
    ],
  },
];

export const PROJECTS = [
  {
    title: "Final Year Research Project - University Of Kelaniya",
    technologies:
      "Random Forest, Multinomial Logistic Regression, LSTM, Linear Regression, Random Forest Regressor, Python, HTML, CSS",
    tasks: [
      "This study focused on addressing challenges faced by farmers in Sri Lanka, particularly related to low income and vegetable wastage.",
      "An application was developed to predict the most profitable vegetable crop and determine the required land for cultivation.",
      "The prediction models, utilizing machine learning algorithms such as RF, MLR, LSTM, RFR, and LR, considered factors like location, month, cultivation expenses, and weather conditions.",
    ],
  },
  {
    title: "NeOS Product",
    technologies:
      "Angular, Spring Boot, Oracle, Docker, JIRA",
    tasks: [
      "Contributed to both frontend (Angular) and backend (Spring Boot APIs) development for Admin, Merchant, and Client portals.",
      "Optimized performance and ensured security compliance for high-volume financial operations.",
      "Developed and optimized transaction flows in Internet Banking, including cashback loans, leasing, automated bills, etc.",
      "Led version migration activities in the Admin Portal, including upgrading Angular/Spring Boot versions, resolving compatibility issues.",
    ],
  },
  {
    title: "IPG Product - Epic Lanka",
    technologies: "React, JSP, JAVA, iReport, JIRA",
    tasks: [
      "I played a pivotal role across multiple fronts in this project. While contributing key features to the Admin portal using JSP and Java 17.",
      "My primary focus was on the Merchant and Checkout portals.",
      "I led the development of the Merchant Portal, leveraging React to craft a user-friendly interface.",
      "I independently handled the frontend development of the Checkout Client, utilizing JSP to enhance user experience and developed card payment process.",
      "I ensured timely delivery of all releases, consistently exceeding client expectations.",
    ],
  },
  {
    title: "Cardless ATM Project - Epic Lanka",
    technologies: "JSP, JAVA, iReport, AJAX, JIRA",
    tasks: [
      "Engaged as a pivotal member in the development of two projects: the Merchant Portal and Admin Portal.",
      "In the Admin project, I developed dynamic web pages and robust reports tailored to efficiently manage transactions, merchant information, and communication channels via SMS and emails.",
      "Within the Merchant Portal project, I spearheaded the development of diverse functionalities, including transaction initiation, approval, rejection processes, and report generation mechanisms.",
      "JSP for frontend components and Spring MVC for backend implementation",
    ],
  },
  {
    title: "EKYC Product Seylan Bank - Epic Lanka",
    technologies: "JSP, Angular, JAVA, iReport, AJAX, JIRA",
    tasks: [
      "Engaged in the development of two projects: Admin portal and checkout Client.",
      "In the Admin project, I involved the creation of web pages and reports to enhance the digital onboarding experience for customers.",
      "The other project focused on customer onboarding, I developed various functions.",
      "The frontend components include JSP and Angular, while the backend is implemented using Spring MVC and Spring Boot.",
    ],
  },
];
