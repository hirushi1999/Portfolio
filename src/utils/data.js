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
      { skill: "Visual Studio Code", percentage: "60%" },
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
