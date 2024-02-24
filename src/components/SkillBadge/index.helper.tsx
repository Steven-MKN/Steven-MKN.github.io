import { AiOutlineApi } from "react-icons/ai";
import { DiCode, DiDatabase, DiGitPullRequest, DiPostgresql } from "react-icons/di";
import { GrPowerCycle } from "react-icons/gr";
import { IoInfinite } from "react-icons/io5";
import { MdOutlineSecurity } from "react-icons/md";
import { RiReactjsLine } from "react-icons/ri";
import { BiNetworkChart } from "react-icons/bi";
import {
  SiCsharp,
  SiDocker,
  SiDotnet,
  SiFirebase,
  SiJava,
  SiJavascript,
  SiKotlin,
  SiKubernetes,
  SiMongodb,
  SiMysql,
  SiReact,
  SiSpring,
  SiSwift,
  SiTypescript,
} from "react-icons/si";
import { SkillBadgeIconPropsType, SkillType } from "./types";
import { FaVuejs } from "react-icons/fa";

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
      return <MdOutlineSecurity {...iconProps} />
    case "CI/CD":
    case "Mobile CI/CD":
      return <IoInfinite {...iconProps} />;
    case ".NET":
      return <SiDotnet {...iconProps} />
    case "C#":
      return <SiCsharp {...iconProps} />
    case "REST API":
      return <AiOutlineApi {...iconProps} />;
    case "Mobile Security":
      return <MdOutlineSecurity {...iconProps} />;
    case "Swift":
      return <SiSwift {...iconProps} />
    case "Objective-C":
      return "OBJ-C";
    case "Firebase":
      return <SiFirebase {...iconProps} />
    case "Vue":
      return <FaVuejs {...iconProps} />
    default:
      return <DiCode {...iconProps} />;
  }
};
