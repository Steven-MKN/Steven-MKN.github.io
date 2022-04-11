import React from "react";
import withFullScreenSection from "../hocs/withFullScreenSection";
import SubSection from "../components/SubSection";
import SkillBadge from "../components/SkillBadge";
import {SkillBadgeType} from "../components/SkillBadge/types";
import {ResumeType} from "../components/Resume/types";
import Resume from "../components/Resume";

interface IAboutSectionProps {
}

const about: {about: string[], skills: SkillBadgeType[], resume: ResumeType} = {
  about: [
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
  }
}

const AboutSection: React.FC<IAboutSectionProps> = () => {

  return <div>
    <SubSection>
      {
        /* @ts-ignore */
        about.about.map(it => <p style={styles.about}>{it}</p>)
      }
    </SubSection>
    <SubSection title={"Skills"}>
      {/* @ts-ignore */}
      <div style={styles.skills}>
        {about.skills.map(it => <SkillBadge skill={it} />)}
      </div>
    </SubSection>
    <SubSection title={"Resume"}>
      {/* @ts-ignore */}
      <div style={styles.resume}>
        <Resume resume={about.resume}/>
      </div>
    </SubSection>
  </div>
}

const styles = {
  skills: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: "wrap",
    justifyContent: "center"
  },
  about: {

  },
  resume: {

  }
}

export default withFullScreenSection(AboutSection, "About Me")
