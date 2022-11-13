import { useState } from "react";
import { SideNavigationAnchorType } from "./types";

const useSideNavigation = () => {
  const anchor: SideNavigationAnchorType = "left";
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleDrawerToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleNavItemClick = (relativeRoute: string) => {
    //handleNavigation(relativeRoute);
    //document.location.hash = relativeRoute
    if (isOpen) setIsOpen(false);
    const e = document.querySelector(relativeRoute);
    e && e.scrollIntoView(true);
  };

  return {
    handleDrawerToggle,
    handleNavItemClick,
    anchor,
    isOpen,
  };
};

export default useSideNavigation;
