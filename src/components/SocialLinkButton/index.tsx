import { Box } from "@mui/material";
import React from "react";
import { mapTypeToIcon } from "./index.helper";
import { SocialLinkType } from "./types";
import UseSocialLinkButton from "./useSocialLinkButton";
import { colorPalette } from "../../hooks/useAppTheme";

const SocialLinkButton: React.FC<SocialLinkType> = ({ link, type }) => {
  const { handleMouseLeave, handleMouseEnter, handleClick, hover, iconProps } =
    UseSocialLinkButton();

  return (
    <Box
      component="span"
      sx={styles.main}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={() => {
        handleClick(link);
      }}
    >
      {mapTypeToIcon(type, iconProps, hover)}
    </Box>
  );
};

const styles = {
  main: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "32px",
    height: "32px",
    marginLeft: "5px",
    marginRight: "5px",
    background: colorPalette.surface,
    borderRadius: "16px",
    cursor: "pointer",
  },
};

export default SocialLinkButton;
