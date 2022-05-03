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

const iconProps = {
  size: "26px",
}

const mapSkillToIcon = (skill: SkillType) => {
  switch (skill) {
    case "Java": return <SiJava {...iconProps}/>;
    case "React": return <SiReact {...iconProps}/>;
    case "JavaScript": return <SiJavascript {...iconProps}/>;
    case "React Native": return <RiReactjsLine {...iconProps}/>;
    case "TypeScript": return <SiTypescript {...iconProps}/>;
    case "Spring": return <SiSpring {...iconProps}/>;
    case "Kotlin": return <SiKotlin {...iconProps}/>;
    case "MongoDB": return <SiMongodb {...iconProps}/>;
    case "SQL": return <DiDatabase {...iconProps}/>;
    case "SDLC": return <TiFlowMerge {...iconProps}/>;
    case "Microservices": return <SiKotlin {...iconProps}/>;
    case "CI/CD": return <CgInfinity {...iconProps}/>;
    case "Docker": return <SiDocker {...iconProps}/>;
    case "Git": return <DiGitPullRequest {...iconProps}/>;
    case "Kubernetes": return <SiKubernetes {...iconProps}/>;
    default: return <DiCode {...iconProps}/>
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
