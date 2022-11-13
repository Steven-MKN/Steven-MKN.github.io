import { useState } from "react";

const useSideNavigationListItem = () => {
  const [hover, setHover] = useState(false);

  const handleMouseEnter = () => {
    setHover(true);
  };

  const handleMouseLeave = () => {
    setHover(false);
  };

  return {
    hover,
    handleMouseEnter,
    handleMouseLeave,
  };
};

export default useSideNavigationListItem;
