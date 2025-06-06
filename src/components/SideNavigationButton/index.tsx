import { Box } from "@mui/material";
import React from "react";
import { colorPalette } from "../../hooks/useAppTheme";
import { NavigationButtonType } from "./types";
import UseSideNavigationButton from "./useSideNavigationButton";

interface ISideNavigationButtonProps {
  readonly button: NavigationButtonType;
  readonly isActive: boolean;
}

const SideNavigationButton: React.FC<ISideNavigationButtonProps> = ({
  button,
  isActive,
}) => {
  const { hover, handleMouseEnter, handleMouseLeave } =
    UseSideNavigationButton();
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
    >
      <Box component="span" sx={styles.iconWrapper}>
        <button.Icon
          color={hover || isActive ? colorPalette.onPrimary : colorPalette.onSurface}
          size={"20px"}
        />
      </Box>
      {/* @ts-ignore */}
      {hover && (
        <Box component="span" sx={styles.buttonText}>
          {button.text}
        </Box>
      )}
    </Box>
  );
};

const styles = {
  main: {
    width: "55px",
    height: "55px",
    borderRadius: "27.5px",
    marginBottom: "10px",
    background: colorPalette.surface,
    opacity: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
  },
  iconWrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minWidth: "55px",
  },
  hover: {
    background: colorPalette.primary,
    width: "max-content",
  },
  selected: {
    background: colorPalette.primary,
  },
  buttonText: {
    paddingRight: "35px",
    color: colorPalette.onPrimary,
  },
};

export default SideNavigationButton;
