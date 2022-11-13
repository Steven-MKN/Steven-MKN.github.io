export type SkillBadgeType = {
  skill: SkillType;
  level: string;
};

export type SkillType =
  | "JavaScript"
  | "TypeScript"
  | "Kotlin"
  | "React"
  | "React Native"
  | "Spring"
  | "Java"
  | "CI/CD"
  | "Microservices"
  | "Git"
  | "SDLC"
  | "SQL"
  | "MongoDB"
  | "REST API"
  | "Kubernetes"
  | "Docker";

export type SkillBadgeIconPropsType = {
  size: `${number}px`;
};
