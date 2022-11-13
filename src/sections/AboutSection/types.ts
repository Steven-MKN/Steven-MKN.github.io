import { SkillBadgeType } from "../../components/SkillBadge/types";
import { ResumeType } from "../../components/Resume/types";

export type AboutSectionType = {
  readonly about: string[];
  readonly skills: SkillBadgeType[];
  readonly resume: ResumeType;
};
