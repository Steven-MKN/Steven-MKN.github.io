import React, { useState } from "react";
import { GlobalStateType } from "./types";

const initState: GlobalStateType = {
  darkMode: false,
  aboutText: [
    "I have a diploma in software development with Rosebank College. Currently, I work for Lipa Payments on contract and have experience with React, React Native, Spring, MongoDB, MySQL, CI/CD and Microservices.",
    "I completed my matric in 2015 with distinctions in accounting and pure maths. I went to study BCom Accounting at UCT (University of Cape Town). In 2018, I could not settle my previous years fees, and was forced to postpone my studies. I then decided to study Software Development at Rosebank College (the fees were much more affordable). I have since begun to love software development.",
    "My goal is to grow as a software engineer so that I can lead large projects. I continue to grow on a daily basis, be it learning about how to improve my architectures, application security or continuous deployment pipelines.",
  ],
  skills: [
    { skill: "TypeScript", level: "advanced" },
    { skill: "Git", level: "advanced" },
    { skill: "React", level: "intermediate" },
    { skill: "React Native", level: "intermediate" },
    { skill: "Spring", level: "intermediate" },
    { skill: "Kotlin", level: "intermediate" },
    { skill: "SDLC", level: "intermediate" },
    { skill: "SQL", level: "intermediate" },
    { skill: "Java", level: "intermediate" },
    { skill: "REST API", level: "intermediate" },
  ],
  resume: {
    summary: "",
    sections: [
      {
        title: "Experience",
        items: [
          {
            title: "Software Engineer",
            dateStart: "May 2022",
            dateEnd: "Current",
            description: "",
            location: "Synthesis Software Technologies, Johannesburg",
            rolesAndAchievements: [
              "Helping a global bank make its move to digital banking",
              "Responsible for building a React Native application used for banking",
              "Ensuring compliance with PCI DSS and the banks internal standards/policies",
            ],
          },
          {
            title: "Full-Stack Software Developer",
            dateStart: "July 2021",
            dateEnd: "March 2022",
            description: "",
            location: "Lipa Payments, Remote",
            rolesAndAchievements: [
              "Developed React Native app that integrates in-house Bluetooth SDK and NFC SDK",
              "Developed React Dashboard used by tenants to Lipa",
              "Developed a Microservices backend to manage and interact with all our client applications",
            ],
          },
          {
            title: "Software Developer",
            dateStart: "April 2021",
            dateEnd: "August 2021",
            description: "",
            location: "Sizanani Technologies, Remote",
            rolesAndAchievements: [
              "Developed chatbot used for administration of saving groups",
              "Developed REST API for dashboard used to manage saving groups",
            ],
          },
        ],
      },
      {
        title: "Education",
        items: [
          {
            title: "Advanced Diploma in Computer Science",
            dateStart: "2022",
            dateEnd: "Current",
            description: "",
            location: "Tshwane University of Technology, Pretoria",
            rolesAndAchievements: ["Studying part-time"],
          },
          {
            title: "Diploma in Information Technology - Software Development",
            dateStart: "2018",
            dateEnd: "2020",
            description: "",
            location: "Rosebank College, Johannesburg",
            rolesAndAchievements: [
              "Multiple Distinction",
              "Class representative in 2018",
              "Volunteer tutor for first-year programming classes",
              "Chess Player",
            ],
          },
          {
            title: "Bcom Accounting CA(SA)",
            dateStart: "2016",
            dateEnd: "2017",
            description: "",
            location: "University of Cape Town, Cape Town",
            rolesAndAchievements: [
              "Averaged 62%",
              "Incomplete due to financial constraints",
            ],
          },
        ],
      },
    ],
  },
  name: "Steven Mokoena",
  slogan: "A Software Engineer with a passion to solve problems",
  socialLinks: [
    { type: "linkedin", link: "https://www.linkedin.com/in/steven1mokoena" },
    { type: "whatsapp", link: "https://wa.me/27622995782" },
    { type: "cell", link: "tel:+27622995782" },
    { type: "email", link: "mailto:steventmokoena@gmail.com" },
    { type: "github", link: "https://github.com/Steven-MKN" },
  ],
  contactMessage:
    "Hey, would you like to get in touch or give me feedback on any of my work (negative or positive)?, feel free to use any of the options to contact me",
  contactInfo: [
    { type: "location", value: "Johannesburg, South Africa" },
    { type: "email", value: "steventmokoena@gmail.com" },
    { type: "cell", value: "+27622995782" },
  ],
  headline: "Software Engineer",
  projects: [
    {
      title: "Insight Covid19",
      description:
        "I developed a minimal viable product app that graphed out South African covid19 stats, sends notifications to the user when new data is available and updated daily. Data used is obtained reliably from csv files from DSFSI (Data Science for Social Impact Research Group) of University of Pretoria",
      date: "March 2020",
      image: {
        url: "images/insight_screenshot_poster.jpg",
        altText: "",
      },
      techStack: [
        { tech: "Java", version: "1.8" },
        { tech: "Android", version: null },
      ],
      githubLink: "https://github.com/Steven-MKN/insight-covid19",
      liveLink: "https://bit.ly/insight_v4_1",
    },
  ],
};

export const Context = React.createContext<GlobalStateType>(initState);

const Store: React.FC = ({ children }) => {
  const [globalState, setGlobalState] = useState(initState);

  return <Context.Provider value={globalState}>{children}</Context.Provider>;
};

export default Store;
