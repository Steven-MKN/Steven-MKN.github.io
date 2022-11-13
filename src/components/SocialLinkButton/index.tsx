import React from "react";
import { SocialLinkType } from "./types";
import { Box } from "@mui/material";
import UseSocialLinkButton from "./useSocialLinkButton";
import { mapTypeToIcon } from "./index.helper";

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
    background: "rgba(255,255,255,0.50)",
    borderRadius: "16px",
    cursor: "pointer",
  },
};

export default SocialLinkButton;
