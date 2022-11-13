import { TechItemType } from "../TechItem/types";

export type ImageType = {
  readonly url: string;
  readonly altText: string;
};

export type ProjectType = {
  readonly title: string;
  readonly description: string;
  readonly image: ImageType;
  readonly date: string;
  readonly techStack: TechItemType[];
  readonly githubLink: string | null;
  readonly liveLink: string | null;
};
