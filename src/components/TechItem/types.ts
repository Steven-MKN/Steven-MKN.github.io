export type TechType =
  | "Java"
  | "React"
  | "JavaScript"
  | "React Native"
  | "TypeScript"
  | "Spring"
  | "Kotlin"
  | "MongoDB"
  | "SQL"
  | "SDLC"
  | "Microservices"
  | "CI/CD"
  | "Docker"
  | "Git"
  | "Kubernetes"
  | string;

export type TechItemType = {
  readonly tech: TechType;
  readonly version: string | null;
};

export type TechItemPropType = {
  color: `#${string}`;
  size: `${number}px`;
};
