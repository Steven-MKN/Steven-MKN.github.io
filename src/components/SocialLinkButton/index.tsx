import React, {useState} from "react";
import {SocialIconType, SocialLinkType} from "./types";
import {GrLinkedinOption, GrTwitter, GrCircleQuestion, GrGithub} from "react-icons/gr";
import {MdEmail, MdOutlinePhone} from "react-icons/md";
import {FaWhatsapp} from "react-icons/fa";
import {Box} from "@mui/material";

const iconProps = (hover: boolean) => ({
  color: hover? '#3c4072': '#171717'
})

const mapTypeToIcon = (type: SocialIconType, hover: boolean) => {
  switch (type) {
    case "linkedin":
      return <GrLinkedinOption {...iconProps(hover)}/>;
    case "twitter":
      return <GrTwitter {...iconProps}/>;
    case "cell":
      return <MdOutlinePhone {...iconProps(hover)}/>;
    case "email":
      return <MdEmail {...iconProps(hover)}/>;
    case "whatsapp":
      return <FaWhatsapp {...iconProps(hover)}/>;
    case "github":
      return <GrGithub {...iconProps(hover)}/>;
    default:
      return <GrCircleQuestion {...iconProps(hover)}/>;
  }
}

const SocialLinkButton: React.FC<SocialLinkType> = ({link, type}) => {
  const [hover, setHover] = useState(false)

  const handleMouseEnter = () => {
    setHover(true)
  }

  const handleMouseLeave = () => {
    setHover(false)
  }

  const handleClick = () => {
    window.open(link, "_blank")?.focus()
  }

  return <Box component="span"
    sx={styles.main}
    onMouseEnter={handleMouseEnter}
    onMouseLeave={handleMouseLeave}
    onClick={handleClick}
  >
    {mapTypeToIcon(type, hover)}
  </Box>
}

const styles = {
  main: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '32px',
    height: '32px',
    marginLeft: "5px",
    marginRight: "5px",
    background: "rgba(255,255,255,0.50)",
    borderRadius: "16px",
    cursor: "pointer",
  }
}

export default SocialLinkButton
