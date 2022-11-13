import React from "react";
import SideNavigationButton from "../SideNavigationButton";
import { NavigationButtonType } from "../SideNavigationButton/types";
import { Box, Drawer } from "@mui/material";
import { GiHamburgerMenu } from "react-icons/gi";
import SideNavigationListItem from "../SideNavigationListItem";
import UseSideNavigation from "./useSideNavigation";

interface ISideNavigationProps {
  readonly navigationItems: NavigationButtonType[];
  readonly activeSection: number;
}

const SideNavigation: React.FC<ISideNavigationProps> = ({
  navigationItems,
  activeSection,
}) => {
  const { handleDrawerToggle, handleNavItemClick, anchor, isOpen } =
    UseSideNavigation();

  // @ts-ignore
  return (
    <>
      {/* @ts-ignore */}
      <Box sx={styles.main} container>
        <Box sx={styles.buttonList}>
          {navigationItems.map((it, index) => (
            <SideNavigationButton
              button={it}
              key={it.relativeRoute}
              isActive={index === activeSection}
            />
          ))}
        </Box>
      </Box>
      <Box sx={styles.menuButton} onClick={handleDrawerToggle}>
        <GiHamburgerMenu size={26} />
      </Box>
      <Drawer
        anchor={anchor}
        open={isOpen}
        onClose={handleDrawerToggle}
        sx={styles.drawer}
      >
        {navigationItems.map((it, index) => (
          <SideNavigationListItem
            button={it}
            key={it.relativeRoute}
            handleClick={() => {
              handleNavItemClick(it.relativeRoute);
            }}
            isActive={index === activeSection}
          />
        ))}
      </Drawer>
    </>
  );
};

const styles = {
  main: {
    position: "absolute",
    width: "max-content",
    height: "max-content",
    left: "5px",
    top: "50%",
    transform: "translate(0, -50%)",
    padding: "12px 18px",
    zIndex: 700,
    display: {
      xs: "none",
      sm: "none",
      md: "block",
      lg: "block",
      xl: "block",
    },
  },
  buttonList: {
    width: "max-content",
    height: "max-content",
    display: "flex",
    flexWrap: "nowrap",
    flexDirection: "column",
  },
  menuButton: {
    background: "#00000000",
    position: "absolute",
    width: "max-content",
    height: "max-content",
    left: "5px",
    top: "5px",
    padding: "12px 12px",
    zIndex: 700,
    display: {
      xs: "block",
      sm: "block",
      md: "none",
      lg: "none",
      xl: "none",
    },
  },
  drawer: {
    alignItems: "stretch",
    display: {
      xs: "flex",
      sm: "flex",
      md: "none",
      lg: "none",
      xl: "none",
    },
  },
};

export default SideNavigation;
