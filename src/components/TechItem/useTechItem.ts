import { colorPalette } from "../../hooks/useAppTheme";
import { TechItemPropType } from "./types";

const iconProps: TechItemPropType = {
  size: "20px",
  color: colorPalette.onPrimary,
};

const useTechItem = () => {
  return {
    iconProps,
  };
};

export default useTechItem;
