import React, {useState} from "react";
import {SocialIconType, SocialLinkType} from "./types";
import {GrLinkedinOption, GrTwitter, GrCircleQuestion, GrGithub} from "react-icons/gr";
import {MdEmail, MdOutlinePhone} from "react-icons/md";
import {FaWhatsapp} from "react-icons/fa";

const mapTypeToIcon = (type: SocialIconType, hover: boolean) => {
  const props = {
    color: hover? '#3c4072': '#171717'
  }
  switch (type) {
    case "linkedin":
      return <GrLinkedinOption {...props}/>;
    case "twitter":
      return <GrTwitter {...props}/>;
    case "cell":
      return <MdOutlinePhone {...props}/>;
    case "email":
      return <MdEmail {...props}/>;
    case "whatsapp":
      return <FaWhatsapp {...props}/>;
    case "github":
      return <GrGithub {...props}/>;
    default:
      return <GrCircleQuestion {...props}/>;
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

  return <span
    style={styles.main}
    onMouseEnter={handleMouseEnter}
    onMouseLeave={handleMouseLeave}
    onClick={handleClick}
  >
    {mapTypeToIcon(type, hover)}
  </span>
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
