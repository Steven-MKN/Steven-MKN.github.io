import React, { useState } from "react";
import { GlobalStateType } from "./types";

const initState: GlobalStateType = {
  darkMode: false,
  aboutText: [
    "I have a diploma in software development with Rosebank College and more than 3 years of experience in the payments space.",
    "I completed my matric in 2015 with distinctions in accounting and pure maths. I went to study BCom Accounting at UCT (University of Cape Town). In 2018, I could not settle my previous years fees, and was forced to postpone my studies. I then decided to study Software Development at Rosebank College (the fees were much more affordable). I have since begun to love software development.",
    "Currently, I am a software developer at Synthesis Software Technologies, where I am responsible for building banking mobile applications for a clients. I am also completing my Advanced Diploma in Computer Science at Tshwane University of Technology.",
    "My goal is to continue building software that solves problems while continuously growing my other non-technical skills, so that I can be a well-rounded individual and hopefully lead projects in the future.",
  ],
  skills: [
    { skill: "React Native" },
    { skill: "Mobile Security" },
    { skill: "TypeScript" },
    { skill: "Mobile CI/CD" },
    { skill: "Firebase" },
    { skill: "SDLC" },
    { skill: ".NET" },
  ],
  resume: {
    summary: "",
    sections: [
      {
        title: "Professional Experience",
        items: [
          {
            title: "Software Developer",
            dateStart: "May 2022",
            dateEnd: "Current",
            description: "As a software developer, I have been responsible for building banking mobile application for a client that is modernizing their digital solutions",
            location: "Synthesis Software Technologies, Johannesburg",
            rolesAndAchievements: [
              "Implementing and maintaining the React Native codebase in Typescript, including ",
              "Ensuring the eventual native applications (Android and iOS) are secure from known vulnerabilities,",
              "Getting involved in technical refinement sessions, understanding the technical implications and how to implement features or changes,",
              "Creating and managing the Play Store and App Store releases,",
              "Creating and maintaining the mobile CI/CD on Bitrise with deployments via the respective stores for prod, and via Firebase App Tester",
              "Done a bit of work with dotnet, C# and MySQL for supporting features needed on the mobile app",
            ],
            skills: [
              { skill: "React Native" },
              { skill: "Mobile Security" },
              { skill: "TypeScript" },
              { skill: "Mobile CI/CD" },
              { skill: "SDLC" },
              { skill: ".NET" },
              { skill: "Java" },
              { skill: "Objective-C" },
              { skill: "Firebase" },
              { skill: "C#" },
              { skill: "MySQL" },
              { skill: "Microservices" },
              { skill: "Kanban" },
              { skill: "Scrum" },
            ]
          },
          {
            title: "Software Developer",
            dateStart: "July 2021",
            dateEnd: "March 2022",
            description: "As a full-stack developer we worked on realising the vision of a convenient payment that invloved contactless peer-to-peer payments and a Point of Sale system that accepts physical cards for payment as a mobile app (SoftPOS)",
            location: "Lipa Payments, Remote",
            rolesAndAchievements: [
              "Responsible for building the mobile apps that are currently used as the payment solution that the startup envisioned",
              "Contributed to building APIs that form part of the core system",
              "Contributed to piloting a solution that won the startup R10 million in investment funding"
            ],
            skills: [
              { skill: "React Native" },
              { skill: "Mobile Security" },
              { skill: "TypeScript" },
              { skill: "Mobile CI/CD" },
              { skill: "SDLC" },
              { skill: "Java" },
              { skill: "Kotlin" },
              { skill: "Spring" },
              { skill: "React" },
              { skill: "MongoDB" },
              { skill: "CI/CD" },
              { skill: "Microservices" },
              { skill: "Scrum" },
            ]
          },
          {
            title: "Software Developer",
            dateStart: "April 2021",
            dateEnd: "August 2021",
            description: "",
            location: "Sizanani Technologies, Remote",
            rolesAndAchievements: [
              "As the sole developer, responsible for building and launching the chatbot, backend APIs and web console used by savings groups and internal admins to manage the complicated methodology used to save, authorise withdrawals and deposit, and distribute money",
              "This solution directly resulted in newly formed partnerships and funding for further development of the solution"
            ],
            skills: [
              { skill: "Spring" },
              { skill: "Java" },
              { skill: "PostgreSQL" },
              { skill: "Vue" },
              { skill: "JavaScript" },
              { skill: "Kanban" },
            ]
          },
          {
            title: "Web Development Tutor",
            dateStart: "December 2020",
            dateEnd: "Jun 2021",
            description: "",
            location: "Zaio Technology, Remote",
            rolesAndAchievements: [
              "Developed course material for React and React Native courses to be curated by an instructor",
              "Provided OnDemand assistance to subscribers",
              "Developed a very impressive React landing page"
            ],
            skills: [
              { skill: "React" },
              { skill: "React Native" },
              { skill: "JavaScript" },
            ]
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
            description: "Currently completing my advanced diploma qualification as a continuation of the software development diploma I hold. Working on an interesting project where I try to contribute to alleviating the issue with low resource language datasets in South African languages.",
            location: "Tshwane University of Technology, Pretoria",
            rolesAndAchievements: [],
            skills: [/*"Java EE", "Data Structures", "SOA", "Machine Learning", "Data Science", "Python",*/]
          },
          {
            title: "Diploma in Information Technology - Software Development",
            dateStart: "2018",
            dateEnd: "2020",
            description: "",
            location: "Rosebank College, Johannesburg",
            rolesAndAchievements: [
              "Completed with Distinction",
              "Class representative in 2018",
              "Volunteer tutor for first-year programming classes",
              "Chess Player",
            ],
            skills: []
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
            skills: []
          },
        ],
      },
    ],
  },
  name: "Steven T. Mokoena",
  slogan: "A Software Developer with a passion to solve problems",
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
  headline: "Software Developer",
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
    /*{
      title: "Passwordless Authentication",
      description:
        "...",
      date: "March 2024",
      image: {
        url: "images/abc.jpg",
        altText: "",
      },
      techStack: [
        { tech: "Java", version: "1.8" },
        { tech: "Android", version: null },
        { tech: "iOS", version: null },
        { tech: "React Native", version: "0.73" },
        { tech: "Cognito", version: null },
        { tech: "Vault", version: null },
        { tech: "Objective-C", version: null },
      ],
      githubLink: "",
      liveLink: "",
    },*/
  ],
};

export const Context = React.createContext<GlobalStateType>(initState);

const Store: React.FC = ({ children }) => {
  const [globalState, setGlobalState] = useState(initState);

  return <Context.Provider value={globalState}>{children}</Context.Provider>;
};

export default Store;
