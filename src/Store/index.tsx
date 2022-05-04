import React, {useState} from "react";
import {GlobalStateType} from "./types";

const initState: GlobalStateType = {
    darkMode: false,
    aboutText: [
        'I have a diploma in software development with Rosebank College. Currently, I work for Lipa Payments on contract and have experience with React, React Native, Spring, MongoDB, MySQL, CI/CD and Microservices.',
        'I completed my matric in 2015 with distinctions in accounting and pure maths. I went to study BCom Accounting at UCT (University of Cape Town). In 2018, I could not settle my previous years fees, and was forced to postpone my studies. I then decided to study Software Development at Rosebank College (the fees were much more affordable). I have since begun to love software development.',
        'My goal is to grow as a software developer so that I can lead large projects. I continue to grow on a daily basis, be it learning about how to improve my architectures, application security or continuous deployment pipelines.'
    ],
    skills: [
        {skill: 'TypeScript', level: 'advanced'},
        {skill: 'Git', level: 'advanced'},
        {skill: 'React', level: 'intermediate'},
        {skill: 'React Native', level: 'intermediate'},
        {skill: 'Spring', level: 'intermediate'},
        {skill: 'Kotlin', level: 'intermediate'},
        {skill: 'SDLC', level: 'intermediate'},
        {skill: 'SQL', level: 'intermediate'},
        {skill: 'Java', level: 'intermediate'},
        {skill: 'REST API', level: 'intermediate'},
        {skill: 'Kubernetes', level: 'basic'},
        {skill: 'MongoDB', level: 'basic'},
        {skill: 'Docker', level: 'basic'},
        {skill: 'CI/CD', level: 'basic'},
    ],
    resume: {
        summary: '',
        sections: [
            {
                title: 'Experience',
                items: [
                    {
                        title: 'Junior Software Developer',
                        dateStart: 'July 2021',
                        dateEnd: 'March 2022',
                        description: '',
                        location: 'Lipa Payments, Remote',
                        rolesAndAchievements: [
                            'Developed React Native app that integrates in-house Bluetooth SDK and NFC SDK',
                            'Developed React Dashboard used by tenants to Lipa',
                            'Developed a Microservices backend to manage and interact with all our client applications'
                        ]
                    },
                    {
                        title: 'Java Developer',
                        dateStart: 'April 2021',
                        dateEnd: 'August 2021',
                        description: '',
                        location: 'Sizanani Technologies, Remote',
                        rolesAndAchievements: [
                            'Developed chatbot used for administration of saving groups',
                            'Developed REST API for dashboard used to manage saving groups',
                        ]
                    }
                ]
            },
            {
                title: 'Education',
                items: [
                    {
                        title: 'Diploma in Information Technology - Software Development',
                        dateStart: '2018',
                        dateEnd: '2020',
                        description: '',
                        location: 'Rosebank College, Johannesburg',
                        rolesAndAchievements: [
                            'Multiple Distinction',
                            'Cum Laude',
                            'Chess Player',
                        ]
                    },
                    {
                        title: 'Bcom Accounting',
                        dateStart: '2016',
                        dateEnd: '2017',
                        description: '',
                        location: 'University of Cape Town, Cape Town',
                        rolesAndAchievements: [
                            'Multiple Distinction',
                            'Cum Laude',
                            'Chess Player',
                        ]
                    }
                ]
            }
        ]
    },
    name: "Steven T. Mokoena",
    slogan: "A full-stack developer with a passion to solve problems",
    socialLinks: [
        {type: "linkedin", link: "https://www.linkedin.com/in/steven1mokoena"},
        {type: "whatsapp", link: "https://wa.me/27622995782"},
        {type: "cell", link: "tel:+27622995782"},
        {type: "email", link: "mailto:steventmokoena@gmail.com"},
        {type: "github", link: "https://github.com/Steven-MKN"},
    ],
    contactMessage: "Hey, would you like to get in touch or give me feedback on any of my work (negative or positive)?, feel free to use any of the options to contact me",
    contactInfo: [
        {type: "location", value: "Johannesburg, South Africa"},
        {type: "email", value: "steventmokoena@gmail.com"},
        {type: "cell", value: "+27622995782"}
    ],
    headline: "Full-Stack Developer",
    projects: [{
        title: "Insight Covid 19",
        description: "bluh bluh bluh",
        date: "March 2020",
        image: {
            url: "images/insight-covid-19.jpg",
            altText: ""
        },
        techStack: [
            {tech: "Java", version: "1.8"},
            {tech: "Android", version: null},
        ],
        githubLink: "https://github.com/Steven-MKN/insight-covid19",
        liveLink: "https://bit.ly/insight_v4_1"
    }]
}

export const Context = React.createContext<GlobalStateType>(initState)

const Store: React.FC = ({children}) => {
    const [globalState, setGlobalState] = useState(initState);

    return (
        <Context.Provider value={globalState}>
            {children}
        </Context.Provider>
    )
}

export default Store;
