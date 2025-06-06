import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import { mapToIcon } from "./index.helper";
import { ContactInfoType } from "./types";
import UseContactInfo from "./useContactInfo";
import { colorPalette } from "../../hooks/useAppTheme";

interface IContactInfoProps {
  readonly info: ContactInfoType;
}

const ContactInfo: React.FC<IContactInfoProps> = ({ info }) => {
  const {
    iconProps,
    hover,
    mapToName,
    formatValue,
    handleMouseLeave,
    handleMouseEnter,
    handleIconClick,
  } = UseContactInfo();

  return (
    <Box sx={styles.main}>
      <Box
        sx={styles.icon}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={() => handleIconClick(info)}
      >
        {mapToIcon(info.type, iconProps, hover)}
      </Box>
      <Stack>
        <Typography variant={"h5"}>{mapToName(info.type)}</Typography>
        <Typography variant={"body1"}>{formatValue(info)}</Typography>
      </Stack>
    </Box>
  );
};

const styles = {
  main: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: "26px 20px",
  },
  icon: {
    padding: "12px",
    color: colorPalette.onSurface,
    background: colorPalette.surface,
    width: "34px",
    height: "34px",
    borderRadius: "40px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
    marginRight: "10px",
    ":hover": {
      background: colorPalette.primary,
    },
  },
};

export default ContactInfo;
