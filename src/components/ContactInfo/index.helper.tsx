import { ContactIconPropsType, ContactType } from "./types";
import { MdEmail, MdLocationPin, MdOutlinePhone } from "react-icons/md";
import { GrCircleQuestion } from "react-icons/gr";
import React from "react";

export const mapToIcon = (
  type: ContactType,
  iconProps: (a: boolean) => ContactIconPropsType,
  hover: boolean
) => {
  switch (type) {
    case "location":
      return <MdLocationPin {...iconProps(hover)} />;
    case "email":
      return <MdEmail {...iconProps(hover)} />;
    case "cell":
      return <MdOutlinePhone {...iconProps(hover)} />;
    default:
      return <GrCircleQuestion {...iconProps(hover)} />;
  }
};
