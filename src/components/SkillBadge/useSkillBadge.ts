import { colorPalette } from "../../hooks/useAppTheme";
import { SkillBadgeIconPropsType } from "./types";

const iconProps: SkillBadgeIconPropsType = {
  size: "26px",
  color: colorPalette.onSurface,
};

const useSkillBadge = (size: "small" | "large") => {
  iconProps.size = size === "small" ? "16px" : "26px";
  return {
    iconProps,
  };
};

export default useSkillBadge;
