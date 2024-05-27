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
      { skill: "Angular", percentage: "40%" },
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
    title: "Tools",
    icon: FaTools,
    skills: [
      { skill: "Git", percentage: "90%" },
      { skill: "Visual Studio Code", percentage: "75%" },
      { skill: "Intellij", percentage: "90%" },
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
    title: "Associate Software Engineer - Epic Lanka Pvt Ltd",
    date: "August 2023 - Present",
    responsibilities: [
      "Developed key features for the Admin and Merchant portals using React, JSP, Spring MVC, and Spring Boot.",
      "Developed single, bulk and card transaction flows.",
      "Developed PDF and Excel documents download functions using Java.",
      "Independently handled the frontend development of the Checkout Client using JSP.",
    ],
  },
  {
    title: "Software Engineer Intern - Epic Lanka Pvt Ltd",
    date: "February 2023 - August 2023",
    responsibilities: [
      "Contributed to the development of the Admin and Merchant portals using Angular, JSP, and Spring MVC.",
      "Developed dynamic web pages and robust reports for managing transactions and merchant information.",
      "Implemented transaction approval and rejection processes.",
      "Implements voucher eligibility and dashboard with charts",
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
      "For more Info: https://ieeexplore.ieee.org/document/10365011/",
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
