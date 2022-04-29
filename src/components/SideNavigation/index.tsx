import React from "react";
import SideNavigationButton from "../SideNavigationButton";
import {NavigationButtonType} from "../SideNavigationButton/types";
import {
  MdHome,
  MdInsertDriveFile,
  MdMiscellaneousServices, MdOutlineMailOutline,
  MdOutlineVerticalSplit,
  MdPersonOutline
} from "react-icons/md";
import {Box} from "@mui/material";

interface ISideNavigationProps {
}

const navigationItems: NavigationButtonType[] = [
  {
    Icon: MdHome,
    text: 'Home',
    relativeRoute: '#home',
    selected: true,
  },
  {
    Icon: MdPersonOutline,
    text: 'About Me',
    relativeRoute: '#about',
    selected: false,
  },
  {
    Icon: MdInsertDriveFile,
    text: 'Resume',
    relativeRoute: '#resume',
    selected: false,
  },
  {
    Icon: MdOutlineVerticalSplit,
    text: 'Projects',
    relativeRoute: '#projects',
    selected: false,
  },
  {
    Icon: MdMiscellaneousServices,
    text: 'Services',
    relativeRoute: '#services',
    selected: false,
  },
  {
    Icon: MdOutlineMailOutline,
    text: 'Contact Me',
    relativeRoute: '#contact',
    selected: false,
  }
]

const Index: React.FC<ISideNavigationProps> = () => {
  // @ts-ignore
  return <Box sx={styles.main} container>
    {/* @ts-ignore */}
    <Box sx={styles.buttonList}>
      {
        navigationItems.map(it => <SideNavigationButton button={it} key={it.relativeRoute}/>)
      }
    </Box>
  </Box>
}

const styles = {
  main: {
    position: 'absolute',
    width: 'max-content',
    height: 'max-content',
    left: '5px',
    top: '50%',
    transform: 'translate(0, -50%)',
    padding: '12px 18px',
    zIndex: 700,
  },
  buttonList: {
    width: 'max-content',
    height: 'max-content',
    display: 'flex',
    flexWrap: 'nowrap',
    flexDirection: 'column',
  }
}

export default Index
