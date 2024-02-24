import { SkillBadgeType } from "../SkillBadge/types";

export type ResumeSectionItemType = {
  readonly title: string;
  readonly dateStart: string;
  readonly dateEnd: string;
  readonly location: string;
  readonly description: string;
  readonly rolesAndAchievements: string[];
  readonly skills: SkillBadgeType[];
};
