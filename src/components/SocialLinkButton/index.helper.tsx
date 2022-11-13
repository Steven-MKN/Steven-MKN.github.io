import { SocialIconType, SocialLinkButtonIconPropType } from "./types";
import {
  GrCircleQuestion,
  GrGithub,
  GrLinkedinOption,
  GrTwitter,
} from "react-icons/gr";
import { MdEmail, MdOutlinePhone } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import React from "react";

export const mapTypeToIcon = (
  type: SocialIconType,
  iconProps: (a: boolean) => SocialLinkButtonIconPropType,
  hover: boolean
) => {
  switch (type) {
    case "linkedin":
      return <GrLinkedinOption {...iconProps(hover)} />;
    case "twitter":
      return <GrTwitter {...iconProps} />;
    case "cell":
      return <MdOutlinePhone {...iconProps(hover)} />;
    case "email":
      return <MdEmail {...iconProps(hover)} />;
    case "whatsapp":
      return <FaWhatsapp {...iconProps(hover)} />;
    case "github":
      return <GrGithub {...iconProps(hover)} />;
    default:
      return <GrCircleQuestion {...iconProps(hover)} />;
  }
};
