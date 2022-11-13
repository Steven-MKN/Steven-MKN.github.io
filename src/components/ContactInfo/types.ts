export type ContactType = "location" | "email" | "cell";

export type ContactInfoType = {
  readonly type: ContactType;
  readonly value: string;
};

export type ContactIconPropsType = {
  color: `#${string}`;
  size: number;
};
