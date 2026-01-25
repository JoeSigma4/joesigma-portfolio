// skillsData.js
import { FaHtml5, FaCss3Alt, FaReact, FaGitAlt } from "react-icons/fa";
import { SiJavascript, SiNpm } from "react-icons/si";
import {
  MdOutlineDevices,
  MdAccessibilityNew,
  MdOutlineApi,
  MdOutlineDataUsage,
} from "react-icons/md";
import { FiFigma } from "react-icons/fi";

export const skills = [
  {
    title: "HTML",
    icon: <FaHtml5 size={40} />,
    description:
      "Writing semantic, accessible HTML to structure web pages effectively.",
  },
  {
    title: "CSS",
    icon: <FaCss3Alt size={40} />,
    description:
      "Styling layouts with CSS, including Flexbox, Grid, and responsive design.",
  },
  {
    title: "JavaScript",
    icon: <SiJavascript size={40} />,
    description: "Creating dynamic, interactive web applications.",
  },
  {
    title: "React",
    icon: <FaReact size={40} />,
    description: "Building responsive, component-based frontends.",
  },
  {
    title: "UI / UX Basics",
    icon: <FiFigma size={40} />,
    description: "Designing layouts with user experience in mind.",
  },
  {
    title: "Version Control",
    icon: <FaGitAlt size={40} />,
    description: "Tracking changes, branching, and collaborating with Git.",
  },
  {
    title: "Responsive Design",
    icon: <MdOutlineDevices size={40} />,
    description: "Layouts that work seamlessly on mobile, tablet, and desktop.",
  },
  // {
  //   title: "Web Accessibility",
  //   icon: <MdAccessibilityNew />,
  //   description:
  //     "Building inclusive interfaces following accessibility standards.",
  // },
  // {
  //   title: "API Integration",
  //   icon: <MdOutlineApi size={40} />,
  //   description: "Fetching and managing data from REST APIs in frontend apps.",
  // },
  // {
  //   title: "State Management",
  //   icon: <MdOutlineDataUsage size={40} />,
  //   description: "Managing application state using React hooks.",
  // },
  // {
  //   title: "Package Management",
  //   icon: <SiNpm />,
  //   description: "Handling project dependencies with npm.",
  // },
];
