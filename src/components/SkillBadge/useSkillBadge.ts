import { SkillBadgeIconPropsType } from "./types";

const iconProps: SkillBadgeIconPropsType = {
  size: "26px",
};

const useSkillBadge = (size: "small" | "large") => {
  iconProps.size = size === "small" ? "16px" : "26px";
  return {
    iconProps,
  };
};

export default useSkillBadge;
