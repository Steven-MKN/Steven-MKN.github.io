import { useState } from "react";
import { SocialLinkButtonIconPropType } from "./types";

const iconProps = (hover: boolean): SocialLinkButtonIconPropType => ({
  color: hover ? "#3c4072" : "#171717",
});

const useSocialLinkButton = () => {
  const [hover, setHover] = useState(false);

  const handleMouseEnter = () => {
    setHover(true);
  };

  const handleMouseLeave = () => {
    setHover(false);
  };

  const handleClick = (link: string) => {
    window.open(link, "_blank")?.focus();
  };

  return {
    hover,
    handleClick,
    handleMouseEnter,
    handleMouseLeave,
    iconProps,
  };
};

export default useSocialLinkButton;
