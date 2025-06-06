import { Chip } from "@mui/material";
import React from "react";
import { colorPalette } from "../../hooks/useAppTheme";
import { mapTechIcon } from "./index.helper";
import { TechItemType } from "./types";
import UseTechItem from "./useTechItem";

interface ITechItemProps {
  readonly item: TechItemType;
}

const TechItem: React.FC<ITechItemProps> = ({ item }) => {
  const { iconProps } = UseTechItem();
  return (
    <Chip
      sx={styles.main}
      icon={mapTechIcon(iconProps, item.tech)}
      label={item.tech + (item.version ? " " + item.version : "")}
    />
  );
};

const styles = {
  main: {
    backgroundColor: colorPalette.primary,
    color: colorPalette.onPrimary,
    marginRight: "3px",
    paddingLeft: "8px",
    paddingRight: "6px",
  },
};

export default TechItem;
