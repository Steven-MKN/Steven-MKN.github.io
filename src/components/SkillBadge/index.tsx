import React from "react";
import {SkillBadgeType, SkillType} from "./types";
import {SiDocker, SiJava, SiJavascript, SiKotlin, SiMongodb, SiReact, SiSpring, SiTypescript, SiKubernetes} from "react-icons/si";
import {RiReactjsLine} from "react-icons/ri"
import {CgInfinity} from "react-icons/cg"
import {TiFlowMerge} from "react-icons/ti"
import {DiCode, DiDatabase, DiGitPullRequest} from "react-icons/di"
import {Box} from "@mui/material";

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
    <Box component="span" sx={styles.main}>
    {mapSkillToIcon(skill.skill)}
      <Box component="span" className={"text"} sx={styles.skillText}>{skill.skill}</Box>
      <Box component="span" className={"text"} sx={styles.levelText}>({skill.level})</Box>
  </Box>
  )
}

const styles = {
  main: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '14px 20px 28px 20px '
  },
  skillText: {
    fontSize: 14
  },
  levelText: {
    fontSize: 12,
  }
}

export default SkillBadge
