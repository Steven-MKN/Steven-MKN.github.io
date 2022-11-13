import React from "react";
import { SkillBadgeType } from "./types";
import { Box } from "@mui/material";
import UseSkillBadge from "./useSkillBadge";
import { mapSkillToIcon } from "./index.helper";

interface ISkillBadgeProps {
  readonly skill: SkillBadgeType;
}

const SkillBadge: React.FC<ISkillBadgeProps> = ({ skill }) => {
  const { iconProps } = UseSkillBadge();
  return (
    // @ts-ignore
    <Box component="span" sx={styles.main}>
      {mapSkillToIcon(iconProps, skill.skill)}
      <Box component="span" className={"text"} sx={styles.skillText}>
        {skill.skill}
      </Box>
      <Box component="span" className={"text"} sx={styles.levelText}>
        ({skill.level})
      </Box>
    </Box>
  );
};

const styles = {
  main: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "14px 20px 28px 20px ",
  },
  skillText: {
    fontSize: 14,
  },
  levelText: {
    fontSize: 12,
  },
};

export default SkillBadge;
