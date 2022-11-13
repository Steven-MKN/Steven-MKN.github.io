import { useRef, useState } from "react";
import { NavigationButtonType } from "../../components/SideNavigationButton/types";
import {
  MdHome,
  MdInsertDriveFile,
  MdOutlineMailOutline,
  MdOutlineVerticalSplit,
  MdPersonOutline,
} from "react-icons/md";

const _navigationItems: NavigationButtonType[] = [
  {
    Icon: MdHome,
    text: "Home",
    relativeRoute: "#home",
    selected: false,
  },
  {
    Icon: MdPersonOutline,
    text: "About Me",
    relativeRoute: "#about",
    selected: false,
  },
  {
    Icon: MdInsertDriveFile,
    text: "Resume",
    relativeRoute: "#resume",
    selected: false,
  },
  {
    Icon: MdOutlineVerticalSplit,
    text: "Projects",
    relativeRoute: "#projects",
    selected: false,
  },
  {
    Icon: MdOutlineMailOutline,
    text: "Contact Me",
    relativeRoute: "#contact",
    selected: false,
  },
];

const useLandingPage = () => {
  const [navigationItems, setNavigationItems] = useState(_navigationItems);

  const sectionRefs = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
  ];

  return {
    navigationItems,
    sectionRefs,
  };
};

export default useLandingPage;
