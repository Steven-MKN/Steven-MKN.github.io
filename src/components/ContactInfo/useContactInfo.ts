import { ContactIconPropsType, ContactInfoType, ContactType } from "./types";
import { useState } from "react";

const iconProps = (hover: boolean): ContactIconPropsType => ({
  color: hover ? "#ffffff" : "#171717",
  size: 26,
});

const mapToName = (type: ContactType): string => {
  return type === "location"
    ? "Location"
    : type === "cell"
    ? "Call"
    : type === "email"
    ? "Email"
    : type;
};

const formatValue = (info: ContactInfoType): string => {
  switch (info.type) {
    case "location":
      return info.value;
    case "email":
      return info.value;
    case "cell":
      return info.value;
    default:
      return info.value;
  }
};

const makeLink = (info: ContactInfoType): string | null => {
  switch (info.type) {
    case "location":
      return new URL(
        "https://google.com/maps/place/" + info.value.replaceAll(",", "+")
      ).toString();
    case "cell":
      return "tel:" + info.value.replaceAll(" ", "");
    case "email":
      return "mailto:" + info.value;
    default:
      return null;
  }
};

const useContactInfo = () => {
  const [hover, setHover] = useState(false);

  const handleMouseEnter = () => {
    setHover(true);
  };

  const handleMouseLeave = () => {
    setHover(false);
  };

  const handleIconClick = (info: ContactInfoType) => {
    const url = makeLink(info);
    if (url) window.open(url, "_blank")?.focus();
  };

  return {
    iconProps,
    mapToName,
    formatValue,
    hover,
    handleMouseEnter,
    handleMouseLeave,
    handleIconClick,
  };
};

export default useContactInfo;
