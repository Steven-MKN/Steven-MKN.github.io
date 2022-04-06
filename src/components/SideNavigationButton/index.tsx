import React, {useState} from "react";
import {NavigationButtonType} from "./types";

interface ISideNavigationButtonProps {
  readonly button: NavigationButtonType
}

const SideNavigationButton: React.FC<ISideNavigationButtonProps> = ({button}) => {
  const [hover, setHover] = useState(false)

  const handleMouseEnter = () => {
    setHover(true)
  }

  const handleMouseLeave = () => {
    setHover(false)
  }

  return <span
    style={{
      ...styles.main,
      ...(hover ? styles.hover : {}),
      ...(button.selected ? styles.hover : {})
    }}
    onMouseEnter={handleMouseEnter}
    onMouseLeave={handleMouseLeave}
  >
    <span style={styles.iconWrapper}>
      <button.Icon color={"white"} size={"20px"} />
    </span>
    {/* @ts-ignore */}
    {hover && <span style={styles.buttonText}>{button.text}</span>}
  </span>
}

const styles = {
  main: {
    width: '55px',
    height: '55px',
    borderRadius: '27.5px',
    marginBottom: '10px',
    background: '#c9c9c9',
    opacity: .92,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minWidth: '55px'
  },
  hover: {
    background: '#3c4072',
    width: 'max-content',
  },
  selected: {
    background: '#3c4072',
  },
  buttonText: {
    paddingRight: '35px'
  }
}

export default SideNavigationButton
