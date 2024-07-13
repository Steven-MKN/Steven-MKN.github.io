import { TechItemPropType, TechType } from "./types";
import React from "react";
import { mapSkillToIcon } from "../SkillBadge/index.helper";
import { SkillType } from "../SkillBadge/types";

export const mapTechIcon = (
  iconProps: TechItemPropType,
  tech: TechType
): React.ReactElement => {
  return mapSkillToIcon(iconProps, tech as SkillType);
};
