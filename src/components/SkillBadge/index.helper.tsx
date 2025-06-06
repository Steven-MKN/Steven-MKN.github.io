import { Typography } from "@mui/material";
import { AiOutlineApi } from "react-icons/ai";
import { BiColumns, BiNetworkChart } from "react-icons/bi";
import { DiCode, DiDatabase, DiGitPullRequest, DiPostgresql } from "react-icons/di";
import { FaAndroid, FaAppStoreIos, FaAws, FaJava, FaVuejs } from "react-icons/fa";
import { GoIterations } from "react-icons/go";
import { GrPowerCycle } from "react-icons/gr";
import { IoInfinite, IoLogoWindows } from "react-icons/io5";
import { MdOutlineSecurity } from "react-icons/md";
import { RiReactjsLine } from "react-icons/ri";
import {
  SiCsharp,
  SiDocker,
  SiDotnet,
  SiFirebase,
  SiJavascript,
  SiJetpackcompose,
  SiKubernetes,
  SiMongodb,
  SiMysql,
  SiReact,
  SiSpring,
  SiSwift,
  SiTypescript,
  SiVault,
} from "react-icons/si";
import { TbBrandKotlin } from "react-icons/tb";
import { SkillBadgeIconPropsType, SkillType } from "./types";

export const mapSkillToIcon = (
  iconProps: SkillBadgeIconPropsType,
  skill: SkillType
) => {
  switch (skill) {
    case "Java":
      return <FaJava {...iconProps} />;
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
      return <TbBrandKotlin {...iconProps} />;
    case "MongoDB":
      return <SiMongodb {...iconProps} />;
    case "MySQL":
      return <SiMysql {...iconProps} />;
    case "PostgreSQL":
      return <DiPostgresql {...iconProps} />;
    case "T-SQL":
    case "SQL":
      return <DiDatabase {...iconProps} />;
    case "SDLC":
      return <GrPowerCycle {...iconProps} />;
    case "Microservices":
      return <BiNetworkChart {...iconProps} />;
    case "Docker":
      return <SiDocker {...iconProps} />;
    case "Git":
      return <DiGitPullRequest {...iconProps} />;
    case "Kubernetes":
      return <SiKubernetes {...iconProps} />;
    case "Mobile Security":
      return <MdOutlineSecurity {...iconProps} />;
    case "CI/CD":
    case "Mobile CI/CD":
      return <IoInfinite {...iconProps} />;
    case ".NET":
      return <SiDotnet {...iconProps} />;
    case "C#":
      return <SiCsharp {...iconProps} />;
    case "REST API":
      return <AiOutlineApi {...iconProps} />;
    case "Mobile Security":
      return <MdOutlineSecurity {...iconProps} />;
    case "Swift":
      return <SiSwift {...iconProps} />;
    case "Objective-C":
      return <Typography {...iconProps}>OBJ-C</Typography>;
    case "Firebase":
      return <SiFirebase {...iconProps} />;
    case "Vue":
      return <FaVuejs {...iconProps} />;
    case "Scrum":
      return <GoIterations {...iconProps} />;
    case "Kanban":
      return <BiColumns {...iconProps} />;
    case "Android":
      return <FaAndroid {...iconProps} />;
    case "iOS":
      return <FaAppStoreIos {...iconProps} />;
    case "Windows":
      return <IoLogoWindows {...iconProps} />;
    case "Vault":
      return <SiVault {...iconProps} />;
    case "Cognito":
      return <FaAws {...iconProps} />;
    case "Compose Multiplatform":
      return <SiJetpackcompose {...iconProps} />;
    default:
      return <DiCode {...iconProps} />;
  }
};
