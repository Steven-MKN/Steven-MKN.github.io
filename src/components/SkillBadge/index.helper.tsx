import { SkillBadgeIconPropsType, SkillType } from "./types";
import {
  SiDocker,
  SiJava,
  SiJavascript,
  SiKotlin,
  SiKubernetes,
  SiMongodb,
  SiReact,
  SiSpring,
  SiTypescript,
} from "react-icons/si";
import { RiReactjsLine } from "react-icons/ri";
import { DiCode, DiDatabase, DiGitPullRequest } from "react-icons/di";
import { TiFlowMerge } from "react-icons/ti";
import { CgInfinity } from "react-icons/cg";
import React from "react";

export const mapSkillToIcon = (
  iconProps: SkillBadgeIconPropsType,
  skill: SkillType
) => {
  switch (skill) {
    case "Java":
      return <SiJava {...iconProps} />;
    case "React":
      return <SiReact {...iconProps} />;
    case "JavaScript":
      return <SiJavascript {...iconProps} />;
    case "React Native":
      return <RiReactjsLine {...iconProps} />;
    case "TypeScript":
      return <SiTypescript {...iconProps} />;
    case "Spring":
      return <SiSpring {...iconProps} />;
    case "Kotlin":
      return <SiKotlin {...iconProps} />;
    case "MongoDB":
      return <SiMongodb {...iconProps} />;
    case "SQL":
      return <DiDatabase {...iconProps} />;
    case "SDLC":
      return <TiFlowMerge {...iconProps} />;
    case "Microservices":
      return <SiKotlin {...iconProps} />;
    case "CI/CD":
      return <CgInfinity {...iconProps} />;
    case "Docker":
      return <SiDocker {...iconProps} />;
    case "Git":
      return <DiGitPullRequest {...iconProps} />;
    case "Kubernetes":
      return <SiKubernetes {...iconProps} />;
    default:
      return <DiCode {...iconProps} />;
  }
};
