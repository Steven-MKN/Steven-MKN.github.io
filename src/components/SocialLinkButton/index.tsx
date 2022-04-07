import React from "react";
import {SocialIconType, SocialLinkType} from "./types";
import {GrLinkedinOption, GrTwitter, GrCircleQuestion} from "react-icons/gr";
import {MdEmail, MdOutlinePhone} from "react-icons/md";
import {FaWhatsapp} from "react-icons/fa";

const mapTypeToIcon = (type: SocialIconType) => {
  switch (type) {
    case "linkedin":
      return <GrLinkedinOption/>;
    case "twitter":
      return <GrTwitter/>;
    case "cell":
      return <MdOutlinePhone/>;
    case "email":
      return <MdEmail/>;
    case "whatsapp":
      return <FaWhatsapp/>;
    default:
      return <GrCircleQuestion/>;
  }
}

const SocialLinkButton: React.FC<SocialLinkType> = ({link, type}) => {
  return <span style={styles.main}>{mapTypeToIcon(type)}</span>
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
    borderRadius: "16px"
  }
}

export default SocialLinkButton
