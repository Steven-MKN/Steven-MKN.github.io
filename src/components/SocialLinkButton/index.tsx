import React, {useState} from "react";
import {SocialIconType, SocialLinkType} from "./types";
import {GrLinkedinOption, GrTwitter, GrCircleQuestion} from "react-icons/gr";
import {MdEmail, MdOutlinePhone} from "react-icons/md";
import {FaWhatsapp} from "react-icons/fa";

const mapTypeToIcon = (type: SocialIconType, hover: boolean) => {
  switch (type) {
    case "linkedin":
      return <GrLinkedinOption color={hover? '#3c4072': '#171717'}/>;
    case "twitter":
      return <GrTwitter color={hover? '#3c4072': '#171717'}/>;
    case "cell":
      return <MdOutlinePhone color={hover? '#3c4072': '#171717'}/>;
    case "email":
      return <MdEmail color={hover? '#3c4072': '#171717'}/>;
    case "whatsapp":
      return <FaWhatsapp color={hover? '#3c4072': '#171717'}/>;
    default:
      return <GrCircleQuestion color={hover? '#3c4072': '#171717'}/>;
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

  return <span
    style={styles.main}
    onMouseEnter={handleMouseEnter}
    onMouseLeave={handleMouseLeave}
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
