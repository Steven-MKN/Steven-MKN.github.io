import React from "react";
import {SkillBadgeType, SkillType} from "./types";
import {SiDocker, SiJava, SiJavascript, SiKotlin, SiMongodb, SiReact, SiSpring, SiTypescript, SiKubernetes} from "react-icons/si";
import {RiReactjsLine} from "react-icons/ri"
import {CgInfinity} from "react-icons/cg"
import {TiFlowMerge} from "react-icons/ti"
import {DiCode, DiDatabase, DiGitPullRequest} from "react-icons/di"

interface ISkillBadgeProps {
  readonly skill: SkillBadgeType;
}

const mapSkillToIcon = (skill: SkillType) => {
  const props = {
    size: "26px",
  }
  switch (skill) {
    case "Java": return <SiJava {...props}/>;
    case "React": return <SiReact {...props}/>;
    case "JavaScript": return <SiJavascript {...props}/>;
    case "React Native": return <RiReactjsLine {...props}/>;
    case "TypeScript": return <SiTypescript {...props}/>;
    case "Spring": return <SiSpring {...props}/>;
    case "Kotlin": return <SiKotlin {...props}/>;
    case "MongoDB": return <SiMongodb {...props}/>;
    case "SQL": return <DiDatabase {...props}/>;
    case "SDLC": return <TiFlowMerge {...props}/>;
    case "Microservices": return <SiKotlin {...props}/>;
    case "CI/CD": return <CgInfinity {...props}/>;
    case "Docker": return <SiDocker {...props}/>;
    case "Git": return <DiGitPullRequest {...props}/>;
    case "Kubernetes": return <SiKubernetes {...props}/>;
    default: return <DiCode {...props}/>
  }
}

const SkillBadge: React.FC<ISkillBadgeProps> = ({skill}) => {
  return (
    // @ts-ignore
    <span style={styles.main}>
    {mapSkillToIcon(skill.skill)}
      <span style={styles.skillText}>{skill.skill}</span>
      <span style={styles.levelText}>({skill.level})</span>
  </span>
  )
}

const styles = {
  main: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '10px 8px 10px 18px'
  },
  skillText: {
    fontSize: 14
  },
  levelText: {
    fontSize: 12,
  }
}

export default SkillBadge
