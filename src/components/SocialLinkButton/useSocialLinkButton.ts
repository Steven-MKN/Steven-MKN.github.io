import { useState } from "react";
import { colorPalette } from "../../hooks/useAppTheme";
import { SocialLinkButtonIconPropType } from "./types";

const iconProps = (hover: boolean): SocialLinkButtonIconPropType => ({
  color: colorPalette.onSurface,
  ":hover": {
    color: colorPalette.primary,
  },
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
