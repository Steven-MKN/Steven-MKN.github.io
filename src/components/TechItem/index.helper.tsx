import { TechItemPropType, TechType } from "./types";
import React from "react";
import { SiJava } from "react-icons/si";
import { DiCode } from "react-icons/di";

export const mapTechIcon = (
  iconProps: TechItemPropType,
  tech: TechType
): React.ReactElement => {
  switch (tech) {
    case "Java":
      return <SiJava {...iconProps} />;
    default:
      return <DiCode {...iconProps} />;
  }
};
