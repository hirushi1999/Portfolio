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
    title: "Associate Software Emgineer",
    date: "August 2023 - Present",
    company: "Epic Lanka Pvt Ltd",
    responsibilities: [
      "Developed key features for the Admin and Merchant portals using React, JSP, Spring MVC, and Spring Boot.",
      "Developed single, bulk and card transaction flows.",
      "Developed PDF and Excel documents download functions using Java.",
      "Independently handled the frontend development of the Checkout Client using JSP.",
    ],
  },
  {
    title: "Software Emgineer Intern",
    date: "February 2023 - August 2023",
    company: "Epic Lanka Pvt Ltd",
    responsibilities: [
      "Contributed to the development of the Admin and Merchant portals using Angular, JSP, and Spring MVC.",
      "Developed dynamic web pages and robust reports for managing transactions and merchant information.",
      "Implemented transaction approval and rejection processes.",
    ],
  },
  {
    title: "Trainee IT Assistant",
    date: "May 2018 - November 2023",
    company: "Sri Lankan Airlines",
    responsibilities: [
      "Developed reports for aviation college",
      "Update and insert records of employees to the database",
    ],
  },
];
