import { Box } from "@mui/material";
import React from "react";
import { mapSkillToIcon } from "./index.helper";
import { SkillBadgeType } from "./types";
import useSkillBadge from "./useSkillBadge";

interface ISkillBadgeProps {
  readonly skill: SkillBadgeType;
  readonly size?: "small" | "large";
}

const SkillBadge: React.FC<ISkillBadgeProps> = ({ skill, size = "large" }) => {
  const { iconProps } = useSkillBadge(size);
  return (
    // @ts-ignore
    <Box component="span" sx={styles.main} padding={size == "small" ? "2px 16px 16px 2px" : "14px 20px 28px 20px"}>
      {mapSkillToIcon(iconProps, skill.skill)}
      <Box component="span" className={"text"} fontSize={size == "small" ? 12 : 14}>
        {skill.skill}
      </Box>
      {
        skill.level ? (
          <Box component="span" className={"text"} fontSize={size == "small" ? 12 : 14}>
        ({skill.level})
      </Box>
        ) : null
      }
    </Box>
  );
};

const styles = {
  main: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
};

export default SkillBadge;
