export type SkillBadgeType = {
  skill: SkillType;
  level?: string;
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
  | "Mobile CI/CD"
  | "Microservices"
  | "Git"
  | "SDLC"
  | "SQL"
  | "MongoDB"
  | "REST API"
  | "Kubernetes"
  | "Docker"
  | ".NET"
  | "C#"
  | "Mobile Security"
  | "Objective-C"
  | "Swift"
  | "Firebase"
  | "MySQL"
  | "PostgreSQL"
  | "T-SQL"
  | "Vue"
  | "Scrum"
  | "Kanban"
  | "Android"
  | "iOS"
  | "Windows"
  | "Vault"
  | "Cognito";

export type SkillBadgeIconPropsType = {
  size: `${number}px`;
};
