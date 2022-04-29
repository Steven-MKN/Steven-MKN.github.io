import React, {useState} from "react";
import SideNavigationButton from "../SideNavigationButton";
import {NavigationButtonType} from "../SideNavigationButton/types";
import {
  MdHome,
  MdInsertDriveFile,
  MdMiscellaneousServices, MdOutlineMailOutline,
  MdOutlineVerticalSplit,
  MdPersonOutline
} from "react-icons/md";
import {Box, Drawer} from "@mui/material";
import {GiHamburgerMenu} from "react-icons/gi";
import SideNavigationListItem from "../SideNavigationListItem";

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
  const anchor = 'left'
  const [isOpen, setIsOpen] = useState(false)
  const handleDrawerToggle = () => {
      setIsOpen(!isOpen)
  }

  // @ts-ignore
  return <>
    {/* @ts-ignore */}
    <Box sx={styles.main} container>
      <Box sx={styles.buttonList}>
        {
          navigationItems.map(it => <SideNavigationButton button={it} key={it.relativeRoute}/>)
        }
      </Box>

    </Box>
    <Box sx={styles.menuButton} onClick={handleDrawerToggle}>
      <GiHamburgerMenu />
    </Box>
    <Drawer
        anchor={anchor}
        open={isOpen}
        onClose={handleDrawerToggle}
        sx={styles.drawer}
    >
      {
        navigationItems.map(it => <SideNavigationListItem button={it} key={it.relativeRoute}/>)
      }
    </Drawer>
  </>
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
    display: {
      xs: 'none',
      sm: 'none',
      md: 'block',
      lg: 'block',
      xl: 'block'
    },
  },
  buttonList: {
    width: 'max-content',
    height: 'max-content',
    display: 'flex',
    flexWrap: 'nowrap',
    flexDirection: 'column',
  },
  menuButton: {
    background: '#00000000',
    position: 'absolute',
    width: 'max-content',
    height: 'max-content',
    left: '5px',
    top: '5px',
    padding: '12px 12px',
    zIndex: 700,
    display: {
      xs: 'block',
      sm: 'block',
      md: 'none',
      lg: 'none',
      xl: 'none'
    },
  },
  drawer: {
    alignItems: 'stretch',
    display: {
      xs: 'flex',
      sm: 'flex',
      md: 'none',
      lg: 'none',
      xl: 'none'
    },
  }
}

export default Index
