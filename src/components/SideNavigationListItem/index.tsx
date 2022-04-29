import {Box, Divider} from "@mui/material";
import React, {useState} from "react";
import {SideMenuItemType} from "./types";

interface ISideSideMenuItemProps {
  readonly button: SideMenuItemType
}

const SideSideMenuItem: React.FC<ISideSideMenuItemProps> = ({button}) => {
  const [hover, setHover] = useState(false)

  const handleMouseEnter = () => {
    setHover(true)
  }

  const handleMouseLeave = () => {
    setHover(false)
  }

  return <Box component="span"
    sx={{
      ...styles.main,
      ...(hover ? styles.hover : {}),
      ...(button.selected ? styles.hover : {})
    }}
    onMouseEnter={handleMouseEnter}
    onMouseLeave={handleMouseLeave}
  >
    <Divider />
    <Box component="span" sx={styles.iconWrapper}>
      <button.Icon color={hover || button.selected? "#e7e7e7": "#171717"} size={"20px"}/>
    </Box>
    {/* @ts-ignore */}
    <Box component="span" sx={styles.buttonText}>{button.text}</Box>
  </Box>
}

const styles = {
  main: {
    width: '100%',
    height: '55px',
    marginBottom: '10px',
    opacity: 1,
    display: 'flex',
    justifyContent: 'left',
    alignItems: 'center',
    cursor: "pointer",
    padding: "0px 12px",
    alignSelf: 'stretch'
  },
  iconWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingRight: '8px'
  },
  hover: {
    background: '#3c4072',
    width: 'max-content',
  },
  selected: {
    background: '#3c4072',
  },
  buttonText: {
    paddingRight: '35px',
    color: '#323232',
  }
}

export default SideSideMenuItem
