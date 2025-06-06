import { Box, Divider } from "@mui/material";
import React from "react";
import { colorPalette } from "../../hooks/useAppTheme";
import { SideMenuItemType } from "./types";
import UseSideNavigationListItem from "./useSideNavigationListItem";

interface ISideSideMenuItemProps {
  readonly button: SideMenuItemType;
  readonly handleClick: (relativeRoute: string) => void;
  readonly isActive: boolean;
}

const SideSideMenuItem: React.FC<ISideSideMenuItemProps> = ({
  button,
  handleClick,
  isActive,
}) => {
  const { hover, handleMouseEnter, handleMouseLeave } =
    UseSideNavigationListItem();
  return (
    <Box
      component="span"
      sx={{
        ...styles.main,
        ...(hover ? styles.hover : {}),
        ...(isActive ? styles.hover : {}),
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={() => {
        handleClick(button.relativeRoute);
      }}
    >
      <Divider />
      <Box component="span" sx={styles.iconWrapper}>
        <button.Icon
          color={hover || isActive ? colorPalette.primary : colorPalette.onSurface}
          size={"20px"}
        />
      </Box>
      {/* @ts-ignore */}
      <Box component="span" sx={styles.buttonText(hover, isActive)}>
        {button.text}
      </Box>
    </Box>
  );
};

const styles = {
  main: {
    width: "100%",
    height: "55px",
    marginBottom: "10px",
    opacity: 1,
    display: "flex",
    justifyContent: "left",
    alignItems: "center",
    cursor: "pointer",
    padding: "0px 12px",
    alignSelf: "stretch",
  },
  iconWrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingRight: "8px",
  },
  hover: {
    background: colorPalette.primary,
    color: colorPalette.onPrimary,
  },
  selected: {
    background: colorPalette.primary,
    color: colorPalette.onPrimary,
  },
  buttonText: (isHover: boolean, isSelected: boolean) => ({
    paddingRight: "35px",
    color: isHover || isSelected ? colorPalette.onPrimary : colorPalette.onSurface,
  }),
};

export default SideSideMenuItem;
